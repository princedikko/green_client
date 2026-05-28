import { useNavigate } from "react-router-dom";
import "./learningDropdown.css";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export default function LearningDropdown({ setOpenIndex }) {
  const learningDropdownData = [
    {
      section: "Learning",
      class: "learningSection",
      items: [
        {
          title: "Getting Started",
          desc: "Learn how to set up your business, add staff, and configure your inventory system.",
          icon: (
            <PlayCircleOutlineOutlinedIcon style={{ fontSize: "2.8rem" }} />
          ),
          link: "/learning/getting_started",
        },

        {
          title: "Inventory Basics",
          desc: "Understand how to add products, categories, stock levels, and suppliers.",
          icon: <Inventory2OutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/inventory_basics",
        },

        {
          title: "POS System Guide",
          desc: "Learn how to sell products, generate receipts, and manage daily transactions.",
          icon: <PointOfSaleOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/pos_system",
        },

        {
          title: "Mobile Scanning",
          desc: "Use your phone camera to scan barcodes instead of physical scanners.",
          icon: <QrCodeScannerOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/mobile_scanning",
        },

        {
          title: "Stock Management",
          desc: "Track stock in real time, manage low stock alerts, and avoid shortages.",
          icon: <WarehouseOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/stock_management",
        },

        {
          title: "Sales & Reports",
          desc: "Analyze sales, profit, and performance using reports and dashboards.",
          icon: <BarChartOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/sales_reports",
        },

        {
          title: "Staff Management",
          desc: "Assign roles, control permissions, and monitor staff activities.",
          icon: <PeopleAltOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/staff_management",
        },

        {
          title: "Multi-Branch System",
          desc: "Learn how to manage multiple stores and warehouses in one system.",
          icon: <AccountTreeOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/multi_branch",
        },

        {
          title: "Mobile App Usage",
          desc: "Learn how to manage your business fully from your mobile app.",
          icon: <PhoneIphoneOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/learning/mobile_app",
        },

        {
          title: "Real-Time Notifications",
          desc: "Understand how alerts notify you instantly when sales or stock changes happen.",
          icon: (
            <NotificationsActiveOutlinedIcon style={{ fontSize: "2.8rem" }} />
          ),
          link: "/learning/notifications",
        },
      ],
    },
  ];
  const redirect = useNavigate();
  return (
    <section className="dropDownContent learningDrpdWrap ">
      <div className="fx-cl pd3 space6">
        {learningDropdownData.map((group, index) => (
          <div key={index} className={`fx-cl space4 ${group.class || ""}`}>
            {/* Section Title */}
            <div className="fx-cl spacem">
              <span className="fs6 fw600">{group.section}</span>

              {group.description && <p className="fs4">{group.description}</p>}
            </div>

            {/* Items Grid */}
            <div className="g g3 space2">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="learningDropdwnCard fx-as space2 cp"
                  onClick={() => redirect(item.link)}
                >
                  {/* Icon */}
                  <div className="fx-ac fx-jc">
                    <span className="fs7">{item.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="fx-cl spacem">
                    <h4 className="fs5 fw500">{item.title}</h4>

                    {item.desc && <p className="fs2 lh3">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
