export default function ExaminationLogs({ setOpenModal }) {
  return (
    <div
      className="fx-ac"
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: "#fff",
        padding: "1.2rem",
        borderRadius: "1.2rem",
      }}
    >
      <strong>English</strong> answered: 48, remaining: 52 Your have answer a
      total of 236 queston out of 400 questions
    </div>
  );
}
