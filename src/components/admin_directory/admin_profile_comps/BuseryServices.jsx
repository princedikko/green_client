import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./buseryservices.css";
import { useSnackbar } from "notistack";
import axios from "axios";
import Logo from "../../public_directory/public-routes-images/logos/Manga_Cons _Logo3.png";
import IsLoading from "../../../isLoading";
// import from MUI
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import MailIcon from "@mui/icons-material/Mail";
import LockResetIcon from "@mui/icons-material/LockReset";
import SearchIcon from "@mui/icons-material/Search";

let response;
let data;

export default function BuseryServices({ info }, setOpenModal, setShowModal) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [admNo, setAdmNo] = useState("");
  const [amount, setAmount] = useState("");
  async function getStudent() {
    setLoading(true);
    await axios
      .get(
        `${
          process.env.REACT_APP_SERVER_SCRIPT_HOST
        }/busery/services/find_student/${encodeURIComponent(admNo)}`
      )
      .then((response) => {
        response = response;
        data = response.data.data;
        if (response?.data.status === 201) {
          enqueueSnackbar(`${response?.data.message}`, {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
        } else if (response?.data.status === 404) {
          enqueueSnackbar(`${response?.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
        }
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  console.log(info);
  const payRegistrationFee = async () => {
    const data = {
      session: "2024/2025",
      amount: 250000,
      payment_type: "full payment",
      admin_name: `${info.first_Name}`,
      paymentStatus: "Paid",
      transactionId: `Institution payment: #${info.staffID}`,
      reference_number: `Institution payment: #${info.staffID}`,
      paymentDate: new Date().toLocaleDateString(),
    };
    setLoading(true);
    await axios
      .put(
        `${
          process.env.REACT_APP_SERVER_SCRIPT_HOST
        }/registration_fee/admin_payment/${encodeURIComponent(admNo)}`,
        data
      )
      .then((response) => {
        enqueueSnackbar(`Payment completed successfully!`, {
          variant: "success",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        setLoading(false);
        getStudent();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const payRegistrationFeePart = async () => {
    const data = {
      session: "2024/2025",
      amount: 150000,
      payment_type: "part payment",
      admin_name: `${info.first_Name}`,
      paymentStatus: "Paid",
      transactionId: `Institution payment: #${info.staffID}`,
      reference_number: `Institution payment: #${info.staffID}`,
      paymentDate: new Date().toLocaleDateString(),
    };
    setLoading(true);
    await axios
      .put(
        `${
          process.env.REACT_APP_SERVER_SCRIPT_HOST
        }/registration_fee/admin_payment/${encodeURIComponent(admNo)}`,
        data
      )
      .then((response) => {
        enqueueSnackbar(
          `Student 60% payment for registration was successfull`,
          {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          }
        );
        setLoading(false);
        getStudent();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const payRegistrationFeeBalance = async () => {
    const data = {
      session: "2024/2025",
      amount: 100000,
      payment_type: "balance for part payment",
      admin_name: `${info.first_Name}`,
      paymentStatus: "Paid",
      transactionId: `Institution payment: #${info.staffID}`,
      reference_number: `Institution payment: #${info.staffID}`,
      paymentDate: new Date().toLocaleDateString(),
    };
    setLoading(true);
    await axios
      .put(
        `${
          process.env.REACT_APP_SERVER_SCRIPT_HOST
        }/registration_fee/admin_payment/${encodeURIComponent(admNo)}`,
        data
      )
      .then((response) => {
        enqueueSnackbar(`Balance Payment of 40% successfully!`, {
          variant: "success",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        setLoading(false);
        getStudent();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  function openModalTuitionFull(setShowModal, setOpenModal) {
    setShowModal("services full payment");
    setOpenModal(true);
  }
  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="sectionBuseryServices accept-app">
          <div className="fx-cl space3">
            <header className="fx-ac fx-jb space4">
              <div className="adminSearchCont">
                <span style={{ fontSize: "1.2rem" }}>
                  Find student by ADM No.
                </span>

                <div className="adminSearch fx-jb">
                  <input
                    type="text"
                    name="searchStudent"
                    id=""
                    placeholder="enter adm no...."
                    value={admNo}
                    onChange={(e) => setAdmNo(e.target.value)}
                  />
                  <button onClick={() => getStudent()}>
                    <SearchIcon fontSize="large" />
                  </button>
                </div>
              </div>
            </header>
          </div>
          {data && (
            <div className="buseryServiesForm">
              <div className="buseryServiesForms fx-cl space1">
                <div className="buseryServiesFormsHeader fx-ac fx-jc space4">
                  <figure>
                    <img src={Logo} alt="logo" />
                  </figure>
                  <div className="fx-cl fx-jc">
                    <h2>MANGA COLLEGE OF NURSING SCIENCES, ZURU</h2>
                    <p>
                      P.M.B. 02 Zuru-Kontagora Road Amanawa Area, Zuru, Kebbi
                      State -Nigeria
                    </p>
                    {data?.academicInfo.state.tuitionPaid ? (
                      <strong style={{ color: "#00d285" }}>
                        Student Registration: Paid
                      </strong>
                    ) : (
                      <strong style={{ color: "#f35e6a" }}>
                        Student Registration: Un-paid
                      </strong>
                    )}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}></div>
                <div className="fx-jb space3">
                  <div className="buseryServiesFormscomp g g3 space2">
                    <div>
                      <strong>Student ID:</strong>{" "}
                      <span>{data?.admission_number}</span>
                    </div>
                    <div>
                      <strong>Full Name:</strong>{" "}
                      <span>
                        {data?.personalInfo?.first_Name +
                          " " +
                          data?.personalInfo?.sur_Name +
                          " " +
                          data?.personalInfo?.other_Name}
                      </span>
                    </div>
                    <div>
                      <strong>Date of Birth:</strong>{" "}
                      <span>
                        {data?.personalInfo?.Date_of_birth.slice(0, 10)}
                      </span>
                    </div>
                    <div>
                      <strong>Gender:</strong>{" "}
                      <span>{data?.personalInfo?.gender}</span>
                    </div>
                    <div>
                      <strong>Marital status:</strong>{" "}
                      <span>{data?.personalInfo?.Marital_status}</span>
                    </div>

                    <div>
                      <strong>Email:</strong>{" "}
                      <span>{data?.contactInfo?.email}</span>
                    </div>
                    <div>
                      <strong>Phone:</strong>{" "}
                      <span>+234{data?.contactInfo?.phone_number}</span>
                    </div>
                  </div>

                  <img
                    className="buseryServiesFormspassport"
                    src={data?.personalInfo?.passport}
                    alt="Student Passport"
                  />
                </div>

                <div
                  style={{
                    borderTop: "1px solid #ccc",
                    paddingTop: "1.5rem",
                    gridTemplateColumns: "1fr 1fr 1fr",
                  }}
                  className="buseryServiesFormscomp g g3 space2"
                >
                  <div>
                    <strong>State of Origin:</strong>{" "}
                    <span>
                      {
                        data?.personalInfo?.permanent_home_address
                          .State_of_origin
                      }
                    </span>
                  </div>
                  <div>
                    <strong>Local Gov't Area:</strong>{" "}
                    <span>
                      {
                        data?.personalInfo?.permanent_home_address
                          .Local_Govt_Area
                      }
                    </span>
                  </div>
                  <div>
                    <strong>Address:</strong>{" "}
                    <span>
                      {data?.personalInfo?.permanent_home_address.line_address}
                    </span>
                  </div>
                  <div>
                    <strong>Next of Kin Name:</strong>{" "}
                    <span>{data?.contactInfo?.next_of_kin.full_name}</span>
                  </div>

                  <div>
                    <strong>Next of Kin address:</strong>{" "}
                    <span>{data?.contactInfo?.next_of_kin.address}</span>
                  </div>
                  <div>
                    <strong>NOK Phone No.:</strong>{" "}
                    <span>{data?.contactInfo?.next_of_kin.phone}</span>
                  </div>
                </div>
                <div className="buseryServiesFormspart"></div>
                <div
                  style={{
                    borderTop: "1px solid #ccc",
                    paddingTop: "1.5rem",
                    gridTemplateColumns: "1fr 1fr 1fr",
                  }}
                  className="buseryServiesFormscomp g g3 space2"
                >
                  <div>
                    <strong>Entry Session:</strong>{" "}
                    <span>{data?.academicInfo?.entry_session}</span>
                  </div>
                  <div>
                    <strong>Department</strong>{" "}
                    <span>{data?.academicInfo?.department}</span>
                  </div>
                  <div>
                    <strong>Programme of Study:</strong>{" "}
                    <span>{data?.academicInfo?.programme}</span>
                  </div>
                  <div>
                    <strong>Level:</strong>{" "}
                    <span>{data?.academicInfo?.level}</span>
                  </div>

                  <div>
                    <strong>Present Session:</strong>{" "}
                    <span>{data?.academicInfo?.pressent_session}</span>
                  </div>
                </div>
                <div className="g g2 rwdG2 space3">
                  {data?.No_of_sitting === "2" ? (
                    <div className="fx-cl spacem">
                      <h3>Second Sitting Result</h3>
                      <div className="fx-ac">
                        <span>Number of Sitting:</span>
                        <span>{data?.No_of_sitting}</span>
                      </div>

                      <div className="fx-cl space2">
                        <table>
                          <thead>
                            <tr>
                              <th>Subject</th>
                              <th>Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data?.results?.second_sitting?.grade?.map(
                              (response, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{response.subject}</td>
                                    <td>{response.grade}</td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Documents Section */}
                <div className="fx-cl space2">
                  <h2>Uploaded Documents</h2>
                  <div className="g g2 rwdG2 space3">
                    {data?.documents?.map((response, index) => {
                      return (
                        <figure
                          key={index}
                          className="fileUploadedCont g g2 space1"
                        >
                          <img
                            src={response.url}
                            alt="ducs"
                            style={{ width: "7.3rem", height: "9rem" }}
                          />
                          <span className="fx-cl space1">
                            <span>
                              Name:{" "}
                              {response?.fileName.length > 22
                                ? response?.fileName.slice(0, 22) + "..."
                                : response?.fileName}
                            </span>
                            <Link
                              className="neon-button fx-ac spacem"
                              to={`${response?.url}`}
                              style={{ color: "blue", maxWidth: "11rem" }}
                              target="blank"
                            >
                              <PrivacyTipOutlinedIcon
                                style={{ fontSize: "1.4rem", color: "#2a59a0" }}
                              />
                              <span>Preview</span>
                            </Link>
                          </span>
                        </figure>
                      );
                    })}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #ccc",
                    paddingTop: "1.5rem",
                    gridTemplateColumns: "1fr 1fr 1fr",
                  }}
                  className="buseryServiesFormscomp g g3 space2"
                >
                  <div>
                    <strong>Referee Name:</strong>{" "}
                    <span>
                      {data?.contactInfo?.refrees?.first_referee?.full_name}
                    </span>
                  </div>
                  <div>
                    <strong>Refree Address:</strong>{" "}
                    <span>
                      {data?.contactInfo?.refrees?.first_referee?.address}
                    </span>
                  </div>
                  <div>
                    <strong>Referee Phone No.:</strong>{" "}
                    <span>
                      {data?.contactInfo?.refrees?.first_referee?.phone}
                    </span>
                  </div>
                  <div>
                    <strong>Referee Name:</strong>{" "}
                    <span>
                      {data?.contactInfo?.refrees?.second_referee?.full_name}
                    </span>
                  </div>

                  <div>
                    <strong>Refree Address:</strong>{" "}
                    <span>
                      {data?.contactInfo?.refrees?.second_referee?.address}
                    </span>
                  </div>
                  <div>
                    <strong>Refree Phone No.:</strong>{" "}
                    <span>
                      {data?.contactInfo?.refrees?.second_referee?.phone}
                    </span>
                  </div>
                </div>

                {!data?.academicInfo.state.tuitionPaid ? (
                  <div className="fx-ac fx-jc space1">
                    {/* <button
                      className="fx-ac spacem"
                      style={{
                        backgroundColor: "#af1e22",
                        color: "#fff",
                        width: "12rem",
                      }}
                    >
                      <CastForEducationIcon />
                      <span>Pay </span>
                    </button>
                    <button
                      className="fx-ac spacem"
                      style={{
                        backgroundColor: "#1d2432",
                        color: "#fff",
                      }}
                    >
                      <MailIcon />
                      <span>Send mail</span>
                    </button>
                    */}
                    <button
                      className="fx-ac spacem"
                      style={{
                        backgroundColor: "#00d285",
                        color: "#fff",
                        width: "12rem",
                      }}
                      // onClick={() => payRegistrationFee()}
                      onClick={() => openModalTuitionFull()}
                    >
                      <PrivacyTipOutlinedIcon />
                      <span>Pay tuition</span>
                    </button>
                    <button
                      className="fx-ac spacem"
                      onClick={() => payRegistrationFeePart()}
                      style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        width: "12rem",
                      }}
                    >
                      <PrivacyTipOutlinedIcon />
                      <span>Part payment</span>
                    </button>
                    {/* <button
                      className="fx-ac spacem"
                      onClick={() => payRegistrationFeeBalance()}
                      style={{
                        backgroundColor: "#f35e6a",
                        color: "#fff",
                      }}
                    >
                      <LockResetIcon />
                      <span>Balance payment</span>
                    </button> */}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      )}
      <button
        className="fx-ac spacem"
        style={{
          backgroundColor: "#00d285",
          color: "#fff",
          width: "12rem",
        }}
        // onClick={() => payRegistrationFee()}
        onClick={() => openModalTuitionFull()}
      >
        <PrivacyTipOutlinedIcon />
        <span>Pay tuition</span>
      </button>
    </>
  );
}

export function FullPaymentComp() {
  return <div className="fx-cl">FULL PAYMENT CONDITIONS</div>;
}
