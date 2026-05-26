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
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
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
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

export default function BarcodeQrCodeDetailPage() {
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

                <span> Barcode & QR Codes</span>
              </span>
            </span>

            <strong className="fs9">
              Advanced Barcode & QR Code Inventory Management
            </strong>
          </h3>

          <div className="genDestHeroDisc fx-cl space2 fs5">
            <p>
              with Universe Inventory businesses find it very fantastic to
              simplify inventory tracking with intelligent barcode and QR code
              technology designed for warehouses, retail stores, assets,
              equipment, and multi-location operations.
            </p>

            <div className="fx-cl space3">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCodeScannerOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Fast Barcode & QR Scanning</h4>

                  <p>
                    Scan inventory instantly using smartphones, tablets, or
                    external barcode scanning devices.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PrintOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Generate & Print Labels</h4>

                  <p>
                    Create custom barcode and QR labels for products, shelves,
                    tools, equipment, and inventory locations.
                  </p>
                </div>
              </div>

              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <SyncAltOutlinedIcon style={{ fontSize: "3.4rem" }} />
                </span>

                <div className="fx-cl space1">
                  <h4>Real-Time Inventory Synchronization</h4>

                  <p>
                    Every barcode scan updates inventory quantities instantly
                    across connected devices and locations.
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
          <img src={HeroOne} alt="Barcode inventory management system" />
        </figure>
      </div>

      <div className="cardContLarge pd3 g g3 space3">
        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <Inventory2OutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Inventory Barcode Tracking</h4>

          <ul className="fx-cl space1">
            <li>
              Track inventory quantities instantly using barcode scanning.
            </li>

            <li>
              Monitor warehouse stock, retail products, and supply inventory
              accurately.
            </li>

            <li>
              Reduce manual inventory entry and operational mistakes
              significantly.
            </li>

            <li>
              Improve inventory visibility across multiple business locations.
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

          <h4 className="fs5">Asset & Equipment Tracking</h4>

          <ul className="fx-cl space1">
            <li>
              Assign barcodes to equipment, tools, machinery, and reusable
              assets.
            </li>

            <li>
              Track item check-ins, check-outs, and transfers between staff.
            </li>

            <li>Monitor equipment movement across warehouses and job sites.</li>

            <li>Improve accountability and reduce asset loss efficiently.</li>
          </ul>
        </figure>

        <figure className="cardLargeDest fs4 fx-cl space2">
          <span className="fx-ac fx-jc">
            <span className="genDestSubicon">
              <SellOutlinedIcon style={{ fontSize: "5.3rem" }} />
            </span>
          </span>

          <h4 className="fs5">Retail & Sales Operations</h4>

          <ul className="fx-cl space1">
            <li>Speed up checkout operations with instant product scanning.</li>

            <li>Automatically update inventory after every successful sale.</li>

            <li>
              Track product pricing, SKUs, quantities, and item locations.
            </li>

            <li>
              Improve customer service with faster and more accurate operations.
            </li>
          </ul>
        </figure>
      </div>

      <div className="genDestParagraph fx-cl space1">
        <span className="fs4 fw400">BARCODE INVENTORY TECHNOLOGY</span>

        <h2 className="fs7 fw500">
          Modern inventory management powered by barcode automation.
        </h2>

        <p className="fs5 space2 fx-cl">
          <span>
            Company Name provides businesses with a complete barcode and QR code
            inventory management solution that simplifies product tracking,
            inventory updates, warehouse operations, and asset monitoring.
          </span>

          <span>
            Teams can generate barcode labels, scan inventory using mobile
            devices, monitor stock movement in real time, and improve inventory
            accuracy across warehouses, stores, and operational facilities.
          </span>

          <span>
            Whether you manage retail products, industrial equipment,
            construction tools, medical supplies, or consumable inventory,
            barcode automation helps eliminate manual errors and improve
            operational efficiency.
          </span>

          <span>
            Because the platform synchronizes instantly across all devices,
            businesses gain real-time visibility into inventory movement,
            product availability, and operational workflows from anywhere.
          </span>
        </p>
      </div>

      <div className="zPatternGenDest fx-cl space6 pdlargeX">
        <div className="zPatternGenDestComp g g2 space2">
          <figure className="ps3 fx-ac fx-jc">
            <img src={TestImg1} alt="Mobile barcode inventory scanning" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Mobile Barcode Operations</span>
              </span>

              <strong>Manage inventory directly from mobile devices</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <PhoneIphoneOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Smartphone Inventory Scanning</h4>

                  <p>
                    Use mobile devices to scan products, assets, and inventory
                    labels instantly.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <DevicesOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Cross-Device Synchronization</h4>

                  <p>
                    Inventory updates appear instantly across desktops, tablets,
                    and POS systems.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <CloudDoneOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Real-Time Inventory Access</h4>

                  <p>
                    Access accurate inventory records from any business location
                    securely.
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
                <span>Barcode Label Management</span>
              </span>

              <strong>Create organized inventory labeling systems</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <QrCode2OutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Custom QR Code Generation</h4>

                  <p>
                    Generate unique barcode and QR code labels for every item.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <LocalPrintshopOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Print Inventory Labels</h4>

                  <p>
                    Print professional barcode labels for shelves, products, and
                    warehouse sections.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <FolderOpenOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Organized Inventory Records</h4>

                  <p>
                    Maintain structured inventory categories and searchable
                    product databases.
                  </p>
                </div>
              </div>

              <button>Learn More</button>
            </div>
          </div>

          <figure className="fx-ac fx-jc">
            <img src={TestImg2} alt="Barcode label generation platform" />
          </figure>
        </div>

        <div className="zPatternGenDestComp g g2 space2">
          <figure className="fx-ac fx-jc">
            <img src={TestImg3} alt="Real-time barcode inventory dashboard" />
          </figure>

          <div className="pd3 fx-cl space2">
            <h3 className="fx-cl spacem">
              <span className="fx-ac space1">
                <InfoIcon />
                <span>Operational Efficiency</span>
              </span>

              <strong>Improve speed, accuracy, and inventory control</strong>
            </h3>

            <div className="zPatternGenDestDescr fx-cl space2">
              <div className="fx-as space2">
                <span className="genDestSubicon">
                  <BoltOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Faster Inventory Operations</h4>

                  <p>
                    Process inventory updates quickly with automated barcode
                    workflows.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <VerifiedOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Improved Accuracy</h4>

                  <p>
                    Eliminate manual entry errors with barcode-based inventory
                    management.
                  </p>
                </div>
              </div>

              <div className="fx-ac space2">
                <span className="genDestSubicon">
                  <GroupsOutlinedIcon style={{ fontSize: "3.2rem" }} />
                </span>

                <div className="fx-cl">
                  <h4>Collaborative Team Access</h4>

                  <p>
                    Allow staff members to scan and manage inventory together in
                    real time.
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
