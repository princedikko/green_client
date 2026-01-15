import { useState, useReducer, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Action from "../../store/redux/admin_reducer.js";

import "./adminProfile.css";
// importing components
import AccountCompAdmin from "./admin_profile_comps/AccountCompAdmin.jsx";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import ApprovalIcon from "@mui/icons-material/Approval";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { PassportUpload } from "./admin_profile_comps/AdminFileUpload.jsx";
import Busery from "./admin_profile_comps/Busery.jsx";
// Icons import
import Logo from "../public_directory/public-routes-images/logos/Manga_Cons _Logo3.png";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import IsoIcon from "@mui/icons-material/Iso";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LockResetIcon from "@mui/icons-material/LockReset";
import BalanceIcon from "@mui/icons-material/Balance";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SavingsIcon from "@mui/icons-material/Savings";
// ?_______________?
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import VaccinesIcon from "@mui/icons-material/Vaccines";
// Admin Components __________________________________________________________________________________
import IsLoading from "../../isLoading.jsx";
import AdmitApplicants from "./admin_profile_comps/Admit_Applicants";
import ApplicantLogs from "./admin_profile_comps/ApplicantsLogs";
import FormSales from "./admin_profile_comps/FormSales";
import Acceptance from "./admin_profile_comps/Acceptance";
import GeneralReport from "./admin_profile_comps/GeneralReport";
import Students from "./admin_profile_comps/Students";
import StaffEmployement from "./admin_profile_comps/StaffEmployment.jsx";
import Administration from "./admin_profile_comps/Administration.jsx";
import MconsStaff from "./admin_profile_comps/MconsStaff.jsx";
import Inboxes from "./admin_profile_comps/Inboxes.jsx";
import StaffPreview from "./admin_profile_comps/StaffPreview.jsx";
import MidwiferyProgramme from "./admin_profile_comps/MidwiferyProgramme.jsx";
import NursingProgramme from "./admin_profile_comps/NursingProgramme.jsx";
import GSTProgramme from "./admin_profile_comps/GSTProgramme.jsx";
import Hostels from "./admin_profile_comps/Hostels.jsx";
//  __________________________________________________________________________________
import Icon from "./icons/mm.png";
import Icona from "./icons/mma.png";
import Icons from "./icons/mms.png";
import BuseryServices, {
  FullPaymentComp,
} from "./admin_profile_comps/BuseryServices.jsx";
import { act } from "react";

export default function AdminProfile() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adminFunction.queue.adminData);
  const active = useSelector(
    (state) => state.adminFunction.dashboard?.nav_trace
  );

  const [subMenActive, setSubMenuActive] = useState("done");
  const [subMenu, setSubMenu] = useState(false);

  function SubMenuItem(props) {
    return (
      <span style={{ width: "100%" }}>
        <Link
          to={props.link}
          className={` admAsideBtn fx-ac  space1 ${
            subMenActive == `${props.hooks}` ? "active-admprl-tab" : null
          }`}
          onClick={() => {
            // handleNavigator(props.active);
            setSubMenuActive(`${props.active}`);
            setSubMenu(true);
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
  function AsideItem(props) {
    return (
      <Link
        to={props.link}
        className={` admAsideBtn cb fx-ac fx-jb space3 ${
          active == `${props.hooks}` ? "active-admprl-tab" : null
        }`}
        onClick={() => {
          handleNavigator(props.active);
          setSubMenu(false);
        }}
      >
        <span className="fx-ac space1">
          {props.icon}
          {props.img}
          <span>{props.name}</span>
        </span>
        <span className="drpdwn_icon fx-ac fx-jc">{props.drpdwn_icon}</span>
      </Link>
    );
  }

  function switchComponents() {
    switch (active) {
      case "account":
        return <AccountCompAdmin setLoading={setLoading} />;
      case "administrative":
        return <Administration setLoading={setLoading} />;
      case "staff":
        return <MconsStaff setLoading={setLoading} />;
      case "admit_applicant":
        return <AdmitApplicants setLoading={setLoading}></AdmitApplicants>;
      case "app_logs":
        return <ApplicantLogs setLoading={setLoading}></ApplicantLogs>;
      case "form_sum":
        return <FormSales setLoading={setLoading}></FormSales>;
      case "form sales":
        return <FormSales setLoading={setLoading}></FormSales>;
      case "accept_reg":
        return <Acceptance setLoading={setLoading}></Acceptance>;
      case "reports":
        return <GeneralReport setLoading={setLoading}></GeneralReport>;
      case "student":
        return <Students setLoading={setLoading}></Students>;
      case "midwifery":
        return (
          <MidwiferyProgramme setLoading={setLoading}></MidwiferyProgramme>
        );
      case "nursing":
        return <NursingProgramme setLoading={setLoading}></NursingProgramme>;
      case "gst":
        return <GSTProgramme setLoading={setLoading}></GSTProgramme>;
      case "setting":
        return <AccountCompAdmin setLoading={setLoading} />;

      case "add and drop":
        return "adding and dropping courses coming soon!...";
      case "inbox":
        return <Inboxes setLoading={setLoading} />;
      case "result upload":
        return "result upload";
      case "tuition":
        return <Busery setLoading={setLoading} />;
      case "busery":
        return <Busery setLoading={setLoading} />;
      case "employement":
        return <StaffEmployement setLoading={setLoading} />;
      case "hostel":
        return <Hostels setLoading={setLoading} />;
      case "services":
        return (
          <BuseryServices
            setOpenModal={setOpenModal}
            setShowModal={setShowModal}
            setLoading={setLoading}
            info={data}
          />
        );
      default:
        return <AccountCompAdmin setLoading={setLoading} />;
    }
  }
  function submMenuSwitch() {
    switch (subMenActive) {
      case "account":
        return <AccountCompAdmin setLoading={setLoading} />;
      case "administrative":
        return <Administration setLoading={setLoading} />;
      case "staff":
        return <MconsStaff setLoading={setLoading} />;
      case "admit_applicant":
        return <AdmitApplicants setLoading={setLoading}></AdmitApplicants>;
      case "app_logs":
        return <ApplicantLogs setLoading={setLoading}></ApplicantLogs>;
      case "form_sum":
        return <FormSales setLoading={setLoading}></FormSales>;
      case "form sales":
        return <FormSales setLoading={setLoading}></FormSales>;
      case "accept_reg":
        return <Acceptance setLoading={setLoading}></Acceptance>;
      case "reports":
        return <GeneralReport setLoading={setLoading}></GeneralReport>;
      case "student":
        return <Students setLoading={setLoading}></Students>;
      case "midwifery":
        return (
          <MidwiferyProgramme setLoading={setLoading}></MidwiferyProgramme>
        );
      case "nursing":
        return <NursingProgramme setLoading={setLoading}></NursingProgramme>;
      case "gst":
        return <GSTProgramme setLoading={setLoading}></GSTProgramme>;
      case "setting":
        return <AccountCompAdmin setLoading={setLoading} />;

      case "add and drop":
        return "adding and dropping courses coming soon!...";
      case "inbox":
        return <Inboxes setLoading={setLoading} />;
      case "result upload":
        return "result upload";
      case "tuition":
        return <Busery setLoading={setLoading} />;
      case "busery":
        return <Busery setLoading={setLoading} />;
      case "employement":
        return <StaffEmployement setLoading={setLoading} />;
      case "hostel":
        return <Hostels setLoading={setLoading} />;
      case "services":
        return <BuseryServices setLoading={setLoading} info={data} />;
      default:
        return <AccountCompAdmin setLoading={setLoading} />;
    }
  }
  function switchNavBar() {
    switch (active) {
      case "admit_applicant":
        return <ApplNavBar />;
      case "app_logs":
        return <ApplNavBar />;
      case "form_sum":
        return <ApplNavBar />;
      case "accept_reg":
        return <ApplNavBar />;
      case "reports":
        return <ApplNavBar />;
      case "student":
        return <StudentNavBar />;
      case "nursing":
        return <ProgrammesNavBar />;
      case "midwifery":
        return <ProgrammesNavBar />;
      case "gst":
        return <ProgrammesNavBar />;
      case "add and drop":
        return <StudentNavBar />;
      case "result upload":
        return <StudentNavBar />;

      case "hostel":
        return <BuseryNavBar />;
      case "form sales":
        return <BuseryNavBar />;
      case "services":
        return <BuseryNavBar />;
      case "tuition":
        return <BuseryNavBar />;
      default:
        return null;
    }
  }
  function switchCompsHeader() {
    switch (active) {
      case "admit_applicant":
        return <h2>Recommended Applicants for Admission</h2>;
      case "app_logs":
        return <h2>Application Logs</h2>;
      case "form_sum":
        return <h2>Form Sales Summury</h2>;
      case "accept_reg":
        return <h2>Applicants Responses for Granted Admission</h2>;
      case "reports":
        return <h2>General Application Report</h2>;

      default:
        return null;
    }
  }

  function logout() {
    dispatch(DispatchLogout());
    // redirect("/management_login");
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

  function ApplNavBar() {
    return (
      <div className="adminHubSubNav g g5 space2">
        <SubMenuItem
          name="Application Logs"
          // icon={<PeopleAltRoundedIcon fontSize="small" />}
          hooks="app_logs"
          active="app_logs"
        />
        <SubMenuItem
          name="Admit Applicant"
          // icon={<DashboardRoundedIcon fontSize="small" />}
          hooks="admit_applicant"
          active="admit_applicant"
        />

        <SubMenuItem
          name="Form Sales"
          // icon={<AssignmentRoundedIcon fontSize="small" />}
          hooks="form_sum"
          active="form_sum"
        />
        <SubMenuItem
          name="Acceptance Reports"
          // icon={<CategoryRoundedIcon fontSize="small" />}
          hooks="accept_reg"
          active="accept_reg"
        />
        <SubMenuItem
          name="General Reports"
          // icon={<PeopleAltRoundedIcon fontSize="small" />}
          hooks="reports"
          active="reports"
        />
      </div>
    );
  }
  function StudentNavBar() {
    return (
      <div className="administrativeHubSubNav g g5 space2">
        <SubMenuItem
          name="Students"
          icon={<CastForEducationIcon fontSize="large" />}
          hooks="student"
          active="student"
        />
        <SubMenuItem
          name="Add/Drop Courses"
          icon={<IsoIcon fontSize="large" />}
          hooks="add and drop"
          active="add and drop"
        />
        <SubMenuItem
          name="Result upload"
          icon={<CloudUploadIcon fontSize="large" />}
          hooks="result upload"
          active="result upload"
        />

        <SubMenuItem
          name="Busery"
          icon={<LockResetIcon fontSize="large" />}
          hooks="busery"
          active="busery"
        />
      </div>
    );
  }
  function BuseryNavBar() {
    return (
      <div className="administrativeHubSubNav g g5 space2">
        <SubMenuItem
          name="Tuitions"
          icon={<RequestQuoteIcon fontSize="large" />}
          hooks="tuition"
          active="tuition"
        />
        <SubMenuItem
          name="Hostel allocation"
          icon={<CurrencyExchangeIcon fontSize="large" />}
          hooks="hostel"
          active="hostel"
        />
        <SubMenuItem
          name="Form sales"
          icon={<PriceCheckIcon fontSize="large" />}
          hooks="form sales"
          active="form sales"
        />

        <SubMenuItem
          name="Services"
          icon={<SavingsIcon fontSize="large" />}
          hooks="services"
          active="services"
        />
      </div>
    );
  }
  function ProgrammesNavBar() {
    return (
      <div className="administrativeHubSubNav g g3 space2">
        <SubMenuItem
          name="Department of General Nursing"
          icon={<VaccinesIcon fontSize="large" />}
          hooks="nursing"
          active="nursing"
        />
        <SubMenuItem
          name="Department of Midwifery"
          icon={<BabyChangingStationIcon fontSize="large" />}
          hooks="midwifery"
          active="midwifery"
        />
        <SubMenuItem
          name="Division of General Studies"
          icon={<HistoryEduIcon fontSize="large" />}
          hooks="gst"
          active="gst"
        />
      </div>
    );
  }
  function closeModalDiv() {
    setOpenModal(false);
    setShowModal("");
  }
  function toggleModalBoxContents() {
    switch (showModal) {
      case "services full payment":
        return <FullPaymentComp />;
      default:
        return null;
    }
  }

  return (
    <section className="sectionAdministrativeProfile">
      {openModal && (
        <div id="modalContainer" onClick={() => closeModalDiv()}>
          {toggleModalBoxContents()}
        </div>
      )}
      <div className="AdministrativeProfileCont ">
        <div className="adminAside fx-cl fx-as space1">
          <div className="adminAsideSec fs2 cwb fx-cl fx-as ">
            <div
              className="fx-ac"
              style={{ width: "100%", marginBottom: "3.5rem" }}
            >
              <button className="adminPrHomeBtn fx-ac spacem">
                <AdminPanelSettingsIcon
                  style={{ fontSize: "3.5rem", color: "#1d56fb" }}
                />
                <span>UDUPS</span>
              </button>
            </div>
            <div className="fx-jb fx-cl space2">
              <div className="fs2 cwb fx-cl fx-ac space1">
                <div className="asideItmCont fx-cl spacem">
                  <AsideItem
                    name="Administration"
                    icon={
                      <AdminPanelSettingsIcon style={{ fontSize: "18.5px" }} />
                    }
                    drpdwn_icon={
                      active === "administrative" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                    hooks="administrative"
                    active="administrative"
                  />
                  <AsideItem
                    name="Programmes"
                    icon={<SchoolIcon style={{ fontSize: "18.5px" }} />}
                    hooks="nursing"
                    active="nursing"
                    drpdwn_icon={
                      active === "nursing" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                  />
                  <AsideItem
                    name="MCONS Staff"
                    icon={<Diversity3Icon style={{ fontSize: "18.5px" }} />}
                    drpdwn_icon={
                      active === "staff" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                    hooks="staff"
                    active="staff"
                  />
                </div>

                <div className="asideItmCont fx-cl spacem">
                  <AsideItem
                    name="Students"
                    icon={<SchoolIcon style={{ fontSize: "18.5px" }} />}
                    drpdwn_icon={
                      active === "student" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                    hooks="student"
                    active="student"
                  />
                  <AsideItem
                    name="Busery"
                    icon={
                      <AssuredWorkloadIcon style={{ fontSize: "18.5px" }} />
                    }
                    drpdwn_icon={
                      active === "tuition" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                    hooks="tuition"
                    active="tuition"
                  />
                  <AsideItem
                    name="Employment"
                    icon={<WorkHistoryIcon style={{ fontSize: "18.5px" }} />}
                    drpdwn_icon={
                      active === "employement" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                    hooks="employement"
                    active="employement"
                  />
                </div>

                <div className="asideItmCont fx-cl spacem">
                  {" "}
                  <AsideItem
                    name="Inboxes"
                    icon={<MailIcon style={{ fontSize: "18.5px" }} />}
                    drpdwn_icon={
                      active === "inbox" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                    hooks="inbox"
                    active="inbox"
                  />
                  <AsideItem
                    name="Application Logs"
                    icon={<ApprovalIcon style={{ fontSize: "18.5px" }} />}
                    drpdwn_icon={
                      active === "app_logs" ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )
                    }
                    hooks="app_logs"
                    active="app_logs"
                  />
                </div>
              </div>

              <div className="aaa">
                <figure className="prfLinksto fx-ac space2 fx-jb">
                  <span>Inventory</span>
                  <span>Edits</span>
                </figure>
                <AsideItem
                  name="Account"
                  img={<img src={Icon} alt="icon" />}
                  active="account"
                />
                <AsideItem
                  name="Setting"
                  img={<img src={Icona} alt="icon" />}
                  active="setting"
                />
                <div
                  className="fx-ac space1"
                  style={{ padding: "0.7rem 1.8rem" }}
                >
                  <img
                    src={Icons}
                    alt=""
                    style={{ width: "1.8rem", height: "1.8rem" }}
                  />
                  <Link
                    to={`/registrations`}
                    target="blank"
                    style={{ color: "#999" }}
                  >
                    New applicant
                  </Link>
                </div>

                <button
                  className=" logout_admin fx-ac space1"
                  onClick={() => logout()}
                >
                  <LogoutOutlinedIcon />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="adminHeader fx-ac fx-jb">
          <h3 className="fx-ac spacem">
            <strong>Hi {data.first_Name}!</strong>
          </h3>

          <span className="fx-ac fx-jc space2">
            <Link className="admrtcBtn fx-ac spacem">
              <CloudSyncOutlinedIcon />
              <span>Real time</span>
            </Link>
            <span className="notifBtn fx-ac fx-jc space1">
              <NotificationsActiveOutlinedIcon fontSize="large" />
              <figure>0</figure>
            </span>
            <span className="notifBtn fx-ac fx-jc space1">
              <SettingsOutlinedIcon fontSize="large" />
            </span>
            <span className="fx-ac fx-jc space1">
              <Link
                className="fx-ac space1"
                onClick={() => handleNavigator("account")}
              >
                <figure className="dp_admin fx-ac">
                  <img src={data?.profileImage.url} alt="dp" />
                </figure>
              </Link>
            </span>
          </span>
        </div>
        <div className="adminContents fx-cl space4">
          {switchNavBar() ? switchNavBar() : <span>&nbsp;</span>}
          {data.account_status === "In-active" ? (
            <div className="fx-cl">
              <p>Please upload your Passport to activate your account</p>

              <PassportUpload objectId={data._id} />
            </div>
          ) : (
            <div className="adm_scroll">
              {subMenu ? submMenuSwitch() : switchComponents()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
