import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout"; // Import the Logout component

function Navbar() {
  return (
    <Fragment>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-lg">
            <Link to="/" className="navbar-brand">
              <img src="assets/img/creamcollar-logo.svg" alt="" />
            </Link>
            <ul className="navbar-nav navbar-left me-auto">
             
              <li className="nav-item">
                <Link to="/platform" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <Logout /> {/* Render the Logout component here */}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default Navbar;
