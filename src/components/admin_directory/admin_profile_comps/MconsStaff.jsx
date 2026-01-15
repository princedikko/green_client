import { useState, useEffect } from "react";
import axios from "axios";
import "./mconsstaff.css";
import IsLoading from "../../../isLoading";
// import from MUI
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import boy from "./testImages/ddd.jpg";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
let dataFetch;
function TableView() {
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Staff name</th>
          <th>Service Id</th>
          <th>Office/Department</th>
          <th>Position</th>
          <th>Qualification</th>
          <th>Contact</th>
          <th>Mail</th>
          <th>Action</th>
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
              <td>{response?.staffID}</td>
              <td>{response?.employmentDetails.faculty}</td>
              <td>{response?.auth.role}</td>
              <td>{response?.qualification}</td>
              <td>{response?.contactInfo?.officePhone}</td>
              <td>{response?.email}</td>
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
export default function MconsStaff() {
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
  async function getStaffData() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/fetch_mconsstaff_data`)
      .then((response) => {
        dataFetch = response.data.info;

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getStaffData();
  }, []);

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="staff_data">
          <div className="fx-cl">
            <header className="fx-ac fx-jb space4">
              <div className="fx-ac space3">
                <input
                  type="text"
                  name="admission_number"
                  placeholder="Enter staff id..."
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
