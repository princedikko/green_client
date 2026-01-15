import "./clientcbtExams.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Action from "../../../store/redux_computer_base/client_computer_base_reducer.js";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import IsLoading from "../../../isLoading.jsx";
import Calculator from "./cbtClientComps/Calculator.jsx";
// ------------------NEW IMPORTS---------------------
import CalculateIcon from "@mui/icons-material/Calculate";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TestImage from "./test.png";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import BedtimeOffIcon from "@mui/icons-material/BedtimeOff";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import GrainIcon from "@mui/icons-material/Grain";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import BalanceIcon from "@mui/icons-material/Balance";
import BackHandIcon from "@mui/icons-material/BackHand";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import SchoolIcon from "@mui/icons-material/School";
import PreviewQuestion from "./cbtClientComps/PreviewQuestion.jsx";
import Counter, { CounterMini } from "./cbtClientComps/Counter.jsx";
import Appeals from "./cbtClientComps/Appeals.jsx";
import ExaminationLogs from "./cbtClientComps/ExaminationLogs.jsx";

let queue;

function ClientCBTExams() {
  // INTEGRATIONS_-----------------------------
  const [showPassword, setShowPassword] = useState(false);
  const examsQuestions = useSelector((state) => state.clientAssesment?.queue);
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const [selectedSubject, setSelectedSubject] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(undefined);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // FULLSCREEN TOGGLE FUNCTION------------------
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // enter fullscreen
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      // exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // REDUX STATE SELECTOR----------------------
  const state = useSelector((state) => state);
  const answered = useSelector((state) => state.clientAssesment?.answers);

  // const { questionIndex } = examsQuestions[selectedSubject];

  // END OF MODAL FUNCTIONS------------------
  const [toggleAside, setToggleAside] = useState("instruction");
  const [showModal, setShowModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [onTimeChange, setOnTimeChange] = useState(false);
  const [togglePagination, setTogglePagination] = useState(true);
  function toggleModalBoxContents() {
    switch (showModal) {
      case "calculator":
        return <Calculator setOpenModal={setOpenModal} />;
      case "question":
        return (
          <PreviewQuestion
            setOpenModal={setOpenModal}
            examsQuestions={examsQuestions}
            selectedSubject={selectedSubject}
            openCalculator={openCalculator}
          />
        );
      case "counter":
        return (
          <Counter
            setOpenModal={setOpenModal}
            setOnTimeChange={setOnTimeChange}
          />
        );
      case "warning":
        return "Waring!";
      case "submit":
        return <button onClick={() => endExam()}>Clear data</button>;
      case "exams logs":
        return <ExaminationLogs />;
      case "appeals":
        return <Appeals setOpenModal={setOpenModal} />;
      default:
        return null;
    }
  }
  function openPreviewQuestion() {
    setOpenModal(true);
    setShowModal("question");
  }
  function openExamLogs() {
    setOpenModal(true);
    setShowModal("exams logs");
  }
  function openCalculator() {
    setOpenModal(true);
    setShowModal("calculator");
  }
  function openCounter() {
    setOpenModal(true);
    setShowModal("counter");
  }
  function openSubmit() {
    setOpenModal(true);
    setShowModal("submit");
  }
  function openWarning() {
    setOpenModal(true);
    setShowModal("warning");
  }
  function openAppeals() {
    setOpenModal(true);
    setShowModal("appeals");
  }
  function closeModalDiv() {
    setOpenModal(false);
    setShowModal("");
  }
  function Regulations() {
    return (
      <div className="Instructions">
        <div className="fx-cl">
          <div className="fx-cl">
            <strong>Examination Regulations</strong>
            <span>Lorem ipsum dolor sit.</span>
          </div>
          <ol>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
          </ol>
        </div>
      </div>
    );
  }
  function Instructions() {
    return (
      <div className="Instructions">
        <div className="fx-cl">
          <div className="fx-cl">
            <strong>Examination Instructions</strong>
            <span>Lorem ipsum dolor sit.</span>
          </div>
          <ol>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, rem quaerat!
            </li>
          </ol>
        </div>
      </div>
    );
  }
  function OperatingGuide() {
    return (
      <div className="OperatingGuide fx-cl space3">
        <div className="fx-cl">
          <strong>Computer Base Guide</strong>
          <span>Lorem ipsum dolor sit.</span>
        </div>
        <div className="OpGuidSec fx-ac space2">
          <NotificationsActiveOutlinedIcon />
          <p>
            <strong>Choose your option and click on</strong>
            next or previous button to submit
          </p>
        </div>
        <div className="OpGuidSec fx-ac space2">
          <NotificationsActiveOutlinedIcon />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ducimus eveniet ut? Vel ea ad placeat praesentium neque?
          </p>
        </div>

        <div className="OpGuidSec fx-ac space2">
          <NotificationsActiveOutlinedIcon />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    );
  }

  function switchAsideComp() {
    switch (toggleAside) {
      case "instruction":
        return <Instructions />;
      case "regulation":
        return <Regulations />;
      case "guide":
        return <OperatingGuide />;
      default:
        return <Instructions />;
    }
  }

  const DispatchEndExamination = () => async (dispatch) => {
    try {
      dispatch(Action.endExamsAction());
    } catch (error) {
      console.log(error);
    }
  };

  function endExam() {
    dispatch(DispatchEndExamination());
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubjectChange = (index) => {
    setSelectedSubject(index);
  };

  const DispatchnextQuestion = (selectedSubject) => async (dispatch) => {
    try {
      dispatch(Action.nextQuestion({ selectedSubject }));
    } catch (error) {
      console.log(error);
    }
  };
  const DispatchPushAnswer = (score) => async (dispatch) => {
    try {
      dispatch(Action.pushAnswers(score));
    } catch (error) {
      console.log(error);
    }
  };
  const querry = examsQuestions[selectedSubject]?.questionIndex + 1;
  const DispatchfillAnswer =
    ({ selectedSubject, score, querry }) =>
    async (dispatch) => {
      dispatch(Action.fillAnswer({ selectedSubject, score, querry }));
    };
  const handleNextQuestion = () => {
    if (
      examsQuestions[selectedSubject]?.questionIndex <
      examsQuestions[selectedSubject]?.questions.length
    ) {
      if (check !== undefined) {
        dispatch(DispatchfillAnswer({ selectedSubject, score, querry }));
      }
      dispatch(DispatchnextQuestion(selectedSubject));
      setCheck(undefined);
    }
  };

  const handlePrevtQuestion = () => {
    if (examsQuestions[selectedSubject]?.questionIndex > 0) {
      if (check !== undefined) {
        dispatch(DispatchfillAnswer({ selectedSubject, score, querry }));
      }
      dispatch(DispatchPrevQuestion(selectedSubject));
      setCheck(undefined);
    }
  };
  const DispatchPrevQuestion = (selectedSubject) => async (dispatch) => {
    try {
      dispatch(Action.prevQuestion({ selectedSubject }));
    } catch (error) {
      console.log(error);
    }
  };

  const peginationIndex = (selectedSubject, num) => {
    dispatch(DispatchMovePegination(selectedSubject, num)); // Pass both selectedSubject and num
    setCheck(undefined);
  };

  const DispatchMovePegination = (selectedSubject, num) => async (dispatch) => {
    try {
      dispatch(Action.onnPegination({ selectedSubject, num })); // Pass both as part of the payload
    } catch (error) {
      console.log(error);
    }
  };

  // const handleAsideNave = (item) => {
  //   dispatch(DispatchAsideNav(item));
  // };

  // const DispatchAsideNav = () => async (dispatch) => {
  //   try {
  //     dispatch(Action.switchAsideNav({ item })); // Pass both as part of the payload
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    !isFullscreen && toggleFullscreen();
  }, [isFullscreen]);
  return (
    <section className="sectionCBTExamsHub fx-cl">
      {openModal && (
        <div id="modalContainer" onClick={() => closeModalDiv()}>
          {toggleModalBoxContents()}
        </div>
      )}
      <div className="cbtExamsHubCont">
        <div className="ctbExamsHubHeader">
          <div className="cbtExamsHubheaderCont fx-ac fx-jb space6">
            <figure className="fx-ac space3">
              <div
                className="fx-ac fx-jc"
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "300rem",
                  width: "5rem",
                  height: "5rem",
                  padding: ".5rem",
                }}
              >
                <SchoolIcon fontSize="large" />
              </div>
              <div className="fx-cl">
                <p className="cbtExamshubHeading">
                  <strong>
                    First Semester Examination. 2024/2025 Academic Session
                  </strong>
                </p>
                <div className="cbtExamshubStatusBar fx-ac spacem">
                  <span>November, 23 2025</span>
                  <span
                    className="fx-ac spacem"
                    style={{
                      borderRight: "1px solid #999",
                      borderLeft: "1px solid #999",
                      padding: "0rem .4rem",
                    }}
                  >
                    <PeopleAltRoundedIcon />
                    <span>
                      <strong>
                        <em>263 </em>
                      </strong>
                      STUDENTS
                    </span>
                  </span>
                  <span className="fx-ac spacem">
                    <AccessTimeIcon />
                    <span>02:36pm</span>
                  </span>
                </div>
              </div>
            </figure>

            <figure className="ctbExamsHubRight fx-ac space2">
              <span>
                <em>
                  <strong>Othman </strong>18126006
                </em>
              </span>
              <div className="fx-ac">
                <div className="fx-ac fx-jc cbtdp">
                  <img src={TestImage} alt="" />
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div className="ctbExamsHubMain fx-jc space4">
          <div className="main fx-cl space4">
            <div className="ctbExamsHubSubjects fx-ac space2">
              {examsQuestions.map((response, index) => (
                <button
                  key={index}
                  className={`${selectedSubject === index ? "active" : ""}`}
                  onClick={() => handleSubjectChange(index)}
                >
                  {response.subject}
                </button>
              ))}
            </div>

            <div className="ctbExamsHubQuestion fx-cl space2">
              <div className="ctbExamsHubQuestionBtn fx-ac space2">
                <button onClick={() => openExamLogs()} className="">
                  {/* QuestionMarkIcon */}
                  <QuestionMarkIcon fontSize="large" />
                </button>
                <button onClick={() => openPreviewQuestion()} className="">
                  {/* Previews Question on Modal box */}
                  <VisibilityIcon fontSize="large" />
                </button>
              </div>
              <div className="ctbExamsHubMiddleWare fx-ac fx-jb space4">
                <CounterMini openCounter={openCounter} />
                <button
                  onClick={() => openCalculator()}
                  className="fx-ac spacem"
                  style={{ color: "#26bf89" }}
                >
                  <CalculateIcon /> <span>Calculator</span>
                </button>
              </div>
              <span className="ctbExamsHubQuestionCounts">
                Question: {examsQuestions[selectedSubject]?.questionIndex + 1}/
                {examsQuestions[selectedSubject]?.questions.length}
              </span>

              {/* ____________QUESTION MAPPING___________ */}

              <div className="fx-cl space4">
                {examsQuestions[selectedSubject]?.questions
                  ?.slice(
                    examsQuestions[selectedSubject]?.questionIndex,
                    examsQuestions[selectedSubject]?.questionIndex + 1
                  )
                  .map((response, id) => {
                    return (
                      <>
                        <div
                          key={id}
                          className="question-body fx-cl fx-jb space1"
                        >
                          <p
                            className={`cbtTheQuestion fx-ac ${
                              response.question.length > 400
                                ? "switchQuestionToScroll"
                                : null
                            } ${
                              (response.question.length > 365) &
                              (response.question.length < 400)
                                ? "switchQuestionFontSizeMedium"
                                : null
                            }`}
                          >
                            {response.question}
                          </p>
                          <div className="exHubOptionCont fx-cl space2">
                            {response.option?.map((option, index) => (
                              <label
                                key={index}
                                // FUNCTIONS FOR SETTING CHECKED TO ACTIVE
                                className={` fx-ac spacem optionSelectionEx ${
                                  check == index && "checkEx"
                                }
                              
                              ${
                                answered[selectedSubject]?.slice(
                                  examsQuestions[selectedSubject]
                                    ?.questionIndex,
                                  examsQuestions[selectedSubject]
                                    .questionIndex + 1
                                )[0] !== undefined &&
                                answered[selectedSubject]?.slice(
                                  examsQuestions[selectedSubject]
                                    ?.questionIndex,
                                  examsQuestions[selectedSubject]
                                    .questionIndex + 1
                                )[0] === index &&
                                "checkedExOpt"
                              }`}
                              >
                                <span className="exOptionsType">
                                  {String.fromCharCode(65 + index)}
                                </span>
                                <input
                                  style={{ opacity: 0 }}
                                  type="radio"
                                  name={`question-${index}`}
                                  value={option.value}
                                  onChange={() => {
                                    setScore(index);
                                    setCheck(index);
                                  }}
                                  checked={selectedOption === option}
                                />
                                {option.value}
                              </label>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className="ctbExamsHubOperations fx-ac space3 fx-jb">
              <div className="prev">
                {examsQuestions[selectedSubject]?.questionIndex > 0 ? (
                  <button className="next-button" onClick={handlePrevtQuestion}>
                    <SkipPreviousIcon />
                    <span>Previous</span>
                  </button>
                ) : (
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    &nbsp;
                  </button>
                )}
              </div>
              <figure className="fx-jc fx-ac space1">
                <button onClick={() => alert("I got clicked")} className="">
                  {/* NightMode */}
                  <BedtimeOffIcon fontSize="large" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className={`${isFullscreen && "active"}`}
                >
                  {isFullscreen ? (
                    <FullscreenExitIcon fontSize="large" />
                  ) : (
                    <FullscreenIcon fontSize="large" />
                  )}
                </button>
                <button
                  onClick={() => openCounter()}
                  className={`${showModal === "counter" && "active"}`}
                >
                  {/* Count Down */}
                  <HourglassTopIcon fontSize="large" />
                </button>
                <button onClick={() => openSubmit()} className="submit">
                  Submit exams
                </button>
                <button
                  onClick={() => setTogglePagination(!togglePagination)}
                  className={`${togglePagination && "active"}`}
                >
                  <span className="tooltips">toggle pagination</span>
                  {/* togglePagination */}
                  <GrainIcon fontSize="large" />
                </button>
                <button
                  onClick={() => openAppeals()}
                  className={`${showModal === "appeals" && "active"}`}
                >
                  {/* Appeal */}
                  <BalanceIcon fontSize="large" />
                </button>
                <button onClick={() => alert("I got clicked")} className="">
                  {/* RaisingHand */}
                  <BackHandIcon fontSize="large" />
                </button>
              </figure>
              <div className="next">
                {examsQuestions[selectedSubject]?.questionIndex <
                examsQuestions[selectedSubject]?.questions.length - 1 ? (
                  <button className="next-button" onClick={handleNextQuestion}>
                    <span>Next</span>
                    <SkipNextIcon />
                  </button>
                ) : (
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    &nbsp;
                  </button>
                )}
              </div>
            </div>

            {togglePagination && (
              <div className="ctbExamsHubPaginations">
                <div className="ctbExamsHubPaginationsCont">
                  {[
                    ...Array(
                      examsQuestions[selectedSubject]?.questions?.length
                    ).keys(),
                  ].map((num) => (
                    <button
                      key={num}
                      className={`pagination-button ${
                        examsQuestions[selectedSubject]?.questionIndex === num
                          ? "active"
                          : ""
                      } ${
                        //------------------------- FUNCTION TO BE HANDLE DUE TO CHANGES FROM UNDEFINE TO NULL ------------------------------
                        // answered[selectedSubject]?.slice(num, num + 1)[0] !==
                        //   undefined && "peginationChecked"

                        // NEW SOLUTIONS TO HANDLE THE UNDIFINED TO NULL ISSUE
                        typeof answered[selectedSubject]?.[num] === "number" &&
                        answered[selectedSubject]?.[num] >= 0 &&
                        "peginationChecked"
                      }`}
                      onClick={() => peginationIndex(selectedSubject, num)}
                    >
                      {num + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="aside fx-cl space1">
            <div className="ctbExamsHubAsideNav fx-ac spacem">
              <button
                onClick={() => setToggleAside("instruction")}
                className={`${toggleAside === "instruction" && "active"}`}
              >
                Instructions
              </button>
              <button
                onClick={() => setToggleAside("regulation")}
                className={`${toggleAside === "regulation" && "active"}`}
              >
                Regulations
              </button>
              <button
                onClick={() => setToggleAside("guide")}
                className={`${toggleAside === "guide" && "active"}`}
              >
                Manual
              </button>
            </div>
            <div>{switchAsideComp()}</div>
          </div>
        </div>
        <div className="ctbExamsHubFooter fx-ac fx-jc">
          <span>
            copy right &copy; {new Date().getFullYear()} Universe Tech Industry,
            all rights reserves
          </span>
        </div>
      </div>
    </section>
  );
}
export default ClientCBTExams;
