import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./clientsAccount.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/client_reducer.js";
import * as ActionHybrid from "../../store/redux/hybrid_reducer.js";

// importing components
import ClientsDashboard from "./clients-account-comps/ClientsDashboard.jsx";
import ClientEduTech from "./clients-account-comps/ClientEduTech.jsx";

// Icons import
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
// ________________________________________________________________________________________________
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Sales from "./clients-account-comps/inventory_comps/Sales.jsx";
import Quatations from "./clients-account-comps/inventory_comps/Quatations.jsx";

export default function ClientsAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(
    (state) => state.clientFunction?.queue?.clientData?.info
  );

  const active = useSelector(
    (state) => state.clientFunction?.dashboard?.nav_trace
  );
  const active_display = useSelector(
    (state) => state.clientFunction?.dashboard?.subNavBar_trace
  );
  const openIndex = useSelector(
    (state) => state.clientFunction?.dashboard?.toggleNavDropdown
  );
  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.toggleNavDropdown
  );

  // const [active, setActive] = useState("done");

  function logOut() {
    dispatch(DispatchLogout());
    // redirect("/client_login");
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
      console.log("main menu" + item);
    } catch (error) {
      console.log(error);
    }
  };

  // Redux functions for sub-navigation
  function handleSubNavigator(item) {
    dispatch(DispatchSubNavigator(item));
  }
  const DispatchSubNavigator = (item) => async (dispatch) => {
    try {
      dispatch(Action.dispatchDashboardSubNavigator({ item }));
      console.log("submenu" + item);
    } catch (error) {
      console.log(error);
    }
  };
  const products = [
    { name: "Milk", price: 2343 },
    { name: "Bread", price: 1200 },
    { name: "Eggs", price: 1500 },
    { name: "Rice", price: 5000 },
    { name: "Sugar", price: 2500 },
    { name: "Salt", price: 800 },
    { name: "Oil", price: 4500 },
    { name: "Butter", price: 3000 },
    { name: "Cheese", price: 4000 },
    { name: "Yogurt", price: 2000 },
    { name: "Juice", price: 1500 },
    { name: "Tea", price: 1200 },
    { name: "Coffee", price: 3000 },
    { name: "Cereal", price: 3500 },
    { name: "Pasta", price: 1800 },
    { name: "Chicken", price: 7000 },
    { name: "Beef", price: 9000 },
    { name: "Fish", price: 6000 },
    { name: "Vegetables", price: 2500 },
    { name: "Fruits", price: 3000 },
  ];

  function handlePayload(item) {
    dispatch(DispatchPayLoads(item));
  }
  const DispatchPayLoads = (item) => async (dispatch) => {
    try {
      dispatch(ActionHybrid.hybridAction({ products }));
      console.log("submenu" + item);
    } catch (error) {
      console.log(error);
    }
  };

  const breads = { active, active_display };
  function switchComponents() {
    switch (active_display) {
      case "account":
        return "account";
      case "dashboard":
        return <ClientsDashboard />;
      case "cbt":
        return <ClientEduTech data={data} />;
      case "sales":
        return <Sales breadcrumbs={breads} />;
      case "quatations":
        return <Quatations breadcrumbs={breads} />;
      case "setting":
        return "Change your Password here ...";
      default:
        return <ClientsDashboard />;
    }
  }

  // FUNCTION FOR SIDE NAVIGATION BAR ACCORDION
  function toggleIndex(index) {
    if (openIndex === index) {
      dispatch(DispatchOpenIndex(""));
      return;
    }
    dispatch(DispatchOpenIndex(index));
  }
  const DispatchOpenIndex = (index) => async (dispatch) => {
    try {
      dispatch(Action.dispatchClientOpenIndex({ index }));
      console.log("index:" + index);
    } catch (error) {
      console.log(error);
    }
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "dashboard",
      active: "dashboard",
    },

    {
      title: "Warehouse",
      icon: <SchoolRoundedIcon fontSize="medium" />,
      hooks: "cbt",
      active: "cbt",
      // children: [
      //   { title: "Take a Test", href: "/cbt/take-test" },
      //   { title: "Custom Tests", href: "/cbt/custom" },
      // ],
    },
    {
      title: "Inventory",
      icon: <VideoLibraryRoundedIcon fontSize="medium" />,
      hooks: "inventory",
      active: "inventory",
      children: [
        { title: "Sales", href: "/live/upcoming" },
        { title: "Quatations", href: "/live/join" },
        { title: "Discount", href: "/live/replays" },
        { title: "Subscriptions", href: "/live/replays" },
        { title: "Draft", href: "/live/replays" },
        { title: "Sell Return", href: "/live/replays" },
        { title: "dashboard", href: "/live/replays" },
      ],
    },
    {
      title: "Manage Products",
      icon: <MenuBookRoundedIcon fontSize="medium" />,
      hooks: "materials",
      active: "materials",
      children: [
        { title: "Products/Services", href: "/materials/past-questions" },
        { title: "Import", href: "/materials/downloads" },
        { title: "Selling Price Group", href: "/materials/videos" },
        { title: "Units", href: "/materials/formulas" },
        { title: "Brands", href: "/materials/formulas" },
        { title: "Categories", href: "/materials/formulas" },
        { title: "Tax rates", href: "/materials/formulas" },
        { title: "Variations", href: "/materials/formulas" },
      ],
    },
    {
      title: "Purchases",
      icon: <EventRoundedIcon fontSize="medium" />,
      hooks: "result",
      active: "result",
      children: [
        { title: "Recieves", href: "/materials/past-questions" },
        { title: "Returns", href: "/materials/downloads" },
        { title: "Order", href: "/materials/videos" },
      ],
    },

    {
      title: "Stock Management",
      icon: <InsightsRoundedIcon fontSize="medium" />,
      hooks: "performance",
      active: "performance",
      children: [
        { title: "Transfers", href: "/analytics/scores" },
        { title: "Import Opening Stock", href: "/analytics/weak-topics" },
        { title: "Reconciliation", href: "/analytics/time" },
        { title: "Discripancies", href: "/analytics/ai" },
        { title: "Adjusment", href: "/analytics/ai" },
      ],
    },

    {
      title: "Expanses",
      icon: <ForumRoundedIcon fontSize="medium" />,
      hooks: "community",
      active: "community",
      children: [
        { title: "All Expensives", href: "/community/forum" },
        { title: "Categories", href: "/community/groups" },
      ],
    },
    {
      title: "Invoices",
      icon: <EventRoundedIcon fontSize="medium" />,
      hooks: "schedule",
      active: "schedule",
      children: [
        { title: "Payments", href: "/schedule/timetable" },
        { title: "Invoices", href: "/schedule/attendance" },
        { title: "Billing Estimate", href: "/schedule/reminders" },
      ],
    },

    {
      title: "Production",
      icon: <WorkspacePremiumRoundedIcon fontSize="medium" />,
      hooks: "achievements",
      active: "achievements",
      children: [
        { title: "Recipe", href: "/rewards/badges" },
        { title: "Production", href: "/rewards/badges" },
        { title: "Settings", href: "/rewards/certificates" },
        { title: "Report", href: "/rewards/challenges" },
      ],
    },
    {
      title: "Reports",
      icon: <WorkspacePremiumRoundedIcon fontSize="medium" />,
      hooks: "achievements",
      active: "achievements",
      children: [
        { title: "Stock", href: "/rewards/challenges" },
        { title: "Expense & Account", href: "/rewards/badges" },
        { title: "Contact & CRM", href: "/rewards/badges" },
        { title: "Sales", href: "/rewards/certificates" },
        { title: "Purchases", href: "/rewards/challenges" },
        { title: "Profit/Loss", href: "/rewards/badges" },
        { title: "Invoices", href: "/rewards/badges" },
      ],
    },

    {
      title: "Account",
      icon: <AccountCircleRoundedIcon fontSize="medium" />,
      hooks: "account",
      active: "account",
      children: [
        { title: "Profile", href: "/account/profile" },
        { title: "Settings", href: "/account/settings" },
        { title: "Language", href: "/account/language" },
        { title: "Logout", href: "/logout" },
      ],
    },

    {
      title: "Help & Support",
      icon: <HelpCenterRoundedIcon fontSize="medium" />,
      hooks: "support",
      active: "support",
      children: [
        { title: "FAQs", href: "/support/faqs" },
        { title: "Contact Support", href: "/support/contact" },
        { title: "System Guide", href: "/support/guide" },
      ],
    },
  ];

  // ___________________________________END_______________

  return (
    <section className="sectionclientProfile">
      <div className="clientProfileCont ">
        <div className="clientAside fx-cl fx-as space1">
          <div className="clientAsideSec fs2 cwb fx-cl fx-jb ">
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
              <div className="clientProfileItemsCont fx-cl spacem">
                {menuItems.map((item, index) => (
                  <div className="fx-cl" key={index}>
                    <button
                      className={`clientDashboardNaV cb fx-ac fx-jb  ${
                        active === `${item.active}` ? "active-prl-tab" : null
                      }`}
                      onClick={() => {
                        handleNavigator(item.active);
                        toggleIndex(index);
                      }}
                    >
                      <span className=" fx-ac spacem">
                        <span className="clientDashboardNaVIcon">
                          {item.icon}
                          {item.img}
                        </span>

                        <span>{item.title}</span>
                      </span>
                      {item?.children && (
                        <span className="clientProfileDropdownBtn fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="clientSubNavCont fx-cl spacem">
                        {item?.children?.map((sub, idx) => (
                          <button
                            className={`clientDashboardSubMenu cb fx-ac space1  ${
                              active_display === `${sub.title.toLowerCase()}`
                                ? "active-prl-submenu"
                                : null
                            }`}
                            key={idx}
                            onClick={() => {
                              handleSubNavigator(sub.title.toLowerCase());
                            }}
                          >
                            <figure className="clientSubNavIcon fx-ac fx-jc">
                              <CheckIcon fontSize="small" />
                            </figure>

                            <span>{sub.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="clientHeader fx-ac fx-jb">
          <div className="clientDpCont fx-ac fx-jc space1">
            <div
              className="fx-ac space1"
              onClick={() => handleNavigator("account")}
            >
              <figure className="clientDp fx-ac">
                <img src={data?.profile?.photoURL} alt="" />
              </figure>
              <p className="fx-cl spacem" style={{ fontSize: "1.6rem" }}>
                <h3>Sokoto State Mall</h3>
                <span className="date">
                  <strong>Staff: </strong> {data?.first_Name || " Nana Othman"}
                </span>
              </p>
            </div>
          </div>
          <span className="clientDashboardHeadRight fx-ac fx-jc space1">
            <div className="clientDBSearchCont fx-ac space1">
              <button
                className="clientDashboardHeadBtn fx-ac fx-jc"
                onClick={() => navigate("/clients/warehouse_terminal")}
              >
                <SearchIcon fontSize="medium" />
              </button>
            </div>
            <button
              onClick={() => handlePayload()}
              className="notifBtn clientDashboardHeadBtn fx-ac fx-jc space1"
            >
              <NotificationsActiveOutlinedIcon fontSize="medium" />
              <figure>0</figure>
            </button>
            <button
              className="clientDashboardHeadBtn fx-ac fx-jc logout_st_accont fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
            </button>
          </span>
        </div>
        <div className="clientContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
