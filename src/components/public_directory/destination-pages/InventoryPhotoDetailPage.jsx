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
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

export default function InventoryPhotosDetailPage() {
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

                <span> Inventory Photos</span>
              </span>
            </span>

            <strong className="fs9">
              Build A Smarter Visual Inventory System
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              Company Name helps businesses visually organize inventory with
              item photos, image-based tracking, and real-time product
              visibility across warehouses, stores, and mobile devices.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PhotoCameraOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Attach Photos To Any Inventory Item</h4>

                  <p>
                    Add product images, equipment photos, packaging previews,
                    and visual references directly to inventory records.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <VisibilityOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Identify Products Faster</h4>

                  <p>
                    Help staff instantly recognize products, variants, tools,
                    and materials without relying only on text descriptions.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <MobileFriendlyOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Upload Photos From Mobile Devices</h4>

                  <p>
                    Capture inventory images directly from smartphones, tablets,
                    warehouse scanners, or desktop systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fx-ac space2">
            <button>Start Free Trial</button>
            <button>View Demo</button>
          </div>
        </div>

        <figure className="fx-ac fx-jc pd1">
          <img src={HeroOne} alt="Visual inventory management system" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <ImageOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Visual Inventory Tracking</h4>

          <ul className="fx-cl space1">
            <li>
              Attach multiple high-quality photos to inventory items and assets.
            </li>

            <li>
              Visually monitor inventory across warehouses and store locations.
            </li>

            <li>
              Reduce product confusion with image-based identification systems.
            </li>

            <li>
              Organize products faster using photos, tags, and custom fields.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <CategoryOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Variant & Product Accuracy</h4>

          <ul className="fx-cl space1">
            <li>
              Distinguish between similar products using clear visual previews.
            </li>

            <li>
              Prevent costly inventory mistakes caused by incorrect item
              selection.
            </li>

            <li>
              Confirm packaging, colors, sizes, and product variations quickly.
            </li>

            <li>
              Improve warehouse picking and fulfillment accuracy significantly.
            </li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <EngineeringOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Equipment Condition Monitoring</h4>

          <ul className="fx-cl space1">
            <li>
              Track equipment wear, damage, and maintenance conditions visually.
            </li>

            <li>
              Upload inspection photos after every operational use or transfer.
            </li>

            <li>
              Monitor high-value assets with detailed image history records.
            </li>

            <li>
              Improve maintenance planning and operational safety management.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">VISUAL INVENTORY MANAGEMENT</span>

        <h2 className="fs7 fw500">
          Give your team a clearer and faster way to manage inventory.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name transforms traditional inventory management into a
            visual inventory experience by allowing businesses to attach photos
            directly to products, equipment, assets, materials, and supplies.
          </span>

          <span>
            Teams can instantly recognize inventory items, verify stock
            conditions, confirm product variants, and reduce operational errors
            using image-based inventory records.
          </span>

          <span>
            Whether your business operates warehouses, retail stores,
            construction projects, medical facilities, or distribution centers,
            visual inventory tracking helps employees work faster and more
            accurately.
          </span>

          <span>
            By combining inventory photos with barcode scanning, mobile access,
            and real-time synchronization, Company Name helps businesses improve
            organization, inventory accuracy, and team productivity across every
            location.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Inventory image management dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Inventory Photo Management</span>
              </span>

              <strong>Organize inventory visually with confidence</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <CollectionsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Multiple Image Uploads</h4>

                  <p>
                    Store multiple photos for products, equipment, tools, and
                    inventory folders.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CloudUploadOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Fast Mobile Uploads</h4>

                  <p>
                    Upload inventory images instantly from mobile devices and
                    tablets.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <FolderCopyOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Organized Visual Catalogs</h4>

                  <p>
                    Build structured visual inventory categories for easier
                    product navigation.
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
                <span>Improved Team Accuracy</span>
              </span>

              <strong>Reduce inventory mistakes across operations</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <FactCheckOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Visual Product Verification</h4>

                  <p>
                    Help employees confirm the correct products before updating
                    inventory records.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CompareOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Variant Identification</h4>

                  <p>
                    Distinguish similar inventory items, packaging, or product
                    sizes instantly.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <GroupsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Better Team Collaboration</h4>

                  <p>
                    Keep every staff member aligned with consistent visual
                    inventory information.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Inventory variant comparison system" />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt="Asset condition photo monitoring" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Asset Condition Monitoring</span>
              </span>

              <strong>Track equipment condition over time</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <ConstructionOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Equipment Inspection Records</h4>

                  <p>
                    Save inspection photos after maintenance checks and daily
                    operational use.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <WarningAmberOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Damage Identification</h4>

                  <p>
                    Detect wear, damage, or replacement needs before operational
                    failures occur.
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
                    Gain better insights into asset performance and equipment
                    lifecycle management.
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
