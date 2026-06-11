import React, { useReducer } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./query-registration.css";

const steps = [
  { id: 1, label: "Account" },
  { id: 2, label: "Personal" },
  { id: 3, label: "Business" },
  { id: 4, label: "Review" },
];

const initialForm = {
  email: "",
  password: "",
  firstName: "",
  surName: "",
  phone: "",
  businessName: "",
  industry: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "field":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialForm;
    default:
      return state;
  }
}

export default function QueryRegistration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [formData, dispatch] = useReducer(formReducer, initialForm);

  const rawStep = parseInt(searchParams.get("step"), 10);
  const currentStep = Number.isNaN(rawStep)
    ? 1
    : Math.min(Math.max(rawStep, 1), steps.length);

  const changeStep = (step) => {
    const safeStep = Math.min(Math.max(step, 1), steps.length);
    setSearchParams({ step: String(safeStep) });
  };

  const handleNext = () => changeStep(currentStep + 1);
  const handlePrev = () => changeStep(currentStep - 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentStep < steps.length) {
      handleNext();
      return;
    }

    // Final form submission can be added here.
    console.log("Registration payload", formData);
    navigate("/account-created/default-plan/registered/client/0001");
  };

  const renderStepBody = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="queryStepFields">
            <label>
              Email address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(event) =>
                  dispatch({
                    type: "field",
                    field: "email",
                    value: event.target.value,
                  })
                }
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(event) =>
                  dispatch({
                    type: "field",
                    field: "password",
                    value: event.target.value,
                  })
                }
                placeholder="Choose a secure password"
                required
              />
            </label>
          </div>
        );
      case 2:
        return (
          <div className="queryStepFields">
            <label>
              First name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(event) =>
                  dispatch({
                    type: "field",
                    field: "firstName",
                    value: event.target.value,
                  })
                }
                placeholder="First name"
                required
              />
            </label>
            <label>
              Surname
              <input
                type="text"
                name="surName"
                value={formData.surName}
                onChange={(event) =>
                  dispatch({
                    type: "field",
                    field: "surName",
                    value: event.target.value,
                  })
                }
                placeholder="Surname"
                required
              />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(event) =>
                  dispatch({
                    type: "field",
                    field: "phone",
                    value: event.target.value,
                  })
                }
                placeholder="+234 800 000 0000"
                required
              />
            </label>
          </div>
        );
      case 3:
        return (
          <div className="queryStepFields">
            <label>
              Business name
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={(event) =>
                  dispatch({
                    type: "field",
                    field: "businessName",
                    value: event.target.value,
                  })
                }
                placeholder="Company or store name"
                required
              />
            </label>
            <label>
              Industry
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={(event) =>
                  dispatch({
                    type: "field",
                    field: "industry",
                    value: event.target.value,
                  })
                }
                placeholder="E.g. Retail, FMCG, Logistics"
                required
              />
            </label>
          </div>
        );
      case 4:
        return (
          <div className="queryReviewSection">
            <h3>Review your registration details</h3>
            <dl>
              <dt>Email</dt>
              <dd>{formData.email || "—"}</dd>
              <dt>First name</dt>
              <dd>{formData.firstName || "—"}</dd>
              <dt>Surname</dt>
              <dd>{formData.surName || "—"}</dd>
              <dt>Phone</dt>
              <dd>{formData.phone || "—"}</dd>
              <dt>Business</dt>
              <dd>{formData.businessName || "—"}</dd>
              <dt>Industry</dt>
              <dd>{formData.industry || "—"}</dd>
            </dl>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="queryRegContainer">
      <div className="queryRegCard">
        <header className="queryRegHeader">
          <h2>Register with Universe</h2>
          <p className="fs5">
            Use the buttons below to move between steps. The current step is
            driven by the URL query.
          </p>
        </header>

        <div className="queryProgressBar">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isComplete = step.id < currentStep;
            return (
              <div
                key={step.id}
                className={`queryStep ${isActive ? "active" : ""} ${isComplete ? "complete" : ""}`}
              >
                <div className="queryStepNumber">{step.id}</div>
                <span>{step.label}</span>
              </div>
            );
          })}
        </div>

        <form className="queryForm" onSubmit={handleSubmit}>
          <div className="queryStepHeader">
            <h3>{steps[currentStep - 1].label}</h3>
            <p>
              Step {currentStep} of {steps.length}
            </p>
          </div>

          {renderStepBody()}

          <div className="queryNavButtons">
            <button
              type="button"
              className="queryButton secondary"
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button type="submit" className="queryButton primary">
              {currentStep === steps.length ? "Submit registration" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
