import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import * as Action from "../../../store/redux_computer_base/client_computer_base_reducer.js";
import axios from "axios";
import "./clientsCBTExamsLogin.css";
import IsLoading from "../../../isLoading.jsx";
import neco from "./cbtImages/neco.png";
import waec from "./cbtImages/waec.png";
import jamb from "./cbtImages/jamb.png";
import nabteb from "./cbtImages/nabteb.png";

// QEUEE Slider __________________________________________________________________________________
let queue;
let answerFill;

export default function ClientsCBTExamsLogin() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { programme } = useParams();
  const data = useSelector(
    (state) => state.clientFunction?.queue?.clientData?.info
  );
  console.log("redux data", data);
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();

  // funtions for getting student into the examination base software

  const startExamination = async (selectedSubjects) => {
    console.log(
      "selectedSubjects",
      selectedSubjects,
      "lenght:",
      selectedSubjects.length
    );
    if (selectedSubjects.length > 0) {
      setLoading(true);
      await axios
        .post(
          `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/online_exams_system/apiget_exam_queues/${programme}`,
          selectedSubjects
        )
        .then((response) => {
          queue = response.data?.data;
          console.log("exam queue", response);

          // FUNCTIONS FOR SETTING STUDENT ANSWERS FIELDS ACCORDING TO THE TOTAL NUMBER OF QUESTIONS OF EACH SUBJECT
          answerFill = response?.data?.data?.map((item) =>
            Array(item.questions?.length).fill(undefined)
          );

          // FUNCTIONS FOR LOADING SUBJECTS AND THEIR QUESTIONS
          dispatch(DispatchStartExamination());
          redirect("/client_profile/assessment/exams/start_examination");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } else {
      enqueueSnackbar(`Please select at least one subject to proceed.`, {
        variant: "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    }
  };
  const DispatchStartExamination = () => async (dispatch) => {
    try {
      dispatch(Action.executeExamsAction({ queue, answerFill }));
    } catch (error) {
      console.log(error);
    }
  };

  const [verification, setVerification] = useState("");

  function toggleCondition() {
    switch (verification) {
      case "pending":
        return <Verification data={data} setVerification={setVerification} />;
      case "success":
        return (
          <ExaminationInstructions
            data={data}
            startExamination={startExamination}
          />
        );
      default:
        return <Verification data={data} setVerification={setVerification} />;
    }
  }
  return (
    <>
      {loading ? <IsLoading /> : null}
      <section className="sectionVerifyCBTExams fx-ac fx-jc">
        {toggleCondition()}
      </section>
    </>
  );
}

function Verification({ data, setVerification }) {
  const { programme } = useParams();
  const [code, setCode] = useState("");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  function submit() {
    if (data.auth.examPin === code) {
      console.log("code matched");
      enqueueSnackbar(`Login success!`, {
        variant: "success",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
      setVerification("success");
    } else {
      console.log("code not matched");
      enqueueSnackbar(`Incorrect exams PIN`, {
        variant: "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
      setVerification("pending");
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  function programmeSwitch() {
    switch (programme) {
      case "neco":
        return neco;
      case "waec":
        return waec;
      case "jamb":
        return jamb;
      case "nabteb":
        return nabteb;
      default:
        return null;
    }
  }
  return (
    <div className="verificationContainer fx-cl fx-jc fx-ac space2">
      <figure>
        <img src={programmeSwitch()} alt="" />
      </figure>
      <h2>Enter Verification Code</h2>
      <div className="fx-cl">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your exam pin"
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => submit()}>Submit</button>
      </div>
    </div>
  );
}

function ExaminationInstructions({ data, startExamination }) {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // Toggle handler
  const toggleSubject = (title) => {
    setSelectedSubjects((prev) => {
      if (prev.includes(title)) {
        // remove it
        return prev.filter((s) => s !== title);
      } else {
        // add it
        if (prev.length >= 4) {
          alert("You can only select up to 4 subjects for thi .");
          return prev; // Do not add more than 3 subjects
        }
        return [...prev, title];
      }
    });
  };

  return (
    <div className="examinationInstructionsContainer fx-cl fx-jc fx-ac">
      <h2>Examination Instructions</h2>
      <CoursesSelection
        data={data}
        selectedSubjects={selectedSubjects}
        setSelectedSubjects={setSelectedSubjects}
      />
      <div className="g g6 space2">
        {data?.enrollments?.courses?.map((item, index) => {
          const isChecked = selectedSubjects.includes(item.courseTitle);

          return (
            <figure
              key={index}
              onClick={() => toggleSubject(item.courseTitle)}
              className={`cbtCourseSelect ${isChecked && "checked"}`}
            >
              <figcaption>{item.courseTitle}</figcaption>
            </figure>
          );
        })}
      </div>

      <button
        onClick={() => startExamination(selectedSubjects)}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "1.2rem",
        }}
      >
        Start your Exams
      </button>
    </div>
  );
}

function CoursesSelection({ data, selectedSubjects, setSelectedSubjects }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // Toggle handler
  const toggleSubject = (title) => {
    setSelectedSubjects((prev) => {
      if (prev.includes(title)) {
        // remove it
        return prev.filter((s) => s !== title);
      } else {
        // add it
        if (prev.length >= 4) {
          enqueueSnackbar(
            `You can only select up to 4 subjects for this examination session.`,
            {
              variant: "error",
              autoHideDuration: 3000,
              ContentProps: {
                style: { fontSize: "16px", fontWeight: "bold" },
              },
            }
          );
          return prev; // Do not add more than 3 subjects
        }
        return [...prev, title];
      }
    });
  };

  const ssceSubjects = data?.enrollments?.map((item) => item.courseTitle) || [];

  return (
    <div className="fx-cl space3">
      <div className=" regStep fx-ac space2">
        <figure>Step 3</figure> <h3>Courses Checkout</h3>
      </div>

      <div className="fx-cl">
        <p>
          Your information is safe with us. We'll only contact when it's
          required to provide our services.
        </p>
      </div>
      <div className="g g3 space2">
        {ssceSubjects?.map((item, index) => {
          const isChecked = selectedSubjects.includes(item);

          return (
            <figure
              key={index}
              onClick={() => toggleSubject(item)}
              className={`regCourses ${isChecked && "checked"}`}
            >
              <figcaption style={{ backgroundColor: "#f0f0f029" }}>
                {item}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
