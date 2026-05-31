import React, { useState } from "react";
import "./accountPage.css";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import UniLogo from "./images/UniLogo3.png";
// MUI Icon Imports
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CodeIcon from "@mui/icons-material/Code";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LinkIcon from "@mui/icons-material/Link";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShareIcon from "@mui/icons-material/Share";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TuneIcon from "@mui/icons-material/Tune";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";

import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import UserProfile from "./components/UserProfile";
import Preferences from "./components/Preferences";
import CompanyDetails from "./components/CompanyDetails";
import Addresses from "./components/Addresses";
import PlanBilling from "./components/PlanBilling";
import UserAccessControl from "./components/UsersAccessControl";
import CustomFields from "./components/CustomFields";
import ManageAlerts from "./components/ManageAlerts";
import FeatureControls from "./components/FeaturesControl";
import CreateLabels from "./components/CreateLabels";
import PublicApiBeta from "./components/PublicApiBeta";
import UnitsOfMeasure from "./components/UnitOfMeasure";
import EmployStaff from "./components/EmployStaff";

export default function AccountContext() {
  const [searchParams, setSearchParams] = useSearchParams();
  const redirect = useNavigate();
  const activeTab = searchParams.get("page") || "personal-profile";
  const handleTabChange = (tab) => {
    setSearchParams({ page: tab });
  };
  const clientData = useSelector(
    (state) => state.clientFunction?.queue?.clientData?.clientInfo,
  );

  const navigationItems = [
    {
      id: "personal-profile",
      label: "Personal Profile",
      status: "success",
      icon: <PersonOutlineIcon fontSize="large" />,
    },
    {
      id: "company-details",
      label: "Company Details",
      status: "success",
      icon: <BusinessOutlinedIcon fontSize="large" />,
    },
    {
      id: "user-access-control",
      label: "User Access Control",
      status: "success",
      icon: <AdminPanelSettingsOutlinedIcon fontSize="large" />,
    },

    {
      id: "addresses",
      label: "Addresses",
      status: "success",
      icon: <LocationOnOutlinedIcon fontSize="large" />,
    },
    {
      id: "plan-billing",
      label: "Billing & Subscription",
      status: "success",
      icon: <CreditCardOutlinedIcon fontSize="large" />,
    },
    {
      id: "manage-alerts",
      label: "Manage Alerts",
      status: "success",
      icon: <NotificationsActiveOutlinedIcon fontSize="large" />,
    },
    {
      id: "preferences",
      label: "System Preferences",
      status: "success",
      icon: <TuneIcon fontSize="large" />,
    },

    {
      id: "units-of-measure",
      label: "Units of Measure",
      status: "success",
      icon: <StraightenOutlinedIcon fontSize="large" />,
    },

    {
      id: "feature-controls",
      label: "Feature Controls",
      status: "success",
      icon: <ToggleOnOutlinedIcon fontSize="large" />,
    },

    {
      id: "custom-fields",
      label: "Custom Fields",
      status: "success",
      icon: <ViewListOutlinedIcon fontSize="large" />,
    },
    {
      id: "create-labels",
      label: "Create Labels",
      status: "success",
      icon: <LocalOfferOutlinedIcon fontSize="large" />,
    },
    {
      id: "public-api-beta",
      label: "Public API (beta)",
      status: "success",
      icon: <ApiOutlinedIcon fontSize="large" />,
    },
  ];

  const renderActiveContent = () => {
    switch (activeTab) {
      case "personal-profile":
        return <UserProfile data={clientData} />;

      case "preferences":
        return <Preferences data={clientData} />;

      case "company-details":
        return <CompanyDetails data={clientData} />;

      case "addresses":
        return <Addresses data={clientData} />;

      case "plan-billing":
        return <PlanBilling data={clientData} />;

      case "user-access-control":
        return <UserAccessControl data={clientData} />;

      case "custom-fields":
        return <CustomFields data={clientData} />;

      case "units-of-measure":
        return <UnitsOfMeasure data={clientData} />;

      case "manage-alerts":
        return <ManageAlerts data={clientData} />;

      case "feature-controls":
        return <FeatureControls data={clientData} />;

      case "create-labels":
        return <CreateLabels data={clientData} />;

      case "public-api-beta":
        return <PublicApiBeta data={clientData} />;

      case "employ-staff-member":
        return <EmployStaff data={clientData} />;

      default:
        return <UserProfile data={clientData} />;
    }
  };

  return (
    <div className="sectionAccountPage fx-cl " style={{ minHeight: "100vh" }}>
      {/* MAIN */}
      <main className="g g2 space2  ">
        {/* SIDEBAR */}
        <aside className="fx-cl space4 fx-jb  ">
          <div className="fx-ac spacem">
            <figure style={{ width: "8.4rem", paddingLeft: "3.2rem" }}>
              <img src={UniLogo} alt="" />
            </figure>
            <span className="fs6 fw500">Universe</span>
          </div>
          <div className="sectionAccountPageNavi fx-cl space1">
            <span className="fw500 fs4" style={{ paddingLeft: "3rem" }}>
              MENU
            </span>
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <div
                  key={item.id}
                  className={`navItemAcctPage fx-jb fx-ac fs6 ${activeTab === item.id && "activeNavi"}`}
                  onClick={() => handleTabChange(item.id)}
                >
                  <div className="fx-ac space2">
                    <div className="navStyleAcctPage">&nbsp;</div>
                    <div className="fx-ac space">
                      <figure>{item.icon}</figure>
                      <span className="fs2">{item.label}</span>
                    </div>
                  </div>

                  {/* <div>
                  {item.status === "success" && (
                    <DoneAllOutlinedIcon fontSize="large" />
                  )}
                  {item.status === "error" && (
                    <ErrorOutlineIcon
                      fontSize="large"
                      style={{ color: "red" }}
                    />
                  )}
                </div> */}
                </div>
              );
            })}
          </div>
          <div className="bottomNavAcctCard fx-cl space2">
            <span className="fw500 fs6">Download Mobile App</span>
            <div className="fx-cl spacem">
              <span className="fw400 fs4 fx-jc">Get easy in other way</span>
            </div>
            <div className="fx-ac fx-jc space2">
              <button className=" fx-ac fx-jc space1">
                <span>Download</span>
              </button>
            </div>
          </div>
        </aside>

        <div className="fx-cl spacem">
          {/* HEADER */}
          <header className="fx-jb fx-ac fs5">
            <div className="fx-ac space2">
              <nav className="fx space1 fs2 fw500">
                <span onClick={() => redirect(`/`)}>Home</span>
                <span
                  onClick={() =>
                    redirect(`/clients/${clientData?._id}/account`)
                  }
                >
                  Dashboard
                </span>
                <span onClick={() => handleTabChange("plan-billing")}>
                  Subscription
                </span>
              </nav>
            </div>

            <div className="fx-ac space1">
              <button className="fx-ac space fs2 p-1">
                <ShareIcon fontSize="large" />
                Share & earn
              </button>

              <div className="fx-ac space">
                <div className="fx-ac">
                  <img
                    src={clientData?.owner?.files?.profilImage}
                    alt=""
                    style={{
                      width: "4.2rem",
                      height: "4.2rem",
                      borderRadius: "99rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="fx-cl  fs2 fw500">
                  <span>
                    <span className="fw500 fs2">
                      {clientData?.owner?.personalInfo?.firstName ||
                        "Not provided"}{" "}
                      {clientData?.owner?.personalInfo?.middleName ||
                        "Not provided"}{" "}
                      {clientData?.owner?.personalInfo?.surName ||
                        "Not provided"}
                    </span>
                  </span>
                  <span
                    className="fw300"
                    style={{ fontFamily: "serif", fontStyle: "italic" }}
                  >
                    {clientData?.owner?.personalInfo?.email || "Not provided"}
                  </span>
                </div>
              </div>
            </div>
          </header>
          <div className="renderCompsWrapAcct">
            {/* CONTENT */}
            <section className="renderComponentsCont fx-cl space1">
              {renderActiveContent()}
            </section>

            {/* SIDE CONTENT */}
            <div className="fx-cl space1">
              <div className="topRightAcctCard fx-cl space2">
                <span className="fw600 fs5">Reminders</span>
                <div className="fx-cl spacem">
                  <span className="fw500 fs6" style={{ color: "#134a30" }}>
                    Meeting with Arc Company
                  </span>
                  <span className="fw300 fs3">Time: 02:00pm-04:00pm</span>
                </div>
                <button className=" fx-ac fx-jc space1">
                  <CreditCardOutlinedIcon fontSize="large" />{" "}
                  <span>Start Meeting</span>
                </button>
              </div>
              <div className="geccoRightAcctCard fx-cl space2">
                <div className="fx-ac fx-jb space2">
                  <span className="fw500 fs6">Users</span>
                  <button
                    onClick={() => handleTabChange("employ-staff-member")}
                    className="fx-ac  space1 fs2 fw500"
                  >
                    <PersonAddAltRoundedIcon style={{ fontSize: "1.8rem" }} />
                    <span>Add New</span>
                  </button>
                </div>
                <div className="fx-cl space1">
                  <div className="fx-ac space1">
                    <span className="usersImg fx-ac fx-jc">
                      <PersonAddAltRoundedIcon fontSize="large" />
                    </span>
                    <div className="fx-cl">
                      <span className="fs4 fw500">Ameena Yousouf</span>
                      <span className="fs2 fw300">The Managing Director</span>
                    </div>
                  </div>
                  <div className="fx-ac space1">
                    <span className="usersImg fx-ac fx-jc">
                      <PersonAddAltRoundedIcon fontSize="large" />
                    </span>
                    <div className="fx-cl">
                      <span className="fs4 fw500">Ameena Yousouf</span>
                      <span className="fs2 fw300">The Managing Director</span>
                    </div>
                  </div>
                  <div className="fx-ac space1">
                    <span className="usersImg fx-ac fx-jc">
                      <PersonAddAltRoundedIcon fontSize="large" />
                    </span>
                    <div className="fx-cl">
                      <span className="fs4 fw500">Ameena Yousouf</span>
                      <span className="fs2 fw300">The Managing Director</span>
                    </div>
                  </div>
                  <div className="fx-ac space1">
                    <span className="usersImg fx-ac fx-jc">
                      <PersonAddAltRoundedIcon fontSize="large" />
                    </span>
                    <div className="fx-cl">
                      <span className="fs4 fw500">Ameena Yousouf</span>
                      <span className="fs2 fw300">The Managing Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottomRightAcctCard fx-cl space2">
                <span className="fw600 fs6">Time tracker</span>
                <div className="fx-cl spacem">
                  <span className="fw600 fs8 fx-jc">01:32:58</span>
                </div>
                <div className="fx-ac fx-jc space2">
                  <button className=" fx-ac fx-jc space1">
                    <PauseRoundedIcon style={{ fontSize: "3.2rem" }} />
                  </button>
                  <button className=" fx-ac fx-jc space1">
                    <StopRoundedIcon style={{ fontSize: "3.2rem" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
