export default function RegSecurity() {
  const [securityData, setSecurityData] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    {
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

      email_address: "",
      phone_No: "",

      document_uploaded: [],

      username: "",
      passwordHash: "",

      staff_id: "",
      employment_type: "Shift-based",
      date_employed: "",
      current_position: "Gate Officer",
      department: "Security Unit",
      reporting_to: "Vice Administrative",
      years_of_service: "",

      shift_type: "",
      monitored_zones: [],
      gate_log: [],
      incident_reports: [],

      emergency_contact_name: "",
      emergency_contact_relationship: "",
      emergency_contact_phone: "",
      emergency_contact_address: "",

      agree: false,
      lastLogin: "",
    }
  );

  const data = {
    live: true,
    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: securityData.passport,
      first_Name: securityData.firstName,
      sur_Name: securityData.surName,
      other_Name: securityData.otherName,
      gender: securityData.genders,
      Date_of_birth: securityData.date_of_birth,
      marital_status: securityData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: securityData.nationality,
        State_of_origin: securityData.state_of_origin,
        Local_Govt_Area: securityData.lga_of_origin,
        line_address: securityData.home_address,
      },
      contact_address: {
        state: securityData.state,
        local_govt_area: securityData.lga,
        address: securityData.addresses,
      },
    },

    contactInfo: {
      email: securityData.email_address,
      phone_number: securityData.phone_No,
    },

    documents: securityData.document_uploaded,

    auth: {
      username: securityData.username,
      passwordHash: securityData.passwordHash,
      role: "Security",
      sub_role: securityData.current_position,
      permissions: [
        "log_student_exit",
        "log_visitor_entry",
        "report_incidents",
        "track_lost_found",
        "record_gate_duty",
      ],
      lastLogin: securityData.lastLogin,
    },

    staffProfile: {
      staff_id: securityData.staff_id,
      employment_type: securityData.employment_type,
      date_employed: securityData.date_employed,
      current_position: securityData.current_position,
      department: securityData.department,
      reporting_to: securityData.reporting_to,
      years_of_service: securityData.years_of_service,
    },

    securityDuties: {
      shift_type: securityData.shift_type,
      monitored_zones: securityData.monitored_zones,
      gate_log: securityData.gate_log,
      incident_reports: securityData.incident_reports,
    },

    emergencyContact: {
      name: securityData.emergency_contact_name,
      relationship: securityData.emergency_contact_relationship,
      phone: securityData.emergency_contact_phone,
      address: securityData.emergency_contact_address,
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

    terms_of_service: securityData.agree,

    // 🔒 Sample Permissions for role: Security
    //     | Field              | Purpose                                                  |
    // | ------------------ | -------------------------------------------------------- |
    // | `gate_log`         | Record entries and exits of students/visitors            |
    // | `incident_reports` | For any suspicious behavior or security concern          |
    // | `monitored_zones`  | Areas the staff is responsible for                       |
    // | `shift_type`       | "Morning Shift", "Afternoon", "Night"                    |
    // | `access_scope`     | Not needed (security has limited view rights by default) |
  };
  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/security`,
        data
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
