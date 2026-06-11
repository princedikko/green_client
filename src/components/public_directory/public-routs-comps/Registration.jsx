import { useState, useReducer, useEffect, useRef } from "react";
import { countriesOnEarth } from "./registrationStatesAndLGA.js";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { statesAndLgas } from "./registrationStatesAndLGA.js";

// imported icon

import Person2Icon from "@mui/icons-material/Person2";
import Face4Icon from "@mui/icons-material/Face4";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SchoolIcon from "@mui/icons-material/School";

let newClient;

export default function Registration() {
  const wrapperRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const [countryCode, setcountryCode] = useState("+234 - Nigeria");
  const [opencountryCodes, setOpencountryCodes] = useState(false);
  const [openGender, setOpenGender] = useState(false);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTermCountries, setSearchTermCountries] = useState("");
  const handleSearchCountries = (e) => {
    const term = e.target.value;
    setSearchTermCountries(term);

    if (term.trim() === "") {
      setFilteredCountries([]);
    } else {
      const filtered = countriesOnEarth.filter((countries) =>
        countries?.country.toLowerCase().includes(term.toLowerCase()),
      );
      setFilteredCountries(filtered);
    }
  };
  // ****************************** GENERATING APPLICATION NUMBER FOR APPLICANTS **************************************

  // FUNTIONS FOR THE STATE SELECTIONS
  const [selectedState, setSelectedState] = useState("");
  const [localGovernments, setLocalGovernments] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setRegistrationData({ state_of_address: e.target.value });
    setLocalGovernments(statesAndLgas[state] || []);
  };
  // ------------------------
  const [loading, setLoading] = useState(false);
  const [registrationData, setRegistrationData] = useReducer(
    (request, response) => {
      return { ...request, ...response };
    },
    {
      firstName: "",
      surName: "",
      otherName: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      nationality: "",
      international_dialing_code: 0,
      // None Registration  Database Content
      flag: "",
    },
  );

  const actions = useSelector((state) => state.applictaionForm);

  const payload = {
    clientId: "",
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
        firstName: registrationData?.firstName,
        middleName: registrationData?.otherName,
        surName: registrationData?.surName,
        email: registrationData?.email,
        phone: registrationData?.phone,
        dateOfBirth: "",
        gender: registrationData?.gender,
        nationality: registrationData?.nationality,
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
      files: {
        profilImage:
          "https://mangaconsadministrationstafffilesbucket.s3.eu-north-1.amazonaws.com/passport.jpg",
        photo: "",
        tumbPrint: "",
        signature: "",
      },

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
        fullName: `${registrationData?.firstName + " " + registrationData?.surName + " " + registrationData?.otherName}`,
        email: registrationData?.email,
        phone: registrationData?.phone,
        emailVerified: false,
        phoneVerified: false,
      },

      credentials: {
        hashedPassword: registrationData?.password,
        passwordUpdatedAt: "2026-04-01T10:00:00Z",
        lastPasswordResetAt: null,
      },
      pointOfSale: {
        hashedPin: "012026",
        pinUpdatedAt: "",
        lastPinResetAt: "",
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

  const apiPostNewClient = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/new_client/register`,
        payload,
      )
      .then((response) => {
        newClient = response.data.newClient;
        if (response.data.status === 201) {
          setLoading(false);
          enqueueSnackbar(`${response.data.message}`, {
            variant: "success",
            autoHideDuration: 3000,
          });
          navigateTo("/create_new_account/queries?page=1");
        } else if (response.data.status === 408) {
          // This is a fallback for an Existing Email address that is already in use
           setLoading(false);
          enqueueSnackbar(`${response.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
          });
        } else if (response.data.status === 409) {
          // This is a fallback for an Existing Phone number  that is already in use
           setLoading(false);
          enqueueSnackbar(`${response.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
          });
        } {
          setLoading(false);
          enqueueSnackbar(`${response.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
          });
        }
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          enqueueSnackbar(
            `${err.message} : please connect to the internet and try again`,
            {
              variant: "error",
              autoHideDuration: 3000,
            },
          );
        } else {
          enqueueSnackbar(`${err.message}`, {
            variant: "error",
            autoHideDuration: 3000,
            style: {
              fontSize: "18px",
              fontWeight: "bold",
            },
          });
        }
        console.log(err);

        setLoading(false);
      });
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    surName: Yup.string().required("Surname is required"),
    // otherName: Yup.string().required("Other name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("password is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const validateForm = async () => {
    try {
      await validationSchema.validate(registrationData, {
        abortEarly: false,
      });
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

  const executeValidation = async () => {
    const isValid = await validateForm();
    if (isValid) {
      setIsSubmitting(true);
      handleSubmission();
    }
  };

  // URL is the source of truth
  const plan = searchParams.get("plan") || "professional";

  // change plan safely
  const changePlan = (newPlan) => {
    setSearchParams({ plan: newPlan });
  };

  // FUNCTIONS TO RECOGNIZE THE DEVICES COUNTRY LOCATIONS
  async function getUserCountry() {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    return {
      country: data.country_name,
      countryCode: data.country_code,
    };
  }

  /// PAYMENT GATEWAY INTEGRATION

  function accountFee() {
    switch (plan) {
      case "standard":
        return 3865;
      case "professional":
        return 5950;
      case "premium":
        return 16500;
      case "enterprise":
        return 25850;
      default:
        return 5950;
    }
  }
  const config = {
    public_key: process.env.REACT_APP_TEST_PAYMENT_KEY,
    tx_ref: `order-${Date.now()}`,
    amount: `${accountFee()}`,
    currency: "NGN",
    // redirect_url: "http://localhost:3000/create_new_account/queries?page=1",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "nana",
    },
    customizations: {
      title: "Universe Inventory",
      description: "Payment for Universe Inventory Subscription",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // ❌ REMOVED WRONG AUTO CALL (THIS WAS THE BUG)

  /* handleFlutterPayment({
  callback: async (response) => {
    if (
      response.status === "successful" ||
      response.status === "completed"
    ) {
      await activateSubscription(response);
    }

    closePaymentModal();
  },

  onClose: () => {
    console.log("Payment modal closed");
  },
}); */

  // END OF PAYMENT GATEWAY INTEGRATION

  function handleSubmission() {
    handleFlutterPayment({
      callback: async (response) => {
        console.log("Payment response:", response);

        if (
          response.status === "successful" ||
          response.status === "completed"
        ) {
          await apiPostNewClient();
        }

        closePaymentModal();
      },

      onClose: () => {
        console.log("Payment modal closed");
      },
    });
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // clicked outside
        setOpencountryCodes(false);
        setOpenGender(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    async function init() {
      const user = await getUserCountry();

      const match = countriesOnEarth.find((c) => c.country === user.country);

      if (match) {
        setRegistrationData({
          nationality: match.country,
          international_dialing_code: match.code,
          imojies: match.flag,
        });
      }
    }

    init();
  }, []);
  return (
    <>
      {loading ? <IsLoading /> : null}
      <section className="fx-jc" id="regCont">
        <div className="regMainCont fx-cl space2">
          <div className="regHeader fx-cl fx-ac space2">
            <h3>High-speed, Secure & Stress-Free to your Business</h3>
            <div className="regHTag fx-ac">
              <figure className="fx-ac space2">
                <span>
                  <DashboardRoundedIcon fontSize="large" />
                </span>
                <span>Real time sales</span>
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
                <span>Protected by Universe Inventory Laws</span>
              </figure>
              <figure className="fx-ac space2">
                <span>
                  <CategoryRoundedIcon fontSize="large" />
                </span>
                <span>13600 + servers</span>
              </figure>
            </div>
            <figure className="regTag">
              <CategoryRoundedIcon fontSize="small" /> <strong>100%</strong>{" "}
              Fast & Effortless <strong>Inventory</strong> for All Business
            </figure>
          </div>
          <div className="regMainDiv fx-cl space3">
            <div className="fx-ac fx-jb space4">
              <div className=" regStep fx-ac space2">
                <figure>Step 1</figure> <h3>Select your plan</h3>
              </div>
            </div>

            <div className="regPricing fx-as space2">
              <figure
                onClick={() => changePlan("standard")}
                className={`regPricingCard ${plan == "standard" && "active"} fx-cl bestValue`}
              >
                <div className="fx-cl space2">
                  <div className="fx-ac space1">
                    <span className="regPlanRadius">&nbsp;</span>
                    <h5>Standard</h5>
                  </div>
                  <div className="fx-cl spacem">
                    <p className="discountReg">
                      <span>Yearly ₦2,985</span>
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
                    <p className="regPrice">
                      ₦3,865<span style={{ fontSize: "1rem" }}>/Month</span>
                    </p>
                    <span>Monthly</span>
                  </div>

                  {plan == "standard" && (
                    <button
                      onClick={() => {
                        document.getElementById("regFormData")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Make the payment
                    </button>
                  )}
                </div>
              </figure>
              <figure
                onClick={() => changePlan("professional")}
                className={`regPricingCard ${plan == "professional" && "active"} fx-cl bestValue`}
              >
                <span className="bestValueTag">Best value</span>
                <div className="fx-cl space2">
                  <div className="fx-ac space1">
                    <span className="regPlanRadius">&nbsp;</span>
                    <h5>Professional</h5>
                  </div>
                  <div className="fx-cl spacem">
                    <p className="discountReg">
                      <span>Yearly -12%</span>
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
                    <p className="regPrice">
                      ₦5,950<span style={{ fontSize: "1rem" }}>/Month</span>
                    </p>
                    <span>Monthly</span>
                  </div>
                  {plan == "standard" && (
                    <button
                      onClick={() => {
                        document.getElementById("regFormData")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Make the payment
                    </button>
                  )}
                </div>
              </figure>
              <figure
                onClick={() => changePlan("premium")}
                className={`regPricingCard ${plan == "premium" && "active"} fx-cl bestValue`}
              >
                <div className="fx-cl space2">
                  <div className="fx-ac space1">
                    <span className="regPlanRadius">&nbsp;</span>
                    <h5>Premuim</h5>
                  </div>
                  <div className="fx-cl spacem">
                    <p className="discountReg">
                      <span>Yearly -12%</span>
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
                    <p className="regPrice">
                      {" "}
                      ₦16,500
                      <span style={{ fontSize: "1rem" }}>/Month</span>{" "}
                    </p>
                    <span>Monthly</span>
                  </div>
                  {plan == "premium" && (
                    <button
                      onClick={() => {
                        document.getElementById("regFormData")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Make the payment
                    </button>
                  )}
                </div>
              </figure>
              <figure
                onClick={() => changePlan("enterprise")}
                className={`regPricingCard enterprise ${plan == "enterprise" && "active"} fx-cl bestValue`}
              >
                <span className="bestValueTag ">Advance</span>
                <div className="fx-cl space2">
                  <div className="fx-ac space1">
                    <span className="regPlanRadius">&nbsp;</span>
                    <h5>Enterprise</h5>
                  </div>
                  <div className="fx-cl spacem">
                    <p className="discountReg">
                      <span>Yearly -12%</span>
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
                    <p className="regPrice">
                      ₦25,850
                      <span style={{ fontSize: "1rem" }}>/Month</span>{" "}
                    </p>
                    <span>Monthly</span>
                  </div>
                  {plan == "enterprise" && (
                    <button
                      onClick={() => {
                        document.getElementById("regFormData")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Make the payment
                    </button>
                  )}
                </div>
              </figure>
            </div>
          </div>
          <div id="regFormData" className="regMainDiv regFormData fx-cl">
            <div className="fx-cl space3">
              <div className=" regStep fx-ac space2">
                <figure>Step 2</figure> <h3>Select your account plan</h3>
              </div>

              <div className="fx-cl space2 ">
                <div className="fx-ac space2 regFormfloat">
                  <div className="fx-cl spacem">
                    <div
                      className="fx-ac space1 regInputCont"
                      style={{
                        boxShadow: `${
                          errors.firstName && "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <div className="fx-cl">
                        <label htmlFor="text">First name:</label>
                        <input
                          value={registrationData.firstName}
                          onChange={(event) =>
                            setRegistrationData({
                              firstName: event.target.value,
                            })
                          }
                          type="text"
                          name="first_name"
                          style={{ borderColor: errors.firstName ? "red" : "" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fx-cl spacem">
                    <div
                      className="fx-cl space1 regInputCont"
                      style={{
                        boxShadow: `${
                          errors.surName && "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <div className="fx-cl">
                        <label htmlFor="text">Sur name:</label>
                        <input
                          value={registrationData.surName}
                          onChange={(event) =>
                            setRegistrationData({ surName: event.target.value })
                          }
                          type="text"
                          name="sur_name"
                          style={{ borderColor: errors.surName ? "red" : "" }}
                        />
                      </div>
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
                        value={registrationData.otherName}
                        onChange={(event) =>
                          setRegistrationData({ otherName: event.target.value })
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
                      className="fx-ac space1 regInputCont fx-ac"
                      style={{
                        boxShadow: `${
                          errors.gender && "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <div className="registrantions-page-limit">
                        <button
                          className=" fx-ac spacem"
                          onClick={() => setOpenGender(!openGender)}
                        >
                          {registrationData.gender === "male" && (
                            <Person2Icon style={{ fontSize: "1.8rem" }} />
                          )}
                          {registrationData.gender === "female" && (
                            <Face4Icon style={{ fontSize: "1.8rem" }} />
                          )}
                          {!registrationData?.gender
                            ? "Select gender ▾"
                            : registrationData?.gender}
                        </button>

                        {openGender && (
                          <ul
                            ref={wrapperRef}
                            className="registrantions-limit-dropdown"
                          >
                            <li
                              key="01-male"
                              onClick={() => {
                                setRegistrationData({
                                  gender: "male",
                                });
                                setOpenGender(false);
                              }}
                              className="registrantions-limit-item fx-ac spacem"
                            >
                              <Person2Icon style={{ fontSize: "2.8rem" }} />
                              <span>Male</span>
                            </li>

                            <li
                              key="02-female"
                              onClick={() => {
                                setRegistrationData({
                                  gender: "female",
                                });
                                setOpenGender(false);
                              }}
                              className="registrantions-limit-item fx-ac spacem"
                            >
                              <Face4Icon style={{ fontSize: "2.8rem" }} />
                              <span>Female</span>
                            </li>
                          </ul>
                        )}
                      </div>
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
                        value={registrationData.email}
                        onChange={(event) =>
                          setRegistrationData({ email: event.target.value })
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
                          errors.phone && "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <div className="registrantions-page-limit">
                        <button
                          className="registrantions-page-limit-btn fx-ac spacem"
                          onClick={() => setOpencountryCodes(!opencountryCodes)}
                        >
                          <img src={registrationData?.flag} alt="flag" />
                          {registrationData?.international_dialing_code}
                          <span className="registrantions-page-limit-arrow">
                            ▾
                          </span>
                        </button>

                        {opencountryCodes && (
                          <ul
                            ref={wrapperRef}
                            className="registrantions-limit-dropdown"
                          >
                            <li>
                              <input
                                id="searchcountryCode"
                                type="text"
                                placeholder="Search country..."
                                value={searchTermCountries}
                                onChange={handleSearchCountries}
                              />
                            </li>

                            {filteredCountries.length > 0
                              ? filteredCountries.map((item, index) => (
                                  <li
                                    key={index}
                                    onClick={() => {
                                      setRegistrationData({
                                        nationality: item.country,
                                        international_dialing_code: item.code,
                                        flag: item.flag,
                                      });
                                      setFilteredCountries("");
                                      setSearchTermCountries("");
                                      setOpencountryCodes(false);
                                    }}
                                    className="registrantions-limit-item"
                                  >
                                    <img src={item.flag} alt="flag" />
                                    <span>
                                      {item.code}
                                      {item.country}
                                    </span>
                                  </li>
                                ))
                              : countriesOnEarth.map((item, index) => (
                                  <li
                                    key={index}
                                    className="registrantions-limit-item fx-ac spacem"
                                    onClick={() => {
                                      setRegistrationData({
                                        nationality: item.country,
                                        international_dialing_code: item.code,
                                        flag: item.flag,
                                      });

                                      setOpencountryCodes(false);
                                    }}
                                  >
                                    <img src={item.flag} alt="flag" />
                                    <span>
                                      {item.code}
                                      {item.country}
                                    </span>
                                  </li>
                                ))}
                          </ul>
                        )}
                      </div>

                      <input
                        value={registrationData.phone}
                        onChange={(event) =>
                          setRegistrationData({
                            phone: event.target.value,
                          })
                        }
                        type="number"
                        name="phoneNumber"
                      />
                      {/* {errors.phone && (
              <p className="error">{errors.phone}</p>
            )} */}
                    </div>
                  </div>
                </div>

                <div className="fx-ac space2">
                  <div className="fx-cl fg1 spacem">
                    <label htmlFor="text">Password:</label>
                    <div
                      className="fx-ac space1 regInputCont"
                      style={{
                        boxShadow: `${
                          errors.password && "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <input
                        value={registrationData.password}
                        onChange={(event) =>
                          setRegistrationData({ password: event.target.value })
                        }
                        type="password"
                        name="password"
                        style={{ borderColor: errors.password ? "red" : "" }}
                      />
                      {/* {errors.password && <div style={{ color: "red" }}>{errors.password}</div>} */}
                    </div>
                  </div>
                </div>
                <div className="fx-jb space2 regFormfloat">
                  <span>&nbsp;</span>
                  <button
                    className="regbtnSubmit"
                    // onClick={() => executeValidation()}

                    onClick={() => executeValidation()}
                    // disabled={isSubmitting}
                  >
                    Submit application
                  </button>
                </div>

                {/* <div className="fx-cl space3">
                <h2>Industry</h2>

                <select id="Industry" name="Industry">
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
                  <option value="Food &amp; Beverage">
                    Food &amp; Beverage
                  </option>
                  <option value="Furniture &amp; Home Decor">
                    Furniture &amp; Home Decor
                  </option>
                  <option value="Gas &amp; Oil">Gas &amp; Oil</option>
                  <option value="Government and Military">
                    Government and Military
                  </option>
                  <option value="Soap &amp; Shampoo">Soap &amp; Shampoo</option>
                  <option value="High Tech Manufacturing">
                    High Tech Manufacturing
                  </option>
                  <option value="Hospital and Healthcare">
                    HospitalAndHealthcare
                  </option>
                  <option value="Hotel and Hospitality">
                    HotelAndHospitality
                  </option>
                  <option value="Industrial Machinery">
                    IndustrialMachinery
                  </option>
                  <option value="Job Shop">Job Shop</option>
                  <option value="Manufacturing-Other">
                    Manufacturing-Other
                  </option>
                  <option value="Marine Parts">Marine Parts</option>
                  <option value="Medical">Medical</option>
                  <option value="Metal Fabrication">Metal Fabrication</option>
                  <option value="Mining">Mining</option>
                  <option value="Paper &amp; Packaging">
                    Paper &amp; Packaging
                  </option>
                  <option value="Pet Products">Pet Products</option>
                  <option value="Pharmaceuticals">Pharmaceuticals</option>
                  <option value="Plastics &amp; Rubber">
                    Plastics &amp; Rubber
                  </option>
                  <option value="Professional Services">
                    Professional Services
                  </option>
                  <option value="Retail">Retail</option>
                  <option value="Semiconductors">Semiconductors</option>
                  <option value="Telecom">Telecom</option>
                  <option value="Wire &amp; Cable">Wire &amp; Cable</option>
                  <option value="Other">Other</option>
                </select>
              </div> */}
                {/* <div className="fx-cl space3">
                <h2>Which accounting system are you using?</h2>
                <select id="Accounting_System__c" name="Accounting_System__c">
                  <option value="">Select...</option>
                  <option value="QuickBooks Enterprise">
                    QuickBooks Enterprise
                  </option>
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
              </div> */}
                {/* STATE AND LOCAL GOVERNMENTS ON NIGERIA */}
                {/* <div className="fx-jb space2 regFormfloat">
                <div className="g g2 space1">
                  <div className="fx-cl spacem">
                    <div
                      className="fx-cl regInputCont"
                      style={{
                        boxShadow: `${
                          errors.programme_of_study &&
                          "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <label htmlFor="text">State:</label>
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
                    <div
                      className="fx-cl  regInputCont"
                      style={{
                        boxShadow: `${
                          errors.programme_of_study &&
                          "inset 0rem 0rem 0rem 0.1rem red"
                        }`,
                      }}
                    >
                      <label htmlFor="text">LGA:</label>
                      <select
                        disabled={!selectedState}
                        value={registrationData.lga_address}
                        onChange={(event) =>
                          setRegistrationData({ lga_address: event.target.value })
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
                  onClick={executeValidation}
                  disabled={isSubmitting}
                >
                  Next
                </button>
              </div> */}
              </div>
              <div className="fx-cl">
                <p>
                  <strong>
                    Already have an account?{" "}
                    <Link to="/clients_login">Sign in</Link>
                  </strong>
                </p>
                Your information is safe with us. We'll only contact when it's
                required to provide our services.
              </div>
            </div>
            <CurrencySelection
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </div>
          <div className="regMainDiv regFormData fx-cl">
            <Checkout />

            <div>
              aside contents, preferable graphic designed image attracting
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CurrencySelection({ selectedCurrency, setSelectedCurrency }) {
  // Toggle handler
  const toggleCurrency = (title) => {
    setSelectedCurrency((prev) => {
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

  const currency = [
    {
      currency: "NGN",
      country: "Nigeria",
      symbol: "₦",
    },
    {
      currency: "USD",
      country: "United State",
      symbol: "$",
    },
    {
      currency: "NGN",
      country: "Nigeria",
      symbol: "₦",
    },
    {
      currency: "USD",
      country: "United State",
      symbol: "$",
    },
    {
      currency: "NGN",
      country: "Nigeria",
      symbol: "₦",
    },
    {
      currency: "USD",
      country: "United State",
      symbol: "$",
    },
    {
      currency: "NGN",
      country: "Nigeria",
      symbol: "₦",
    },
    {
      currency: "USD",
      country: "United State",
      symbol: "$",
    },
  ];

  return (
    <div className="fx-cl space3">
      <div className=" regStep fx-cl ">
        <div className="fx-ac fx-jb space3">
          <figure>Programme</figure>
          <span>&nbsp;</span>
        </div>
        <h3>Select Currencies</h3>
      </div>

      <div className="fx-cl">
        <p>
          Your information is safe with us. We'll only contact when it's
          required to provide our services.
        </p>
      </div>
      <div className="g g3 space1">
        {currency?.map((item, index) => {
          const isChecked = selectedCurrency.includes(item);

          return (
            <figure
              key={index}
              onClick={() => toggleCurrency(item.currency)}
              className={`regCourses fx-cl ${isChecked && "checked"}`}
            >
              <h3>{item.symbol}</h3>
              <span>{item.currency}</span>
              <figcaption>{item.country}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

function Checkout() {
  // Toggle handler

  return (
    <div className="fx-cl space3">
      <div className=" regStep fx-ac space2">
        <figure>Step 3</figure> <h3>Checkout</h3>
      </div>

      <div className="fx-cl">
        <p>
          Your information is safe with us. We'll only contact when it's
          required to provide our services.
        </p>
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
