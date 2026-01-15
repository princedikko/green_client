import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Action from "../../../../../store/redux_computer_base/admin_computer_base_reducer.js";

let optionBoolean, optionYesorNo, alphabet2, alphabet3, alphabet4, alphabet5;
export default function SettingExamsComp({ setLoading }) {
  const [optionType, setoptionType] = useState("Change Option Type");
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.adminAssesment);
  console.log(active);

  const [quesionData, setQuesionData] = useReducer(
    (states, payload) => {
      return { ...states, ...payload };
    },
    {
      question: "",
    }
  );
  // A USEREDUCER FOR THE OPTIONS SWITCHING TO DIFFERENT ALPHABETICS OPTIONS
  const [optionsData, setOptionsData] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    {
      A: "",
      B: "",
      C: "",
      D: "",
      E: "",
    }
  );
  alphabet2 = [
    { key: "A", value: optionsData.A },
    { key: "B", value: optionsData.B },
  ];
  alphabet3 = [
    { key: "A", value: optionsData.A },
    { key: "B", value: optionsData.B },
    { key: "C", value: optionsData.C },
  ];
  alphabet4 = [
    { key: "A", value: optionsData.A },
    { key: "B", value: optionsData.B },
    { key: "C", value: optionsData.C },
    { key: "D", value: optionsData.D },
  ];
  alphabet5 = [
    { key: "A", value: optionsData.A },
    { key: "B", value: optionsData.B },
    { key: "C", value: optionsData.C },
    { key: "D", value: optionsData.D },
    { key: "E", value: optionsData.E },
  ];

  // Switching between the two components --------------
  const question = quesionData.question;
  optionBoolean = [
    { key: "True", value: true },
    { key: "False", value: false },
  ];

  optionYesorNo = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  function getCurrentOptionValue() {
    switch (optionType) {
      case "Boolean":
        return optionBoolean;
      case "Yes or No":
        return optionYesorNo;
      case "A.B & C":
        return alphabet3;
      case "A.B.C & D":
        return alphabet4;
      case "A.B.C.D & E":
        return alphabet5;
      case "A & B":
        return alphabet2;
      default:
        return alphabet4;
    }
  }

  //   REDUX FUNCTIONS -------------------------------------------

  const data = {
    question: question,
    option: getCurrentOptionValue(),
  };
  function pushExamsQueue() {
    dispatch(DispatchToQueue());
  }
  const DispatchToQueue = () => async (dispatch) => {
    try {
      await dispatch(Action.pushQuestion({ data }));
    } catch (error) {
      console.log(error);
    }
  };

  //   SWITCHING BETWEEN THE TWO COMPONENTS --------------------------------
  function switchExamsOptions() {
    switch (optionType) {
      case "Boolean":
        return <ExamsOptionBoolean optionBoolean={optionBoolean} />;
      case "Yes or No":
        return <ExamsOptionYesorNo optionYesorNo={optionYesorNo} />;
      case "A.B.C.D & E":
        return (
          <ExamsOption5
            alphabet5={alphabet5}
            optionsData={optionsData}
            setOptionsData={setOptionsData}
          />
        );
      case "A.B.C & D":
        return (
          <ExamsOption4
            alphabet4={alphabet4}
            optionsData={optionsData}
            setOptionsData={setOptionsData}
          />
        );
      case "A.B & C":
        return (
          <ExamsOption3
            alphabet3={alphabet3}
            optionsData={optionsData}
            setOptionsData={setOptionsData}
          />
        );
      case "A & B":
        return (
          <ExamsOption2
            alphabet2={alphabet2}
            optionsData={optionsData}
            setOptionsData={setOptionsData}
          />
        );
      default:
        return (
          <ExamsOption4
            alphabet4={alphabet4}
            optionsData={optionsData}
            setOptionsData={setOptionsData}
          />
        );
    }
  }
  return (
    <section className="sectionExamsSetting">
      <div className="ExamSetMain fx-cl space2">
        <h4>Set up Examination Queus here</h4>
        <textarea
          name="examsQuestion"
          id="examsQueue"
          cols="30"
          rows="10"
          value={quesionData.question}
          onChange={(event) => setQuesionData({ question: event.target.value })}
        ></textarea>
        <div className="fx-jb switchExamsOption">
          <span>&nbsp;</span>
          <div className="dropdown-container">
            <button
              className="dropdown-button"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              {optionType} ▼
            </button>

            {showDropdown && (
              <ul className="dropdown-menu">
                <li
                  onClick={() => {
                    setoptionType("Boolean");
                    setShowDropdown(false);
                  }}
                >
                  Boolean
                </li>
                <li
                  onClick={() => {
                    setoptionType("Yes or No");
                    setShowDropdown(false);
                  }}
                >
                  Yes or No
                </li>
                <li
                  onClick={() => {
                    setoptionType("A & B");
                    setShowDropdown(false);
                  }}
                >
                  A & B
                </li>
                <li
                  onClick={() => {
                    setoptionType("A.B & C");
                    setShowDropdown(false);
                  }}
                >
                  A.B & C
                </li>
                <li
                  onClick={() => {
                    setoptionType("A.B.C & D");
                    setShowDropdown(false);
                  }}
                >
                  A.B.C & D
                </li>
                <li
                  onClick={() => {
                    setoptionType("A.B.C.D & E");
                    setShowDropdown(false);
                  }}
                >
                  A.B.C.D & E
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="fx-cl space2">
          {switchExamsOptions()}
          <div className="fx-jb space2">
            <div>&nbsp;</div>
            <button onClick={() => pushExamsQueue()}>Upload</button>
          </div>
        </div>
      </div>
    </section>
  );
}

//   EXAMS OPTIONS COMPONENTS ---------------------------------------------
function ExamsOptionBoolean({ setOptionsData, optionsData }) {
  return (
    <div className="fx-cl">
      <span>True</span>
      <span>False</span>
    </div>
  );
}
function ExamsOptionYesorNo({ setOptionsData, optionsData }) {
  return (
    <div className="fx-cl">
      <span>Yes</span>
      <span>No</span>
    </div>
  );
}

function ExamsOption2({ setOptionsData, optionsData }) {
  return (
    <div className="fx-cl space1 examsOptionCont">
      <div className="examsOptionComp g g2">
        <span>A</span>
        <textarea
          name="optionExamsA"
          cols="30"
          rows="2"
          value={optionsData.A}
          onChange={(event) => setOptionsData({ A: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>B</span>
        <textarea
          name="optionExamsB"
          cols="30"
          rows="2"
          value={optionsData.B}
          onChange={(event) => setOptionsData({ B: event.target.value })}
        ></textarea>
      </div>
    </div>
  );
}

function ExamsOption3({ setOptionsData, optionsData }) {
  return (
    <div className="fx-cl space1 examsOptionCont">
      <div className="examsOptionComp g g2">
        <span>A</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.A}
          onChange={(event) => setOptionsData({ A: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>B</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.B}
          onChange={(event) => setOptionsData({ B: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>C</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.C}
          onChange={(event) => setOptionsData({ C: event.target.value })}
        ></textarea>
      </div>
    </div>
  );
}
function ExamsOption4({ setOptionsData, optionsData }) {
  return (
    <div className="fx-cl space1 examsOptionCont">
      <div className="examsOptionComp g g2">
        <span>A</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.A}
          onChange={(event) => setOptionsData({ A: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>B</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.B}
          onChange={(event) => setOptionsData({ B: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>C</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.C}
          onChange={(event) => setOptionsData({ C: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>D</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.D}
          onChange={(event) => setOptionsData({ D: event.target.value })}
        ></textarea>
      </div>
    </div>
  );
}
function ExamsOption5({ setOptionsData, optionsData }) {
  return (
    <div className="fx-cl space1 examsOptionCont">
      <div className="examsOptionComp g g2">
        <span>A</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.A}
          onChange={(event) => setOptionsData({ A: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>B</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.B}
          onChange={(event) => setOptionsData({ B: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>C</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.C}
          onChange={(event) => setOptionsData({ C: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>D</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.D}
          onChange={(event) => setOptionsData({ D: event.target.value })}
        ></textarea>
      </div>
      <div className="examsOptionComp g g2">
        <span>E</span>
        <textarea
          name="optionExams"
          id=""
          cols="30"
          rows="2"
          value={optionsData.E}
          onChange={(event) => setOptionsData({ E: event.target.value })}
        ></textarea>
      </div>
    </div>
  );
}
