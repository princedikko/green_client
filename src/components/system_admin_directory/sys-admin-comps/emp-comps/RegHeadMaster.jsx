export default function RegHeadMaster() {
  const [headMasterData, setHeadMasterData] = useReducer(
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
      role: "Head Master",
      lastLogin: "",

      // Staff Profile
      staff_id: "",
      date_employed: "",
      current_position: "Head Master",
      department: "Academic Affairs",
      reporting_to: "School Board",
      years_of_service: "",

      // Leadership Duties
      manages_classes: true,
      supervises_teachers: true,
      last_term_report_date: "",
      last_term_report_status: "",
      can_promote_students: true,
      can_assign_teachers: true,
      can_suspend_students: false,

      // Activity Logs
      activityLogs: [],

      // Emergency Contact
      emergency_contact_name: "",
      emergency_contact_relationship: "",
      emergency_contact_phone: "",
      emergency_contact_address: "",

      // System Fields
      agree: false,
    }
  );

  const hmDoc = {
    live: true,

    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: headMasterData.passport,
      first_Name: headMasterData.firstName,
      sur_Name: headMasterData.surName,
      other_Name: headMasterData.otherName,
      gender: headMasterData.genders,
      Date_of_birth: headMasterData.date_of_birth,
      marital_status: headMasterData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: headMasterData.nationality,
        State_of_origin: headMasterData.state_of_origin,
        Local_Govt_Area: headMasterData.lga_of_origin,
        line_address: headMasterData.home_address,
      },
      contact_address: {
        state: headMasterData.state,
        local_govt_area: headMasterData.lga,
        address: headMasterData.addresses,
      },
    },

    documents: headMasterData.document_uploaded,

    contactInfo: {
      email: headMasterData.email_address,
      phone_number: headMasterData.phone_No,
    },

    auth: {
      username: headMasterData.username || headMasterData.email_address,
      passwordHash: headMasterData.passwordHash,
      role: headMasterData.role,
      permissions: [
        "manage_teachers",
        "approve_admissions",
        "view_student_records",
        "submit_reports",
        "promote_students",
      ],
      lastLogin: headMasterData.lastLogin,
    },

    staffProfile: {
      staff_id: headMasterData.staff_id,
      date_employed: headMasterData.date_employed,
      current_position: headMasterData.current_position,
      department: headMasterData.department,
      reporting_to: headMasterData.reporting_to,
      years_of_service: headMasterData.years_of_service,
    },

    schoolLeadership: {
      manages_classes: headMasterData.manages_classes,
      supervises_teachers: headMasterData.supervises_teachers,
      term_reports: {
        last_submitted: headMasterData.last_term_report_date,
        status: headMasterData.last_term_report_status,
      },
      decision_maker: {
        can_promote_students: headMasterData.can_promote_students,
        can_assign_teachers: headMasterData.can_assign_teachers,
        can_suspend_students: headMasterData.can_suspend_students,
      },
    },

    activityLogs: headMasterData.activityLogs,

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
      name: headMasterData.emergency_contact_name,
      relationship: headMasterData.emergency_contact_relationship,
      phone: headMasterData.emergency_contact_phone,
      address: headMasterData.emergency_contact_address,
    },

    terms_of_service: headMasterData.agree,
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/head-master`,
        hmDoc
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
