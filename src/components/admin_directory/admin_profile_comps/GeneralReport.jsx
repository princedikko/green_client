import { useState, useEffect } from "react";
import axios from "axios";
import "./generalreport.css";

// import from MUI

import boy from "./testImages/ddd.jpg";
import IsLoading from "../../../isLoading";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";

let dataFetch;
let countS;
function TableView() {
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Name of Applicant</th>
          <th>Application No.</th>
          <th>Gender</th>
          <th>Phone No.</th>
          <th>Email</th>
          <th>Programme</th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <figure className="fx-ac fx-jc">
                  {response.passport?.url ? (
                    <img src={response.passport?.url} alt="gal" />
                  ) : (
                    response.first_Name?.slice(0, 1).toUpperCase()
                  )}
                </figure>
                <span>
                  {response.first_Name +
                    " " +
                    response.sur_Name +
                    " " +
                    response.other_Name}
                </span>
              </td>
              <td>{response.application_number}</td>
              <td>{response.gender}</td>
              <td>+234{response.phone_number}</td>
              <td style={{ textAlign: "left" }}>{response.email}</td>

              <td>{response.programme_of_study}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function CardView() {
  return (
    <div className="girdViewCont">
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
export default function GeneralReport() {
  const [loading, setLoading] = useState(false);
  const [changeview, setChangeView] = useState("");

  function switchView() {
    switch (changeview) {
      case "grid":
        return <CardView />;
      case "table":
        return <TableView />;
      default:
        return <TableView />;
    }
  }

  async function getApplicants() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/general_reports`)
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  async function getCompleted() {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/general_reports/completed`
      )
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  async function getRecommended() {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/general_reports/recommended`
      )
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getApplicants();
  }, []);

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="gen-reports fx-cl space3">
          <div className="fx-cl Space3">
            <header
              className="fx-ac fx-jb space3"
              style={{ marginBottom: "2rem" }}
            >
              <div className="fx-ac space3">
                <button onClick={() => getApplicants()}> All Applicants</button>
                <button onClick={() => getCompleted()}>Completed</button>
                <button onClick={() => getRecommended()}>Recommended</button>
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
            <figure className="cardsHeader g g3 space3">
              <div>
                <p>{countS?.count}</p>
                <h3>Total applicants</h3>
              </div>
              <div>
                <p>{countS?.midwifery}</p>
                <h3>Midwifery applicants</h3>
              </div>
              <div>
                <p>{countS?.nursing}</p>
                <h3>Nursing applicants</h3>
              </div>
            </figure>
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}
