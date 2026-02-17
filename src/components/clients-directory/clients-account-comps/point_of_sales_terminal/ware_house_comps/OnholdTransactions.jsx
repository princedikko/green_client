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
      <h2>On-Hold Sales</h2>
      <div className="fx-ac fx-jb spacem">
        <span className="tab">
          <strong>Items: </strong>
          32
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
      <div className="OnholdedCardCont g g3 space2">
        {onHoldData?.map((item, index) => {
          return (
            <figure key={index} className="onholdTCard fx-cl space2">
              <div className="fx-ac fx-jb spacem">
                <span className="tab">
                  <strong>Items: </strong>
                  {item?.buyings?.length}
                </span>
                <div className="fx-ac fx-jb space1">
                  <button onClick={() => attendOnHold(item)}>
                    <ReceiptLongIcon fontSize="medium" />
                  </button>
                  <button onClick={() => deleteOnHold(index)}>
                    <DeleteForeverIcon fontSize="medium" />
                  </button>
                  <button onClick={() => moveOnHoldToDraft()}>
                    <SaveAsIcon fontSize="medium" />
                  </button>
                </div>
              </div>
              <div className="fx-cl spacem">
                <div className="fx-cl spacem">
                  <h3>{item?.customer_name}</h3>
                  <p>{item?.note}</p>
                </div>
                <div className="aside fx-ac space1">
                  <figure>%</figure>
                  <div className="fx-cl spacem">
                    <strong>
                      {" "}
                      Total: ₦{" "}
                      {item?.buyings
                        ?.reduce(
                          (sum, itm) => sum + itm.unitPrice * itm.quantity,
                          0,
                        )
                        .toLocaleString()}
                    </strong>
                    <p>Lorem ipsum dolor </p>
                  </div>
                </div>
              </div>
            </figure>
          );
        })}
      </div>
      <div className="fx-ac space3 fx-jb">
        <button
          onClick={() => {
            handleHoldedSale();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
