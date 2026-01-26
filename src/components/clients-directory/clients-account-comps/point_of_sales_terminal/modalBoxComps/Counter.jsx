import { useEffect, useState } from "react";

export default function Counter({ durations, setOpenModal, setOnTimeChange }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const examStart = new Date("2025-11-11T00:48:00");
      const examEnd = new Date("2025-11-11T02:48:00");
      let diff;

      if (now < examStart) diff = examStart - now;
      else if (now <= examEnd) diff = examEnd - now;
      else diff = 0;

      const formatted = formatTime(diff);
      setTimeLeft(formatted);
      setOnTimeChange && setOnTimeChange(formatted); // ✅ send value to parent
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h3>Countdown:</h3>
      <h2>{timeLeft}</h2>
    </div>
  );
}

export function CounterMini({ openCounter, setOnTimeChange }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const examStart = new Date("2025-11-11T00:48:00");
      const examEnd = new Date("2025-11-11T02:48:00");
      let diff;

      if (now < examStart) diff = examStart - now;
      else if (now <= examEnd) diff = examEnd - now;
      else diff = 0;

      const formatted = formatTime(diff);
      setTimeLeft(formatted);
      setOnTimeChange && setOnTimeChange(formatted); // ✅ send value to parent
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes}:${seconds}s`;
  };

  return (
    <span className="fx-ac spacem">
      <figure className="counterIcon">&nbsp;</figure>
      <button onClick={() => openCounter()} className="fx-ac space1">
        <div className="fx-ac ">
          <strong>Items: </strong> 7
        </div>

        <div className="fx-ac">
          <strong>Total: </strong> N98,250.00
        </div>
      </button>
    </span>
  );
}
