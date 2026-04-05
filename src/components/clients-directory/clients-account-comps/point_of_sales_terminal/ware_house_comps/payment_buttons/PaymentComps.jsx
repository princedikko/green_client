import { useState } from "react";
import "./paymentComps.css";
import axios from "axios";
import { useSnackbar } from "notistack";
import Imgs from "../../images/Udupss_girl.png";
import N1 from "../../images/n1.png";
import DebitSale from "../DebitSale";
import Payments from "../Payments";
import SuccessSound from "../../sounds/sold.wav";
import ErrorSound from "../../sounds/error.wav";
import RecentTransaction from "../RecentTransaction";
import MultiplePayment from "../MultiplePayment";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function CashPayment({ salesPayload }) {
  const [cashCollected, setCashCollected] = useState(0);

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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      cash: cashCollected,
      change: cashCollected - (subTotal + tax),
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "cash", // cash, card, transfer, wallet
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };
  async function cashPaidSubmit() {
    try {
      setLoading(true);
      setOpenModal(false);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/point_of_sales/payment/${"credit-sale"}`,
        payload,
      );
      if (response?.data?.status === 201) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        setAlert({ message: "Failed to process cash payment.", type: "error" });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
        type: "error",
      });
    }
  }

  return (
    <div
      className="cashPaymentCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="cashPaymenthead fx-ac fx-jc">
        <figure>&nbsp;</figure>
        <p>Cash Payment</p>
        <figure>&nbsp;</figure>
      </div>
      <div className="cashPaymentDiscCont ">
        <div className="cashPaymentDisc fx-cl">
          <div className="cashPaymentRow ">
            <div className="fx-ac spacem">
              <ShoppingCartIcon fontSize="large" /> <span>Products:</span>
            </div>
            <p>{cart?.length} items</p>
          </div>
          <div className="cashPaymentRow ">
            <div className="fx-ac spacem">
              <EventRoundedIcon fontSize="large" /> <span>Grand Total:</span>
            </div>
            <p>
              <strong>₦ {subTotal.toLocaleString()}</strong>
            </p>
          </div>
          <div className="cashPaymentRow">
            <div className="fx-ac spacem">
              <WorkspacePremiumRoundedIcon fontSize="large" />{" "}
              <span>Cash:</span>
            </div>
            <p> ₦ {cashCollected.toLocaleString()}</p>
          </div>
          <div className="cashPaymentRow ">
            <div className="fx-ac spacem">
              <AccountCircleRoundedIcon fontSize="large" /> <span>Change:</span>
            </div>
            <p style={{ color: "#ed826b", fontWeight: "bold" }}>
              {" "}
              ₦ {(cashCollected - subTotal).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="g g3 spacem">
          {[100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000].map((i) => {
            return (
              <figure
                className="cashPaymentNotes"
                onClick={() => setCashCollected(cashCollected + i)}
              >
                ₦{i.toLocaleString()}
              </figure>
            );
          })}
        </div>
      </div>
      <div className="cashPaymentButtom fx-cl space2 fx-jc">
        <div className="fx-ac">
          <input
            type="number"
            placeholder="Enter amount of cash"
            value={cashCollected > 0 && cashCollected}
            onChange={(x) => setCashCollected(Number(x.target.value))}
          />
        </div>

        <div className="fx-ac space3 fx-jc">
          <button
            onClick={() => {
              alert();
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              cashPaidSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export function CreditSale({ salesPayload }) {
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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "credit", // cash, card, transfer, wallet
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };
  async function executeCreditSale() {
    try {
      setLoading(true);
      setOpenModal(false);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/point_of_sales/payment/${"credit-sale"}}`,
        payload,
      );
      if (response?.data?.status === 201) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        setAlert({ message: "Failed to process cash payment.", type: "error" });
      }

      console.log("Add product response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
        type: "error",
      });
    }
  }
  return (
    <div className="creditSalesCont" onClick={(e) => e.stopPropagation()}>
      <div className="creditSalesLeft fx-ac">
        <div className="fx-cl space2">
          <h3>Confidence that builds a long time with customer.</h3>
          <p>Empowering kids with confidence to create a successful future</p>
          <button onClick={() => executeCreditSale()}>Submit Sale</button>
        </div>
        <div>
          <img src={Imgs} alt="here" />
        </div>
      </div>
      <div className="creditSalesRight">
        <div className="fx-cl space2">
          <h3>Costomize this Credit Selling.</h3>
          <p>
            Inspiring kids to aim <strong>achieve</strong>
          </p>
          <button>Custome!</button>
        </div>
        <div>
          <img src={N1} alt="here" />
        </div>
      </div>
    </div>
  );
}
export function MultiPay({ salesPayload }) {
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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "multiple", // cash, card, transfer, wallet
      payments: [],
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };

  async function executeMultiPaySale() {
    try {
      setLoading(true);
      setOpenModal(false);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/point_of_sales/payment/${"multi-pay-sale"}}`,
        payload,
      );
      if (response?.data?.status === 201) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        setAlert({ message: "Failed to process cash payment.", type: "error" });
      }

      console.log("Add product response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
        type: "error",
      });
    }
  }
  return (
    <div
      className=" HoldSales fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <MultiplePayment executeMultiPaySale={executeMultiPaySale} />
    </div>
  );
}
export function Debit({ salesPayload }) {
  const { enqueueSnackbar } = useSnackbar();

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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "debit", // cash, card, transfer, wallet
      debitInfo: {},
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };

  async function executeDebitPay() {
    try {
      setLoading(true);
      setOpenModal(false);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/point_of_sales/payment/${"debit-pay"}}`,
        payload,
      );
      if (response?.data?.status === 201) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        setAlert({ message: "Failed to process cash payment.", type: "error" });
      }

      console.log("Add product response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
        type: "error",
      });
    }
  }
  return (
    <>
      <DebitSale executeDebitPay={executeDebitPay} />
    </>
  );
}
export function Account({ salesPayload }) {
  const { enqueueSnackbar } = useSnackbar();

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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "account", // cash, card, transfer, wallet
      accountDetail: {},
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };

  async function executeAcctPay() {
    try {
      setLoading(true);
      setOpenModal(false);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/point_of_sales/payment/${"account-transfer"}}`,
        payload,
      );
      if (response?.data?.status === 201) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        setAlert({ message: "Failed to process cash payment.", type: "error" });
      }

      console.log("Add product response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
        type: "error",
      });
    }
  }

  return (
    <>
      <div className="fx-cl">
        <p>acount payment moeney transferst tothe account</p>
        <button onClick={() => executeAcctPay()}>Confirmed</button>
      </div>
    </>
  );
}
export function Check({ salesPayload }) {
  const { enqueueSnackbar } = useSnackbar();

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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "check", // cash, card, transfer, wallet
      details: {},
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };

  async function executeCheckPay() {
    try {
      setLoading(true);
      setOpenModal(false);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/point_of_sales/payment/${"check-payment"}}`,
        payload,
      );
      if (response?.data?.status === 201) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        setAlert({ message: "Failed to process cash payment.", type: "error" });
      }

      console.log("Add product response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
        type: "error",
      });
    }
  }

  return (
    <>
      <div className="fx-cl">
        <p>Check payment to be confirmed </p>
        <button onClick={() => executeCheckPay()}>Confirmed</button>
      </div>
    </>
  );
}
export function Gifting({ salesPayload }) {
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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "gift", // cash, card, transfer, wallet
      giftInto: {},
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };

  async function executeGift() {
    try {
      setLoading(true);
      setOpenModal(false);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/point_of_sales/payment/${"gift"}}`,
        payload,
      );
      if (response?.data?.status === 201) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
      } else {
        await new Audio(ErrorSound).play();
        setAlert({ message: "Failed to process cash payment.", type: "error" });
      }

      console.log("Add product response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
        type: "error",
      });
    }
  }
  // -------------------------------------------------------------------

  return (
    <div
      className="giftingCardCont fx-ac fx-jc"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={() => executeGift()}>Gift</button>
    </div>
  );
}
export function TransactionLog({ handleOnHold }) {
  const { enqueueSnackbar } = useSnackbar();

  function handleSaveDraft() {
    enqueueSnackbar(`Draft added successfully`, {
      variant: "success",
      autoHideDuration: 3000,
      ContentProps: {
        style: { fontSize: "16px", fontWeight: "bold" },
      },
    });
  }
  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <RecentTransaction />
    </div>
  );
}
export function PaymentLogs({ handleOnHold }) {
  const { enqueueSnackbar } = useSnackbar();

  function handleSaveDraft() {
    enqueueSnackbar(`Draft added successfully`, {
      variant: "success",
      autoHideDuration: 3000,
      ContentProps: {
        style: { fontSize: "16px", fontWeight: "bold" },
      },
    });
  }
  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <Payments />
    </div>
  );
}
export function Shipping({ salesPayload }) {
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

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    saleId: "SALE-000145", // invoice or receipt ID
    customerId: "cust-3344",
    customer_name: customerName,
    soldItems: cart,
    totals: {
      shippingFee: 3242,
      discount: discount,
      subtotal: subTotal,
      taxAmount: tax,
      total: subTotal + discount + tax,
    },
    soldBy: {
      userId: "user-22",
      name: "Yasmeen",
    },
    payment: {
      method: "cash", // cash, card, transfer, wallet
      status: "paid",
    },
    status: "completed", // completed, refunded, cancelled
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    updatedAt: "",
  };

  async function executeShipping() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/h3jk45345y3j53k4ghj23mn/products/add_product`,
        payload,
      );
      if (response?.data?.status === 200) {
        await new Audio(SuccessSound).play();
        secondaryFunction();
        setAlert({
          message: `Payment received! A total of ${cart.length} items have been successfully sold using Cash.`,
          type: "success",
        });
        await new Audio(ErrorSound).play();
        setAlert({
          message: "An error occurred while adding shippings.",
          type: "error",
        });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      await new Audio(ErrorSound).play();
      setAlert({
        message: "An error occurred while submitting the cash payment.",
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
      <h3>Save billing as Draft?</h3>
      <p>This transaction will be save as Draft</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            executeShipping();
          }}
        >
          Prospond
        </button>
      </div>
    </div>
  );
}
