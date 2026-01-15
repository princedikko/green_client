export default function RegAdminStaff() {
  const [adminStaffData, setAdminStaffData] = useReducer(
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
      current_position: "Administrative Officer", // or Vice Admin, Examiner, etc.
      department: "Administration",
      reporting_to: "Headmaster",
      years_of_service: "",

      // Admin Duties
      task_records: [],
      areas_of_responsibility: [],
      access_student_data: false,
      access_staff_data: false,
      admin_logbook: [],

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

  const adminStaffDoc = {
    live: true,
    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: adminStaffData.passport,
      first_Name: adminStaffData.firstName,
      sur_Name: adminStaffData.surName,
      other_Name: adminStaffData.otherName,
      gender: adminStaffData.genders,
      Date_of_birth: adminStaffData.date_of_birth,
      marital_status: adminStaffData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: adminStaffData.nationality,
        State_of_origin: adminStaffData.state_of_origin,
        Local_Govt_Area: adminStaffData.lga_of_origin,
        line_address: adminStaffData.home_address,
      },
      contact_address: {
        state: adminStaffData.state,
        local_govt_area: adminStaffData.lga,
        address: adminStaffData.addresses,
      },
    },

    contactInfo: {
      email: adminStaffData.email_address,
      phone_number: adminStaffData.phone_No,
    },

    documents: adminStaffData.document_uploaded,

    auth: {
      username: adminStaffData.username,
      passwordHash: adminStaffData.passwordHash,
      role: "Admin Staff",
      sub_role: adminStaffData.current_position,
      permissions: [
        "manage_office_records",
        "track_internal_tasks",
        "access_reports",
        ...(adminStaffData.access_student_data ? ["access_student_data"] : []),
        ...(adminStaffData.access_staff_data ? ["access_staff_data"] : []),
      ],
      lastLogin: adminStaffData.lastLogin,
    },

    staffProfile: {
      staff_id: adminStaffData.staff_id,
      employment_type: adminStaffData.employment_type,
      date_employed: adminStaffData.date_employed,
      current_position: adminStaffData.current_position,
      department: adminStaffData.department,
      reporting_to: adminStaffData.reporting_to,
      years_of_service: adminStaffData.years_of_service,
    },

    adminDuties: {
      task_records: adminStaffData.task_records,
      areas_of_responsibility: adminStaffData.areas_of_responsibility,
      access_scope: {
        student_data: adminStaffData.access_student_data,
        staff_data: adminStaffData.access_staff_data,
      },
      admin_logbook: adminStaffData.admin_logbook,
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
      name: adminStaffData.emergency_contact_name,
      relationship: adminStaffData.emergency_contact_relationship,
      phone: adminStaffData.emergency_contact_phone,
      address: adminStaffData.emergency_contact_address,
    },

    terms_of_service: adminStaffData.agree,
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/admin-staff`,
        adminStaffDoc
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
