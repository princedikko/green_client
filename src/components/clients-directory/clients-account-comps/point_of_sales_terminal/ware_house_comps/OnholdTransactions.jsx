import "./onholdTransactions.css";
import { useDispatch } from "react-redux";
import * as Action from "../../../../../store/redux/hybrid_reducer.js";

import Im from "../images/im.png";
import Mi from "../images/mi.png";
import Mm from "../images/mm.png";

import SaveAsIcon from "@mui/icons-material/SaveAs";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import LayersClearIcon from "@mui/icons-material/LayersClear";

import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function OnholdTransactions({
  onHoldData,
  attendOnHold,
  moveOnHoldToDraft,
  handleHoldedSale,
}) {
  const dispatch = useDispatch();

  function deleteOnHold(index) {
    dispatch(Action.deleteOnholdDispatch(index));
  }

  return (
    <div
      className="OnholdedTransCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="OnholdedHeadCont fx-cl spac2">
        <h2>On-Hold Sales</h2>
        <div className="onHoldedBar fx-ac fx-jb spacem">
          <span className="tab">
            <strong>{onHoldData?.length}: </strong>are on hold
          </span>
          <div className="fx-ac fx-jb space1">
            <button onClick={() => attendOnHold()}>
              <ReceiptLongIcon fontSize="medium" />
            </button>
            <button>
              <DeleteForeverIcon fontSize="medium" />
            </button>
            <button onClick={() => moveOnHoldToDraft()}>
              <SaveAsIcon fontSize="medium" />
            </button>
          </div>
        </div>
      </div>
      <div className="OnholdedCardCont g g3 space2">
        {onHoldData?.map((item, index) => {
          return (
            <figure key={index} className="onholdTCard fx-cl space1">
              <div className="fx-ac fx-jb spacem">
                <span className="tab">
                  <strong> {item?.buyings?.length}</strong>{" "}
                  {item?.buyings?.length == 1 ? "Item" : "Items"}
                </span>
                <div className="actionBtns fx-ac fx-jb space1">
                  <button onClick={() => deleteOnHold(index)}>
                    <DeleteForeverIcon
                      style={{ fontSize: "1.8rem", color: "#f59797" }}
                    />
                  </button>
                  <button onClick={() => moveOnHoldToDraft()}>
                    <SaveAsIcon style={{ fontSize: "1.8rem" }} />
                  </button>
                  <button onClick={() => alert("Receipt Printed")}>
                    <LocalPrintshopIcon style={{ fontSize: "1.8rem" }} />
                  </button>
                </div>
              </div>
              <div className="fx-cl spacem">
                <div className="fx-cl spacem">
                  <h3>{item?.customer_name}</h3>
                  <p> {item?.note}</p>
                </div>
                <div
                  className="aside fx-ac space1"
                  onClick={() => attendOnHold(item)}
                >
                  <figure className="fx-ac fx-jc">
                    <ReceiptLongIcon style={{ fontSize: "2rem" }} />
                  </figure>
                  <div className="fx-cl">
                    <strong style={{ fontSize: "1.6rem" }}>
                      Cost: ₦
                      {item?.buyings
                        ?.reduce(
                          (sum, itm) => sum + itm.unitPrice * itm.quantity,
                          0,
                        )
                        .toLocaleString()}
                    </strong>
                    <p style={{ fontSize: "1.12rem" }}>Attend this Sale </p>
                  </div>
                </div>
              </div>
            </figure>
          );
        })}
      </div>
      <div className="fx-ac space3 fx-jc">
        <div className="discountFoot fx-ac fx-jc">
          <ForumRoundedIcon /> Sales place On-Hold are deleted when business is
          closed
        </div>
      </div>
    </div>
  );
}
