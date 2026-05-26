import { useNavigate } from "react-router-dom";

import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import WifiOffOutlinedIcon from "@mui/icons-material/WifiOffOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import Header from "../home-page/home-comps/Header";
import Footer from "../home-page/home-comps/Footer";

export default function CompanyFeatures() {
  const redirect = useNavigate();
  const featuresData = [
    {
      section: "Organize",
      description:
        "Organize your inventory and team for smooth business operations.",
      class: "organizeSection",
      items: [
        {
          title: "Items Management",
          desc: "Add, edit, and track all your inventory items with custom details.",
          icon: <InventoryOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/items_management",
        },
        {
          title: "Inventory Import",
          desc: "Upload existing spreadsheets and instantly populate your inventory.",
          icon: <UploadFileOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/inventory_import",
        },
        {
          title: "Item Photos",
          desc: "Attach images to items to track condition and appearance.",
          icon: <ImageOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/item_photos",
        },
        {
          title: "Inventory Lists",
          desc: "View full inventory summary in a clean, organized list.",
          icon: <ListAltOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/inventory_lists",
        },
        {
          title: "Team Access",
          desc: "Invite staff and manage inventory together as a team.",
          icon: <GroupOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/team_access",
        },
      ],
    },

    {
      section: "Customize",
      description: "Customize your system to match your business structure.",
      class: "customizeSection",
      items: [
        {
          title: "Custom Fields",
          desc: "Add unique data fields for your inventory items.",
          icon: <TuneOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/custom_fields",
        },
        {
          title: "Custom Folders",
          desc: "Organize inventory into flexible folder structures.",
          icon: <FolderOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/custom_folders",
        },
        {
          title: "Custom Tags",
          desc: "Tag items across categories for better filtering.",
          icon: <LocalOfferOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/custom_tags",
        },
        {
          title: "User Roles",
          desc: "Control access levels and permissions for staff.",
          icon: <SecurityOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/user_roles",
        },
        {
          title: "Custom Permissions",
          desc: "Define what each user can view, edit, or delete.",
          icon: <LockPersonOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/permissions",
        },
      ],
    },

    {
      section: "Manage",
      description: "Manage stock flow, sales, and inventory operations.",
      class: "manageSection",
      items: [
        {
          title: "Barcode Scanning",
          desc: "Scan products using mobile camera or barcode scanner.",
          icon: <QrCodeScannerOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/barcode_scanning",
        },
        {
          title: "QR Code Tracking",
          desc: "Generate and scan QR codes for faster tracking.",
          icon: <QrCode2OutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/qr_tracking",
        },
        {
          title: "Purchase Orders",
          desc: "Create and manage supplier purchase orders easily.",
          icon: <ReceiptLongOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/purchase_orders",
        },
        {
          title: "Check In / Check Out",
          desc: "Track item usage and returns within your business.",
          icon: <SwapHorizOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/check_in_out",
        },
      ],
    },

    {
      section: "Track & Update",
      description: "Stay updated with real-time inventory tracking.",
      class: "trackSection",
      items: [
        {
          title: "Low Stock Alerts",
          desc: "Get notified when stock levels are running low.",
          icon: (
            <NotificationsActiveOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/features/low_stock_alerts",
        },
        {
          title: "Offline Mode",
          desc: "Continue working even without internet connection.",
          icon: <WifiOffOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/offline_mode",
        },
        {
          title: "Auto Sync",
          desc: "Automatically sync inventory across all devices.",
          icon: <SyncOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/auto_sync",
        },
        {
          title: "Email Alerts",
          desc: "Receive stock and sales notifications via email.",
          icon: <EmailOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/email_alerts",
        },
      ],
    },

    {
      section: "Reports",
      description: "Analyze your business performance with powerful reports.",
      class: "reportSection",
      items: [
        {
          title: "Sales Reports",
          desc: "Track daily, weekly, and monthly sales performance.",
          icon: <BarChartOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/sales_reports",
        },
        {
          title: "Inventory Reports",
          desc: "View full stock summary and item movement history.",
          icon: <AssessmentOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/inventory_reports",
        },
        {
          title: "Activity Logs",
          desc: "Monitor all staff actions in the system.",
          icon: <HistoryOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/activity_logs",
        },
        {
          title: "Saved Reports",
          desc: "Save and reuse custom report filters anytime.",
          icon: <BookmarkOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/saved_reports",
        },
      ],
    },

    {
      section: "Integrations",
      description: "Connect your system with external tools and services.",
      class: "integrationSection",
      items: [
        {
          title: "API Access",
          desc: "Connect your app with our API for automation.",
          icon: <ApiOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/api",
        },
        {
          title: "QuickBooks Integration",
          desc: "Sync invoices and financial data with QuickBooks.",
          icon: <AccountBalanceOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/quickbooks",
        },
        {
          title: "Slack Notifications",
          desc: "Receive inventory updates directly in Slack.",
          icon: <ChatOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/slack",
        },
        {
          title: "Webhooks",
          desc: "Automate workflows using event-based triggers.",
          icon: <WebhookOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/features/webhooks",
        },
      ],
    },
  ];
  return (
    <section className="companyFeaturesPage fx-cl fx-ac space6">
      <Header />
      {/* ================= FEATURES ================= */}
      <div
        className="sectionBlock fx-cl pdlargeX space6"
        style={{ maxWidth: "130rem" }}
      >
        <div className="fx-cl spacem">
          <h2 className="fs6 fw600">Features</h2>
          <p className="fs4">
            Detailed tools and functionalities that power the system.
          </p>
        </div>

        {featuresData.map((group, index) => (
          <div key={index} className={`fx-cl space4 ${group.class || ""}`}>
            <span className="fs5 fw500">{group.section}</span>

            <div className="g g3 space2">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="solutionsDropdwnCard fx-as space2 cp"
                  onClick={() => redirect(item.link)}
                >
                  <div className="fx-ac fx-jc">
                    <span className="fs7">{item.icon}</span>
                  </div>

                  <div className="fx-cl spacem">
                    <h4 className="fs5 fw500">{item.title}</h4>
                    <p className="fs4">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
