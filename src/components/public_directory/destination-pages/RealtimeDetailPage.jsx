import "./GeneralDestination.css";
import "./realtimeDetailPage.css";
import Header from "../home-page/home-comps/Header";
import Footer from "../home-page/home-comps/Footer";
import { useNavigate } from "react-router-dom";

// images import
import HeroOne from "./destination-images/hero1.png";
import TestImg1 from "../home-page/home-comps/homepage_images/first.png";
import TestImg2 from "../home-page/home-comps/homepage_images/phoneReciepts.png";
import TestImg3 from "../home-page/home-comps/homepage_images/gener.png";

// icons imports
import InfoIcon from "@mui/icons-material/Info";

import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApprovalIcon from "@mui/icons-material/Approval";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function RealtimeDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="sectiongenDest fx-cl fx-ac ">
      <Header />

      <div className="genDestHero fx fx-ac fx-jc space4">
        <div className=" fx-cl space2">
          <h3 className=" fx-cl space1">
            <span className="fx-ac spacem">
              <InfoIcon />
              <span>
                <span
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                >
                  Home <KeyboardArrowRightIcon fontSize="small" />{" "}
                </span>
                <span
                  onClick={() => navigate("/company/features")}
                  style={{ cursor: "pointer" }}
                >
                  Features <KeyboardArrowRightIcon fontSize="small" />{" "}
                </span>
                <span>Real-time</span>
              </span>
            </span>

            <strong className="fs9">
              Real-Time Inventory & Sales Tracking
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PointOfSaleOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Live Sales Monitoring</h4>
                  <p>
                    Track every product sold instantly across all branches,
                    warehouses, and POS terminals in real time.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <SyncOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Multi-Location Synchronization</h4>
                  <p>
                    Inventory automatically updates across multiple locations
                    whenever staff sell, move, or restock products.
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
                  <h4>Instant Stock Alerts</h4>
                  <p>
                    Get notified immediately when products are exhausted,
                    running low, or require urgent restocking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Watch Demo</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt=" " />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3  space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <StoreOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Real-Time Branch Tracking</h4>

          <ul className="fx-cl space1">
            <li>
              Monitor sales happening across all store branches instantly.
            </li>
            <li>See which branch is selling faster in real time.</li>
            <li>Track product transfers between locations automatically.</li>
            <li>View live stock availability without refreshing manually.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <ManageAccountsOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Staff Activity Visibility</h4>

          <ul className="fx-cl space1">
            <li>
              See which staff member processed each sale or inventory update.
            </li>
            <li>
              Track item check-ins, check-outs, and adjustments instantly.
            </li>
            <li>Monitor cashier activity across multiple POS systems.</li>
            <li>
              Reduce fraud and inventory inconsistencies with live tracking.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <Inventory2OutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Automatic Inventory Updates</h4>

          <ul className="fx-cl space1">
            <li>Inventory updates instantly after every successful sale.</li>
            <li>Prevent overselling with synchronized stock quantities.</li>
            <li>Track exhausted and low-stock items automatically.</li>
            <li>
              Keep inventory accurate across mobile, desktop, and POS devices.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">REAL-TIME FEATURES</span>

        <h2 className="fs7 fw500">
          Manage inventory operations live across your entire business.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Real-time inventory management allows business owners to monitor
            product movement instantly from anywhere. Whenever a cashier
            completes a sale, the inventory quantity updates automatically
            across all connected devices and store locations.
          </span>

          <span>
            Multi-location businesses can monitor branch performance, warehouse
            availability, and staff activities from a centralized dashboard.
            This ensures that inventory records remain accurate and synchronized
            in real time.
          </span>

          <span>
            Managers receive instant notifications when products are running
            low, exhausted, transferred, or updated by staff members. This helps
            businesses avoid stock shortages, delays, and inventory errors.
          </span>

          <span>
            Because the system works in real time, your team can collaborate
            smoothly whether they are using POS terminals, smartphones, tablets,
            or desktop computers from different locations.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg2} alt=" " />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className=" fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Real-Time Monitoring</span>
              </span>

              <strong>Track sales and inventory instantly</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <DevicesOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Instant Sales Updates</h4>
                  <p>
                    Every completed sale immediately updates your inventory
                    quantities across the system.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CompareArrowsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Cross-Device Synchronization</h4>
                  <p>
                    Updates appear instantly on mobile apps, POS systems, and
                    management dashboards.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <VerifiedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Live Inventory Accuracy</h4>
                  <p>
                    Eliminate manual stock confusion with automatic synchronized
                    inventory updates.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <div className="pd3 fx-cl space2">
            <h3 className=" fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Multi-Location Control</span>
              </span>

              <strong>Manage all branches from one dashboard</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <WarehouseOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Branch Visibility</h4>
                  <p>
                    See which products are available in each store or warehouse.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <SyncOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Warehouse Transfers</h4>
                  <p>Track product movement between locations in real time.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <InsightsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Centralized Management</h4>
                  <p>
                    Control inventory operations from a single admin dashboard.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt=" " />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className=" fx-ac fx-jc">
            <img src={TestImg1} alt=" " />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className=" fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Smart Notifications</span>
              </span>

              <strong>Stay informed about critical inventory changes</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <WarningAmberOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Low Stock Alerts</h4>
                  <p>
                    Receive instant alerts when inventory reaches minimum
                    levels.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <RemoveShoppingCartOutlinedIcon
                    style={{ fontSize: "3.2rem" }}
                  />
                </span>

                <div className="fx-cl">
                  <h4>Exhausted Product Notifications</h4>
                  <p>
                    Know immediately when products become unavailable or sold
                    out.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <AdminPanelSettingsOutlinedIcon
                    style={{ fontSize: "3.2rem" }}
                  />
                </span>

                <div className="fx-cl">
                  <h4>Staff Action Tracking</h4>
                  <p>
                    Monitor inventory changes made by employees in real time.
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
