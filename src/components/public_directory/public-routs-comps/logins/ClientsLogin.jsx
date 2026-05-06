import "./clientslogin.css";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import * as Action from "../../../../store/redux/client_reducer.js";
import axios from "axios";
import IsLoading from "../../../../IsLoading.jsx";
import Lock from "@mui/icons-material/Lock";
import Person from "@mui/icons-material/Person";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import Logo3D from "../../home-page/logo/universeInventorylogo.png";
import Lady from "./loginImg/lady.png";
import System from "./loginImg/system.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { color } from "framer-motion";

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
    { user_name: "", stud_password: "" },
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
      <div className="client-login-container g">
        <span>&nbsp;</span>
        <div className="clientLoginImg fx-ac">
          <img src={Lady} alt="" />
        </div>
        <div className="client-login-form-cont fx-cl space3">
          <header className="fx-cl space1">
            <h2>
              Welcome <Link>Back</Link>{" "}
            </h2>
            <span>Welcome back, please enter your details</span>
          </header>
          <form className="client-login-form fx-cl space2">
            <div className="fx-ac space1">
              <span>
                <MarkEmailUnreadOutlinedIcon
                  style={{ fontSize: "3.2rem", color: "#333" }}
                />
              </span>
              <figure className="fx-cl" style={{ flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  Username
                </span>
                <input
                  onKeyPress={handleKeyPress}
                  name="user_name"
                  value={clientLoginData.user_name}
                  onChange={(event) =>
                    setClientLoginData({ user_name: event.target.value })
                  }
                  type="text"
                  placeholder="Enter username or email"
                />
              </figure>
            </div>

            <div className="fx-ac  space1">
              <span>
                <HttpsOutlinedIcon
                  style={{ fontSize: "3.2rem", color: "#333" }}
                />
              </span>
              <figure className="fx-cl" style={{ flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  Password
                </span>
                <input
                  onKeyPress={handleKeyPress}
                  name="stud_password"
                  value={clientLoginData.stud_password}
                  onChange={(event) =>
                    setClientLoginData({ stud_password: event.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
              </figure>

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
              <figure className="fx-ac spacem ">
                <input type="checkbox" className="checkbox" />
                <span>remember me</span>
              </figure>
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
            Don't have an account?{" "}
            <Link to="/create_new_account">
              <strong>Create an account</strong>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
