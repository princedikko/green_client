import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Logo from "../logo/universeLogo.png";
import SolutionDropdown from "./header-comps/SolutionDropdown.jsx";
import FeaturesDropdown from "./header-comps/FeaturesDropdown";
import LearningDropdown from "./header-comps/LearningDropdown.jsx";
import CompanyDropdown from "./header-comps/CompanyDropdown.jsx";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  ShoppingCartOutlinedIcon,
  NotificationsNoneOutlinedIcon,
  DiscountIcon,
  ShareIcon,
  LanguageIcon,
  KeyboardArrowDownIcon,
  PersonOutline,
  DownloadOutlined,
  AutoAwesomeOutlined,
  FavoriteBorderOutlined,
  CloudUploadOutlined,
  BookmarksOutlined,
  PowerSettingsNewOutlined,
  InfoOutlined,
} from "@mui/icons-material";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const redirect = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.clientFunction);
  const clientData = useSelector(
    (state) => state.clientFunction?.queue?.clientData?.clientInfo,
  );
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      title: "Features",
      dropDownContent: <FeaturesDropdown />,
    },
    {
      title: "Solutions",
      dropDownContent: <SolutionDropdown />,
    },
    {
      title: "Enterprise",
      link: "/enterprise",
    },
    {
      title: "Learn",
      dropDownContent: <LearningDropdown />,
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Company",
      dropDownContent: <CompanyDropdown />,
    },

    // Show only when NOT authenticated
    ...(!isAuthenticated
      ? [
          {
            title: "Sign Up",
            link: "/create_new_account",
          },
        ]
      : []),
  ];

  return (
    <div className="header fx-cl">
      <nav className="navbar">
        <div className="navbar-container fx-jb space4 nav-wrapper">
          <div className="fx-ac space4">
            <div className="navbar-logo fx-ac" onClick={() => redirect("/")}>
              <img src={Logo} alt="uni logo" />
            </div>

            <ul className={`nav-links fx-ac ${mobileOpen ? "active" : ""}`}>
              {navItems.map((item, i) => (
                <li key={i} className="dropDownBtn fx-cl">
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
                  {item.dropDownContent}
                </li>
              ))}
            </ul>
          </div>

          {isAuthenticated ? (
            <div className="fx-ac space">
              <div className="fx-ac space2">
                {/* My Learning */}
                <span className="dropDownBtn fx-cl">
                  <Link className="fx-ac">
                    <span className="fw600">Dashboard</span>
                  </Link>
                  <div className="dropDownContent">My Learning</div>
                </span>

                {/* Wishlist */}
                <span className="dropDownBtn fx-cl">
                  <Link className="fx-ac">
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: "2.3rem" }} />
                  </Link>
                  <div className="dropDownContent">Wishlist</div>
                </span>

                {/* Cart */}
                <span className="dropDownBtn fx-cl">
                  <Link className="fx-ac">
                    <ShoppingCartOutlinedIcon sx={{ fontSize: "2.3rem" }} />
                  </Link>
                  <div className="dropDownContent">Cart</div>
                </span>

                {/* Notification */}
                <span className="dropDownBtn fx-cl notificationIcon">
                  <Link className="fx-ac">
                    <NotificationsNoneOutlinedIcon
                      sx={{ fontSize: "2.3rem" }}
                    />

                    <span className="notificationDot"></span>
                  </Link>
                  <div className="dropDownContent">Notifications</div>
                </span>

                {/* Profile */}
                <span className="dropDownBtn fx-cl">
                  {" "}
                  <div className="fx-ac space">
                    {" "}
                    <div className="fx-ac">
                      {" "}
                      <img
                        src={clientData?.owner?.files?.profilImage}
                        alt=""
                        style={{
                          width: "3.2rem",
                          height: "3.2rem",
                          borderRadius: "99rem",
                          objectFit: "cover",
                        }}
                      />{" "}
                    </div>{" "}
                    <div className="fx-cl spacem fs2 fw500">
                      {" "}
                      <span>
                        {" "}
                        <span className="fw500 fs2">
                          {" "}
                          {clientData?.owner?.personalInfo?.firstName ||
                            "Not provided"}{" "}
                        </span>{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <ProfileDropContents />
                </span>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </nav>
    </div>
  );
}

function ProfileDropContents() {
  return (
    <div className="profileDropdown fx-cl space1">
      {/* Header */}
      <div className="fx-ac space">
        <img
          src={clientData?.owner?.files?.profilImage}
          alt=""
          style={{
            width: "4.8rem",
            height: "4.8rem",
            borderRadius: "99rem",
            objectFit: "cover",
          }}
        />

        <div className="fx-cl spacem">
          <span className="fs4 fw500">
            {clientData?.owner?.personalInfo?.firstName}{" "}
            {clientData?.owner?.personalInfo?.lastName}
          </span>

          <span className="fs2 cb">ID:{clientData?.owner?.ownerId}</span>
        </div>
      </div>

      <hr />

      {/* Stats */}
      <div className="fx-ac fx-jb">
        <div className="fx-cl fx-ac">
          <span className="fs7 fw600">1</span>
          <span className="fs2">Source file quota</span>
        </div>

        <div className="fx-cl fx-ac">
          <span className="fs7 fw600">1</span>
          <span className="fs2">Source files left</span>
        </div>
      </div>

      {/* Upgrade */}
      <button className="upgradeBtn">Up To 92% Off</button>

      <hr />

      {/* Menu */}
      <div className="fx-cl">
        <div className="fx-ac space profileMenuItem">
          <PersonOutline />
          <span>My Profile</span>
        </div>

        <div className="fx-ac space profileMenuItem">
          <DownloadOutlined />
          <span>Downloads</span>
        </div>

        <div className="fx-ac space profileMenuItem">
          <FavoriteBorderOutlined />
          <span>Favorites</span>
        </div>

        <div className="fx-ac space profileMenuItem">
          <CloudUploadOutlined />
          <span>Upload My Work</span>
        </div>

        <div className="fx-ac space profileMenuItem">
          <BookmarksOutlined />
          <span>Subscriptions</span>
        </div>

        <div className="fx-ac space profileMenuItem">
          <LogoutOutlined />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
}
