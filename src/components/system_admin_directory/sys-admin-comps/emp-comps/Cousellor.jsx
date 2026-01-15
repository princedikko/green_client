export default function RegCousellor() {
  const [counselorData, setCounselorData] = useReducer(
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
      current_position: "Guidance Counselor",
      department: "Guidance and Counselling",
      reporting_to: "Vice Academic",
      years_of_service: "",

      // Counseling Duties
      sessions_held: 0,
      students_counseled: [],
      common_issues_reported: [],
      referral_cases: [],
      available_hours: "",
      access_student_profiles: true,
      access_academic_reports: false,

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

  const counselorDoc = {
    live: true,
    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: counselorData.passport,
      first_Name: counselorData.firstName,
      sur_Name: counselorData.surName,
      other_Name: counselorData.otherName,
      gender: counselorData.genders,
      Date_of_birth: counselorData.date_of_birth,
      marital_status: counselorData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: counselorData.nationality,
        State_of_origin: counselorData.state_of_origin,
        Local_Govt_Area: counselorData.lga_of_origin,
        line_address: counselorData.home_address,
      },
      contact_address: {
        state: counselorData.state,
        local_govt_area: counselorData.lga,
        address: counselorData.addresses,
      },
    },

    contactInfo: {
      email: counselorData.email_address,
      phone_number: counselorData.phone_No,
    },

    documents: counselorData.document_uploaded,

    auth: {
      username: counselorData.username,
      passwordHash: counselorData.passwordHash,
      role: "Counselor",
      sub_role: counselorData.current_position,
      permissions: [
        "log_sessions",
        "view_student_history",
        "recommend_referral",
        "access_student_profiles",
      ],
      lastLogin: counselorData.lastLogin,
    },

    staffProfile: {
      staff_id: counselorData.staff_id,
      employment_type: counselorData.employment_type,
      date_employed: counselorData.date_employed,
      current_position: counselorData.current_position,
      department: counselorData.department,
      reporting_to: counselorData.reporting_to,
      years_of_service: counselorData.years_of_service,
    },

    counselingDuties: {
      sessions_held: counselorData.sessions_held,
      students_counseled: counselorData.students_counseled,
      common_issues_reported: counselorData.common_issues_reported,
      referral_cases: counselorData.referral_cases,
      available_hours: counselorData.available_hours,
      access_scope: {
        student_profiles: counselorData.access_student_profiles,
        academic_reports: counselorData.access_academic_reports,
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
      name: counselorData.emergency_contact_name,
      relationship: counselorData.emergency_contact_relationship,
      phone: counselorData.emergency_contact_phone,
      address: counselorData.emergency_contact_address,
    },

    terms_of_service: counselorData.agree,
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/guidance-counselling`,
        counselorDoc
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
