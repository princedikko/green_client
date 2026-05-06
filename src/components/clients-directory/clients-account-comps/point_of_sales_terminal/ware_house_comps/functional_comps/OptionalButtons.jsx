import { useReducer, useState } from "react";
import "./optionalbuttons.css";
import axios from "axios";
import { useSnackbar } from "notistack";
// Sounds
import SuccessSound from "../../sounds/sold.wav";
import ErrorSound from "../../sounds/error.wav";
//
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
    draft: {
      isDraft: true,
      draftId: "JDRTY3453453",
      status: "draft", // "draft" "sent" "accepted" "rejected" "converted"
    },

    customer: {
      id: "cust-3344",
      name: customerName,
      contact_no: "08012345678",
      location: "Area One, Abuja Nigeria",
    },

    warehouse: {
      warehouseId: "sdr3-1234-sdfg-5678",
    },
    items: cart,
    currency: "NGN",
    totals: {
      subtotal: subTotal,
      discount: discount,
      tax: tax,
      total: subTotal + discount + tax,
    },
    payment: {
      type: "", // cash, transfer, card etc
      details: null,
    },
    draftedBy: {
      userId: "user-22",
      name: "Cashier 1",
    },

    dates: {
      createdAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      updatedAt: "",
    },
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
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `${response?.data?.message || "Draft saved successfully"}`,
          type: "info",
        });
      } else {
        await new Audio(ErrorSound).play();
        secondaryFunction();
        setAlert({
          message: response?.data?.message || "Failed to save draft",
          type: "error",
        });
      }
      console.log("Drafteds:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      secondaryFunction();
      setAlert({
        message: "Server error while saving draft",
        type: "error",
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
    quoteItems: cart,
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
    updatedAt: "",
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
export function PostSubscriptions({ salesPayload }) {
  const {
    cart,
    discount,
    customerName,
    setLoading,
    setOpenModal,
    secondaryFunction,
    setAlert,
    subTotal,
    tax,
  } = salesPayload;

  const [cashCollected, setCashCollected] = useState(0);
  const grandTotal = cart?.reduce(
    (sum, item) => sum + item.pricing.sellingPrice * item.soldQuantity,
    0,
  );

  const [subscribePayloads, setSubscribePayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      subscriptionId: "SE-000145",

      // sale.customer flattened
      saleCustomerId: "cust-3344",
      saleCustomerName: customerName,
      saleCustomerLocation: "Area One, Abuja Nigeria",

      // sale.items (kept as is)
      saleItems: cart,

      // sale.totals flattened
      saleTotalsSubtotal: subTotal,
      saleTotalsDiscount: discount,
      saleTotalsTax: tax,
      saleTotalsTotal: subTotal + discount + tax,

      // sale.saveBy flattened
      saleSaveByUserId: "user-22",
      saleSaveByName: "Yasmeen",

      // sale.dates flattened
      saleDatesCreatedAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      saleDatesUpdatedAt: "",

      // subscription flattened
      subscriptionInterval: "monthly",
      subscriptionRepetitions: 12,
      subscriptionGenerated_invoices: 3,
      subscriptionLast_generated: "05 April 2026",
      subscriptionUpcoming_invoice: "05 May 2026",
    },
  );
  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    subscriptionId: subscribePayloads.subscriptionId,

    sale: {
      customer: {
        id: subscribePayloads.saleCustomerId,
        name: subscribePayloads.saleCustomerName,
        location: subscribePayloads.saleCustomerLocation,
      },

      items: subscribePayloads.saleItems,

      totals: {
        subtotal: subscribePayloads.saleTotalsSubtotal,
        discount: subscribePayloads.saleTotalsDiscount,
        tax: subscribePayloads.saleTotalsTax,
        total: subscribePayloads.saleTotalsTotal,
      },

      saveBy: {
        userId: subscribePayloads.saleSaveByUserId,
        name: subscribePayloads.saleSaveByName,
      },

      dates: {
        createdAt: subscribePayloads.saleDatesCreatedAt,
        updatedAt: subscribePayloads.saleDatesUpdatedAt,
      },
    },

    subscription: {
      subscription_interval: subscribePayloads.subscriptionInterval,
      repetitions: subscribePayloads.subscriptionRepetitions,
      generated_invoices: subscribePayloads.subscriptionGenerated_invoices,
      last_generated: subscribePayloads.subscriptionLast_generated,
      upcoming_invoice: subscribePayloads.subscriptionUpcoming_invoice,
    },
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
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `${response?.data?.message || "Subscription processed successfully"}`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        secondaryFunction();
        setAlert({
          message: response?.data?.message || "Failed to process subscription",
          type: "error",
        });
      }

      console.log("Subscribe response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      secondaryFunction();
      setAlert({
        message: "Server error while processing subscription",
        type: "error",
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
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => postSubscribe()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Subscription ID"
          value={subscribePayloads.subscriptionId}
          onChange={(e) =>
            setSubscribePayloads({ subscriptionId: e.target.value })
          }
        />

        {/* CUSTOMER */}
        <input
          placeholder="Customer ID"
          value={subscribePayloads.saleCustomerId}
          onChange={(e) =>
            setSubscribePayloads({ saleCustomerId: e.target.value })
          }
        />
        <input
          placeholder="Customer Name"
          value={subscribePayloads.saleCustomerName}
          onChange={(e) =>
            setSubscribePayloads({ saleCustomerName: e.target.value })
          }
        />
        <input
          placeholder="Customer Location"
          value={subscribePayloads.saleCustomerLocation}
          onChange={(e) =>
            setSubscribePayloads({ saleCustomerLocation: e.target.value })
          }
        />

        {/* ITEMS */}
        <input
          placeholder="Items (JSON)"
          value={JSON.stringify(subscribePayloads.saleItems)}
          onChange={(e) =>
            setSubscribePayloads({
              saleItems: JSON.parse(e.target.value || "[]"),
            })
          }
        />

        {/* TOTALS */}
        <input
          type="number"
          placeholder="Subtotal"
          value={subscribePayloads.saleTotalsSubtotal}
          onChange={(e) =>
            setSubscribePayloads({
              saleTotalsSubtotal: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Discount"
          value={subscribePayloads.saleTotalsDiscount}
          onChange={(e) =>
            setSubscribePayloads({
              saleTotalsDiscount: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Tax"
          value={subscribePayloads.saleTotalsTax}
          onChange={(e) =>
            setSubscribePayloads({
              saleTotalsTax: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total"
          value={subscribePayloads.saleTotalsTotal}
          onChange={(e) =>
            setSubscribePayloads({
              saleTotalsTotal: Number(e.target.value),
            })
          }
        />

        {/* SAVED BY */}
        <input
          placeholder="User ID"
          value={subscribePayloads.saleSaveByUserId}
          onChange={(e) =>
            setSubscribePayloads({ saleSaveByUserId: e.target.value })
          }
        />
        <input
          placeholder="Name"
          value={subscribePayloads.saleSaveByName}
          onChange={(e) =>
            setSubscribePayloads({ saleSaveByName: e.target.value })
          }
        />

        {/* DATES */}
        <input
          placeholder="Created At"
          value={subscribePayloads.saleDatesCreatedAt}
          onChange={(e) =>
            setSubscribePayloads({
              saleDatesCreatedAt: e.target.value,
            })
          }
        />
        <input
          placeholder="Updated At"
          value={subscribePayloads.saleDatesUpdatedAt}
          onChange={(e) =>
            setSubscribePayloads({
              saleDatesUpdatedAt: e.target.value,
            })
          }
        />

        {/* SUBSCRIPTION */}
        <input
          placeholder="Interval"
          value={subscribePayloads.subscriptionInterval}
          onChange={(e) =>
            setSubscribePayloads({
              subscriptionInterval: e.target.value,
            })
          }
        />
        <input
          type="number"
          placeholder="Repetitions"
          value={subscribePayloads.subscriptionRepetitions}
          onChange={(e) =>
            setSubscribePayloads({
              subscriptionRepetitions: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Generated Invoices"
          value={subscribePayloads.subscriptionGenerated_invoices}
          onChange={(e) =>
            setSubscribePayloads({
              subscriptionGenerated_invoices: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Last Generated"
          value={subscribePayloads.subscriptionLast_generated}
          onChange={(e) =>
            setSubscribePayloads({
              subscriptionLast_generated: e.target.value,
            })
          }
        />
        <input
          placeholder="Upcoming Invoice"
          value={subscribePayloads.subscriptionUpcoming_invoice}
          onChange={(e) =>
            setSubscribePayloads({
              subscriptionUpcoming_invoice: e.target.value,
            })
          }
        />
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
