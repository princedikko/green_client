import React, { useState } from "react";
import "./svgInteractiveMap.css";
import { nigeria, nigeriaText } from "./interactiveSvgData.js";
import { useSnackbar } from "notistack";

import EventRoundedIcon from "@mui/icons-material/EventRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function SvgInteractiveMap() {
  const { enqueueSnackbar } = useSnackbar();

  const [showModal, setShowModal] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function handleStateFunction(state) {
    enqueueSnackbar(`${state} Data Results for Green Inventory`, {
      variant: "success",
      autoHideDuration: 3000,
      ContentProps: {
        style: { fontSize: "16px", fontWeight: "bold" },
      },
    });
  }

  function handleModalSwitch(event) {
    setOpenModal(!openModal);
    setShowModal(event);
  }

  function closeModalDiv() {
    setOpenModal(!openModal);
    setShowModal("");
  }

  return (
    <div class="map-container fx-jc">
      {openModal && (
        <div id="modalContainer" onClick={() => closeModalDiv()}>
          <StateInfoPreview showModal={showModal} />
        </div>
      )}
      <svg className="map-svg">
        {nigeria?.map((state, index) => (
          <>
            <path
              key={index}
              d={state?.d}
              title={state?.title}
              id={state?.id}
              state={state?.state}
              class={state?.class == "active-state" && "active-state"}
              onClick={() => handleModalSwitch(state?.state)}
            ></path>
          </>
        ))}
        {nigeriaText?.map((state, index) => (
          <text
            key={index}
            x={state?.x}
            y={state?.y}
            text-anchor={state?.text_anchor}
            dominant-baseline={state?.dominant_baseline}
            font-size={state?.font_size}
            fill={state?.active == "active-text" ? "#fff" : "#444"}
            font-weight={state?.font_weight}
            pointer-events={state?.pointer_events}
          >
            <figure className="svg-tooltip">{state?.name}</figure>
            {state?.name}
          </text>
        ))}
      </svg>
    </div>
  );
}

export function StateInfoPreview({ showModal }) {
  const [discountInPercent, setDiscountInPercent] = useState(false);
  const [discountAmount, setDiscountAmount] = useState("");

  return (
    <div
      className="discountCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <span>
        <em>State info:</em>
        <strong> {showModal}</strong>
      </span>
      <div className="discountInputCont fx-jb">
        <h2 className="fx-cl space1">
          <button
            className={`${!discountInPercent && "active"}`}
            onClick={() => setDiscountInPercent(false)}
          >
            ₦
          </button>
          <button
            className={`${discountInPercent && "active"}`}
            onClick={() => setDiscountInPercent(true)}
          >
            %
          </button>
        </h2>
        {discountInPercent ? (
          <input
            type="number"
            name="discount"
            id="discountInput"
            placeholder="%"
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
          />
        ) : (
          <input
            type="number"
            name="discount"
            id="discountInput"
            placeholder="₦"
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
          />
        )}
      </div>
      <div className="fx-cl">
        <div className="fx-cl spacem">
          <div className="discountBar fx-ac fx-jb space2">
            <div className="disBarMdl fx-ac fx-jc">
              <AccountCircleRoundedIcon />
            </div>
            <div className="disBarTop">&nbsp;</div>

            <div className="fx-ac spacem">
              <figure>
                <AccountCircleRoundedIcon />
              </figure>
              <span>Actual</span>
            </div>
            <span> ₦3453</span>
          </div>
          <div className="fx-cl space1">
            <div className="discountBar fx-ac fx-jb space2">
              <div className="disBarBtm">&nbsp;</div>
              <div className="fx-ac spacem">
                <figure>
                  <EventRoundedIcon />
                </figure>
                <span>Discount</span>
              </div>
              <span> ₦ 2321</span>
            </div>
          </div>
        </div>
        <div className=" discountEstimation fx-ac space2 fx-jb">
          <span>Estimated fee</span>
          <span>
            <strong> ₦34534 </strong>
          </span>
        </div>
      </div>
      <div className="discountSubmit fx-ac">
        <button>{showModal}</button>
      </div>
      <div className="discountFoot fx-ac fx-jc">
        <WorkspacePremiumRoundedIcon /> Highly secured and encryped by Green
      </div>
    </div>
  );
}
