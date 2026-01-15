import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./systemadminaccount.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/system-admin_reducer.js";

// importing components

// Icons import
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Logo from "../public_directory/public-routes-images/logos/Manga_Cons _Logo3.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
// ________________________________________________________________________________________________
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function SystemAdminAccount() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.systemAdminFunction.queue.systemAdminData
  );
  const active = useSelector(
    (state) => state.systemAdminFunction.dashboard?.nav_trace
  );
  // const [active, setActive] = useState("done");

  function AsideItem(props) {
    return (
      <span style={{ width: "90%" }}>
        <Link
          to={props.link}
          className={`cb fx-ac  space1 ${
            active === `${props.hooks}` ? "active-prl-tab" : null
          }`}
          onClick={() => {
            handleNavigator(props.active);
            // setActive(`${props.active}`);
          }}
          style={{ padding: ".7rem 1.8rem" }}
        >
          {props.icon}
          {props.img}

          <span>{props.name}</span>
        </Link>
      </span>
    );
  }

  function logOut() {
    dispatch(DispatchLogout());
    // redirect("/systemAdmin_login");
  }
  const DispatchLogout = () => async (dispatch) => {
    try {
      dispatch(Action.logOut());
    } catch (error) {
      console.log(error);
    }
  };

  // Redux functions for dashboards navigation
  function handleNavigator(item) {
    dispatch(DispatchNavigator(item));
  }
  const DispatchNavigator = (item) => async (dispatch) => {
    try {
      dispatch(Action.dispathcDashboardNavigator({ item }));
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  };
  function switchComponents() {
    switch (active) {
      case "account":
        return "account";
      case "dashboard":
        return "dashboard";
      case "Overview":
        return "Overview";
      case "calendar":
        return "calendar";
      case "Communication":
        return "Communication";
      case "Help & Support":
        return "Help & Support";
      case "setting":
        return "Change your Password here ...";
      default:
        return "System Administration Accounts";
    }
  }

  // FUNCTION FOR SIDE NAVIGATION BAR ACCORDION
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sysAdminMenuItems = [
    {
      title: "Dashboard Overview",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "dashboard",
      active: "dashboard",
      children: [
        { title: "System Health", href: "/sysadmin/overview" },
        { title: "Usage Analytics", href: "/sysadmin/analytics" },
        { title: "Server Logs", href: "/sysadmin/logs" },
        { title: "Real-time Monitoring", href: "/sysadmin/monitor" },
      ],
    },

    {
      title: "User & Role Management",
      icon: <PeopleAltRoundedIcon fontSize="medium" />,
      hooks: "users",
      active: "users",
      children: [
        { title: "All Users", href: "/sysadmin/users" },
        { title: "Roles & Permissions", href: "/sysadmin/roles" },
        { title: "Admins & Staff", href: "/sysadmin/admins" },
        { title: "Instructors", href: "/sysadmin/instructors" },
        { title: "Students", href: "/sysadmin/students" },
        { title: "Parents", href: "/sysadmin/parents" },
        { title: "Agents", href: "/sysadmin/agents" },
      ],
    },

    {
      title: "Exam & Content Control",
      icon: <ManageAccountsRoundedIcon fontSize="medium" />,
      hooks: "content",
      active: "content",
      children: [
        { title: "Question Banks", href: "/sysadmin/questions" },
        { title: "Past Papers Uploads", href: "/sysadmin/papers" },
        { title: "Exam Configurations", href: "/sysadmin/config" },
        { title: "AI Question Generator", href: "/sysadmin/ai-generator" },
      ],
    },

    {
      title: "System Analytics",
      icon: <InsightsRoundedIcon fontSize="medium" />,
      hooks: "analytics",
      active: "analytics",
      children: [
        { title: "User Growth", href: "/sysadmin/analytics/users" },
        { title: "Revenue & Sales", href: "/sysadmin/analytics/revenue" },
        { title: "Exam Statistics", href: "/sysadmin/analytics/exams" },
        { title: "Server Performance", href: "/sysadmin/analytics/system" },
      ],
    },

    {
      title: "Server & Database",
      icon: <StorageRoundedIcon fontSize="medium" />,
      hooks: "server",
      active: "server",
      children: [
        { title: "Database Overview", href: "/sysadmin/database" },
        { title: "Backups & Restore", href: "/sysadmin/backup" },
        { title: "Maintenance Mode", href: "/sysadmin/maintenance" },
        { title: "Server Settings", href: "/sysadmin/server-settings" },
      ],
    },

    {
      title: "Security Center",
      icon: <SecurityRoundedIcon fontSize="medium" />,
      hooks: "security",
      active: "security",
      children: [
        { title: "Login Activity", href: "/sysadmin/security/logins" },
        { title: "2FA & Encryption", href: "/sysadmin/security/2fa" },
        { title: "API Access Keys", href: "/sysadmin/security/api" },
        { title: "Data Privacy", href: "/sysadmin/security/privacy" },
      ],
    },

    {
      title: "Payments & Transactions",
      icon: <AccountBalanceWalletRoundedIcon fontSize="medium" />,
      hooks: "payments",
      active: "payments",
      children: [
        { title: "Transactions", href: "/sysadmin/payments/transactions" },
        { title: "Subscriptions", href: "/sysadmin/payments/subscriptions" },
        { title: "Refund Requests", href: "/sysadmin/payments/refunds" },
        { title: "Revenue Reports", href: "/sysadmin/payments/reports" },
      ],
    },

    {
      title: "Notifications & Alerts",
      icon: <NotificationsActiveRoundedIcon fontSize="medium" />,
      hooks: "notifications",
      active: "notifications",
      children: [
        {
          title: "System Announcements",
          href: "/sysadmin/notifications/system",
        },
        {
          title: "Email / SMS Broadcast",
          href: "/sysadmin/notifications/broadcast",
        },
        { title: "Push Notifications", href: "/sysadmin/notifications/push" },
      ],
    },

    {
      title: "Cloud & Integrations",
      icon: <CloudRoundedIcon fontSize="medium" />,
      hooks: "integrations",
      active: "integrations",
      children: [
        { title: "Email Service", href: "/sysadmin/integrations/email" },
        { title: "Payment Gateway", href: "/sysadmin/integrations/payment" },
        { title: "AI / Chatbots", href: "/sysadmin/integrations/ai" },
        { title: "WebRTC / Live Classes", href: "/sysadmin/integrations/live" },
      ],
    },

    {
      title: "System Settings",
      icon: <SettingsApplicationsRoundedIcon fontSize="medium" />,
      hooks: "settings",
      active: "settings",
      children: [
        { title: "General Settings", href: "/sysadmin/settings/general" },
        { title: "Theme & Branding", href: "/sysadmin/settings/theme" },
        { title: "Languages", href: "/sysadmin/settings/languages" },
        { title: "Backup & Restore", href: "/sysadmin/settings/backup" },
      ],
    },

    {
      title: "Support & Maintenance",
      icon: <SupportAgentRoundedIcon fontSize="medium" />,
      hooks: "support",
      active: "support",
      children: [
        { title: "User Tickets", href: "/sysadmin/support/tickets" },
        { title: "Bug Reports", href: "/sysadmin/support/bugs" },
        { title: "Developer Logs", href: "/sysadmin/support/logs" },
      ],
    },

    {
      title: "System Control",
      icon: <TuneRoundedIcon fontSize="medium" />,
      hooks: "control",
      active: "control",
      children: [
        { title: "Restart System", href: "/sysadmin/control/restart" },
        { title: "Clear Cache", href: "/sysadmin/control/cache" },
        { title: "Force Logout Users", href: "/sysadmin/control/logout" },
      ],
    },
  ];
  // ___________________________________END_______________

  return (
    <section className="sectionsysAdminProfile">
      <div className="sysAdminProfileCont ">
        <div className="sysAdminAside fx-cl fx-as space1">
          <div className="sysAdminAsideSec fs2 cwb fx-cl fx-jb ">
            <div className="fx-cl space2">
              <div
                className="fx-ac spacem"
                style={{
                  width: "100%",
                  marginBottom: "2rem",
                  fontSize: "1.8rem",
                }}
              >
                <figure className="dashboardLogo fx-ac space2 fx-jc">SP</figure>
                <span>Skill Point</span>
              </div>
              <div>
                <span style={{ textTransform: "capitalize" }}>{active}</span>
              </div>
              <div className="sysAdminProfileItemsCont fx-cl spacem">
                {sysAdminMenuItems.map((item, index) => (
                  <div className="fx-cl" key={index}>
                    <button
                      className={`sysAdminDashboardNaV cb fx-ac fx-jb space1 ${
                        active === `${item.hooks}` ? "active-prl-tab" : null
                      }`}
                      onClick={() => {
                        handleNavigator(item.active);
                        toggleIndex(index);
                      }}
                    >
                      <span className=" fx-ac space1">
                        <span className="sysAdminDashboardNaVIcon">
                          {item.icon}
                          {item.img}
                        </span>

                        <span>{item.title}</span>
                      </span>
                      {item?.children && (
                        <span className="sysAdminProfileDropdownBtn fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="sysAdminSubNavCont fx-cl spacem">
                        {item?.children?.map((sub, idx) => (
                          <div className=" fx-ac space1" key={idx}>
                            <figure className="sysAdminSubNavIcon fx-ac fx-jc">
                              <CheckIcon fontSize="small" />
                            </figure>

                            <a href={sub.href}>{sub.title}</a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sysAdminHeader fx-ac fx-jb">
          <div className="sysAdminDpCont fx-ac fx-jc space1">
            <div
              className="fx-ac space1"
              onClick={() => handleNavigator("account")}
            >
              <figure className="sysAdminDp fx-ac">
                <img src={data?.profile?.photoURL} alt="" />
              </figure>
              <p className="fx-cl spacem" style={{ fontSize: "1.6rem" }}>
                <span>{data?.first_Name || "Zainab Abubakar"}</span>
                <span className="date">Fri, October 26, 2025</span>
              </p>
            </div>
          </div>
          <span className="sysAdminDashboardHeadRight fx-ac fx-jc space1">
            <div className="sysAdminDBSearchCont fx-ac space1">
              <button className="sysAdminDashboardHeadBtn fx-ac fx-jc">
                <SearchIcon fontSize="medium" />
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="Start searching here.."
              />
            </div>
            <span className="notifBtn sysAdminDashboardHeadBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="medium" />
              <figure>0</figure>
            </span>
            <button
              className="sysAdminDashboardHeadBtn fx-ac fx-jc logout_st_accont fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
            </button>
          </span>
        </div>
        <div className="sysAdminContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
