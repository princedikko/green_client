import { useNavigate } from "react-router-dom";

export default function Admrequirement() {
  const redirect = useNavigate();
  return (
    <section className="section-adm-requirement">
      <div className="adm-req-cont fx-cl space3">
        <h6>Manga-cons Admission</h6>
        <h4>Ready to start your journey with us?</h4>
        <p>
          Explore our admission requirements, application process, and financial
          aid options. we’re here to help you every step of the way.
        </p>
        <button
          className="adm-btn"
          onClick={() => redirect("/mangacons_requirement")}
        >
          Explore Requirements
        </button>
      </div>
    </section>
  );
}
