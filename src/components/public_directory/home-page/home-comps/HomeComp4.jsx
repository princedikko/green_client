import "./homecomp4.css";
import B1 from "./homepage_images/test/b1.png";
import B2 from "./homepage_images/test/b2.png";
import B3 from "./homepage_images/test/b3.png";
import B4 from "./homepage_images/test/b4.png";
import B5 from "./homepage_images/test/b5.png";
import B6 from "./homepage_images/test/b6.png";
export default function HomeComp4() {
  return (
    <section className="sectionHomeComp4">
      <div className="HomeComp4Cont fx-cl fx-ac fx-jc space2">
        <span>We focus on one impactful lesson at a time</span>
        <h2>
          Shaping the <span style={{ color: "#EC674C" }}>Future</span> of kids
        </h2>
        <div className="HomeComp4CardsCont fx-ac fx-jc space4">
          <div className="right HomeComp4CardsContPos">
            <img src={B5} alt="" />
          </div>
          <div className="left   HomeComp4CardsContPos">
            <img src={B6} alt="" />
          </div>
          <figure className="homeComp4Card fx-cl fx-ac spacem">
            <figure>
              <img src={B1} alt="img" />
            </figure>
            <p>Letter Identification</p>
            <span>Class - Pre School</span>
          </figure>
          <figure className="homeComp4Card fx-cl fx-ac spacem">
            <figure>
              <img src={B2} alt="img" />
            </figure>
            <p>Genera Knowledge</p>
            <span>Fourth Grade</span>
          </figure>
          <figure className="homeComp4Card fx-cl fx-ac spacem">
            <figure>
              <img src={B3} alt="img" />
            </figure>
            <p>Geography Quiz</p>
            <span>First Grade</span>
          </figure>
          <figure className="homeComp4Card fx-cl fx-ac spacem">
            <figure>
              <img src={B4} alt="img" />
            </figure>
            <p>Visual Arts Training</p>
            <span>Sketching class</span>
          </figure>
        </div>
      </div>
    </section>
  );
}
