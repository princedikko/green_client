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
import IsLoading from "../../../IsLoading";
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
    },
  );

  const actions = useSelector((state) => state.applictaionForm);
  const executeApplication = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/candidate_registration`,
        payload,
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
            `/registrations/${response.data?.data?.auth.loginUsername}/print_reciept`,
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
    clientId: "CLT-2026-000045",

    businessProfile: {
      businessId: "BIZ-2026-000045",

      basicInfo: {
        businessName: "Dikko Supermarket Ltd",
        legalName: "Dikko Supermarket and Stores Limited",
        tradingName: "Dikko Supermarket",
        businessType: "RETAIL_SUPERMARKET",
        industry: "Fast Moving Consumer Goods (FMCG)",
        description:
          "Retail supermarket chain dealing in food, beverages, household goods, and daily essentials",
      },
      businessRankingModule: {
        growthRanking: {
          currentRank: "BRONZE",

          score: 42,

          metrics: {
            employeeCountScore: 10,
            transactionVolumeScore: 15,
            revenueEstimateScore: 10,
            systemUsageScore: 7,
            multiBranchScore: 0,
          },

          upgradeProgress: {
            nextRank: "SILVER",
            pointsNeeded: 58,
            progressPercentage: 42,
          },
        },

        // 🟤 BRONZE (0 - 49)
        // Small business stage
        // - 1 branch or single store
        // - Low transaction volume
        // - Basic ERP usage
        // - Limited staff (1–20)
        // - Mostly manual operations

        // ⚪ SILVER (50 - 74)
        // Growing business stage
        // - Multiple users actively using system
        // - Medium transaction volume
        // - Some automation (alerts, reorder)
        // - 2–5 branches
        // - Stable revenue flow

        // 🟡 GOLD (75 - 89)
        // Advanced business stage
        // - Multi-warehouse operations
        // - High transaction volume
        // - Strong system dependency
        // - Inventory + finance fully integrated
        // - Real-time reporting used daily

        // 🔵 PLATINUM (90 - 100)
        // Enterprise level
        // - Chain businesses / franchises
        // - Full automation (AI + alerts + API)
        // – High financial throughput
        // - Multi-location synchronized operations
        // - Full ERP dependency (business runs on system)
      },
      registration: {
        registrationNumber: "RC-1234567",
        registrationType: "LIMITED_LIABILITY_COMPANY",
        registrationCountry: "Nigeria",
        registrationDate: "2020-06-15",
        taxIdentificationNumber: "TIN-0987654321",
        vatRegistered: true,
        vatNumber: "VAT-2026-998877",
        regulatoryStatus: "COMPLIANT",
      },

      operationalProfile: {
        businessStage: "GROWTH",
        numberOfBranches: 2,
        employeeCount: 25,
        dailyTransactionVolume: "MEDIUM",
        operatingHours: {
          open: "08:00",
          close: "22:00",
          timezone: "Africa/Lagos",
        },
      },

      location: {
        headOffice: {
          country: "Nigeria",
          state: "Lagos",
          city: "Ikeja",
          address: "12 Allen Avenue",
          postalCode: "100001",
        },
      },

      branding: {
        logoUrl: "https://cdn.example.com/logo.png",
        primaryColor: "#1E90FF",
        secondaryColor: "#FFFFFF",
        website: "https://dikkosupermarket.com",
      },

      financialProfile: {
        baseCurrency: "NGN",
        taxRateDefault: 7.5,
        fiscalYearStart: "JANUARY",
        revenueCategory: "MID_MARKET_RETAIL",
      },

      compliance: {
        kybStatus: "VERIFIED",
        riskLevel: "LOW",
        auditRequired: true,
        regulatoryBodies: ["CAC", "FIRS"],
      },

      systemSettings: {
        multiWarehouseEnabled: true,
        multiUserAccess: true,
        apiAccessEnabled: true,
        dataRetentionPolicyDays: 3650,
      },

      status: "ACTIVE",

      createdAt: "2026-04-30T08:00:00Z",

      auditTrail: [
        {
          action: "BUSINESS_REGISTERED",
          timestamp: "2026-04-30T08:00:00Z",
        },
      ],
    },

    owner: {
      ownerId: "OWN-2026-000045",

      personalInfo: {
        fullName: "Abdullahi Dikko",
        firstName: "Abdullahi",
        lastName: "Dikko",
        email: "dikko@supermarket.com",
        phone: "+2348012345678",
        dateOfBirth: "1988-05-12",
        gender: "male",
        nationality: "Nigerian",
      },

      identityVerification: {
        bvn: {
          value: "12345678901",
          verified: true,
          verifiedAt: "2026-04-01T10:00:00Z",
        },
        nin: {
          value: "98765432101",
          verified: true,
          verifiedAt: "2026-04-01T10:05:00Z",
        },
        kycLevel: "LEVEL_2",
        kycStatus: "VERIFIED",
      },

      contactVerification: {
        emailVerified: true,
        emailVerifiedAt: "2026-04-01T09:30:00Z",
        phoneVerified: true,
        phoneVerifiedAt: "2026-04-01T09:35:00Z",
      },

      address: {
        country: "Nigeria",
        state: "Lagos",
        city: "Ikeja",
        street: "12 Allen Avenue",
        postalCode: "100001",
      },

      role: {
        type: "BUSINESS_OWNER",
        permissions: ["ALL"],
        isPrimaryOwner: true,
      },

      security: {
        twoFactorEnabled: true,
        loginAlertsEnabled: true,
        riskLevel: "LOW",
        accountStatus: "ACTIVE",
      },

      linkedClientId: "CLT-2026-000045",

      documents: [
        {
          type: "IDENTITY_CARD",
          url: "https://cdn.example.com/docs/nin.pdf",
          verified: true,
        },
        {
          type: "UTILITY_BILL",
          url: "https://cdn.example.com/docs/bill.pdf",
          verified: true,
        },
      ],

      auditTrail: [
        {
          action: "OWNER_CREATED",
          timestamp: "2026-04-01T09:00:00Z",
        },
        {
          action: "KYC_VERIFIED",
          timestamp: "2026-04-01T10:05:00Z",
        },
      ],
      communicationSettings: {
        emailAlerts: {
          enabled: true,
          provider: "SMTP",
          alertTypes: [
            "ORDER_CREATED",
            "STOCK_LOW",
            "PAYMENT_RECEIVED",
            "EXPENSE_APPROVED",
            "RECONCILIATION_ALERT",
          ],
          dailyDigestEnabled: true,
        },

        smsAlerts: {
          enabled: true,
          provider: "TWILIO",
          alertTypes: [
            "CRITICAL_STOCK_ALERT",
            "LOGIN_SECURITY_ALERT",
            "PAYMENT_ALERT",
          ],
          senderId: "DIKKO-ERP",
          countryCoverage: ["NG"],
        },

        pushNotifications: {
          enabled: true,
          mobileAppEnabled: true,
        },
      },
    },

    auth: {
      authId: "AUTH-2026-000112",

      clientId: "CLT-2026-000045",

      user: {
        userId: "USR-1001",
        fullName: "Abdullahi Dikko",
        email: "admin@dikko.com",
        phone: "+2348012345678",
        emailVerified: true,
        phoneVerified: true,
      },

      credentials: {
        passwordHash: "$2b$10$XyZEncryptedHashExample",
        passwordUpdatedAt: "2026-04-01T10:00:00Z",
        lastPasswordResetAt: null,
      },

      authentication: {
        method: "EMAIL_PASSWORD",
        status: "ACTIVE",
        lastLoginAt: "2026-04-30T08:10:00Z",
        failedLoginAttempts: 1,
        locked: false,
        lockReason: null,
      },

      sessions: [
        {
          sessionId: "SES-778899",
          device: "Chrome - Windows",
          ipAddress: "102.89.12.45",
          location: "Lagos, Nigeria",
          loginAt: "2026-04-30T08:10:00Z",
          expiresAt: "2026-04-30T18:10:00Z",
          active: true,
        },
      ],

      tokens: {
        accessToken: "",
        refreshToken: "",
        expiresIn: 3600,
      },

      multiFactorAuth: {
        enabled: true,
        method: "TOTP",
        verifiedApps: ["Google Authenticator"],
        backupCodesGenerated: true,
      },

      roles: [
        {
          role: "ADMIN",
          permissions: ["ALL"],
        },
      ],

      security: {
        passwordPolicyCompliant: true,
        twoFactorRequired: true,
        loginAlertsEnabled: true,
        suspiciousActivityMonitoring: true,
      },

      oauthProviders: {
        google: null,
        facebook: null,
      },

      auditTrail: [
        {
          action: "LOGIN_SUCCESS",
          timestamp: "2026-04-30T08:10:00Z",
          ip: "102.89.12.45",
        },
        {
          action: "PASSWORD_LOGIN",
          timestamp: "2026-04-01T10:00:00Z",
        },
      ],
    },

    address: {
      country: "Nigeria",
      state: "Lagos",
      city: "Ikeja",
      street: "12 Allen Avenue",
      postalCode: "100001",
      geoLocation: {
        latitude: 6.605874,
        longitude: 3.349149,
        mapUrl: "https://maps.google.com/?q=6.605874,3.349149",
      },
    },

    bankingDetails: {
      bankName: "Access Bank",
      accountName: "Dikko Supermarket Ltd",
      accountNumber: "0123456789",
      bankCode: "044",
      swiftCode: "ABNGNGLA",
      currency: "NGN",
    },

    taxAndCompliance: {
      taxAuthority: "FIRS",
      vatRegistered: true,
      vatNumber: "VAT-2026-998877",
      taxRateDefault: 7.5,
      complianceLevel: "STANDARD",
      auditRequired: true,
    },

    subscription: {
      plan: "ENTERPRISE",
      status: "ACTIVE",
      startDate: "2026-04-01T00:00:00Z",
      expiryDate: "2027-04-01T00:00:00Z",
      billingCycle: "YEARLY",
      autoRenew: true,
      paymentMethod: "BANK_TRANSFER",
      lastPaymentDate: "2026-04-01T00:00:00Z",
    },

    inventorySettings: {
      multiWarehouseEnabled: true,
      batchTrackingEnabled: true,
      expiryTrackingEnabled: true,
      serialNumberTracking: false,
      autoReorderEnabled: true,
      negativeStockAllowed: false,
      defaultReorderMethod: "MIN_MAX",
      stockValuationMethod: "FIFO",
    },

    financialSettings: {
      baseCurrency: "NGN",
      allowedCurrencies: ["NGN", "USD"],
      fiscalYearStart: "JANUARY",
      taxInclusivePricing: false,
      roundingMethod: "NEAREST",
    },

    warehouses: [
      {
        warehouseId: "WH-001",
        name: "Main Warehouse",
        type: "PRIMARY",
        location: "Ikeja",
        capacity: 5000,
        manager: "USR-2001",
      },
      {
        warehouseId: "WH-002",
        name: "Shop Floor",
        type: "RETAIL",
        location: "Surulere",
        capacity: 1200,
        manager: "USR-2002",
      },
    ],

    users: [
      {
        userId: "USR-1001",
        name: "Admin User",
        role: "ADMIN",
        email: "admin@dikko.com",
        permissions: ["ALL"],
      },
      {
        userId: "USR-1002",
        name: "Inventory Manager",
        role: "MANAGER",
        permissions: ["INVENTORY", "RECONCILIATION"],
      },
    ],

    modulesEnabled: {
      inventory: true,
      orders: true,
      deliveries: true,
      production: true,
      returns: true,
      transfers: true,
      expenses: true,
      reconciliation: true,
      accounting: true,
      reporting: true,
    },

    securitySettings: {
      twoFactorAuthEnabled: true,
      sessionTimeoutMinutes: 30,
      passwordPolicy: {
        minLength: 8,
        requireSpecialChars: true,
        requireNumbers: true,
      },
    },

    apiSettings: {
      apiEnabled: true,
      apiKey: "sk_live_xxxxxxx",
      webhookUrl: "https://dikko.com/webhook",
      rateLimitPerMinute: 120,
    },

    status: "ACTIVE",

    createdAt: "2026-04-30T08:00:00Z",

    auditTrail: [
      {
        action: "REGISTERED",
        by: "SYSTEM",
        timestamp: "2026-04-30T08:00:00Z",
      },
    ],
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
      },
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
        "Programme of study is required",
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
          <h3>High-speed, Secure & Stress-Free to your Business</h3>
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
              <span>Protected by Jool Inventory Laws</span>
            </figure>
            <figure className="fx-ac space2">
              <span>
                <CategoryRoundedIcon fontSize="large" />
              </span>
              <span>13600 + servers</span>
            </figure>
          </div>
          <figure className="regTag">
            <CategoryRoundedIcon fontSize="small" /> <strong>100%</strong> Fast
            & Effortless <strong>Inventory</strong> for All Business
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
        {/* <header className="RegformHeader fx-ac fx-jb space4">
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
        </header> */}
        <div className="fx-cl space3">
          <h2>Industry</h2>

          <select
            id="Industry"
            name="Industry"
            aria-labelledby="LblIndustry InstructIndustry"
            class="mktoField mktoHasWidth mktoRequired mktoInvalid"
            aria-required="true"
            style="width: 150px;"
            aria-describedby="ValidMsgIndustry"
            aria-invalid="true"
          >
            <option value="">Select...</option>
            <option value="3PL">3PL</option>
            <option value="Aerospace &amp; Defense">
              Aerospace &amp; Defense
            </option>
            <option value="Agriculture">Agriculture</option>
            <option value="Apparel">Apparel</option>
            <option value="Automotive">Automotive</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Building Materials">Building Materials</option>
            <option value="Cannabis">Cannabis</option>
            <option value="Chemicals">Chemicals</option>
            <option value="Construction">Construction</option>
            <option value="Consultant">Consultant</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Distribution">Distribution</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Education">Education</option>
            <option value="Electronics">Electronics</option>
            <option value="EngineertoOrder">EngineertoOrder</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Fasteners">Fasteners</option>
            <option value="Firearms">Firearms</option>
            <option value="Food &amp; Beverage">Food &amp; Beverage</option>
            <option value="Furniture &amp; Home Decor">
              Furniture &amp; Home Decor
            </option>
            <option value="Gas &amp; Oil">Gas &amp; Oil</option>
            <option value="GovernmentAndMilitary">GovernmentAndMilitary</option>
            <option value="Soap &amp; Shampoo">Soap &amp; Shampoo</option>
            <option value="High Tech Manufacturing">
              High Tech Manufacturing
            </option>
            <option value="HospitalAndHealthcare">HospitalAndHealthcare</option>
            <option value="HotelAndHospitality">HotelAndHospitality</option>
            <option value="IndustrialMachinery">IndustrialMachinery</option>
            <option value="Job Shop">Job Shop</option>
            <option value="Manufacturing-Other">Manufacturing-Other</option>
            <option value="Marine Parts">Marine Parts</option>
            <option value="Medical">Medical</option>
            <option value="Metal Fabrication">Metal Fabrication</option>
            <option value="Mining">Mining</option>
            <option value="Paper &amp; Packaging">Paper &amp; Packaging</option>
            <option value="Pet Products">Pet Products</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="Plastics &amp; Rubber">Plastics &amp; Rubber</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Retail">Retail</option>
            <option value="Semiconductors">Semiconductors</option>
            <option value="Telecom">Telecom</option>
            <option value="Wire &amp; Cable">Wire &amp; Cable</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="fx-cl space3">
          <h2>Which accounting system are you using?</h2>
          <select
            id="Accounting_System__c"
            name="Accounting_System__c"
            aria-labelledby="LblAccounting_System__c InstructAccounting_System__c"
            class="mktoField mktoHasWidth mktoRequired mktoValid"
            aria-required="true"
            style="width: 150px;"
            aria-invalid="false"
            data-gtm-form-interact-field-id="6"
          >
            <option value="">Select...</option>
            <option value="QuickBooks Enterprise">QuickBooks Enterprise</option>
            <option value="QuickBooks Premier">QuickBooks Premier</option>
            <option value="QuickBooks Premier Plus (subscription)">
              QuickBooks Premier Plus (subscription)
            </option>
            <option value="QuickBooks Pro">QuickBooks Pro</option>
            <option value="QuickBooks Pro Plus (subscription)">
              QuickBooks Pro Plus (subscription)
            </option>
            <option value="QuickBooks Online">QuickBooks Online</option>
            <option value="Xero">Xero</option>
            <option value="Sage">Sage</option>
            <option value="NetSuite">NetSuite</option>
            <option value="Sage Pastel">Sage Pastel</option>
            <option value="Reckon">Reckon</option>
            <option value="Reckon Hosted">Reckon Hosted</option>
            <option value="MYOB">MYOB</option>
            <option value="Other">Other</option>
            <option value="Standalone">Standalone</option>
            <option value="None">None</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

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
            "You can only select up to 4 subjects for this examination session.",
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
            "You can only select up to 4 subjects for this examination session.",
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
