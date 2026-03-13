// Public routes
import Test from "./test/Test";
import Home from "./components/public_directory/home-page/Home";

// _____________________________________________________________
import ClientsLogin from "./components/public_directory/public-routs-comps/logins/ClientsLogin";
import Registration from "./components/public_directory/public-routs-comps/Registration";
import Stafflogin from "./components/public_directory/public-routs-comps/logins/StaffLogin";
import Aboutus from "./components/public_directory/public-routs-comps/Aboutus";
import ContactUs from "./components/public_directory/public-routs-comps/Contactus";
import ExecutiveLogin from "./components/public_directory/public-routs-comps/logins/ExecutiveLogin";

// Admin routes
import AdminProfile from "./components/admin_directory/AdminProfile";
// Staffs routes
// Cleints routes
import ClientsAccount from "./components/clients-directory/ClientsAccount";
import WarehouseTerminal from "./components/clients-directory/clients-account-comps/point_of_sales_terminal/WarehouseTerminal";
// WEB REAL TIME COMMUNICAITON COMPONENTS
// COMPUTER BASE COMMUNICATION COMPONENTS
import SystemAdminAccount from "./components/system_admin_directory/SystemAdminAccount";
import FinanceAccount from "./components/finance_directory/FinanceAccount";
import AgentAccount from "./components/agent_directory/AgentAccount";
import ExecutiveOfficer from "./components/directorate_of_chief_executive_officer/ExecutiveOfficer";
import AdminStaffLogin from "./components/public_directory/public-routs-comps/logins/AdminStaffLogin";
import FinanceLogin from "./components/public_directory/public-routs-comps/logins/FinanceLogin";
import AgentLogin from "./components/public_directory/public-routs-comps/logins/AgentLogin";
import SystemAdminLogin from "./components/public_directory/public-routs-comps/logins/SystemAdminLogin";
import AdminStaffAccount from "./components/staff_directory/AdminStaffAccount";
import CLIENTPrinting from "./components/clients-directory/clients-account-comps/CLIENTPrinting";

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
    path: "/clients_login",
    name: "login",
    element: <ClientsLogin />,
    isPublic: true,
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
    path: "/create_new_account",
    name: "student_apply",
    element: <Registration />,
    isPublic: true,
  },
];

export default greenRoutes;
