export default function CompanyDetails({ data }) {
  const business = data?.businessProfile;
  const owner = data?.owner;

  return (
    <div className="fx-cl spacem">
      {/* ===== CONTAINER 1 ===== */}
      <div className="accountCompClient fx-cl space2">
        <h2 className="fs5 fw600 lh1">Company Details</h2>
        <p className="fs2">Manage company information and business identity.</p>

        <div className="g g3 space2">
          <div className="fx-cl lh2">
            <span className="fs1">Business Name</span>
            <span className="fw500 fs3">
              {business?.basicInfo?.businessName || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Legal Name</span>
            <span className="fw500 fs3">
              {business?.basicInfo?.legalName || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Trading Name</span>
            <span className="fw500 fs3">
              {business?.basicInfo?.tradingName || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Business Type</span>
            <span className="fw500 fs3">
              {business?.basicInfo?.businessType || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Industry</span>
            <span className="fw500 fs3">
              {business?.basicInfo?.industry || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Description</span>
            <span className="fw500 fs3">
              {business?.basicInfo?.description || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Business Stage</span>
            <span className="fw500 fs3">
              {business?.operationalProfile?.businessStage || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Branches</span>
            <span className="fw500 fs3">
              {business?.operationalProfile?.numberOfBranches || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Employees</span>
            <span className="fw500 fs3">
              {business?.operationalProfile?.employeeCount || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Transaction Volume</span>
            <span className="fw500 fs3">
              {business?.operationalProfile?.dailyTransactionVolume ||
                "Not provided"}
            </span>
          </div>
        </div>
      </div>

      {/* ===== CONTAINER 2 ===== */}
      <div className="accountCompClient fx-cl space2">
        <div className="g g3 space2">
          <div className="fx-cl lh2">
            <span className="fs1">Registration Number</span>
            <span className="fw500 fs3">
              {business?.registration?.registrationNumber || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Registration Type</span>
            <span className="fw500 fs3">
              {business?.registration?.registrationType || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Country</span>
            <span className="fw500 fs3">
              {business?.registration?.registrationCountry || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Registration Date</span>
            <span className="fw500 fs3">
              {business?.registration?.registrationDate || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">TIN</span>
            <span className="fw500 fs3">
              {business?.registration?.taxIdentificationNumber ||
                "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">VAT Registered</span>
            <span className="fw500 fs3">
              {business?.registration?.vatRegistered ? "Yes" : "No"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Bank Name</span>
            <span className="fw500 fs3">
              {data?.bankingDetails?.bankName || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Account Number</span>
            <span className="fw500 fs3">
              {data?.bankingDetails?.accountNumber || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Currency</span>
            <span className="fw500 fs3">
              {data?.bankingDetails?.currency || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Compliance Level</span>
            <span className="fw500 fs3">
              {data?.taxAndCompliance?.complianceLevel || "Not provided"}
            </span>
          </div>
        </div>
      </div>

      {/* ===== CONTAINER 3 ===== */}
      <div className="accountCompClient fx-cl space2">
        <div className="g g3 space2">
          <div className="fx-cl lh2">
            <span className="fs1">Account Status</span>
            <span className="fw500 fs3">
              {business?.status || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Logo</span>
            <span className="fw500 fs3">
              {business?.branding?.logoUrl ? "Uploaded" : "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Website</span>
            <span className="fw500 fs3">
              {business?.branding?.website || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Primary Color</span>
            <span className="fw500 fs3">
              {business?.branding?.primaryColor || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Documents</span>
            <span className="fw500 fs3">
              {owner?.documents?.length
                ? `${owner.documents.length} uploaded`
                : "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Signature</span>
            <span className="fw500 fs3">
              {owner?.files?.signature ? "Uploaded" : "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Audit Logs</span>
            <span className="fw500 fs3">
              {owner?.auditTrail?.length || 0} records
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
