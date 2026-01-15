import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./instructorAccount.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/instructor_reducer.js";

// importing components

// Icons import

import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// ________________________________________________________________________________________________
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function InstructorAccount() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.instructorFunction.queue.instructorData
  );
  const active = useSelector(
    (state) => state.instructorFunction.dashboard?.nav_trace
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
    // redirect("/instructor_login");
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

  const instructorMenuItems = [
    {
      title: "Dashboard",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "dashboard",
      active: "dashboard",
      children: [
        { title: "Overview", href: "/instructor/overview" },
        { title: "My Courses", href: "/instructor/courses" },
        { title: "Student Progress", href: "/instructor/students-progress" },
        { title: "Upcoming Classes", href: "/instructor/upcoming" },
      ],
    },

    {
      title: "Course Management",
      icon: <MenuBookRoundedIcon fontSize="medium" />,
      hooks: "courses",
      active: "courses",
      children: [
        { title: "All Courses", href: "/instructor/courses/all" },
        { title: "Create Course", href: "/instructor/courses/create" },
        { title: "Modules & Topics", href: "/instructor/courses/modules" },
        { title: "Assignments", href: "/instructor/courses/assignments" },
      ],
    },

    {
      title: "Exam & CBT Creator",
      icon: <QuizRoundedIcon fontSize="medium" />,
      hooks: "exams",
      active: "exams",
      children: [
        { title: "Create New Exam", href: "/instructor/exams/create" },
        { title: "Manage Exams", href: "/instructor/exams/manage" },
        { title: "Question Bank", href: "/instructor/exams/question-bank" },
        { title: "Upload Past Questions", href: "/instructor/exams/past" },
      ],
    },

    {
      title: "Students & Classes",
      icon: <PeopleAltRoundedIcon fontSize="medium" />,
      hooks: "students",
      active: "students",
      children: [
        { title: "All Students", href: "/instructor/students" },
        { title: "Group Management", href: "/instructor/groups" },
        { title: "Attendance", href: "/instructor/attendance" },
        { title: "Messaging", href: "/instructor/messages" },
      ],
    },

    {
      title: "Performance Reports",
      icon: <AssessmentRoundedIcon fontSize="medium" />,
      hooks: "reports",
      active: "reports",
      children: [
        { title: "Exam Performance", href: "/instructor/reports/exams" },
        { title: "Class Analytics", href: "/instructor/reports/classes" },
        { title: "Student Insights", href: "/instructor/reports/students" },
        { title: "Export Reports", href: "/instructor/reports/export" },
      ],
    },

    {
      title: "Live Sessions",
      icon: <VideoLibraryRoundedIcon fontSize="medium" />,
      hooks: "live",
      active: "live",
      children: [
        { title: "Host Live Class", href: "/instructor/live/host" },
        { title: "Scheduled Sessions", href: "/instructor/live/schedule" },
        { title: "Class Replays", href: "/instructor/live/replays" },
        { title: "Join via WebRTC", href: "/instructor/live/webrtc" },
      ],
    },

    {
      title: "Timetable & Schedule",
      icon: <EventRoundedIcon fontSize="medium" />,
      hooks: "schedule",
      active: "schedule",
      children: [
        { title: "My Timetable", href: "/instructor/schedule" },
        { title: "Upcoming Exams", href: "/instructor/schedule/exams" },
        { title: "Reschedule Classes", href: "/instructor/schedule/edit" },
      ],
    },

    {
      title: "Achievements & Rewards",
      icon: <WorkspacePremiumRoundedIcon fontSize="medium" />,
      hooks: "rewards",
      active: "rewards",
      children: [
        { title: "Badges", href: "/instructor/rewards/badges" },
        { title: "Performance Rank", href: "/instructor/rewards/rank" },
        { title: "Certificates", href: "/instructor/rewards/certificates" },
      ],
    },

    {
      title: "Earnings & Wallet",
      icon: <AccountBalanceWalletRoundedIcon fontSize="medium" />,
      hooks: "wallet",
      active: "wallet",
      children: [
        { title: "Earnings Overview", href: "/instructor/wallet" },
        { title: "Withdraw Funds", href: "/instructor/wallet/withdraw" },
        { title: "Payment History", href: "/instructor/wallet/history" },
      ],
    },

    {
      title: "Notifications",
      icon: <NotificationsActiveRoundedIcon fontSize="medium" />,
      hooks: "notifications",
      active: "notifications",
      children: [
        {
          title: "Announcements",
          href: "/instructor/notifications/announcements",
        },
        { title: "Messages", href: "/instructor/notifications/messages" },
        { title: "System Alerts", href: "/instructor/notifications/system" },
      ],
    },

    {
      title: "Settings & Profile",
      icon: <SettingsApplicationsRoundedIcon fontSize="medium" />,
      hooks: "settings",
      active: "settings",
      children: [
        { title: "Edit Profile", href: "/instructor/settings/profile" },
        { title: "Account Settings", href: "/instructor/settings/account" },
        { title: "Language & Theme", href: "/instructor/settings/preferences" },
      ],
    },

    {
      title: "Help & Support",
      icon: <SupportAgentRoundedIcon fontSize="medium" />,
      hooks: "support",
      active: "support",
      children: [
        { title: "Contact Admin", href: "/instructor/support/contact" },
        { title: "FAQs", href: "/instructor/support/faqs" },
        { title: "Technical Help", href: "/instructor/support/technical" },
      ],
    },
  ];
  // ___________________________________END_______________

  return (
    <section className="sectionInstructorProfile">
      <div className="InstructorProfileCont ">
        <div className="InstructorAside fx-cl fx-as space1">
          <div className="InstructorAsideSec fs2 cwb fx-cl fx-jb ">
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
              <div className="InstructorProfileItemsCont fx-cl spacem">
                {instructorMenuItems.map((item, index) => (
                  <div className="fx-cl" key={index}>
                    <button
                      className={`InstructorDashboardNaV cb fx-ac fx-jb space1 ${
                        active === `${item.hooks}` ? "active-prl-tab" : null
                      }`}
                      onClick={() => {
                        handleNavigator(item.active);
                        toggleIndex(index);
                      }}
                    >
                      <span className=" fx-ac space1">
                        <span className="InstructorDashboardNaVIcon">
                          {item.icon}
                          {item.img}
                        </span>

                        <span>{item.title}</span>
                      </span>
                      {item?.children && (
                        <span className="InstructorProfileDropdownBtn fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="InstructorSubNavCont fx-cl spacem">
                        {item?.children?.map((sub, idx) => (
                          <div className=" fx-ac space1" key={idx}>
                            <figure className="InstructorSubNavIcon fx-ac fx-jc">
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
        <div className="InstructorHeader fx-ac fx-jb">
          <div className="InstructorDpCont fx-ac fx-jc space1">
            <div
              className="fx-ac space1"
              onClick={() => handleNavigator("account")}
            >
              <figure className="InstructorDp fx-ac">
                <img src={data?.profile?.photoURL} alt="" />
              </figure>
              <p className="fx-cl spacem" style={{ fontSize: "1.6rem" }}>
                <span>{data?.first_Name || "Zainab Abubakar"}</span>
                <span className="date">Fri, October 26, 2025</span>
              </p>
            </div>
          </div>
          <span className="InstructorDashboardHeadRight fx-ac fx-jc space1">
            <div className="InstructorDBSearchCont fx-ac space1">
              <button className="InstructorDashboardHeadBtn fx-ac fx-jc">
                <SearchIcon fontSize="medium" />
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="Start searching here.."
              />
            </div>
            <span className="notifBtn InstructorDashboardHeadBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="medium" />
              <figure>0</figure>
            </span>
            <button
              className="InstructorDashboardHeadBtn fx-ac fx-jc logout_st_accont fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
            </button>
          </span>
        </div>
        <div className="InstructorContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
