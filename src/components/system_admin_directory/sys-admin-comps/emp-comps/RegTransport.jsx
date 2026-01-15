export default function RegTransport() {
  const [transportData, setTransportData] = useReducer(
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
      current_position: "Driver", // or "Transport Officer"
      department: "Transport Department",
      reporting_to: "Vice Administrative",
      years_of_service: "",

      // Transport Duties
      assigned_vehicle: "",
      vehicle_plate_number: "",
      route_name: "",
      route_code: "",
      student_manifest: [],
      vehicle_logbook: [],
      maintenance_schedule: [],

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

  const transportDoc = {
    live: true,
    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: transportData.passport,
      first_Name: transportData.firstName,
      sur_Name: transportData.surName,
      other_Name: transportData.otherName,
      gender: transportData.genders,
      Date_of_birth: transportData.date_of_birth,
      marital_status: transportData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: transportData.nationality,
        State_of_origin: transportData.state_of_origin,
        Local_Govt_Area: transportData.lga_of_origin,
        line_address: transportData.home_address,
      },
      contact_address: {
        state: transportData.state,
        local_govt_area: transportData.lga,
        address: transportData.addresses,
      },
    },

    contactInfo: {
      email: transportData.email_address,
      phone_number: transportData.phone_No,
    },

    documents: transportData.document_uploaded,

    auth: {
      username: transportData.username,
      passwordHash: transportData.passwordHash,
      role: "Transport",
      sub_role: transportData.current_position,
      permissions: [
        "log_pickup_dropoff",
        "manage_route",
        "track_students",
        "schedule_maintenance",
        "view_transport_reports",
      ],
      lastLogin: transportData.lastLogin,
    },

    staffProfile: {
      staff_id: transportData.staff_id,
      employment_type: transportData.employment_type,
      date_employed: transportData.date_employed,
      current_position: transportData.current_position,
      department: transportData.department,
      reporting_to: transportData.reporting_to,
      years_of_service: transportData.years_of_service,
    },

    transportDuties: {
      assigned_vehicle: transportData.assigned_vehicle,
      vehicle_plate_number: transportData.vehicle_plate_number,
      route_name: transportData.route_name,
      route_code: transportData.route_code,
      student_manifest: transportData.student_manifest,
      vehicle_logbook: transportData.vehicle_logbook,
      maintenance_schedule: transportData.maintenance_schedule,
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
      name: transportData.emergency_contact_name,
      relationship: transportData.emergency_contact_relationship,
      phone: transportData.emergency_contact_phone,
      address: transportData.emergency_contact_address,
    },

    terms_of_service: transportData.agree,
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/transport`,
        transportDoc
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
