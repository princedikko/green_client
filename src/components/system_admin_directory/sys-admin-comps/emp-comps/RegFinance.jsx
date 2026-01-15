export default function RegFinance() {
  const [financeData, setFinanceData] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    {
      // Personal Info
      passport: "",
      firstName: "",
      surName: "",
      otherName: "",
      genders: "",
      date_of_birth: "",
      marital_status: "",
      nationality: "",
      state_of_origin: "",
      lga_of_origin: "",
      home_address: "",
      state: "",
      lga: "",
      addresses: "",

      // Contact Info
      email_address: "",
      phone_No: "",

      // Documents
      document_uploaded: [],

      // Auth
      username: "",
      passwordHash: "",

      // Staff Profile
      staff_id: "",
      employment_type: "Full-time",
      date_employed: "",
      current_position: "Bursar", // or "Accounts Officer"
      department: "Finance Department",
      reporting_to: "Vice Administrative",
      years_of_service: "",

      // Finance Duties
      handled_sessions: [],
      payment_methods_supported: [],
      total_students_handled: 0,
      last_fee_update_date: "",
      last_fee_update_staff: "",

      // Emergency Contact
      emergency_contact_name: "",
      emergency_contact_relationship: "",
      emergency_contact_phone: "",
      emergency_contact_address: "",

      // System Fields
      agree: false,
      lastLogin: "",
    }
  );

  const financeDoc = {
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

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/finance`,
        financeDoc
      )
      .then((response) => {
        appData = response.data.data;
        if (response.status == 200) {
          executeCompleted();
          setSwitchForm(3);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return <section className="regSysadmin"></section>;
}
