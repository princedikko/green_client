import { useNavigate } from "react-router-dom";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../home-page/home-comps/Header";
import Footer from "../home-page/home-comps/Footer";

export default function SolutionsCategories() {
  const redirect = useNavigate();
  const solutionsDropdownData = [
    {
      section: "Solutions",
      class: "solutionsSection",
      items: [
        {
          title: "Inventory Management",
          desc: "Track, organize, and manage all your business inventory easily.",
          icon: <InventoryOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/inventory_management",
        },
        {
          title: "Mobile App",
          desc: "Manage inventory, sales, and business operations anytime using the mobile app.",
          icon: <PhoneIphoneOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/mobile_app",
        },

        {
          title: "Real-Time Notifications",
          desc: "Receive instant alerts whenever staff sell products or inventory changes occur.",
          icon: (
            <NotificationsActiveOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/solutions/realtime_notifications",
        },
        {
          title: "Asset Tracking",
          desc: "Track tools, equipment, vehicles, and company assets efficiently.",
          icon: <ConstructionOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/asset_tracking",
        },

        {
          title: "Supplies & Consumables",
          desc: "Manage supplies, materials, and consumable inventory with ease.",
          icon: <LocalShippingOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/supplies_consumables",
        },

        {
          title: "Selling",
          desc: "Track products, stock levels, and customer sales operations.",
          icon: <PointOfSaleOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/selling",
        },

        {
          title: "Home Inventory",
          desc: "Organize and track personal belongings and household items.",
          icon: <HomeOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/home_inventory",
        },

        {
          title: "Industries",
          desc: "Explore inventory solutions tailored to your business industry.",
          icon: <BusinessCenterOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/industries",
        },

        {
          title: "Mobile Inventory Tracking",
          desc: "Manage inventory anywhere using mobile inventory tools.",
          icon: <PhoneIphoneOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/mobile_inventory",
        },

        {
          title: "Barcoding",
          desc: "Generate and scan barcodes for faster inventory management.",
          icon: <QrCodeScannerOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/barcoding",
        },
        {
          title: "Qr Code",
          desc: "Generate and scan QR codes for faster inventory management.",
          icon: <QrCodeScannerOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/qr_code",
        },

        {
          title: "Warehouse Management",
          desc: "Monitor warehouse stock, transfers, and storage locations.",
          icon: <WarehouseOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/warehouse_management",
        },

        {
          title: "Order Management",
          desc: "Track customer orders, purchases, and fulfillment processes.",
          icon: <ReceiptLongOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/order_management",
        },

        {
          title: "Multi-Store Management",
          desc: "Manage inventory across multiple stores and business branches.",
          icon: (
            <StoreMallDirectoryOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/solutions/multi_store_management",
        },
        {
          title: "User Roles & Permissions",
          desc: "Control what staff can see and do across inventory, sales, and reports.",
          icon: <SecurityOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/roles_permissions",
        },

        {
          title: "Reporting & Analytics",
          desc: "Gain insights with inventory reports and business analytics.",
          icon: <AnalyticsOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/solutions/reporting_analytics",
        },
      ],
    },
  ];

  return (
    <section className="sectionSolutions fx-cl fx-ac space6">
      <Header />
      <div className="fx-cl pdlargeX space6" style={{ maxWidth: "130rem" }}>
        {solutionsDropdownData.map((group, index) => (
          <div key={index} className={`fx-cl space3 ${group.class || ""}`}>
            {/* Section Header */}
            <div className="fx-cl spacem">
              <span className="fs6 fw600">{group.section}</span>

              {group.description && <p className="fs4">{group.description}</p>}
            </div>

            {/* Items */}
            <div className="g g3 space2">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="solutionsDropdwnCard fx-as space2 cp"
                  onClick={() => redirect(item.link)}
                >
                  {/* Icon */}
                  <div className="fx-ac fx-jc solutionsIconWrapper">
                    <span>{item.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="fx-cl spacem">
                    <h4 className="fs5 fw500">{item.title}</h4>

                    {item.desc && <p className="fs4">{item.desc}</p>}
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
