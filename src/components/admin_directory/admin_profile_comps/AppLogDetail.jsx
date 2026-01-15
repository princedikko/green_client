import axios from "axios";
import IsLoading from "../../../isLoading";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./applogdetail.css";
let dataFetch;
export default function AppLogDetail({ setActive }) {
  const redirect = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [status, setstatus] = useState("");
  const [data, setdata] = useState("");

  async function getApplicants() {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/applicant_log/details/${id}`
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

  async function recommendApp() {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/applicant_log/recommend/${id}`
      )
      .then((response) => {
        setstatus(response.status);
        setdata(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }
  async function notRecommendApp() {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/applicant_log/reject/${id}`
      )
      .then((response) => {
        setstatus(response.status);
        setdata(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  function goBack() {
    setActive("app_logs");
    redirect("/admin_profile");
  }
  useEffect(() => {
    getApplicants();
  }, []);

  const data2 = {
    courseEnrollment: [],
    // "contactInfo.phone_number": dataFetch?.phone_number,

    "next_of_kin.full_name": dataFetch?.next_of_kin?.full_name,
    "next_of_kin.address": dataFetch?.next_of_kin?.address,
    "next_of_kin.relationship": dataFetch?.next_of_kin?.relationship,
    "next_of_kin.phone": dataFetch?.next_of_kin?.phone,
    "emergencyContact.name": "",
    "emergencyContact.relationship": "",
    "emergencyContact.phone": "",
    "emergencyContact.address": "",
    "academicInfo.programme": dataFetch?.programme_of_study,
    "financialRecords.tuitionFees": [],
    "financialRecords.scholarship": {
      status: false,
      sponsor: "",
    },

    "healthRecords.bloodGroup": "",
    "healthRecords.allergies": [],
    "healthRecords.medicalHistory": [
      {
        condition: "",
        diagnosedYear: "",
      },
    ],

    "libraryRecords.borrowedBooks": [],

    "personalInfo.Date_of_birth": dataFetch?.Date_of_birth.slice(0, 10),
    "personalInfo.Marital_status": dataFetch?.Marital_status,
    "personalInfo.passport": dataFetch?.passport?.url,

    "results.No_of_sitting": dataFetch?.No_of_sitting,
    "results.first_sitting.center_name":
      dataFetch?.results.first_sitting?.center_name,
    "results.first_sitting.center_number":
      dataFetch?.results.first_sitting?.center_number,
    "results.first_sitting.exams_number":
      dataFetch?.results.first_sitting?.exams_number,
    "results.first_sitting.exams_type":
      dataFetch?.results.first_sitting?.exams_type,
    "results.first_sitting.exams_year":
      dataFetch?.results.first_sitting?.exams_year,
  };

  const updateClient = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/registration_fee/clearParmentforTesting/${dataFetch?.application_number}`,
        data2
      )
      .then((response) => {
        alert("masha Allaah");

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section className="fx-ac fx-jc">
      {loading ? <IsLoading /> : null}
      <div className="std_form-application-container applogDetailsFormPrev">
        {dataFetch?.admissions.status === "admitted" ? (
          <div className="std_form-header">
            This Applicant is already admitted
          </div>
        ) : (
          <div className="std_form-header">Application Form Preview</div>
        )}
        <div className="std_form-content">
          {/* Personal Information Section */}
          {dataFetch?.account_status.registration_status === "pending" ? (
            <h2>Pending Applicant Details</h2>
          ) : null}
          <div className="std_form-personal-info">
            <h2>Personal Information</h2>

            <div className="std_form-info-group  fx-cl spacem">
              <div className="std_form_infor_top">
                <div className="g g2">
                  <div className="fx-ac space2">
                    <label>Full Name:</label>
                    <p>
                      {dataFetch?.first_Name +
                        " " +
                        dataFetch?.sur_Name +
                        " " +
                        dataFetch?.other_Name}
                    </p>
                  </div>

                  <div className="fx-ac space2">
                    <label>Application No.:</label>
                    <p>{dataFetch?.application_number}</p>
                  </div>

                  <div className="fx space2">
                    <label>Date of Birth:</label>
                    <p>{dataFetch?.Date_of_birth?.slice(0, 10)}</p>
                  </div>

                  <div className="fx  space2">
                    <label>Programme of Study:</label>
                    <p>{dataFetch?.programme_of_study}</p>
                  </div>
                  <div className="fx  space2">
                    <label>Email:</label>
                    <p>{dataFetch?.email}</p>
                  </div>
                </div>

                <img
                  src={dataFetch?.passport?.url}
                  alt="Student Passport"
                  className="std_form-passport-photo"
                />
              </div>
              <div
                className="rwdG3 g g3 space2"
                style={{
                  borderTop: "1px solid #999",
                  paddingTop: "2rem",
                  marginTop: "2rem",
                  rowGap: "2.3rem",
                }}
              >
                <div className="fx  space2">
                  <label>Gender:</label>
                  <p>{dataFetch?.gender}</p>
                </div>

                <div className="fx space2">
                  <label>Phone Number:</label>
                  <p>0{dataFetch?.phone_number}</p>
                </div>

                <div className="fx  space2">
                  <label>Marital Status:</label>
                  <p>{dataFetch?.Marital_status}</p>
                </div>
                <div className="fx  space2">
                  <label>Nationality:</label>
                  <p>{dataFetch?.Nationality}</p>
                </div>
                <div className="fx  space2">
                  <label>State of Origin:</label>
                  <p>{dataFetch?.State_of_origin}</p>
                </div>
                <div className="fx  space2">
                  <label>LGA of Origin:</label>
                  <p>{dataFetch?.Local_Govt_Area}</p>
                </div>

                <div className="fx  space2">
                  <label>Address:</label>
                  <p>{dataFetch?.Residential_address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Schools Attended Section */}
          {dataFetch?.account_status.registration_status === "completed" ? (
            <div className="std_form-schools-attended">
              <h2>Schools Attended</h2>
              <div className="std_form-school">
                <div className="fx-ac spacem">
                  <label>School Name:</label>
                  <p>
                    {
                      dataFetch?.eductional_records.primary_school
                        .institution_name
                    }
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Year started:</label>
                  <p>
                    <p>
                      {
                        dataFetch?.eductional_records.primary_school
                          .year_started
                      }
                    </p>
                  </p>
                </div>
                <div className="fx-ac spacem">
                  {" "}
                  <label>Year end:</label>
                  <p>
                    <p>
                      {dataFetch?.eductional_records.primary_school.year_finish}
                    </p>
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Certficate obtained:</label>

                  <p>
                    {
                      dataFetch?.eductional_records.primary_school
                        .certficate_obtained
                    }
                  </p>
                </div>
              </div>
              <div className="std_form-school">
                <div className="fx-ac spacem">
                  <label>School Name:</label>
                  <p>
                    {
                      dataFetch?.eductional_records.junior_secondary_school
                        .institution_name
                    }
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Year started:</label>
                  <p>
                    <p>
                      {
                        dataFetch?.eductional_records.junior_secondary_school
                          .year_started
                      }
                    </p>
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Year end:</label>
                  <p>
                    <p>
                      {
                        dataFetch?.eductional_records.junior_secondary_school
                          .year_finish
                      }
                    </p>
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Certficate obtained:</label>
                  <p>
                    <p>
                      {
                        dataFetch?.eductional_records.junior_secondary_school
                          .certficate_obtained
                      }
                    </p>
                  </p>
                </div>
              </div>
              <div className="std_form-school">
                <div className="fx-ac spacem">
                  <label>School Name:</label>
                  <p>
                    {
                      dataFetch?.eductional_records.senior_secondary_school
                        .institution_name
                    }
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Year started:</label>
                  <p>
                    <p>
                      {
                        dataFetch?.eductional_records.senior_secondary_school
                          .year_started
                      }
                    </p>
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Year end:</label>
                  <p>
                    <p>
                      {
                        dataFetch?.eductional_records.senior_secondary_school
                          .year_finish
                      }
                    </p>
                  </p>
                </div>
                <div className="fx-ac spacem">
                  <label>Certficate obtained:</label>
                  <p>
                    <p>
                      {
                        dataFetch?.eductional_records.senior_secondary_school
                          .certficate_obtained
                      }
                    </p>
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Exam Information Section */}
          {dataFetch?.account_status.registration_status === "completed" ? (
            <div className="std_form-exam-info">
              <h2>Exam Information</h2>

              {/* First Sitting */}
              <div className="fx-cl space2">
                <h3>First Sitting Result</h3>
                <div className="fx-ac">
                  <span>Number of Sitting:</span>
                  <span>{dataFetch?.No_of_sitting}</span>
                </div>
                <div className="g g2 rwdG2 space3">
                  <table>
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataFetch?.results?.first_sitting?.grade?.map(
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

                  {/* Second Sitting */}
                  {dataFetch?.No_of_sitting === "2" ? (
                    <div className="fx-cl space2">
                      {/* <h3>Second Sitting Result</h3> */}
                      <table>
                        <thead>
                          <tr>
                            <th>Subject</th>
                            <th>Grade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataFetch?.results?.second_sitting?.grade?.map(
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
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
          {/* Documents Section */}
          <div className="std_form-documents">
            <h2>Uploaded Documents</h2>
            <div className="g g3 rwdG3 space3">
              {dataFetch?.document_uploaded?.map((response, index) => {
                return (
                  <figure key={index} className="ducsupld fx-ac space1">
                    <img src={response.url} alt="ducs" />
                    <span className="fx-cl space1">
                      <span>Name: {response?.filename}</span>
                      <Link to={response?.url}>Preview document</Link>
                    </span>
                  </figure>
                );
              })}
            </div>
          </div>

          {/* Referees Section */}
          {dataFetch?.account_status.registration_status === "completed" ? (
            <div className="std_form-referees">
              <h2>Referees</h2>
              <div className="std_form-referee">
                <label>Referee Name:</label>
                <p>{dataFetch?.refrees.first_referee.full_name}</p>
                <label>Address:</label>
                <p>{dataFetch?.refrees?.first_referee?.address}</p>
                <label>Contact:</label>
                <p>{dataFetch?.refrees?.first_referee?.phone}</p>
              </div>

              <div className="std_form-referee">
                <label>Referee Name:</label>
                <p>{dataFetch?.refrees?.second_referee?.full_name}</p>
                <label>Address:</label>
                <p>{dataFetch?.refrees?.second_referee?.address}</p>
                <label>Contact:</label>
                <p>{dataFetch?.refrees?.second_referee?.phone}</p>
              </div>
            </div>
          ) : null}
          {dataFetch?.account_status?.registration_status === "completed" ? (
            <div className="std_form-referees">
              <h2>Next of kin:</h2>
              <div className="std_form-referee">
                <label>NOK Name:</label>
                <p>{dataFetch?.next_of_kin?.full_name}</p>
                <label>Relationship:</label>
                <p>{dataFetch?.next_of_kin?.relationship}</p>
                <label>Address:</label>
                <p>{dataFetch?.next_of_kin?.address}</p>
                <label>Contact:</label>
                <p>{dataFetch?.next_of_kin?.phone}</p>
              </div>
            </div>
          ) : null}
          {dataFetch?.account_status?.registration_status === "completed" ? (
            <div>
              {dataFetch?.admissions?.status === "recommended" ||
              status === 200 ? (
                <button
                  onClick={() => goBack()}
                  style={{
                    backgroundColor: "#0361f0",
                  }}
                >
                  Go back
                </button>
              ) : (
                <div className="fx-ac fx-jc space3">
                  {dataFetch?.admissions?.status === "admitted" ? (
                    <div className="fx-cl">
                      <p>This Applicant is already admitted</p>
                      <button onClick={() => updateClient()}>UPDATE HIM</button>
                    </div>
                  ) : (
                    <div className="fx-ac  space3">
                      <button
                        onClick={() => notRecommendApp()}
                        className="btnReject"
                      >
                        Reject application
                      </button>
                      <button
                        className="btnRecommend"
                        onClick={() => recommendApp()}
                      >
                        Recommend
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
