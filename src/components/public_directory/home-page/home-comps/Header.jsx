import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";

import Logo from "../logo/universeLogo.png";
import DiscountIcon from "@mui/icons-material/Discount";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SolutionDropdown from "./header-comps/SolutionDropdown.jsx";
import FeaturesDropdown from "./header-comps/FeaturesDropdown";
import LearningDropdown from "./header-comps/LearningDropdown.jsx";
import CompanyDropdown from "./header-comps/CompanyDropdown.jsx";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const redirect = useNavigate();

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      title: "Features",
      dropdown: ["Principal", "Vice Principal", "Departments"],
    },
    {
      title: "Solutions",
      dropdown: ["Programs", "Curriculum", "Calendar"],
    },
    {
      title: "Enterprise",
      link: "/enterprise",
    },
    {
      title: "Learn",
      dropdown: [
        { label: "New Registration", link: "/create_new_account" },
        { label: "Track Status", link: "#" },
      ],
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Company",
      dropdown: [
        { label: "Career", link: "/institution/instructor-login" },
        { label: "Agent", link: "/agent_unit/login" },
        { label: "Become Affiliate", link: "/learners/parent-login" },
        { label: "About Company", link: "/executive/login" },
        { label: "Contact Us", link: "/administration/admin_login" },
      ],
    },
    {
      title: "Sign Up",
      link: "/create_new_account",
    },
  ];

  return (
    <div className="header fx-cl">
      <nav className="navbar">
        <div className="navbar-container fx-jb space4 nav-wrapper">
          <div className="fx-ac space4">
            <div className="navbar-logo fx-ac" onClick={() => redirect("/")}>
              <img src={Logo} alt="uni logo" />
            </div>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              ☰
            </button>

            <ul className={`nav-links fx-ac ${mobileOpen ? "active" : ""}`}>
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className="dropdown"
                  onMouseEnter={() => setOpenIndex(i)}
                >
                  <Link to={item.link || "#"} className="fx-ac">
                    <span>{item.title} </span>
                    {item.title === "Features" ||
                    item.title === "Solutions" ||
                    item.title === "Company" ||
                    item.title === "Learn" ? (
                      <span
                        className="dropDwnArrow"
                        style={{ padding: "0.2rem" }}
                      >
                        <KeyboardArrowDownIcon fontSize="large" />
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-buttons fx-ac fx-jb space1">
            <button
              className="headerBtn headerBtnOne fx-ac spacem"
              onClick={() => i18n.changeLanguage("fr")}
            >
              <figure className="fx-ac fx-jc">
                <LanguageIcon fontSize="large" />
              </figure>
              <span className="fx-ac fx-jc">
                <span>{t("Welcome")}</span>
                <span style={{ padding: "0.2rem" }}>
                  <KeyboardArrowDownIcon fontSize="large" />
                </span>
              </span>
            </button>

            <button
              className="headerBtn fx-ac spacem"
              onClick={() => redirect("/clients_login")}
            >
              <figure className="fx-ac fx-jc">
                <DiscountIcon fontSize="large" />
              </figure>
              <span>Sign in</span>
            </button>
          </div>
        </div>
      </nav>

      {/* DROPDOWN INSIDE CONTAINER */}
      {openIndex !== null && navItems[openIndex]?.dropdown && (
        <>
          {navItems[openIndex].title === "Features" && (
            <FeaturesDropdown setOpenIndex={setOpenIndex} />
          )}
          {navItems[openIndex].title === "Solutions" && (
            <SolutionDropdown setOpenIndex={setOpenIndex} />
          )}
          {navItems[openIndex].title === "Learn" && (
            <LearningDropdown setOpenIndex={setOpenIndex} />
          )}
          {navItems[openIndex].title === "Company" && (
            <CompanyDropdown setOpenIndex={setOpenIndex} />
          )}
          {/* Add similar conditions for other dropdowns if needed */}
        </>
      )}
    </div>
  );
}
