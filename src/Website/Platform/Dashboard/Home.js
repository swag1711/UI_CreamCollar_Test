import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './dashboardstyle.css';
import home from '../../../assets/img/home.png';
import users from '../../../assets/img/users.png';
import vector from '../../../assets/img/vector.png';
import pictureedit from '../../../assets/img/picture-edit.png';
import bell from '../../../assets/img/bell.png';
import Journey from '../Journey/Jounney';
import Industry from '../Industry/Industries';
import Notification from '../Notification/Notification';
import Opportunity from '../Opportunity/Opportunity';
import Account from '../Account/Account';

import Logout from '../../Logout';
import Describing from '../Journey/Describing';
import Videolisting from '../Journey/Videolisting';
import logo from '../../../assets/img/CC_Logo.svg';
import avatar from '../../../assets/img//Avatar.svg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import setting_img from '../../../assets/img/iconamoon_profile-light.png';
import logout_img from '../../../assets/img/line-md_logout.png';
import Right_Arrow_Icon from '../../../assets/img/Right_Arrow_Icon.png';
import UserService from '../../../services/UserService';
import Profile_page from '../../Profile/Profile_page';
function Home({contentdes})  {
    const [isTimes, setIsTimes] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Journey');
    const [selectedContent,setContentChange] = useState(contentdes);
    const [ sidebaractive,setsidebaractive] = useState(0);
    const [activeprofilebar,setactiveprofilebar] = useState(0);
    const [profile_click,setprofile_click] = useState(0);
    const [noti_click,setnoti_click] = useState(0);
    
    const handleClickOutside = (event) => {
      const profileMenu = document.getElementById("profileMenu"); // Ensure you have an ID on your div
      if (profileMenu && !profileMenu.contains(event.target)) {
          // Close the profile menu
          setprofile_click(false);
      }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Handleusericon = () => {
    setactiveprofilebar(!activeprofilebar);
  }
  const tabClickHandler = (tabName) => {

    let content = '';
    switch (tabName) {

      case 'Journey':
        content = <Journey />;
        break;
      case 'Industry':
        content = <Industry />;
        break;
      case 'Describing':
        content = <Describing />;
        break;
      case 'Opportunity':
        content = <Videolisting />;
        break;
      case 'Account':
        content = <Account />;
        break;
      case 'Profile':
        content = <Profile_page />;
        console.log(content);
        break;
      case 'Videolisting':
        content = <Videolisting />;
        break;
      default:
        content = 'Select a tab to view content';
        break;
    }
    console.log("-----------------", content)
    setContentChange(content)
    setSelectedTab(tabName);


  };
  const handleToggle = () => {
    setIsTimes(!isTimes);
  };
  const FullName = localStorage.getItem('fullname')
  const handlesidebar = () => {
    setsidebaractive(!sidebaractive);
  }
  return (
    <div className="mycontainer" >
      <div className="row " style={{ padding: 0, margin: 0 }} >
        <div className="col-lg-12" style={{ zIndex: 2000, width: '100%', height: '80px', position: 'relative', background: '#F2F4F8' }}>
          <div style={{ width: '100%', left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', borderBottom: '1px #E2EBF3 solid' }}>
            <div style={{ width: 68, height: 80, paddingBottom: '1%', paddingLeft: 14, paddingRight: 14, background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'flex' }}>
              <div style={{ width: 40, height: 40, position: 'relative' }}>
                {/* <div style={{width: 30, height: 20, left: 5,  position: 'absolute'}} onClick={handlesidebar}><i class="bi bi-list" style={{background:'none',fontSize:36}}></i></div> */}
            </div>
            
        </div>
        
        <div style={{width:'100%',height: 80,  background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div style={{flex: '1 1 0', height: 52, justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex'}}>
            <NavLink to="/dashboard/journey" style={{textDecoration:'none'}}> 
        <button  className={`${selectedTab === 'Profile' ? "active" : 'none'} buttonbkcolornone`} style={{padding:0, color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
            <img src={logo} alt="" />
        </button>
        </NavLink>
           </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'flex',padding:'0 32px'}}>
                {/* <div style={{width: 24, height: 24, position: 'relative'}}>
                    <button  className="buttonbkcolornone" onClick={()=>setnoti_click(!noti_click)} style={{padding:0,width: 20, height: 21.50, left: 2, top: 1, position: 'absolute'}}><img src={bell} alt="" /></button>
                    
                </div> */}
                {/* <div style={{width: 24, height: 24, position: 'relative'}}>
                    <button  className="buttonbkcolornone"  data-bs-toggle="modal"     data-bs-target="#noti_click" onClick={()=>setnoti_click(!noti_click)} style={{padding:0,width: 20, height: 21.50, left: 2, top: 1, position: 'absolute'}}><img src={bell} alt="" /></button>
                    
                </div> */}
                <div style={{ width: 48, height: 48, position: 'relative' }} onClick={() => Handleusericon()}>
                  <button className="buttonbkcolornone" onClick={() => setprofile_click(!profile_click)}>
                    <img src={avatar} alt="" style={{ width: 48, height: 48, left: 0, top: 0, position: 'absolute', background: 'green', borderRadius: 9999 }} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* className={ `col-md-4 ${noti_click?'':"displaynone"}`}  */}
      {/* <div className={ `col-md-4`}  style={{ height: '100%',position:'absolute',zIndex:1,top:'80px',right:'0%', padding: 32, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}> */}
      <div className="model " id="noti_click">
        <div className={` col-md-4 ${noti_click ? '' : "displaynone"}`} style={{ height: '100%', position: 'absolute', zIndex: 2000, top: '80px', right: '0%', padding: 32, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
          <div className=" modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div style={{ alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                  <div style={{ color: '#00213D', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Notifications</div>
                  <div style={{ alignSelf: 'stretch', borderBottom: '1px #E2EBF3 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                    <div style={{ paddingTop: 10, paddingBottom: 10, border: '1px #E2EBF3 solid', borderBottom: '2px #E2EBF3 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'flex' }}>
                      <div style={{ color: '#0B6AEA', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Unread</div>
                      <div style={{ width: 18, height: 18, paddingLeft: 5.50, paddingRight: 5.50, paddingTop: 0.50, paddingBottom: 0.50, background: '#DA1E28', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                        <div style={{ textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>3</div>
                      </div>
                    </div>
                    <div style={{ color: '#4A5965', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>All notifications</div>
                  </div>
                </div>
                <div style={{ alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                    <div style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>TODAY</div>
                    <div style={{ alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
                      <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                        <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }}>
                          <div style={{ alignSelf: 'stretch', color: '#00213D', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>This is the notification title</div>
                          <div style={{ alignSelf: 'stretch', color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>This is the notification content which can be quite long so that i can cross over to multiple lines</div>
                        </div>
                        <div style={{ width: 32, height: 32, background: '#E2EBF3', borderRadius: 9999 }} />
                      </div>
                      <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                        <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }}>
                          <div style={{ alignSelf: 'stretch', color: '#00213D', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>This is the notification title</div>
                          <div style={{ alignSelf: 'stretch', color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>This is the notification content which can be quite long so that i can cross over to multiple lines</div>
                        </div>
                        <div style={{ width: 32, height: 32, background: '#E2EBF3', borderRadius: 9999 }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                    <div style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>11 DEC 2023</div>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                      <div style={{ width: 'auto', height: 81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', color: '#00213D', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>This is the notification title</div>
                        <div style={{ alignSelf: 'stretch', color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>This is the notification content which can be quite long so that i can cross over to multiple lines</div>
                      </div>
                      <div style={{ width: 32, height: 32, background: '#E2EBF3', borderRadius: 9999 }} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="profileMenu" className={`${profile_click ? '' : "displaynone"}`} style={{ width: 'auto', height: 'auto', position: 'absolute', zIndex: 1, padding: '32px', backgroundColor: 'white', top: '80px', right: '0%', boxShadow: '0px 8px 16px -12px rgba(9, 44, 76, 0.22)', borderBottomLeftRadius: 20, overflow: 'hidden', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
        <div style={{ paddingBottom: 20, borderBottom: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
          <div style={{ justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
            <div style={{ width: 96, height: 100.63, position: 'relative' }}>
              <div ><img src={avatar} className="circular_status" /></div>
              <div style={{ width: 84, height: 84, transform: 'rotateZ(42deg)' }}>
                <CircularProgressbar value={70} maxValue={131} />
              </div>
              <div style={{ width: 50, height: 20, paddingTop: 4, paddingBottom: 2, paddingLeft: 12, paddingRight: 12, left: 17, top: 0, position: 'absolute', background: 'white', borderRadius: 16, border: '1px #EBEDF0 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                <div style={{ color: '#27AE60', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>70%</div>
              </div>
            </div>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: '#00213D', fontSize: 20, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}> <strong className='pb-3'>{FullName}</strong></div>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                        <div className="nav-item">  <div onClick={() => {
    
    setprofile_click(!profile_click);
}}className={(selectedTab=='Profile' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                         <NavLink to="/dashboard/profile" style={{textDecoration:'none'}}>
                         <button className="buttonbkcolornone2" style={{color: '#0B6AEA', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}} ><span>View & Update Profile</span> <img src={Right_Arrow_Icon} style={{marginLeft: 6, height: 22}} alt="" /></button>
                         
                          </NavLink>
                           </div>
                      </div>
                      </div>
                    {/* <div style={{width: 24, height: 24, position: 'relative', background: '#0B6AEA', borderRadius: 20}}>
                        <div style={{width: 9.45, height: 4.95,  top: 19, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', }}><i  className="bi bi-chevron-down" style={{color:'white'}}></i></div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: 'stretch', height: 45, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
          {/* <div style={{alignSelf: 'stretch', paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
           <div style={{width: 24, height: 24, position: 'relative'}}>
                <img src={setting_img} ></img>
            </div>
            <div style={{flex: '1 1 0', color: '#00213D', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Account Settings</div>
        </div>  */}

          <button className="buttonbkcolornone" style={{ alignSelf: 'stretch', width: 20, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
            <div style={{ width: 24, height: 24, position: 'relative' }}>  <img src={logout_img} alt="Logout" />  </div>  <div style={{ color: '#00213D', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }} onClick={() => UserService.doLogout()}>Logout  </div>
          </button>
        </div>

      </div>
      <div className="row" noGutters={true} style={{ padding: 0, margin: 0 }}>

        <div className={`${sidebaractive ? ' leftsidebar col-md-2 col-sm-12 col-xs-12' : 'leftsidebarnone'}`}>

          <div className="lowerdevicehide" style={{ width: '100%' }} >
            <div className="nav-item" style={{ textDecoration: 'none', width: '100%' }}> <div onClick={() => tabClickHandler('Journey')} className={(selectedTab == 'Journey' ? "active" : 'none')} style={{ textDecoration: 'none', width: '100%' }}>
              <div className="menubar-container">
                <div className="menu-items ">
                  <img src={home} alt="" />
                  <span>My journey</span>
                </div>
              </div>
            </div> </div>
            <div className="nav-item"> <div onClick={() => tabClickHandler('Industry')} className={(selectedTab == 'Industry' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
              <div className="menubar-container">
                <div className="menu-items">
                  <img src={pictureedit} alt="" />
                  <span>Course Hub</span>
                </div>
              </div>
            </div> </div>
            <div className="nav-item"> <div onClick={() => tabClickHandler('Opportunity')} className={(selectedTab == 'Opportunity' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
              <div className="menubar-container">
                <div className="menu-items">
                  <img src={vector} alt="" />
                  <span>Opportunities</span>
                </div>
              </div>
            </div> </div>
            <div className="nav-item"> <div onClick={() => tabClickHandler('Describing')} className={(selectedTab == 'Describing' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
              <div className="menubar-container">
                <div className="menu-items">
                  <img src={bell} alt="" />
                  <span>Describing</span>
                </div>
              </div>
            </div> </div>
            <div className="nav-item"> <div onClick={() => tabClickHandler('Account')} className={(selectedTab == 'Account' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
              <div className="menubar-container">
                <div className="menu-items">
                  <img src={users} alt="" />
                  <span>My account</span>
                </div>
              </div>
            </div> </div>
            <div className="nav-item"> <div onClick={() => tabClickHandler('Profile')} className={(selectedTab == 'Profile' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
              <div className="menubar-container">
                <div className="menu-items">
                  <img src={users} alt="" />
                  <span>Profile</span>
                </div>
              </div>
            </div> </div>
          </div>


        </div>

        <div className={` ${sidebaractive ? 'col-md-10 rightContainer' : ' col-md-12 rightContainer'}  `} style={{ padding: 0 }}>
          {selectedContent}
        </div>
      </div>
      {/* <div
          className="offcanvas offcanvas-top"
          style={{ top: 0 }}
          tabIndex="-1"
          id="dashboard"
          aria-labelledby="menu"
          data-bs-backdrop="true"
          data-bs-scroll="true"
        >
          <div className="offcanvas-body p-0">
            <ul className="left-menu">
              <li className="nav-item">
              <div className="headercontrol1">
          <div className=" logotopiccontainer col-xs-12">
            
            <div className="topic">Cream collar</div>
          </div>
          <li
              className="menu-btn col-xs-3"
              style={{ float: "right" }}
              onClick={handleToggle}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#dashboard"
              role="button"
              aria-controls="menu"
            >
              
              <div className="nav-link" >
                <i className={`las la-bars ${isTimes ? "la-times" : ""}`} style={{float:"right"}}></i>
              </div>
            </li>
          </div>
              </li>
              <li className="nav-item">
              <div onClick={() => tabClickHandler('Journey')} className={(selectedTab=='Journey' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                <div className="menu-items">
                  <img src={home} alt="" />
                  <span>My journey</span>
                </div>
                </div> 
              </li>
              <li className="nav-item">
             <div onClick={() => tabClickHandler('Industry')} className={(selectedTab=='Industry' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                <div className="menu-items">
                  <img src={pictureedit} alt="" />
                  <span>Industry profile</span>
                </div>
                </div> 
              </li>
              <li className="nav-item">
              <div onClick={() => tabClickHandler('Opportunity')} className={(selectedTab=='Opportunity' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                <div className="menu-items">
                  <img src={vector} alt="" />
                  <span>Opportunities</span>
                </div>
                </div> 
              </li>
              <li className="nav-item">
                <div onClick={() => tabClickHandler('Notification')} className={(selectedTab=='Notification' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                <div className="menu-items">
                  <img src={bell} alt="" />
                  <span>Notifications</span>
                </div>
                </div> 
              </li>
              <li className="nav-item">
                <div onClick={() => tabClickHandler('Account')} className={(selectedTab=='Account' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                <div className="menu-items">
                  <img src={users} alt="" />
                  <span>My account</span>
                </div>
                </div> 
              </li>
              <li className="nav-item">
                <div onClick={() => tabClickHandler('Profile')} className={(selectedTab=='Profile' ? "active" : 'none')} style={{ textDecoration: 'none' }}>
                <div className="menu-items">
                  <img src={users} alt="" />
                  <span>Profile</span>
                </div>
                </div> 
              </li>
              <li className="nav-item">
                <div className="menu-items">
                  <i class="bi bi-airplane plane-rotate"></i>Logout
                </div>
              </li>
            </ul>
          </div>
        </div> */}
    </div>


  );
}

export default Home;
