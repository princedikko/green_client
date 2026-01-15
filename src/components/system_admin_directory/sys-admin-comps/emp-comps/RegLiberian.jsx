export default function RegLiberian() {
  const [librarianData, setLibrarianData] = useReducer(
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
      current_position: "Library Officer",
      department: "Library",
      reporting_to: "Vice Academic",
      years_of_service: "",

      // Library Duties
      book_inventory_count: 0,
      active_borrowed_books: 0,
      overdue_returns: 0,
      library_opening_weekdays: "",
      library_opening_weekends: "",
      access_manage_books: true,
      access_view_borrowing: true,
      access_student_profiles: false,

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

  const librarianDoc = {
    live: true,
    account_status: {
      registration_status: "approved",
      paymentStatus: "n/a",
      reference_number: null,
    },

    personalInfo: {
      passport: librarianData.passport,
      first_Name: librarianData.firstName,
      sur_Name: librarianData.surName,
      other_Name: librarianData.otherName,
      gender: librarianData.genders,
      Date_of_birth: librarianData.date_of_birth,
      marital_status: librarianData.marital_status,
      profile_picture: "",
      permanent_home_address: {
        Nationality: librarianData.nationality,
        State_of_origin: librarianData.state_of_origin,
        Local_Govt_Area: librarianData.lga_of_origin,
        line_address: librarianData.home_address,
      },
      contact_address: {
        state: librarianData.state,
        local_govt_area: librarianData.lga,
        address: librarianData.addresses,
      },
    },

    contactInfo: {
      email: librarianData.email_address,
      phone_number: librarianData.phone_No,
    },

    documents: librarianData.document_uploaded,

    auth: {
      username: librarianData.username,
      passwordHash: librarianData.passwordHash,
      role: "Librarian",
      sub_role: librarianData.current_position,
      permissions: [
        "manage_book_inventory", // Add/remove/update books
        "issue_books", // Assign books to students
        "track_borrowed_books", // View borrowed history
        "send_return_reminders", // Trigger notification
        "view_student_library_records", // View only library activity of students
      ],
      lastLogin: librarianData.lastLogin,
    },

    staffProfile: {
      staff_id: librarianData.staff_id,
      employment_type: librarianData.employment_type,
      date_employed: librarianData.date_employed,
      current_position: librarianData.current_position,
      department: librarianData.department,
      reporting_to: librarianData.reporting_to,
      years_of_service: librarianData.years_of_service,
    },

    libraryDuties: {
      book_inventory_count: librarianData.book_inventory_count,
      active_borrowed_books: librarianData.active_borrowed_books,
      overdue_returns: librarianData.overdue_returns,
      library_opening_hours: {
        weekdays: librarianData.library_opening_weekdays,
        weekends: librarianData.library_opening_weekends,
      },
      access_scope: {
        manage_books: librarianData.access_manage_books,
        view_borrowing_history: librarianData.access_view_borrowing,
        student_profiles: librarianData.access_student_profiles,
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
      name: librarianData.emergency_contact_name,
      relationship: librarianData.emergency_contact_relationship,
      phone: librarianData.emergency_contact_phone,
      address: librarianData.emergency_contact_address,
    },

    terms_of_service: librarianData.agree,

    //   | Field                   | Purpose                                        |
    // | ----------------------- | ---------------------------------------------- |
    // | `book_inventory_count`  | Total number of books in system                |
    // | `active_borrowed_books` | Currently borrowed books count                 |
    // | `overdue_returns`       | Late book returns (to trigger alerts or fines) |
    // | `library_opening_hours` | Helps show access periods to parents/students  |
    // | `access_scope`          | Controls what librarian can see/do in system   |
  };

  const executeAction = async () => {
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/sys-admin/registration/:id/library`,
        librarianDoc
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
