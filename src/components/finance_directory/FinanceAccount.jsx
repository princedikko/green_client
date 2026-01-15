import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./finance.css";
import { useDispatch } from "react-redux";
import * as Action from "../../store/redux/finance_reducer.js";

// importing components

// Icons import
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Logo from "../public_directory/public-routes-images/logos/Manga_Cons _Logo3.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// ________________________________________________________________________________________________
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function FinanceAccount() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.financeFunction.queue.financeData);
  const active = useSelector(
    (state) => state.financeFunction.dashboard?.nav_trace
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
    // redirect("/finance_login");
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
        return "Finance Money money moooneeey!!! Accounts";
    }
  }

  // FUNCTION FOR SIDE NAVIGATION BAR ACCORDION
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: "Dashboard Overview",
      icon: <DashboardRoundedIcon fontSize="large" />,
      hooks: "Dashboard Overview",
      active: "Dashboard Overview",
      children: [
        { title: "Finance Home", href: "/dashboard/stats" },
        { title: "Daily/Monthly Summary", href: "/dashboard/stats" },
        { title: "Payment Status Alerts", href: "/dashboard/stats" },
      ],
    },
    {
      title: "Fee Management",
      icon: <DashboardRoundedIcon fontSize="large" />,
      hooks: "Fee Management",
      active: "Fee Management",
      children: [
        { title: "Fee Structure Setup", href: "/dashboard/stats" },
        { title: "Invoice & Receipt Management", href: "/dashboard/stats" },
        { title: "Bulk Invoice Generation", href: "/dashboard/stats" },
        { title: "Discounts & Scholarships", href: "/dashboard/stats" },
        { title: "Late Fee Policies", href: "/dashboard/stats" },
      ],
    },
    {
      title: "Payment Processing",
      icon: <DashboardRoundedIcon fontSize="large" />,
      hooks: "Payment Processing",
      active: "Payment Processing",
      children: [
        {
          title: "Online Payment Gateway Integration",
          href: "/dashboard/stats",
        },
        { title: "Manual Payment Recording ", href: "/dashboard/stats" },
        { title: "Payment Reconciliation", href: "/dashboard/stats" },
        { title: "Refund Management", href: "/dashboard/stats" },
      ],
    },
    {
      title: "Expense & Salary Management",
      icon: <DashboardRoundedIcon fontSize="large" />,
      hooks: "Expense & Salary Management",
      active: "Expense & Salary Management",
      children: [
        { title: "Expense Tracker", href: "/dashboard/stats" },
        { title: "Staff Salary Management", href: "/dashboard/stats" },
        { title: "Vendor Payments", href: "/dashboard/stats" },
      ],
    },
    {
      title: "Reporting & Analytics",
      icon: <DashboardRoundedIcon fontSize="large" />,
      hooks: "Reporting & Analytics",
      active: "Reporting & Analytics",
      children: [
        { title: "Financial Reports", href: "/dashboard/stats" },
        { title: "Outstanding Fees Report", href: "/dashboard/stats" },
        { title: "Audit Trail", href: "/dashboard/stats" },
        { title: "Budget vs Actual Analysis", href: "/dashboard/stats" },
        { title: "Tax & Compliance Reports", href: "/dashboard/stats" },
      ],
    },
  ];
  // ___________________________________END_______________

  return (
    <section className="sectionfinanceProfile">
      <div className="financeProfileCont ">
        <div className="financeAside fx-cl fx-as space1">
          <div className="financeAsideSec fs2 cwb fx-cl fx-jb ">
            <div className="fx-cl spacem">
              <div
                className="fx-cl space2"
                style={{ width: "100%", marginBottom: "2rem" }}
              >
                <figure className="loginLogo fx-ac space2 fx-jc">
                  <img src={Logo} alt="logo" />
                </figure>
              </div>
              <div className="fx-cl spacem">
                <AsideItem
                  name="Dashboard"
                  icon={<PeopleAltRoundedIcon fontSize="large" />}
                  hooks="dashboard"
                  active="dashboard"
                />
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <span style={{ width: "90%" }}>
                      <Link
                        to={item.link}
                        className={` itemsPf cb fx-ac fx-jb space1 ${
                          active === `${item.hooks}` ? "active-prl-tab" : null
                        }`}
                        onClick={() => {
                          handleNavigator(item.active);
                          toggleIndex(index);
                          // setActive(`${props.active}`);
                        }}
                      >
                        <span className="fx-ac space1">
                          {item.icon}
                          {item.img}

                          <span>{item.title}</span>
                        </span>
                        <span className="drpdwn_icon fx-ac fx-jc">
                          {openIndex === index ? (
                            <KeyboardArrowDownIcon fontSize="small" />
                          ) : (
                            <KeyboardArrowRightIcon fontSize="small" />
                          )}
                        </span>
                      </Link>
                    </span>
                    {openIndex === index && (
                      <div className="fx-cl spacem">
                        {item.children.map((sub, idx) => (
                          <a key={idx} href={sub.href} className="">
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="fx-cl spacem" style={{ marginBottom: "2rem" }}>
              <figure className="prfLinksto fx-ac space2 fx-jb">
                <span>Inventory</span>
                <span>Edits</span>
              </figure>

              <AsideItem
                name="My account"
                icon={<PeopleAltRoundedIcon fontSize="large" />}
                hooks="account"
                active="account"
              />
              <AsideItem
                name="Account setting"
                icon={<PeopleAltRoundedIcon fontSize="large" />}
                hooks="setting"
                active="setting"
              />

              <button
                className=" logout_st_accont fx-ac space1"
                onClick={() => logOut()}
              >
                <LogoutOutlinedIcon />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
        <div className="financeHeader fx-ac fx-jb">
          <span className="fx-ac fx-jc space1">
            <span>
              <Link to="/cbt" className="fx-ac fx-jc space1">
                <CastForEducationOutlinedIcon fontSize="large" />
                <span>Finance Bar</span>
              </Link>
            </span>
          </span>
          <span className="fx-ac fx-jc space3">
            <span className="notifBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="large" />
              <figure>0</figure>
            </span>
            <span className="fx-ac fx-jc space1">
              <Link
                className="fx-ac space1"
                onClick={() => handleNavigator("account")}
              >
                <p>{data?.first_Name}</p>
                <figure className="dp fx-ac"></figure>
              </Link>
            </span>
          </span>
        </div>
        <div className="financeContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
