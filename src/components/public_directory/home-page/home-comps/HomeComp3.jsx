import "./homecomp3.css";

import Imag1 from "./homepage_images/test/adsf1.png";
import Imag2 from "./homepage_images/test/adsf2.png";
import Imag3 from "./homepage_images/test/adsf3.png";
export default function HomeComp3() {
  return (
    <section className="sectionHomeComp3">
      <div className="HomeComp3Cont fx-cl fx-ac space3">
        <h2>
          Why Choose
          <br />
          <em style={{ fontFamily: "serif" }}>UDUPS</em>
        </h2>
        <p>
          Our students are chosen to study in our children's school because of
          the high quality of eduction
        </p>
        <figure className="HomeComp3CardsCont fx-ac fx-jc space5">
          <div className="HomeComp3Card fx-cl  space1">
            <span>
              <img src={Imag3} alt="my image" />
            </span>
            <h3>Full Development</h3>
            <p>
              we berore that learingn should bontribute to the full development
              of each child.
            </p>
          </div>
          <div className="HomeComp3Card fx-cl space1">
            <span>
              <img src={Imag1} alt="my image" />
            </span>
            <h3>Personal Touch</h3>
            <p>
              We understand that every child is unique and has their own needs
              and talents
            </p>
          </div>
          <div className="HomeComp3Card fx-cl space1">
            <span>
              <img src={Imag2} alt="my image" />
            </span>
            <h3>Love Children</h3>
            <p>
              Our teachers and staffs are always ready to give children warmth
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
