// src/SubjectSelection.js
import React from "react";

const ResultOpEntry = ({
  subjectOptions,
  subject,
  dispatch,
  isSecondSitting,
}) => {
  const gradeOptions = ["A", "B", "C", "D", "E", "F"];

  const handleSubjectChange = (e) => {
    dispatch({
      type: "UPDATE_SUBJECT",
      id: subject.id,
      field: "selectedSubject",
      value: e.target.value,
    });
  };

  const handleGradeChange = (e) => {
    dispatch({
      type: "UPDATE_SUBJECT",
      id: subject.id,
      field: "selectedGrade",
      value: e.target.value,
    });
  };

  return (
    <div className="subject-selection fx-ac space2">
      <div className="fx-ac">
        <label>
          Subject ({isSecondSitting ? "Second Sitting" : "First Sitting"}):{" "}
        </label>
        <select value={subject.selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select a Subject</option>
          {subjectOptions.map((subjectOption) => (
            <option key={subjectOption} value={subjectOption}>
              {subjectOption}
            </option>
          ))}
        </select>
      </div>

      {subject.selectedSubject && (
        <div>
          <label>Grade: </label>
          <select value={subject.selectedGrade} onChange={handleGradeChange}>
            <option value="">Select a Grade</option>
            {gradeOptions.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ResultOpEntry;
