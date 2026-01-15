import "./clientslogin.css";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import * as Action from "../../../../store/redux/client_reducer.js";
import axios from "axios";
import IsLoading from "../../../../isLoading.jsx";
import Lock from "@mui/icons-material/Lock";
import Person from "@mui/icons-material/Person";
import Logo3D from "../../home-page/logo/udus_logo.png";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

let clientData;

export default function ClientsLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [isloadin, setIslaoding] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const [clientLoginData, setClientLoginData] = useReducer(
    (reqest, response) => {
      return { ...reqest, ...response };
    },
    { user_name: "", stud_password: "" }
  );

  const executeLogin = async () => {
    const data = {
      user_name: clientLoginData.user_name,
      stud_password: clientLoginData.stud_password,
    };
    setIslaoding(true);
    await axios
      .post(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/clients/logins`, data)
      .then((response) => {
        clientData = response.data;
        console.log("login response:", response);
        dispatch(DispatchClientData());
        if (response?.data.status === 201) {
          enqueueSnackbar(`Login success!`, {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
          redirect(`/clients/${response.data?.info?._id}/account`);
        } else if (response?.data.status === 401) {
          enqueueSnackbar(`${response?.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
        }
        setIslaoding(false);
      })
      .catch((err) => {
        setIslaoding(false);
        console.log(err);
      });
  };

  const DispatchClientData = () => async (dispatch) => {
    try {
      // dispatch an action
      dispatch(Action.startclientAction({ clientData }));
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
    <section className="section-client-login">
      {isloadin ? <IsLoading /> : null}
      <div className="client-login-container g g2">
        <div className="client-login-form-cont fx-cl space3">
          <figure className="loginLogo" style={{ width: "4.5rem" }}>
            <img src={Logo3D} alt="logo" />
          </figure>
          <header className="fx-cl space1">
            <h2>
              Login to your{" "}
              <Link to="/portal/clients/client_account">Account</Link>{" "}
            </h2>
            <span>Welcome back, enter your details to log in:</span>
          </header>
          <form className="client-login-form fx-cl space2">
            <div className="fx-ac space1">
              <span>
                <Person fontSize="large" />
              </span>
              <input
                onKeyPress={handleKeyPress}
                name="user_name"
                value={clientLoginData.user_name}
                onChange={(event) =>
                  setClientLoginData({ user_name: event.target.value })
                }
                type="text"
                placeholder="Adm number..."
              />
            </div>

            <div className="fx-ac space1">
              <span>
                <Lock fontSize="large" />
              </span>
              <input
                onKeyPress={handleKeyPress}
                name="stud_password"
                value={clientLoginData.stud_password}
                onChange={(event) =>
                  setClientLoginData({ stud_password: event.target.value })
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
            <aside className="fx-jb">
              <span>
                <span>
                  {" "}
                  <input type="checkbox" />
                </span>{" "}
                remember me
              </span>
              <span>
                <Link>
                  <strong>forgot password?</strong>
                </Link>
              </span>
            </aside>
            <Link>
              {/* <button onClick={() => executeLogin()}>Login</button> */}
              <button onClick={() => executeLogin()}>Login</button>
            </Link>
          </form>
          <aside style={{ textAlign: "center" }}>
            dont have an account?{" "}
            <Link to="/registrations">
              <strong>Create an account</strong>
            </Link>
          </aside>
        </div>
        <div className="client-login-disc fx-cl fx-jc fx-ac space3">
          <figure>
            <img src={Logo3D} alt="someting" />
          </figure>
          <div>
            <h4>Connect to your School</h4>
            <p>
              Login to your acccount using your admission number and password
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
