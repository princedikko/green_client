import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./executiveOfficer.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/executive_reducer.js";

// importing components
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function ExecutiveOfficer() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.executiveFunction.queue.executiveData
  );
  const active = useSelector(
    (state) => state.executiveFunction.dashboard?.nav_trace
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
    // redirect("/executive_login");
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

  const founderMenu = [
    {
      title: "Overview",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "overview",
      active: "overview",
      children: [
        { title: "Executive Summary", href: "/founder/overview" },
        { title: "Company Health", href: "/founder/health" },
        { title: "Key Metrics", href: "/founder/kpis" },
      ],
    },

    {
      title: "Financials",
      icon: <AccountBalanceWalletRoundedIcon fontSize="medium" />,
      hooks: "financials",
      active: "financials",
      children: [
        { title: "Revenue Reports", href: "/founder/revenue" },
        { title: "Agent Commissions", href: "/founder/commissions" },
        { title: "Instructor Payouts", href: "/founder/payouts" },
        { title: "Expenses & Budget", href: "/founder/expenses" },
      ],
    },

    {
      title: "Operations",
      icon: <BusinessCenterRoundedIcon fontSize="medium" />,
      hooks: "operations",
      active: "operations",
      children: [
        { title: "Active Exams Summary", href: "/founder/exams" },
        { title: "Student Enrollments", href: "/founder/enrollments" },
        { title: "Instructor Performance", href: "/founder/instructors" },
        { title: "CBT Center Reports", href: "/founder/centers" },
      ],
    },

    {
      title: "Staff & Teams",
      icon: <PeopleAltRoundedIcon fontSize="medium" />,
      hooks: "teams",
      active: "teams",
      children: [
        { title: "Admins & Managers", href: "/founder/admins" },
        { title: "Instructors", href: "/founder/instructors" },
        { title: "Agents", href: "/founder/agents" },
        { title: "Support Staff", href: "/founder/support" },
      ],
    },

    {
      title: "Analytics",
      icon: <QueryStatsRoundedIcon fontSize="medium" />,
      hooks: "analytics",
      active: "analytics",
      children: [
        { title: "Revenue Growth", href: "/founder/analytics/revenue" },
        { title: "User Retention", href: "/founder/analytics/retention" },
        {
          title: "Performance Insights",
          href: "/founder/analytics/performance",
        },
        { title: "AI Reports", href: "/founder/analytics/ai" },
      ],
    },

    {
      title: "System Control",
      icon: <SettingsRoundedIcon fontSize="medium" />,
      hooks: "system_control",
      active: "system_control",
      children: [
        { title: "User Roles & Permissions", href: "/founder/system/roles" },
        { title: "Audit Logs", href: "/founder/system/logs" },
        { title: "Platform Settings", href: "/founder/system/settings" },
        { title: "Data Backups", href: "/founder/system/backups" },
      ],
    },

    {
      title: "Partnerships & Growth",
      icon: <HandshakeRoundedIcon fontSize="medium" />,
      hooks: "partnerships",
      active: "partnerships",
      children: [
        { title: "Affiliate Programs", href: "/founder/partners/affiliates" },
        { title: "School Partnerships", href: "/founder/partners/schools" },
        {
          title: "Corporate Training Deals",
          href: "/founder/partners/corporate",
        },
      ],
    },

    {
      title: "Personal",
      icon: <PersonRoundedIcon fontSize="medium" />,
      hooks: "personal",
      active: "personal",
      children: [
        { title: "My Profile", href: "/founder/profile" },
        { title: "Account Settings", href: "/founder/settings" },
        { title: "Dark Mode", href: "/founder/theme" },
        { title: "Logout", href: "/logout" },
      ],
    },
  ];

  // ___________________________________END_______________

  return (
    <section className="sectionexecutiveProfile">
      <div className="executiveProfileCont ">
        <div className="executiveAside fx-cl fx-as space1">
          <div className="executiveAsideSec fs2 cwb fx-cl fx-jb ">
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
              <div className="executiveProfileItemsCont fx-cl spacem">
                {founderMenu.map((item, index) => (
                  <div className="fx-cl" key={index}>
                    <button
                      className={`executiveDashboardNaV cb fx-ac fx-jb space1 ${
                        active === `${item.hooks}` ? "active-prl-tab" : null
                      }`}
                      onClick={() => {
                        handleNavigator(item.active);
                        toggleIndex(index);
                      }}
                    >
                      <span className=" fx-ac space1">
                        <span className="executiveDashboardNaVIcon">
                          {item.icon}
                          {item.img}
                        </span>

                        <span>{item.title}</span>
                      </span>
                      {item?.children && (
                        <span className="executiveProfileDropdownBtn fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="executiveSubNavCont fx-cl spacem">
                        {item?.children?.map((sub, idx) => (
                          <div className=" fx-ac space1" key={idx}>
                            <figure className="executiveSubNavIcon fx-ac fx-jc">
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
        <div className="executiveHeader fx-ac fx-jb">
          <div className="executiveDpCont fx-ac fx-jc space1">
            <div
              className="fx-ac space1"
              onClick={() => handleNavigator("account")}
            >
              <figure className="executiveDp fx-ac">
                <img src={data?.profile?.photoURL} alt="" />
              </figure>
              <p className="fx-cl spacem" style={{ fontSize: "1.6rem" }}>
                <span>{data?.first_Name || "Zainab Abubakar"}</span>
                <span className="date">Fri, October 26, 2025</span>
              </p>
            </div>
          </div>
          <span className="executiveDashboardHeadRight fx-ac fx-jc space1">
            <div className="executiveDBSearchCont fx-ac space1">
              <button className="executiveDashboardHeadBtn fx-ac fx-jc">
                <SearchIcon fontSize="medium" />
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="Start searching here.."
              />
            </div>
            <span className="notifBtn executiveDashboardHeadBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="medium" />
              <figure>0</figure>
            </span>
            <button
              className="executiveDashboardHeadBtn fx-ac fx-jc logout_st_accont fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
            </button>
          </span>
        </div>
        <div className="executiveContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
