import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function UserProfile({ data }) {
  return (
    <div className="fx-cl spacem">
      <div className="accountCompClient fx-cl space1">
        <div className="fx-ac space">
          <AccountCircleOutlinedIcon className="fs6" />

          <h2 className="fs5 fw600 lh1">User Profile</h2>
        </div>

        <div className="g g3 space2">
          <div className="fx-ac">
            <img
              src={data?.owner?.files?.profilImage}
              alt=""
              style={{
                width: "5.2rem",
                height: "5.2rem",
                borderRadius: "99rem",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">First name</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.firstName || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Middle name</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.middleName || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Surname</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.surName || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Gender</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.gender || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Date of birth</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.dateOfBirth || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Nationality</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.nationality || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Email address</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.email || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Phone number</span>
            <span className="fw500 fs3">
              {data?.owner?.personalInfo?.phone || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Country of residence</span>
            <span className="fw500 fs3">
              {data?.owner?.address?.country || "Not provided"}
            </span>
          </div>
        </div>
      </div>

      <div className="accountCompClient fx-cl space1">
        <div className="fx-ac space">
          <AccountCircleOutlinedIcon className="fs6" />

          <h2 className="fs5 fw600 lh1">Additional Information</h2>
        </div>

        <div className="g g3 space2">
          <div className="fx-cl lh2">
            <span className="fs1">State</span>
            <span className="fw500 fs3">
              {data?.owner?.address?.state || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">City</span>
            <span className="fw500 fs3">
              {data?.owner?.address?.city || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Street address</span>
            <span className="fw500 fs3">
              {data?.owner?.address?.street || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Postal code</span>
            <span className="fw500 fs3">
              {data?.owner?.address?.postalCode || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">KYC status</span>
            <span className="fw500 fs3">
              {data?.owner?.identityVerification?.kycStatus || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">KYC level</span>
            <span className="fw500 fs3">
              {data?.owner?.identityVerification?.kycLevel || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Account status</span>
            <span className="fw500 fs3">
              {data?.owner?.security?.accountStatus || "Not provided"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Primary owner</span>
            <span className="fw500 fs3">
              {data?.owner?.role?.isPrimaryOwner ? "Yes" : "No"}
            </span>
          </div>

          <div className="fx-cl lh2">
            <span className="fs1">Role type</span>
            <span className="fw500 fs3">
              {data?.owner?.role?.type || "Not provided"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
