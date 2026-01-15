import { useState, useReducer, useEffect } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import SPLogo from "./skillpoint.png";
import * as Action from "../../../store/redux/registrationReducer.js";
import axios from "axios";
import "./registration.css";
import Logo from "../public-routes-images/logos/Manga_Cons _Logo3.png";
import IsLoading from "../../../isLoading";
import { Link, useNavigate } from "react-router-dom";
import { statesAndLgas } from "./registrationStatesAndLGA.js";

// imported icon
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SchoolIcon from "@mui/icons-material/School";

let applicationData;

export default function Registration() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [selectedProgramme, setSelectedProgramme] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // ****************************** GENERATING APPLICATION NUMBER FOR APPLICANTS **************************************

  // FUNTIONS FOR THE STATE SELECTIONS
  const [selectedState, setSelectedState] = useState("");
  const [localGovernments, setLocalGovernments] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setApplicantData({ state_of_address: e.target.value });
    setLocalGovernments(statesAndLgas[state] || []);
  };
  // ------------------------
  const [loading, setLoading] = useState(false);
  const [applicantData, setApplicantData] = useReducer(
    (request, response) => {
      return { ...request, ...response };
    },
    {
      ref_number: null,
      transaction_id: "",
      state_of_address: "",
      application_number: "",
    }
  );

  const actions = useSelector((state) => state.applictaionForm);
  const executeApplication = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/candidate_registration`,
        payload
      )
      .then((response) => {
        applicationData = response.data.data;
        if (response.data.status === 203) {
          setLoading(false);
          enqueueSnackbar(`${response.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
        } else {
          enqueueSnackbar(`${response.data.message}`, {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
          navigateTo(
            `/registrations/${response.data?.data?.auth.loginUsername}/print_reciept`
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        enqueueSnackbar(`error: something went wrong!`, {
          variant: "error",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        console.log(error);
        setLoading(false);
      });
  };

  const payload = {
    candidateId: "CBT2025-00123",
    account: {
      email: "info@skillpoint.com",
      phone: "+2348012345678",
      passwordHash: "6666",
      status: "active",
      role: "candidate",
      lastLogin: "",
      registeredAt: new Date().toLocaleDateString(),
    },
    auth: {
      loginUsername: "info@skillpoint.com",
      loginNumber: "+2348012345678",
      hashedPassword: "3333",
      examPin: "6666",
      loginAttempts: 1,
      emailVerified: false,
      twoFactorEnabled: false,
      twoFactorMethod: "email",
      recoveryCodes: ["code1", "code2", "code3"],
      passwordResetToken: "",
      passwordResetExpires: "",
    },
    profile: {
      firstName: "Othman",
      lastName: "Omar Dikko",
      gender: "male",
      dob: "1995-08-15",
      photoURL:
        "https://mangaconsadministrationstafffilesbucket.s3.eu-north-1.amazonaws.com/passport.jpg",
      education: {
        institution: "Usmanu Danfodiyo University",
        department: "Mathematics",
        level: "Undergraduate",
        yearOfStudy: 3,
      },
    },
    permission: {
      accessLevel: "standard",
      features: ["mock_tests", "performance_tracking", "test_reviews"],
    },
    enrollments: {
      programme: selectedProgramme,
      courses: selectedSubjects,
    },

    tests: {
      scheduled: [
        {
          testId: "",
          title: "Math Mock CBT 1",
          subject: "Mathematics",
          scheduledFor: "",
          duration: 60,
          status: "pending",
        },
      ],
      completed: [
        {
          testId: "",
          title: "English Diagnostic Test",
          subject: "English",
          score: 82,
          accuracy: 0.88,
          attempted: 40,
          correct: 35,
          wrong: 5,
          duration: 52,
          completedAt: "",
          resultStatus: "passed",
          rank: 9,
          reviewLink: "https://cbtportal.ng/review/671a3ec45a2f9e3cbd812ab2",
        },
      ],
    },
    performance: {
      totalTests: 18,
      averageScore: 76.9,
      bestScore: 94,
      totalTimeSpent: 1560,
      weakAreas: [
        { topic: "Probability", avgAccuracy: 0.52 },
        { topic: "Reading Comprehension", avgAccuracy: 0.61 },
      ],
      strongAreas: [
        { topic: "Algebra", avgAccuracy: 0.94 },
        { topic: "Grammar", avgAccuracy: 0.88 },
      ],
      monthlyTrend: [
        { month: "July", avgScore: 73 },
        { month: "August", avgScore: 78 },
        { month: "September", avgScore: 81 },
        { month: "October", avgScore: 83 },
      ],
    },
    achievements: [
      {
        badgeId: "",
        badgeTitle: "Top 10% Performer",
        issuedOn: "",
        description: "Ranked in top 10% of candidates during national mock CBT",
      },
    ],
    notifications: [
      {
        notificationId: "",
        title: "Upcoming Test Reminder",
        message: "Math Mock CBT 1 starts tomorrow at 9:00 AM.",
        isRead: false,
        sentAt: "",
      },
    ],
    settings: {
      language: "en",
      theme: "dark",
      notifications: true,
      timezone: "Africa/Lagos",
    },
    system: {
      device: "Android",
      browser: "Chrome Mobile 127",
      ipAddress: "102.89.215.42",
      lastActive: "",
    },
    createdAt: "",
    updatedAt: "",
  };

  const RegFormFilling = () => {
    const [appFormData, setAppFormData] = useReducer(
      (request, response) => {
        return { ...request, ...response };
      },
      {
        firstName: "",
        surName: "",
        otherName: "",
        gender: "",
        email: "",
        tel: "",
        course: "",
        ExaminationCouncil: "",
      }
    );

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      surName: Yup.string().required("Sur name is required"),
      // otherName: Yup.string().required("Other name is required"),
      gender: Yup.string().required("Gender is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      programme_of_study: Yup.string().required(
        "Programme of study is required"
      ),
    });

    const validateForm = async () => {
      try {
        await validationSchema.validate(appFormData, { abortEarly: false });
        setErrors({});
        return true; // Form is valid
      } catch (validationErrors) {
        const formattedErrors = {};
        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
        });
        setErrors(formattedErrors);
        return false; // Form is invalid
      }
    };

    const execute = async () => {
      const isValid = await validateForm();
      if (isValid) {
        setIsSubmitting(true);
        dispatch(Action.startappFormAction({ appFormData }));
      }
    };

    return (
      <div className="regMainCont fx-cl space3">
        <div className="regHeader fx-cl fx-ac space3">
          <h3>High-speed, Secure & Stress-Free Online Exams</h3>
          <div className="regHTag fx-ac">
            <figure className="fx-ac space2">
              <span>
                <DashboardRoundedIcon fontSize="large" />
              </span>
              <span>Open source</span>
            </figure>
            <figure className="fx-ac space2">
              <span>
                <AssignmentRoundedIcon fontSize="large" />
              </span>
              <span>No-logs policy</span>
            </figure>
            <figure className="fx-ac space2">
              <span>
                <PeopleAltRoundedIcon fontSize="large" />
              </span>
              <span>Protected by Universe tech industry laws</span>
            </figure>
            <figure className="fx-ac space2">
              <span>
                <CategoryRoundedIcon fontSize="large" />
              </span>
              <span>13600 + servers</span>
            </figure>
          </div>
          <figure className="regTag">
            ico<strong>100%</strong> Fast & Effortless{" "}
            <strong>Online Exams System</strong> for All Candidates
          </figure>
        </div>
        <div className="regMainDiv fx-cl space3">
          <div className="fx-ac fx-jb space4">
            <div className=" regStep fx-ac space2">
              <figure>Step 1</figure> <h3>Select your pricing plan</h3>
            </div>
            <select name="" id="">
              <option value="">Change Programme</option>
            </select>
          </div>

          <div className="regPricing fx-as space2">
            <figure className="regPricingCard  fx-cl">
              <div className="fx-cl space2">
                <div className="fx-ac space1">
                  <input type="radio" name="" id="" />
                  <h5>2 months</h5>
                </div>
                <div className="fx-cl spacem">
                  <p className="discountReg">
                    <span>5950 </span>
                    <strong
                      style={{
                        color: "#5AC2AE",
                        backgroundColor: "#EBFFFA",
                        padding: ".3rem",
                        borderRadius: ".4rem",
                      }}
                    >
                      SAVE 68%
                    </strong>
                  </p>
                  <p className="regPrice">N2,500</p>
                  <span>2 months</span>
                </div>
                {/* <button>Make the payment</button> */}
              </div>
            </figure>
            <figure className="regPricingCard active fx-cl bestValue">
              <span className="bestValueTag">Best value</span>
              <div className="fx-cl space2">
                <div className="fx-ac space1">
                  <input type="radio" name="" id="" />
                  <h5>6 months</h5>
                </div>
                <div className="fx-cl spacem">
                  <p className="discountReg">
                    <span>5950 </span>
                    <strong
                      style={{
                        color: "#5AC2AE",
                        backgroundColor: "#EBFFFA",
                        padding: ".3rem",
                        borderRadius: ".4rem",
                      }}
                    >
                      SAVE 68%
                    </strong>
                  </p>
                  <p className="regPrice">N3,450</p>
                  <span>6 months</span>
                </div>
                <button onClick={() => executeApplication()}>
                  Make the payment
                </button>
              </div>
            </figure>
            <figure className="regPricingCard fx-cl ">
              <div className="fx-cl space2">
                <div className="fx-ac space1">
                  <input type="radio" name="" id="" />
                  <h5>12 months</h5>
                </div>
                <div className="fx-cl spacem">
                  <p className="discountReg">
                    <span>5950 </span>
                    <strong
                      style={{
                        color: "#5AC2AE",
                        backgroundColor: "#EBFFFA",
                        padding: ".3rem",
                        borderRadius: ".4rem",
                      }}
                    >
                      SAVE 68%
                    </strong>
                  </p>
                  <p className="regPrice">N5,750</p>
                  <span>12 months</span>
                </div>
                {/* <button>Make the payment</button> */}
              </div>
            </figure>
          </div>
        </div>
        <div className="regMainDiv regFormData fx-cl space2">
          <div className="fx-cl space3">
            <div className=" regStep fx-ac space2">
              <figure>Step 2</figure> <h3>Select your pricing plan</h3>
            </div>

            <div className="fx-cl space2 ">
              <div className="fx-ac space2 regFormfloat">
                <div className="fx-cl spacem">
                  <label htmlFor="text">First name:</label>
                  <div
                    className="fx-ac space1 regInputCont"
                    style={{
                      boxShadow: `${
                        errors.firstName && "inset 0rem 0rem 0rem 0.1rem red"
                      }`,
                    }}
                  >
                    <input
                      value={appFormData.firstName}
                      onChange={(event) =>
                        setAppFormData({ firstName: event.target.value })
                      }
                      type="text"
                      name="first_name"
                      style={{ borderColor: errors.firstName ? "red" : "" }}
                    />
                    {/* {errors.firstName && (
                <div style={{ color: "red" }}>{errors.firstName}</div>
              )} */}
                  </div>
                </div>
                <div className="fx-cl spacem">
                  <label htmlFor="text">Sur name:</label>
                  <div
                    className="fx-ac space1 regInputCont"
                    style={{
                      boxShadow: `${
                        errors.surName && "inset 0rem 0rem 0rem 0.1rem red"
                      }`,
                    }}
                  >
                    <input
                      value={appFormData.surName}
                      onChange={(event) =>
                        setAppFormData({ surName: event.target.value })
                      }
                      type="text"
                      name="sur_name"
                      style={{ borderColor: errors.surName ? "red" : "" }}
                    />
                    {/* {errors.surName && (
                <div style={{ color: "red" }}>{errors.surName}</div>
              )} */}
                  </div>
                </div>
              </div>
              <div className="fx-ac space2 regFormfloat">
                <div className="fx-cl spacem">
                  <label htmlFor="text">Other name:</label>
                  <div className="fx-ac space1 regInputCont ">
                    <input
                      value={appFormData.otherName}
                      onChange={(event) =>
                        setAppFormData({ otherName: event.target.value })
                      }
                      type="text"
                      name="other_name"
                      style={{ borderColor: errors.otherName ? "red" : "" }}
                    />
                  </div>
                </div>
                <div className="fx-cl spacem">
                  <label htmlFor="text">Gender:</label>
                  <div
                    className="fx-ac space1 regInputCont fx-cl"
                    style={{
                      boxShadow: `${
                        errors.gender && "inset 0rem 0rem 0rem 0.1rem red"
                      }`,
                    }}
                  >
                    <select
                      value={appFormData.gender}
                      onChange={(event) =>
                        setAppFormData({ gender: event.target.value })
                      }
                      name="gender"
                      // style={{ borderColor: errors.gender ? "red" : "" }}
                    >
                      <option value="" disabled hidden>
                        Select gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {/* {errors.gender && (
                <div style={{ color: "red" }}>{errors.gender}</div>
              )} */}
                  </div>
                </div>
              </div>
              <div className="fx-ac space2 regFormfloat">
                <div className="fx-cl spacem">
                  <label htmlFor="text">Email:</label>
                  <div
                    className="fx-ac space1 regInputCont"
                    style={{
                      boxShadow: `${
                        errors.email && "inset 0rem 0rem 0rem 0.1rem red"
                      }`,
                    }}
                  >
                    <input
                      value={appFormData.email}
                      onChange={(event) =>
                        setAppFormData({ email: event.target.value })
                      }
                      type="email"
                      name="email"
                      style={{ borderColor: errors.email ? "red" : "" }}
                    />
                    {/* {errors.email && <div style={{ color: "red" }}>{errors.email}</div>} */}
                  </div>
                </div>
                <div className="fx-cl spacem">
                  <label htmlFor="text">Phone number:</label>
                  <div
                    className="fx-ac space1 regInputCont"
                    style={{
                      boxShadow: `${
                        errors.phone_number && "inset 0rem 0rem 0rem 0.1rem red"
                      }`,
                    }}
                  >
                    <div className="fx-ac spacem">
                      <span className="fx-ac">
                        <div
                          style={{
                            backgroundColor: "green",
                            padding: "0 .2rem",
                          }}
                        >
                          &nbsp;
                        </div>
                        <div
                          style={{
                            backgroundColor: "#FFFFFF",
                            padding: "0 .2rem",
                          }}
                        >
                          &nbsp;
                        </div>
                        <div
                          style={{
                            backgroundColor: "green",
                            padding: "0 .2rem",
                          }}
                        >
                          &nbsp;
                        </div>
                      </span>
                      <span>+234</span>
                    </div>
                    <input
                      value={appFormData.phone_number}
                      onChange={(event) =>
                        setAppFormData({ phone_number: event.target.value })
                      }
                      type="number"
                      name="phone_no"
                    />
                    {/* {errors.phone_number && (
              <p className="error">{errors.phone_number}</p>
            )} */}
                  </div>
                </div>
              </div>

              <div className="fx-jb space2 regFormfloat">
                <div className="g g2 space1">
                  <div className="fx-cl spacem">
                    <label htmlFor="text">State:</label>
                    <div
                      className="fx-ac space1 regInputCont"
                      style={{
                        boxShadow: `${
                          errors.programme_of_study &&
                          "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <select
                        value={selectedState}
                        onChange={handleStateChange}
                      >
                        <option value="" hidden>
                          Select state
                        </option>
                        {Object.keys(statesAndLgas).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="fx-cl spacem">
                    <label htmlFor="text">LGA:</label>
                    <div
                      className="fx-ac space1 regInputCont"
                      style={{
                        boxShadow: `${
                          errors.programme_of_study &&
                          "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <select
                        disabled={!selectedState}
                        value={appFormData.lga_address}
                        onChange={(event) =>
                          setAppFormData({ lga_address: event.target.value })
                        }
                      >
                        <option value="" hidden>
                          Select LGA
                        </option>
                        {localGovernments.map((lga) => (
                          <option key={lga} value={lga}>
                            {lga}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  className="regbtnSubmit"
                  onClick={execute}
                  disabled={isSubmitting}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="fx-cl">
              <p>
                <strong>
                  Already have an account? <Link>Sign in</Link>
                </strong>
              </p>
              Your information is safe with us. We'll only contact when it's
              required to provide our services.
            </div>
          </div>
          <ProgrammeSelection
            selectedProgramme={selectedProgramme}
            setSelectedProgramme={setSelectedProgramme}
          />
        </div>
        <div className="regMainDiv regFormData fx-cl">
          <CoursesSelection
            selectedSubjects={selectedSubjects}
            setSelectedSubjects={setSelectedSubjects}
          />
          <div>
            aside contents, preferable graphic designed image attracting
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? <IsLoading /> : null}
      <section className="fx-cl space3 " id="regCont">
        <header className="RegformHeader fx-ac fx-jb space4">
          <figure style={{ maxWidth: "10rem" }}>
            <img src={SPLogo} alt="" />
          </figure>

          <div className="language">
            icon
            <select name="" id="`">
              <option value="English">English</option>
              <option value="Hausa">Hausa</option>
            </select>
          </div>
        </header>
        <div className="fx-jc">
          <RegFormFilling />
        </div>
      </section>
    </>
  );
}

function ProgrammeSelection({ selectedProgramme, setSelectedProgramme }) {
  // Toggle handler
  const toggleProgramme = (title) => {
    setSelectedProgramme((prev) => {
      if (prev.includes(title)) {
        // remove it
        return prev.filter((s) => s !== title);
      } else {
        // add it
        if (prev.length >= 9) {
          alert(
            "You can only select up to 4 subjects for this examination session."
          );
          return prev; // Do not add more than 3 subjects
        }
        return [...prev, title];
      }
    });
  };

  console.log(selectedProgramme);

  const programmes = [
    {
      programme: "neco",
      displayName: "National Examinations Council (NECO)",
      url: "neco",
    },
    {
      programme: "waec",
      displayName: "West African Examinations Council (WAEC)",
      url: "waec",
    },
    {
      programme: "nabteb",
      displayName: "National Business and Technical Examinations Board",
      url: "coming",
    },
    {
      programme: "jamb",
      displayName: "Joint Admissions and Matriculation Board (JAMB)",
      url: "jamb",
    },
    { programme: "post-utme", displayName: "Post-UTME", url: "post-utme" },
    { programme: "nigerian army", displayName: "Nigerian Army", url: "ume" },
    { programme: "nigerian navy", displayName: "Nigerian Navy", url: "pome" },
    {
      programme: "nigeria airforce",
      displayName: "Nigeria Airforce",
      url: "potme",
    },
    {
      programme: "nigerian police",
      displayName: "Nigerian Police Force",
      url: "poste",
    },
  ];

  return (
    <div className="fx-cl space3">
      <div className=" regStep fx-cl ">
        <figure>Programme</figure> <h3>Select Programme</h3>
      </div>

      <div className="fx-cl">
        <p>
          Your information is safe with us. We'll only contact when it's
          required to provide our services.
        </p>
      </div>
      <div className="g g3 space2">
        {programmes?.map((item, index) => {
          const isChecked = selectedProgramme.includes(item);

          return (
            <figure
              key={index}
              onClick={() => toggleProgramme(item.programme)}
              className={`regCourses ${isChecked && "checked"}`}
            >
              <figcaption>{item.programme}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

function CoursesSelection({ selectedSubjects, setSelectedSubjects }) {
  // Toggle handler
  const toggleSubject = (title) => {
    setSelectedSubjects((prev) => {
      if (prev.includes(title)) {
        // remove it
        return prev.filter((s) => s !== title);
      } else {
        // add it
        if (prev.length >= 9) {
          alert(
            "You can only select up to 4 subjects for this examination session."
          );
          return prev; // Do not add more than 3 subjects
        }
        return [...prev, title];
      }
    });
  };

  const ssceSubjects = [
    "english language",
    "mathematics",
    "islamic religious studies",
    "physics",
    "chemistry",
    "biology",
    "further mathematics",
    "computer science",
    "agricultural science",
    "technical drawing",
    "economics",
    "commerce",
    "accounting",
    "government",
    "history",
    "geography",
    "literature-in-english",
    "religious studies",
    "civic education",
    "financial accounting",
    "entrepreneurship",
    "food and nutrition",
    "marketing",
    "business studies",
    "christian religious studies",
  ];

  return (
    <div className="fx-cl space3">
      <div className=" regStep fx-ac space2">
        <figure>Step 3</figure> <h3>Courses Checkout</h3>
      </div>

      <div className="fx-cl">
        <p>
          Your information is safe with us. We'll only contact when it's
          required to provide our services.
        </p>
      </div>
      <div className="g g6 space2">
        {ssceSubjects?.map((item, index) => {
          const isChecked = selectedSubjects.includes(item);

          return (
            <figure
              key={index}
              onClick={() => toggleSubject(item)}
              className={`regCourses ${isChecked && "checked"}`}
            >
              <figcaption>{item}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
