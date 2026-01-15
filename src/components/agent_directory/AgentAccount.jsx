import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./agentAccount.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/agent_reducer.js";

// importing components

// Icons import

import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";

import Logo from "../public_directory/public-routes-images/logos/Manga_Cons _Logo3.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// ________________________________________________________________________________________________
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function AgentAccount() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.agentFunction.queue.agentAccountData
  );
  const active = useSelector(
    (state) => state.agentFunction.dashboard?.nav_trace
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
    // redirect("/agentAccount_login");
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
        return "agentAccount Money money moooneeey!!! Accounts";
    }
  }

  // FUNCTION FOR SIDE NAVIGATION BAR ACCORDION
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const agentMenuItems = [
    {
      title: "Dashboard",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "dashboard",
      active: "dashboard",
      children: [
        { title: "Overview", href: "/agent/overview" },
        { title: "My Performance", href: "/agent/performance" },
        { title: "Recent Activities", href: "/agent/activities" },
      ],
    },

    {
      title: "Student Enrollments",
      icon: <PeopleAltRoundedIcon fontSize="medium" />,
      hooks: "students",
      active: "students",
      children: [
        { title: "Register New Student", href: "/agent/students/register" },
        { title: "My Enrolled Students", href: "/agent/students/list" },
        { title: "Pending Verifications", href: "/agent/students/pending" },
      ],
    },

    {
      title: "Sales & Commissions",
      icon: <TrendingUpRoundedIcon fontSize="medium" />,
      hooks: "sales",
      active: "sales",
      children: [
        { title: "Sales Summary", href: "/agent/sales/summary" },
        { title: "Referral Earnings", href: "/agent/sales/referrals" },
        { title: "Commission Breakdown", href: "/agent/sales/commissions" },
        { title: "Withdraw Funds", href: "/agent/sales/withdraw" },
      ],
    },

    {
      title: "Packages & Products",
      icon: <AssignmentRoundedIcon fontSize="medium" />,
      hooks: "packages",
      active: "packages",
      children: [
        { title: "Available Packages", href: "/agent/packages" },
        { title: "Promote Package", href: "/agent/packages/promote" },
        { title: "Pricing Info", href: "/agent/packages/pricing" },
      ],
    },

    {
      title: "Payments",
      icon: <PaymentsRoundedIcon fontSize="medium" />,
      hooks: "payments",
      active: "payments",
      children: [
        { title: "Payment History", href: "/agent/payments/history" },
        { title: "Verify Transactions", href: "/agent/payments/verify" },
        { title: "Bonus Wallet", href: "/agent/payments/wallet" },
      ],
    },

    {
      title: "Analytics & Reports",
      icon: <AssessmentRoundedIcon fontSize="medium" />,
      hooks: "analytics",
      active: "analytics",
      children: [
        { title: "Student Growth", href: "/agent/analytics/students" },
        { title: "Revenue Chart", href: "/agent/analytics/revenue" },
        { title: "Referral Analysis", href: "/agent/analytics/referrals" },
        { title: "Export Reports", href: "/agent/analytics/export" },
      ],
    },

    {
      title: "Communication",
      icon: <ForumRoundedIcon fontSize="medium" />,
      hooks: "communication",
      active: "communication",
      children: [
        { title: "Messages", href: "/agent/messages" },
        { title: "Announcements", href: "/agent/announcements" },
        { title: "Support Chat", href: "/agent/support/chat" },
      ],
    },

    {
      title: "Loyalty & Rewards",
      icon: <LoyaltyRoundedIcon fontSize="medium" />,
      hooks: "loyalty",
      active: "loyalty",
      children: [
        { title: "My Rank", href: "/agent/loyalty/rank" },
        { title: "Bonus Points", href: "/agent/loyalty/points" },
        { title: "Redeem Rewards", href: "/agent/loyalty/redeem" },
      ],
    },

    {
      title: "Support & Help",
      icon: <SupportAgentRoundedIcon fontSize="medium" />,
      hooks: "support",
      active: "support",
      children: [
        { title: "Raise a Ticket", href: "/agent/support/ticket" },
        { title: "FAQs", href: "/agent/support/faqs" },
        { title: "Contact Admin", href: "/agent/support/contact" },
      ],
    },

    {
      title: "Settings",
      icon: <SettingsApplicationsRoundedIcon fontSize="medium" />,
      hooks: "settings",
      active: "settings",
      children: [
        { title: "Profile Settings", href: "/agent/settings/profile" },
        { title: "Notifications", href: "/agent/settings/notifications" },
        { title: "Security", href: "/agent/settings/security" },
      ],
    },
  ];
  // ___________________________________END_______________
  return (
    <section className="sectionagentProfile">
      <div className="agentProfileCont ">
        <div className="agentAside fx-cl fx-as space1">
          <div className="agentAsideSec fs2 cwb fx-cl fx-jb ">
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
              <div className="agentProfileItemsCont fx-cl spacem">
                {agentMenuItems.map((item, index) => (
                  <div className="fx-cl" key={index}>
                    <button
                      className={`agentDashboardNaV cb fx-ac fx-jb space1 ${
                        active === `${item.hooks}` ? "active-prl-tab" : null
                      }`}
                      onClick={() => {
                        handleNavigator(item.active);
                        toggleIndex(index);
                      }}
                    >
                      <span className=" fx-ac space1">
                        <span className="agentDashboardNaVIcon">
                          {item.icon}
                          {item.img}
                        </span>

                        <span>{item.title}</span>
                      </span>
                      {item?.children && (
                        <span className="agentProfileDropdownBtn fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="agentSubNavCont fx-cl spacem">
                        {item?.children?.map((sub, idx) => (
                          <div className=" fx-ac space1" key={idx}>
                            <figure className="agentSubNavIcon fx-ac fx-jc">
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
        <div className="agentHeader fx-ac fx-jb">
          <div className="agentDpCont fx-ac fx-jc space1">
            <div
              className="fx-ac space1"
              onClick={() => handleNavigator("account")}
            >
              <figure className="agentDp fx-ac">
                <img src={data?.profile?.photoURL} alt="" />
              </figure>
              <p className="fx-cl spacem" style={{ fontSize: "1.6rem" }}>
                <span>{data?.first_Name || "Zainab Abubakar"}</span>
                <span className="date">Fri, October 26, 2025</span>
              </p>
            </div>
          </div>
          <span className="agentDashboardHeadRight fx-ac fx-jc space1">
            <div className="agentDBSearchCont fx-ac space1">
              <button className="agentDashboardHeadBtn fx-ac fx-jc">
                <SearchIcon fontSize="medium" />
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="Start searching here.."
              />
            </div>
            <span className="notifBtn agentDashboardHeadBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="medium" />
              <figure>0</figure>
            </span>
            <button
              className="agentDashboardHeadBtn fx-ac fx-jc logout_st_accont fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
            </button>
          </span>
        </div>
        <div className="agentContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
