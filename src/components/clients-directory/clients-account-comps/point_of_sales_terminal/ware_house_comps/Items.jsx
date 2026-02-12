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

export default function Items({ setChangeView, changeview }) {
  const [loading, setLoading] = useState(false);

  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);
  const { products } = useSelector((state) => state.hybridActions.warehouse);

  const dispatch = useDispatch();
  console.log("CART", cart);

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
  const [brands, setBrands] = useState("All brands");
  const [activeRow, setActiveRow] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);
  function popCart(index) {
    dispatch(Action.removeFromCart(index));
  }
  function updateQty(index, qty, available) {
    if (available > 0) {
      dispatch(Action.updateQuantity({ index, qty }));
    } else {
      alert("Item out of stock");
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
              <th>Variety</th>
              <th>Quantity</th>
              <th>Price ₦</th>
            </tr>
          </thead>

          <tbody className="fx-cl spacem">
            {cart.map((item, index) => (
              <tr
                key={index}
                id={item.productId}
                className={`${activeRow == index && "active_warehauseRow"}`}
                onClick={() => setActiveRow(index)}
              >
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <div className="item_row_entries-info fx-ac spacem">
                    <div className="item_row-page-limit">
                      <button
                        className="item_row-page-limit-btn"
                        onClick={() => handleItemDrpdwn()}
                      >
                        {brands}
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
                              onClick={() => {
                                setBrands(n);
                                setOpenItemDrpdwn(false);
                              }}
                            >
                              {n}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="fx-ac spacem">
                  <button
                    onClick={() =>
                      updateQty(
                        index,
                        Number(item.quantity - 1),
                        item.available,
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
                    value={item.quantity}
                    style={{ width: "3.5rem", backgroundColor: "transparent" }}
                    onChange={(event) =>
                      insertQty(
                        index,
                        Number(event.target.value),
                        item.available,
                      )
                    }
                  />
                  <button
                    onClick={() =>
                      updateQty(
                        index,
                        Number(item.quantity + 1),
                        item.available,
                      )
                    }
                  >
                    <AddCircleOutlineIcon fontSize="medium" />
                  </button>
                </td>

                <td className="fx-ac space1">
                  <span>₦{item.unitPrice}</span>
                </td>
                <td className="fx-ac space1">
                  <button className="removeCart" onClick={() => popCart(index)}>
                    <CloseIcon fontSize="large" />
                  </button>
                </td>
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
