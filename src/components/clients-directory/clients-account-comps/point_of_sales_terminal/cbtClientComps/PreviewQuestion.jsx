import { useState } from "react";
import Calculator from "./Calculator";
import "./previewquestion.css";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function PreviewQuestion({
  openCalculator,
  selectedSubject,
  examsQuestions,
}) {
  const [openCalc, setOpenCalc] = useState(false);
  return (
    <>
      {openCalc && (
        <div id="modalContainer" onClick={() => setOpenCalc(false)}>
          <Calculator />
        </div>
      )}
      <div className="fx-cl space2" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setOpenCalc(!openCalc)}
          className="fx-ac spacem"
          style={{ color: "#26bf89" }}
        >
          <CalculateIcon /> <span>Calculator</span>
        </button>

        <div
          className="fx-ac"
          style={{
            backgroundColor: "#fff",
            padding: "1.2rem",
            borderRadius: "1.2rem",
          }}
        >
          <div className="fx-cl space4">
            {examsQuestions[selectedSubject].questions
              ?.slice(
                examsQuestions[selectedSubject].questionIndex,
                examsQuestions[selectedSubject].questionIndex + 1
              )
              .map((response, id) => {
                return (
                  <>
                    <div
                      key={id}
                      className="examsQuestionPreviewCont fx-cl fx-jb space1"
                    >
                      <p
                        className={`fx-ac ${
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
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
