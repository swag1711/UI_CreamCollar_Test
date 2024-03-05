import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <Fragment>
            <header className="sticky-top">
  <nav className="navbar navbar-expand-lg">
    <div className="container-lg"> <a className="navbar-brand" href="index.html"><img src="assets/img/creamcollar-logo.svg" alt=""/></a>
      <ul className="navbar-nav navbar-left me-auto">
        <li className="nav-item"> <Link to="/" class="nav-link" >Home</Link> </li>
        <li className="nav-item"> <Link to="/about_us" class="nav-link" >About Us</Link> </li>
        <li className="nav-item"> <Link to="/contact_us" class="nav-link" >Contact Us</Link> </li>
      </ul>
    
    </div>
  </nav>
</header>
        </Fragment>
    )
}

export default Navbar;