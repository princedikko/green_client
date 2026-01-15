import React, { useState } from "react";
import axios from "axios";
import "./staffemployment.css";

const StaffEmployement = ({ setLoading }) => {
  const [formData, setFormData] = useState({
    lecturer_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    address: {
      street: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
    department: "",
    // faculty: "",
    designation: "",
    employment_status: "",
    date_of_hire: "",
    academic_qualifications: [],
    courses_taught: [],
    research_interests: [],
    publications: [],
    office_details: {
      building: "",
      room_number: "",
      office_hours: [],
    },
    salary_details: {
      basic_salary: 0,
      allowances: {
        housing: 0,
        transport: 0,
        research_grant: 0,
      },
    },
    password_hash: "",
    profile_picture: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const data = {
    live: true,
    staffID: "ADMIN67890",
    first_Name: "Othman",
    sur_Name: "Omar",
    other_Name: "Dikko",
    email: "princedikko@gmail.com",
    phoneNumber: "+2348063996056",
    position: "Vice Chancellor",
    office: "Office of the Vice Chancellor",
    qualification: "PhD in Educational Management",
    yearsInService: 10,
    dateOfAppointment: "2020-06-15",
    status: "Active",
    profileImage: "",

    personalInfo: {
      gender: "Female",
      dateOfBirth: "1975-04-12",
      maritalStatus: "Married",
      nationality: "Nigerian",
      stateOfOrigin: "Lagos",
      localGovtArea: "Ikeja",
      address: {
        permanent: "123 University Road, Lagos, Nigeria",
        current: "Vice Chancellor Lodge, University Campus",
      },
    },

    contactInfo: {
      alternativeEmail: "jane.smith@academic.edu",
      officePhone: "+2347012345678",
      nextOfKin: {
        fullName: "John Smith",
        relationship: "Husband",
        phone: "+2348023456789",
        address: "123 University Road, Lagos, Nigeria",
      },
    },

    employmentDetails: {
      employmentType: "Permanent",
      department: "Administrative",
      faculty: "Education",
      specialization: "Educational Leadership",
      employmentHistory: [
        {
          institution: "University of Ibadan",
          role: "Lecturer",
          years: "2005-2010",
        },
        {
          institution: "University of Lagos",
          role: "Dean of Faculty",
          years: "2010-2020",
        },
      ],
    },

    academicContributions: {
      researchPublications: [
        {
          title: "The Future of Higher Education in Africa",
          journal: "African Journal of Education",
          year: 2018,
        },
      ],
      booksAuthored: [
        {
          title: "Educational Policies and Reforms",
          year: 2021,
        },
      ],
      coursesTaught: [
        {
          courseCode: "EDU501",
          courseTitle: "Advanced Educational Leadership",
          session: "2023/2024",
        },
      ],
      studentsSupervised: [
        {
          name: "Adekunle Johnson",
          thesisTitle: "Innovative Teaching Strategies",
          year: 2022,
        },
      ],
    },

    responsibilities: [
      "Overseeing academic policies",
      "Managing university operations",
      "Representing the university at official functions",
      "Supervising deans and faculty members",
      "Ensuring compliance with national educational standards",
    ],

    financialRecords: {
      salary: {
        monthlySalary: 500000,
        currency: "NGN",
        lastPaidDate: "2025-01-31",
      },
      pensionScheme: {
        status: "Active",
        pensionProvider: "Nigeria Pension Fund",
        contributions: 50000,
      },
      allowances: [
        {
          type: "Housing",
          amount: 100000,
          status: "Paid",
        },
        {
          type: "Transport",
          amount: 50000,
          status: "Pending",
        },
      ],
    },

    accommodationAllocation: {
      staffQuarters: "Vice Chancellor Lodge",
      roomNumber: "VC-01",
      status: "Allocated",
    },

    libraryRecords: {
      borrowedBooks: [
        {
          bookTitle: "Leadership in Academia",
          author: "Dr. Michael Roberts",
          borrowDate: "2024-01-15",
          returnDate: "2024-02-15",
          status: "Returned",
        },
      ],
    },

    healthRecords: {
      bloodGroup: "O+",
      allergies: ["None"],
      medicalHistory: [
        {
          condition: "Hypertension",
          diagnosedYear: 2015,
        },
      ],
    },

    auth: {
      username: "janesmith",
      passwordHash: "hashedpasswordhere",
      role: "Vice Chancellor",
      lastLogin: "2025-02-22T10:30:00Z",
    },

    emergencyContact: {
      name: "John Smith",
      relationship: "Husband",
      phone: "+2348023456789",
      address: "123 University Road, Lagos, Nigeria",
    },

    termsOfService: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/staff_registration`,
        data
      );
      alert(response.data.status);

      setLoading(false);
    } catch (error) {
      console.error("Registration Failed", error);
      setLoading(false);
      alert("Error: Registration Failed");
    }
  };

  return (
    <div>
      <h2>Lecturer Registration</h2>
      <form className="regInputContStaff" onSubmit={handleSubmit}>
        <input
          type="text"
          name="lecturer_id"
          placeholder="Lecturer ID"
          onChange={handleChange}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          type="date"
          name="date_of_birth"
          placeholder="Date of Birth"
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />
        <input
          type="text"
          name="faculty"
          placeholder="Faculty"
          onChange={handleChange}
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          onChange={handleChange}
        />
        <input
          type="text"
          name="employment_status"
          placeholder="Employment Status"
          onChange={handleChange}
        />
        <input
          type="date"
          name="date_of_hire"
          placeholder="Date of Hire"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password_hash"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StaffEmployement;
