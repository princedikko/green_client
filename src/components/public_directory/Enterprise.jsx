export default function Enterprise() {
  return (
    <section className="fx-cl space6 pd4">
      {/* HERO */}
      <div className="fx-cl space2">
        <h1 className="fs8 fwb cb">
          Enterprise Inventory Management for Large Teams
        </h1>

        <p className="fs4 cb">
          A powerful system designed for warehouses, multi-branch businesses,
          and large organizations to manage inventory, sales, and staff in real
          time.
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="g g2 space4">
        <div className="fx-cl space2 pd3 bd-f3 br3">
          <h2 className="fs5 fw600">Get Enterprise Access</h2>

          <div className="fx-cl space2">
            <input className="pd-nm br2 bd-b fs4" placeholder="First Name*" />
            <input className="pd-nm br2 bd-b fs4" placeholder="Last Name*" />
            <input className="pd-nm br2 bd-b fs4" placeholder="Work Email*" />

            <div className="fx space2">
              <select className="pd-nm br2 bd-b fs4 fg1">
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
              </select>

              <input
                className="pd-nm br2 bd-b fs4 fg1"
                placeholder="+234 Phone Number*"
              />
            </div>

            <select className="pd-nm br2 bd-b fs4">
              <option>12-15 Users</option>
              <option>16-20 Users</option>
              <option>21+ Users</option>
            </select>

            <button className="pd-btn br2 cblue bd-blue fw600">
              Request Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="fx-cl space3">
          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h2 className="fs5 fw600">Built for Scale</h2>
            <p className="fs4 cb">
              Manage thousands of products, multiple warehouses, and large teams
              with ease.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h2 className="fs5 fw600">Real-Time Control</h2>
            <p className="fs4 cb">
              Every sale, stock update, and staff activity is synced instantly
              across all locations.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h2 className="fs5 fw600">Secure & Reliable</h2>
            <p className="fs4 cb">
              Enterprise-grade security for your business data, users, and
              transactions.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="fx-cl space4">
        <h2 className="fs6 fw600">Enterprise Features</h2>

        <div className="g g3 space3">
          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Multi-Branch Management</h3>
            <p className="fs4 cb">
              Control inventory across multiple stores and warehouses in one
              system.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Staff Activity Tracking</h3>
            <p className="fs4 cb">
              Monitor every action performed by employees in real time.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Advanced Reporting</h3>
            <p className="fs4 cb">
              Generate detailed reports on sales, stock flow, and performance.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Mobile Access</h3>
            <p className="fs4 cb">
              Manage your entire business from anywhere using mobile devices.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Instant Notifications</h3>
            <p className="fs4 cb">
              Get alerts when stock is low or important actions happen.
            </p>
          </div>

          <div className="fx-cl space2 pd3 bd-f3 br3">
            <h3 className="fs5 fw600">Role-Based Access</h3>
            <p className="fs4 cb">
              Control what staff can view, edit, or manage inside the system.
            </p>
          </div>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div className="fx-cl space2 fx-ac pd4 bd-f3 br3">
        <h2 className="fs6 fw600">Trusted by Growing Businesses</h2>

        <p className="fs4 cb">
          From small shops to large warehouses, businesses use our system to
          manage inventory efficiently and scale operations.
        </p>
      </div>
    </section>
  );
}
