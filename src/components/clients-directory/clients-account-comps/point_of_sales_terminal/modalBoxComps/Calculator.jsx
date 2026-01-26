import { useState } from "react";
import "./calculator.css";
export default function Calculator({ setOpenModal }) {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "C",
    "/",
    "*",
    "←",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "0",
    ".",
    "=",
  ];

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div
      className="calculator-calcu"
      onClick={(e) => e.stopPropagation()}
      draggable
    >
      <div className="display-calcu">{input || "0"}</div>
      <div className="buttons-calcu">
        {buttons.map((btn) =>
          btn === "←" ? (
            <button
              key={btn}
              onClick={handleBackspace}
              className="btn-calcu operator-calcu"
            >
              {btn}
            </button>
          ) : (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`btn-calcu ${
                ["C", "/", "*", "-", "+", "="].includes(btn)
                  ? "operator-calcu"
                  : ""
              }`}
            >
              {btn}
            </button>
          )
        )}
      </div>
    </div>
  );
}
