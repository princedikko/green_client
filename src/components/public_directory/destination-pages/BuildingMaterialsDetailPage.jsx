import "./GeneralDestination.css";
import Header from "../home-page/home-comps/Header";
import Footer from "../home-page/home-comps/Footer";
import { useNavigate } from "react-router-dom";

// images import
import HeroOne from "./destination-images/hero1.png";
import TestImg1 from "../home-page/home-comps/homepage_images/first.png";
import TestImg2 from "../home-page/home-comps/homepage_images/phoneReciepts.png";
import TestImg3 from "../home-page/home-comps/homepage_images/gener.png";

import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";

import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

export default function BuildingMaterialsDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="sectiongenDest fx-cl fx-ac">
      <Header />

      {/* HERO SECTION */}
      <div className="genDestHero fx fx-ac fx-jc space4">
        <div className="fx-cl space2">
          {/* BREADCRUMB */}
          <h3 className="fx-cl space1">
            <span className="fx-ac spacem">
              <InfoIcon />

              <span>
                <span
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                >
                  Home <KeyboardArrowRightIcon fontSize="small" />
                </span>

                <span
                  onClick={() => navigate("/solutions/industries")}
                  style={{ cursor: "pointer" }}
                >
                  Industries <KeyboardArrowRightIcon fontSize="small" />
                </span>

                <span>Construction</span>
              </span>
            </span>

            <strong className="fs9">
              Smarter Construction & Building Materials Inventory Management
            </strong>
          </h3>

          {/* DESCRIPTION */}
          <div className="genDestHeroDisc fx-cl space2 fs5">
            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <Inventory2OutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Unified Material Tracking</h4>
                  <p>
                    Monitor every construction material, tool, and equipment
                    across multiple job sites with real-time accuracy and full
                    visibility.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <WarehouseOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Multi-Site Inventory Control</h4>
                  <p>
                    Keep every warehouse and construction site synchronized so
                    your team always knows what is available and where it is
                    located.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <TrendingDownOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Reduce Material Loss</h4>
                  <p>
                    Prevent wastage, misplacement, and over-ordering by
                    maintaining accurate inventory tracking across all
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>View Pricing</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="construction inventory" />
        </figure>
      </div>

      {/* FEATURE CARDS */}
      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <ConstructionOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Job Site Visibility</h4>

          <ul className="fx-cl space1">
            <li>
              Track materials allocated to each construction project in real
              time.
            </li>
            <li>Know exactly what is available at every active site.</li>
            <li>Reduce delays caused by missing or unaccounted materials.</li>
            <li>
              Improve coordination between site managers and procurement teams.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <PrecisionManufacturingOutlinedIcon
                style={{ fontSize: "5.3rem" }}
              />
            </span>
          </span>

          <h4 className="fs5">Equipment Accountability</h4>

          <ul className="fx-cl space1">
            <li>
              Track expensive tools and machinery across multiple locations.
            </li>
            <li>
              Assign responsibility for assets to specific teams or workers.
            </li>
            <li>Reduce theft, loss, and misplacement of equipment.</li>
            <li>Maintain a full history of usage and movement.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <BarChartOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Cost & Material Optimization</h4>

          <ul className="fx-cl space1">
            <li>Track material consumption to avoid unnecessary spending.</li>
            <li>Improve project budgeting with real-time inventory data.</li>
            <li>Reduce overstocking and material wastage.</li>
            <li>Increase profitability across all construction projects.</li>
          </ul>
        </figure>
      </div>

      {/* PARAGRAPH SECTION */}
      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">CONSTRUCTION INVENTORY SYSTEM</span>

        <h2 className="fs7 fw500">
          Complete control over construction materials and site operations.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            With company name, construction businesses can manage materials,
            tools, and equipment across multiple sites without confusion or
            manual tracking. Every item movement is recorded instantly, ensuring
            accurate visibility at all times.
          </span>

          <span>
            Project managers can monitor inventory levels in real time, reducing
            downtime caused by missing materials and improving overall project
            efficiency.
          </span>

          <span>
            Centralized tracking ensures that procurement, warehouse, and site
            teams all operate with the same updated information, reducing
            communication gaps and costly mistakes.
          </span>

          <span>
            The system is designed to support fast-paced construction
            environments where accuracy, speed, and coordination are essential
            for project success.
          </span>
        </p>
      </div>

      {/* Z-PATTERN SECTION */}
      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg2} alt="construction tracking" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Real-Time Site Tracking</span>
              </span>

              <strong>Monitor every material movement instantly</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <GpsFixedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Live Location Updates</h4>
                  <p>
                    Track where materials and tools are at any moment across all
                    sites.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <SyncOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Instant Synchronization</h4>
                  <p>
                    All updates reflect immediately across devices and
                    dashboards.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <VerifiedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Accurate Reporting</h4>
                  <p>
                    Ensure reliable inventory data for decision-making and
                    planning.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
