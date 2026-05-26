import "./solutionDropdown.css";
import { useNavigate } from "react-router-dom";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export default function SolutionDropdown({ setOpenIndex }) {
  const redirect = useNavigate();
  const solutionsDropdwnData = [
    {
      section: "Solutions",
      class: "solutionsSection",
      items: [
        {
          title: "Inventory Management",
          desc: "Manage, organize, and track all your business’s inventory.",
          icon: <InventoryOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/inventory_management",
        },
        {
          title: "Supplies Tracking",
          desc: "Track the supplies, materials, and parts your business uses.",
          icon: <LocalShippingOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/supplies_tracking",
        },
        // {
        //   title: "Mobile App & Real-Time Notifications",
        //   desc: "Monitor sales, stock updates, and receive instant notifications when staff sell products in real time.",
        //   icon: (
        //     <NotificationsActiveOutlinedIcon style={{ fontSize: "2.8rem" }} />
        //   ),
        //   link: "/solutions/mobile_notifications",
        // },
        {
          title: "Asset Tracking",
          desc: "Track tools, equipment, and other high-value assets with ease.",
          icon: <ConstructionOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/asset_tracking",
        },
      ],
    },

    {
      section: "Industries",
      class: "industriesSection",
      items: [
        {
          title: "Pharmacy & Chemist",
          desc: "Seamlessly manage medical supplies & equipment on-the-go.",
          icon: <MedicalServicesOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/industries/healthcare/pharmacy_chemist",
        },
        {
          title: "Wholesale & Distribution",
          desc: "Optimize order fulfillment across your distribution network.",
          icon: <WarehouseOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/industries/wholesale_distribution",
        },
        {
          title: "Provision Store",
          desc: "Track inventory across multiple store locations with ease.",
          icon: <SchoolOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/industries/provision_store",
        },
        {
          title: "Electronics Store",
          desc: "Easily track electronic supplies & tools across all jobs.",
          icon: (
            <ElectricalServicesOutlinedIcon style={{ fontSize: "2.8rem" }} />
          ),
          link: "/solutions/industries/electronics",
        },
        {
          title: "Furnitures",
          desc: "Track inventory across multiple store locations with ease.",
          icon: <WeekendOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/industries/furnitures",
        },

        {
          title: "Building Materials",
          desc: "Manage construction inventory and tools across all job sites.",
          icon: <FoundationOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/solutions/industries/construction/building_materials",
        },
      ],
    },
  ];
  return (
    <div
      className="solutionsDrpdWrap fx-cl space"
      onMouseLeave={() => setOpenIndex(null)}
    >
      {/* <div
        className="fx-ac fx-jb space2"
        style={{ borderBottom: "1px solid #eee", paddingBottom: "2rem" }}
      >
        <h3 className="fs5">Explore our solutions</h3>
        <button className="exploreBtn">
          View all solutions <span>→</span>
        </button>
      </div> */}

      <div className="megasolutionsDropdwn space3">
        {/* LEFT CONTENT */}
        <div className="fx-cl space3">
          <div className="solutionsItemsCont space3">
            {solutionsDropdwnData.map((group, index) => (
              <div key={index} className="fx-cl spacem">
                <span className="solutionsDropdwnLabel">{group.section}</span>

                {group.description && (
                  <p className="solutionsDropdwnDescription">
                    {group.description}
                  </p>
                )}

                <div className={`fx-cl spacem ${group.class || ""} `}>
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className={`solutionsDropdwnCard fx-as space1`}
                      onClick={() => redirect(item.link)}
                    >
                      <div className="solutionsDropdwnIcon fx-ac fx-jc">
                        <span className="fs7">{item.icon}</span>
                      </div>

                      <div className="fx-cl spacem">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="fx-ac fx-jb space5">
            <div className="fx-ac fx-jb space2">
              <span className="fs2">Don't see your industry?</span>
              <button
                className="exploreBtn fs2"
                onClick={() => redirect("/solutions/all-solutions")}
              >
                View all solutions <span>→</span>
              </button>
            </div>
            <button
              className="exploreBtn"
              onClick={() => redirect("/solutions/industries")}
            >
              View all industries <span>→</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="promoCard fx-cl space1">
          <div className="fx-cl spacem">
            <h3>Introducing new dashboards</h3>

            <p>Turn complex data into clear and beautiful visuals.</p>
          </div>

          <div className="videoPreview">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="dashboard preview"
            />

            <div className="playBtn">▶</div>
          </div>

          <button className="promoBtn">
            See what's new <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
