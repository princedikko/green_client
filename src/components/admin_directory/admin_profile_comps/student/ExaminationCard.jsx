import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import IsLoading from "../../../../isLoading";

import "./AdmissionConfirmation.css";
import Logo from "../../../public_directory/public-routes-images/logos/Manga_Cons _Logo2.png";
let data;
const ExaminationCard = () => {
  const { adm } = useParams();
  const encodedId = encodeURIComponent(adm);
  console.log(encodedId);
  const [loading, setLoading] = useState(false);

  async function getStudentData() {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/management/fetchStudentData/${encodedId}`
      )
      .then((response) => {
        data = response.data.data;
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <>
      {loading ? <IsLoading /> : null}
      <section className="sectionConfirmation fx-ac fx-jc">
        <div className="confirmationCont fx-cl space3">
          <div className="confirmationDetails fx-cl space2 ">
            <div className="admletterHeader fx-ac fx-jc space4">
              <figure>
                <img src={Logo} alt="logo" />
              </figure>
              <div className="fx-cl fx-jc">
                <h2>MANGA COLLEGE OF NURSING SCIENCES, ZURU</h2>
                <section>
                  P.M.B. 02 Zuru-Kontagora Road Amanawa Area, Zuru, Kebbi State
                  -Nigeria
                </section>
                <strong>Office of Exams and Record</strong>
              </div>
            </div>
            <div className="fx-jb space2">
              <div className="fx-cl">
                <h3>Saidu Musa</h3>
                <em>Registrar</em>
              </div>
              <div className="fx-cl">
                {" "}
                <p>
                  Website:{" "}
                  <a href="https://www.mangacons.com.ng">
                    www.mangacons.com.ng
                  </a>
                </p>
                <p>
                  Email Address:{" "}
                  <a href="mailto:info.mangacons@gmail.com">
                    info.mangacons@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <p style={{ textAlign: "right" }}>Date: November 18th, 2025</p>

            <p>
              Name of Candidate:{" "}
              {data?.personalInfo.first_Name.toUpperCase() +
                " " +
                data?.personalInfo.sur_Name +
                " " +
                data?.personalInfo.other_Name}
            </p>

            <div className="fx-cl space3">
              <div className="fx-cl space1">
                <h3>EXAMINATION CARD</h3>
                <p>
                  The admission of the aforementioned individual into the Manga
                  College of Nursing Sciences, Zuru, for the 2024/2025 academic
                  session is hereby provisionally confirmed as follows:
                </p>

                <ul className="fx-cl spacem">
                  <li>
                    <strong>Programme:</strong> {data?.academicInfo.programme}
                  </li>
                  <li>
                    <strong>Department:</strong> {data?.academicInfo.department}
                  </li>
                  <li>
                    <strong>Admission Number:</strong> {data?.admission_number}
                  </li>
                  <li>
                    <strong>Level:</strong> {data?.academicInfo.state.level}
                  </li>
                </ul>

                <p>
                  The departments, along with all relevant divisions and units,
                  are requested to register the candidate accordingly, provided
                  the candidate accepts the undertaking below.
                </p>
              </div>
            </div>
            <div className="fx-jb spacem" style={{ marginTop: "4rem" }}>
              <span>&nbsp;</span>
              <div className="fx-cl fx-ac">
                <p>______________________</p>
                <p>Registrar</p>
              </div>
            </div>
            <div className="fx-cl space1">
              <h3>UNDERTAKING</h3>
              <p>
                I, Othman Omar Dikko, the undersigned, hereby accept the
                provisional admission, pending the verification of my entry
                qualifications by the institution during the period of study.
              </p>

              <p>
                I further accept that this offer may be withdrawn by the
                institution at any time if it is found that I have not met the
                entry requirements or that my qualifications are other than what
                was presented at the time of registration.
              </p>

              <p>
                To this end, I commit to providing certified proof of my
                qualifications from the awarding examination bodies within one
                year. Dated this Tuesday, 13th November 2025.
              </p>
            </div>
            <div className="fx-jb spacem" style={{ marginTop: "4rem" }}>
              <span>&nbsp;</span>
              <div className="fx-cl fx-ac">
                <p>______________________</p>
                <p>Signature of Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExaminationCard;
