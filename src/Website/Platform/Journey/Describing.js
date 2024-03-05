import {TopicSubcomponent,ModulesSubcomponent} from './Listoffunctions';
import React, { useEffect, useState } from 'react';
 
import './journey.css'
import Videolisting from './Videolisting';
import UserService from '../../../services/UserService';
import axios from 'axios';
import { name } from 'tar/lib/types';
import oidcConfig from './oidcconfic';
import Automotive_Course_Icon from '../../../assets/img/Automotive_Course_Icon.svg';
import Journey from './Jounney';
import Group from '../../../assets/img/Group.svg'
import { NavLink } from 'react-router-dom';
 
function Describing()  {
    const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
    const [moodleSSOUrl, setMoodleSSOUrl] = useState('');
    const [oidcLoginUrl, setOidcLoginUrl] = useState('');
 
    const Valuesof_TopicSubcomponent1 ={"topic":"Automotive Industry Value Chain","description":"Video  |  10 min"};
    const Valuesof_TopicSubcomponent2 ={"topic":"utomotive Industry Value Chain","description":"Video  |  20 min"};
    const Valuesof_TopicSubcomponent3 ={"topic":"tomotive Industry Value Chain","description":"Video  |  30 min"};
    const [selectedTab, setSelectedTab] = useState('default');
    const [selectedContent,setContentChange] = useState();
    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openCourseId, setOpenCourseId] = useState(null);
    const [userId, setUserId] = useState(null);
  const [userCourses, setUserCourses] = useState([]);
  const [categories, setCategories] = useState([]);
    const email =UserService.getUsername();
    const [courseSections, setCourseSections] = useState({});
    const [course,  setCourse]= useState(0);
    const [module, setModule]= useState([]);
    const [fullName1, setFullName1] = useState('');
    const [summary, setSummary]=useState('');
    const [courseId, setCourseId]= useState([]);
    var content='';
    const [enrolledCourses, setEnrolledCourses] = useState([]);
 
    const tabClickHandler = (tabName) => {
        switch (tabName) {
          
            case 'Journey':
            content=  <Journey/>;
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
 
      useEffect(() => {
        const fetchUserId = async () => {
          try {
            console.log('email--', email);
            const response = await axios.get(`${nodeapiBaseUrl}:5000/userId?email=${email}`);
            console.log(response.data);
            setUserId(response.data.userId);
          } catch (error) {
            console.error('Error fetching user ID:', error);
          }
        };
    
        fetchUserId();
      }, [email]);
     
      useEffect(() => {
        const fetchEnrolledCourses = async () => {
          // console.log('useruser', userId)
          try {
            const response = await axios.get(`${nodeapiBaseUrl}:5000/enrolled-courses`, {
              params: {
                userId,
              },
            });
    
            setUserCourses(response.data);
            console.log('userenrolledcourses', enrolledCourses);
          } catch (error) {
            console.error('Error fetching enrolled courses:', error);
          }
        };
    
        if (userId) {
          fetchEnrolledCourses();
        }
        
      }, [userId]);
      
      const fetchCourseContents = async (courseId) => {
       
          try {
            const response = await axios.get(`${nodeapiBaseUrl}:5000/course-contents/${courseId}`);
           
           
            setCourses(response.data)
            console.log(courses);
            setModule(response.data.length);
          } catch (error) {
            console.error('Error fetching course contents:', error);
            // Handle error appropriately
          }
        
      };

         
      useEffect(() => {
        // Fetch courses from your API
        const fetchCourses = async () => {
          try {
            const response = await axios.get(`${nodeapiBaseUrl}:5000/courses`);
            setCourses(response.data);
            console.log(response.data)
          
            for (const course of response.data) {
              if (course.fullname === 'Awareness on Automotive Industry') {
                
                const courseId = course.id;
                const courseSummary = course.summary;
                const courseFullName = course.fullname;
            
                // Now you have the courseId, courseSummary, and courseFullName
                console.log('Course ID:', courseId);
                console.log('Course Summary:', courseSummary);
                console.log('Course Full Name:', courseFullName);
            
                // You can set these values in your state variables if needed
                setCourseId(courseId);
                setSummary(courseSummary);
                setFullName1(courseFullName);
            
                break; // Exit the loop once you find the course
              }
            }
           
           
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
     
        fetchCourses();
      }, []);

      useEffect(() => {
        console.log('course', course)
        
        if (courseId) {
          fetchCourseContents(courseId); // Fetch user's enrolled courses when userId is available
        }
      }, [courseId]);
 
      useEffect(() => {
  
      const fetchCourseCategories = async (userId) => {
       
          console.log('useruser', userId)
          try {
            const response = await axios.get(`${nodeapiBaseUrl}:5000/course-category`, {
              params: {
                userId,
              },
            });
    
            setCategories(response.data);
            console.log('enrolled1', response.data);
          } catch (error) {
            console.error('Error fetching enrolled courses:', error);
          }
        
      };
   
            
          fetchCourseCategories(); // Fetch user's enrolled courses when userId is available
        
      }, []);

      

      const generateMoodleCourseUrl = (courseId) => {
        return `${oidcConfig.moodleBaseUrl}/course/view.php?id=${courseId}&sectionid=123`;
      };

      const onCourseClick = (courseId) => {
        console.log(courseId);
        if (courseId) {
        const url = generateMoodleCourseUrl(courseId);
        
        window.open(url, '_blank', 'noopener noreferrer');
        }
      };
       
      useEffect(() => {
        const oidcLoginUrl = `${oidcConfig.authority}/realms/creamcollar/protocol/openid-connect/auth?client_id=${oidcConfig.clientId}&redirect_uri=${oidcConfig.redirectUri}&scope=${oidcConfig.scope}&response_type=${oidcConfig.responseType}`;
    
        setMoodleSSOUrl(oidcLoginUrl);
      }, []);
    
      const handleLoginClick = () => {
        console.log('Clicked! Moodle SSO URL:', moodleSSOUrl);
        // Open Moodle SSO URL in a new tab
        if (moodleSSOUrl) {
          window.open(moodleSSOUrl, '_blank', 'noopener noreferrer');
        }
      };
 
      function CourseSummary({ summary }) {
        // Using dangerouslySetInnerHTML to render HTML content
        return <div style={{alignSelf: 'stretch', color: '#4A5965', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}} dangerouslySetInnerHTML={{ __html: summary }} />;
    }
  console.log(courses)

  
    return (
       <div>

        
<div style={{width:'100%',background:'#F6F9FC',display:'block'}}>
    <div className="col-md-12">
       <div className="row" style={{margin:0}}>
       <div className="col-md-12" style={{padding:0}}>
    <div style={{width: '100%', height: '52px', padding:'2% 5%', background: '#F6F9FC', borderBottom: '1px #DDE1E6 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
     <NavLink to="/dashboard/journey" style={{textDecoration:'none'}}>
      <button style={{padding: 0}} className="buttonbkcolornone1"><img  src={Group} style={{marginTop: 0,width: 18, height: 15,marginTop:'-3px'}} alt="" /></button>
      </NavLink>
    <div><i  className="bi bi-chevron-right" style={{fontSize:'12px'}}></i></div>
    <div style={{color: '#0F62FE', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word',marginTop:'2px'}}>Automotive Industry Awareness Learning Path</div>
    </div>
    </div>
  </div>
  <div className="" style={{width:'100%',display:'block',padding:0,margin:0}}>
  <div className="row" style={{height: 'auto',margin:0 }}>
  <div className="col-md-12 " style={{padding:0}}>
<div style={{borderRadius: 20,height: 'auto', padding: 32, margin: '64px 32px',  background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', color: '#697077', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>LEARNING PATH</div>
            <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{color: '#00213D', fontSize: 28, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>
                 
        {/* {userCourses.map((course) => (
          <div key={course.id} >        
            <h1 style={{textAlign: 'start',alignSelf: 'stretch', color: '#00213D', fontSize: 28, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>{course.fullname}</h1>
             
                   </div>
        ))} */}
        {fullName1}
     </div>
     <div class="div_has_ptag" style={{color: '#00213D', fontSize: 28, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>
                 
        {/* {userCourses.map((course) => (
          <div key={course.id} >        
            <CourseSummary summary={course.summary} />  
                   </div>
        ))} */}
        <CourseSummary summary={summary} /> 
     </div>
               
            </div>
           
        </div>
        
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: '#131313', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Key Skills:</div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex',flexWrap:'wrap'}}>
                <div style={{padding:'8px 12px',borderRadius:8, background: '#F2F4F8', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div style={{color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>UX Design</div>
                </div>
                <div style={{padding:'8px 12px',borderRadius:8, background: '#F2F4F8', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div style={{color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Protoyping</div>
                </div>
                <div style={{padding:'8px 12px',borderRadius:8,background: '#F2F4F8', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div style={{color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Wireframing</div>
                </div>
                <div style={{padding:'8px 12px',borderRadius:8, background: '#F2F4F8', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div style={{color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>UX Research</div>
                </div>
                <div style={{padding:'8px 12px',borderRadius:8, background: '#F2F4F8', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div style={{color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Usability Testing</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{display: 'inline-flex',    justifyContent: 'space-between', width: '100%', alignItems: 'flex-end'}}>
    <button onClick={handleLoginClick} style={{padding:'12px 32px', background: '#0F62FE', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}} >Start Learning</div>
    </button>
    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 20, display: 'inline-flex'}}>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            
            <div style={{color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
           
            <div>
              {/* {categories.map(category => (   */}
                {/* <div style={{display:'inline-flex',gap:8,alignItems:'center'}} key={category.id} ><span>{module} Modules</span><span style={{width:'8px',height:'8px', background: '#E2EBF3', borderRadius: 9999}} /><span>{category.name}</span>  <span style={{width:'8px',height:'8px', background: '#E2EBF3', borderRadius: 9999}} />   <span>3 hours</span></div> */}
              {/* ))}  this comment due to geting double value ex:starter,beginner*/}
              <div style={{display:'inline-flex',gap:8,alignItems:'center'}}  ><span>{module} Modules</span><span style={{width:'8px',height:'8px', background: '#E2EBF3', borderRadius: 9999}} /><span>Beginner</span>  <span style={{width:'8px',height:'8px', background: '#E2EBF3', borderRadius: 9999}} />   <span>3 hours</span></div>
              
            </div>
               </div>
               </div>
            {/* <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'flex'}}>
                <div style={{color: '#697077', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>4.5/5 rating | 100+reviews</div>
            </div> */}
        </div>
        </div>
</div>
  </div>
  </div>  
  <div className="row" style={{padding:'0 32px 32px 32px', height: 'auto',display:'inline-flex',marginBottom:'5%'}}>
  <div className="col-md-12" >
  <div style={{padding:32 ,paddingTop:0, width: 'auto',  position: 'relative', color: '#00213D', fontSize: 24, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Learning Path Journey</div>
  </div>
  
  <div className="col-md-8">
  <div style={{height: 'auto', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20,display:'inline-flex'}}>
         
  {Array.isArray(courses) && courses.map((course, index) => (
        <ModulesSubcomponent content={course} target={index} key={index} />
      ))}
             
    </div>
    </div>
    
    <div className="col-md-4 margincontrolmbview">
    <div className="desktopview_sticky" >
    <div style={{marginLeft: 30,borderRadius: 20,height: 'auto', padding:32, position: 'relative', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            
        <img src={Automotive_Course_Icon} style={{width: 48, height: 48,}} alt="" />
            <div style={{flex: '1 1 0', color: '#00213D', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Automotive Industry Awareness</div>
        </div>
        {userCourses.map((course) => (
            <div key={course.id} style={{flexDirection: 'column',alignSelf: 'stretch', justifyContent: 'flex-start', display: 'inline-flex'}}>
                  <progress style={{height: 8, width: '100%',marginBottom:8,  borderTopRightRadius: 10,  borderWidth: '1px'}} value={course.progress} max="100"></progress>
                  <div style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',wordWrap: 'break-word'}}>
                  {Math.round(course.progress)}% completed
                </div>     
                <button onClick={() => onCourseClick(course.id)} style={{justifyContent: 'center',marginTop: 32, padding:'12px 32px', background: '#0F62FE', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
                        {course.progress === 100 ? "Rewatch the Course" : "Resume Learning"}
                    </div>
                </button>
            </div>
        ))}
    </div>
</div>
     </div>
    </div>
    </div>
 
    </div>
     
  </div>
  </div>
  
  </div>
    );
  }
 
  export default Describing;


  