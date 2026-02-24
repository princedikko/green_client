import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./clientsAccount.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/client_reducer.js";
import * as ActionHybrid from "../../store/redux/hybrid_reducer.js";
import { productsData } from "./clients-account-comps/data.js";
//////////////////////////////////////////////////////////////////
/// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// Import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
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
import Discount from "./clients-account-comps/inventory_comps/Discount.jsx";
import Subscriptions from "./clients-account-comps/inventory_comps/Subscriptions.jsx";
import Drafts from "./clients-account-comps/inventory_comps/Drafts.jsx";
import SellReturn from "./clients-account-comps/inventory_comps/SellReturn.jsx";
import ProductServices from "./clients-account-comps/inventory_comps/ProductServices.jsx";
import Imports from "./clients-account-comps/inventory_comps/Imports.jsx";
import PriceGroups from "./clients-account-comps/inventory_comps/PriceGroups.jsx";
import Units from "./clients-account-comps/inventory_comps/Units.jsx";
import Brands from "./clients-account-comps/inventory_comps/Brands.jsx";
import Categories from "./clients-account-comps/inventory_comps/Categories.jsx";
import TaxRate from "./clients-account-comps/inventory_comps/TaxRate.jsx";
import Variations from "./clients-account-comps/inventory_comps/Variations.jsx";
import Recives from "./clients-account-comps/inventory_comps/Recieves.jsx";
import Returns from "./clients-account-comps/inventory_comps/Returns.jsx";
import FilterOrders from "./clients-account-comps/inventory_comps/filters/FilterOders.jsx";
import Orders from "./clients-account-comps/inventory_comps/Orders.jsx";
import Transfers from "./clients-account-comps/inventory_comps/Transfers.jsx";
import OpeningStock from "./clients-account-comps/inventory_comps/OpeningStock.jsx";
import Reconciliation from "./clients-account-comps/inventory_comps/Reconciliation.jsx";
import Discripancies from "./clients-account-comps/inventory_comps/Discripancies.jsx";
import FilterAdjustment from "./clients-account-comps/inventory_comps/filters/FilterAdjustment.jsx";
import Adjustment from "./clients-account-comps/inventory_comps/Adjustment.jsx";
import Expenses from "./clients-account-comps/inventory_comps/Expenses.jsx";
import CategoriesX from "./clients-account-comps/inventory_comps/CategoriesX.jsx";
import Invoicing from "./clients-account-comps/inventory_comps/Invoicing.jsx";
import Production from "./clients-account-comps/inventory_comps/Production.jsx";
import ReportsMain from "./clients-account-comps/reports_comps/ReportsMain.jsx";

export default function ClientsAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(
    (state) => state.clientFunction?.queue?.clientData?.info,
  );

  const active = useSelector(
    (state) => state.clientFunction?.dashboard?.nav_trace,
  );
  const active_display = useSelector(
    (state) => state.clientFunction?.dashboard?.subNavBar_trace,
  );
  const openIndex = useSelector(
    (state) => state.clientFunction?.dashboard?.toggleNavDropdown,
  );
  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.toggleNavDropdown,
  );
  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);
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

  function handleTerminal() {
    navigate("/clients/warehouse_terminal");
    handlePayload();
  }
  // Redux functions for dashboards navigation
  function handleNavigator(item) {
    dispatch(Action.dispathcDashboardNavigator({ item }));
  }
  console.log("Products DATA: ", productsData);
  // Redux functions for sub-navigation
  function handleSubNavigator(item) {
    dispatch(Action.dispatchDashboardSubNavigator({ item }));
  }

  function handlePayload(item) {
    dispatch(DispatchPayLoads(item));
  }
  const DispatchPayLoads = (item) => async (dispatch) => {
    try {
      dispatch(ActionHybrid.hybridAction({ productsData }));
      console.log("Prod: " + item);
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
      case "discount":
        return <Discount breadcrumbs={breads} />;
      case "subscriptions":
        return <Subscriptions breadcrumbs={breads} />;
      case "draft":
        return <Drafts breadcrumbs={breads} />;
      case "productservices":
        return <ProductServices breadcrumbs={breads} />;
      case "imports":
        return <Imports breadcrumbs={breads} />;
      case "pricegroups":
        return <PriceGroups breadcrumbs={breads} />;
      case "units":
        return <Units breadcrumbs={breads} />;
      case "brands":
        return <Brands breadcrumbs={breads} />;
      case "categories":
        return <Categories breadcrumbs={breads} />;
      case "taxrate":
        return <TaxRate breadcrumbs={breads} />;
      case "variations":
        return <Variations breadcrumbs={breads} />;
      case "recieves":
        return <Recives breadcrumbs={breads} />;
      case "returns":
        return <Returns breadcrumbs={breads} />;
      case "orders":
        return <Orders breadcrumbs={breads} />;
      case "transfers":
        return <Transfers breadcrumbs={breads} />;
      case "openingstock":
        return <OpeningStock breadcrumbs={breads} />;
      case "reconciliation":
        return <Reconciliation breadcrumbs={breads} />;
      case "discripancies":
        return <Discripancies breadcrumbs={breads} />;
      case "adjusment":
        return <Adjustment breadcrumbs={breads} />;
      case "expenses":
        return <Expenses breadcrumbs={breads} />;
      case "categoriesx":
        return <CategoriesX breadcrumbs={breads} />;
      case "invoicing":
        return <Invoicing breadcrumbs={breads} />;
      case "production":
        return <Production breadcrumbs={breads} />;
      case "reportsmain":
        return <ReportsMain breadcrumbs={breads} />;

      // /.....................................
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
  console.log("Active Display:" + active_display);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardRoundedIcon fontSize="medium" />,
      hooks: "dashboard",
      active: "dashboard",
    },
    {
      title: "Inventory",
      icon: <VideoLibraryRoundedIcon fontSize="medium" />,
      hooks: "inventory",
      active: "inventory",
      children: [
        {
          title: "Sales",
          hook: "sales",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Quatations",
          hook: "quatations",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Discount",
          hook: "discount",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Subscriptions",
          hook: "subscriptions",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Draft",
          hook: "draft",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Sell Return",
          hook: "sellreturn",
          tabs: ["main", "completed", "pending"],
        },
      ],
    },
    {
      title: "Manage Products",
      icon: <MenuBookRoundedIcon fontSize="medium" />,
      hooks: "materials",
      active: "materials",
      children: [
        {
          title: "ProductServices",
          hook: "productservices",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Imports",
          hook: "imports",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Pricegroups",
          hook: "pricegroups",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Units",
          hook: "units",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Brands",
          hook: "brands",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Categories",
          hook: "categories",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Taxrate",
          hook: "taxrate",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Variations",
          hook: "variations",
          tabs: ["main", "completed", "pending"],
        },
      ],
    },
    {
      title: "Purchases",
      icon: <EventRoundedIcon fontSize="medium" />,
      hooks: "result",
      active: "result",
      children: [
        {
          title: "Recieves",
          hook: "recieves",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Returns",
          hook: "returns",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Orders",
          hook: "orders",
          tabs: ["main", "completed", "pending"],
        },
      ],
    },
    {
      title: "Manage Stock",
      icon: <InsightsRoundedIcon fontSize="medium" />,
      hooks: "performance",
      active: "performance",
      children: [
        {
          title: "Transfers",
          hook: "transfers",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "openingstock",
          hook: "openingstock",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Reconciliation",
          hook: "reconciliation",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Discripancies",
          hook: "discripancies",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Adjusment",
          hook: "adjusment",
          tabs: ["main", "completed", "pending"],
        },
      ],
    },
    {
      title: "Expanses",
      icon: <ForumRoundedIcon fontSize="medium" />,
      hooks: "community",
      active: "community",
      children: [
        {
          title: "Expenses",
          hook: "expenses",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "CategoriesX",
          hook: "categoriesx",
          tabs: ["main", "completed", "pending"],
        },
      ],
    },
    {
      title: "Invoicing",
      icon: <EventRoundedIcon fontSize="medium" />,
      hooks: "invoicing",
      active: "invoicing",
      //   children: [
      //     {
      //       title: "Payments",
      //       hook: "payments",
      //       tabs: ["main", "completed", "pending"],
      //     },
      //     {
      //       title: "Invoices",
      //       hook: "invoices",
      //       tabs: ["main", "completed", "pending"],
      //     },
      //     {
      //       title: "Billing Estimate",
      //       hook: "billingestimate",
      //       tabs: ["main", "completed", "pending"],
      //     },
      //   ],
    },
    {
      title: "Production",
      icon: <WorkspacePremiumRoundedIcon fontSize="medium" />,
      hooks: "production",
      active: "production",
      // children: [
      //   {
      //     title: "Recipe",
      //     hook: "recipe",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Production",
      //     hook: "production",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Settings",
      //     hook: "settings",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Report",
      //     hook: "report",
      //     tabs: ["main", "completed", "pending"],
      //   },
      // ],
    },
    {
      title: "Reports",
      icon: <WorkspacePremiumRoundedIcon fontSize="medium" />,
      hooks: "reportsmain",
      active: "reportsmain",
      // children: [
      //   {
      //     title: "Stock",
      //     hook: "stock",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Expense & Account",
      //     hook: "expense&account",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Contact & CRM",
      //     hook: "contact&crm",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Sales",
      //     hook: "sales",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Purchases",
      //     hook: "purchases",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Profit/Loss",
      //     hook: "profit/loss",
      //     tabs: ["main", "completed", "pending"],
      //   },
      //   {
      //     title: "Invoices",
      //     hook: "invoices",
      //     tabs: ["main", "completed", "pending"],
      //   },
      // ],
    },
    {
      title: "Account",
      icon: <AccountCircleRoundedIcon fontSize="medium" />,
      hooks: "account",
      active: "account",
      children: [
        {
          title: "Profile",
          hook: "profile",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Settings",
          hook: "settings",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Language",
          hook: "language",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "Logout",
          hook: "logout",
          tabs: ["main", "completed", "pending"],
        },
      ],
    },
    {
      title: "Help & Support",
      icon: <HelpCenterRoundedIcon fontSize="medium" />,
      hooks: "support",
      active: "support",
      children: [
        { title: "FAQs", hook: "faqs", tabs: ["main", "completed", "pending"] },
        {
          title: "Contact Support",
          hook: "contactsupport",
          tabs: ["main", "completed", "pending"],
        },
        {
          title: "System Guide",
          hook: "systemguide",
          tabs: ["main", "completed", "pending"],
        },
      ],
    },
  ];

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
                    {item.children ? (
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
                    ) : (
                      <button
                        className={`clientDashboardNaV cb fx-ac fx-jb  ${
                          active === `${item.active}` ? "active-prl-tab" : null
                        }`}
                        onClick={() => {
                          handleNavigator(item.active);
                          toggleIndex(index);
                          handleSubNavigator(item.hooks);
                        }}
                      >
                        <span className=" fx-ac spacem">
                          <span className="clientDashboardNaVIcon">
                            {item.icon}
                            {item.img}
                          </span>

                          <span>{item.title}</span>
                        </span>
                      </button>
                    )}

                    {openIndex === index ? (
                      <div
                        className={` ${
                          item?.children && "clientSubNavCont fx-cl spacem"
                        }`}
                      >
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
                    ) : null}
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
                  <strong>General Manager: </strong>{" "}
                  {data?.first_Name || " Othman Jool"}
                </span>
              </p>
            </div>
          </div>
          <span className="clientDashboardHeadRight fx-ac fx-jc space1">
            <div className="clientDBSearchCont fx-ac space1">
              <button
                className="invoicing_export_btn  fx-ac fx-jc"
                onClick={() => handleTerminal()}
              >
                Point of Sale
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
        <div className="clientContents clientAccountScroll">
          {switchComponents()}
        </div>
      </div>
    </section>
  );
}
