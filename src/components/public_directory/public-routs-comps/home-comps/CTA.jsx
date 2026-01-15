import React from "react";
import Logo from "../../homepage/home_pictures/logos/Manga_Cons _Logo.png";
import { useNavigate } from "react-router-dom";
const CTA = () => {
  const redirect = useNavigate();
  return (
    <section className="section-cta">
      <div className="home-cta-container rwdG2">
        <div className="home-cta-rightDiv">
          <span className="cta-head1">Get it done faster</span>
          <h1 className="home-cta-heading">
            Join the Future of Nursing Today!
          </h1>
          <p className="home-cta-paragraph">
            Start your journey toward a rewarding career in healthcare. The
            application for the Manga College of Nursing Sciences is now open!
          </p>
          <p className="home-cta-paragraph"></p>
          <div className="fx-ac space1">
            <button
              className="home-cta-button"
              onClick={() => redirect("/registrations")}
            >
              Apply Now
            </button>
            <button
              className="home-cta-button ctab"
              onClick={() => redirect("/mangacons_requirement")}
            >
              Application requirements
            </button>
          </div>
        </div>
        <div className="home-cta-leftDiv rwdHide">
          <img
            src={Logo}
            alt="City Image"
            className="home-cta-image"
            style={{
              borderRadius: "1.2rem",
              // transform:"scale(1.5)"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
