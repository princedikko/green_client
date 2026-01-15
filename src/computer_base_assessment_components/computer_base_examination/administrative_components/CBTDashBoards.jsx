import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./cbtdashboards.css";
import * as Action from "../../../store/redux_computer_base/admin_computer_base_reducer";
// importing components
import EXamsSetting from "./cbt_admin_comps/ExamsSetting";
import ExamsSettingPreview from "./cbt_admin_comps/ExamsSettingPreview";
// Icons import
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
// ________________________________________________________________________________________________
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import IsLoading from "../../../isLoading";
import dataUpload from "../student_components/cbtClientComps/dataupload";
export default function CBTDashBoards() {
  const [loading, setLoading] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [examsContentReady, setExamsContentReady] = useState(false);
  const dispatch = useDispatch();
  const active = useSelector(
    (state) => state.adminAssesment.dashboard?.nav_trace
  );
  console.log(dataUpload);
  const [examsSettings, setExamsSettings] = useState({
    subject: "",
    duration: "",
    time: "",
    date: "",
    level: "",
    staff_id: "",
    instructions: "",
    course_title: "",
    course_code: "",
  });

  var dataSample = {
    key: { $numberInt: "4" },
    question: "Ships that  are",
    option: [
      { letter: "A", values: "Cargo ships" },
      { letter: "B", values: "Fishing boats" },
      { letter: "C", values: "Submarines" },
      { letter: "D", values: "Ocean liners" },
    ],
  };
  // const [active, setActive] = useState("done");

  function AsideItem(props) {
    return (
      <span style={{ width: "90%" }}>
        <Link
          to={props.link}
          className={` itemsPf cb fx-ac  space1 ${
            active === `${props.hooks}` ? "sidenavCBTactive" : null
          }`}
          onClick={() => {
            handleNavigator(props.active);
            // setActive(`${props.active}`);
          }}
          style={{ padding: ".7rem 1.8rem" }}
        >
          {props.icon}
          {props.img}

          <span>{props.name}</span>
        </Link>
      </span>
    );
  }

  function switchComponents() {
    switch (active) {
      case "account":
        return "account";
      case "exams":
        return <ExamSettingsForm />;
      case "tasks":
        return "tasks";
      case "results":
        return "results";
      case "attendance":
        return "attendance";
      case "records":
        return "records";
      case "setting":
        return "Change your Password here ...";
      default:
        return "Default Page";
    }
  }

  const ExamSettingsForm = () => {
    const [examsSettings, setExamsSettings] = useState({
      subject: "",
      duration: "",
      time: "",
      date: "",
      level: "",
      staff_id: "",
      instructions: "",
      course_title: "",
      course_code: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setExamsSettings((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const dispatchExamsContent = () => {
      setLoading(true);
      dispatch(DispatchExamsContent(examsSettings));
      setExamsContentReady(true);
      setLoading(false);
    };
    const DispatchExamsContent = (examsSettings) => async (dispatch) => {
      try {
        dispatch(Action.loadExamsContents({ examsSettings }));
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        {!examsContentReady ? (
          <div className="fx-cl">
            <form className="fx-cl space1">
              {Object.keys(examsSettings).map((key) => (
                <div key={key}>
                  <label className="block capitalize">
                    {key.replace("_", " ")}:
                  </label>
                  <input
                    type={
                      key === "date" ? "date" : key === "time" ? "time" : "text"
                    }
                    name={key}
                    value={examsSettings[key]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </form>
            <div className="fx-jb">
              <span>&nbsp;</span>{" "}
              <button onClick={() => dispatchExamsContent()}>Push</button>
            </div>
          </div>
        ) : (
          <EXamsSetting setLoading={setLoading} />
        )}
      </>
    );
  };

  // Redux functions
  function handleNavigator(item) {
    dispatch(DispatchNavigator(item));
  }
  const DispatchNavigator = (item) => async (dispatch) => {
    try {
      dispatch(Action.navigator({ item }));
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setLoading(true);
    dispatch(DispatchLogOut());
  };
  const DispatchLogOut = () => async (dispatch) => {
    try {
      dispatch(Action.logOut());
    } catch (error) {
      console.log(error);
    }
  };

  const apiUploadSubject = async () => {
    const payload = dataUpload;
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/eduTech/upload_exam_questions`,
        payload
      )
      .then((response) => {
        console.log("login response:", response);
        if (response?.data.status === 201) {
          enqueueSnackbar(`${response?.data.message}`, {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
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

  return (
    <section className="sectionCBTDashBoards">
      {loading ? <IsLoading /> : null}

      <div className="cbtAdminCont ">
        <div className="cbtAdminAside fx-cl fx-as space1">
          <div className="cbtAdminAsideSec fs2 cwb fx-cl fx-ac space1 ">
            <AsideItem
              name="Exams settings"
              icon={<DashboardRoundedIcon fontSize="large" />}
              hooks="exams"
              active="exams"
            />
            <AsideItem
              name="Active tasks"
              icon={<PeopleAltRoundedIcon fontSize="large" />}
              hooks="tasks"
              active="tasks"
            />

            <AsideItem
              name="Results"
              icon={<AssignmentRoundedIcon fontSize="large" />}
              hooks="results"
              active="results"
            />
            <AsideItem
              name="Attendance"
              icon={<CategoryRoundedIcon fontSize="large" />}
              hooks="attendance"
              active="attendance"
            />
            <AsideItem
              name="Records"
              icon={<PeopleAltRoundedIcon fontSize="large" />}
              hooks="records"
              active="records"
            />
            {/* 
            <figure className="prfLinksto fx-ac space2 fx-jb">
              <span>Enventory</span>
              <span>Edits</span>
            </figure> */}

            {/* <AsideItem
              name="Setting"
              //  img={//  <img src={i3} alt="icon" />}
              active="setting"
            /> */}

            <button
              className=" logout_cbtAdmin fx-ac space1"
              onClick={() => logOut()}
            >
              <LogoutOutlinedIcon />
              <span>Close</span>
            </button>
          </div>
        </div>

        <div className="cbtAdminContents fx-cl space4">
          <div className="cbtAdminHeader fx-ac fx-jb">
            <span className="fx-ac fx-jc space1">
              <span>
                <Link to="/cbt" className="fx-ac fx-jc space1">
                  <CastForEducationOutlinedIcon fontSize="large" />
                  <span>Computer Base Assessment</span>
                </Link>
              </span>
            </span>
            <span className="fx-ac fx-jc space3">
              <span className="notifBtn fx-ac fx-jc space1">
                <NotificationsActiveOutlinedIcon fontSize="large" />
                <figure>0</figure>
              </span>
              <span className="fx-ac fx-jc space1">
                <Link
                  className="fx-ac space1"
                  // onClick={() => setActive("account")}
                >
                  <button
                    onClick={() => apiUploadSubject()}
                    style={{
                      backgroundColor: "pink",
                      borderRadius: ".8rem",
                      padding: ".5rem .9rem",
                    }}
                  >
                    Test Question upload
                  </button>
                  <figure className="dp fx-ac"></figure>
                </Link>
              </span>
            </span>
          </div>
          {switchComponents()}
        </div>
      </div>
    </section>
  );
}
