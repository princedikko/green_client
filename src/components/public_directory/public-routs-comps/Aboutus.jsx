import React from "react";
import "./aboutus.css";
import AboutusImg from "./publicImages/asdfdf.png";

export default function Aboutus() {
  return (
    <div className="about-us-container">
      <header className="about-us-header fx-cl space1">
        <h1>About Manga College of Nursing Sciences</h1>
        <p>Empowering Future Healthcare Leaders</p>
      </header>
      <section className="about-us-introduction">
        <div className="about-us-text">
          <h2>Our Mission</h2>
          <p>
            At Manga College of Nursing Sciences, our mission is to deliver
            exceptional nursing education and training through innovative
            teaching, comprehensive clinical experiences, and a commitment to
            excellence. We aim to produce compassionate and skilled nursing
            professionals who will lead and transform healthcare globally.
          </p>
          <p>
            Our mission is to deliver exceptional nursing education and training
            through innovative teaching, comprehensive clinical experiences, and
            a commitment to excellence. We aim to produce compassionate and
            skilled nursing professionals who will lead and transform healthcare
            globally.
          </p>
        </div>
        <div className="about-us-image">
          <img src={AboutusImg} alt="Nursing students in action" />
        </div>
      </section>
      <section className="about-us-values fx-cl space3">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-item fx-cl space1">
            <h3>Compassion</h3>
            <p>
              We believe in the power of empathy and kindness in delivering
              quality patient care.
            </p>
          </div>
          <div className="value-item fx-cl space1">
            <h3>Excellence</h3>
            <p>
              We strive for the highest standards in education, clinical
              practice, and research.
            </p>
          </div>
          <div className="value-item fx-cl space1">
            <h3>Integrity</h3>
            <p>
              We uphold honesty and transparency in all our endeavors and
              interactions.
            </p>
          </div>
          <div className="value-item fx-cl space1">
            <h3>Innovation</h3>
            <p>
              We embrace new ideas and approaches to advance nursing practice
              and education.
            </p>
          </div>
        </div>
      </section>
      <section className="about-us-history fx-cl space3">
        <h2>Our History</h2>
        <p>
          {/* Founded in 2024,  */}
          Manga College of Nursing Sciences has grown into a leading center for
          nursing education. Our commitment to nurturing talent and advancing
          healthcare practices has made us a beacon of excellence in the field
          of nursing. With state-of-the-art facilities and a dedicated faculty,
          we continue to shape the future of nursing.
        </p>
      </section>
      <footer className="about-us-footer">
        <p>
          Contact us:{" "}
          <a href="mailto:info@mangacons.edu.ng">info@mangacons.edu.ng</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Manga College of Nursing Sciences
        </p>
      </footer>
    </div>
  );
}
