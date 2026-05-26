import { useNavigate } from "react-router-dom";
import "./featuresDropdown.css";
import ScreenRotationOutlinedIcon from "@mui/icons-material/ScreenRotationOutlined";

import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

import FeatureImage from "../homepage_images/features.png";

export default function FeaturesDropdown({ setOpenIndex }) {
  const redirect = useNavigate();

  const featuresDropdownData = {
    title: "Features",
    description:
      "Discover how your inventory system simplifies operations with powerful tools designed for speed and control.",

    items: [
      {
        title: "Real-Time Sales Tracking",
        desc: "Streamline sales with real-time inventory updates at checkout.",
        icon: <PointOfSaleOutlinedIcon style={{ fontSize: "2.8rem" }} />,
        link: "/features/realtime_sales_tracking",
      },

      {
        title: "Mobile App",
        desc: "Manage inventory anywhere using your mobile device.",
        icon: <PhoneIphoneOutlinedIcon style={{ fontSize: "2.8rem" }} />,
        link: "/features/mobile_application",
      },

      {
        title: "Inventory Photos",
        desc: "Add images to items for better tracking and identification.",
        icon: <ImageOutlinedIcon style={{ fontSize: "2.8rem" }} />,
        link: "/features/inventory_photos",
      },

      {
        title: "Smart Alerts",
        desc: "Get notified for low stock, expiry dates, and important updates.",
        icon: (
          <NotificationsActiveOutlinedIcon style={{ fontSize: "2.8rem" }} />
        ),
        link: "/features/alerts",
      },

      {
        title: "Qr & Barcoding",
        desc: "Scan and generate barcodes for faster inventory handling.",
        icon: <QrCodeScannerOutlinedIcon style={{ fontSize: "2.8rem" }} />,
        link: "/features/qr_barcoding",
      },

      {
        title: "Reporting & Analytics",
        desc: "Generate insights on sales, stock movement, and performance.",
        icon: <BarChartOutlinedIcon style={{ fontSize: "2.8rem" }} />,
        link: "/features/reporting-analytics",
      },
    ],
  };

  return (
    <div
      className="featureDrpdWrap fx-cl space"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="megafeaturesDropdwn space3">
        {/* LEFT CONTENT */}
        <div className="featureBanner">
          <img src={FeatureImage} alt="dashboard preview" />
        </div>

        {/* RIGHT SIDE */}
        <div className="fx-cl space2">
          <div
            className="fx-ac fx-jb space2"
            style={{ borderBottom: "1px solid #eee", paddingBottom: "2rem" }}
          >
            <h3 className="fs5">Explore our features</h3>
            <button
              className="exploreBtn fx-ac"
              onClick={() => redirect("/company/features")}
            >
              View all features <span>→</span>
            </button>
          </div>

          <div className="featuresItemsCont g g3 spacem">
            {featuresDropdownData.items.map((item, i) => (
              <div
                onClick={() => redirect(item.link)}
                key={i}
                className="featuresDropdwnCard fx-as space1"
              >
                <div className="fx-cl spacem">
                  <div className="fx-ac space1">
                    <div className="featuresDropdwnIcon fx-ac fx-jc">
                      <span className="fs6 fx-ac fx-jc">{item.icon}</span>
                    </div>

                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="fx-ac space2">
            <span className="featuresDropdwnLabel">
              Don't see the feature you're looking for?
            </span>
            <button className="exploreBtn">
              View all features here <span>→</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
