import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./applicant-log.css";

// import from MUI
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import boy from "./testImages/ddd.jpg";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import SearchIcon from "@mui/icons-material/Search";
import IsLoading from "../../../isLoading";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";

let dataFetch;
let countS;
function TableView() {
  const redirect = useNavigate();
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Name of Applicant</th>
          <th>Application No.</th>
          <th>Gender</th>
          <th>Payment status </th>
          <th>Programme</th>
          <th>Registration Status</th>
          <th>Date</th>
          <th>Application Form</th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <figure className="fx-ac fx-jc">
                  {response?.passport?.url ? (
                    <img src={response.passport?.url} alt="gal" />
                  ) : (
                    response?.first_Name?.slice(0, 1).toUpperCase()
                  )}
                </figure>
                <span>
                  {response?.first_Name +
                    " " +
                    response?.sur_Name +
                    " " +
                    response?.other_Name}
                </span>
              </td>
              <td>{response?.application_number}</td>
              <td>{response?.gender}</td>
              <td>
                <span className="fx-ac fx-jc">
                  {/* {response.account_status.paymentStatus} */}
                  <DoneAllIcon style={{ color: "#048e5b" }} />
                </span>
              </td>
              <td>{response.programme_of_study}</td>

              <td>
                <span
                  className={`${response.account_status?.registration_status}`}
                >
                  {response.account_status?.registration_status}
                </span>
              </td>
              <td>{response.registered_date?.date}</td>
              <td className="fx-ac space1">
                <Link
                  className="neon-button fx-ac spacem"
                  to={`/admin_profile/applicant_log/${response._id}`}
                  style={{ color: "blue" }}
                  target="blank"
                  // onClick={() =>
                  //   redirect(`/admin_profile/applicant_log/${response._id}`)
                  // }
                >
                  <PrivacyTipOutlinedIcon
                    style={{ fontSize: "1.4rem", color: "#2a59a0" }}
                  />
                  <span>form</span>
                </Link>
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
export default function ApplicantLogs() {
  const [loading, setLoading] = useState(false);
  const [changeview, setChangeView] = useState("");
  const [dept, setDepartment] = useState("");

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
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/applicant_logs`)
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
  async function findDept() {
    const department = dept;
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/applicant_logs`, {
        department,
      })
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
        <div className="applicants_log">
          <div className="fx-cl space3">
            <header className="fx-ac fx-jb space4">
              <div className="adminSearchCont">
                <span style={{ fontSize: "1.2rem" }}>
                  Search application by months
                </span>

                <div className="adminSearch fx-jb">
                  <select
                    name="department"
                    value={dept}
                    onChange={(event) => setDepartment(event.target.value)}
                  >
                    <option value="" hidden>
                      Select department
                    </option>
                    <option value="all">All</option>
                    <option value="Midwifery"> Department of Midwifery</option>
                    <option value="Nursing">Department of Nursing</option>
                  </select>
                  {dept === "all" ? (
                    <button onClick={() => getApplicants()}>
                      {" "}
                      <SearchIcon fontSize="large" />
                    </button>
                  ) : (
                    <button onClick={() => findDept()}>
                      {" "}
                      <SearchIcon fontSize="large" />
                    </button>
                  )}
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
                <p>{countS?.count}</p>
                <h3>Applicants</h3>
              </div>
              <div>
                <p>{countS?.pendings}</p>
                <h3>Pending</h3>
              </div>
              <div>
                <p>{countS?.completeds}</p>
                <h3>Completed</h3>
              </div>
            </figure>
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}
