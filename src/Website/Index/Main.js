import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../App.css';
import Mergedindex from '../../Website/Index/Mergedindex';
import About from '../../Website/About/About';
import Contact from '../../Website/Contact/Contact';
import Blogmerge from '../Blog/Blogmerge';
import Logout from '../Logout';
import ForgotPassword from '../../ForgotPassword';
import Register from '../Register';
import OtpVerification from "../OtpVerification";
import Keyclockloginpage from "../Keyclockloginpage";
import RegistrationSuccess from "../RegistrationSuccess";
import Notification from '../Platform/Notification/Notification';

function Main() {
  return (
   <Router>
   <Routes>
     <Route path='/' element={<Mergedindex/>} />
     <Route path='/loginpage' element={<Keyclockloginpage/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/blog' element={<Blogmerge />} />
     <Route path='/logout' element={<Logout/>} />
     <Route path='/forgotpassword' element={<ForgotPassword/>} />
     <Route path='/OtpVerification' element={<OtpVerification/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/registrationsuccess' element={<RegistrationSuccess/>} />
     
     <Route path='/dashboard/*' element={<Mergedindex />} />
     <Route path='/notification' element={<Notification />} />
   </Routes>
 </Router>
  );
}

export default Main;
