import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from '../../../services/UserService';
 
function Industries() {
  const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId]= useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseSections, setCourseSections] = useState({});
  const [openCourseId, setOpenCourseId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userCourses, setUserCourses] = useState([]);
  const [calculatedPercentage, setCalculatedPercentage] = useState(0);
  const email =UserService.getUsername();
  const [courseCompletionPercentages, setCourseCompletionPercentages] = useState({});
 
 
 
console.log(email)
const fetchUserId = async (email) => {
  try {
    const response = await axios.get('https://moodle.dev.cream-collar.com/moodle/webservice/rest/server.php', {
      params: {
        wstoken: 'b9c96b9a061a8f7a47b24135b593d5e7', // Your web service user token
        moodlewsrestformat: 'json',
        wsfunction: 'core_user_get_users_by_field',
        field: 'email', // The field you're searching by
        values: [email], // The email address you're looking for
      },
    });
 
    if (response.data && response.data.length > 0) {
      // Assuming the first result is the user you're looking for
      const userId = response.data[0].id;
      console.log('User ID:', userId);
      setUserId(userId);
     
    } else {
      console.log('No user found with that email.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user ID by email:', error);
    // Handle error appropriately
  }
};
 
  function getVideoSourceFromDescription(description) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = description;
    const videoElement = tempElement.querySelector('video');
 
    if (videoElement) {
        const sourceElement = videoElement.querySelector('source');
        if (sourceElement) {
            return sourceElement.getAttribute('src');
        }
    }
 
    return null;
}
 
  useEffect(() => {
    // Fetch courses from your API
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`-${nodeapiBaseUrl}:5000/courses`);
        setCourses(response.data);
        fetchUserId(email);
       
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
 
    fetchCourses();
  }, []);
 
 
 
  const fetchCourseContents = async (courseId) => {
    if (openCourseId === courseId) {
      // If the clicked course is already open, close it
      setOpenCourseId(null);
    } else {
      try {
        const response = await axios.get(`${nodeapiBaseUrl}:5000/course-contents/${courseId}`);
        setCourseSections((prevSections) => ({
          ...prevSections,
          [courseId]: response.data,
        }));
        setOpenCourseId(courseId);
      } catch (error) {
        console.error('Error fetching course contents:', error);
        // Handle error appropriately
      }
    }
  };

  
 
  const fetchUserEnrolledCourses = async (userId) => {
    try {
      const response = await axios.get('https://moodle.dev.cream-collar.com/moodle/webservice/rest/server.php', {
        params: {
          wstoken: 'b9c96b9a061a8f7a47b24135b593d5e7',
          moodlewsrestformat: 'json',
          wsfunction: 'core_enrol_get_users_courses',
          userid: userId, // Pass the user ID
        },
      });
      const courseIds = response.data.map(course => course.id);
     
     
      // Now you have an array of course IDs
      console.log('Enrolled Course IDs:', courseIds);
 
      setUserCourses(response.data);
      console.log(response.data)
     
 
    } catch (error) {
      console.error('Error fetching users enrolled courses:', error);
      // Handle error appropriately
    }
  };
 
  useEffect(() => {
    if (userId) {
      fetchUserEnrolledCourses(userId); // Fetch user's enrolled courses when userId is available
    }
  }, [userId]);
 
 
  const containsVideo = (module) => {
    return module.description && module.description.includes('<video');
  };
 
  const isVideo = (module) => {
    return module.description && module.description.includes('<video');
};
 
const isQuiz = (module) => {
    return module.modname === 'quiz';
};
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }
 
 
 
  return (
    <div className='p-5'>
     
    <h3 className='mt-3' style={{ color: '#273877' }}>Welcome to CreamCollar Course Hub</h3>
    <div>
      <h4 className='mt-4 mb-3' style={{ color: '#273877' }}>List of Courses</h4>
      <p>User ID: {userId}</p>
     
      <h4 className='mt-4 mb-3' style={{ color: '#273877' }}>Enrolled Courses</h4>
      <ul style={{ color: '#F3861F' }}>
        {userCourses.map((course) => (
          <li key={course.id}>
           
           
            <strong onClick={() => fetchCourseContents(course.id)}>{course.fullname}</strong>
            <p>{course.description}</p>
            <progress value={course.progress} max="100"></progress> {course.progress}%
           
           
            {openCourseId === course.id && courseSections[course.id] && courseSections[course.id].map((section) => (
              <div key={section.id}>
                <h5>{section.name}</h5>
                {section.modules.filter(containsVideo).map((module) => (
                  <div key={module.id}>
                    {isVideo(module) && (
                                                <div>
                                                    {getVideoSourceFromDescription(module.description) && (
                                                <video
                                                controls
                                                src={getVideoSourceFromDescription(module.description)}
                                                style={{ width: '400px', height: 'auto' }}
                                                onError={(e) => {
                                                  console.error('Video playback error:', e.target.error);
                                                }}
                                              ></video>
                                            )}
                                                </div>
                                            )}
                                            {isQuiz(module) && (
                                                <div>
                                                    {/* Display quiz content here */}
                                                    <p>Quiz: {module.name}</p>
                                                    {/* You can customize the quiz display as needed */}
                                                </div>
                              )}
                  </div>
                ))}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}
 
export default Industries;