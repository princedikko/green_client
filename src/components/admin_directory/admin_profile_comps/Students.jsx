import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./students.css";
import IsLoading from "../../../isLoading";
// import from MUI
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
let dataFetch;
function TableView() {
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Student Name</th>
          <th>Admission No.</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Phone number</th>
          <th>Email address </th>
          <th>Origin</th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="fx-ac space2">
                <figure
                  className="fx-ac fx-jc"
                  style={{ border: "1px solid #f3f3f3" }}
                >
                  {response.personalInfo?.passport ? (
                    <img src={response.personalInfo?.passport} alt="gal" />
                  ) : (
                    response.first_Name?.slice(0, 1).toUpperCase()
                  )}
                </figure>
                <span>
                  {response?.personalInfo.first_Name +
                    " " +
                    response?.personalInfo.sur_Name +
                    " " +
                    response?.personalInfo.other_Name}
                </span>
              </td>
              <td>{response.admission_number}</td>
              <td>{response.personalInfo?.gender}</td>
              <td>{response.academicInfo?.programme}</td>
              <td>+234{response.contactInfo?.phone_number}</td>
              <td>{response.contactInfo?.email}</td>
              <td>
                <span>{response.personalInfo?.contact_address?.state}</span>
              </td>

              <td className="fx-ac space1">
                <Link
                  className="neon-button fx-ac spacem"
                  to={`/management/student_data/${encodeURIComponent(
                    response.admission_number
                  )}`}
                  style={{ color: "blue" }}
                  target="blank"
                >
                  <PrivacyTipOutlinedIcon
                    style={{ fontSize: "1.4rem", color: "#2a59a0" }}
                  />
                  <span>Data</span>
                </Link>
                {/* <button>
                  <RemoveRedEyeOutlinedIcon style={{ fontSize: "2rem" }} />
                </button>
                <button>
                  <PrivacyTipOutlinedIcon style={{ fontSize: "2rem" }} />
                </button> */}
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
export default function Students() {
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
  async function getApplicants() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/reset_student_password`)
      .then((response) => {
        dataFetch = response.data.response;

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
        <div className=" students_data">
          <div className="fx-cl">
            <header className="fx-ac fx-jb space4">
              <div className="adminSearchCont">
                <span style={{ fontSize: "1.2rem" }}>
                  Search admission number
                </span>

                <div className="adminSearch fx-jb">
                  <input
                    type="text"
                    name="application_number"
                    placeholder="im looking for..."
                    onChange={(event) => setAppNo(event.target.value)}
                    value={appNo}
                  />
                  <button
                    onClick={() => alert("no function running currently")}
                  >
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
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}
