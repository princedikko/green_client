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

import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

export default function ProvisionStoreDetailPage() {
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

                <span>Provision Store</span>
              </span>
            </span>

            <strong className="fs9">
              Smart Provision Store & FMCG Inventory Management System
            </strong>
          </h3>

          {/* HERO DESCRIPTION */}
          <div className="genDestHeroDisc fx-cl space2 fs5">
            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <StorefrontOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Retail Inventory Intelligence</h4>
                  <p>
                    Manage fast-moving consumer goods (FMCG) with real-time
                    accuracy, ensuring your shelves, stockroom, and POS system
                    are always synchronized.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PointOfSaleOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Seamless Sales Integration</h4>
                  <p>
                    Every sale instantly updates inventory levels across all
                    devices, preventing overselling and manual stock errors.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <AutoGraphOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Smart Business Insights</h4>
                  <p>
                    Understand best-selling products, slow movers, and profit
                    trends to make data-driven stocking decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Explore Demo</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="provision store inventory" />
        </figure>
      </div>

      {/* CORE FEATURES GRID */}
      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <Inventory2OutlinedIcon style={{ fontSize: "5rem" }} />
            </span>
          </span>

          <h4 className="fs5">Real-Time Stock Control</h4>
          <ul className="fx-cl space1">
            <li>Track every product from supplier to shelf in real time.</li>
            <li>Automatically update stock after every sale.</li>
            <li>Prevent missing or incorrect stock counts.</li>
            <li>Maintain accuracy across all branches.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <ShoppingCartOutlinedIcon style={{ fontSize: "5rem" }} />
            </span>
          </span>

          <h4 className="fs5">Fast Checkout System</h4>
          <ul className="fx-cl space1">
            <li>Speed up customer checkout with instant product lookup.</li>
            <li>Reduce queues and improve customer experience.</li>
            <li>Support barcode scanning for faster sales.</li>
            <li>Automatically sync sales with inventory system.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <BarChartOutlinedIcon style={{ fontSize: "5rem" }} />
            </span>
          </span>

          <h4 className="fs5">Sales Analytics Dashboard</h4>
          <ul className="fx-cl space1">
            <li>Track daily, weekly, and monthly revenue trends.</li>
            <li>Identify top-selling and low-performing items.</li>
            <li>Monitor profit margins per product category.</li>
            <li>Improve restocking decisions with data insights.</li>
          </ul>
        </figure>
      </div>

      {/* BUSINESS INSIGHT SECTION */}
      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">PROVISION STORE INTELLIGENCE</span>

        <h2 className="fs7 fw500">
          Run your retail business with full visibility and control.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            With company name, provision store owners gain complete control over
            fast-moving inventory, ensuring that no product goes untracked or
            mismanaged.
          </span>

          <span>
            The system helps reduce losses caused by theft, spoilage, or poor
            stock rotation by providing real-time monitoring across all sales
            points.
          </span>

          <span>
            Business owners can analyze customer buying behavior and optimize
            their stock levels to maximize profitability and reduce wastage.
          </span>

          <span>
            Whether operating a single shop or multiple branches, all data is
            centralized, making management faster, smarter, and more efficient.
          </span>
        </p>
      </div>

      {/* Z PATTERN - SUPPLY CHAIN */}
      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg1} alt="supply chain" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Supply Chain Control</span>
              </span>

              <strong>Track products from supplier to shelf</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <LocalShippingOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Supplier Tracking</h4>
                  <p>Monitor incoming stock deliveries in real time.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <SyncOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Auto Stock Updates</h4>
                  <p>
                    Inventory updates immediately when goods arrive or leave.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <VerifiedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Verified Inventory Flow</h4>
                  <p>Ensure accurate stock movement tracking end-to-end.</p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        {/* CUSTOMER INSIGHT */}
        <div className="zPatternGenDestComp g g2 space2">
          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Customer Behavior Insights</span>
              </span>

              <strong>Understand what your customers buy most</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <TrendingUpOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Demand Trends</h4>
                  <p>Identify high-demand products before stock runs out.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <PeopleOutlineOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Customer Patterns</h4>
                  <p>Analyze shopping habits and seasonal demand shifts.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <InsightsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>
                <div className="fx-cl">
                  <h4>Smart Restocking</h4>
                  <p>Restock based on real data, not assumptions.</p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="analytics" />
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
