import { useState, useEffect } from "react";
import axios from "axios";
import "./items.css";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import * as Action from "../../../../../store/redux/hybrid_reducer.js";
// import from MUI
import IsLoading from "../../../../../IsLoading";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Items() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="item_row">
          <ItemsList dispatch={dispatch} />
        </div>
      )}
    </>
  );
}

function ItemsList() {
  const [openItemDrpdwn, setOpenItemDrpdwn] = useState(false);
  const [accordion, setAccordion] = useState(null);
  const [brands, setBrands] = useState("All brands");
  const [activeRow, setActiveRow] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);

  function popCart(index) {
    dispatch(Action.removeFromCart(index));
  }
  function updatePackage(index, pkg, available) {
    if (available > 0) {
      setBrands(pkg);
      setOpenItemDrpdwn(false);
      dispatch(Action.updateSwitchPackage({ index, pkg }));
    } else {
      alert("Item out of stock");
    }
  }
  function updateQty(index, qty, available) {
    if (Number(available) >= Number(qty)) {
      if (qty > 0) {
        dispatch(Action.updateQuantity({ index, qty }));
      } else {
        alert("Cannot be less than One item");
      }
    } else {
      alert("Item out of stock:", index);
    }
  }
  function insertQty(index, qty, available) {
    if (available > 0) {
      dispatch(Action.insertQuantity({ index, qty }));
    } else {
      alert("Insufficient items, pleas enter less quantity");
    }
  }

  function handleItemDrpdwn(index) {
    setOpenItemDrpdwn(!openItemDrpdwn);
    if (activeRow === index) {
      setActiveRow(null);
    } else {
      setActiveRow(index);
    }
  }

  return (
    <>
      {cart && cart.length > 0 ? (
        <table className="fx-cl spacem">
          <thead className="fx-cl spacem">
            <tr>
              <th>S/N</th>
              <th>Item</th>
              <th>Base Unit</th>
              <th>Quantity</th>
              <th>Price ₦</th>
              <th>Estimate ₦</th>
            </tr>
          </thead>

          <tbody className="fx-cl spacem">
            {cart.map((item, index) => (
              <tr
                key={index}
                id={`${accordion == index && "itemAccordionOpen"}`}
                className="itemRowTdCont"
              >
                <td
                  id={item?.sku}
                  className={`itemRowTd ${activeRow == index && "active_warehauseRow"}`}
                  onClick={() =>
                    accordion == index
                      ? setAccordion(null)
                      : setAccordion(index)
                  }
                >
                  <span>
                    <strong>{index + 1}</strong>
                  </span>
                  <span>{item?.name}</span>
                  <span>
                    <div className="item_row_entries-info fx-ac spacem">
                      <div className="item_row-page-limit">
                        <button
                          onClick={() => handleItemDrpdwn()}
                          style={{ color: "#222", textTransform: "capitalize" }}
                        >
                          <span className="item_row-page-limit-arrow">
                            {item?.unit}
                          </span>
                        </button>

                        {openItemDrpdwn && activeRow == index && (
                          <ul className="item_row-limit-dropdown">
                            {[
                              "Pieces",
                              "Bundle",
                              "Dosen",
                              "Cattom",
                              "Rim",
                              "Packet",
                              "Torn",
                            ].map((n) => (
                              <li
                                key={n}
                                className="item_row-limit-item"
                                onClick={() =>
                                  updatePackage(index, n, item?.soldQuantity)
                                }
                              >
                                {n}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </span>
                  <span
                    className="fx-ac spacem"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() =>
                        updateQty(
                          index,
                          Number(item?.soldQuantity - 1),
                          item?.batch.quantity,
                        )
                      }
                    >
                      <RemoveCircleOutlineIcon
                        fontSize="medium"
                        style={{ color: "#f35e6a" }}
                      />
                    </button>
                    <input
                      type="text"
                      value={item?.soldQuantity}
                      style={{
                        width: "3.5rem",
                        backgroundColor: "transparent",
                        textAlign: "center",
                      }}
                      onChange={(event) =>
                        insertQty(
                          index,
                          Number(event.target.value),
                          item?.batch?.quantity,
                        )
                      }
                    />
                    <button
                      onClick={() =>
                        updateQty(
                          index,
                          Number(item?.soldQuantity + 1),
                          item?.batch.quantity,
                        )
                      }
                    >
                      <AddCircleOutlineIcon fontSize="medium" />
                    </button>
                  </span>

                  <span className="fx-ac space1">
                    <span>
                      ₦{item?.pricing?.sellingPrice?.toLocaleString()}
                    </span>
                  </span>
                  <span className="fx-ac space1">
                    <span>
                      ₦
                      {(
                        item?.pricing?.sellingPrice * item?.soldQuantity
                      ).toLocaleString()}
                    </span>
                  </span>
                  <span
                    className="fx-ac space1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="removeCart"
                      onClick={() => popCart(index)}
                    >
                      <CloseIcon fontSize="large" />
                    </button>
                  </span>
                </td>
                <span className="itemAccordionCont">
                  <div className="itemAccordionDisc fx-ac space1">
                    <figure className="fx-ac fx-jc">
                      <ShoppingCartIcon
                        style={{
                          fontSize: "9.5rem",
                          color: "rgb(233 245 243)",
                        }}
                      />
                    </figure>
                    <div className="itemAccordionDetails g g4 space1">
                      <div className="fx-cl spacem ">
                        <span>Brand</span>
                        <p>
                          <strong>{item?.brand}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem">
                        <span>Batch</span>
                        <p>
                          <strong>adfs</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Item SKU</span>
                        <p>
                          <strong>{item?.sku}</strong>
                        </p>
                      </div>

                      <div className="fx-cl spacem">
                        <span>Base Unit</span>
                        <div className="item_row-page-limit">
                          <button
                            onClick={() => handleItemDrpdwn()}
                            style={{
                              color: "#222",
                              textTransform: "capitalize",
                            }}
                          >
                            {item?.unit}
                            <span className="item_row-page-limit-arrow">▾</span>
                          </button>

                          {openItemDrpdwn && activeRow == index && (
                            <ul className="item_row-limit-dropdown">
                              {[
                                "Pieces",
                                "Bundle",
                                "Dosen",
                                "Cattom",
                                "Rim",
                                "Packet",
                                "Torn",
                              ].map((n) => (
                                <li
                                  key={n}
                                  className="item_row-limit-item"
                                  onClick={() =>
                                    updatePackage(index, n, item?.soldQuantity)
                                  }
                                >
                                  {n}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="fx-cl spacem">
                        <span>Expiry Date</span>
                        <p>
                          <strong>{item?.batch?.expiryDate}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Size</span>
                        <p>
                          <strong>{item?.barcode}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Attribute</span>
                        <p>
                          <strong>{item?.barcode}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Bar Code</span>
                        <p>
                          <strong>{item?.barcode}</strong>
                        </p>
                      </div>

                      <div className="fx-ac space1">
                        <button
                          className="controlButtons"
                          style={{
                            cursor: cart.length > 0 ? "pointer" : "not-allowed",
                            opacity: cart.length > 0 ? 1 : 0.6, // optional, to show disabled look
                          }}
                        >
                          <span>Return item</span>
                        </button>
                        <button
                          className="controlButtons"
                          style={{
                            cursor: cart.length > 0 ? "pointer" : "not-allowed",
                            opacity: cart.length > 0 ? 1 : 0.6, // optional, to show disabled look
                          }}
                        >
                          <RemoveCircleOutlineIcon />
                          <span>Edit</span>
                        </button>
                        <button
                          className="controlButtons"
                          style={{
                            cursor: cart.length > 0 ? "pointer" : "not-allowed",
                            opacity: cart.length > 0 ? 1 : 0.6, // optional: show disabled look
                          }}
                        >
                          <LocalPrintshopIcon />
                          <span>Discount</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </span>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center" }}>... Scan bar code or add items</p>
      )}
    </>
  );
}
