// UserAccessControl.jsx
export default function UserAccessControl({ data }) {
  const auth = data?.auth;
  const business = data?.businessProfile;

  const roles = auth?.roles || [];
  const users = business?.users || [];

  return (
    <div className="accountCompClient fx-cl space2">
      <h2 className="fs5 fw600 lh1">User Access Control</h2>
      <p className="fs2">Manage permissions, roles, and account access.</p>

      <div className="g g3 space2">
        <div className="fx-cl lh2">
          <span className="fs1">Authentication Status</span>
          <span className="fw500 fs3">
            {auth?.authentication?.status || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Login Method</span>
          <span className="fw500 fs3">
            {auth?.authentication?.method || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Last Login</span>
          <span className="fw500 fs3">
            {auth?.authentication?.lastLoginAt || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Failed Login Attempts</span>
          <span className="fw500 fs3">
            {auth?.authentication?.failedLoginAttempts ?? "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Account Locked</span>
          <span className="fw500 fs3">
            {auth?.authentication?.locked ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Two Factor Auth</span>
          <span className="fw500 fs3">
            {auth?.multiFactorAuth?.enabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">2FA Method</span>
          <span className="fw500 fs3">
            {auth?.multiFactorAuth?.method || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Session Timeout (mins)</span>
          <span className="fw500 fs3">
            {business?.securitySettings?.sessionTimeoutMinutes ||
              "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Password Policy Compliant</span>
          <span className="fw500 fs3">
            {auth?.security?.passwordPolicyCompliant ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Suspicious Activity Monitoring</span>
          <span className="fw500 fs3">
            {auth?.security?.suspiciousActivityMonitoring
              ? "Enabled"
              : "Disabled"}
          </span>
        </div>
      </div>

      {/* Roles Section */}
      <div className="fx-cl space2">
        <h3 className="fs4 fw600">Roles</h3>

        <div className="g g3 space2">
          {roles.map((r, i) => (
            <div key={i} className="fx-cl lh2">
              <span className="fs1">Role</span>
              <span className="fw500 fs3">{r.role}</span>

              <span className="fs1">Permissions</span>
              <span className="fw500 fs3">
                {r.permissions?.join(", ") || "None"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Users Section */}
      <div className="fx-cl space2">
        <h3 className="fs4 fw600">Users</h3>

        <div className="g g3 space2">
          {users.map((u, i) => (
            <div key={i} className="fx-cl lh2">
              <span className="fs1">Name</span>
              <span className="fw500 fs3">{u.name}</span>

              <span className="fs1">Role</span>
              <span className="fw500 fs3">{u.role}</span>

              <span className="fs1">Email</span>
              <span className="fw500 fs3">{u.email || "Not provided"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
