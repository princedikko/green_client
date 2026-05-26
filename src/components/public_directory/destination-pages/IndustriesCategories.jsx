import { useNavigate } from "react-router-dom";
import "./industriesCategories.css";
import Header from "../home-page/home-comps/Header";
import Footer from "../home-page/home-comps/Footer";

// MATERIAL UI ICONS IMPORTS
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import HardwareOutlinedIcon from "@mui/icons-material/HardwareOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import ElectricMopedIcon from "@mui/icons-material/ElectricMoped";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

export default function IndustriesCategories() {
  const redirect = useNavigate();
  const industriesCategoriesData = [
    {
      section: "Retail Stores",
      class: "retailSection",
      items: [
        {
          title: "Malls & Shopping Centers",
          desc: "Manage diverse retail inventory across multiple stores and locations.",
          icon: (
            <LocalGroceryStoreOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/industries/provision_store",
        },
        {
          title: "Provision Store",
          desc: "Manage daily consumer goods and store inventory efficiently.",
          icon: <StorefrontOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/provision_store",
        },
        {
          title: "Cosmetics Store",
          desc: "Track beauty products, accessories, and store inventory with ease.",
          icon: <LocalMallOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/cosmetics_store",
        },
        {
          title: "Supermarket",
          desc: "Track products, sales, and stock across multiple aisles.",
          icon: <ShoppingCartOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/supermarket",
        },
        {
          title: "Boutique & Fashion",
          desc: "Organize clothing, footwear, and fashion accessories easily.",
          icon: <CheckroomOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/fashion",
        },
        {
          title: "Electronics Store",
          desc: "Track gadgets, accessories, and electronic inventory with ease.",
          icon: (
            <ElectricalServicesOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/industries/electronics",
        },
        {
          title: "Furniture Store",
          desc: "Manage furniture products, deliveries, and warehouse stock.",
          icon: <WeekendOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/furniture",
        },
        {
          title: "Phone & Computer Store",
          desc: "Monitor devices, accessories, and repair inventory efficiently.",
          icon: <DevicesOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/phone_computer",
        },
      ],
    },

    {
      section: "Medical & Health",
      class: "medicalSection",
      items: [
        {
          title: "Pharmacy & Chemist",
          desc: "Manage medicines, prescriptions, and medical supplies easily.",
          icon: <MedicalServicesOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/pharmacy",
        },
        {
          title: "Hospital & Clinic",
          desc: "Track medical equipment and healthcare inventory accurately.",
          icon: <LocalHospitalOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/hospital",
        },
      ],
    },

    {
      section: "Construction & Hardware",
      class: "constructionSection",
      items: [
        {
          title: "Building Materials",
          desc: "Track cement, iron rods, tools, and construction materials.",
          icon: <FoundationOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/building_materials",
        },
        {
          title: "Electrical Materials",
          desc: "Manage electrical tools, wires, and installation supplies.",
          icon: <BoltOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/electrical_materials",
        },
        {
          title: "Hardware Store",
          desc: "Organize tools, equipment, and maintenance supplies efficiently.",
          icon: <HardwareOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/hardware",
        },
      ],
    },

    {
      section: "Food & Hospitality",
      class: "foodSection",
      items: [
        {
          title: "Restaurant",
          desc: "Track kitchen ingredients, food stock, and supplies easily.",
          icon: <RestaurantOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/restaurant",
        },
        {
          title: "Bakery",
          desc: "Manage baking ingredients, production, and sales inventory.",
          icon: <BakeryDiningOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/bakery",
        },
        {
          title: "Hotel",
          desc: "Monitor hospitality supplies and operational inventory.",
          icon: <HotelOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/hotel",
        },
      ],
    },

    {
      section: "Warehouse & Distribution",
      class: "warehouseSection",
      items: [
        {
          title: "Warehouse",
          desc: "Track large-scale inventory and warehouse stock movement.",
          icon: <WarehouseOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/warehouse",
        },
        {
          title: "Wholesale & Distribution",
          desc: "Manage bulk inventory and distribution operations effectively.",
          icon: <LocalShippingOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/wholesale_distribution",
        },
      ],
    },

    {
      section: "Automobile & Transport",
      class: "automobileSection",
      items: [
        {
          title: "Automobile Parts",
          desc: "Track spare parts, vehicle tools, and automotive inventory.",
          icon: <DirectionsCarOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/automobile_parts",
        },
        {
          title: "Car Dealer",
          desc: "Manage vehicle inventory, sales, and dealership operations.",
          icon: <AirportShuttleOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/car_dealer",
        },
        {
          title: "Motorcycle Dealer",
          desc: "Track motorcycle inventory, parts, and dealership operations efficiently.",
          icon: <ElectricMopedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/motorcycle_dealer",
        },
        {
          title: "Bicycle Dealer",
          desc: " Manage bicycle inventory, parts, and dealership operations effectively.",
          icon: <DirectionsBikeIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/bicycle_dealer",
        },
      ],
    },

    {
      section: "Education & Office",
      class: "educationSection",
      items: [
        {
          title: "Bookshop",
          desc: "Organize books, educational materials, and store inventory.",
          icon: <MenuBookOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/bookshop",
        },
        {
          title: "Stationery",
          desc: "Manage office supplies, school materials, and accessories.",
          icon: <EditNoteOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/stationery",
        },
        {
          title: "Printing Press",
          desc: "Track printing materials, equipment, and customer orders & services.",
          icon: <PrintOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/printing_press",
        },
      ],
    },

    {
      section: "Manufacturing & Production",
      class: "manufacturingSection",
      items: [
        {
          title: "Water Factory",
          desc: "Manage production, packaging, and distribution inventory.",
          icon: <WaterDropOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/water_factory",
        },
        {
          title: "Bread Factory",
          desc: "Track raw materials, production processes, and finished goods inventory.",
          icon: <BreakfastDiningIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/bread_factory",
        },
        {
          title: "Manufacturing",
          desc: "Track raw materials, production processes, and finished goods.",
          icon: (
            <PrecisionManufacturingOutlinedIcon
              style={{ fontSize: "4.4rem" }}
            />
          ),
          link: "/industries/manufacturing",
        },
      ],
    },

    {
      section: "Agriculture & Farming",
      class: "agricultureSection",
      items: [
        {
          title: "Agriculture",
          desc: "Manage farming tools, produce, and agricultural inventory.",
          icon: <AgricultureOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/agriculture",
        },
        {
          title: "Poultry",
          desc: "Track poultry feeds, birds, medicines, and farm supplies.",
          icon: <EggOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/poultry",
        },
        {
          title: "Livestock",
          desc: "Monitor livestock feeds, medicines, and farming equipment.",
          icon: <PetsOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/livestock",
        },
      ],
    },

    {
      section: "Medical & Laboratory",
      class: "healthcareSection",
      items: [
        {
          title: "Hospital",
          desc: "Manage hospital equipment, medicines, and medical supplies.",
          icon: <LocalHospitalOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/hospital",
        },
        {
          title: "Clinic",
          desc: "Track healthcare inventory and clinic operational supplies.",
          icon: (
            <MedicalInformationOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/industries/clinic",
        },
        {
          title: "Laboratory",
          desc: "Organize laboratory equipment, chemicals, and test supplies.",
          icon: <ScienceOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/laboratory",
        },
      ],
    },

    {
      section: "Beauty & Personal Care",
      class: "beautySection",
      items: [
        {
          title: "Salon",
          desc: "Track beauty products, equipment, and salon supplies.",
          icon: <ContentCutOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/salon",
        },
        {
          title: "Barbershop",
          desc: "Manage grooming tools, products, and shop inventory.",
          icon: <FaceOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/barbershop",
        },
        {
          title: "Laundry",
          desc: "Track cleaning materials, customer items, and operations.",
          icon: (
            <LocalLaundryServiceOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/industries/laundry",
        },
      ],
    },

    {
      section: "Hospitality & Events",
      class: "hospitalitySection",
      items: [
        {
          title: "Hotel",
          desc: "Manage hospitality supplies, rooms, and operational inventory.",
          icon: <HotelOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/hotel",
        },
        {
          title: "Event Center",
          desc: "Track event equipment, decorations, and booking inventory.",
          icon: <CelebrationOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/event_center",
        },
      ],
    },

    {
      section: "Technology & Telecom",
      class: "technologySection",
      items: [
        {
          title: "POS Shop",
          desc: "Manage POS devices, accessories, and transaction supplies.",
          icon: <PointOfSaleOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/pos_shop",
        },
        {
          title: "ICT Center",
          desc: "Track ICT equipment, accessories, and digital inventory.",
          icon: <ComputerOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/ict_center",
        },
        {
          title: "Telecom Shop",
          desc: "Manage SIM cards, airtime devices, and telecom accessories.",
          icon: (
            <SettingsInputAntennaOutlinedIcon style={{ fontSize: "4.4rem" }} />
          ),
          link: "/industries/telecom_shop",
        },
      ],
    },

    {
      section: "General Business",
      class: "generalSection",
      items: [
        {
          title: "General Store",
          desc: "Track mixed inventory and manage everyday business operations.",
          icon: <StoreOutlinedIcon style={{ fontSize: "4.4rem" }} />,
          link: "/industries/general_store",
        },
      ],
    },
  ];

  return (
    <section className="sectionIndustries fx-cl fx-ac space6">
      <Header />
      <div className="fx-cl pd3 space6" style={{ maxWidth: "130rem" }}>
        {industriesCategoriesData.map((group, index) => (
          <div key={index} className="fx-cl spacem">
            <span className="fs6  ">{group.section}</span>

            {group.description && (
              <p className="fs4 pdlargeY pdlargeX ">{group.description}</p>
            )}

            <div className={`g g3 space2 ${group.class || ""} `}>
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className={`solutionsDropdwnCard fx-as space2`}
                  onClick={() => redirect(item.link)}
                >
                  <div className=" fx-ac fx-jc">
                    <span className="fs7">{item.icon}</span>
                  </div>

                  <div className="fx-cl spacem">
                    <h4 className="fs5 fw500">{item.title}</h4>
                    <p className="fs5 lh1">{item.desc}</p>
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
