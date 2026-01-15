import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./busery.css";

// import from MUI
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import boy from "./testImages/ddd.jpg";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import SearchIcon from "@mui/icons-material/Search";
import IsLoading from "../../../isLoading";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";

let dataFetch, fullPayments, partPayments, balancePayments;
let countS;
function TableView() {
  const redirect = useNavigate();

  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Student name</th>
          <th>Admission No.</th>
          <th>Payment type</th>
          <th>Transaction by</th>
          <th>Programme</th>
          <th>Phone number</th>
          <th>Amount</th>
          <th>Payment Invioce</th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <figure className="fx-ac fx-jc">
                  {response?.personalInfo?.passport ? (
                    <img src={response?.personalInfo?.passport} alt="gal" />
                  ) : (
                    response?.personalInfo?.first_Name
                      ?.slice(0, 1)
                      .toUpperCase()
                  )}
                </figure>
                <span>
                  {response?.personalInfo?.first_Name +
                    " " +
                    response?.personalInfo?.sur_Name +
                    " " +
                    response?.personalInfo?.other_Name}
                </span>
              </td>
              <td>{response?.admission_number}</td>
              <td>
                <span className="fx-ac fx-jc">
                  {response?.financialRecords?.tuitionFees[0].payment_type}
                </span>
              </td>
              <td>
                <span
                  style={{
                    backgroundColor: "#3a84f8",
                    color: "#fff",
                    borderRadius: "1.2rem",
                    padding: ".4rem .8rem",
                    width: "100%",
                  }}
                >
                  {response?.financialRecords?.tuitionFees[0].admin_name}
                </span>
              </td>
              <td>{response.academicInfo?.programme}</td>

              <td>
                <span>+234{response?.contactInfo?.phone_number}</span>
              </td>
              <td style={{ color: "#26bf89" }}>
                <strong>
                  {response?.financialRecords?.tuitionFees[0].amount}
                </strong>
              </td>
              <td className="fx-ac space1">
                <Link
                  className="neon-button fx-ac spacem"
                  // to={`/admin_profile/applicant_log/${response._id}`}
                  style={{ color: "blue" }}
                  target="blank"
                  onClick={() => alert("Reciept display under Development")}
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
export default function Busery() {
  const [loading, setLoading] = useState(false);
  const [changeview, setChangeView] = useState("");
  const [paymentType, setPaymentType] = useState("");

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

  async function getAllPayments() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/get_all_payments`)
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  async function getFullPayments() {
    const payment_type = paymentType;
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/applicant_logs`, {
        payment_type,
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
    getAllPayments();
  }, []);

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="busery_cont">
          <div className="fx-cl space3">
            <header className="fx-ac fx-jb space4">
              <div className="adminSearchCont">
                <span style={{ fontSize: "1.2rem" }}>Search payment type</span>

                <div className="adminSearch fx-jb">
                  <select
                    name="department"
                    value={paymentType}
                    onChange={(event) => setPaymentType(event.target.value)}
                  >
                    <option value="" hidden>
                      Select type
                    </option>
                    <option value="all">All payments</option>
                    <option value="full payment">Full payments</option>
                    <option value="part payment">Part payments</option>
                    <option value="balance payment">Balance payments</option>
                  </select>
                  {paymentType === "all" ? (
                    <button onClick={() => getAllPayments()}>
                      {" "}
                      <SearchIcon fontSize="large" />
                    </button>
                  ) : (
                    <button onClick={() => getFullPayments()}>
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
            <figure className="cards1 g g5 space2">
              <div>
                <p>{countS?.response.length}</p>
                <h3>All Payments</h3>
              </div>
              <div>
                <p>{countS?.full}</p>
                <h3>Fully Paid</h3>
              </div>
              <div>
                <p>{countS?.part}</p>
                <h3>Part: 60% Paid</h3>
              </div>
              <div>
                <p>{countS?.balance}</p>
                <h3>Balance: 40% Paid</h3>
              </div>
              <div>
                <p>{countS?.unpaid}</p>
                <h3>Un-Paid Students</h3>
              </div>
            </figure>
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}
