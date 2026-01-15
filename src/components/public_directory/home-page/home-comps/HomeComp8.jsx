import "./homecomp8.css";
import Imgs from "./homepage_images/test/g1.png";

import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApprovalIcon from "@mui/icons-material/Approval";
import InfoIcon from "@mui/icons-material/Info";
export default function HomeComp8() {
  return (
    <section className="sectionHomeComp8">
      <div className="homeComp8Cont fx-ac">
        <div className="homeComp8Left fx-cl space2">
          <h3 className=" fx-cl spacem">
            <span className="fx-ac space1">
              <InfoIcon />
              <span>Superiority</span>
            </span>
            <strong>Benefit of Working with Maruncy</strong>
          </h3>

          <div className="homeComp8LeftMain fx-cl space2">
            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="homeCmp8Subicon">
                  <SchoolIcon fontSize="large" />
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
                <span className="homeCmp8Subicon">
                  <LibraryBooksIcon fontSize="large" />
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
                <span className="homeCmp8Subicon">
                  <ApprovalIcon fontSize="large" />
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
        <figure className="homeComp8Left fx-ac fx-jc">
          <img src={Imgs} alt=" " />
        </figure>
      </div>
    </section>
  );
}
