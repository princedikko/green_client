import { useReducer } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function EmployStaff() {
  const [state, updateState] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      // IDs
      userId: "USR-2026-000001",
      clientId: "CLT-2026-000045",
      ownerId: "OWN-2026-000045",
      employeeId: "EMP-2026-000001",

      // personalInfo
      firstName: "Aisha",
      lastName: "Mohammed",
      middleName: "",
      gender: "female",
      dateOfBirth: "1995-06-15",
      nationality: "Nigerian",
      profilePhoto: "",
      signature: "",

      // contactInfo
      email: "aisha@dikko.com",
      phoneNumber: "+2348012345678",
      alternatePhoneNumber: "",
      emergencyName: "Abdullahi Mohammed",
      emergencyRelationship: "Brother",
      emergencyPhone: "+2348098765432",
      emergencyAddress: "",

      // address
      country: "Nigeria",
      state: "Lagos",
      city: "Ikeja",
      streetAddress: "No 12 Allen Avenue",
      postalCode: "100001",
      geoCoord: "",

      // employment
      staffNumber: "STF-00001",
      designation: "Inventory Manager",
      department: "Inventory",
      employmentType: "FULL_TIME",
      employmentStatus: "ACTIVE",
      dateJoined: "2026-01-15",
      reportingTo: "USR-2026-000010",
      branchId: "BR-001",
      warehouseId: "WH-001",

      // role
      roleId: "ROLE-INVENTORY-MANAGER",
      roleName: "Inventory Manager",
      accessLevel: 3,

      // accessControl
      allowedBranches: ["BR-001", "BR-002"],
      allowedWarehouses: ["WH-001"],
      ipRestrictionEnabled: false,
      allowedIPs: [],

      // authentication
      username: "aisha.m",
      emailVerified: true,
      phoneVerified: true,
      twoFactorEnabled: true,
      lastLoginAt: "2026-05-30T08:45:00Z",
      lastPasswordChangeAt: "2026-04-15T12:00:00Z",
      failedLoginAttempts: 0,
      accountLocked: false,

      // notifications
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: true,

      // activity
      lastActiveAt: "2026-05-30T09:15:00Z",
      loginCount: 257,
      totalActionsPerformed: 1543,

      status: "ACTIVE",
      createdBy: "OWN-2026-000045",
      createdAt: "2026-01-15T08:00:00Z",
      updatedAt: "2026-05-30T09:15:00Z",
    },
  );
  const buildPayload = () => ({
    userId: state.userId,
    clientId: state.clientId,
    ownerId: state.ownerId,
    employeeId: state.employeeId,

    personalInfo: {
      firstName: state.firstName,
      lastName: state.lastName,
      middleName: state.middleName,
      gender: state.gender,
      dateOfBirth: state.dateOfBirth,
      nationality: state.nationality,
      profilePhoto: state.profilePhoto,
      signature: state.signature,
    },

    contactInfo: {
      email: state.email,
      phoneNumber: state.phoneNumber,
      alternatePhoneNumber: state.alternatePhoneNumber,
      emergencyContact: {
        name: state.emergencyName,
        relationship: state.emergencyRelationship,
        phoneNumber: state.emergencyPhone,
        fullAddress: state.emergencyAddress,
      },
    },

    address: {
      country: state.country,
      state: state.state,
      city: state.city,
      streetAddress: state.streetAddress,
      postalCode: state.postalCode,
      geoCoord: state.geoCoord,
    },

    employment: {
      staffNumber: state.staffNumber,
      designation: state.designation,
      department: state.department,
      employmentType: state.employmentType,
      employmentStatus: state.employmentStatus,
      dateJoined: state.dateJoined,
      reportingTo: state.reportingTo,
      branchId: state.branchId,
      warehouseId: state.warehouseId,
    },

    role: {
      roleId: state.roleId,
      roleName: state.roleName,
      accessLevel: state.accessLevel,
    },

    accessControl: {
      allowedBranches: state.allowedBranches,
      allowedWarehouses: state.allowedWarehouses,
      ipRestrictionEnabled: state.ipRestrictionEnabled,
      allowedIPs: state.allowedIPs,
    },

    authentication: {
      username: state.username,
      emailVerified: state.emailVerified,
      phoneVerified: state.phoneVerified,
      twoFactorEnabled: state.twoFactorEnabled,
      lastLoginAt: state.lastLoginAt,
      lastPasswordChangeAt: state.lastPasswordChangeAt,
      failedLoginAttempts: state.failedLoginAttempts,
      accountLocked: state.accountLocked,
    },

    notifications: {
      emailNotifications: state.emailNotifications,
      smsNotifications: state.smsNotifications,
      pushNotifications: state.pushNotifications,
    },

    activity: {
      lastActiveAt: state.lastActiveAt,
      loginCount: state.loginCount,
      totalActionsPerformed: state.totalActionsPerformed,
    },

    status: state.status,
    createdBy: state.createdBy,
    createdAt: state.createdAt,
    updatedAt: state.updatedAt,
  });

  return (
    <section className="sectionUsersCreate">
      <div className="fx-cl spacem">
        {/* ================= GROUP 1 (1–10) ================= */}
        <div className="accountCompClient fx-cl">
          <div className="fx-ac space">
            <AccountCircleOutlinedIcon className="fs6" />
            <h2 className="fs5 fw600 lh1">Personal Information</h2>
          </div>
          <div className=" g g3 space1">
            {/* User ID */}
            <div className="fx-cl spacem">
              <label htmlFor="userId">User ID:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="User ID"
                  value={state.userId}
                  onChange={(e) => updateState({ userId: e.target.value })}
                />
              </div>
            </div>

            {/* Client ID */}
            <div className="fx-cl spacem">
              <label htmlFor="clientId">Client ID:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="Client ID"
                  value={state.clientId}
                  onChange={(e) => updateState({ clientId: e.target.value })}
                />
              </div>
            </div>

            {/* Owner ID */}
            <div className="fx-cl spacem">
              <label htmlFor="ownerId">Owner ID:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="Owner ID"
                  value={state.ownerId}
                  onChange={(e) => updateState({ ownerId: e.target.value })}
                />
              </div>
            </div>

            {/* Employee ID */}
            <div className="fx-cl spacem">
              <label htmlFor="employeeId">Employee ID:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="Employee ID"
                  value={state.employeeId}
                  onChange={(e) => updateState({ employeeId: e.target.value })}
                />
              </div>
            </div>

            {/* First Name */}
            <div className="fx-cl spacem">
              <label>First Name:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="First Name"
                  value={state.firstName}
                  onChange={(e) => updateState({ firstName: e.target.value })}
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="fx-cl spacem">
              <label>Last Name:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="Last Name"
                  value={state.lastName}
                  onChange={(e) => updateState({ lastName: e.target.value })}
                />
              </div>
            </div>

            {/* Middle Name */}
            <div className="fx-cl spacem">
              <label>Middle Name:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="Middle Name"
                  value={state.middleName}
                  onChange={(e) => updateState({ middleName: e.target.value })}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="fx-cl spacem">
              <label>Gender:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="Gender"
                  value={state.gender}
                  onChange={(e) => updateState({ gender: e.target.value })}
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="fx-cl spacem">
              <label>Date of Birth:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  type="date"
                  value={state.dateOfBirth}
                  onChange={(e) => updateState({ dateOfBirth: e.target.value })}
                />
              </div>
            </div>

            {/* Nationality */}
            <div className="fx-cl spacem">
              <label>Nationality:</label>
              <div className="fx-ac space1 regInputCont">
                <input
                  placeholder="Nationality"
                  value={state.nationality}
                  onChange={(e) => updateState({ nationality: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= GROUP 2 (11–20) ================= */}
        <div className="accountCompClient g g3 space1">
          {/* Profile Photo */}
          <div className="fx-cl spacem">
            <label>Profile Photo:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Profile Photo"
                value={state.profilePhoto}
                onChange={(e) => updateState({ profilePhoto: e.target.value })}
              />
            </div>
          </div>

          {/* Signature */}
          <div className="fx-cl spacem">
            <label>Signature:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Signature"
                value={state.signature}
                onChange={(e) => updateState({ signature: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div className="fx-cl spacem">
            <label>Email:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="email"
                value={state.email}
                onChange={(e) => updateState({ email: e.target.value })}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="fx-cl spacem">
            <label>Phone Number:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Phone Number"
                value={state.phoneNumber}
                onChange={(e) => updateState({ phoneNumber: e.target.value })}
              />
            </div>
          </div>

          {/* Alternate Phone */}
          <div className="fx-cl spacem">
            <label>Alternate Phone:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Alternate Phone"
                value={state.alternatePhoneNumber}
                onChange={(e) =>
                  updateState({ alternatePhoneNumber: e.target.value })
                }
              />
            </div>
          </div>

          {/* Emergency Name */}
          <div className="fx-cl spacem">
            <label>Emergency Name:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Emergency Name"
                value={state.emergencyName}
                onChange={(e) => updateState({ emergencyName: e.target.value })}
              />
            </div>
          </div>

          {/* Emergency Relationship */}
          <div className="fx-cl spacem">
            <label>Emergency Relationship:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Emergency Relationship"
                value={state.emergencyRelationship}
                onChange={(e) =>
                  updateState({ emergencyRelationship: e.target.value })
                }
              />
            </div>
          </div>

          {/* Emergency Phone */}
          <div className="fx-cl spacem">
            <label>Emergency Phone:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Emergency Phone"
                value={state.emergencyPhone}
                onChange={(e) =>
                  updateState({ emergencyPhone: e.target.value })
                }
              />
            </div>
          </div>

          {/* Emergency Address */}
          <div className="fx-cl spacem">
            <label>Emergency Address:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Emergency Address"
                value={state.emergencyAddress}
                onChange={(e) =>
                  updateState({ emergencyAddress: e.target.value })
                }
              />
            </div>
          </div>

          {/* Country */}
          <div className="fx-cl spacem">
            <label>Country:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Country"
                value={state.country}
                onChange={(e) => updateState({ country: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* ================= GROUP 3 (21–30) ================= */}
        <div className="accountCompClient g g3 space1">
          <div className="fx-cl spacem">
            <label>State:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="State"
                value={state.state}
                onChange={(e) => updateState({ state: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>City:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="City"
                value={state.city}
                onChange={(e) => updateState({ city: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Street Address:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Street Address"
                value={state.streetAddress}
                onChange={(e) => updateState({ streetAddress: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Postal Code:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Postal Code"
                value={state.postalCode}
                onChange={(e) => updateState({ postalCode: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Geo Coord:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Geo Coord"
                value={state.geoCoord}
                onChange={(e) => updateState({ geoCoord: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Staff Number:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Staff Number"
                value={state.staffNumber}
                onChange={(e) => updateState({ staffNumber: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Designation:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Designation"
                value={state.designation}
                onChange={(e) => updateState({ designation: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Department:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Department"
                value={state.department}
                onChange={(e) => updateState({ department: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Employment Type:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Employment Type"
                value={state.employmentType}
                onChange={(e) =>
                  updateState({ employmentType: e.target.value })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Employment Status:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Employment Status"
                value={state.employmentStatus}
                onChange={(e) =>
                  updateState({ employmentStatus: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* ================= GROUP 4 (31–40) ================= */}
        <div className="accountCompClient g g3 space1">
          <div className="fx-cl spacem">
            <label>Date Joined:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="date"
                value={state.dateJoined}
                onChange={(e) => updateState({ dateJoined: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Reporting To:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Reporting To"
                value={state.reportingTo}
                onChange={(e) => updateState({ reportingTo: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Branch ID:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Branch ID"
                value={state.branchId}
                onChange={(e) => updateState({ branchId: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Warehouse ID:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Warehouse ID"
                value={state.warehouseId}
                onChange={(e) => updateState({ warehouseId: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Role ID:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Role ID"
                value={state.roleId}
                onChange={(e) => updateState({ roleId: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Role Name:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                placeholder="Role Name"
                value={state.roleName}
                onChange={(e) => updateState({ roleName: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Access Level:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="number"
                value={state.accessLevel}
                onChange={(e) =>
                  updateState({ accessLevel: Number(e.target.value) })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Allowed Branches:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.allowedBranches.join(",")}
                onChange={(e) =>
                  updateState({
                    allowedBranches: e.target.value
                      .split(",")
                      .map((v) => v.trim()),
                  })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Allowed Warehouses:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.allowedWarehouses.join(",")}
                onChange={(e) =>
                  updateState({
                    allowedWarehouses: e.target.value
                      .split(",")
                      .map((v) => v.trim()),
                  })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>IP Restriction:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="checkbox"
                checked={state.ipRestrictionEnabled}
                onChange={(e) =>
                  updateState({ ipRestrictionEnabled: e.target.checked })
                }
              />
            </div>
          </div>
        </div>

        {/* ================= GROUP 5 (41–50) ================= */}
        <div className="accountCompClient g g3 space1">
          <div className="fx-cl spacem">
            <label>Allowed IPs:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.allowedIPs.join(",")}
                onChange={(e) =>
                  updateState({
                    allowedIPs: e.target.value.split(",").map((v) => v.trim()),
                  })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Username:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.username}
                onChange={(e) => updateState({ username: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Email Verified:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="checkbox"
                checked={state.emailVerified}
                onChange={(e) =>
                  updateState({ emailVerified: e.target.checked })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Phone Verified:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="checkbox"
                checked={state.phoneVerified}
                onChange={(e) =>
                  updateState({ phoneVerified: e.target.checked })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Two Factor Enabled:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="checkbox"
                checked={state.twoFactorEnabled}
                onChange={(e) =>
                  updateState({ twoFactorEnabled: e.target.checked })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Email Notifications:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="checkbox"
                checked={state.emailNotifications}
                onChange={(e) =>
                  updateState({ emailNotifications: e.target.checked })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>SMS Notifications:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="checkbox"
                checked={state.smsNotifications}
                onChange={(e) =>
                  updateState({ smsNotifications: e.target.checked })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Push Notifications:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="checkbox"
                checked={state.pushNotifications}
                onChange={(e) =>
                  updateState({ pushNotifications: e.target.checked })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Last Active:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.lastActiveAt}
                onChange={(e) => updateState({ lastActiveAt: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Login Count:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="number"
                value={state.loginCount}
                onChange={(e) =>
                  updateState({ loginCount: Number(e.target.value) })
                }
              />
            </div>
          </div>
        </div>

        {/* ================= GROUP 6 (51–55) ================= */}
        <div className="accountCompClient g g3 space1">
          <div className="fx-cl spacem">
            <label>Total Actions:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                type="number"
                value={state.totalActionsPerformed}
                onChange={(e) =>
                  updateState({
                    totalActionsPerformed: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Status:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.status}
                onChange={(e) => updateState({ status: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Created By:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.createdBy}
                onChange={(e) => updateState({ createdBy: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Created At:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.createdAt}
                onChange={(e) => updateState({ createdAt: e.target.value })}
              />
            </div>
          </div>

          <div className="fx-cl spacem">
            <label>Updated At:</label>
            <div className="fx-ac space1 regInputCont">
              <input
                value={state.updatedAt}
                onChange={(e) => updateState({ updatedAt: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="accountCompClient">
          <h1>Create User</h1>

          <button>Create</button>
        </div>
      </div>
    </section>
  );
}
