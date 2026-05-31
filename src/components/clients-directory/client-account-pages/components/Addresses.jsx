// Addresses.jsx
export default function Addresses({ data }) {
  const business = data?.businessProfile;
  const owner = data?.owner;
  const companyAddress = business?.location?.headOffice;
  const personalAddress = owner?.address;
  const geo = data?.address?.geoLocation;

  return (
    <div className="accountCompClient fx-cl space2">
      <h2 className="fs5 fw600 lh1">Addresses</h2>
      <p className="fs2">Manage company and billing addresses.</p>

      <div className="g g3 space2">
        <div className="fx-cl lh2">
          <span className="fs1">Head Office Country</span>
          <span className="fw500 fs3">
            {companyAddress?.country || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Head Office State</span>
          <span className="fw500 fs3">
            {companyAddress?.state || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Head Office City</span>
          <span className="fw500 fs3">
            {companyAddress?.city || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Head Office Address</span>
          <span className="fw500 fs3">
            {companyAddress?.address || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Postal Code</span>
          <span className="fw500 fs3">
            {companyAddress?.postalCode || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Personal Country</span>
          <span className="fw500 fs3">
            {personalAddress?.country || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Personal State</span>
          <span className="fw500 fs3">
            {personalAddress?.state || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Personal City</span>
          <span className="fw500 fs3">
            {personalAddress?.city || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Personal Street</span>
          <span className="fw500 fs3">
            {personalAddress?.street || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Geo Location</span>
          <span className="fw500 fs3">
            {geo?.latitude && geo?.longitude
              ? `${geo.latitude}, ${geo.longitude}`
              : "Not provided"}
          </span>
        </div>
      </div>
    </div>
  );
}
