export default function Appeals({ setOpenModal }) {
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
      APPEALS
    </div>
  );
}
