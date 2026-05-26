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
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

export default function ReportingAnalyticsDetailPage() {
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

                <span> Reporting & Analytics</span>
              </span>
            </span>

            <strong className="fs9">
              Powerful Inventory Reporting & Business Analytics
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name helps businesses gain deeper inventory visibility
              with real-time reporting, operational analytics, inventory
              forecasting, and customizable business intelligence dashboards.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <AnalyticsOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Real-Time Inventory Analytics</h4>

                  <p>
                    Monitor inventory movement, sales performance, stock value,
                    and operational activities from one centralized dashboard.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <AssessmentOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Advanced Custom Reporting</h4>

                  <p>
                    Generate detailed inventory reports with filters, custom
                    layouts, date ranges, and operational insights.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QueryStatsOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Data-Driven Business Decisions</h4>

                  <p>
                    Use accurate reporting insights to improve forecasting,
                    inventory planning, and operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Inventory reporting analytics dashboard" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <Inventory2OutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Inventory Summary Reporting</h4>

          <ul className="fx-cl space1">
            <li>
              Analyze inventory quantity, stock value, and warehouse
              availability instantly.
            </li>

            <li>
              Track inventory performance across branches and operational
              locations.
            </li>

            <li>
              Identify fast-moving and slow-moving inventory products easily.
            </li>

            <li>
              Improve stock planning with accurate inventory insights and
              trends.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <ManageAccountsOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Team & Activity Reports</h4>

          <ul className="fx-cl space1">
            <li>
              Monitor inventory changes made by employees and departments.
            </li>

            <li>
              Track stock adjustments, transfers, check-ins, and check-outs.
            </li>

            <li>
              Maintain transparency across operational workflows and staff
              activities.
            </li>

            <li>
              Improve accountability with detailed user activity reporting.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <InsightsOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Forecasting & Business Insights</h4>

          <ul className="fx-cl space1">
            <li>
              Improve purchasing decisions using historical inventory trends.
            </li>

            <li>
              Forecast inventory demand and future stock requirements
              intelligently.
            </li>

            <li>Reduce unnecessary overstocking and inventory shortages.</li>

            <li>
              Strengthen operational planning with accurate business analytics.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">SMART INVENTORY ANALYTICS</span>

        <h2 className="fs7 fw500">
          Turn inventory data into actionable business intelligence.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name provides businesses with advanced inventory reporting
            and analytics tools designed to improve operational visibility,
            inventory planning, financial tracking, and decision-making.
          </span>

          <span>
            From inventory summaries and stock movement reports to user activity
            tracking and custom analytics dashboards, businesses gain real-time
            insights into every aspect of their inventory operations.
          </span>

          <span>
            Managers can monitor inventory flow, identify operational
            inefficiencies, reduce inventory losses, and optimize stock levels
            using accurate historical and real-time inventory data.
          </span>

          <span>
            Whether you manage warehouses, retail operations, healthcare
            supplies, manufacturing inventory, or construction assets, Company
            Name helps your organization make smarter business decisions backed
            by reliable inventory intelligence.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Inventory analytics dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Inventory Intelligence</span>
              </span>

              <strong>Understand inventory performance instantly</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <StackedLineChartOutlinedIcon
                    style={{ fontSize: "3.2rem" }}
                  />
                </span>

                <div className="fx-cl">
                  <h4>Real-Time Inventory Trends</h4>

                  <p>
                    Monitor inventory movement, stock levels, and operational
                    activity in real time.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <TimelineOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Historical Data Analysis</h4>

                  <p>
                    Analyze historical inventory patterns to improve forecasting
                    and planning.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <AttachMoneyOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Inventory Value Reporting</h4>

                  <p>
                    Understand inventory costs, stock value, and operational
                    expenses clearly.
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
                <span>Advanced Report Generation</span>
              </span>

              <strong>Create customized inventory reporting workflows</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <TuneOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Custom Filters & Segments</h4>

                  <p>
                    Filter inventory reports by category, location, users, tags,
                    or operational activities.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <DownloadOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Exportable Business Reports</h4>

                  <p>
                    Export inventory reports instantly for audits, finance, and
                    operational reviews.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <MailOutlineOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Automated Report Delivery</h4>

                  <p>
                    Schedule recurring inventory reports directly to team emails
                    automatically.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Custom inventory reporting system" />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt="Team activity inventory reports" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Operational Transparency</span>
              </span>

              <strong>Track every inventory activity with confidence</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <HistoryOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Inventory Activity History</h4>

                  <p>
                    Monitor all stock changes, movements, and inventory updates
                    across operations.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <PeopleOutlineOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>User Activity Monitoring</h4>

                  <p>
                    Review employee inventory actions and operational
                    responsibilities easily.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <SecurityOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Loss Prevention Insights</h4>

                  <p>
                    Detect unusual inventory behavior and reduce operational
                    discrepancies proactively.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        {/* EXTRA Z-PATTERN SECTION */}

        <div className="zPatternGenDestComp g g2 space2">
          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Business Forecasting & Planning</span>
              </span>

              <strong>Use inventory data to scale your operations</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <TrendingUpOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Demand Forecasting</h4>

                  <p>
                    Predict future inventory requirements using historical sales
                    and stock movement trends.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <WarehouseOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Inventory Optimization</h4>

                  <p>
                    Balance stock levels efficiently to avoid shortages and
                    excessive overstocking.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <BusinessCenterOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Strategic Business Insights</h4>

                  <p>
                    Make smarter operational and financial decisions with
                    accurate inventory intelligence.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img
              src={TestImg2}
              alt="Business forecasting analytics dashboard"
            />
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
