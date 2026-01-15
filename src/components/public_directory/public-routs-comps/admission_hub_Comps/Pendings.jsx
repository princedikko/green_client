import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import IsLoading from "../../../../isLoading";
import { useNavigate } from "react-router-dom";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function Pendings({ logOut }) {
  const redirect = useNavigate();
  const [loading, setLoading] = useState(false);
  const Applicant = useSelector(
    (state) => state.admissionActions.queue.Applicant
  );

  function handleClick() {
    redirect("/");
  }

  return (
    <>
      <section className="fx-cl fx-ac fx-jc">
        <div
          className="errCont fx-cl fx-ac space2"
          style={{ backgroundColor: "#fafaff" }}
        >
          <div className="errSub" style={{ backgroundColor: "#18c07a" }}>
            <AdminPanelSettingsIcon style={{ fontSize: "5.8rem" }} />
          </div>
          <h3>Dear {Applicant?.first_Name + " " + Applicant?.sur_Name}</h3>
          <p>
            your application is currently under review by our admissions team.
            We are carefully assessing all submitted materials, and you will
            receive an update on the status of your application soon. Thank you
            for your patience and interest in joining us!
          </p>
          <div className="fx-jc space3">
            <button onClick={logOut}>Close</button>

            <button
              style={{ backgroundColor: "#18c07a" }}
              onClick={() => handleClick()}
            >
              Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
