import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WarningIcon from "@mui/icons-material/Warning";
export default function Rejecteds({ logOut }) {
  const Applicant = useSelector(
    (state) => state.admissionActions.queue.Applicant
  );

  return (
    <>
      <section className="fx-cl fx-ac fx-jc">
        <div
          className="errCont fx-cl fx-ac space2"
          style={{ backgroundColor: "#fafaff" }}
        >
          <div className="errSub">
            <WarningIcon style={{ fontSize: "5.8rem" }} />
          </div>
          <h3>Dear {Applicant?.first_Name + " " + Applicant?.sur_Name}</h3>
          <p>
            {" "}
            "We're sorry to inform you that your application was not
            successfully admitted!. We appreciate your interest and the effort
            you put into the process. We encourage you to keep striving toward
            your goals. Thank you for considering us.
          </p>
          <div className="fx-jc space3">
            <button onClick={logOut}>Close</button>
          </div>
        </div>
      </section>
    </>
  );
}
