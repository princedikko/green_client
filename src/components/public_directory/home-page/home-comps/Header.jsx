import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../logo/udus_logo_3d.png"; // Importing logo image
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
            <span style={{ fontWeight: "400", fontSize: "2.5rem" }}>UDUPS</span>
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li className="dropdown">
              <Link to="#">Administrations</Link>
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
              <Link to="#">Academics</Link>
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
              <Link to="#">Admission</Link>
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
              <Link to="#">Registration</Link>
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
              <Link to="#">Library</Link>
            </li>
          </ul>
          <div className="navbar-buttons fx-ac fx-jb space2">
            <div className="dropdown academicsLogin">
              <Link to="#">Sign in</Link>
              <div className="dropdown-content fx-cl">
                <Link to="/information-technology/system-administration/login">
                  System admin
                </Link>

                <Link to="/executive/login">Chief Executive</Link>

                <Link to="/administration/admin_login">Admin staff</Link>

                <Link to="/institution/instructor-login">Instructor</Link>

                <Link to="/learners/parent-login">Parents</Link>

                <Link to="/finance/finance_login">Finance</Link>

                <Link to="/agent_unit/login">agent</Link>
              </div>
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
