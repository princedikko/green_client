import "./homecomp7.css";
import Imgs from "./homepage_images/hmpx.png";

import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApprovalIcon from "@mui/icons-material/Approval";
import InfoIcon from "@mui/icons-material/Info";
export default function HomeComp7() {
  return (
    <section className="sectionHomeComp7">
      <div className="homeComp7Cont fx-ac">
        <figure className="homeComp7Left fx-ac fx-jc">
          <img src={Imgs} alt=" " />
        </figure>
        <div className="homeComp7Right fx-cl space2">
          <h3 className=" fx-cl spacem">
            <span className="fx-ac space1">
              <InfoIcon />
              <span>Superiority</span>
            </span>
            <strong>Benefit of Working with Maruncy</strong>
          </h3>

          <div className="homeComp7RightMain fx-cl space2">
            <div className="fx-cl space3">
              <div className="fx-ac space2">
                <span className="homeCmp7Subicon">
                  <SchoolIcon />
                </span>
                <div className="fx-cl">
                  <h4>Page Rankings</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente, magnam.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="homeCmp7Subicon">
                  <LibraryBooksIcon />
                </span>
                <div className="fx-cl">
                  <h4>Site Optimisation</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente, magnam.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="homeCmp7Subicon">
                  <ApprovalIcon />
                </span>
                <div className="fx-cl">
                  <h4>Reporting & Analysis</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente, magnam.
                  </p>
                </div>
              </div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
