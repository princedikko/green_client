import { useEffect, useState } from "react";
import axios from "axios";
import IsLoading from "../../../../isLoading";
import "../admissionhub.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useSnackbar } from "notistack";
import * as Action from "../../../../store/redux/admission_reducer.js";
import DoneIcon from "@mui/icons-material/Done";

let $admission_number;
let Applicant;

export default function Admitted({ logOut }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { id, appNo } = useParams();
  const studentData = useSelector(
    (state) => state.admissionActions.queue.Applicant
  );

  //   STUDENTS ACCEPTING ADMISSION FUCTIONS

  const email = studentData?.email;
  const phone_number = studentData?.phone_number;
  const name = `${
    studentData?.first_Name +
    " " +
    studentData?.sur_Name +
    " " +
    studentData?.other_Name
  }`;

  const config = {
    public_key: `FLWPUBK_TEST-11dd15a3cd552223b958000b7ed835f5-X`,
    tx_ref: Date.now(),
    amount: 10000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      name,
      email,
      phone_number,
    },
    customizations: {
      title: "MANGA C.O.N.S",
      description: "Payment for Acceptance of Admission fee",
      logo: "https://mangaconszurufilesbucket.s3.eu-north-1.amazonaws.com/1738333704870_Manga_Cons _Logo3.8a66ad505d6e3f3e47d9.png",
    },
  };
  let reference_Number;
  const fwConfig = {
    ...config,
    text: "Accepet admission!",
    callback: async (response) => {
      setLoading(true);
      reference_Number = response.tx_ref;
      closePaymentModal(); // Close modal programmatically
      if (response.status === "successful") {
        acceptAdmission();
        setLoading(false);
      } else {
        enqueueSnackbar(`accenptance failed`, {
          variant: "error",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        console.log("Payment Failed");
        setLoading(false);
      }
    },
    onClose: () => {},
  };
  function logOutAdm() {
    dispatch(DispatchADMhubLogOut());
  }

  const DispatchADMhubLogOut = () => async (dispatch) => {
    try {
      dispatch(Action.logOut());
    } catch (error) {
      console.log(error);
    }
  };

  const DispatchADMhubAuth = () => async (dispatch) => {
    try {
      dispatch(Action.startAdmissionAction({ Applicant }));
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    passport: studentData?.passport.url,
    first_name: studentData?.first_Name,
    sur_name: studentData?.sur_Name,
    other_name: studentData?.other_Name,
    gender: studentData?.gender,
    email: studentData?.email,
    programme_of_study: studentData?.programme_of_study,
    state_of_address: studentData?.contact_address.state,
    lga_address: studentData?.contact_address.local_govt_area,
    address: studentData?.contact_address.address,
    phone_no: studentData?.phone_number,
    application_number: studentData?.application_number,
    ref_number: studentData?.account_status.reference_number,
    transaction_id: studentData?.account_status.transaction_id,
    marital_status: studentData?.Marital_status,
    nationality: studentData?.Nationality,
    state_of_origin: studentData?.State_of_origin,
    lga_of_origin: studentData?.Local_Govt_Area,
    home_address: studentData?.Residential_address,
    Date_of_birth: studentData?.Date_of_birth,
    // DOCUMENTS UPLOADED
    document_uploaded: studentData?.document_uploaded?.map((document) => ({
      fileName: document.filename,
      fileSize: document.size,
      fileType: document.mimeType,
      url: document.url,
    })),
    // first studentData?.
    no_of_sitting: studentData?.No_of_sitting,
    first_sitting_center_name: studentData?.results.first_sitting.center_name,
    first_sitting_center_number:
      studentData?.results?.first_sitting.center_number,
    first_sitting_exam_number: studentData?.results.first_sitting.exams_number,
    first_sitting_exam_type: studentData?.results.first_sitting.exams_type,
    first_sitting_exam_year: studentData?.results.first_sitting.exams_year,
    fcourse1: studentData?.results.first_sitting.grade[0].subject,
    fscore1: studentData?.results.first_sitting.grade[0].grade,
    fcourse2: studentData?.results.first_sitting.grade[1].subject,
    fscore2: studentData?.results.first_sitting.grade[1].grade,
    fcourse3: studentData?.results.first_sitting.grade[2].subject,
    fscore3: studentData?.results.first_sitting.grade[2].grade,
    fcourse4: studentData?.results.first_sitting.grade[3].subject,
    fscore4: studentData?.results.first_sitting.grade[3].grade,
    fcourse5: studentData?.results.first_sitting.grade[4].subject,
    fscore5: studentData?.results.first_sitting.grade[4].grade,
    fcourse6: studentData?.results.first_sitting.grade[5].subject,
    fscore6: studentData?.results.first_sitting.grade[5].grade,
    fcourse7: studentData?.results.first_sitting.grade[6].subject,
    fscore7: studentData?.results.first_sitting.grade[6].grade,
    fcourse8: studentData?.results.first_sitting.grade[7].subject,
    fscore8: studentData?.results.first_sitting.grade[7].grade,
    fcourse9: studentData?.results.first_sitting.grade[8].subject,
    fscore9: studentData?.results.first_sitting.grade[8].grade,

    // second studentData?.
    ssitting_center_name: studentData?.results.second_sitting.center_name,
    ssitting_center_number: studentData?.results.second_sitting.center_number,
    ssitting_exam_number: studentData?.results.second_sitting.exams_number,
    ssitting_exams_type: studentData?.results.second_sitting.exams_type,
    ssitting_exam_year: studentData?.results.second_sitting.exams_year,
    scourse1: studentData?.results.second_sitting.grade[0].subject,
    sscore1: studentData?.results.second_sitting.grade[0].grade,
    scourse2: studentData?.results.second_sitting.grade[1].subject,
    sscore2: studentData?.results.second_sitting.grade[1].grade,
    scourse3: studentData?.results.second_sitting.grade[2].subject,
    sscore3: studentData?.results.second_sitting.grade[2].grade,
    scourse4: studentData?.results.second_sitting.grade[3].subject,
    sscore4: studentData?.results.second_sitting.grade[3].grade,
    scourse5: studentData?.results.second_sitting.grade[4].subject,
    sscore5: studentData?.results.second_sitting.grade[4].grade,
    scourse6: studentData?.results.second_sitting.grade[5].subject,
    sscore6: studentData?.results.second_sitting.grade[5].grade,
    scourse7: studentData?.results.second_sitting.grade[6].subject,
    sscore7: studentData?.results.second_sitting.grade[6].grade,
    scourse8: studentData?.results.second_sitting.grade[7].subject,
    sscore8: studentData?.results.second_sitting.grade[7].grade,
    scourse9: studentData?.results.second_sitting.grade[8].subject,
    sscore9: studentData?.results.second_sitting.grade[8].grade,

    // education studentData?.

    primary_sch_name:
      studentData?.eductional_records.primary_school.institution_name,
    primary_sch_started:
      studentData?.eductional_records.primary_school.year_started,
    Primary_sch_end: studentData?.eductional_records.primary_school.year_finish,
    primary_sch_cert:
      studentData?.eductional_records.primary_school.certficate_obtained,

    junior_sec_sch_name:
      studentData?.eductional_records.junior_secondary_school.institution_name,
    junior_sec_sch_from:
      studentData?.eductional_records.junior_secondary_school.year_started,
    junior_sec_sch_end:
      studentData?.eductional_records.junior_secondary_school.year_finish,
    junior_sec_sch_cert:
      studentData?.eductional_records.junior_secondary_school
        .certficate_obtained,

    senior_sec_sch_name:
      studentData?.eductional_records.senior_secondary_school.institution_name,
    senior_sec_sch_from:
      studentData?.eductional_records.senior_secondary_school.year_started,
    senior_sec_sch_end:
      studentData?.eductional_records.senior_secondary_school.year_finish,
    senior_sec_sch_cert:
      studentData?.eductional_records.senior_secondary_school
        .certficate_obtained,

    // Refrees studentData?.
    ref1_name: studentData?.refrees.first_referee.full_name,
    ref1_address: studentData?.refrees.first_referee.address,
    ref1_email: studentData?.refrees.first_referee.email,
    ref1_phone: studentData?.refrees.first_referee.phone,
    ref2_name: studentData?.refrees.second_referee.full_name,
    ref2_address: studentData?.refrees.second_referee.address,
    ref2_email: studentData?.refrees.second_referee.email,
    ref2_phone: studentData?.refrees.second_referee.phone,
    nok_name: studentData?.next_of_kin.full_name,
    nok_address: studentData?.next_of_kin.address,
    // nok_email: studentData?.next_of_kin.email,
    nok_phone: studentData?.next_of_kin.phone,
    // adm_status: studentData?.admissions.status,
    adm_acceptance_of_adm: studentData?.admissions.acceptance_of_adm,
    adm_date_admitted: studentData?.admissions.date_admitted,
    agree: studentData?.agree,
  };

  // const data = {
  //   live: false,

  //   account_status: {
  //     registration_status: "pending",
  //     paymentStatus: "success",
  //     reference_number: studentData?.account_status.reference_number,
  //     transaction_id: studentData?.account_status.transaction_id,
  //   },

  //   personalInfo: {
  //     passport: studentData?.passport.url,
  //     first_Name: studentData?.first_Name,
  //     sur_Name: studentData?.sur_Name,
  //     other_Name: studentData?.other_Name,
  //     gender: studentData?.gender,
  //     programme_of_study: studentData?.programme_of_study,
  //     Date_of_birth: studentData?.Date_of_birth,
  //     Marital_status: studentData?.Marital_status,
  //     profile_picture: "",
  //     permanent_home_address: {
  //       Nationality: studentData?.Nationality,
  //       State_of_origin: studentData?.State_of_origin,
  //       Local_Govt_Area: studentData?.Local_Govt_Area,
  //       line_address: studentData?.Residential_address,
  //     },
  //     contact_address: {
  //       state: studentData?.contact_address.state,
  //       local_govt_area: studentData?.contact_address.local_govt_area,
  //       address: studentData?.contact_address.address,
  //     },
  //   },
  //   contactInfo: {
  //     email: studentData?.email,
  //     phone_number: studentData?.phone_number,
  //     next_of_kin: {
  //       full_name: studentData?.next_of_kin.full_name,
  //       address: studentData?.next_of_kin.address,
  //       email: studentData?.next_of_kin.email,
  //       phone: studentData?.next_of_kin.phone,
  //     },
  //   },

  //   registered_date: {
  //     date: "",
  //     time: "",
  //   },
  //   date_admitted: {
  //     date: "",
  //     time: "",
  //   },
  //   date_accepts_admission: {
  //     date: new Date().toDateString(),
  //     time: new Date().toLocaleTimeString(),
  //   },
  //   // Admissions

  //   admissions: {
  //     status: studentData?.admissions.status,
  //     acceptance_of_adm: studentData?.admissions.acceptance_of_adm,
  //     date_admitted: studentData?.admissions.date_admitted,
  //     application_number: studentData?.application_number,
  //   },

  //   // First Sitting Resutls
  //   results: {
  //     No_of_sitting: studentData?.No__of_sitting,
  //     first_sitting: {
  //       center_name: studentData?.results.first_sitting.center_name,
  //       center_number: studentData?.results?.first_sitting.center_number,
  //       exams_number: studentData?.results.first_sitting.exams_number,
  //       exams_type: studentData?.results.first_sitting.exams_type,
  //       exams_year: studentData?.results.first_sitting.exams_year,
  //       grade: [
  //         {
  //           subject: studentData?.results.first_sitting.grade[0].subject,
  //           grade: studentData?.results.first_sitting.grade[0].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[1].subject,
  //           grade: studentData?.results.first_sitting.grade[1].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[2].subject,
  //           grade: studentData?.results.first_sitting.grade[2].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[3].subject,
  //           grade: studentData?.results.first_sitting.grade[3].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[4].subject,
  //           grade: studentData?.results.first_sitting.grade[4].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[5].subject,
  //           grade: studentData?.results.first_sitting.grade[5].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[6].subject,
  //           grade: studentData?.results.first_sitting.grade[6].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[7].subject,
  //           grade: studentData?.results.first_sitting.grade[7].grade,
  //         },
  //         {
  //           subject: studentData?.results.first_sitting.grade[8].subject,
  //           grade: studentData?.results.first_sitting.grade[8].grade,
  //         },
  //       ],
  //     },
  //     second_sitting: {
  //       center_name: studentData?.results.second_sitting.center_name,
  //       center_number: studentData?.results.second_sitting.center_number,
  //       exams_number: studentData?.results.second_sitting.exams_number,
  //       exams_type: studentData?.results.second_sitting.exams_type,
  //       exams_year: studentData?.results.second_sitting.exams_year,
  //       grade: [
  //         {
  //           subject: studentData?.results.second_sitting.grade[0].subject,
  //           grade: studentData?.results.second_sitting.grade[0].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[1].subject,
  //           grade: studentData?.results.second_sitting.grade[1].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[2].subject,
  //           grade: studentData?.results.second_sitting.grade[2].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[3].subject,
  //           grade: studentData?.results.second_sitting.grade[3].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[4].subject,
  //           grade: studentData?.results.second_sitting.grade[4].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[5].subject,
  //           grade: studentData?.results.second_sitting.grade[5].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[6].subject,
  //           grade: studentData?.results.second_sitting.grade[6].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[7].subject,
  //           grade: studentData?.results.second_sitting.grade[7].grade,
  //         },
  //         {
  //           subject: studentData?.results.second_sitting.grade[8].subject,
  //           grade: studentData?.results.second_sitting.grade[8].grade,
  //         },
  //       ],
  //     },
  //   },

  //   // EDUCATIONAL RECORDS
  //   eductional_records: {
  //     senior_secondary_school: {
  //       institution_name:
  //         studentData?.eductional_records.senior_secondary_school
  //           .institution_name,
  //       year_started:
  //         studentData?.eductional_records.senior_secondary_school.year_started,
  //       year_finish:
  //         studentData?.eductional_records.senior_secondary_school.year_finish,
  //       certficate_obtained:
  //         studentData?.eductional_records.senior_secondary_school
  //           .certficate_obtained,
  //     },
  //     junior_secondary_school: {
  //       institution_name:
  //         studentData?.eductional_records.junior_secondary_school
  //           .institution_name,
  //       year_started:
  //         studentData?.eductional_records.junior_secondary_school.year_started,
  //       year_finish:
  //         studentData?.eductional_records.junior_secondary_school.year_finish,
  //       certficate_obtained:
  //         studentData?.eductional_records.junior_secondary_school
  //           .certficate_obtained,
  //     },
  //     primary_school: {
  //       institution_name:
  //         studentData?.eductional_records.primary_school.institution_name,
  //       year_started:
  //         studentData?.eductional_records.primary_school.year_started,
  //       year_finish: studentData?.eductional_records.primary_school.year_finish,
  //       certficate_obtained:
  //         studentData?.eductional_records.primary_school.certficate_obtained,
  //     },
  //   },
  //   // Refrees informations
  //   refrees: {
  //     first_referee: {
  //       full_name: studentData?.refrees.first_referee.full_name,
  //       address: studentData?.refrees.first_referee.address,
  //       email: studentData?.refrees.first_referee.email,
  //       phone: studentData?.refrees.first_referee.phone,
  //     },
  //     second_referee: {
  //       full_name: studentData?.refrees.second_referee.full_name,
  //       address: studentData?.refrees.second_referee.address,
  //       email: studentData?.refrees.second_referee.email,
  //       phone: studentData?.refrees.second_referee.phone,
  //     },
  //   },

  //   courseEnrollment: [],
  //   academicInfo: {
  //     studentID: studentData?.application_number,
  //     department: `Department of ${studentData?.programme_of_study}`,
  //     programme: studentData?.programme_of_study,
  //     // faculty: "Faculty of Nursing Sciences",
  //     level: "100",
  //     entryYear: 2025,
  //     expectedGraduationYear: 2028,
  //     currentCGPA: 0,
  //   },
  //   financialRecords: {
  //     tuitionFees: [
  //       {
  //         session: "",
  //         amount: "",
  //         paymentStatus: "Un-Paid",
  //         transactionId: "",
  //         paymentDate: "",
  //       },
  //     ],
  //     scholarship: {
  //       status: false,
  //       sponsor: "",
  //       amount: "",
  //     },
  //   },
  //   hostelInfo: {
  //     hostelName: "",
  //     roomNumber: "",
  //     status: "Un-Allocated",
  //     session: "",
  //     date: "",
  //     paymentStatus: "Un-paid",
  //     reference_number: "",
  //   },
  //   libraryRecords: {
  //     borrowedBooks: [],
  //   },
  //   healthRecords: {
  //     bloodGroup: "",
  //     allergies: [],
  //     medicalHistory: [
  //       {
  //         condition: "",
  //         diagnosedYear: "",
  //       },
  //     ],
  //   },
  //   auth: {
  //     username: "",
  //     passwordHash: "",
  //     role: "Student",
  //     lastLogin: "",
  //   },
  //   emergencyContact: {
  //     name: "",
  //     relationship: "",
  //     phone: "",
  //     address: "",
  //   },
  //   terms_of_service: "agree",
  // };

  async function acceptAdmission() {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/student_accepts/${appNo}`,
        data
      )
      .then((response) => {
        Applicant = response.data?.data;
        if (response.data.status === 404) {
          alert(response.data.message);
        } else if (response.data.status === 200) {
          dispatch(DispatchADMhubAuth());
          redirect(
            `/admission_status/${Applicant?._id}/${appNo}/admitted?email=${email}`
          );
        }

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  async function rejectAdmission() {
    setLoading(true);
    await axios
      .put(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/student_rejects/${id}`)
      .then((response) => {
        Applicant = response.data.result;
        dispatch(DispatchADMhubAuth());
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  function getStudLogin() {
    redirect("/student_login");
    logOut();
  }

  function Accepts({ logOut }) {
    return (
      <div className="fx-cl fx-jc checkADM space2 fs4">
        <div
          className="admitCont fx-cl fx-ac space2"
          // style={{
          //   backgroundColor: "#fff",
          //   padding: "3.4rem",
          //   borderRadius: "1.2rem",
          // }}
        >
          <div className="loogS">
            <DoneIcon style={{ fontSize: "3.4rem" }} />
          </div>
          <span
            style={{
              color: "#18c07a",
              fontSize: "3.5rem",
              fontWeight: "100",
            }}
          >
            Congratulations!!
          </span>
          <p style={{ textAlign: "center" }}>
            {studentData.first_Name + " " + studentData.sur_Name}, You have
            successfully accepted your admission, you can now login to your
            student portal and proceed to the programme activities
          </p>

          <p>
            Your Admission nubmer is:
            <strong>{$admission_number?.academicInfo.studentID}</strong>
          </p>

          <div className="fx-jc space3">
            <button
              onClick={logOutAdm}
              style={{ backgroundColor: "red", color: "#fff" }}
            >
              Close
            </button>
            <button
              onClick={() => getStudLogin()}
              style={{ backgroundColor: "#46cd95", color: "#fff" }}
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    );
  }
  function Main({ logOut }) {
    return (
      <div className="fx-cl fx-jc checkADM space2 fs4">
        <div className="admitCont fx-cl fx-ac space2">
          <div className="loogS">
            <DoneIcon style={{ fontSize: "3.4rem" }} />
          </div>
          <h3
            style={{
              color: "#18c07a",
              fontSize: "4.5rem",
              fontWeight: "200",
            }}
          >
            Congratulations!!
          </h3>
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "300",
              lineHeight: "2",
              textAlign: "center",
            }}
          >
            Dear
            <strong>
              {" " + studentData?.first_Name} {studentData?.sur_Name}
            </strong>
            , Congratulations! We are thrilled to inform you that you have been
            admitted. Welcome to our community! We look forward to supporting
            you on your educational journey.
          </p>

          <div className="fx-jc space3">
            <button onClick={() => rejectAdmission()}>Reject admissoin</button>
            <button onClick={() => acceptAdmission()}>
              Accepet admission!
            </button>
            {/* <FlutterWaveButton
              {...fwConfig}
              style={{ backgroundColor: "green" }}
            /> */}
          </div>
        </div>
      </div>
    );
  }
  function Rejects({ logOut }) {
    return (
      <div className="fx-cl fx-jc checkADM space2 fs4">
        <div className="admitCont fx-cl fx-ac space2">
          <div className="loogS">
            <DoneIcon style={{ fontSize: "3.4rem" }} />
          </div>
          <h3
            style={{
              color: "#18c07a",
              fontSize: "4.5rem",
              fontWeight: "200",
            }}
          >
            Admission rejected successfully
          </h3>
          <p
            style={{
              fontSize: "2.8rem",
              fontWeight: "300",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            <strong>
              {studentData?.first_Name} {studentData?.sur_Name}
            </strong>
          </p>
          <div className="fx-jc space3">
            <button onClick={logOutAdm}>CLOSE</button>
          </div>
        </div>
      </div>
    );
  }
  function switchComps() {
    switch (studentData?.admissions.acceptance_of_adm) {
      case "accepted":
        return <Accepts />;
      case "rejected":
        return <Rejects />;
      default:
        return <Main />;
    }
  }

  return (
    <section className="fx-cl fx-ac fx-jc">
      {loading ? <IsLoading /> : switchComps()}
    </section>
  );
}
