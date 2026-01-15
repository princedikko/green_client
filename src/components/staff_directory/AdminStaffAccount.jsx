import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./staff_account.css";

import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/staff_reducer.js";

// importing components

// Icons import

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";

import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import Logo from "../public_directory/public-routes-images/logos/Manga_Cons _Logo3.png";
// ________________________________________________________________________________________________
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function AdminStaffAccount() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.staffFunction.queue.staffData);
  const active = useSelector(
    (state) => state.staffFunction.dashboard?.nav_trace
  );
  // const [active, setActive] = useState("done");

  function AsideItem(props) {
    return (
      <span style={{ width: "90%" }}>
        <Link
          to={props.link}
          className={` itemsPf cb fx-ac  space1 ${
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
    // redirect("/staff_login");
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
        return "Default Page";
    }
  }

  // FUNCTION FOR SIDE NAVIGATION BAR ACCORDION
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const adminStaffMenuItems = [
    {
      title: "Dashboard",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "dashboard",
      active: "dashboard",
      children: [
        { title: "Overview", href: "/staff/overview" },
        { title: "Active Students", href: "/staff/students" },
        { title: "Pending Verifications", href: "/staff/verifications" },
        { title: "Daily Reports", href: "/staff/reports/daily" },
      ],
    },

    {
      title: "Student Management",
      icon: <PeopleAltRoundedIcon fontSize="medium" />,
      hooks: "students",
      active: "students",
      children: [
        { title: "All Students", href: "/staff/students/all" },
        { title: "Approve Registrations", href: "/staff/students/approve" },
        { title: "Suspend / Reactivate", href: "/staff/students/manage" },
        { title: "Performance Records", href: "/staff/students/records" },
      ],
    },

    {
      title: "Exam Operations",
      icon: <AssignmentRoundedIcon fontSize="medium" />,
      hooks: "exams",
      active: "exams",
      children: [
        { title: "Scheduled Exams", href: "/staff/exams/scheduled" },
        { title: "Create CBT Exam", href: "/staff/exams/create" },
        { title: "Upload Past Questions", href: "/staff/exams/past" },
        { title: "Results Management", href: "/staff/exams/results" },
      ],
    },

    {
      title: "Payments & Billing",
      icon: <PaymentsRoundedIcon fontSize="medium" />,
      hooks: "payments",
      active: "payments",
      children: [
        { title: "Payment History", href: "/staff/payments/history" },
        { title: "Verify Transactions", href: "/staff/payments/verify" },
        { title: "Refund Requests", href: "/staff/payments/refunds" },
        { title: "Generate Invoice", href: "/staff/payments/invoice" },
      ],
    },

    {
      title: "Scheduling & Attendance",
      icon: <EventRoundedIcon fontSize="medium" />,
      hooks: "schedule",
      active: "schedule",
      children: [
        { title: "Class Timetable", href: "/staff/schedule/classes" },
        { title: "Exam Timetable", href: "/staff/schedule/exams" },
        { title: "Attendance Record", href: "/staff/schedule/attendance" },
        { title: "Calendar View", href: "/staff/schedule/calendar" },
      ],
    },

    {
      title: "Communication Center",
      icon: <ForumRoundedIcon fontSize="medium" />,
      hooks: "communication",
      active: "communication",
      children: [
        { title: "Messages", href: "/staff/communication/messages" },
        { title: "Announcements", href: "/staff/communication/announcements" },
        { title: "Parent Updates", href: "/staff/communication/parents" },
      ],
    },

    {
      title: "Reports & Analytics",
      icon: <AssessmentRoundedIcon fontSize="medium" />,
      hooks: "reports",
      active: "reports",
      children: [
        { title: "Performance Overview", href: "/staff/reports/performance" },
        { title: "Student Progress", href: "/staff/reports/students" },
        { title: "Finance Report", href: "/staff/reports/finance" },
        { title: "Export Reports", href: "/staff/reports/export" },
      ],
    },

    {
      title: "Notifications",
      icon: <NotificationsActiveRoundedIcon fontSize="medium" />,
      hooks: "notifications",
      active: "notifications",
      children: [
        { title: "Send Notification", href: "/staff/notifications/send" },
        { title: "Email / SMS Alerts", href: "/staff/notifications/email-sms" },
        { title: "System Broadcasts", href: "/staff/notifications/system" },
      ],
    },

    {
      title: "User Management",
      icon: <ManageAccountsRoundedIcon fontSize="medium" />,
      hooks: "users",
      active: "users",
      children: [
        { title: "adminStaffs", href: "/staff/users/adminStaffs" },
        { title: "Parents", href: "/staff/users/parents" },
        { title: "Agents", href: "/staff/users/agents" },
        { title: "Admins", href: "/staff/users/admins" },
      ],
    },

    {
      title: "Support & Tickets",
      icon: <SupportAgentRoundedIcon fontSize="medium" />,
      hooks: "support",
      active: "support",
      children: [
        { title: "Open Tickets", href: "/staff/support/open" },
        { title: "Resolved Tickets", href: "/staff/support/resolved" },
        { title: "Contact Students", href: "/staff/support/contact" },
      ],
    },

    {
      title: "Settings",
      icon: <SettingsApplicationsRoundedIcon fontSize="medium" />,
      hooks: "settings",
      active: "settings",
      children: [
        { title: "Profile", href: "/staff/settings/profile" },
        { title: "Access Control", href: "/staff/settings/access" },
        { title: "Theme & Preferences", href: "/staff/settings/theme" },
      ],
    },
  ];
  // Components

  return (
    <section className="sectionadminStaffProfile">
      <div className="adminStaffProfileCont ">
        <div className="adminStaffAside fx-cl fx-as space1">
          <div className="adminStaffAsideSec fs2 cwb fx-cl fx-jb ">
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
              <div className="adminStaffProfileItemsCont fx-cl spacem">
                {adminStaffMenuItems.map((item, index) => (
                  <div className="fx-cl" key={index}>
                    <button
                      className={`adminStaffDashboardNaV cb fx-ac fx-jb space1 ${
                        active === `${item.hooks}` ? "active-prl-tab" : null
                      }`}
                      onClick={() => {
                        handleNavigator(item.active);
                        toggleIndex(index);
                      }}
                    >
                      <span className=" fx-ac space1">
                        <span className="adminStaffDashboardNaVIcon">
                          {item.icon}
                          {item.img}
                        </span>

                        <span>{item.title}</span>
                      </span>
                      {item?.children && (
                        <span className="adminStaffProfileDropdownBtn fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="adminStaffSubNavCont fx-cl spacem">
                        {item?.children?.map((sub, idx) => (
                          <div className=" fx-ac space1" key={idx}>
                            <figure className="adminStaffSubNavIcon fx-ac fx-jc">
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
        <div className="adminStaffHeader fx-ac fx-jb">
          <div className="adminStaffDpCont fx-ac fx-jc space1">
            <div
              className="fx-ac space1"
              onClick={() => handleNavigator("account")}
            >
              <figure className="adminStaffDp fx-ac">
                <img src={data?.profile?.photoURL} alt="" />
              </figure>
              <p className="fx-cl spacem" style={{ fontSize: "1.6rem" }}>
                <span>{data?.first_Name || "Zainab Abubakar"}</span>
                <span className="date">Fri, October 26, 2025</span>
              </p>
            </div>
          </div>
          <span className="adminStaffDashboardHeadRight fx-ac fx-jc space1">
            <div className="adminStaffDBSearchCont fx-ac space1">
              <button className="adminStaffDashboardHeadBtn fx-ac fx-jc">
                <SearchIcon fontSize="medium" />
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="Start searching here.."
              />
            </div>
            <span className="notifBtn adminStaffDashboardHeadBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="medium" />
              <figure>0</figure>
            </span>
            <button
              className="adminStaffDashboardHeadBtn fx-ac fx-jc logout_st_accont fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
            </button>
          </span>
        </div>
        <div className="adminStaffContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
