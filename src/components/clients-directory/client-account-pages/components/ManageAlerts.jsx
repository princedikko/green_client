// ManageAlerts.jsx
export default function ManageAlerts({ data }) {
  const owner = data?.owner;

  const email = owner?.communicationSettings?.emailAlerts;
  const sms = owner?.communicationSettings?.smsAlerts;
  const push = owner?.communicationSettings?.pushNotifications;

  return (
    <div className="accountCompClient fx-cl space2">
      <h2 className="fs5 fw600 lh1">Manage Alerts</h2>
      <p className="fs2">Manage notifications and alert preferences.</p>

      <div className="g g3 space2">
        <div className="fx-cl lh2">
          <span className="fs1">Email Alerts Enabled</span>
          <span className="fw500 fs3">
            {email?.enabled ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Email Provider</span>
          <span className="fw500 fs3">
            {email?.provider || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Daily Digest</span>
          <span className="fw500 fs3">
            {email?.dailyDigestEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">SMS Alerts Enabled</span>
          <span className="fw500 fs3">
            {sms?.enabled ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">SMS Provider</span>
          <span className="fw500 fs3">
            {sms?.provider || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Sender ID</span>
          <span className="fw500 fs3">
            {sms?.senderId || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Push Notifications</span>
          <span className="fw500 fs3">
            {push?.enabled ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Mobile App Enabled</span>
          <span className="fw500 fs3">
            {push?.mobileAppEnabled ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
}