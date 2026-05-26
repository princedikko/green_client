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
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export default function MobileAppDetailPage() {
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

                <span> Mobile App</span>
              </span>
            </span>

            <strong className="fs9">
              Smart Inventory Management From Anywhere
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name mobile inventory application gives businesses the
              freedom to manage products, assets, warehouse stock, supplies, and
              sales operations directly from smartphones and tablets.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PhoneIphoneOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Inventory Access On Any Device</h4>

                  <p>
                    Monitor inventory levels, sales activity, and stock movement
                    instantly from Android devices, iPhones, tablets, or POS
                    systems.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCodeScannerOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Built-In Barcode & QR Scanning</h4>

                  <p>
                    Scan products faster using the mobile camera or external
                    barcode scanners for quick inventory operations.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <CloudSyncOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Real-Time Synchronization</h4>

                  <p>
                    Every inventory update automatically syncs across all
                    connected devices, locations, and staff accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Mobile inventory management application" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <Inventory2OutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Inventory Tracking</h4>

          <ul className="fx-cl space1">
            <li>Track stock quantities instantly from mobile devices.</li>

            <li>
              Monitor warehouse inventory and branch availability in real time.
            </li>

            <li>
              Update inventory records immediately after sales or restocking.
            </li>

            <li>
              Eliminate spreadsheet dependency with centralized inventory
              management.
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

          <h4 className="fs5">Asset & Equipment Management</h4>

          <ul className="fx-cl space1">
            <li>
              Manage business equipment, tools, machinery, and reusable assets.
            </li>

            <li>
              Assign assets to employees, departments, or locations easily.
            </li>

            <li>
              Track asset movement and maintenance activities from anywhere.
            </li>

            <li>
              Reduce equipment loss with accurate mobile asset visibility.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <ShoppingCartOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Sales & Product Monitoring</h4>

          <ul className="fx-cl space1">
            <li>Monitor customer purchases and product sales in real time.</li>

            <li>
              Automatically deduct sold products from inventory quantities.
            </li>

            <li>
              Identify top-selling products with live reporting dashboards.
            </li>

            <li>
              Improve sales efficiency with fast barcode-based checkout systems.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">MOBILE INVENTORY PLATFORM</span>

        <h2 className="fs7 fw500">
          Powerful inventory operations directly from your smartphone.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name helps businesses simplify inventory management with a
            modern mobile-first inventory platform designed for speed,
            flexibility, and operational efficiency.
          </span>

          <span>
            Whether your business manages products, warehouse stock, retail
            inventory, construction tools, medical supplies, or reusable assets,
            the mobile app allows your team to stay connected from any location.
          </span>

          <span>
            Staff can scan products, process inventory updates, manage
            transfers, monitor stock quantities, and generate reports instantly
            without needing complicated software training.
          </span>

          <span>
            Because everything synchronizes in real time, managers always have
            access to accurate inventory visibility across branches, warehouses,
            stores, and mobile devices simultaneously.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Inventory mobile application dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Mobile Inventory Operations</span>
              </span>

              <strong>Manage inventory faster from anywhere</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <DevicesOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Cross-Device Access</h4>

                  <p>
                    Access your inventory system from smartphones, tablets,
                    laptops, and POS terminals seamlessly.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CloudDoneOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Automatic Cloud Synchronization</h4>

                  <p>
                    All inventory changes sync securely across your business
                    operations in real time.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <SecurityOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Secure Business Access</h4>

                  <p>
                    Protect inventory data with controlled staff permissions and
                    secured account access.
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
                <span>Barcode & QR Technology</span>
              </span>

              <strong>Speed up inventory workflows instantly</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCode2OutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Fast Barcode Scanning</h4>

                  <p>
                    Scan products instantly using mobile cameras or dedicated
                    scanning devices.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <AddTaskOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Quick Inventory Updates</h4>

                  <p>
                    Add, edit, transfer, or remove inventory records within
                    seconds.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <AnalyticsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Smarter Inventory Insights</h4>

                  <p>
                    Generate accurate inventory reports and monitor business
                    performance from one dashboard.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Barcode inventory management system" />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt="Real-time inventory analytics" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Smart Business Automation</span>
              </span>

              <strong>Reduce manual inventory work dramatically</strong>
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
                    Receive automatic alerts before products become unavailable.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <QueryStatsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Live Reporting Dashboards</h4>

                  <p>
                    Monitor inventory trends, product movement, and business
                    growth metrics instantly.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <GroupsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Team Collaboration</h4>

                  <p>
                    Allow your team to manage inventory together with role-based
                    access control.
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
