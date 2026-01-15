import "./gallerystaff.css";

export default function GalleryStaff() {
  return (
    <section className="section-gallery fx-cl">
      <header
        className="fx-cl"
        style={{ textAlign: "center", fontSize: "3.4rem", padding: "3.4rem" }}
      >
        <span style={{ fontweight: "600", fontSize: "2.4rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <h2>
          Lorem, ipsum dolor. <span style={{ color: "#2f63b2" }}>Udups</span>
        </h2>
      </header>
      <div className="gallery-cont fx-ac fx-jc space4 rwdG4">
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          <h3>UDUPS STAFF NAME</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eum
          </p>
        </figure>
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          <h3>UDUPS STAFF NAME</h3>
          <p> Engage in extracurricular activities,.</p>
        </figure>
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          <h3>UDUPS STAFF NAME</h3>
          <p> architecto exercitationem molestiae quibusdam.</p>
        </figure>
        <figure className="gallery-card">
          {/* <span>Student Life</span> */}
          {/* <h3>UDUPS STAFF NAME</h3> */}
          <p>Maxime eum architecto exercitationem molestiae quibusdam.</p>
        </figure>
      </div>
    </section>
  );
}
