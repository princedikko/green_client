import React, { useState } from "react";
import "./accountPage.css";

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

export default function AccountContext() {
  const [activeTab, setActiveTab] = useState("profile-summary");

  const navigationItems = [
    {
      id: "resume-upload",
      label: "RUser Profile",
      status: "success",
      icon: <DescriptionOutlinedIcon fontSize="large" />,
    },
    {
      id: "basic-information",
      label: "BPreferences",
      status: "error",
      icon: <AccountCircleOutlinedIcon fontSize="large" />,
    },
    {
      id: "education",
      label: "Company Details",
      status: "error",
      icon: <SchoolOutlinedIcon fontSize="large" />,
    },
    {
      id: "skills-languages",
      label: "Addresses",
      status: "error",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      id: "work-experience",
      label: "Plan & Billing",
      status: "success",
      icon: <WorkOutlineIcon fontSize="large" />,
    },

    {
      id: "professional-profiles",
      label: "User Access Control",
      status: "success",
      icon: <LinkIcon fontSize="large" />,
    },
    {
      id: "published-work",
      label: "Custom Fields",
      status: "success",
      icon: <MenuBookIcon fontSize="large" />,
    },
    {
      id: "profile-summary",
      label: "Units of Measure",
      status: "none",
      icon: null,
    },
    {
      id: "professional-profiles",
      label: "Manage Alerts",
      status: "success",
      icon: <LinkIcon fontSize="large" />,
    },
    {
      id: "published-work",
      label: "Bulk Import",
      status: "success",
      icon: <MenuBookIcon fontSize="large" />,
    },
    {
      id: "profile-summary",
      label: "Feature Controls",
      status: "none",
      icon: null,
    },
    {
      id: "published-work",
      label: "Create Labels",
      status: "success",
      icon: <MenuBookIcon fontSize="large" />,
    },
    {
      id: "profile-summary",
      label: "Public API (beta)",
      status: "none",
      icon: null,
    },
  ];

  const renderBasicInformation = () => (
    <div className="accountCompClient fx-cl space1  ">
      <div className="fx-ac space">
        <AccountCircleOutlinedIcon className="fs6" />
        <h2 className="fs5 fw600 lh1">Basic Information</h2>
      </div>

      <div className="g g3 space2">
        <div className="fx-ac">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            style={{ width: "80px", borderRadius: "8px" }}
          />
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">First name</span>
          <span className="fw500 fs3">Othman</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Last name</span>
          <span className="fw500 fs3">Omar Dikko</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Country of residence</span>
          <span className="fw500 fs3">Nigeria</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Nationality</span>
          <span className="fs3">Not provided</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">City of residence</span>
          <span className="fs3">Not provided</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Phone number</span>
          <span className="fw500 fs3">+2348063996056</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Expected annual earnings</span>
          <span className="fw500 fs3">3,500,000 NGN</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Email</span>
          <span className="fw500 fs3">princedikko@gmail.com</span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">LinkedIn</span>
          <span className="fs3">Not provided</span>
        </div>
      </div>
    </div>
  );

  const renderSkillsAndLanguages = () => {
    const skillsList1 = [
      { name: "JavaScript", exp: "4" },
      { name: "Express.js", exp: "4" },
      { name: "Node.js", exp: "4" },
      { name: "MongoDB", exp: "4" },
      { name: "React", exp: "4" },
      { name: "Redux", exp: "4" },
      { name: "Docker", exp: "1" },
      { name: "Git", exp: "1" },
    ];

    const skillsList2 = [
      { name: "HTML", exp: "1" },
      { name: "GraphQL", exp: "1" },
      { name: "AWS", exp: "1" },
      { name: "HTML/CSS", exp: "1" },
      { name: "Ethical Hacking", exp: "1" },
      { name: "Back-End Development", exp: "1" },
      { name: "GitHub", exp: "1" },
    ];

    return (
      <div className="accountCompClient fx-cl space1  ">
        <div className="fx-ac space">
          <CodeIcon className="fs6" />
          <h2 className="fs5 fw600 lh1">Skills and languages</h2>
        </div>

        <div className="g g2 space4">
          <div className="fx-cl lh2">
            <span className="fs1">Years of full-time work experience</span>
            <span className="fw500 fs4">26</span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Preferred Role</span>
            <span className="fw500 fs4">Web Frontend</span>
          </div>
        </div>

        <div className="g g2 space4">
          <div>
            <div className="fx-jb">
              <span className="fs1 fw600">Skill</span>
              <span className="fs1 fw600">Years</span>
            </div>

            {skillsList1.map((s, i) => (
              <div key={i} className="fx-jb fs2">
                <span>{s.name}</span>
                <span style={{ width: "40px", textAlign: "center" }}>
                  {s.exp}
                </span>
              </div>
            ))}
          </div>

          <div>
            <div className="fx-jb">
              <span className="fs1 fw600">Skill</span>
              <span className="fs1 fw600">Years</span>
            </div>

            {skillsList2.map((s, i) => (
              <div key={i} className="fx-jb fs2">
                <span>{s.name}</span>
                <span style={{ width: "40px", textAlign: "center" }}>
                  {s.exp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderEducation = () => (
    <div className="accountCompClient fx-cl space1">
      <div className="fx-ac space">
        <SchoolOutlinedIcon className="fs6" />
        <h2 className="fs5 fw600 lh1">Education</h2>
      </div>

      <div className="fx-cl lh2">
        <span className="fs1">Mathematics</span>
        <span className="fw500 fs3">Bachelors (or equivalent)</span>
        <span className="fs2">
          Sokoto State University September 2015 - June 2019
        </span>
      </div>
    </div>
  );

  const renderWorkExperience = () => (
    <div className="accountCompClient fx-cl space1">
      <div className="fx-ac space">
        <WorkOutlineIcon className="fs6" />
        <h2 className="fs5 fw600 lh1">Work Experience</h2>
      </div>

      <div className="fx-cl lh2">
        <span className="fw600 fs3">Manager</span>
        <span className="fs2">Manga College of Nursing Sciences, Zuru</span>
        <span className="fs1">January 2023 - Present</span>
      </div>
    </div>
  );

  const renderActiveContent = () => {
    switch (activeTab) {
      case "resume-upload":
        return (
          <div className="accountCompClient fs3">
            Resume Upload Content View
          </div>
        );
      case "basic-information":
        return renderBasicInformation();
      case "education":
        return renderEducation();
      case "skills-languages":
        return renderSkillsAndLanguages();
      case "work-experience":
        return renderWorkExperience();
      default:
        return (
          <div className="fx-cl space1">
            {renderBasicInformation()}
            {renderSkillsAndLanguages()}
            {renderEducation()}
            {renderWorkExperience()}
          </div>
        );
    }
  };

  return (
    <div className="sectionAccountPage fx-cl " style={{ minHeight: "100vh" }}>
      {/* HEADER */}
      <header className="fx-jb fx-ac fs5">
        <div className="fx-ac space2">
          <span className="fs5 fw600">Universe Inventory</span>

          <nav className="fx space1 fs2">
            <span>Home</span>
            <span>Jobs</span>
            <span>Applications</span>
          </nav>
        </div>

        <div className="fx-ac space1">
          <button className="fx-ac space fs2 p-1">
            <ShareIcon fontSize="large" />
            Share & earn
          </button>

          <div className="fx-ac space">
            <span
              className="fx fx-jc fx-ac"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
              }}
            >
              O
            </span>
            <span>Othman Omar Dikko</span>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="g g2 space2  ">
        {/* SIDEBAR */}
        <aside className="fx-cl space2  ">
          {navigationItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <div
                key={item.id}
                className="fx-jb fx-ac fs6"
                onClick={() => setActiveTab(item.id)}
                style={{
                  cursor: "pointer",
                  backgroundColor: isActive ? "#f3f4f6" : "transparent",
                  borderRadius: "6px",
                }}
              >
                <div className="fx-ac space">
                  {item.icon}
                  <span className="fs2">{item.label}</span>
                </div>

                <div>
                  {item.status === "success" && (
                    <DoneAllOutlinedIcon fontSize="large" />
                  )}
                  {item.status === "error" && (
                    <ErrorOutlineIcon
                      fontSize="large"
                      style={{ color: "red" }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </aside>

        {/* CONTENT */}
        <section className="fx-cl space1">{renderActiveContent()}</section>
      </main>
    </div>
  );
}
