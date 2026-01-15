export default function Gallery() {
  return (
    <section className="section-gallery fx-cl">
      <header
        className="fx-cl"
        style={{ textAlign: "center", fontSize: "3.4rem", padding: "3.4rem" }}
      >
        <span
          style={{ fontweight: "600", color: " #4CAF50", fontSize: "2.4rem" }}
        >
          Enhance your educational experience
        </span>
        <h2>
          From the Classroom{" "}
          <span style={{ color: "#2f63b2" }}>to the Lab</span>
        </h2>
      </header>
      <div className="gallery-cont fx-ac fx-jc space4 rwdG4">
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          <h3>MANGACONS</h3>
          <p>Student life is rich with opportunities.</p>
        </figure>
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          <h3>MANGACONS</h3>
          <p> Engage in extracurricular activities,.</p>
        </figure>
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          <h3>MANGACONS</h3>
          <p>Join student organizations</p>
        </figure>
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          {/* <h3>MANGACONS</h3> */}
          <p>
            And participate in events that enhance your educational experience
            and personal growth.
          </p>
        </figure>
      </div>
    </section>
  );
}
