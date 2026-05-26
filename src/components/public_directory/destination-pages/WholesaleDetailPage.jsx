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

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

export default function WholesaleDetailPage() {
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
                  onClick={() => navigate("/industries")}
                  style={{ cursor: "pointer" }}
                >
                  Industries <KeyboardArrowRightIcon fontSize="small" />
                </span>

                <span>Wholesale</span>
              </span>
            </span>

            <strong className="fs9">
              Enterprise Wholesale & Bulk Distribution Inventory System
            </strong>
          </h3>

          {/* HERO DESCRIPTION */}
          <div className="genDestHeroDisc fx-cl space2 fs5">
            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <LocalShippingOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Bulk Distribution Engine</h4>
                  <p>
                    Manage large-scale product distribution across retailers,
                    warehouses, and regional supply chains with complete
                    real-time visibility.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <GroupsOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Dealer & Retail Network Control</h4>
                  <p>
                    Organize and manage wholesalers, distributors, and retail
                    partners under a single unified inventory ecosystem.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <RequestQuoteOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Smart Pricing Intelligence</h4>
                  <p>
                    Apply dynamic bulk pricing, tiered discounts, and
                    dealer-specific pricing rules automatically across your
                    entire network.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>Request Demo</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="wholesale inventory system" />
        </figure>
      </div>

      {/* CORE OPERATIONS GRID */}
      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fx-cl space2">
          <Inventory2OutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Bulk Inventory Management</h4>
          <ul className="fx-cl space1">
            <li>Manage thousands of units across multiple warehouses</li>
            <li>Track stock movement in real time across regions</li>
            <li>Prevent overstocking and understocking issues</li>
            <li>Maintain accurate bulk quantity records</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <StorefrontOutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Retailer Distribution Network</h4>
          <ul className="fx-cl space1">
            <li>Assign products to registered retail partners</li>
            <li>Track retailer demand and purchase history</li>
            <li>Automate replenishment based on consumption</li>
            <li>Improve supply chain efficiency</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <ReceiptLongOutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Invoice & Credit System</h4>
          <ul className="fx-cl space1">
            <li>Generate wholesale invoices automatically</li>
            <li>Support credit-based transactions for partners</li>
            <li>Track outstanding payments and balances</li>
            <li>Improve financial control over distribution</li>
          </ul>
        </figure>
      </div>

      {/* BUSINESS LOGIC SECTION */}
      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">WHOLESALE DISTRIBUTION ENGINE</span>

        <h2 className="fs7 fw500">
          Control large-scale product movement with precision and intelligence.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            With company name, wholesale businesses can manage complex
            distribution chains across multiple regions, warehouses, and retail
            partners without losing visibility.
          </span>

          <span>
            Every product movement—from manufacturer intake to distributor
            allocation—is tracked in real time to ensure accurate stock
            accountability across the entire supply chain.
          </span>

          <span>
            Bulk pricing rules allow businesses to define tiered pricing
            structures for different buyers, improving profitability and
            simplifying negotiations with large clients.
          </span>

          <span>
            The system eliminates manual errors in ordering, invoicing, and
            stock allocation, making wholesale operations faster and more
            scalable.
          </span>
        </p>
      </div>

      {/* Z PATTERN - LOGISTICS */}
      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg1} alt="logistics system" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Logistics & Distribution Tracking</span>
              </span>

              <strong>End-to-end supply chain visibility</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <LocalShippingOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Shipment Tracking</h4>
                  <p>
                    Monitor goods from warehouse to destination in real time.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <SyncOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Live Inventory Sync</h4>
                  <p>Stock updates automatically across all warehouses.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <VerifiedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Delivery Confirmation</h4>
                  <p>Verify successful deliveries and reduce disputes.</p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        {/* PRICING & DEALERS */}
        <div className="zPatternGenDestComp g g2 space2">
          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Dealer Pricing Intelligence</span>
              </span>

              <strong>Dynamic pricing for every business partner</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <RequestQuoteOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Tiered Pricing System</h4>
                  <p>
                    Assign different prices to wholesalers, retailers, and VIP
                    buyers.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <TrendingUpOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Profit Optimization</h4>
                  <p>Maximize margins with intelligent pricing strategies.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <PeopleOutlineOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Partner Management</h4>
                  <p>Organize and monitor all business buyers in one system.</p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="pricing system" />
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
