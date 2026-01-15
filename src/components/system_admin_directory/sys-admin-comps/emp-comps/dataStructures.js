// ⚙️ Suggested Implementation Notes:
// Store sub_role in your database to help filter role-specific dashboards.

// Use access_scope to dynamically control visibility of menus or pages.

// Role-based routing and permissions can be handled in React with something like:
if (
  user.auth.sub_role === "Bursar" &&
  user.auth.permissions.includes("view_fee_payments")
) {
  // show finance dashboard
}

// ✅ Updated System Admin MongoDB Document:
const sysadmin = {
  live: true,
  account_status: {
    registration_status: "approved", // or "pending", "suspended"
    paymentStatus: "n/a", // not applicable for system admins
    reference_number: null,
  },

  personalInfo: {
    passport: passport, // file or base64 string
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  documents: document_uploaded, // Optional admin verification docs

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  auth: {
    username: email_address, // or use a username field
    passwordHash: "hashed_password_here",
    role: "System Admin", // or "Admin", "Super Admin"
    permissions: [
      "manage_users",
      "view_reports",
      "update_settings",
      "create_staff",
      "assign_roles",
    ],
    lastLogin: new Date().toISOString(),
  },

  adminDuties: {
    assigned_units: ["Admissions", "IT Department"],
    privileges_level: "high", // low / medium / high / super
    access_scope: {
      student_records: true,
      financial_records: true,
      academic_management: false,
      staff_management: true,
    },
  },

  activityLogs: [
    {
      activity: "Created a new student record",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Updated school session settings",
      timestamp: new Date().toISOString(),
    },
  ],

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  terms_of_service: agree,
};

// ✅ MongoDB Document for Primary School Head Master:
const hm = {
  live: true,
  account_status: {
    registration_status: "approved", // pending, approved, suspended
    paymentStatus: "n/a", // not applicable
    reference_number: null,
  },

  personalInfo: {
    passport: passport, // file or base64 string
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  documents: document_uploaded, // ID card, appointment letter, etc.

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  auth: {
    username: email_address, // or custom username
    passwordHash: "hashed_password_here",
    role: "Head Master",
    permissions: [
      "manage_teachers",
      "approve_admissions",
      "view_student_records",
      "submit_reports",
      "promote_students",
    ],
    lastLogin: new Date().toISOString(),
  },

  staffProfile: {
    staff_id: "PRI/HM/2025/0001",
    date_employed: "2023-09-01",
    current_position: "Head Master",
    department: "Academic Affairs",
    reporting_to: "School Board",
    years_of_service: 2,
  },

  schoolLeadership: {
    manages_classes: true,
    supervises_teachers: true,
    term_reports: {
      last_submitted: "2025-06-28",
      status: "Complete",
    },
    decision_maker: {
      can_promote_students: true,
      can_assign_teachers: true,
      can_suspend_students: false,
    },
  },

  activityLogs: [
    {
      activity: "Approved admission for 25 students",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Assigned class teachers for 2025/2026",
      timestamp: new Date().toISOString(),
    },
  ],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,
};

// ✅ MongoDB Document Structure: Admin Staff (Generic)

const adminStaff = {
  live: true,
  account_status: {
    registration_status: "approved", // pending / approved / suspended
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: passport,
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  documents: document_uploaded, // Staff ID, posting letter, etc.

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  auth: {
    username: email_address,
    passwordHash: "hashed_password_here",
    role: "Admin Staff",
    sub_role: "Examiner", // "Vice Academic", "Registrar", etc.
    permissions: [], // Filled below per role
    lastLogin: new Date().toISOString(),
  },

  staffProfile: {
    staff_id: "PRI/ADM/2025/0023",
    employment_type: "Full-time",
    date_employed: "2023-01-15",
    department: "Academic Unit",
    current_position: "Examiner",
    reporting_to: "Head Master",
    years_of_service: 2,
  },

  adminDuties: {
    responsibilities: [
      "collate_exam_results",
      "moderate_assessments",
      "generate_report_cards",
    ],
    access_scope: {
      student_records: true,
      staff_records: false,
      result_management: true,
      admission_portal: false,
    },
  },
  // 📌 Sample permissions per Sub-Role:
  // 🔹 Examiner
  // permissions: [
  //   "create_exam_questions",
  //   "collate_exam_results",
  //   "view_student_scores",
  //   "print_report_cards"
  // ]
  // 🔹 Vice Academic
  // permissions: [
  //   "manage_teachers",
  //   "assign_class_duties",
  //   "review_academic_reports",
  //   "promote_students",
  //   "view_all_student_records"
  // ]
  // 🔹 Vice Administrative
  // permissions: [
  //   "handle_staff_leaves",
  //   "approve_internal_requests",
  //   "schedule_staff_meetings"
  // ]
  // 🔹 Registrar
  // permissions: [
  //   "register_students",
  //   "approve_admissions",
  //   "issue_admission_letters",
  //   "generate_admission_statistics"
  // ]
  // 🔹 Bursar
  // permissions: [
  //   "view_fee_payments",
  //   "update_payment_status",
  //   "generate_financial_reports",
  //   "manage_other_payments"
  // ]

  activityLogs: [
    {
      activity: "Uploaded Second Term result for Primary 3",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Moderated mathematics exam questions",
      timestamp: new Date().toISOString(),
    },
  ],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,
};

// ✅ MongoDB Document Structure: Teacher
const teacher = {
  live: true,
  account_status: {
    registration_status: "approved", // or pending, suspended
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: passport,
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  documents: document_uploaded, // Appointment letter, credentials, etc.

  auth: {
    username: email_address, // or custom username
    passwordHash: "hashed_password_here",
    role: "Teacher",
    permissions: [
      "view_assigned_class",
      "record_attendance",
      "input_scores",
      "generate_term_reports",
    ],
    lastLogin: new Date().toISOString(),
  },

  staffProfile: {
    staff_id: "PRI/STAFF/2025/0045",
    employment_type: "Full-time",
    date_employed: "2022-08-10",
    current_position: "Class Teacher",
    assigned_class: "Primary 3B", // Class teacher’s primary class
    subjects_taught: ["English", "Basic Science"], // Can be one or more
    reporting_to: "Vice Academic",
    years_of_service: 3,
  },

  teachingDuties: {
    assigned_class: "Primary 3B",
    assigned_subjects: ["English", "Basic Science"],
    academic_session: "2025/2026",
    current_term: "First Term",
    responsibilities: [
      "Mark attendance",
      "Upload results",
      "Track student behavior",
    ],
    access_scope: {
      student_records: "partial", // full | partial | none
      result_entry: true,
      class_reports: true,
    },
  },

  activityLogs: [
    {
      activity: "Submitted First Term scores for Primary 3B",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Marked attendance for 28 students",
      timestamp: new Date().toISOString(),
    },
  ],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,
};

// ✅ MongoDB Document Structure: Parent
const parent = {
  live: true,
  account_status: {
    registration_status: "approved", // pending, approved
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: passport, // Optional passport photo
    full_Name: fullName,
    gender: genders,
    Date_of_birth: date_of_birth,
    marital_status: marital_status,
    occupation: "",
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
    alternative_phone: "",
    whatsapp_number: "",
  },

  auth: {
    username: email_address,
    passwordHash: "hashed_password_here",
    role: "Parent",
    permissions: [
      "view_child_records",
      "view_fees",
      "communicate_school",
      "update_profile",
    ],
    lastLogin: new Date().toISOString(),
  },

  children: [
    {
      student_id: "PRI/3B/25/0012",
      full_name: "Ahmed Yusuf",
      class: "Primary 3B",
      relationship: "Father",
      admission_status: "active",
    },
    {
      student_id: "PRI/2A/25/0044",
      full_name: "Zainab Yusuf",
      class: "Primary 2A",
      relationship: "Father",
      admission_status: "active",
    },
  ],

  linked_records: {
    fees: {
      total_due: 50000,
      total_paid: 35000,
      outstanding: 15000,
      last_payment_date: "2025-09-15",
    },
    academic_performance: [
      {
        student_id: "PRI/3B/25/0012",
        term: "First Term",
        session: "2025/2026",
        average: 72,
        remarks: "Good progress",
      },
    ],
    messages: [
      {
        title: "PTA Meeting Reminder",
        content: "You are invited to the PTA meeting scheduled...",
        date: "2025-10-02",
        read: false,
      },
    ],
  },

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,
};

// ✅ MongoDB Document Structure: Finance
const finance = {
  live: true,
  account_status: {
    registration_status: "approved",
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: financeData.passport,
    first_Name: financeData.firstName,
    sur_Name: financeData.surName,
    other_Name: financeData.otherName,
    gender: financeData.genders,
    Date_of_birth: financeData.date_of_birth,
    marital_status: financeData.marital_status,
    profile_picture: "",
    permanent_home_address: {
      Nationality: financeData.nationality,
      State_of_origin: financeData.state_of_origin,
      Local_Govt_Area: financeData.lga_of_origin,
      line_address: financeData.home_address,
    },
    contact_address: {
      state: financeData.state,
      local_govt_area: financeData.lga,
      address: financeData.addresses,
    },
  },

  contactInfo: {
    email: financeData.email_address,
    phone_number: financeData.phone_No,
  },

  documents: financeData.document_uploaded,

  auth: {
    username: financeData.username,
    passwordHash: financeData.passwordHash,
    role: "Finance",
    sub_role: financeData.current_position, // e.g., Bursar
    permissions: [
      "view_fees",
      "update_payment_status",
      "generate_financial_reports",
      "issue_receipts",
      "manage_other_payments",
    ],
    //   🔍 Permissions by Role Examples
    // 🔹 Bursar
    // permissions: [
    //   "view_fees",
    //   "issue_receipts",
    //   "export_term_reports",
    //   "mark_scholarship_status"
    // ]
    // 🔹 Accounts Officer
    // permissions: [
    //   "update_payment_status",
    //   "record_other_payments",
    //   "generate_payment_logs"
    // ]
    lastLogin: financeData.lastLogin,
  },

  staffProfile: {
    staff_id: financeData.staff_id,
    employment_type: financeData.employment_type,
    date_employed: financeData.date_employed,
    current_position: financeData.current_position,
    department: financeData.department,
    reporting_to: financeData.reporting_to,
    years_of_service: financeData.years_of_service,
  },

  financeDuties: {
    handled_sessions: financeData.handled_sessions,
    payment_methods_supported: financeData.payment_methods_supported,
    total_students_handled: financeData.total_students_handled,
    last_fee_update: {
      date: financeData.last_fee_update_date,
      staff: financeData.last_fee_update_staff,
    },
    access_scope: {
      student_payment_records: true,
      fee_structure_settings: true,
      academic_records: false,
    },
  },

  activityLogs: [],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: financeData.emergency_contact_name,
    relationship: financeData.emergency_contact_relationship,
    phone: financeData.emergency_contact_phone,
    address: financeData.emergency_contact_address,
  },

  terms_of_service: financeData.agree,
  //     📦 Sample financeDuties.access_scope Meaning:
  // Field	Meaning
  // student_payment_records	View individual payment history
  // fee_structure_settings	Edit fees or categories for each term
  // academic_records	Usually false, not needed for financial role
};

// ✅ MongoDB Document Structure: Librarian
const liberian = {
  live: true,
  account_status: {
    registration_status: "approved",
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: passport,
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    marital_status: marital_status,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  documents: document_uploaded, // Optional: ID, employment letter, etc.

  auth: {
    username: email_address,
    passwordHash: "hashed_password_here",
    role: "Librarian",
    permissions: [
      "manage_book_inventory",
      "issue_books",
      "track_borrowed_books",
      "send_return_reminders",
      "view_student_library_records",
    ],
    lastLogin: new Date().toISOString(),
  },

  staffProfile: {
    staff_id: "PRI/LIB/2025/0060",
    employment_type: "Full-time",
    date_employed: "2022-03-05",
    current_position: "Library Officer",
    department: "Library",
    reporting_to: "Vice Academic",
    years_of_service: 3,
  },

  libraryDuties: {
    book_inventory_count: 1340,
    active_borrowed_books: 76,
    overdue_returns: 5,
    library_opening_hours: {
      weekdays: "8:00 AM - 3:00 PM",
      weekends: "Closed",
    },
    access_scope: {
      manage_books: true,
      view_borrowing_history: true,
      student_profiles: false,
    },
  },

  activityLogs: [
    {
      activity: "Issued 'Science Made Easy' to student PRI/3B/25/0012",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Added 20 new books to the inventory",
      timestamp: new Date().toISOString(),
    },
  ],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,
};

// ✅ MongoDB Document Structure: Transport Staff
const transport = {
  live: true,
  account_status: {
    registration_status: "approved",
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: passport,
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    marital_status: marital_status,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  documents: document_uploaded, // Optional: license, appointment, etc.

  auth: {
    username: email_address,
    passwordHash: "hashed_password_here",
    role: "Transport Staff",
    sub_role: "Transport Manager", // e.g., "Driver Supervisor"
    permissions: [
      "manage_transport_routes",
      "assign_students_to_buses",
      "update_vehicle_status",
      "record_daily_pickups",
      "track_bus_payments",

      // 🚌 Sample Permissions by Sub-Role
      // 🔹 Transport Manager
      // permissions: [
      //   "manage_transport_routes",
      //   "assign_students_to_buses",
      //   "view_bus_reports",
      //   "update_vehicle_status"
      // ]
      // 🔹 Driver Supervisor
      // permissions: [
      //   "record_daily_pickups",
      //   "track_attendance_on_bus",
      //   "update_driver_assignment"
      // ]
      // 🔹 Transport Admin Clerk
      // permissions: [
      //   "track_bus_payments",
      //   "print_transport_receipts",
      //   "assist_with_bus_registration"
      // ]
    ],
    lastLogin: new Date().toISOString(),
  },

  staffProfile: {
    staff_id: "PRI/TRANS/2025/0071",
    employment_type: "Full-time",
    date_employed: "2023-01-12",
    current_position: "Transport Manager",
    department: "Transport Department",
    reporting_to: "Vice Administrative",
    years_of_service: 2,
  },

  transportDuties: {
    total_buses: 5,
    active_routes: ["Route A", "Route B", "Route C"],
    students_served: 134,
    last_route_update: {
      date: "2025-07-08",
      staff: "Transport Manager",
    },
    access_scope: {
      view_students_on_route: true,
      assign_vehicles: true,
      payment_tracking: true,
      academic_records: false,
    },
  },

  dailyTransportLog: [
    {
      date: "2025-07-09",
      route: "Route A",
      driver: "Usman Bello",
      vehicle_number: "SCH-BUS-03",
      students_onboard: 28,
      pickup_status: "Completed",
      dropoff_status: "Completed",
    },
    {
      date: "2025-07-09",
      route: "Route B",
      driver: "John Amos",
      vehicle_number: "SCH-BUS-01",
      students_onboard: 24,
      pickup_status: "Completed",
      dropoff_status: "Pending",
    },
  ],

  activityLogs: [
    {
      activity: "Assigned 18 students to Route C",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Updated status for Bus SCH-BUS-02",
      timestamp: new Date().toISOString(),
    },
  ],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,

  //     | Field               | Purpose                                                  |
  // | ------------------- | -------------------------------------------------------- |
  // | `transportDuties`   | Describes routes, buses, and access                      |
  // | `dailyTransportLog` | Tracks daily trip reports                                |
  // | `access_scope`      | Limits visibility (e.g., no access to student academics) |
  // | `students_served`   | Tracks total students using transport service            |
};

//✅ MongoDB Document Structure: Guidance & Counselling Staff
const gandc = {
  live: true,
  account_status: {
    registration_status: "approved",
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: passport,
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    marital_status: marital_status,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  documents: document_uploaded, // e.g., counseling certificate, appointment letter

  auth: {
    username: email_address,
    passwordHash: "hashed_password_here",
    role: "Counselor",
    permissions: [
      "view_student_behavior_records",
      "log_counseling_sessions",
      "refer_students",
      "send_behavior_alerts",
      "access_confidential_notes",
    ],
    lastLogin: new Date().toISOString(),
  },

  staffProfile: {
    staff_id: "PRI/GNC/2025/0081",
    employment_type: "Full-time",
    date_employed: "2022-02-01",
    current_position: "School Counselor",
    department: "Guidance & Counselling",
    reporting_to: "Vice Academic",
    years_of_service: 3,
  },

  counselingDuties: {
    sessions_conducted: 105,
    student_referrals: 18,
    support_categories: [
      "Academic Challenges",
      "Bullying & Peer Conflict",
      "Family Issues",
      "Emotional Support",
    ],
    confidentiality_level: "high",
    access_scope: {
      behavior_reports: true,
      academic_performance: "limited",
      health_status: false,
      financial_records: false,
    },
  },

  sessionLogs: [
    {
      student_id: "PRI/2B/25/0071",
      topic: "Bullying Incident",
      date: "2025-06-15",
      session_notes:
        "Student was calm but emotional. Will follow up next week.",
      action_taken: "Spoke with class teacher and parent",
    },
    {
      student_id: "PRI/3A/25/0023",
      topic: "Academic Stress",
      date: "2025-07-01",
      session_notes:
        "Student reported test anxiety. Recommended time management practice.",
      action_taken: "Referred to class teacher for support",
    },
  ],

  activityLogs: [
    {
      activity: "Logged behavioral support session for Primary 2B",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Referred student PRI/3A/25/0023 for external assessment",
      timestamp: new Date().toISOString(),
    },
  ],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,
};

// ✅ MongoDB Document Structure: Security Staff
const security = {
  live: true,
  account_status: {
    registration_status: "approved",
    paymentStatus: "n/a",
    reference_number: null,
  },

  personalInfo: {
    passport: passport,
    first_Name: firstName,
    sur_Name: surName,
    other_Name: otherName,
    gender: genders,
    Date_of_birth: date_of_birth,
    marital_status: marital_status,
    profile_picture: "",
    permanent_home_address: {
      Nationality: nationality,
      State_of_origin: state_of_origin,
      Local_Govt_Area: lga_of_origin,
      line_address: home_address,
    },
    contact_address: {
      state: state,
      local_govt_area: lga,
      address: addresses,
    },
  },

  contactInfo: {
    email: email_address,
    phone_number: phone_No,
  },

  documents: document_uploaded, // ID card, security training, appointment, etc.

  auth: {
    username: email_address,
    passwordHash: "hashed_password_here",
    role: "Security",
    sub_role: "Gate Officer", // or "Security Coordinator", "Night Guard"
    permissions: [
      "log_student_exit",
      "log_visitor_entry",
      "report_incidents",
      "track_lost_found",
      "record_gate_duty",
    ],
    lastLogin: new Date().toISOString(),
  },

  staffProfile: {
    staff_id: "PRI/SEC/2025/0092",
    employment_type: "Shift-based",
    date_employed: "2023-10-12",
    current_position: "Gate Officer",
    department: "Security Unit",
    reporting_to: "Vice Administrative",
    years_of_service: 2,
  },

  securityDuties: {
    shift_type: "Morning Shift",
    monitored_zones: ["Main Gate", "Perimeter Fence"],
    gate_log: [
      {
        student_id: "PRI/3B/25/0012",
        action: "Exit",
        date: "2025-07-09",
        time: "12:30 PM",
        authorized_by: "Parent",
      },
      {
        visitor_name: "Engr. Aliyu Bello",
        purpose: "PTA Meeting",
        date: "2025-07-09",
        time: "10:05 AM",
        status: "Checked-in",
      },
    ],
    incident_reports: [
      {
        title: "Unauthorized Exit Attempt",
        student_id: "PRI/2B/25/0054",
        description: "Student tried to leave without gate pass",
        date: "2025-07-08",
        status: "Reported",
      },
      {
        title: "Lost Item Recovered",
        item: "School Bag",
        found_by: "Cleaner",
        date: "2025-07-07",
      },
    ],
  },

  activityLogs: [
    {
      activity: "Logged 22 visitors and 3 early student exits",
      timestamp: new Date().toISOString(),
    },
    {
      activity: "Filed incident report for missing phone",
      timestamp: new Date().toISOString(),
    },
  ],

  history: {
    registered_date: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
    last_updated: {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    },
  },

  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },

  terms_of_service: agree,
};
