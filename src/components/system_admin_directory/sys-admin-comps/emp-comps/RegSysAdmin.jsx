export default function RegSysAdmin() {
  const [sysAdminData, setSysAdminData] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    {
      // Personal Info
      passport: "",
      firstName: "",
      surName: "",
      otherName: "",
      genders: "",
      date_of_birth: "",
      nationality: "",
      state_of_origin: "",
      lga_of_origin: "",
      home_address: "",
      state: "",
      lga: "",
      addresses: "",
      marital_status: "",

      // Contact Info
      email_address: "",
      phone_No: "",

      // Documents
      document_uploaded: [],

      // Auth
      username: "",
      passwordHash: "",
      role: "System Admin",
      lastLogin: "",

      // Admin Duties
      assigned_units: [],
      privileges_level: "high",
      access_student_records: true,
      access_financial_records: true,
      access_academic_management: false,
      access_staff_management: true,

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

  const sysAdminDoc = {
    live: true,

    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: sysAdminData.passport,
      first_Name: sysAdminData.firstName,
      sur_Name: sysAdminData.surName,
      other_Name: sysAdminData.otherName,
      gender: sysAdminData.genders,
      Date_of_birth: sysAdminData.date_of_birth,
      marital_status: sysAdminData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: sysAdminData.nationality,
        State_of_origin: sysAdminData.state_of_origin,
        Local_Govt_Area: sysAdminData.lga_of_origin,
        line_address: sysAdminData.home_address,
      },
      contact_address: {
        state: sysAdminData.state,
        local_govt_area: sysAdminData.lga,
        address: sysAdminData.addresses,
      },
    },

    documents: sysAdminData.document_uploaded,

    contactInfo: {
      email: sysAdminData.email_address,
      phone_number: sysAdminData.phone_No,
    },

    auth: {
      username: sysAdminData.username || sysAdminData.email_address,
      passwordHash: sysAdminData.passwordHash,
      role: sysAdminData.role,
      permissions: [
        "manage_users",
        "view_reports",
        "update_settings",
        "create_staff",
        "assign_roles",
      ],
      lastLogin: sysAdminData.lastLogin,
    },

    adminDuties: {
      assigned_units: sysAdminData.assigned_units,
      privileges_level: sysAdminData.privileges_level,
      access_scope: {
        student_records: sysAdminData.access_student_records,
        financial_records: sysAdminData.access_financial_records,
        academic_management: sysAdminData.access_academic_management,
        staff_management: sysAdminData.access_staff_management,
      },
    },

    activityLogs: sysAdminData.activityLogs,

    emergencyContact: {
      name: sysAdminData.emergency_contact_name,
      relationship: sysAdminData.emergency_contact_relationship,
      phone: sysAdminData.emergency_contact_phone,
      address: sysAdminData.emergency_contact_address,
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

    terms_of_service: sysAdminData.agree,
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/system_admin`,
        sysAdminDoc
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
