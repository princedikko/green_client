import React from "react";
import "./aboutus.css";
import AboutusImg from "./publicImages/asdfdf.png";

export default function AboutUs() {
  return (
    <section className="fx-cl space6 pd4">
      {/* HERO SECTION */}
      <div className="fx-cl space2 fx-ac">
        <h1 className="fs8 fwb cb">About Universe Inventory</h1>
        <p className="fs4 cb fx-ac">
          A modern inventory management system built to help businesses track,
          manage, and scale with ease.
        </p>
      </div>

      {/* MISSION / VISION */}
      <div className="g g2 space4">
        <div className="fx-cl space2 pd3 bd-f3 br3">
          <h2 className="fs6 fw600">Our Mission</h2>
          <p className="fs4 cb">
            To simplify inventory and business operations for SMEs by providing
            a fast, reliable, and real-time tracking system that works anywhere.
          </p>
        </div>

        <div className="fx-cl space2 pd3 bd-f3 br3">
          <h2 className="fs6 fw600">Our Vision</h2>
          <p className="fs4 cb">
            To become the leading inventory and POS platform in Africa,
            empowering every business with smart digital tools.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="fx-cl space3">
        <h2 className="fs6 fw600">What We Do</h2>

        <div className="g g3 space3">
          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Inventory Tracking</h3>
            <p className="fs4 cb">
              Track stock levels, items, and product movements in real time.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">POS System</h3>
            <p className="fs4 cb">
              Sell products, manage receipts, and update inventory instantly.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Mobile Management</h3>
            <p className="fs4 cb">
              Run your business from anywhere using our mobile-first system.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="fx-cl space3">
        <h2 className="fs6 fw600">Why Choose Us</h2>

        <div className="g g2 space3">
          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Real-Time Updates</h3>
            <p className="fs4 cb">
              Every sale, stock update, and action is tracked instantly.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Easy to Use</h3>
            <p className="fs4 cb">
              Simple UI designed for both beginners and advanced users.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fx-cl space2 fx-ac pd4 bd-blue br3">
        <h2 className="fs6 cw">Ready to upgrade your business?</h2>

        <p className="fs4 cw">Start managing your inventory smarter today.</p>

        <button className="pd-btn br2 cblue fw600 bd-w">Get Started</button>
      </div>
    </section>
  );
}
