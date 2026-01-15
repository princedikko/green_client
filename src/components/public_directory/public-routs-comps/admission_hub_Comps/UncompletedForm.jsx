import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function Uncompleted({ logOut }) {
  const redirect = useNavigate();
  const Applicant = useSelector(
    (state) => state.admissionActions.queue.Applicant
  );

  function continueApp() {
    redirect("/registrations");
    logOut();
  }

  return (
    <section className="fx-cl fx-ac fx-jc">
      <div
        className="errCont fx-cl fx-ac space2"
        style={{ backgroundColor: "#fafaff" }}
      >
        <div className="errSub">
          <PriorityHighIcon style={{ fontSize: "5.8rem" }} />
        </div>
        <h3>Dear {Applicant?.first_Name + " " + Applicant?.sur_Name}</h3>
        <p>
          It appears your application form is incomplete. Please click the
          button below to proceed to the form and complete the required
          information.
        </p>
        <div className="fx-jc space3">
          <button onClick={() => logOut()}>Close</button>

          <button
            style={{ backgroundColor: "#18c07a" }}
            onClick={() => continueApp()}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
