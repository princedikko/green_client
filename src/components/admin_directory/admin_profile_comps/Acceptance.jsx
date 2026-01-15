import { useState, useEffect } from "react";
import axios from "axios";
import "./acceptance.css";

import IsLoading from "../../../isLoading";
// import from MUI
import boy from "./testImages/ddd.jpg";

import SearchIcon from "@mui/icons-material/Search";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
let dataFetch;
let countS;

export default function Acceptance() {
  const [loading, setLoading] = useState(false);
  const [changeview, setChangeView] = useState("");
  const [month, setMonth] = useState("");

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
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/acceptance`)
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;
        console.log(dataFetch);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  async function getByMonths() {
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/acceptance`, { month })
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

  function TableView() {
    return (
      <table className="fx-cl spacem">
        <thead className="fx-cl spacem">
          <tr>
            <th>S/N</th>
            <th>Name of Applicant</th>
            <th>Application No.</th>
            <th>Gender</th>
            <th>Invioce No.</th>
            <th>Reference No.</th>
            <th>Payment Status</th>
            <th>Response</th>
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
                <td>{response.account_status.transaction_id}</td>
                <td>{response.account_status.reference_number}</td>
                <td>
                  <span className={`${response.admissions.acceptance_of_adm}`}>
                    {response.admissions.acceptance_of_adm}
                  </span>
                </td>
                <td>
                  <span className={`${response.account_status.paymentStatus}`}>
                    <button>{response.account_status.paymentStatus}</button>
                  </span>
                </td>
                <td>{response.registered_date.date}</td>
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
  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className=" accept-app">
          <div className="fx-cl space3">
            <header className="fx-ac fx-jb space4">
              <div className="adminSearchCont">
                <span style={{ fontSize: "1.2rem" }}>
                  Search application by months
                </span>

                <div className="adminSearch fx-jb">
                  <select
                    name="month"
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                  >
                    <option value="" hidden>
                      Month
                    </option>
                    <option value="all">All</option>
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="Mar">March</option>
                    <option value="Apr">April</option>
                    <option value="May">May</option>
                    <option value="Jun">June</option>
                    <option value="Jul">July</option>
                    <option value="Aug">August</option>
                    <option value="Sep">September</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                  </select>

                  {month === "all" ? (
                    <button onClick={() => getApplicants()}>
                      <SearchIcon fontSize="large" />
                    </button>
                  ) : (
                    <button onClick={() => getByMonths()}>
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
            <figure className="cardsHeader g g4 space3">
              <div>
                <p>{countS?.count}</p>
                <h3>Admitted applicants</h3>
              </div>
              <div>
                <p>{countS?.pendings}</p>
                <h3>Pending</h3>
              </div>
              <div>
                <p>{countS?.accepteds}</p>
                <h3>Accepted</h3>
              </div>
              <div>
                <p>{countS?.rejecteds}</p>
                <h3>Rejected</h3>
              </div>
            </figure>
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}
