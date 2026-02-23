import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../logo/green_logo.png"; // Importing logo image
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="header ">
      <nav className="navbar">
        <div className="navbar-container fx-jb space4">
          <div className="navbar-logo fx-ac">
            <img src={Logo} alt="udupss logo" />
            <span style={{ fontWeight: "400", fontSize: "2.5rem" }}>Green</span>
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li className="dropdown">
              <Link to="#">Features</Link>
              <ul className="dropdown-content">
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
              <ul className="dropdown-content">
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
              <ul className="dropdown-content">
                <li>
                  <Link to="#">Requirements</Link>
                </li>
                <li>
                  <Link to="#">Apply</Link>
                </li>
                <li>
                  <Link to="#">Fees</Link>
                </li>
              </ul>
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
              <Link to="#">Pricing</Link>
            </li>
            <li className="dropdown academicsLogin">
              <Link to="#">Company</Link>
              <div className="dropdown-content fx-cl">
                <Link to="/information-technology/system-administration/login">
                  Administration
                </Link>

                <Link to="/executive/login">About Company</Link>

                <Link to="/administration/admin_login">Contact Us</Link>

                <Link to="/institution/instructor-login">Career</Link>

                <Link to="/learners/parent-login">Parents</Link>

                <Link to="/finance/finance_login">Finance</Link>

                <Link to="/agent_unit/login">agent</Link>
              </div>
            </li>
          </ul>
          <div className="navbar-buttons fx-ac fx-jb space2">
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
