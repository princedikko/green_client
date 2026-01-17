import { useState, useEffect } from "react";
import axios from "axios";
import "./items.css";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import * as Action from "../../../../../store/redux/hybrid_reducer.js";
// import from MUI
import IsLoading from "../../../../../isLoading";
import CloseIcon from "@mui/icons-material/Close";

export default function Items({ setChangeView, changeview }) {
  const [loading, setLoading] = useState(false);

  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);

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

  useEffect(() => {
    getApplicants();
  }, []);

  return (
    <>
      {loading ? <IsLoading /> : <div className="item_row">{switchView()}</div>}
    </>
  );
}

function TableView() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.hybridActions.warehouse?.cart);
  function popCart(index) {
    dispatch(Action.removeFromCart(index));
  }

  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price ₦</th>
        </tr>
      </thead>

      <tbody className="fx-cl spacem">
        {cart?.map((item, index) => {
          return (
            <tr key={index}>
              <td>2</td>

              <td>{item.name}</td>
              <td>32 pieces</td>
              <td className="fx-ac space1">
                <span>₦{item.price} </span>
                <button className="removeCart " onClick={() => popCart(index)}>
                  <CloseIcon fontSize="medium" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
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
