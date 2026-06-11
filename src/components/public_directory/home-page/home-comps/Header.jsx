import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
import * as ActionHybrid from "../../../../store/redux/hybrid_reducer.js";

import Logo from "../logo/universeLogo.png";
import SolutionDropdown from "./header-comps/SolutionDropdown.jsx";
import FeaturesDropdown from "./header-comps/FeaturesDropdown";
import LearningDropdown from "./header-comps/LearningDropdown.jsx";
import CompanyDropdown from "./header-comps/CompanyDropdown.jsx";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import ShareIcon from "@mui/icons-material/Share";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function Header({ setLoading }) {
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
            <div className="authenticatedHeaderNavRight fx-ac space">
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
                    {/* <div className="fx-cl spacem fs2 fw500">
                      {" "}
                      <span>
                        {" "}
                        <span className="fw500 fs2">
                          {" "}
                          {clientData?.owner?.personalInfo?.firstName ||
                            "Not provided"}{" "}
                        </span>{" "}
                      </span>{" "}
                    </div>{" "} */}
                  </div>{" "}
                  <div className="dropDownContent">
                    <ProfileDropContents
                      redirect={redirect}
                      clientData={clientData}
                    />
                  </div>
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

function ProfileDropContents({ setLoading, redirect, clientData }) {
  const dispatch = useDispatch();
  function logOut() {
    setLoading(true);
    dispatch(Action.logOut());
    dispatch(ActionHybrid.clearCartAction());
    redirect("/");
    setLoading(false);
  }
  return (
    <div className="profileDropdown fx-cl">
      {/* Header */}
      <div className="fx-ac space " style={{ paddingBottom: "1.4rem" }}>
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

      <div className="profileDropdwnCard fx-cl space2">
        {/* Stats */}
        <div className="g g2">
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
        <button
          className="upgradeBtn fw500 fs3"
          onClick={() => {
            redirect(`/clients/${clientData?._id}/account`);
          }}
        >
          Launch Inventory Workspace
        </button>
      </div>
      <div className="fx-cl">
        {/* Menu */}
        <div className="profileDropdwnList fx-cl">
          <div className="fx-ac space profileMenuItem">
            <PersonOutlineIcon fontSize="large" />
            <span>Point of Sales</span>
          </div>
          <div className="fx-ac space profileMenuItem">
            <PersonOutlineIcon fontSize="large" />
            <span>Dashboard</span>
          </div>
          <div className="fx-ac space profileMenuItem">
            <NotificationsNoneOutlinedIcon fontSize="large" />
            <span>Notifications</span>
          </div>

          <div className="fx-ac space profileMenuItem">
            <ShareIcon fontSize="large" />
            <span>Messages</span>
          </div>

          <div className="fx-ac space profileMenuItem">
            <DownloadOutlinedIcon fontSize="large" />
            <span>Reports</span>
          </div>
        </div>

        {/* Menu */}
        <div className="profileDropdwnList fx-cl">
          <div className="fx-ac space profileMenuItem">
            <DiscountIcon fontSize="large" />
            <span>Payments</span>
          </div>

          <div className="fx-ac space profileMenuItem">
            <BookmarksOutlinedIcon fontSize="large" />
            <span>Bank Accounts</span>
          </div>

          <div className="fx-ac space profileMenuItem">
            <PersonOutlineIcon fontSize="large" />
            <span>Contacts</span>
          </div>

          <div className="fx-ac space profileMenuItem">
            <InfoOutlinedIcon fontSize="large" />
            <span>Audit Logs</span>
          </div>
        </div>

        {/* Menu */}
        <div className="profileDropdwnList fx-cl">
          <div className="fx-ac space profileMenuItem">
            <InfoOutlinedIcon fontSize="large" />
            <span>Help & Support</span>
          </div>
          <div className="fx-ac space profileMenuItem">
            <AutoAwesomeOutlinedIcon fontSize="large" />
            <span>Settings</span>
          </div>
          <button
            className="fx-ac space profileMenuItem"
            onClick={() => logOut()}
          >
            <PowerSettingsNewOutlinedIcon fontSize="large" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
