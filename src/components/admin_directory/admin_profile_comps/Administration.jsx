import { useState, useEffect } from "react";
import axios from "axios";
import "./administration.css";
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
          <th>Admin name</th>
          <th>Service Id</th>
          <th>Office/Department</th>
          <th>Role</th>
          <th>Phone number</th>
          <th>Email address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          return (
            <tr key={index}>
              {/* <td>{index + 1}</td> */}
              <td className="fx-ac spacem">
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
              <td>{response?.position}</td>
              <td>{response.position}</td>
              <td>{response?.employmentDetails?.faculty}</td>
              <td>{response?.phoneNumber}</td>
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
      {dataFetch?.map((response, index) => {
        return (
          <figure className="gridViewCard " key={index}>
            <span>
              {" "}
              <figure className="fx-ac fx-jc">
                {response.passport?.url ? (
                  <img src={response.passport?.url} alt="gal" />
                ) : (
                  response?.first_Name?.slice(0, 1).toUpperCase()
                )}
              </figure>
            </span>
            <h4>
              {response?.first_Name +
                " " +
                response?.sur_Name +
                " " +
                response?.other_Name}
            </h4>
            <div>
              <div className="fx-cl spacem">
                <div className="fx-ac">
                  <span>Heading</span> <span>Heading here</span>
                </div>
              </div>
            </div>
            <span>{response?.staffID}</span>
            <span>{response?.position}</span>
            <span>{response.position}</span>
            <span>{response?.qualification}</span>
            <span>{response?.employmentDetails?.faculty}</span>
            <span>{response?.phoneNumber}</span>
            <span>{response?.email}</span>
            <button>
              <RemoveRedEyeOutlinedIcon style={{ fontSize: "2rem" }} />
            </button>
            <button>
              <PrivacyTipOutlinedIcon style={{ fontSize: "2rem" }} />
            </button>
          </figure>
        );
      })}
    </div>
  );
}
export default function Administration() {
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
  async function fetchAdmin() {
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
  async function getAdminData() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/fetch_admin_data`)
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
    getAdminData();
  }, []);

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="adminstrative_data">
          <div className="fx-cl">
            <header className="fx-ac fx-jb space4">
              <div
                className="fx-ac space3"
                style={{
                  backgroundColor: "#fafaff",
                  overflow: "hidden",
                  borderRadius: "33rem",
                }}
              >
                <input
                  type="text"
                  name="admission_number"
                  placeholder="Enter admin Id..."
                  onChange={(event) => setAppNo(event.target.value)}
                  value={appNo}
                />

                <button onClick={() => fetchAdmin()}>Fetch data</button>
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
