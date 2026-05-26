import "./GeneralDestination.css";
import Header from "../home-page/home-comps/Header";
import Footer from "../home-page/home-comps/Footer";
import { useNavigate } from "react-router-dom";

// images import
import HeroOne from "./destination-images/hero1.png";
import TestImg1 from "../home-page/home-comps/homepage_images/first.png";
import TestImg2 from "../home-page/home-comps/homepage_images/phoneReciepts.png";
import TestImg3 from "../home-page/home-comps/homepage_images/gener.png";

// icons import
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";

import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function ElectronicsDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="sectiongenDest fx-cl fx-ac">
      <Header />

      {/* HERO */}
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

                <span>Electrical</span>
              </span>
            </span>

            <strong className="fs9">
              Advanced Electrical & Electronics Inventory Management System
            </strong>
          </h3>

          {/* HERO DESCRIPTION */}
          <div className="genDestHeroDisc fx-cl space2 fs5">
            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <ElectricBoltOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Electrical Asset Intelligence</h4>
                  <p>
                    Track all electrical tools, cables, devices, and components
                    across job sites, warehouses, and service vans in real time
                    with precision control.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <EngineeringOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Field & Job Site Coordination</h4>
                  <p>
                    Coordinate electrical projects by assigning tools,
                    materials, and equipment directly to technicians and active
                    job locations.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <InsightsOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Project Cost Optimization</h4>
                  <p>
                    Reduce material waste and improve job profitability using
                    real-time usage tracking and automated cost analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Explore Demo</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="electrical inventory" />
        </figure>
      </div>

      {/* CORE OPERATIONS GRID */}
      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fx-cl space2">
          <Inventory2OutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Live Electrical Inventory</h4>
          <ul className="fx-cl space1">
            <li>
              Track wires, cables, switches, panels, and tools in real time
            </li>
            <li>
              Know exactly what is available in vans, stores, and job sites
            </li>
            <li>Prevent missing equipment during active electrical jobs</li>
            <li>Maintain accurate multi-location stock visibility</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <ConstructionOutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Job Assignment System</h4>
          <ul className="fx-cl space1">
            <li>Assign tools and materials to technicians instantly</li>
            <li>Track which electrician is using which equipment</li>
            <li>Prevent duplication and tool conflicts on job sites</li>
            <li>Improve workforce accountability</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <PrecisionManufacturingOutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Tool Lifecycle Tracking</h4>
          <ul className="fx-cl space1">
            <li>Monitor tool usage, maintenance, and repair cycles</li>
            <li>Track equipment condition (new, in-use, faulty)</li>
            <li>Reduce breakdown risk with proactive alerts</li>
            <li>Extend equipment lifespan through usage insights</li>
          </ul>
        </figure>
      </div>

      {/* OPERATIONS FLOW */}
      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">FIELD OPERATIONS CONTROL SYSTEM</span>

        <h2 className="fs7 fw500">
          Full visibility from warehouse to live electrical job sites.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            With company name, electrical companies gain full operational
            visibility across all assets, whether tools are in transit, in use
            on-site, or stored in warehouses.
          </span>

          <span>
            Every movement of electrical equipment is tracked automatically,
            ensuring technicians always have the right tools for the job without
            delays or miscommunication.
          </span>

          <span>
            This reduces downtime, improves job completion speed, and eliminates
            costly mistakes caused by missing or unaccounted tools during
            critical electrical installations.
          </span>

          <span>
            The system is designed for contractors, engineers, and field teams
            who require precision, speed, and reliability in demanding
            electrical environments.
          </span>
        </p>
      </div>

      {/* Z PATTERN - FIELD CONTROL */}
      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg1} alt="field tracking" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Field Equipment Tracking</span>
              </span>

              <strong>Monitor tools across all job locations</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <GpsFixedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Live Location Tracking</h4>
                  <p>Know exactly where every tool is deployed.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <SyncOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Instant Sync Updates</h4>
                  <p>
                    All inventory updates reflect across systems immediately.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <VerifiedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Verified Usage Logs</h4>
                  <p>Track who used what, when, and where.</p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        {/* MAINTENANCE SYSTEM */}
        <div className="zPatternGenDestComp g g2 space2">
          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Maintenance Intelligence</span>
              </span>

              <strong>Keep equipment fully operational at all times</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <BuildOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Preventive Maintenance</h4>
                  <p>Schedule repairs before equipment failure occurs.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <ReportProblemOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Fault Detection</h4>
                  <p>Automatically flag faulty or underperforming tools.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <CheckCircleOutlineOutlinedIcon
                  style={{ fontSize: "3.2rem" }}
                />
                <div className="fx-cl">
                  <h4>Job-Ready Assurance</h4>
                  <p>Ensure only functional equipment is assigned to jobs.</p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="maintenance system" />
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
