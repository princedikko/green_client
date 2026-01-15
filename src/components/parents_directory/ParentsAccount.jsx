import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./parentsAccount.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/parent_reducer.js";

// importing components

// Icons import
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import Logo from "../public_directory/public-routes-images/logos/Manga_Cons _Logo3.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function ParentsAccount() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.parentFunction.queue.parentData);
  const active = useSelector(
    (state) => state.parentFunction.dashboard?.nav_trace
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
    // redirect("/parent_login");
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

  const parentMenuItems = [
    {
      title: "Dashboard",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "dashboard",
      active: "dashboard",
      children: [
        { title: "Overview", href: "/parent/overview" },
        { title: "Children Summary", href: "/parent/children" },
        { title: "Academic Progress", href: "/parent/progress" },
      ],
    },

    {
      title: "My Children",
      icon: <SchoolRoundedIcon fontSize="medium" />,
      hooks: "children",
      active: "children",
      children: [
        { title: "Registered Children", href: "/parent/children/list" },
        { title: "Add New Child", href: "/parent/children/add" },
        { title: "Exam Enrollments", href: "/parent/children/enrollments" },
      ],
    },

    {
      title: "Results & Performance",
      icon: <AssessmentRoundedIcon fontSize="medium" />,
      hooks: "results",
      active: "results",
      children: [
        { title: "CBT Results", href: "/parent/results/cbt" },
        { title: "Past Records", href: "/parent/results/past" },
        { title: "Performance Chart", href: "/parent/results/chart" },
      ],
    },

    {
      title: "Payments & Fees",
      icon: <PaymentsRoundedIcon fontSize="medium" />,
      hooks: "payments",
      active: "payments",
      children: [
        { title: "Payment History", href: "/parent/payments/history" },
        { title: "Pending Fees", href: "/parent/payments/pending" },
        { title: "Pay Now", href: "/parent/payments/pay" },
        { title: "Invoices", href: "/parent/payments/invoices" },
      ],
    },

    {
      title: "Attendance & Schedule",
      icon: <EventNoteRoundedIcon fontSize="medium" />,
      hooks: "attendance",
      active: "attendance",
      children: [
        { title: "Attendance Record", href: "/parent/attendance/record" },
        { title: "Class Timetable", href: "/parent/attendance/timetable" },
        { title: "Exam Schedule", href: "/parent/attendance/exams" },
      ],
    },

    {
      title: "Communication",
      icon: <ChatRoundedIcon fontSize="medium" />,
      hooks: "communication",
      active: "communication",
      children: [
        { title: "Messages", href: "/parent/messages" },
        { title: "Announcements", href: "/parent/announcements" },
        { title: "Contact Instructor", href: "/parent/contact" },
      ],
    },

    {
      title: "Notifications",
      icon: <NotificationsActiveRoundedIcon fontSize="medium" />,
      hooks: "notifications",
      active: "notifications",
      children: [
        { title: "System Alerts", href: "/parent/notifications/system" },
        { title: "Exam Reminders", href: "/parent/notifications/exams" },
        { title: "Payment Updates", href: "/parent/notifications/payments" },
      ],
    },

    {
      title: "Health & Welfare",
      icon: <FavoriteRoundedIcon fontSize="medium" />,
      hooks: "health",
      active: "health",
      children: [
        { title: "Health Reports", href: "/parent/health/reports" },
        { title: "Welfare Status", href: "/parent/health/welfare" },
        { title: "Emergency Contacts", href: "/parent/health/emergency" },
      ],
    },

    {
      title: "Support & Help",
      icon: <SupportAgentRoundedIcon fontSize="medium" />,
      hooks: "support",
      active: "support",
      children: [
        { title: "Raise a Ticket", href: "/parent/support/ticket" },
        { title: "FAQs", href: "/parent/support/faqs" },
        { title: "Contact Admin", href: "/parent/support/contact" },
      ],
    },

    {
      title: "Settings",
      icon: <SettingsApplicationsRoundedIcon fontSize="medium" />,
      hooks: "settings",
      active: "settings",
      children: [
        { title: "Profile Settings", href: "/parent/settings/profile" },
        {
          title: "Notifications Preferences",
          href: "/parent/settings/notifications",
        },
        { title: "Account Security", href: "/parent/settings/security" },
      ],
    },
  ];
  // ___________________________________END_______________

  return (
    <section className="sectionparentProfile">
      <div className="parentProfileCont ">
        <div className="parentAside fx-cl fx-as space1">
          <div className="parentAsideSec fs2 cwb fx-cl fx-jb ">
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
              <div className="parentProfileItemsCont fx-cl spacem">
                {parentMenuItems.map((item, index) => (
                  <div className="fx-cl" key={index}>
                    <button
                      className={`parentDashboardNaV cb fx-ac fx-jb space1 ${
                        active === `${item.hooks}` ? "active-prl-tab" : null
                      }`}
                      onClick={() => {
                        handleNavigator(item.active);
                        toggleIndex(index);
                      }}
                    >
                      <span className=" fx-ac space1">
                        <span className="parentDashboardNaVIcon">
                          {item.icon}
                          {item.img}
                        </span>

                        <span>{item.title}</span>
                      </span>
                      {item?.children && (
                        <span className="parentProfileDropdownBtn fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="parentSubNavCont fx-cl spacem">
                        {item?.children?.map((sub, idx) => (
                          <div className=" fx-ac space1" key={idx}>
                            <figure className="parentSubNavIcon fx-ac fx-jc">
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
        <div className="parentHeader fx-ac fx-jb">
          <div className="parentDpCont fx-ac fx-jc space1">
            <div
              className="fx-ac space1"
              onClick={() => handleNavigator("account")}
            >
              <figure className="parentDp fx-ac">
                <img src={data?.profile?.photoURL} alt="" />
              </figure>
              <p className="fx-cl spacem" style={{ fontSize: "1.6rem" }}>
                <span>{data?.first_Name || "Zainab Abubakar"}</span>
                <span className="date">Fri, October 26, 2025</span>
              </p>
            </div>
          </div>
          <span className="parentDashboardHeadRight fx-ac fx-jc space1">
            <div className="parentDBSearchCont fx-ac space1">
              <button className="parentDashboardHeadBtn fx-ac fx-jc">
                <SearchIcon fontSize="medium" />
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="Start searching here.."
              />
            </div>
            <span className="notifBtn parentDashboardHeadBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="medium" />
              <figure>0</figure>
            </span>
            <button
              className="parentDashboardHeadBtn fx-ac fx-jc logout_st_accont fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
            </button>
          </span>
        </div>
        <div className="parentContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
