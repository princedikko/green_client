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
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";

import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
export default function AssetTrackingDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="sectiongenDest fx-cl fx-ac">
      <Header />

      <div className="genDestHero fx fx-ac fx-jc space4">
        <div className="fx-cl space2">
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
                  onClick={() => navigate("/solutions")}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  Solutions <KeyboardArrowRightIcon fontSize="small" />
                </span>

                <span> Asset Tracking</span>
              </span>
            </span>

            <strong className="fs9">
              Advanced Asset Tracking for Modern Businesses
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name helps businesses monitor, organize, and track
              high-value assets including tools, equipment, machinery, vehicles,
              and IT resources across multiple locations in real time.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <Inventory2OutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Complete Asset Visibility</h4>

                  <p>
                    Track every asset movement, assignment, and operational
                    status from one centralized platform.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCodeScannerOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Barcode & QR Asset Tracking</h4>

                  <p>
                    Scan assets instantly using smartphones, tablets, or
                    dedicated barcode scanners.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PhotoCameraOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Visual Asset Monitoring</h4>

                  <p>
                    Add high-quality photos to monitor asset condition,
                    maintenance status, and operational wear over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Explore Asset Features</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Asset tracking management dashboard" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <WarehouseOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Multi-Location Asset Tracking</h4>

          <ul className="fx-cl space1">
            <li>
              Monitor assets across warehouses, offices, job sites, and field
              locations.
            </li>

            <li>
              Track asset transfers between departments and operational teams.
            </li>

            <li>
              Organize assets by category, location, type, or operational usage.
            </li>

            <li>Maintain real-time visibility of all company assets.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <SyncOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Real-Time Asset Updates</h4>

          <ul className="fx-cl space1">
            <li>
              Instantly update asset assignments, status, and operational usage.
            </li>

            <li>
              Prevent misplaced or untracked assets with synchronized systems.
            </li>

            <li>
              Monitor check-ins, check-outs, and asset activity automatically.
            </li>

            <li>
              Improve operational accountability across teams and departments.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <SecurityOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Secure Asset Control</h4>

          <ul className="fx-cl space1">
            <li>Reduce asset loss and improve operational security.</li>

            <li>Track asset ownership, assignments, and usage history.</li>

            <li>Control employee access with role-based permissions.</li>

            <li>
              Maintain detailed records for audits and operational compliance.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">SMART ASSET MANAGEMENT</span>

        <h2 className="fs7 fw500">
          Manage valuable business assets with confidence and precision.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name delivers a modern asset tracking platform that helps
            businesses monitor valuable operational resources efficiently from
            anywhere.
          </span>

          <span>
            Track tools, machinery, IT equipment, office assets, vehicles,
            devices, and operational resources using barcode technology,
            real-time synchronization, and cloud-based inventory systems.
          </span>

          <span>
            Businesses can reduce asset loss, improve accountability, streamline
            maintenance workflows, and maintain accurate operational records
            across departments and locations.
          </span>

          <span>
            Whether your organization operates in construction, logistics,
            manufacturing, healthcare, education, field services, or corporate
            environments, Company Name helps simplify asset management at scale.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Business asset tracking dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Real-Time Asset Visibility</span>
              </span>

              <strong>Monitor assets from anywhere instantly</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <VisibilityOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Live Asset Monitoring</h4>

                  <p>
                    View operational asset status, location, and activity in
                    real time.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CompareArrowsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Asset Movement Tracking</h4>

                  <p>
                    Track assets moving between locations, projects, and teams
                    automatically.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CloudDoneOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Cloud Synchronization</h4>

                  <p>
                    Keep all asset records updated across mobile and desktop
                    systems.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Asset Condition Monitoring</span>
              </span>

              <strong>Track maintenance and equipment condition</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PhotoLibraryOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Visual Asset Records</h4>

                  <p>
                    Attach photos to monitor equipment condition and operational
                    changes over time.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <BuildOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Maintenance Management</h4>

                  <p>
                    Track repairs, maintenance schedules, and service history
                    efficiently.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <WarningAmberOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Prevent Operational Downtime</h4>

                  <p>
                    Identify damaged or failing equipment before it affects
                    productivity.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Equipment maintenance tracking" />
          </figure>
        </div>

        <div className="cardContLarge pd3 g g3 space3">
          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <PrecisionManufacturingOutlinedIcon
                  style={{ fontSize: "5.3rem" }}
                />
              </span>
            </span>

            <h4 className="fs5">Equipment Tracking</h4>

            <p>
              Monitor machinery, operational equipment, appliances, and
              production resources across business operations.
            </p>

            <button>Explore Equipment Tracking</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <HandymanOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Tool Tracking</h4>

            <p>
              Track tools, operational kits, maintenance equipment, and
              field-service assets with ease.
            </p>

            <button>Explore Tool Tracking</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <ComputerOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">IT Asset Tracking</h4>

            <p>
              Manage computers, servers, networking hardware, devices, and
              business technology infrastructure efficiently.
            </p>

            <button>Explore IT Asset Tracking</button>
          </figure>
        </div>

        <div className="cardContLarge pd3 g g2 space3">
          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <PhoneIphoneOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Mobile Asset Tracking</h4>

            <p>
              Access and manage business assets remotely using smartphones,
              tablets, and cloud-connected systems.
            </p>

            <button>Learn About Mobile Tracking</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <QrCode2OutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Barcode & QR Asset Management</h4>

            <p>
              Simplify asset check-ins, transfers, audits, and operational
              tracking using integrated barcode systems.
            </p>

            <button>Learn About Barcoding</button>
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
