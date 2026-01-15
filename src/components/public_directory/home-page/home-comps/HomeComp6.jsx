import "./homecomp6.css";

import F1 from "./homepage_images/test/f1.png";
import F2 from "./homepage_images/test/f2.png";
import F3 from "./homepage_images/test/f3.png";
import F4 from "./homepage_images/test/f4.png";
import F5 from "./homepage_images/test/f5.png";

export default function HomeComp6() {
  return (
    <section className="sectionHomeComp6">
      <div className="HomeComp6Container fx-cl space3">
        <div className="HomeComp6top fx-ac space2">
          <figure>
            <img src={F1} alt=" " />
          </figure>
          <p>
            Usmanu Danfodiyo University Primary School Sokoto provides a
            nurturing environment where youn minds can flourish and explore
            thier artistics talents
          </p>
        </div>
        <div className="HomeComp6Bottom">
          <div className="HomeComp6CardConts fx-jc space3">
            <figure className="fx-cl space1">
              <span>3-6 years</span>
              <h4>
                Creative <br />
                <em>Sculpting</em>
              </h4>
              <button>❤️</button>
            </figure>
            <figure className="fx-cl space1">
              <span>3-6 years</span>
              <img src={F2} alt="to fa" />
              <h4>
                Creative <br />
                <em>Visual Arts</em>
              </h4>
              <button>😘</button>
            </figure>
            <figure className="fx-cl space1">
              <span>6 years</span>
              <h4>
                Creative <br />
                <em>Writing</em>
              </h4>
              <button>🙌</button>
            </figure>

            <div className="floatingBtnsCont">
              <div className="floatingBtns">
                <span>🎀</span>
                <span>🎈</span>
                <span>🧸</span>
                <button className="btnHomeComp6_one">#Drawing</button>
                <button className="btnHomeComp6_two">#Writing</button>
                <button className="btnHomeComp6_three">#Artwork</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
