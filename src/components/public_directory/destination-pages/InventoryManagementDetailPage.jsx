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
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";

export default function InventoryManagementDetailPage() {
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

                <span> Inventory Management</span>
              </span>
            </span>

            <strong className="fs9">
              Smarter Inventory Management for Modern Businesses
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name helps businesses simplify inventory operations,
              automate stock tracking, reduce losses, and manage inventory
              efficiently across warehouses, stores, projects, and operational
              locations.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <Inventory2OutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Centralized Inventory Tracking</h4>

                  <p>
                    Track products, tools, materials, equipment, and operational
                    inventory from one connected platform.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <SyncOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Real-Time Inventory Updates</h4>

                  <p>
                    Monitor inventory movement instantly across warehouses,
                    stores, mobile devices, and operational teams.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <TrendingUpOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Operational Growth & Efficiency</h4>

                  <p>
                    Reduce manual work, prevent stock shortages, and improve
                    business productivity with intelligent automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>See All Features</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Inventory management software dashboard" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <WarehouseOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Multi-Location Inventory Control</h4>

          <ul className="fx-cl space1">
            <li>
              Manage inventory across warehouses, retail stores, and project
              locations.
            </li>

            <li>Organize inventory using structured folders and categories.</li>

            <li>Monitor stock movement between locations in real time.</li>

            <li>Maintain accurate inventory visibility across operations.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <QrCodeScannerOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Barcode & QR Code Automation</h4>

          <ul className="fx-cl space1">
            <li>
              Scan inventory quickly using mobile devices or barcode scanners.
            </li>

            <li>
              Generate barcode and QR labels for products and assets easily.
            </li>

            <li>
              Reduce manual entry errors with automated inventory workflows.
            </li>

            <li>
              Improve inventory speed, accuracy, and operational efficiency.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <NotificationsActiveOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Smart Inventory Alerts</h4>

          <ul className="fx-cl space1">
            <li>
              Receive low-stock notifications before shortages affect
              operations.
            </li>

            <li>
              Monitor inventory risks, stock levels, and urgent updates
              automatically.
            </li>

            <li>Improve re-ordering accuracy and purchasing decisions.</li>

            <li>
              Prevent downtime caused by insufficient inventory availability.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">COMPLETE INVENTORY MANAGEMENT</span>

        <h2 className="fs7 fw500">
          Replace spreadsheets with intelligent inventory operations.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name provides businesses with a modern inventory management
            platform designed to simplify inventory tracking, operational
            planning, warehouse management, and business growth.
          </span>

          <span>
            Instead of relying on spreadsheets and disconnected systems,
            businesses can manage inventory, supplies, assets, tools, and
            materials from one centralized platform accessible across mobile and
            desktop devices.
          </span>

          <span>
            Real-time synchronization ensures inventory updates instantly across
            teams and operational locations, helping businesses reduce costly
            mistakes, prevent shortages, and improve inventory accuracy.
          </span>

          <span>
            Whether you operate in retail, healthcare, construction,
            manufacturing, logistics, education, or field services, Company Name
            helps your organization run more efficiently with smarter inventory
            workflows and operational visibility.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Centralized inventory management system" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Centralized Inventory Operations</span>
              </span>

              <strong>Manage inventory from one connected platform</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <DashboardOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Unified Inventory Dashboard</h4>

                  <p>
                    Access inventory records, stock levels, and operational
                    insights from one dashboard.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <FolderOpenOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Flexible Inventory Organization</h4>

                  <p>
                    Structure inventory using folders, categories, tags, and
                    custom inventory fields.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CloudDoneOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Real-Time Synchronization</h4>

                  <p>
                    Inventory changes update instantly across all connected
                    devices and locations.
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
                <span>Inventory Automation</span>
              </span>

              <strong>Reduce manual work with smart inventory tools</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <AutoAwesomeOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Automated Inventory Workflows</h4>

                  <p>
                    Simplify inventory updates, tracking, and operational
                    processes automatically.
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
                    Avoid shortages and overstocking with intelligent inventory
                    alerts and forecasting.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <BoltOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Faster Daily Operations</h4>

                  <p>
                    Increase productivity with streamlined inventory management
                    workflows and automation.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Inventory automation dashboard" />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt="Business inventory growth analytics" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Growth & Business Intelligence</span>
              </span>

              <strong>Use inventory insights to scale your business</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <InsightsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Operational Analytics</h4>

                  <p>
                    Monitor inventory trends, stock performance, and operational
                    efficiency in real time.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <QueryStatsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Forecasting & Planning</h4>

                  <p>
                    Improve future inventory planning using historical data and
                    reporting insights.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <MonetizationOnOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Cost Reduction</h4>

                  <p>
                    Reduce inventory waste, unnecessary spending, and
                    operational inefficiencies.
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
                <span>Team Collaboration</span>
              </span>

              <strong>Keep teams connected across inventory operations</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <GroupsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Multi-User Access</h4>

                  <p>
                    Allow staff members to track and manage inventory together
                    securely.
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
                  <h4>Permission-Based Roles</h4>

                  <p>
                    Control employee access levels for secure inventory
                    management operations.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CompareArrowsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Cross-Team Coordination</h4>

                  <p>
                    Improve communication between warehouses, stores, and field
                    operations.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img
              src={TestImg2}
              alt="Collaborative inventory management teams"
            />
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
