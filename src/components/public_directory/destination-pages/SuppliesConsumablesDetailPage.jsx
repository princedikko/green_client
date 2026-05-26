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

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";

import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";

import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";

export default function SuppliesConsumablesDetailPage() {
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

                <span> Supplies & Consumables</span>
              </span>
            </span>

            <strong className="fs9">
              Smarter Supplies & Consumables Tracking
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name helps businesses track consumables, operational
              supplies, raw materials, PPE, and inventory stock in real time
              across warehouses, projects, and business locations.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <Inventory2OutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Real-Time Supply Monitoring</h4>

                  <p>
                    Monitor supply quantities, stock movement, and inventory
                    consumption instantly across all locations.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <WarningAmberOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Automated Low Stock Alerts</h4>

                  <p>
                    Prevent supply shortages with intelligent inventory alerts
                    and automated re-order notifications.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCodeScannerOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Barcode & QR Code Tracking</h4>

                  <p>
                    Speed up inventory counts and supply tracking using built-in
                    barcode and QR code scanning tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Explore Solutions</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Supplies and consumables tracking system" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <WarehouseOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Multi-Location Supply Tracking</h4>

          <ul className="fx-cl space1">
            <li>
              Manage consumables across warehouses, stores, and operational
              facilities.
            </li>

            <li>
              Monitor supply movement and inventory availability in real time.
            </li>

            <li>
              Organize supplies using categories, folders, and custom tags.
            </li>

            <li>
              Maintain accurate inventory visibility across business operations.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <SyncOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Automated Inventory Updates</h4>

          <ul className="fx-cl space1">
            <li>
              Update supply quantities instantly across connected devices and
              locations.
            </li>

            <li>
              Reduce manual tracking errors with synchronized inventory systems.
            </li>

            <li>
              Track inventory usage, restocking, and operational consumption
              automatically.
            </li>

            <li>Improve supply chain efficiency and inventory control.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <DevicesOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Cloud-Based Inventory Access</h4>

          <ul className="fx-cl space1">
            <li>
              Access inventory records securely from mobile, tablet, or desktop
              devices.
            </li>

            <li>
              Collaborate with teams across multiple operational environments.
            </li>

            <li>Monitor inventory remotely from anywhere in real time.</li>

            <li>
              Keep inventory synchronized automatically through cloud-based
              systems.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">SUPPLY INVENTORY MANAGEMENT</span>

        <h2 className="fs7 fw500">
          Keep your business supplied, organized, and operationally efficient.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name provides businesses with an advanced supply and
            consumables management system designed to simplify inventory
            tracking, supply monitoring, warehouse visibility, and operational
            planning.
          </span>

          <span>
            Businesses can monitor raw materials, office supplies, maintenance
            inventory, PPE, consumables, operational stock, and project
            materials from one centralized inventory platform.
          </span>

          <span>
            Automated low-stock alerts, barcode scanning, and real-time
            synchronization help teams reduce inventory shortages, eliminate
            manual errors, and improve operational productivity.
          </span>

          <span>
            Whether your organization operates in construction, healthcare,
            logistics, manufacturing, retail, hospitality, or field services,
            Company Name helps maintain reliable supply operations at scale.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Supply inventory dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Real-Time Supply Visibility</span>
              </span>

              <strong>Monitor inventory consumption instantly</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <VisibilityOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Live Inventory Monitoring</h4>

                  <p>
                    Track consumables, materials, and operational stock in real
                    time across all locations.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CompareArrowsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Supply Movement Tracking</h4>

                  <p>
                    Monitor transfers, usage, and stock movement between
                    operational sites efficiently.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CloudDoneOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Connected Inventory Systems</h4>

                  <p>
                    Synchronize supply inventory automatically across all
                    devices and teams.
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
                <span>Automated Supply Operations</span>
              </span>

              <strong>Reduce shortages and improve inventory planning</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <NotificationsActiveOutlinedIcon
                    style={{ fontSize: "3.2rem" }}
                  />
                </span>

                <div className="fx-cl">
                  <h4>Low Stock Notifications</h4>

                  <p>
                    Receive instant alerts before essential supplies become
                    unavailable.
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
                    Improve purchasing efficiency with accurate inventory
                    consumption tracking.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <TrendingUpOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Operational Efficiency</h4>

                  <p>
                    Reduce delays and maintain smooth business operations with
                    proactive inventory planning.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Automated consumables management system" />
          </figure>
        </div>

        {/* GRID THREE COLUMNS SECTION */}

        <div className="cardContLarge pd3 g g3 space3">
          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <PrecisionManufacturingOutlinedIcon
                  style={{ fontSize: "5.3rem" }}
                />
              </span>
            </span>

            <h4 className="fs5">Parts Tracking</h4>

            <p>
              Track operational parts, spare components, repair inventory, and
              replacement materials with accurate inventory visibility.
            </p>

            <button>Explore Parts Tracking</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <ConstructionOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Raw Materials Tracking</h4>

            <p>
              Monitor raw materials used in manufacturing, construction,
              production, and operational workflows efficiently.
            </p>

            <button>Explore Raw Materials</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <HealthAndSafetyOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">PPE Tracking</h4>

            <p>
              Manage personal protective equipment inventory and improve safety
              compliance across teams and operational facilities.
            </p>

            <button>Explore PPE Tracking</button>
          </figure>
        </div>

        <div className="cardContLarge pd3 g g2 space3">
          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <PhoneIphoneOutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Mobile Inventory Tracking</h4>

            <p>
              Track inventory on smartphones and tablets with real-time
              synchronization and mobile barcode scanning capabilities.
            </p>

            <button>Learn About Mobile Inventory</button>
          </figure>

          <figure className="cardLargeDest fs4 fx-cl space2">
            <span className="fx-ac fx-jc">
              <span className="genDestSubicon">
                <QrCode2OutlinedIcon style={{ fontSize: "5.3rem" }} />
              </span>
            </span>

            <h4 className="fs5">Barcode & QR Code Tracking</h4>

            <p>
              Improve inventory accuracy and speed using integrated barcode and
              QR code inventory management systems.
            </p>

            <button>Learn About Barcoding</button>
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
