import { useReducer, useState } from "react";
import "./optionalbuttons.css";
import axios from "axios";
import { useSnackbar } from "notistack";
import Imgs from "../../images/Udupss_girl.png";
import OnholdTransactions from "../OnholdTransactions";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { isDraft } from "@reduxjs/toolkit";

export function OnHold({ handleOnHold, cart, customerName }) {
  const [note, setNote] = useReducer((state, payload) => {
    return ({ ...state, ...payload }, { note: "" });
  });

  return (
    <div
      className="putOnHoldCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="putOnHoldhead fx-ac spacem fx-jc">
        <p>Hold Transaction</p>
      </div>
      <div className="putOnHoldDisc fx-cl">
        <div className="putOnHoldRow ">
          <div className="fx-ac spacem">
            <ShoppingCartIcon fontSize="large" /> <span>Products:</span>
          </div>
          <p>{cart?.length} items</p>
        </div>
        <div className="putOnHoldRow ">
          <div className="fx-ac spacem">
            <EventRoundedIcon fontSize="large" /> <span>Grand Total:</span>
          </div>
          <p>
            <strong>
              ₦{" "}
              {cart
                .reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
                .toLocaleString()}
            </strong>
          </p>
        </div>
        <div className="putOnHoldRow">
          <div className="fx-ac spacem">
            <WorkspacePremiumRoundedIcon fontSize="large" />{" "}
            <span>Discount:</span>
          </div>
          <p>None</p>
        </div>
        <div className="putOnHoldRow ">
          <div className="fx-ac spacem">
            <AccountCircleRoundedIcon fontSize="large" /> <span>Customer:</span>
          </div>
          <p>{customerName}</p>
        </div>
      </div>
      <div className="putOnHoldButtom fx-cl space2 fx-jc">
        <div className="fx-ac">
          <textarea
            name=""
            id=""
            cols="3"
            placeholder="This support grant is desgined eligible applicants."
            onChange={(x) => setNote({ note: x.target.value })}
          ></textarea>
        </div>

        <div className="fx-ac space3 fx-jc">
          <button
            onClick={() => {
              handleOnHold(
                "Please note that this transaction is on hold",
                note?.note,
              );
            }}
          >
            Put On-hold
          </button>
        </div>
      </div>
    </div>
  );
}
export function AddNewProduct({ handleOnHold }) {
  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Are you sure you want to prospond this selling?</h3>
      <p>You are about to temporarily save this transaction</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            handleOnHold();
          }}
        >
          Prospond
        </button>
      </div>
    </div>
  );
}
export function ClearCart({ clearCart, cart, customer, setOpenModal }) {
  const [cashCollected, setCashCollected] = useState(0);
  const grandTotal = cart?.reduce(
    (sum, item) => sum + item.pricing.sellingPrice * item.soldQuantity,
    0,
  );
  return (
    <div
      className="clearCartCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="clearCarthead fx-ac fx-jc">
        <figure>&nbsp;</figure>
        <p>Are you sure?</p>
        <figure>&nbsp;</figure>
      </div>
      <div className="clearCartDiscCont ">
        <div className="clearCartDisc fx-cl">
          <div className="clearCartRow">
            <div className="fx-ac spacem">
              <WorkspacePremiumRoundedIcon fontSize="large" />{" "}
              <span>Customer:</span>
            </div>
            <p> {customer.toLocaleString()}</p>
          </div>
          <div className="clearCartRow ">
            <div className="fx-ac spacem">
              <ShoppingCartIcon fontSize="large" /> <span>Products:</span>
            </div>
            <p>{cart?.length} items</p>
          </div>
          <div className="clearCartRow ">
            <div className="fx-ac spacem">
              <EventRoundedIcon fontSize="large" /> <span>Grand Total:</span>
            </div>
            <p>
              <strong>₦ {grandTotal.toLocaleString()}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="clearCartButtom fx-cl space2 fx-jc">
        <div className="fx-ac">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            repellendus vel ratione laudantium, eligendi maiores tenetur ea,
            dignissimos perferendis, sequi totam qui.
          </p>
        </div>

        <div className="fx-ac space3 fx-jc">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
}
export function SaveDraft({ salesPayload }) {
  const { enqueueSnackbar } = useSnackbar();
  const {
    cart,
    discount,
    customerName,
    setLoading,
    secondaryFunction,
    setAlert,
    subTotal,
    tax,
  } = salesPayload;

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    isDraft: true,
    draftId: "JDRTY3453453",
    paymentType: "nill",
    items: cart,
    discount: discount,
    customerName: customerName,
    date: new Date().toISOString(),
  };

  async function saveDraft() {
    try {
      setLoading(true);
      secondaryFunction();
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/:id/point_of_sales/save_draft`,
        payload,
      );
      if (response?.data?.status === 201) {
        enqueueSnackbar(response?.data?.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(response?.data?.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }

      console.log("Credit sale response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      enqueueSnackbar("An error occurred while submitting the cash payment", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }
  // -------------------------------------------------------------------

  return (
    <div className="saveDraftCard fx-ae" onClick={(e) => e.stopPropagation()}>
      <div className="fx-cl space2">
        <h3>Save This Transaction as DRAFT?.</h3>
        <p>Empowering kids with confidence to create a successful future</p>
        <button
          onClick={() => {
            saveDraft();
          }}
        >
          Save Draft
        </button>
      </div>
      <figure>
        <img src={Imgs} alt="here" />
      </figure>
    </div>
  );
}
export function Quotation({ salesPayload }) {
  const { enqueueSnackbar } = useSnackbar();

  const {
    cart,
    discount,
    customerName,
    setLoading,
    secondaryFunction,
    setAlert,
    subTotal,
    tax,
  } = salesPayload;
  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////
  const payload = {
    type: "quotation",

    quoteId: "QUO-000145",

    customerId: "cust-3344",
    customer_name: customerName,

    warehouseId: "sdr3-1234-sdfg-5678",

    soldItems: cart,

    currency: "NGN",

    totals: {
      subtotal: 4100,
      discount: 0,
      taxAmount: 307.5,
      total: 4407.5,
    },

    quotBy: {
      userId: "user-22",
      name: "Cashier 1",
    },

    payment: null,

    status: "draft", //"draft" "sent" "accepted" "rejected" "converted"

    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  async function saveQuotation() {
    try {
      setLoading(true);
      secondaryFunction();
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/:id/point_of_sales/quotation`,
        payload,
      );
      if (response?.data?.status === 201) {
        enqueueSnackbar(response?.data?.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(response?.data?.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }

      console.log("Quotation response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      enqueueSnackbar("An error occurred while submitting the quotation", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }
  // -------------------------------------------------------------------

  return (
    <div className="saveDraftCard fx-ae" onClick={(e) => e.stopPropagation()}>
      <div className="fx-cl space2">
        <h3>Save This Transaction as DRAFT?.</h3>
        <p>Empowering kids with confidence to create a successful future</p>
        <button
          onClick={() => {
            saveQuotation();
          }}
        >
          Save Quotation
        </button>
      </div>
      <figure>
        <img src={Imgs} alt="here" />
      </figure>
    </div>
  );
}
export function Discount({ cart }) {
  const [discountInPercent, setDiscountInPercent] = useState(false);
  const [discountAmount, setDiscountAmount] = useState("");

  const actualPrice = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  const discount = (actualPrice * discountAmount) / 100;
  const estimate = actualPrice - discount;
  const estimateInAmount = actualPrice - discountAmount;

  return (
    <div
      className="discountCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <span>Enter amount below</span>
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
            <span> ₦ {actualPrice.toLocaleString()}</span>
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
              <span>
                {" "}
                ₦{" "}
                {discountInPercent
                  ? discount.toLocaleString()
                  : discountAmount.toLocaleString()}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className=" discountEstimation fx-ac space2 fx-jb">
          <span>Estimated fee</span>
          <span>
            <strong> ₦ {estimate.toLocaleString()} </strong>
          </span>
        </div>
      </div>
      <div className="discountSubmit fx-ac">
        <button>Conclude</button>
      </div>
      <div className="discountFoot fx-ac fx-jc">
        <ForumRoundedIcon /> Highly secured and encryped by Green
      </div>
    </div>
  );
}
export function HoldedSales({
  onHoldData,
  attendOnHold,
  deleteOnHold,
  moveOnHoldToDraf,
  handleHoldedSale,
}) {
  return (
    <>
      <OnholdTransactions
        onHoldData={onHoldData}
        attendOnHold={attendOnHold}
        deleteOnHold={deleteOnHold}
        moveOnHoldToDraf={moveOnHoldToDraf}
        handleHoldedSale={handleHoldedSale}
      />
    </>
  );
}
export function Subscriptions({
  cart,
  discount,
  customerName,
  setLoading,
  secondaryFunction,
}) {
  const { enqueueSnackbar } = useSnackbar();

  const [cashCollected, setCashCollected] = useState(0);
  const grandTotal = cart?.reduce(
    (sum, item) => sum + item.pricing.sellingPrice * item.soldQuantity,
    0,
  );

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    subscriptionId: "JDRTY3453453",

    customer: {
      name: customerName,
    },
    products: {
      items: cart,
      discount: discount,
    },

    paymentType: "cash payment",
  };

  async function postSubscribe() {
    try {
      setLoading(true);
      secondaryFunction();
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/${"dfgsdf6h4f8g7hj9g"}/point_of_sales/subscribe`,
        payload,
      );
      if (response?.data?.status === 201) {
        enqueueSnackbar(response?.data?.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(response?.data?.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }

      console.log("Subscribe response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      enqueueSnackbar("An error occurred while submitting the cash payment", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }
  // -------------------------------------------------------------------

  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Subscribe </h3>
      <p>Subscribe to the customer's profile</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            postSubscribe();
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export function AddContacts({ customerName, setLoading, secondaryFunction }) {
  const { enqueueSnackbar } = useSnackbar();

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    name: "Contact Name",
    email: "Contact Email",
    additionalInfo: "Additional contact information",
  };

  async function addContact() {
    try {
      setLoading(true);
      secondaryFunction();
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/:id/contacts/:contact_id/add_contact`,
        payload,
      );
      console.log("Add contact response:", response);
      if (response?.data?.status === 201) {
        enqueueSnackbar(response?.data?.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(response?.data?.message || "Failed to add contact", {
          variant: "error",
          autoHideDuration: 3000,
        });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      enqueueSnackbar("Server error while adding contact", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }
  // -------------------------------------------------------------------

  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Add Contact</h3>
      <p>Add a new contact to the customer's profile</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            addContact();
          }}
        >
          Save Contact
        </button>
      </div>
    </div>
  );
}
