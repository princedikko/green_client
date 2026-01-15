import { useState, useEffect } from "react";
import axios from "axios";
import "./inboxes.css";
import IsLoading from "../../../isLoading";
// import from MUI
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import boy from "./testImages/ddd.jpg";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
let dataFetch;
function TableView() {
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Contact name</th>
          <th>Email address</th>
          <th>Message</th>
          <th>Location</th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td> {response?.name} </td>
              <td>{response.email}</td>
              <td>
                {response.message.length > 30 &&
                  response.message.slice(0, 30) + "..."}
              </td>
              <td>{response.address}</td>
              <td className="fx-ac space1">
                <button>
                  <RemoveRedEyeOutlinedIcon style={{ fontSize: "2rem" }} />
                </button>
                <button>
                  <PrivacyTipOutlinedIcon style={{ fontSize: "2rem" }} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function CardView() {
  return (
    <div className="g g3 rwdG3 space3">
      {dataFetch?.map((response, index) => {
        return (
          <figure className="couresOfStudyCard fx-cl space1">
            <div
              className="fx-jc space1"
              style={{
                color: "#6693fa",
                fontSize: "1.6rem",
                fontFamily: "serif",
              }}
            >
              <em>{response?.name}</em>
            </div>
            <div className="fx-cl ">
              <span>Email: {response.email}</span>
              <span>Message: {response.message}</span>
              <span>Address: {response.address}</span>
            </div>
            <div className="fx-ac fx-jc space1">
              <button
                style={{
                  backgroundColor: "#6693fa",
                  color: "#fff",
                }}
              >
                <RemoveRedEyeOutlinedIcon />
              </button>
              <button
                style={{
                  backgroundColor: "#f35e6a",
                  color: "#fff",
                }}
              >
                <DeleteIcon />
              </button>
              <button
                style={{
                  backgroundColor: "#00d285",
                  color: "#fff",
                  width: "12rem",
                }}
              >
                Reply
              </button>
            </div>
          </figure>
        );
      })}
    </div>
  );
}
export default function Inboxes() {
  const [loading, setLoading] = useState(false);
  const [changeview, setChangeView] = useState("");
  const [appNo, setAppNo] = useState("");

  function switchView() {
    switch (changeview) {
      case "grid":
        return <CardView />;
      case "table":
        return <TableView />;
      default:
        return <CardView />;
    }
  }

  //
  async function findApplicationNo() {
    const admission_number = appNo;

    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/reset_password/find_student`,
        {
          admission_number,
        }
      )
      .then((response) => {
        dataFetch = response.data.response;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }
  async function getInboxData() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/fetch_inboxes_data`)
      .then((response) => {
        dataFetch = response.data.info;
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getInboxData();
  }, []);

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="inboxes_data">
          <div className="fx-cl">
            <header className="fx-ac fx-jb space4">
              <div className="fx-ac space3">
                <input
                  type="text"
                  name="admission_number"
                  placeholder="Enter Application number..."
                  onChange={(event) => setAppNo(event.target.value)}
                  value={appNo}
                />

                <button onClick={() => findApplicationNo()}>Fetch data</button>
              </div>
              <div className="fx-ac space2">
                <span onClick={() => setChangeView("table")}>
                  <TocOutlinedIcon />
                </span>
                <span onClick={() => setChangeView("grid")}>
                  <AppsOutlinedIcon />
                </span>
              </div>
            </header>
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}
