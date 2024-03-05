import Home from "./Dashboard/Home";
import Headers from "../Headers";
import Journey from './Journey/Jounney';
import React from 'react';
import Journeycontent from './Journeycontent';
import CourseDescribing from './CourseDescribing';
import ProfileAccount from './ProfileAccount';
import Logout from '../Logout';
import Mergedindex from '../Index/Mergedindex';
import Keyclockloginpage from "../Keyclockloginpage";

import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Platform()  {

  
    return (
  
       <Router>
   <Routes>
      <Route path='/loginpage' element={<Keyclockloginpage/>} />
      {/* grouping dashborard pages start */}
      <Route path='/' element={<Journeycontent />} />
      <Route path='/dashboard/journey' element={<Journeycontent />} />
     <Route path='/dashboard/describing' element={<CourseDescribing />} />
     <Route path='/dashboard/profile' element={<ProfileAccount />} />
     {/* grouping dashborard pages end*/}
     <Route path='/logout'  element={<Mergedindex/>} />
   </Routes>
 </Router>
  
    );
  }
  
  export default Platform;
  