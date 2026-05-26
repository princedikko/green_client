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

import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";

import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

import MedicationLiquidOutlinedIcon from "@mui/icons-material/MedicationLiquidOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";

export default function PharmacyChemistDetailPage() {
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
                  onClick={() => navigate("/industries")}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  Industries <KeyboardArrowRightIcon fontSize="small" />
                </span>

                <span> Pharmacy & Chemist</span>
              </span>
            </span>

            <strong className="fs9">
              Smart Pharmacy & Medical Inventory Management
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name helps pharmacies, chemists, clinics, hospitals, and
              healthcare facilities manage medicines, medical supplies, and
              healthcare equipment efficiently across all operational locations.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <MedicationOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Medical Inventory Control</h4>

                  <p>
                    Track medicines, prescriptions, medical supplies, vaccines,
                    and healthcare inventory in real time.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <NotificationsActiveOutlinedIcon
                    style={{ fontSize: "3.4rem" }}
                  />
                </span>

                <div className="fx-cl space1">
                  <h4>Expiration & Low Stock Alerts</h4>

                  <p>
                    Receive instant notifications before medications expire or
                    critical inventory runs low.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCodeScannerOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Barcode & QR Code Management</h4>

                  <p>
                    Speed up pharmacy operations with barcode scanning,
                    inventory updates, and accurate medication tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Explore Medical Features</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Pharmacy inventory management system" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <LocalHospitalOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Healthcare Inventory Visibility</h4>

          <ul className="fx-cl space1">
            <li>
              Monitor medical inventory across pharmacies, clinics, wards, and
              healthcare facilities.
            </li>

            <li>
              Track medicine quantities, storage locations, and operational
              usage instantly.
            </li>

            <li>
              Organize inventory using categories, shelves, departments, and
              storage units.
            </li>

            <li>
              Reduce missing supplies and inventory confusion across teams.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <AccessTimeOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Expiry & Reorder Management</h4>

          <ul className="fx-cl space1">
            <li>Monitor medicine expiration dates and avoid product waste.</li>

            <li>Receive low-stock alerts before essential supplies run out.</li>

            <li>Improve purchasing accuracy and inventory forecasting.</li>

            <li>
              Maintain continuous availability of critical healthcare supplies.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <DevicesOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Mobile & Cloud-Based Access</h4>

          <ul className="fx-cl space1">
            <li>
              Access medical inventory securely from smartphones, tablets, and
              desktop systems.
            </li>

            <li>
              Synchronize inventory automatically across operational locations.
            </li>

            <li>
              Manage inventory remotely in real time using cloud technology.
            </li>

            <li>
              Improve collaboration between healthcare staff and administrators.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">HEALTHCARE INVENTORY MANAGEMENT</span>

        <h2 className="fs7 fw500">
          Keep medical inventory organized, available, and operationally ready.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name provides healthcare organizations with a powerful
            pharmacy and medical inventory management platform designed to
            simplify inventory control, reduce shortages, and improve
            operational efficiency.
          </span>

          <span>
            Track medicines, vaccines, syringes, PPE, healthcare consumables,
            medical equipment, laboratory supplies, and pharmaceutical inventory
            across multiple departments and locations.
          </span>

          <span>
            Automated alerts, barcode systems, expiration monitoring, and
            real-time inventory synchronization help medical teams reduce manual
            errors and improve patient care operations.
          </span>

          <span>
            Whether you operate a pharmacy, hospital, clinic, laboratory,
            chemist store, or healthcare organization, Company Name helps keep
            your healthcare inventory accurate and accessible at all times.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Medical inventory dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Real-Time Medical Inventory</span>
              </span>

              <strong>Track healthcare supplies instantly</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <VisibilityOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Live Inventory Monitoring</h4>

                  <p>
                    Monitor medicine stock levels and healthcare inventory
                    availability in real time.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CompareArrowsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Department Inventory Transfers</h4>

                  <p>
                    Track inventory movement between pharmacies, wards, labs,
                    and medical storage rooms.
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
                    Keep inventory updated automatically across all devices and
                    operational locations.
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
                <span>Smart Healthcare Automation</span>
              </span>

              <strong>Reduce shortages and medication waste</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <WarningAmberOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Low Stock Notifications</h4>

                  <p>
                    Receive alerts before critical medications and supplies run
                    out.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <EventBusyOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Expiration Monitoring</h4>

                  <p>
                    Track expiration dates and reduce losses caused by expired
                    medical inventory.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <ShoppingCartOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Smarter Re-Ordering</h4>

                  <p>
                    Improve purchasing efficiency using accurate inventory
                    forecasting and stock analysis.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Healthcare stock monitoring system" />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt="Pharmacy barcode tracking system" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Digital Pharmacy Operations</span>
              </span>

              <strong>Improve operational speed and inventory accuracy</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCode2OutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Barcode & QR Code Scanning</h4>

                  <p>
                    Speed up medicine tracking, stock counting, and pharmacy
                    operations efficiently.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <PhotoCameraOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Visual Inventory Records</h4>

                  <p>
                    Add photos to identify medications, equipment, and
                    healthcare inventory quickly.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <InsightsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Healthcare Reporting & Analytics</h4>

                  <p>
                    Access inventory reports, usage trends, and operational
                    insights from one dashboard.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="cardContLarge pd3 g g3 space3">
          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <MedicationLiquidOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Medicine Inventory Tracking</h4>

            <p>
              Track tablets, syrups, injections, vaccines, and pharmaceutical
              products across healthcare operations.
            </p>

            <button>Explore Medicine Tracking</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <BiotechOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Laboratory & Medical Supplies</h4>

            <p>
              Manage laboratory consumables, testing kits, PPE, syringes, and
              operational healthcare materials efficiently.
            </p>

            <button>Explore Medical Supplies</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <MonitorHeartOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Medical Equipment Tracking</h4>

            <p>
              Track healthcare equipment, diagnostic devices, operational tools,
              and medical machinery across facilities.
            </p>

            <button>Explore Equipment Tracking</button>
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
