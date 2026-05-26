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

import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

export default function FurnituresDetailPage() {
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

                <span>Interior Design</span>
              </span>
            </span>

            <strong className="fs9">
              Premium Interior Design & Furniture Inventory Management System
            </strong>
          </h3>

          {/* HERO DESCRIPTION */}
          <div className="genDestHeroDisc fx-cl space2 fs5">
            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <WeekendOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Design-Centric Inventory Control</h4>
                  <p>
                    Manage furniture, decor items, materials, and custom pieces
                    with a system built specifically for interior design
                    workflows.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <ArchitectureOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Project-Based Organization</h4>
                  <p>
                    Keep inventory structured per client project, ensuring that
                    every design delivery is tracked from concept to completion.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <AutoAwesomeOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Visual Inventory System</h4>
                  <p>
                    Attach images, materials, colors, and specifications to
                    every item for complete visual tracking of design assets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>View Pricing</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="interior design inventory" />
        </figure>
      </div>

      {/* CORE VALUE GRID */}
      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fx-cl space2">
          <Inventory2OutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Centralized Project Inventory</h4>
          <ul className="fx-cl space1">
            <li>Manage all interior projects in one unified system</li>
            <li>Track furniture, decor, and materials per project</li>
            <li>Eliminate confusion across multiple client jobs</li>
            <li>Ensure consistent delivery tracking</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <PhotoLibraryOutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Visual Asset Tracking</h4>
          <ul className="fx-cl space1">
            <li>Attach images to every furniture or decor item</li>
            <li>View inventory in a gallery-style format</li>
            <li>Track design variations and custom pieces</li>
            <li>Improve client presentation and approvals</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fx-cl space2">
          <PointOfSaleOutlinedIcon style={{ fontSize: "4.8rem" }} />
          <h4 className="fs5">Procurement & Ordering Flow</h4>
          <ul className="fx-cl space1">
            <li>Track orders from suppliers and artisans</li>
            <li>Manage custom furniture production timelines</li>
            <li>Prevent delays with real-time order tracking</li>
            <li>Improve coordination with vendors</li>
          </ul>
        </figure>
      </div>

      {/* BUSINESS VALUE SECTION */}
      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">INTERIOR DESIGN OPERATIONS ENGINE</span>

        <h2 className="fs7 fw500">
          A complete system for managing furniture, decor, and creative
          projects.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            With company name, interior designers can manage every aspect of
            their inventory from a single platform — including furniture
            sourcing, material tracking, and project-based asset allocation.
          </span>

          <span>
            Each item in your inventory can carry detailed specifications such
            as dimensions, fabric type, color palette, finish, and supplier
            information for full transparency.
          </span>

          <span>
            This ensures that design teams can deliver consistent results
            without missing items, delays, or miscommunication between
            procurement and project execution.
          </span>

          <span>
            Whether working on residential, commercial, or luxury interior
            projects, the system scales to match your workflow complexity.
          </span>
        </p>
      </div>

      {/* Z PATTERN - DESIGN WORKFLOW */}
      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg1} alt="design workflow" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Design Workflow Management</span>
              </span>

              <strong>From concept to installation tracking</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <AssignmentOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Project Planning</h4>
                  <p>Organize all furniture and decor per client project.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <LocalShippingOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Delivery Tracking</h4>
                  <p>Monitor supplier and logistics timelines in real time.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <CheckCircleOutlineOutlinedIcon
                  style={{ fontSize: "3.2rem" }}
                />
                <div className="fx-cl">
                  <h4>Installation Completion</h4>
                  <p>Confirm delivery, setup, and project completion stages.</p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>
        </div>

        {/* CLIENT EXPERIENCE SECTION */}
        <div className="zPatternGenDestComp g g2 space2">
          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Client Experience Enhancement</span>
              </span>

              <strong>Deliver better interior design outcomes</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <VisibilityOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Full Transparency</h4>
                  <p>Clients can view progress and inventory status anytime.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <PaletteOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Design Accuracy</h4>
                  <p>Ensure materials match approved designs exactly.</p>
                </div>
              </div>

              <div className="fx-ac space2">
                <StarOutlineOutlinedIcon style={{ fontSize: "3.2rem" }} />
                <div className="fx-cl">
                  <h4>Premium Experience</h4>
                  <p>
                    Improve client satisfaction with organized delivery flow.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="client experience" />
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
