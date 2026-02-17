import { useReducer, useState } from "react";
import "./optionalbuttons.css";
import Imgs from "../../images/Udupss_girl.png";
import N1 from "../../images/n1.png";
import { useSnackbar } from "notistack";
import MultiplePayment from "../MultiplePayment";

import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DebitSale from "../DebitSale";
import OnholdTransactions from "../OnholdTransactions";

export function OnHold({ handleOnHold }) {
  const [note, setNote] = useReducer((state, payload) => {
    return ({ ...state, ...payload }, { note: "" });
  });

  return (
    <div
      className="OpBtnCont putOnHoldCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="putOnHoldhead fx-ac spacem fx-jb">
        <figure>&nbsp;</figure>
        <p>Grant Overview</p>
        <figure>&nbsp;</figure>
      </div>
      <div className="putOnHoldDisc fx-cl">
        <div className="putOnHoldRow ">
          <div className="fx-ac spacem">
            <VideoLibraryRoundedIcon fontSize="large" />{" "}
            <span>Grand Category:</span>
          </div>
          <p>Economic Support</p>
        </div>
        <div className="putOnHoldRow ">
          <div className="fx-ac spacem">
            <EventRoundedIcon fontSize="large" /> <span>Grand Total:</span>
          </div>
          <p>
            <strong>N643,000</strong>
          </p>
        </div>
        <div className="putOnHoldRow">
          <div className="fx-ac spacem">
            <WorkspacePremiumRoundedIcon fontSize="large" />{" "}
            <span>Coverage:</span>
          </div>
          <p>Nationwide</p>
        </div>
        <div className="putOnHoldRow ">
          <div className="fx-ac spacem">
            <AccountCircleRoundedIcon fontSize="large" />{" "}
            <span>Bill Status:</span>
          </div>
          <p>Open</p>
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
            Put Sale On-Hold
          </button>
        </div>
      </div>
    </div>
  );
}
export function AddNewCustomer({ handleOnHold }) {
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
export function ClearCart({ handleOnHold, clearCart }) {
  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Are you sure you want to Delete all items in CART</h3>
      <p>You save this transaction</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            clearCart();
          }}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}
export function Quotation({ handleOnHold }) {
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
export function CreditSale({ handleOnHold }) {
  return (
    <div className="creditSalesCont" onClick={(e) => e.stopPropagation()}>
      <div className="creditSalesLeft fx-ac">
        <div className="fx-cl space2">
          <h3>Confidence that builds a long time with customer.</h3>
          <p>Empowering kids with confidence to create a successful future</p>
          <button>Submit Sale</button>
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
export function MultiPay({ handleOnHold }) {
  return (
    <div
      className=" HoldSales fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <MultiplePayment />
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
export function Debit({ handleOnHold }) {
  return (
    <>
      <DebitSale />
    </>
  );
}
export function Gifting({ handleSaveDraft }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div
      className="giftingCardCont fx-ac fx-jc"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="giftingtCard fx-ae">
        <div className="fx-cl space2">
          <h3>Confidence that builds a long time with customer.</h3>
          <p>Empowering kids with confidence to create a successful future</p>
          <button
            onClick={() => {
              handleSaveDraft();
            }}
          >
            Save Draft
          </button>
        </div>
        <figure>
          <img src={Imgs} alt="here" />
        </figure>
      </div>
    </div>
  );
}
export function SaveDraft({ handleOnHold }) {
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
      className="saveDraftCardCont fx-ac fx-jc"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="saveDraftCard fx-ae">
        <div className="fx-cl space2">
          <h3>Confidence that builds a long time with customer.</h3>
          <p>Empowering kids with confidence to create a successful future</p>
          <button
            onClick={() => {
              handleSaveDraft();
            }}
          >
            Save Draft
          </button>
        </div>
        <figure>
          <img src={Imgs} alt="here" />
        </figure>
      </div>
    </div>
  );
}

export function Discount({ handleOnHold }) {
  const [discountInPercent, setDiscountInPercent] = useState(false);
  const [discountAmount, setDiscountAmount] = useState("");
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
            <span>₦234,343.00</span>
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
              <span>₦24,576.00</span>
            </div>
          </div>
        </div>
        <div className=" discountEstimation fx-ac space2 fx-jb">
          <span>Estimated fee</span>
          <span>
            <strong>₦564</strong>
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
export function Subscriptions({ handleOnHold }) {
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
      <h3>Save billing as Draft?</h3>
      <p>This transaction will be save as Draft</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            handleSaveDraft();
          }}
        >
          Save
        </button>
      </div>
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
      <h3>Save billing as Draft?</h3>
      <p>This transaction will be save as Draft</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            handleSaveDraft();
          }}
        >
          Prospond
        </button>
      </div>
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
      <h3>Save billing as Draft?</h3>
      <p>This transaction will be save as Draft</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            handleSaveDraft();
          }}
        >
          Prospond
        </button>
      </div>
    </div>
  );
}
export function Shipping({ handleOnHold }) {
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
      <h3>Save billing as Draft?</h3>
      <p>This transaction will be save as Draft</p>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            handleSaveDraft();
          }}
        >
          Prospond
        </button>
      </div>
    </div>
  );
}
