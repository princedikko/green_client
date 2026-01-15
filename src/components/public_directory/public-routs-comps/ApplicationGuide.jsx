import React from "react";
import "./applicationGuide.css";
import { Link } from "react-router-dom";

const ApplicationGuide = () => {
  return (
    <div className="section_AppGuide">
      <div className="how-to-apply-container fx-cl space1">
        <h1 className="heading">How to Apply</h1>
        <p className="intro">
          Welcome to the application portal for Manga College of Nursing
          Sciences, Zuru. <br /> Follow these simple steps to successfully apply
          for admission.
        </p>

        <div className="steps fx-cl space3">
          <div className="step">
            <h2>Step 1: Access the Application Form Page</h2>
            <p>
              Click on the <strong>"Application Form"</strong> link to begin
              your application process. This will redirect you to the dedicated
              application page.
            </p>
          </div>

          <div className="step">
            <h2>Step 2: Choose Your Application Type</h2>
            <p>
              <strong>New Applicants:</strong> If you are a new applicant, click
              on the <em>"Start New Application"</em> button to create your
              application profile.
            </p>
            <p>
              <strong>Returning Applicants:</strong> If you have already paid
              your application form fee, click on the{" "}
              <em>"Continue Application"</em> button to proceed where you left
              off.
            </p>
          </div>

          <div className="step">
            <h2>Step 3: Fill Out Your Application</h2>
            <p>
              For <strong>New Applicants</strong>, provide all the required
              personal details on the form accurately. Ensure that all fields
              are completed before proceeding.
            </p>
          </div>

          <div className="step">
            <h2>Step 4: Payment of Application Fee</h2>
            <p>
              - The application fee is <strong>₦10,000</strong> (Ten Thousand
              Naira Only). <br />
              - Select your preferred payment method and follow the instructions
              to complete your payment securely. <br />- After payment, you will
              receive a confirmation email & SMS with a reference number.
            </p>
          </div>

          <div className="step">
            <h2>Step 5: Continue Your Application</h2>
            <p>
              After successful payment, you will be redirected to continue
              completing the application form. Provide additional information,
              upload required documents,
            </p>
            <ol>
              <li>
                Passport Photograph: A recent passport-sized photo with a white
                background (JPEG or PNG format, less than 2MB).
              </li>
              <li>
                SSCE Results: A clear scan of your Senior Secondary School
                Examination results (WAEC, NECO, or NABTEB).
              </li>
              <li>
                Primary School Leaving Certificate: Evidence of primary
                education.
              </li>
              <li>National ID: Proof of your nationality</li>
              <li>
                Local Government Indegine: A certificate from your Local
                Government Area.
              </li>
            </ol>
          </div>

          <div className="step">
            <h2>Step 6: Submit Your Application</h2>
            <p>
              Review all the information you have provided to ensure it is
              correct. Click on the <strong>"Submit"</strong> button to finalize
              your application. A confirmation message will appear, and you will
              receive updates via email or SMS.
            </p>
          </div>
        </div>

        <div className="notes fx-cl space1">
          <h3>Important Notes:</h3>
          <ul>
            <li>
              Ensure that you use a valid and accessible email address and phone
              number during the application process.
            </li>
            <li>
              Double-check all entries for accuracy before submitting your
              application.
            </li>
            <li>
              If you encounter any issues, contact the admissions office via
              email at <strong>[info.mangacons@gmail.com]</strong> or call{" "}
              <strong>[+234 8063 996 056]</strong>.
            </li>
          </ul>
        </div>

        <div className="help-section">
          <h3>We’re Here to Help!</h3>
          <p>
            If you have questions or need assistance, visit our FAQ section or
            contact the admissions team. We wish you the best of luck in your
            application process and look forward to welcoming you to Manga
            College of Nursing Sciences, Zuru!
          </p>
        </div>
        <Link to="/registrations" className="app_guide_btn">
          Apply now
        </Link>
      </div>
    </div>
  );
};

export default ApplicationGuide;
