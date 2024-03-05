
import React, {  useEffect } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import footer_logo from '../assets/img/footer-logo.svg';
//import CustomScript from '../assets/js/common';
function Footer()  {
      
    return (          
<div>
<div className="offcanvas offcanvas-top" tabIndex="-1" id="menu" aria-labelledby="menu" data-bs-backdrop="true" data-bs-scroll="true">
 <div className="offcanvas-body p-0">
    <ul className="left-menu">
        <li className="nav-item"> <NavLink to="/" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Home</NavLink> </li>
        <li className="nav-item"> <NavLink to="/about" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>About Us</NavLink> </li>
        <li className="nav-item"> <NavLink to="/contact" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Contact Us</NavLink> </li>
        {/* <li className="nav-item"> <NavLink to="/blog" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Blogs</NavLink> </li>*/}
        <li className="nav-item"> <NavLink to="/blog" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Blogs</NavLink> </li> 
        <li className="nav-item"> <NavLink to="/loginpage" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Login</NavLink> </li>
        <li className="nav-item"> <NavLink to="/register" className={({isActive}) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>Sign Up</NavLink> </li>
    </ul>
  </div>
</div>

<footer> 
  <div className="footer-bottom">
    <div className="container-lg">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12 text-md-start text-center"> 
         
          <img src={footer_logo} alt="..."/> </div>
        <div className="col-md-6 col-sm-12 text-md-end text-center">
          <p className="mb-0">Copyright © 2023, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
      
     
    );
    
  }
  
  export default Footer;