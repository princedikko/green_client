// src/App.js
import React, { useReducer, useState } from "react";
import ResultOpEntry from "./ResultOpEntry";
import "./resultoption.css";

const initialState = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  selectedSubject: "",
  selectedGrade: "",
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SUBJECT":
      return state.map((subject) =>
        subject.id === action.id
          ? { ...subject, [action.field]: action.value }
          : subject
      );
    default:
      return state;
  }
};

const ResultOptions = () => {
  const subjectOptions = [
    "Mathematics",
    "English Language",
    "Biology",
    "Physics",
    "Chemistry",
    "Geography",
    "Economics",
    "Government",
    "Literature",
    "Agricultural Science",
  ];

  const [subjects, dispatch] = useReducer(reducer, initialState);
  const [numberOfSittings, setNumberOfSittings] = useState(1);

  const selectedSubjects = subjects.map((subject) => subject.selectedSubject);

  const getAvailableSubjects = (sitting) => {
    const alreadySelected = subjects
      .filter((subj) => subj.isSecondSitting === (sitting === 2))
      .map((subj) => subj.selectedSubject);
    return subjectOptions.filter(
      (subject) => !alreadySelected.includes(subject)
    );
  };

  const handleSittingChange = (e) => {
    setNumberOfSittings(parseInt(e.target.value, 10));
  };

  return (
    <div className="test">
      <div>
        <label>Number of Sittings: </label>
        <select value={numberOfSittings} onChange={handleSittingChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
      </div>
      <div className="fx-ac fx-jb fx-cl space3">
        <div className="fx-cl space2">
          <h3>First Sitting</h3>
          <div className="g g3 space2">
            <div className="fx-cl spacem regFormfloat">
              <label className="inputCont" htmlFor="text">
                Exam type:
              </label>
              <div className="fx-ac space1 regInputCont">
                <input type="text" name="admission-number" />
              </div>
            </div>
            <div className="fx-cl spacem regFormfloat">
              <label className="inputCont" htmlFor="text">
                Exam year:
              </label>
              <div className="fx-ac space1 regInputCont">
                <input type="text" name="admission-number" />
              </div>
            </div>
            <div className="fx-cl spacem regFormfloat">
              <label className="inputCont" htmlFor="text">
                Center name:
              </label>
              <div className="fx-ac space1 regInputCont">
                <input type="text" name="admission-number" />
              </div>
            </div>
            <div className="fx-cl spacem regFormfloat">
              <label className="inputCont" htmlFor="text">
                Center No.:
              </label>
              <div className="fx-ac space1 regInputCont">
                <input type="text" name="admission-number" />
              </div>
            </div>
            <div className="fx-cl spacem regFormfloat">
              <label className="inputCont" htmlFor="text">
                Exam No.:
              </label>
              <div className="fx-ac space1 regInputCont">
                <input type="text" name="admission-number" />
              </div>
            </div>
          </div>
          {subjects.map((subject) => (
            <ResultOpEntry
              key={subject.id}
              subject={subject}
              subjectOptions={getAvailableSubjects(1)}
              dispatch={dispatch}
            />
          ))}
        </div>
        <div className="fx-cl">
          {numberOfSittings === 2 && (
            <div className="fx-cl space2">
              <h3>Second Sitting</h3>
              <div className="g g3 space2">
                <div className="fx-cl spacem regFormfloat">
                  <label className="inputCont" htmlFor="text">
                    Exam type:
                  </label>
                  <div className="fx-ac space1 regInputCont">
                    <input type="text" name="admission-number" />
                  </div>
                </div>
                <div className="fx-cl spacem regFormfloat">
                  <label className="inputCont" htmlFor="text">
                    Exam year:
                  </label>
                  <div className="fx-ac space1 regInputCont">
                    <input type="text" name="admission-number" />
                  </div>
                </div>
                <div className="fx-cl spacem regFormfloat">
                  <label className="inputCont" htmlFor="text">
                    Center name:
                  </label>
                  <div className="fx-ac space1 regInputCont">
                    <input type="text" name="admission-number" />
                  </div>
                </div>
                <div className="fx-cl spacem regFormfloat">
                  <label className="inputCont" htmlFor="text">
                    Center No.:
                  </label>
                  <div className="fx-ac space1 regInputCont">
                    <input type="text" name="admission-number" />
                  </div>
                </div>
                <div className="fx-cl spacem regFormfloat">
                  <label className="inputCont" htmlFor="text">
                    Exam No.:
                  </label>
                  <div className="fx-ac space1 regInputCont">
                    <input type="text" name="admission-number" />
                  </div>
                </div>
              </div>
              {subjects.map((subject) => (
                <ResultOpEntry
                  key={`second-${subject.id}`}
                  subject={subject}
                  subjectOptions={getAvailableSubjects(2)}
                  dispatch={dispatch}
                  isSecondSitting
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultOptions;
