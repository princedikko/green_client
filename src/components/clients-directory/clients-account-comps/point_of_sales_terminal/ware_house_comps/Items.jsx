import { useState, useEffect } from "react";
import axios from "axios";
import "./items.css";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import * as Action from "../../../../../store/redux/hybrid_reducer.js";
// import from MUI
import IsLoading from "../../../../../isLoading";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Items({ setChangeView, changeview }) {
  const [loading, setLoading] = useState(false);

  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);
  const { products } = useSelector((state) => state.hybridActions.warehouse);

  const dispatch = useDispatch();
  console.log(
    "CART",
    useSelector((state) => state.hybridActions.warehouse?.cart),
  );

  function switchView() {
    switch (changeview) {
      case "grid":
        return <CardView dispatch={dispatch} />;
      case "table":
        return <TableView dispatch={dispatch} />;
      default:
        return <TableView dispatch={dispatch} />;
    }
  }

  async function getApplicants() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/form_sales`)
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  // useEffect(() => {
  //   getApplicants();
  // }, []);

  return (
    <>
      {loading ? <IsLoading /> : <div className="item_row">{switchView()}</div>}
    </>
  );
}

function TableView() {
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
    if (available >= qty) {
      if (qty > 0) {
        dispatch(Action.updateQuantity({ index, qty }));
      } else {
        alert("Cannot be less than One item");
      }
    } else {
      alert("Item out of stock:", index);
      console.log("index", index);
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
              <th>Purchase Unit</th>
              <th>Quantity</th>
              <th>Price ₦</th>
              <th>Estimate ₦</th>
            </tr>
          </thead>

          <tbody className="fx-cl spacem">
            {cart.map((item, index) => (
              <div className={`${accordion == index && "itemAccordionOpen"}`}>
                <tr
                  key={index}
                  id={item.sku}
                  className={`${activeRow == index && "active_warehauseRow"}`}
                  onClick={() =>
                    accordion == index
                      ? setAccordion(null)
                      : setAccordion(index)
                  }
                >
                  <td>
                    <strong>{index + 1}</strong>
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <div className="item_row_entries-info fx-ac spacem">
                      <div className="item_row-page-limit">
                        <button
                          onClick={() => handleItemDrpdwn()}
                          style={{ color: "#222", textTransform: "capitalize" }}
                        >
                          {item.packaging}
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
                                  updatePackage(
                                    index,
                                    n,
                                    item.batches[index]?.quantity,
                                  )
                                }
                              >
                                {n}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </td>
                  <td
                    className="fx-ac spacem"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() =>
                        updateQty(
                          index,
                          Number(item.sellingQuantity - 1),
                          item.batches[index]?.quantity,
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
                      value={item.sellingQuantity}
                      style={{
                        width: "3.5rem",
                        backgroundColor: "transparent",
                        textAlign: "center",
                      }}
                      onChange={(event) =>
                        insertQty(
                          index,
                          Number(event.target.value),
                          item.batches[0]?.quantity,
                        )
                      }
                    />
                    <button
                      onClick={() =>
                        updateQty(
                          index,
                          Number(item.sellingQuantity + 1),
                          item.batches[0]?.quantity,
                        )
                      }
                    >
                      <AddCircleOutlineIcon fontSize="medium" />
                    </button>
                  </td>

                  <td className="fx-ac space1">
                    <span>₦{item.pricing?.sellingPrice.toLocaleString()}</span>
                  </td>
                  <td className="fx-ac space1">
                    <span>
                      ₦
                      {(
                        item.pricing?.sellingPrice * item?.sellingQuantity
                      ).toLocaleString()}
                    </span>
                  </td>
                  <td
                    className="fx-ac space1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="removeCart"
                      onClick={() => popCart(index)}
                    >
                      <CloseIcon fontSize="large" />
                    </button>
                  </td>
                </tr>
                <div className="itemAccordionCont">
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
                          <strong>{item.brand}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem">
                        <span>Batch</span>
                        <p>
                          <strong>{item.batches[0].batchNo}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Item SKU</span>
                        <p>
                          <strong>{item.sku}</strong>
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
                            {item.units.baseUnit}
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
                                    updatePackage(
                                      index,
                                      n,
                                      item.batches[index]?.quantity,
                                    )
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
                          <strong>
                            {item.batches[0].expiryDate.slice(0, 7)}
                          </strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Size</span>
                        <p>
                          <strong>{item.barcode}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Attribute</span>
                        <p>
                          <strong>{item.barcode}</strong>
                        </p>
                      </div>
                      <div className="fx-cl spacem ">
                        <span>Bar Code</span>
                        <p>
                          <strong>{item.barcode}</strong>
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
                </div>
              </div>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center" }}>... Scan bar code or add items</p>
      )}
    </>
  );
}

function CardView() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);
  return (
    <div className="girdViewCont">
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
