import { useReducer, useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./stafflogin.css";
import { useDispatch } from "react-redux";
import * as Action from "../../../../store/redux/staff_reducer.js";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Logo from "../../home-page/logo/udus_logo_3d.png";
import { Link, useNavigate } from "react-router-dom";

import IsLoading from "../../../../isLoading.jsx";
let staffData;
export default function Stafflogin() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const [staffLoginData, setStaffLoginData] = useReducer(
    (reqest, response) => {
      return { ...reqest, ...response };
    },
    { user_name: "", staff_password: "" }
  );

  const executeLogin = async () => {
    const data = {
      user_name: staffLoginData.user_name,
      staff_password: staffLoginData.staff_password,
    };

    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/staff_login`, data)
      .then((response) => {
        staffData = response.data.info;
        dispatch(DispatchstaffData());
        if (response?.data.status === 201) {
          enqueueSnackbar(`Login success!`, {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
          redirect("/school-management/account/staff_profile");
        } else if (response?.data.status === 401) {
          enqueueSnackbar(`${response?.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const DispatchstaffData = () => async (dispatch) => {
    try {
      dispatch(Action.startStaffAction({ staffData }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      executeLogin();
    }
  };

  // TOGGLE SHOW PASSWORD
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <section className="section-staff-login">
      {loading ? <IsLoading /> : null}

      <div className="staff-login-container g g2">
        <div className="staff-login-disc fx-cl space4">
          <div className="fx-cl space2">
            <h4>Let's help you serve</h4>
            <p style={{ fontSize: "1.6rem" }}>
              This page is exclusively for staff members of UDUPS to log in.
            </p>
          </div>
          <figure>
            <img src={Logo} alt="image" />
          </figure>
        </div>
        <div className="staff-login-form-cont fx-cl space3">
          <header className="fx-cl space1" style={{ textAlign: "center" }}>
            <h2>Admin Login</h2>
            <span>Welcome back ADMIN, let's log in.</span>
          </header>
          <div className="staff-login-form fx-cl space3">
            <div className="fx-cl spacem">
              <label htmlFor="admission-number">Email address:</label>
              <div className="fx-ac space1">
                {/* <span><Person fontSize="large" /></span> */}
                <input
                  name="user_name"
                  onKeyPress={handleKeyPress}
                  value={staffLoginData.user_name}
                  onChange={(event) =>
                    setStaffLoginData({ user_name: event.target.value })
                  }
                  type="text"
                  placeholder="Enter your adm number..."
                />
              </div>
            </div>
            <div className="fx-cl spacem">
              <label htmlFor="staffPword">Password:</label>
              <div className="fx-ac space1">
                {/* <span><Lock fontSize="large" /></span> */}
                <input
                  name="staff_password"
                  onKeyPress={handleKeyPress}
                  value={staffLoginData.staff_password}
                  onChange={(event) =>
                    setStaffLoginData({ staff_password: event.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                />
                <span
                  style={{ cursor: "pointer" }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <VisibilityOff fontSize="large" />
                  ) : (
                    <Visibility fontSize="large" />
                  )}
                </span>
              </div>
            </div>
            <aside className="fx-jb">
              <span>
                <span>
                  <input type="checkbox" />
                </span>
                remember me
              </span>
              <span>
                <Link>
                  <strong>forgot password?</strong>
                </Link>
              </span>
            </aside>
            {/* <Link to="/staff_account" style={{ color: "white" }}> */}
            <button onClick={() => executeLogin()}>Login</button>
            {/* </Link> */}
          </div>
          <aside style={{ textAlign: "center" }}>
            dont have an account?{" "}
            <Link to="/">
              <strong>Back to home page</strong>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
