import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../logo/grd.png"; // Importing logo image
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="header ">
      <nav className="navbar">
        <div className="navbar-container fx-jb space4">
          <Link to="/" className="navbar-logo fx-ac">
            <img src={Logo} alt="udupss logo" />
            <span>Jool</span>
          </Link>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li className="dropdown">
              <Link to="#">Features</Link>
              <ul className="dropdown-content-full">
                <li>
                  <Link to="#">Principal</Link>
                </li>
                <li>
                  <Link to="#">Vice Principal</Link>
                </li>
                <li>
                  <Link to="#">Departments</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="#">Solutions</Link>
              <ul className="dropdown-content-full">
                <li>
                  <Link to="#">Programs</Link>
                </li>
                <li>
                  <Link to="#">Curriculum</Link>
                </li>
                <li>
                  <Link to="#">Calendar</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="#">Enterprise</Link>
            </li>
            <li className="dropdown">
              <Link to="#">Courses</Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/create_new_account">New Registration</Link>
                </li>
                <li>
                  <Link to="#">Track Status</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="dropdown">
              <Link to="#">Company</Link>
              <div className="dropdown-content fx-cl">
                <Link to="/institution/instructor-login">Career</Link>
                <Link to="/agent_unit/login">Agent</Link>
                <Link to="/learners/parent-login">Become Affiliate</Link>
                <Link to="/executive/login">About Company</Link>
                <Link to="/administration/admin_login">Contact Us</Link>
              </div>
            </li>
          </ul>
          <div className="navbar-buttons nav-links  fx-ac fx-jb space2">
            <div>
              <Link to="/create_new_account">Sign Up</Link>
            </div>
            <Link to="/clients_login" className="btn-student_portal">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
