import { useState, useEffect } from "react";
import axios from "axios";
import "./admit-applicants.css";
import { useNavigate, Link } from "react-router-dom";
// import from MUI
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import boy from "./testImages/ddd.jpg";
import IsLoading from "../../../isLoading";

import SearchIcon from "@mui/icons-material/Search";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
let dataFetch;
let countS;
export default function AdmitApplicants() {
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
        return <TableView />;
    }
  }

  async function getApplicants() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/admitting_applicant`)
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  async function findApplicationNo() {
    const application_number = appNo;

    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/admitting_applicant`, {
        application_number,
      })
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
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
        <div className="admit_applicants">
          <div className="fx-cl space3">
            <header className="fx-ac fx-jb space4">
              <div className="adminSearchCont">
                <span style={{ fontSize: "1.2rem" }}>
                  Search application number
                </span>

                <div className="adminSearch fx-jb">
                  <input
                    type="text"
                    name="application_number"
                    placeholder="im looking for..."
                    onChange={(event) => setAppNo(event.target.value)}
                    value={appNo}
                  />
                  <button onClick={() => findApplicationNo()}>
                    <SearchIcon fontSize="large" />
                  </button>
                </div>
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
                <p>{dataFetch?.length}</p>
                <h3>All Recommneded:</h3>
              </div>
              <div>
                <p>{countS?.nursings}</p>
                <h3>Nursing Recommended:</h3>
              </div>
              <div>
                <p>{countS?.midwiferys}</p>
                <h3>Midwifery Recommended:</h3>
              </div>
            </figure>
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}

function TableView() {
  const redirect = useNavigate();
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Name of Candidate</th>
          <th>Application No.</th>
          <th>Gender</th>
          <th>Programme</th>
          <th>Reference No.</th>
          <th>Admission </th>
          <th>Action </th>
          <th>Date </th>
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
              <td>{response.programme_of_study}</td>
              <td>{response.account_status?.reference_number}</td>
              <td>
                <span className={`${response.admissions?.status}`}>
                  {response.admissions?.status}
                </span>
              </td>
              <td className="fx-ac space1">
                <Link
                  target="blank"
                  style={{ color: "#2a59a0" }}
                  to={`/admin_profile/admit_detail/${response._id}`}
                  className="neon-button fx-ac spacem"
                >
                  <PrivacyTipOutlinedIcon
                    style={{ fontSize: "1.4rem", color: "#2a59a0" }}
                  />
                  <span>details</span>
                </Link>
              </td>
              <td>{response.registered_date?.date}</td>
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
