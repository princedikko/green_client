// Preferences.jsx
export default function Preferences({ data }) {
  const business = data?.businessProfile;
  const owner = data?.owner;
  const auth = data?.auth;

  return (
    <div className="accountCompClient fx-cl space2">
      <h2 className="fs5 fw600 lh1">Preferences</h2>
      <p className="fs2">Manage system and user preferences.</p>

      <div className="g g3 space2">
        <div className="fx-cl lh2">
          <span className="fs1">Base Currency</span>
          <span className="fw500 fs3">
            {business?.financialProfile?.baseCurrency || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Tax Rate Default</span>
          <span className="fw500 fs3">
            {business?.financialProfile?.taxRateDefault || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Fiscal Year Start</span>
          <span className="fw500 fs3">
            {business?.financialProfile?.fiscalYearStart || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Revenue Category</span>
          <span className="fw500 fs3">
            {business?.financialProfile?.revenueCategory || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Multi Warehouse Enabled</span>
          <span className="fw500 fs3">
            {business?.systemSettings?.multiWarehouseEnabled ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Multi User Access</span>
          <span className="fw500 fs3">
            {business?.systemSettings?.multiUserAccess ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">API Access Enabled</span>
          <span className="fw500 fs3">
            {business?.systemSettings?.apiAccessEnabled ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Data Retention (Days)</span>
          <span className="fw500 fs3">
            {business?.systemSettings?.dataRetentionPolicyDays ||
              "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Subscription Plan</span>
          <span className="fw500 fs3">
            {business?.subscription?.plan || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Auto Renew</span>
          <span className="fw500 fs3">
            {business?.subscription?.autoRenew ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
}
