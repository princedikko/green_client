import axios from "axios";
import IsLoading from "../../../isLoading";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./admitdetail.css";

const student = {
  id: 1,
  name: "Jane Doe",
  gender: "Female",
  dob: "1999-05-15",
  email: "janedoe@example.com",
  phone: "123-456-7890",
  studentID: "S12345678",
  enrollmentYear: 2020,
  program: "Bachelor of Science in Computer Science",
  gpa: 3.8,
  advisor: "Dr. John Smith",
  courses: [
    "Introduction to Algorithms",
    "Data Structures",
    "Operating Systems",
    "Database Systems",
  ],
  photo: "path_to_student_photo.jpg",
};

let dataFetch;
export default function AdmitDetails() {
  const redirect = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  // const [dataFetch, setdataFetch] = useState("");
  const [status, setstatus] = useState("");
  const [data, setdata] = useState("");

  async function getApplicants() {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/admitting_applicant/details/${id}`
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
  async function admintStudent() {
    const data = {
      firstName: dataFetch?.first_Name,
      surName: dataFetch?.sur_Name,
      otherName: dataFetch?.other_Name,
      appNo: dataFetch?.application_number,
      programme: dataFetch?.programme_of_study,
      email_address: dataFetch?.email,
    };
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/admitting_applicant/admit/${id}`,
        data
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
  async function rejectStudent() {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/admitting_applicant/reject/${id}`
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

  useEffect(() => {
    getApplicants();
  }, []);
  return (
    <section className="fx-cl fx-ac fx-cj" style={{ padding: "4.6rem" }}>
      {loading ? <IsLoading /> : null}

      <div className="std_form-admit_detail-student-profile-container">
        <div className="std_form-admit_detail-header">
          Student Profile Preview
        </div>
        <div className="std_form-admit_detail-content">
          <div className="std_form-admit_detail-personal-info fx-cl space3">
            <h2>Personal Information</h2>
            <div className="fx-jb space3">
              <div className="std_form-admit_detail-info-group g g3 space2">
                <div>
                  <strong>Name:</strong>{" "}
                  <span>
                    {dataFetch?.first_Name +
                      " " +
                      dataFetch?.sur_Name +
                      " " +
                      dataFetch?.other_Name}
                  </span>
                </div>
                <div>
                  <strong>Gender:</strong> <span>{dataFetch?.gender}</span>
                </div>
                <div>
                  <strong>Date of Birth:</strong>{" "}
                  <span>{dataFetch?.Date_of_birth}</span>
                </div>
                <div>
                  <strong>Email:</strong> <span>{dataFetch?.email}</span>
                </div>
                <div>
                  <strong>Phone:</strong>{" "}
                  <span>0{dataFetch?.phone_number}</span>
                </div>
                <div>
                  <strong>Student ID:</strong>{" "}
                  <span>{dataFetch?.application_number}</span>
                </div>
                <div>
                  <strong>Enrollment programme:</strong>{" "}
                  <span>{dataFetch?.programme_of_study}</span>
                </div>
              </div>
              <img
                className="std_form-admit_detail-passport-photo"
                src={dataFetch?.passport?.url}
                alt="Student Passport"
              />
            </div>
          </div>

          <div className="std_form-admit_detail-academic-info">
            <div
              className="std_form-schools-attended"
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
                padding: "0",
                fontSize: "1.3rem",
              }}
            >
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
          </div>
          <div
            className="std_form-admit_detail-academic-info"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              padding: "0",
              fontSize: "1.3rem",
            }}
          >
            {/* Exam Information Section */}
            <div className="std_form-exam-info">
              <h2>Results Information</h2>

              {/* First Sitting */}
              <div className="fx-cl space2">
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
                      {dataFetch?.results.first_sitting.grade.map(
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
                          {dataFetch?.results.second_sitting.grade.map(
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
          </div>

          <div className="std_form-admit_detail-admin-actions">
            {dataFetch?.admissions?.status === "admitted" || status === 200 ? (
              <button
                onClick={() => admintStudent()}
                style={{
                  backgroundColor: "black",
                  color: "#fff",
                  borderRadius: "1.2rem",
                  width: "15%",
                  padding: "2rem",
                }}
              >
                Go back
              </button>
            ) : (
              <td className="fx-ac space3">
                <button
                  className="std_form-admit_detail-action-button delete"
                  onClick={() => {
                    rejectStudent();
                  }}
                >
                  Reject Candidate
                </button>
                <button
                  className="std_form-admit_detail-action-button approve"
                  onClick={() => admintStudent()}
                >
                  Admitt Candidate
                </button>
              </td>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
