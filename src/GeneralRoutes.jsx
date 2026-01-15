// Public routes
import Test from "./test/Test";
import LibraryBooks from "./components/public_directory/library_routes/LibraryBooks";
import Home from "./components/public_directory/home-page/Home";

// _____________________________________________________________
import ClientsLogin from "./components/public_directory/public-routs-comps/logins/ClientsLogin";
import Registration from "./components/public_directory/public-routs-comps/Registration";
import Stafflogin from "./components/public_directory/public-routs-comps/logins/StaffLogin";
import Library from "./components/public_directory/public-routs-comps/Library";
import Aboutus from "./components/public_directory/public-routs-comps/Aboutus";
import ContactUs from "./components/public_directory/public-routs-comps/Contactus";
import AppLogDetail from "./components/admin_directory/admin_profile_comps/AppLogDetail";
import ApplicationGuide from "./components/public_directory/public-routs-comps/ApplicationGuide";
import ExecutiveLogin from "./components/public_directory/public-routs-comps/logins/ExecutiveLogin";
import ClientCBTExams from "./computer_base_assessment_components/computer_base_examination/student_components/ClientCBTExams";

// Admin routes
import AdminProfile from "./components/admin_directory/AdminProfile";
import AdmitDetails from "./components/admin_directory/admin_profile_comps/AdmitDetails";
import StudentData from "./components/admin_directory/admin_profile_comps/student/StudentData";
import ExaminationCard from "./components/admin_directory/admin_profile_comps/student/ExaminationCard";
import StudentInvoice from "./components/admin_directory/admin_profile_comps/student/StudentInvoice";
import AdmissionConfirmation from "./components/admin_directory/admin_profile_comps/student/AdmissionConfirmation";
// Staffs routes
// Cleints routes
import ClientsAccount from "./components/clients-directory/ClientsAccount";
import WarehouseTerminal from "./components/clients-directory/clients-account-comps/point_of_sales_terminal/WarehouseTerminal";
// WEB REAL TIME COMMUNICAITON COMPONENTS
import RTCDashBoards from "./real_time_communication_components/administration_rtc_comps/RTCDashBoards";
// COMPUTER BASE COMMUNICATION COMPONENTS
import CBTDashBoards from "./computer_base_assessment_components/computer_base_examination/administrative_components/CBTDashBoards";
import InstructorAccount from "./components/instructors_directory/InstructorAccount";
import ParentsAccount from "./components/parents_directory/ParentsAccount";
import SystemAdminAccount from "./components/system_admin_directory/SystemAdminAccount";
import FinanceAccount from "./components/finance_directory/FinanceAccount";
import AgentAccount from "./components/agent_directory/AgentAccount";
import ExecutiveOfficer from "./components/directorate_of_chief_executive_officer/ExecutiveOfficer";
import InstructorLogin from "./components/public_directory/public-routs-comps/logins/InstructorLogin";
import ParentLogin from "./components/public_directory/public-routs-comps/logins/ParentLogin";
import AdminStaffLogin from "./components/public_directory/public-routs-comps/logins/AdminStaffLogin";
import LabrarianLogin from "./components/public_directory/public-routs-comps/logins/LabrarianLogin";
import FinanceLogin from "./components/public_directory/public-routs-comps/logins/FinanceLogin";
import AgentLogin from "./components/public_directory/public-routs-comps/logins/AgentLogin";
import CounselorLogin from "./components/public_directory/public-routs-comps/logins/CounselorLogin";
import SystemAdminLogin from "./components/public_directory/public-routs-comps/logins/SystemAdminLogin";
import SecurityLogin from "./components/public_directory/public-routs-comps/logins/SecurityLogin";
import AdminStaffAccount from "./components/staff_directory/AdminStaffAccount";
import Employements from "./components/system_admin_directory/sys-admin-comps/Employements";
import ClientsCBTExamsLogin from "./computer_base_assessment_components/computer_base_examination/student_components/ClientsCBTExamsLogin";
import CLIENTPrinting from "./components/clients-directory/clients-account-comps/CLIENTPrinting";

const InstitutionalRoutes = [
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
    path: "/institution/instructor-login",
    name: "insturctor login",
    element: <InstructorLogin />,
    isPublic: true,
  },
  {
    path: "/learners/parent-login",
    name: "login",
    element: <ParentLogin />,
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
    path: "/how_to_apply",
    name: "applicaiton_guide",
    element: <ApplicationGuide />,
    isPublic: true,
  },

  {
    path: "/staff_login",
    name: "staff login",
    element: <Stafflogin />,
    isPublic: true,
  },
  {
    path: "/library",
    name: "student_login",
    element: <Library />,
    isPrivate: true,
  },

  {
    path: "/about-us",
    name: "student_login",
    element: <Aboutus />,
    isPublic: true,
  },
  {
    path: "/contact-us",
    name: "student_login",
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
    path: "/admin_profile/admit_detail/:id",
    name: "Admin",
    element: <AdmitDetails />,
    isAdmin: true,
  },
  {
    path: "/management/student_data/:adm",
    name: "Admin",
    element: <StudentData />,
    isAdmin: true,
  },
  {
    path: "/management/student_data/:adm/exams_card",
    name: "Admin",
    element: <ExaminationCard />,
    isAdmin: true,
  },
  {
    path: "/management/student_data/:adm/comfirmation_letter",
    name: "Admin",
    element: <AdmissionConfirmation />,
    isAdmin: true,
  },
  {
    path: "/management/student_data/:adm/invoice",
    name: "Admin",
    element: <StudentInvoice />,
    isAdmin: true,
  },
  {
    path: "/admin_profile/applicant_log/:id",
    name: "Admin",
    element: <AppLogDetail />,
    isAdmin: true,
  },

  // instructorS ROUTES

  {
    path: "/account/instructor",
    name: "StaffChat",
    element: <InstructorAccount />,
    // isinstructor: true,
    isPublic: true, //temporary
  },
  // instructorS ROUTES
  {
    path: "/account/parent",
    name: "StaffChat",
    element: <ParentsAccount />,
    // isParent: true,
    isPublic: true, //temporary
  },
  // HEAD OF SCHOOL
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
  {
    path: "/website-management/system-adming/employements",
    name: "head of school",
    element: <Employements />,
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

  // total ???pages

  // COMPUTER BASE ASSESSMENT
  {
    path: "/online_examination_system/:id/:programme",
    name: "cbt_signin",
    element: <ClientsCBTExamsLogin />,
    isClient: true,
  },
  {
    path: "/client_profile/assessment/exams/start_examination",
    name: "client_exams",
    element: <ClientCBTExams />,
    isClient: true,
  },
  {
    path: "/computer_base_test",
    name: "cbt",
    element: <CBTDashBoards />,
    isAdmin: true,
  },
  {
    path: "/real_time_communication",
    name: "rtc",
    element: <RTCDashBoards />,
    isAdmin: true,
  },

  // NEW SOFTWARE DEVELOPMENT PANE________________________________________________

  {
    path: "/create_new_account",
    name: "student_apply",
    element: <Registration />,
    isPublic: true,
  },
];

export default InstitutionalRoutes;
