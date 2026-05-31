// Public routes
import Test from "./test/Test";
import Home from "./components/public_directory/home-page/Home";
import PricingPage from "./components/public_directory/public-routs-comps/Pricing";

// _____________________________________________________________
import ClientsLogin from "./components/public_directory/public-routs-comps/logins/ClientsLogin";
import Registration from "./components/public_directory/public-routs-comps/Registration";
import Stafflogin from "./components/public_directory/public-routs-comps/logins/StaffLogin";
import Aboutus from "./components/public_directory/public-routs-comps/Aboutus";
import ContactUs from "./components/public_directory/public-routs-comps/Contactus";
import ExecutiveLogin from "./components/public_directory/public-routs-comps/logins/ExecutiveLogin";

// Admin routes
import AdminProfile from "./components/admin_directory/AdminProfile";
import ClientsAccount from "./components/clients-directory/ClientsAccount";
import WarehouseTerminal from "./components/clients-directory/clients-account-comps/point_of_sales_terminal/WarehouseTerminal";
import SystemAdminAccount from "./components/system_admin_directory/SystemAdminAccount";
import FinanceAccount from "./components/finance_directory/FinanceAccount";
import AgentAccount from "./components/agent_directory/AgentAccount";
import ExecutiveOfficer from "./components/directorate_of_chief_executive_officer/ExecutiveOfficer";
import AdminStaffLogin from "./components/public_directory/public-routs-comps/logins/AdminStaffLogin";
import FinanceLogin from "./components/public_directory/public-routs-comps/logins/FinanceLogin";
import AgentLogin from "./components/public_directory/public-routs-comps/logins/AgentLogin";
import SystemAdminLogin from "./components/public_directory/public-routs-comps/logins/SystemAdminLogin";
import AdminStaffAccount from "./components/staff_directory/AdminStaffAccount";
import CLIENTPrinting from "./components/clients-directory/clients-account-comps/printing/CLIENTPrinting";
import RealtimeDetailPage from "./components/public_directory/destination-pages/RealtimeDetailPage";
import IndustriesCategories from "./components/public_directory/destination-pages/IndustriesCategories";
import SolutionsCategories from "./components/public_directory/destination-pages/SolutionsCategories";
import CompanyFeatures from "./components/public_directory/destination-pages/CompanyFeatures";
import Enterprise from "./components/public_directory/Enterprise";
import MobileAppDetailPage from "./components/public_directory/destination-pages/MobileAppDetailPage";
import InventoryPhotosDetailPage from "./components/public_directory/destination-pages/InventoryPhotoDetailPage";
import AlertsDetailPage from "./components/public_directory/destination-pages/AlertsDetailPage";
import BarcodeQrCodeDetailPage from "./components/public_directory/destination-pages/BarQrCodeDetailPage";
import ReportingAnalyticsDetailPage from "./components/public_directory/destination-pages/ReportingAnalyticsDetailPage";
import InventoryManagementDetailPage from "./components/public_directory/destination-pages/InventoryManagementDetailPage";
import SuppliesConsumablesDetailPage from "./components/public_directory/destination-pages/SuppliesConsumablesDetailPage";
import AssetTrackingDetailPage from "./components/public_directory/destination-pages/AssetTrackingDetailPage";
import PharmacyChemistDetailPage from "./components/public_directory/destination-pages/PharmacyChemistDetailPage";
import BuildingMaterialsDetailPage from "./components/public_directory/destination-pages/BuildingMaterialsDetailPage";
import ProvisionStoreDetailPage from "./components/public_directory/destination-pages/ProvisionStoreDetailPage";
import FurnituresDetailPage from "./components/public_directory/destination-pages/FurnituresDetailPage";
import ElectronicsDetailPage from "./components/public_directory/destination-pages/ElectronicsDetailPage";
import WholesaleDetailPage from "./components/public_directory/destination-pages/WholesaleDetailPage";
import AccountContext from "./components/clients-directory/client-account-pages/AccountsContext";
import RegAdditionalSetup from "./components/public_directory/public-routs-comps/registrationformComp/RegAdditionalSetup";

const greenRoutes = [
  // PUBLIC ROUTES
  { path: "/test", name: "home", element: <Test />, isPublic: true },
  { path: "/", name: "home", element: <Home />, isPublic: true },
  {
    path: "/information-technology/system-administration/login",
    name: "login",
    element: <SystemAdminLogin />,
    isPublic: true,
  },
  {
    path: "/executive/login",
    name: "Executive login",
    element: <ExecutiveLogin />,
    isPublic: true,
  },
  {
    path: "/pricing",
    name: "Pricing",
    element: <PricingPage />,
    isPublic: true,
  },

  // {
  //   path: "/clients_login",
  //   name: "login",
  //   element: <ClientsLogin />,
  //   isPublic: true,
  // },
  {
    path: "/clients_login",
    name: "login",
    element: <ClientsLogin />,
    isClientGuest: true,
  },

  {
    path: "/finance/finance_login",
    name: "",
    element: <FinanceLogin />,
    isPublic: true,
  },
  {
    path: "/agent_unit/login",
    name: "",
    element: <AgentLogin />,
    isPublic: true,
  },

  {
    path: "/staff_login",
    name: "staff login",
    element: <Stafflogin />,
    isPublic: true,
  },

  {
    path: "/about-us",
    name: "student_login",
    element: <Aboutus />,
    isPublic: true,
  },
  {
    path: "/contact-us",
    name: "sgin",
    element: <ContactUs />,
    isPublic: true,
  },
  {
    path: "/administration/admin_login",
    name: "admin staff_login",
    element: <AdminStaffLogin />,
    isPublic: true,
  },
  {
    path: "/enterprise",
    name: "Enterprise",
    element: <Enterprise />,
    isPublic: true,
  },
  // Destination PAGE ROUTES
  {
    path: "/company/features",
    name: "",
    element: <CompanyFeatures />,
    isPublic: true,
  },
  {
    path: "/solutions/industries",
    name: "",
    element: <IndustriesCategories />,
    isPublic: true,
  },
  {
    path: "/solutions/all-solutions",
    name: "",
    element: <SolutionsCategories />,
    isPublic: true,
  },
  {
    path: "/features/realtime_sales_tracking",
    name: "",
    element: <RealtimeDetailPage />,
    isPublic: true,
  },
  {
    path: "/features/mobile_application",
    name: "",
    element: <MobileAppDetailPage />,
    isPublic: true,
  },
  {
    path: "/features/inventory_photos",
    name: "",
    element: <InventoryPhotosDetailPage />,
    isPublic: true,
  },
  {
    path: "/features/alerts",
    name: "",
    element: <AlertsDetailPage />,
    isPublic: true,
  },
  {
    path: "/features/qr_barcoding",
    name: "",
    element: <BarcodeQrCodeDetailPage />,
    isPublic: true,
  },
  {
    path: "/features/reporting-analytics",
    name: "",
    element: <ReportingAnalyticsDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/inventory_management",
    name: "",
    element: <InventoryManagementDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/supplies_tracking",
    name: "",
    element: <SuppliesConsumablesDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/asset_tracking",
    name: "",
    element: <AssetTrackingDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/industries/healthcare/pharmacy_chemist",
    name: "",
    element: <PharmacyChemistDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/industries/construction/building_materials",
    name: "",
    element: <BuildingMaterialsDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/industries/provision_store",
    name: "",
    element: <ProvisionStoreDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/industries/electronics",
    name: "",
    element: <ElectronicsDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/industries/furnitures",
    name: "",
    element: <FurnituresDetailPage />,
    isPublic: true,
  },
  {
    path: "/solutions/industries/wholesale_distribution",
    name: "",
    element: <WholesaleDetailPage />,
    isPublic: true,
  },

  // ADMINISTRATION ROUTS
  {
    path: "/administration/admin-account",
    name: "Admin",
    element: <AdminProfile />,
    isAdmin: true,
  },

  {
    path: "/high_authority/executive_officer/dashboard/:id",
    name: "head of school",
    element: <ExecutiveOfficer />,
    // isExecutive: true,
    isPublic: true, //temporary
  },
  // SYSTEM ADMINISTRATION
  {
    path: "/website-management/system-adming/account",
    name: "head of school",
    element: <SystemAdminAccount />,
    // isSystemAdmin: true,
    isPublic: true, //temporary
  },

  // FINANCE ROUTES
  {
    path: "/school-management/finance/account",
    name: "head of school",
    element: <FinanceAccount />,
    // isFinance: true,
    isPublic: true, //temporary
  },
  // Agent ROUTES

  {
    path: "/school-management/agent/account",
    name: "Agent dashboards",
    element: <AgentAccount />,
    // isAgent: true,
    isPublic: true, //temporary
  },

  // STAFFS ROUTES

  {
    path: "/school-management/account/staff_profile",
    name: "StaffChat",
    element: <AdminStaffAccount />,
    // isStaff: true,
    isPublic: true,
  },

  // CLEINTS ROUTES
  {
    path: "/clients/:id/account",
    name: "clientDashboard",
    element: <ClientsAccount />,
    isClient: true,
  },
  {
    path: "/clients/warehouse_terminal",
    name: "POS_terminal",
    element: <WarehouseTerminal />,
    isClient: true,
  },
  {
    path: `/clients/:id/account/data_printing`,
    name: "POS_terminal",
    element: <CLIENTPrinting />,
    isClient: true,
  },
  {
    path: `/clients/:id/account/explore-account`,
    name: "POS_terminal",
    element: <AccountContext />,
    isClient: true,
  },

  {
    path: "/create_new_account",
    name: "student_apply",
    element: <Registration />,
    isPublic: true,
  },
  {
    path: "/account-created/:plan/:_id/client/:clientId",
    name: "student_apply",
    element: <RegAdditionalSetup />,
    isPublic: true,
  },
];

export default greenRoutes;
