import React, { useState, useEffect } from 'react';
import star from '../../../assets/img/star.png';
import avatar from '../../../assets/img/Avatar.svg';
import Automotive_Course_Icon from '../../../assets/img/Automotive_Course_Icon.svg';
import completed from '../../../assets/img/Check_Icon.png';
// import notstarted from '../../../assets/img/material-symbols_lock.png';
import { NavLink , Link} from 'react-router-dom';
import thunder from '../../../assets/img/Frame_16007.png';
import polygon from '../../../assets/img/Polygon_6.png';
import Describing from './Describing';
import Videolisting from './Videolisting';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import UserService from '../../../services/UserService';
import Right_Arrow_Icon from '../../../assets/img/Right_Arrow_Icon.png';
import Profile_page from '../../Profile/Profile_page';

function Journey()
{
    const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
    const [selectedTab, setSelectedTab] = useState('default');
    const [selectedContent,setContentChange] = useState();

        //Moodle API---------------------------------------------------------------

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
    const [summary, setSummary]=useState('');
    const [courseCompletionPercentages, setCourseCompletionPercentages] = useState({});
    const [courseName, setCourseName]= ('Automotive Industry Awareness');
    const [fullName1, setFullName1] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    
       
        //Moodle Api const file -----------------------------------------------------
    
        //Moodle api call-------------------------------- --------------------
        console.log(email)

                    
// const fetchUserId = async (email) => {
//   try {
//     const response = await axios.get('https://moodle.dev.cream-collar.com/moodle/webservice/rest/server.php', {
//       params: {
//         wstoken: 'b9c96b9a061a8f7a47b24135b593d5e7', // Your web service user token
//         moodlewsrestformat: 'json',
//         wsfunction: 'core_user_get_users_by_field',
//         field: 'email', // The field you're searching by
//         values: [email], // The email address you're looking for
//       },
//     });
 
//     if (response.data && response.data.length > 0) {
//       // Assuming the first result is the user you're looking for
//       const userId = response.data[0].id;
//       console.log('User ID:', userId);
//       setUserId(userId);
     
//     } else {
//       console.log('No user found with that email.');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching user ID by email:', error);
//     // Handle error appropriately
//   }
// };
 
//   function getVideoSourceFromDescription(description) {
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = description;
//     const videoElement = tempElement.querySelector('video');
 
//     if (videoElement) {
//         const sourceElement = videoElement.querySelector('source');
//         if (sourceElement) {
//             return sourceElement.getAttribute('src');
//         }
//     }
 
//     return null;
// }
 
  useEffect(() => {
    // Fetch courses from your API
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${nodeapiBaseUrl}:5000/courses`);
        setCourses(response.data);
        console.log(response.data)
      
        for (const course of response.data) {
          
          if (course.fullname === 'Awareness on Automotive Industry') {
            console.log('Current Course:', course.fullname);
            const courseId = course.id;
            const courseSummary = course.summary;
            const courseFullName = course.fullname;
            const courseCategory=course.categoryid;
        
            // Now you have the courseId, courseSummary, and courseFullName
            console.log('Course ID:', courseId);
            console.log('Course Summary:', courseSummary);
            console.log('Course Full Name:', courseFullName);
            console.log('course.category:', course.categoryid);
        
            // You can set these values in your state variables if needed
            setCourseId(courseId);
            setSummary(courseSummary);
            setFullName1(courseFullName);
            setCategoryId(courseCategory);
        
            break; // Exit the loop once you find the course
          }
        }
        // fetchUserId(email);
       
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
 
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchCategoryName = async () => {
      console.log(courseId)
      try {
        const response = await axios.get(`${nodeapiBaseUrl}:5000/category`, {
          params: {
            courseId,
          },
        });
  
        const categoryName = response.data;
        setCategoryName(categoryName);
        console.log('Category Name:', categoryName);
      } catch (error) {
        console.error('Error fetching category name:', error);
      }
    };
  
    // Call the function to fetch the category name when needed
    
    fetchCategoryName();
  }, [courseId]);


  console.log(userId, courseId);
 
 
 
  // const fetchCourseContents = async (courseId) => {
  //   if (openCourseId === courseId) {
  //     // If the clicked course is already open, close it
  //     setOpenCourseId(null);
  //   } else {
  //     try {
  //       const response = await axios.get(`${nodeapiBaseUrl}:5000/course-contents/${courseId}`);
  //       setCourseSections((prevSections) => ({
  //         ...prevSections,
  //         [courseId]: response.data,
  //       }));
  //       setOpenCourseId(courseId);
  //     } catch (error) {
  //       console.error('Error fetching course contents:', error);
  //       // Handle error appropriately
  //     }
  //   }
  // };
 
  // const fetchUserEnrolledCourses = async (userId) => {
  //   try {
  //     const response = await axios.get('https://moodle.dev.cream-collar.com/moodle/webservice/rest/server.php', {
  //       params: {
  //         wstoken: 'b9c96b9a061a8f7a47b24135b593d5e7',
  //         moodlewsrestformat: 'json',
  //         wsfunction: 'core_enrol_get_users_courses',
  //         userid: userId, // Pass the user ID
  //       },
  //     });


  //     const courseIds = response.data.map(course => course.id);
     
     
  //     // Now you have an array of course IDs
  //     console.log('Enrolled Course IDs:', courseIds);
 
  //     setUserCourses(response.data);
  //     console.log(response.data)
     
 
  //   } catch (error) {
  //     console.error('Error fetching users enrolled courses:', error);
  //     // Handle error appropriately
  //   }
  // };

  // const enrollUserInCourse = async (userId, courseId) => {
  //   try {
  //     const response = await axios.get('https://moodle.dev.cream-collar.com/moodle/webservice/rest/server.php', {
  //       params: {
  //         wstoken: 'b9c96b9a061a8f7a47b24135b593d5e7', // Your web service user token
  //         moodlewsrestformat: 'json',
  //         wsfunction: 'enrol_manual_enrol_users',
  //         courseid: courseId,
  //         userid: userId,
          
  //       },
  //     });

  //     if (response.data && response.data.status === true) {
  //       console.log('User enrolled in the course successfully.');
  //       // Handle enrollment success, e.g., show a success message.
  //     } else {
  //       console.log('Enrollment failed:', response.data.error);
  //       // Handle enrollment failure, e.g., show an error message.
  //     }
  //   } catch (error) {
  //     console.error('Error enrolling user in the course:', error);
  //     // Handle error appropriately
  //   }
  // };

  // useEffect(() => {
  //   if (userId && courseId) {
  //     enrollUserInCourse(userId, courseId);
  //   }
  // }, [userId, courseId]);

 
  // useEffect(() => {
  //   if (userId) {
  //     fetchUserEnrolledCourses(userId); // Fetch user's enrolled courses when userId is available
  //   }
  // }, [userId]);
 
 
  // const containsVideo = (module) => {
  //   return module.description && module.description.includes('<video');
  // };
 
//   const isVideo = (module) => {
//     return module.description && module.description.includes('<video');
// };
 
// const isQuiz = (module) => {
//     return module.modname === 'quiz';
// };
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }
        
    

    var content='';
    const tabClickHandler = (tabName) => {
        switch (tabName) {
          

            case 'Describing':
          content= <Describing/>;
          break;
          case 'Profile':
          content= <Profile_page/>;
          break;
            case 'Videolisting':
            content= <Videolisting/>;
            break;
          default:
            setSelectedTab('default');
            break;
        }
        setSelectedTab(tabName);
        setContentChange(content)
        
      };

      

      function CourseSummary({ summary }) {
        // Using dangerouslySetInnerHTML to render HTML content
        return <div className="div_has_ptag" style={{alignSelf: 'stretch', color: '#697077', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word',margin:0}} dangerouslySetInnerHTML={{ __html: summary }} />;
    }
    
      
 return( 
   <div>
 <div className="rightContains">
    <div className="journeytop">
      <div className="jourrneytitle" style={{margin:0}}>Your Learning Journey</div>
    </div>

    <div className="journeyflow row" >
    
      <div className="col-md-8 pull col-sm-12 col-xs-12 " style={{width:'63.8%',paddingLeft:0, paddingRight:'0%'}}>
        
        <div style={{width: '100%', height: 'auto', marginTop:'32px', padding: 32,borderRadius:20, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex',boxShadow: '0px 8px 40px rgba(9, 44, 76, 0.08)'}}>
    <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',  display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                <img src={Automotive_Course_Icon} style={{width: 43, height: 43,}} alt="" />
                 <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>COURSE</div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
                            
                                <div key={courseId} >
                                    <h1 style={{alignSelf: 'stretch', color: '#00213D', fontSize: 20, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word',margin:0}}>{fullName1} </h1>
                                </div>
                            
                        
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}><CourseSummary summary={summary} /></div>
    </div>
    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-end', display: 'inline-flex',gap:'10%'}}>
    
      <Link to="/dashboard/describing" style={{textDecoration:'none'}}>
        <button style={{padding:'12px 32px', background: '#0F62FE', borderRadius:8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Explore This Course</div>
        </button>
        </Link>
    
        <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>  
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>{categoryName}</div>
          <div style={{width: 4, height: 4, background: '#005BE2', borderRadius: 9999}} />
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 hours</div>
        </div>
    </div>
        </div>

        <div style={{width: '100%', height: 'auto', marginTop:'32px', padding: 32, borderRadius:20, background: '#E2EBF3', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <img src={Automotive_Course_Icon} style={{width: 43, height: 43,}} alt="" />
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',  display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>ASSESSMENT</div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Career Assessment</div>
                    </div>
                </div>
                {/* <div style={{width: 24, height: 24, position: 'relative'}}>
                    <img src={notstarted} alt=""></img>
                </div> */}
                <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: '#F2F7FE', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>COMING SOON</div>
</div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>The intent of this awareness course is to help the students understand all that is needed to know about the industry in which they will work in the future and progress their career. </div>
    </div>
    <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 25, display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>  
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Beginner</div>
          <div style={{width: 4, height: 4, background: '#4A5965', borderRadius: 9999}} />
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 hours</div>
        </div>
    </div>
        </div>

        <div style={{width: '100%', height: 'auto', marginTop:'32px', padding: 32, borderRadius:20, background: '#E2EBF3', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <img src={Automotive_Course_Icon} style={{width: 43, height: 43,}} alt="" />
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',  display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>ASSESSMENT</div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>STEM Assessment</div>
                    </div>
                </div>
                {/* <div style={{width: 24, height: 24, position: 'relative'}}>
                    <img src={notstarted} alt=""></img>
                </div> */}
                <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: '#F2F7FE', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>COMING SOON</div>
</div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>The intent of this awareness course is to help the students understand all that is needed to know about the industry in which they will work in the future and progress their career. </div>
    </div>
    <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 25, display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>  
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Beginner</div>
          <div style={{width: 4, height: 4, background: '#4A5965', borderRadius: 9999}} />
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 hours</div>
        </div>
    </div>
        </div>

        <div style={{width: '100%', height: 'auto', marginTop:'32px', padding: 32, borderRadius:20, background: '#E2EBF3', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <img src={Automotive_Course_Icon} style={{width: 43, height: 43,}} alt="" />
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',  display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word',  fontstyle: 'normal'}}>ASSESSMENT</div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word', fontstyle: 'normal'}}>Role Based Learning</div>
                    </div>
                </div>
                {/* <div style={{width: 24, height: 24, position: 'relative'}}>
                    <img src={notstarted} alt=""></img>
                </div> */}
                <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: '#F2F7FE', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>COMING SOON</div>
</div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>The intent of this awareness course is to help the students understand all that is needed to know about the industry in which they will work in the future and progress their career. </div>
    </div>
    <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 25, display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>  
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Beginner</div>
          <div style={{width: 4, height: 4, background: '#4A5965', borderRadius: 9999}} />
          <div style={{color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 hours</div>
        </div>
    </div>
        </div>

      </div>
      <div className="col-md-4 push col-sm-11 col-xs-11" style={{padding:'0',paddingLeft:'32px'}}>
        <div className="desktopview_sticky" >
     {/* <div style={{width: '100%', height: 'auto', marginTop:'5%', padding: 32, background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px #EBEDF0 solid', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
    <div style={{flex: '1 1 0', height: 'auto', justifyContent: 'center', alignItems: 'center', gap: 12, display: 'flex'}}>
        <div style={{width: 40, height: 40, position: 'relative'}}>
            <img src={thunder} alt="" style={{width: 28.89, height: 40, left: 5.50, top: 0, position: 'absolute', }} />
        </div>
        <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>2 Days</div>
            <div style={{alignSelf: 'stretch', color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>CURRENT STREAK</div>
        </div>
    </div>
    <div style={{ alignSelf: 'stretch',  transformOrigin: '0 0', border: '1px #DDE1E6 solid'}}></div>
    <div style={{flex: '1 1 0', height: 45, justifyContent: 'center', alignItems: 'center', gap: 12, display: 'flex'}}>
        <div style={{width: 40, height: 40, position: 'relative'}}>
            <img src={polygon} alt="" />
            <div style={{left: 7, top: 7, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>XP</div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
            <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>300 XP</div>
            <div style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>TOTAL XP EARNED</div>
        </div>
    </div>
</div> */}
<div style={{width: '110%', height: 'auto', marginTop:'32px', padding:'32px',background: 'white', borderRadius: 20, border: '1px #EBEDF0 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 28, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
        <div style={{width: 83, height: 87, position: 'relative'}}>
         <div ><img src={avatar} className="circular_status" /></div> 
          <div style={{ width: 84, height: 84,transform:'rotateZ(42deg)' }}>
  <CircularProgressbar value={70} maxValue={131}  />
</div>
            <div style={{width: 50, height: 20, paddingTop: 4, paddingBottom: 2, paddingLeft: 12, paddingRight: 12, left: 17, top: 0, position: 'absolute', background: 'white', borderRadius: 16, border: '1px #EBEDF0 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{color: '#27AE60', fontSize: 12, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>70%</div>
            </div>
        </div>
        <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Complete Your Profile</div>
            <div style={{alignSelf: 'stretch', color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Completing your profile helps us recommend the right job role for you!</div>
        </div>
    </div>
    <div className="nav-item">
       <Link to="/dashboard/profile" style={{textDecoration:'none'}}>
      <div  className={(selectedTab=='Profile' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                          <button className="buttonbkcolornone2" style={{padding:0, color: '#0B6AEA', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}} ><span>View & Update Profile</span> <img src={Right_Arrow_Icon} style={{marginLeft: 6, height: 22}} alt="" /></button>
                        </div>
                        </Link>
                      </div>
</div>
       </div>
      </div>
    </div>
  </div>
  
  </div> 
  );
}

export default Journey;