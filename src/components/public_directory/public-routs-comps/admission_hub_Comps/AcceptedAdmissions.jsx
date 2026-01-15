import { useEffect, useState } from "react";
import axios from "axios";
import IsLoading from "../../../../isLoading";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useSnackbar } from "notistack";
import * as Action from "../../../../store/redux/admission_reducer.js";
import DoneIcon from "@mui/icons-material/Done";
let studentData;
let $admission_number;

export default function AcceptedAdmissions() {
  const { id, appNo, email } = useParams();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const applicantData = useSelector(
    (state) => state.admissionActions.queue.Applicant
  );

  async function getAcceptedADM() {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/student_adm_no?application_number=${appNo}`
      )
      .then((response) => {
        $admission_number = response.data?.data;
        studentData = response.data?.data;
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  function logOutAdm() {
    dispatch(DispatchADMhubLogOut());
  }

  const DispatchADMhubLogOut = () => async (dispatch) => {
    try {
      dispatch(Action.logOut());
    } catch (error) {
      console.log(error);
    }
  };

  function getStudLogin() {
    redirect("/student_login");
    logOutAdm();
  }

  useEffect(() => {
    getAcceptedADM();
  }, []);
  return (
    <>
      {loading ? <IsLoading /> : null}
      <section className="sectionAdmissionHub  fx-cl fx-ac fx-jc">
        <div className="admitCont fx-cl fx-ac space2 checkADM">
          <div className="loogS">
            <DoneIcon style={{ fontSize: "3.4rem" }} />
          </div>
          <span
            style={{
              color: "#18c07a",
              fontSize: "3.5rem",
              fontWeight: "100",
            }}
          >
            Congratulations!!
          </span>
          <strong
            style={{
              color: "#5dd3a2",
              fontWeight: "300",
              fontSize: "3.5rem",
            }}
          >
            {studentData?.personalInfo.first_Name +
              " " +
              studentData?.personalInfo.sur_Name +
              " " +
              studentData?.personalInfo.other_Name}
          </strong>
          <p style={{ textAlign: "center" }}>
            {" "}
            You have successfully got admission into the Manga CONS Zuru, you
            can now login to your student portal and proceed with the next
            procedures!, you are welcome
          </p>

          <p className="fx-cl spacem fx-jc fx-ac">
            <em>Your Admission nubmer is:</em>
            <strong
              style={{
                color: "#5dd3a2",
                fontWeight: "300",
                fontSize: "3.5rem",
              }}
            >
              {$admission_number?.admission_number}
            </strong>
          </p>

          <div className="fx-jc space3">
            <button
              onClick={logOutAdm}
              style={{ backgroundColor: "red", color: "#fff" }}
            >
              Close
            </button>
            <button
              onClick={() => getStudLogin()}
              style={{ backgroundColor: "#46cd95", color: "#fff" }}
            >
              Login here
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
