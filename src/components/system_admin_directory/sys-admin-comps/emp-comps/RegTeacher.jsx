export default function RegTeacher() {
  const [teacherData, setTeacherData] = useReducer(
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
      current_position: "Class Teacher", // or Subject Teacher
      department: "Academics",
      reporting_to: "Vice Academic",
      years_of_service: "",

      // Teaching Duties
      current_class: "",
      subjects_taught: [],
      total_students: 0,
      teaching_schedule: [],
      attendance_summary: {
        total_days: 0,
        days_present: 0,
        days_absent: 0,
      },

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

  const teacherDoc = {
    live: true,
    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: teacherData.passport,
      first_Name: teacherData.firstName,
      sur_Name: teacherData.surName,
      other_Name: teacherData.otherName,
      gender: teacherData.genders,
      Date_of_birth: teacherData.date_of_birth,
      marital_status: teacherData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: teacherData.nationality,
        State_of_origin: teacherData.state_of_origin,
        Local_Govt_Area: teacherData.lga_of_origin,
        line_address: teacherData.home_address,
      },
      contact_address: {
        state: teacherData.state,
        local_govt_area: teacherData.lga,
        address: teacherData.addresses,
      },
    },

    contactInfo: {
      email: teacherData.email_address,
      phone_number: teacherData.phone_No,
    },

    documents: teacherData.document_uploaded,

    auth: {
      username: teacherData.username,
      passwordHash: teacherData.passwordHash,
      role: "Teacher",
      sub_role: teacherData.current_position,
      permissions: [
        "mark_attendance",
        "enter_scores",
        "view_class_performance",
        "message_students",
        "access_student_profiles",
      ],
      lastLogin: teacherData.lastLogin,
    },

    staffProfile: {
      staff_id: teacherData.staff_id,
      employment_type: teacherData.employment_type,
      date_employed: teacherData.date_employed,
      current_position: teacherData.current_position,
      department: teacherData.department,
      reporting_to: teacherData.reporting_to,
      years_of_service: teacherData.years_of_service,
    },

    teachingDuties: {
      current_class: teacherData.current_class,
      subjects_taught: teacherData.subjects_taught,
      total_students: teacherData.total_students,
      teaching_schedule: teacherData.teaching_schedule,
      attendance_summary: {
        total_days: teacherData.attendance_summary.total_days,
        days_present: teacherData.attendance_summary.days_present,
        days_absent: teacherData.attendance_summary.days_absent,
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
      name: teacherData.emergency_contact_name,
      relationship: teacherData.emergency_contact_relationship,
      phone: teacherData.emergency_contact_phone,
      address: teacherData.emergency_contact_address,
    },

    terms_of_service: teacherData.agree,
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/teacher`,
        teacherDoc
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
