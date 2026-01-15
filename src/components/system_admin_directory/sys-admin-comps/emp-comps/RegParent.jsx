export default function RegParent() {
  const [parentData, setParentData] = useReducer(
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

      // Parent Profile
      parent_id: "",
      relationship_to_student: "",
      occupation: "",
      number_of_children_in_school: 0,

      // Student Links
      linked_students: [],

      // Emergency Contact (Optional)
      emergency_contact_name: "",
      emergency_contact_relationship: "",
      emergency_contact_phone: "",
      emergency_contact_address: "",

      // System Fields
      agree: false,
      lastLogin: "",
    }
  );
  const parentDoc = {
    live: true,
    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: parentData.passport,
      first_Name: parentData.firstName,
      sur_Name: parentData.surName,
      other_Name: parentData.otherName,
      gender: parentData.genders,
      Date_of_birth: parentData.date_of_birth,
      marital_status: parentData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: parentData.nationality,
        State_of_origin: parentData.state_of_origin,
        Local_Govt_Area: parentData.lga_of_origin,
        line_address: parentData.home_address,
      },
      contact_address: {
        state: parentData.state,
        local_govt_area: parentData.lga,
        address: parentData.addresses,
      },
    },

    contactInfo: {
      email: parentData.email_address,
      phone_number: parentData.phone_No,
    },

    documents: parentData.document_uploaded,

    auth: {
      username: parentData.username,
      passwordHash: parentData.passwordHash,
      role: "Parent",
      permissions: [
        "view_linked_children_records",
        "monitor_academic_progress",
        "receive_notifications",
        "pay_fees",
        "send_emergency_messages",
      ],
      lastLogin: parentData.lastLogin,
    },

    parentProfile: {
      parent_id: parentData.parent_id,
      relationship_to_student: parentData.relationship_to_student,
      occupation: parentData.occupation,
      number_of_children_in_school: parentData.number_of_children_in_school,
      linked_students: parentData.linked_students, // student IDs or references
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
      name: parentData.emergency_contact_name,
      relationship: parentData.emergency_contact_relationship,
      phone: parentData.emergency_contact_phone,
      address: parentData.emergency_contact_address,
    },

    terms_of_service: parentData.agree,
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/parent`,
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
