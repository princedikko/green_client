import { useEffect, useReducer, useState } from "react";
import "./examsSettingPreview.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Action from "../../../../store/redux_computer_base/admin_computer_base_reducer.js";

export default function ExamsSettingPreview({ setLoading }) {
  const dispatch = useDispatch();
  const queue = useSelector(
    (state) => state.adminAssesment.examsSettings.questions
  );
  function clearAll() {
    setLoading(true);
    dispatch(DispatchClearAll());
    setLoading(false);
  }
  const DispatchClearAll = () => async (dispatch) => {
    try {
      dispatch(Action.clearAllQuestion());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="sectionExSetPrvw fx-cl space4">
      <button onClick={() => clearAll()}>Clear All Data</button>

      <div className="fx-cl">
        {queue?.map((response, index) => {
          return (
            <div className="exContCarf">
              <label htmlFor="">Question {index + 1}</label>
              <p>{response.question}</p>
              <div className="fx-cl spacem">
                {response.option.map((e, i) => {
                  return (
                    <div key={i} className="fx-ac spacem">
                      <span>{e.key}</span>
                      <span>{e.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
