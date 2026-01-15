import { useState, useEffect } from "react";
import axios from "axios";
import "./programmes.css";
import IsLoading from "../../../isLoading";
// import from MUI
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
let dataFetch;
function TableView() {
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Course Code</th>
          <th>Course title</th>
          <th>Level</th>
          <th>Credit unit</th>
          <th>Semester</th>
          <th>Lectures</th>
          <th>Practical </th>
          <th>Tutorials</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          // numberofHours
          // {lectures: 30, practical: 45, tutorial: 15, total: 90}

          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="fx-ac space2">{response?.courseCode}</td>
              <td style={{ textAlign: "left" }}>{response.courseTitle}</td>
              <td>{response.course_level}</td>
              <td>{response.creditUnit}</td>
              <td style={{ textAlign: "left" }}>{response.semester}</td>
              <td>{response.numberofHours.lectures}</td>
              <td>{response.numberofHours.practical}</td>
              <td>{response.numberofHours.tutorial}</td>
              <td>{response.numberofHours.total}</td>
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
              <em>{response.courseTitle}</em>
            </div>
            <div className="g g2 ">
              <span>Course code: {response?.courseCode}</span>
              <span>Course Level: {response.course_level}</span>
              <span>Credit unit: {response.creditUnit}</span>
              <span>Lectures: {response.numberofHours.lectures}</span>
              <span>Practical: {response.numberofHours.practical}</span>
              <span>Tutorial: {response.numberofHours.tutorial}</span>
              <span>Total: {response.numberofHours.total}</span>
              <span>Semester: {response.semester}</span>
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
                <PrivacyTipOutlinedIcon />
              </button>
              <button
                style={{
                  backgroundColor: "#00d285",
                  color: "#fff",
                  width: "12rem",
                }}
              >
                Action
              </button>
            </div>
          </figure>
        );
      })}
    </div>
  );
}
export default function NursingProgramme() {
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

  async function getNursingCourses() {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/getNursingCourses/administrative`
      )
      .then((response) => {
        dataFetch = response.data?.data;

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  //
  async function findApplicationNo({ apiGetGN, apiGetMW }) {
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

  useEffect(() => {
    getNursingCourses();
  }, []);
  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className=" courseContainer">
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
              <div
                className="fx-ac space1"
                style={{
                  backgroundColor: "#fafaff",
                  borderRadius: ".5rem",
                  padding: ".6rem",
                }}
              >
                <span onClick={() => setChangeView("table")}>
                  <TocOutlinedIcon
                    style={{
                      fontSize: "2.4rem",
                      color: "#2cb783",
                      cursor: "pointer",
                    }}
                  />
                </span>
                <span onClick={() => setChangeView("grid")}>
                  <AppsOutlinedIcon
                    style={{
                      fontSize: "2.4rem",
                      color: "#2cb783",
                      cursor: "pointer",
                    }}
                  />
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
