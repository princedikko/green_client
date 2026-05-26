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
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

export default function AlertsDetailPage() {
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

                <span> Inventory Alerts</span>
              </span>
            </span>

            <strong className="fs9">
              Smart Inventory Alerts That Prevent Costly Disruptions
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name helps businesses automate inventory monitoring with
              intelligent low-stock alerts, maintenance reminders, warranty
              tracking, and expiry notifications across all operations.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <NotificationsActiveOutlinedIcon
                    style={{ fontSize: "3.4rem" }}
                  />
                </span>

                <div className="fx-cl space1">
                  <h4>Low Stock Notifications</h4>

                  <p>
                    Receive instant alerts when products, materials, or supplies
                    reach minimum inventory thresholds.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <EventRepeatOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Date-Based Maintenance Reminders</h4>

                  <p>
                    Stay ahead of servicing schedules, inspections, warranty
                    expirations, and equipment maintenance deadlines.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <MarkEmailUnreadOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Multi-Channel Alert Delivery</h4>

                  <p>
                    Get inventory notifications directly through the dashboard,
                    mobile app, or email instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Explore Features</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Inventory alerts and notifications system" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <InventoryOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Low Stock Monitoring</h4>

          <ul className="fx-cl space1">
            <li>
              Set custom minimum stock quantities for every inventory item.
            </li>

            <li>
              Receive instant alerts before inventory shortages affect
              operations.
            </li>

            <li>
              Prevent stockouts and unexpected supply interruptions easily.
            </li>

            <li>
              Improve purchasing efficiency with automated inventory awareness.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <BuildCircleOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Maintenance & Warranty Alerts</h4>

          <ul className="fx-cl space1">
            <li>
              Track maintenance schedules for equipment, machinery, and tools.
            </li>

            <li>Monitor warranty expiration dates and servicing deadlines.</li>

            <li>
              Attach receipts, warranty files, and service records securely.
            </li>

            <li>
              Reduce equipment downtime with proactive maintenance planning.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <AccessAlarmOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Real-Time Operational Alerts</h4>

          <ul className="fx-cl space1">
            <li>
              Receive immediate operational notifications across all locations.
            </li>

            <li>
              Monitor inventory changes, stock transfers, and urgent updates.
            </li>

            <li>
              Keep managers and staff informed automatically in real time.
            </li>

            <li>
              Improve business response time during critical inventory events.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">AUTOMATED INVENTORY ALERTS</span>

        <h2 className="fs7 fw500">
          Stay ahead of shortages, maintenance, and operational risks.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name simplifies inventory monitoring with intelligent alert
            automation designed to help businesses maintain accurate stock
            levels and prevent operational interruptions.
          </span>

          <span>
            Businesses can configure low-stock alerts, expiry reminders,
            warranty notifications, maintenance schedules, and equipment service
            deadlines from a centralized inventory management platform.
          </span>

          <span>
            By automating inventory notifications, teams can react faster,
            reduce manual monitoring tasks, improve ordering decisions, and
            prevent unnecessary downtime caused by inventory shortages or
            equipment failures.
          </span>

          <span>
            Whether you operate retail stores, warehouses, construction
            projects, healthcare facilities, or manufacturing businesses,
            Company Name helps your organization stay proactive, organized, and
            operationally efficient.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Low stock inventory alerts dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Low Stock Automation</span>
              </span>

              <strong>Never run out of critical inventory again</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <WarningAmberOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Instant Shortage Warnings</h4>

                  <p>
                    Get notified immediately when inventory approaches critical
                    stock levels.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <ShoppingCartCheckoutOutlinedIcon
                    style={{ fontSize: "3.2rem" }}
                  />
                </span>

                <div className="fx-cl">
                  <h4>Smarter Reordering Decisions</h4>

                  <p>
                    Improve purchasing accuracy with automated inventory
                    monitoring systems.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <SyncAltOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Real-Time Alert Synchronization</h4>

                  <p>
                    Inventory alerts update instantly across mobile and desktop
                    platforms.
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
                <span>Maintenance Tracking</span>
              </span>

              <strong>Protect equipment with proactive servicing</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <EngineeringOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Equipment Service Reminders</h4>

                  <p>
                    Schedule inspections and maintenance alerts for valuable
                    equipment and tools.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <DescriptionOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Document Storage</h4>

                  <p>
                    Store warranties, invoices, manuals, and service documents
                    alongside inventory records.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <VerifiedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Warranty Protection</h4>

                  <p>
                    Track warranty expiration dates and avoid losing coverage
                    opportunities.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Equipment maintenance alert system" />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt="Business operations monitoring alerts" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Operational Efficiency</span>
              </span>

              <strong>Automate monitoring and improve productivity</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <AutoModeOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Automated Alert Workflows</h4>

                  <p>
                    Reduce manual inventory supervision with intelligent
                    automated notifications.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <GroupsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Team Awareness</h4>

                  <p>
                    Keep departments and staff informed about inventory events
                    and maintenance activities.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <InsightsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Operational Visibility</h4>

                  <p>
                    Gain better control over inventory movement, equipment
                    health, and business continuity.
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
