import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// importing components

// Icons import
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
// ________________________________________________________________________________________________
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function RTCDashBoards() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.staffFunction.queue.staffData);

  const [active, setActive] = useState("done");

  function AsideItem(props) {
    return (
      <span style={{ width: "90%" }}>
        <Link
          to={props.link}
          className={` itemsPf cb fx-ac  space1 ${
            active === `${props.hooks}` ? "active-prl-tab" : null
          }`}
          onClick={() => {
            setActive(`${props.active}`);
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

  function switchComponents() {
    switch (active) {
      case "attendance":
        return "attendance";
      case "pressent lecture":
        return "pressent lecture";
      case "meeting":
        return "meeting";
      case "video call":
        return "video call";
      case "voice call":
        return "voice call";
      case "presentation":
        return "presentation";
      case "chats":
        return "Hey!";
      case "records":
        return "Change your Password here ...";
      default:
        return "Default Page";
    }
  }

  // Components

  return (
    <section className="sectionRTCDashBoards">
      <div className="instructorProfileCont ">
        <div className="staffAside fx-cl fx-as space1">
          <div className="staffAsideSec fs2 cwb fx-cl fx-as ">
            <div className="fx-cl space2" style={{ width: "100%" }}>
              <figure style={{ width: "45%", alignSelf: "center" }}>
                {/* //  <img src={CompLogo} alt="" /> */}
              </figure>
              <figure className="loginLogo">LOGO</figure>
            </div>
            <AsideItem
              name="Present lectures"
              icon={<CastForEducationOutlinedIcon fontSize="large" />}
              hooks="pressent lecture"
              active="pressent lecture"
            />
            <AsideItem
              name="Conference"
              icon={<PeopleAltRoundedIcon fontSize="large" />}
              hooks="meeting"
              active="meeting"
            />
            <AsideItem
              name="Presentation"
              icon={<PeopleAltRoundedIcon fontSize="large" />}
              hooks="presentation"
              active="presentation"
            />
            <AsideItem
              name="Video call"
              icon={<AssignmentRoundedIcon fontSize="large" />}
              hooks="video call"
              active="video call"
            />
            <AsideItem
              name="Voice call"
              icon={<CategoryRoundedIcon fontSize="large" />}
              hooks="voice call"
              active="voice call"
            />
            <AsideItem
              name="Chat"
              icon={<CategoryRoundedIcon fontSize="large" />}
              hooks="chats"
              active="chats"
            />

            <figure className="prfLinksto fx-ac space2 fx-jb">
              <span>Enventory</span>
              <span>Edits</span>
            </figure>
            <AsideItem
              name="Attendance"
              //  img={//  <img src={i3} alt="icon" />}
              active="attendance"
            />
            <AsideItem
              name="Records"
              //  img={//  <img src={i3} alt="icon" />}
              active="records"
            />

            <button
              className=" logout_staff fx-ac space1"
              onClick={() => alert("i got Out")}
            >
              <LogoutOutlinedIcon />
              <span>Close</span>
            </button>
          </div>
        </div>
        <div className="staffHeader fx-ac fx-jb">
          <span className="fx-ac fx-jc space1">
            <span>
              <Link to="/cbt" className="fx-ac fx-jc space1">
                <CastForEducationOutlinedIcon fontSize="large" />
                <span>Web Real Time Communication</span>
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
                onClick={() => setActive("attendance")}
              >
                <p>{data.first_Name}</p>
                <figure className="dp fx-ac"></figure>
              </Link>
            </span>
          </span>
        </div>
        <div className="staffContents">{switchComponents()}</div>
      </div>
    </section>
  );
}
