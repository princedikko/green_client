import "./homecomp5.css";
import Imgs from "./homepage_images/Udupss_girl.png";
import N1 from "./homepage_images/test/n1.png";
export default function HomeComp5() {
  return (
    <section className="sectionHomeComp5">
      <div className="HomeComp5Cont">
        <div className="HomeComp5Left fx-ac">
          <div className="fx-cl space2">
            <h3>Confidence that builds a brigther future.</h3>
            <p>Empowering kids with confidence to create a successful future</p>
            <button>Book Now</button>
          </div>
          <div>
            <img src={Imgs} alt="here" />
          </div>
        </div>
        <div className="HomeComp5Right">
          <div className="fx-cl space2">
            <h3>Helping kids to shoot thier dreams.</h3>
            <p>
              Inspiring kids to aim <strong>achieve</strong>
            </p>
            <button>Learn More!</button>
          </div>
          <div>
            <img src={N1} alt="here" />
          </div>
        </div>
      </div>
    </section>
  );
}
