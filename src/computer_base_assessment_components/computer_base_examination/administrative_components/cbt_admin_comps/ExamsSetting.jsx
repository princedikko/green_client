import { useEffect, useReducer, useState } from "react";
import "./examsSetting.css";
import ExamsSettingPreview from "./ExamsSettingPreview.jsx";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Action from "../../../../store/redux_computer_base/admin_computer_base_reducer.js";
import SettingExamsComp from "./examssettingcomps/SettingExamsComp.jsx";
export default function EXamsSetting({ setLoading }) {
  const [toggleComps, setToggleComps] = useState("");

  function switchCompCont() {
    switch (toggleComps) {
      case "set":
        return <SettingExamsComp setLoading={setLoading} />;
      case "preview":
        return <ExamsSettingPreview setLoading={setLoading} />;
      default:
        return <SettingExamsComp setLoading={setLoading} />;
    }
  }

  return (
    <section className="fx-cl space3">
      <nav className="fx-ac space4">
        <button onClick={() => setToggleComps("set")}>Set Questions</button>
        <button onClick={() => setToggleComps("preview")}>
          Preview Questions
        </button>
      </nav>
      {switchCompCont()}
    </section>
  );
}
