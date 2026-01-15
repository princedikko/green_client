import { useState, useReducer, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import IsLoading from "../../../../isLoading";
import axios from "axios";
import * as Action from "../../../../store/redux/executive_reducer.js";
import "./managementlogin.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../../home-page/logo/udus_logo.png";
let executiveData;

export default function ExecutiveLogin() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoaiding] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.executiveFunction);
  // TOGGLE SHOW PASSWORD
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // FETCH DATA FM DB
  const [executiveLoginData, executivesetexecutiveLoginData] = useReducer(
    (reqest, response) => {
      return { ...reqest, ...response };
    },
    { user_name: "", executive_password: "" }
  );

  const executeLogin = async () => {
    const data = {
      user_name: executiveLoginData.user_name,
      executive_password: executiveLoginData.executive_password,
    };
    setLoaiding(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/head_of_school/login`,
        data
      )
      .then((response) => {
        executiveData = response.data.info;
        dispatch(DispatchexecutiveData());
        if (response?.data.status === 201) {
          enqueueSnackbar(`Login success!`, {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
          redirect(
            "/high_authority/executive_officer/dashboard/21df5g45f5d4gdf5dg"
          );
        } else if (response?.data.status === 401) {
          enqueueSnackbar(`${response?.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
        }
        setLoaiding(false);
      })
      .catch((err) => {
        console.log(err);
        setLoaiding(false);
      });
  };

  const DispatchexecutiveData = () => async (dispatch) => {
    try {
      dispatch(Action.startexecutiveAction({ executiveData }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      executeLogin();
    }
  };
  return (
    <>
      {loading ? <IsLoading /> : null}
      <section className="section-management-login">
        <div className="management-login-container rwdG2">
          <div className="management-login-form-cont fx-cl space2">
            <header className="fx-cl space1" style={{ textAlign: "center" }}>
              <h2>executive Sign in</h2>
              <span>Welcome back, enter your details to log in:</span>
            </header>
            <div className="management-login-form fx-cl space3">
              <div className="fx-cl spacem">
                <label htmlFor="admission-number">Email address:</label>
                <div className="fx-ac space1">
                  {/* <span><Person fontSize="large" /></span> */}
                  <input
                    name="user_name"
                    onKeyPress={handleKeyPress}
                    value={executiveLoginData.user_name}
                    onChange={(event) =>
                      executivesetexecutiveLoginData({
                        user_name: event.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter your adm number..."
                  />
                </div>
              </div>
              <div className="fx-cl spacem">
                <label htmlFor="managementPword">Password:</label>
                <div className="fx-ac space1">
                  {/* <span><Lock fontSize="large" /></span> */}
                  <input
                    name="executive_password"
                    onKeyPress={handleKeyPress}
                    value={executiveLoginData.executive_password}
                    onChange={(event) =>
                      executivesetexecutiveLoginData({
                        executive_password: event.target.value,
                      })
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
              {/* <button ><Link to="/executive_profile" style={{color: "white"}}>Login</Link></button> */}
              <button onClick={() => executeLogin()}>Login</button>
              {/* <button onClick={() => alert("Under Development")}>Login</button> */}
              <button
                style={{ backgroundColor: "rgb(78 219 135)" }}
                onClick={() => redirect("/executive_registration")}
              >
                Employment
              </button>
            </div>
            <aside style={{ textAlign: "right" }}>
              <Link to="/">
                <strong>Back to home page</strong>
              </Link>
            </aside>
          </div>
          <div className="management-login-disc fx-cl fx-ac space4 rwdHide">
            <div className="fx-cl space2">
              <h4>Welcome back executive!, Let's get to Work</h4>
              <p style={{ fontSize: "1.6rem" }}>
                This Login is specifically for the executiveistrative Staff of
                Manga College of Nursing Sciences, Zuru
              </p>
            </div>
            <figure
              className="mngLoginImg fx-ac fx-jc"
              style={{ width: "75%" }}
            >
              <img src={Logo} alt="mangacons logo" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
