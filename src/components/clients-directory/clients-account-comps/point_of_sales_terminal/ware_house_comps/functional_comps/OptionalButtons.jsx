import { useReducer } from "react";
import "./optionalbuttons.css";

import { useSnackbar } from "notistack";

export function OnHold({ handleOnHold, handleHoldTransactio }) {
  const [note, setNote] = useReducer((state, payload) => {
    return ({ ...state, ...payload }, { note: "" });
  });
  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Are you sure you want to prospond this selling?</h3>
      <p>You are about to temporarily put this transaction on holde</p>
      <div className="fx-ac">
        <textarea
          name="onHold"
          id="onhold"
          rows={3}
          style={{ width: "100%" }}
          value={note?.note}
          onChange={(e) => setNote({ note: e.target.value })}
        ></textarea>
      </div>
      <div className="fx-ac space3 fx-jb">
        <button>Cancel</button>
        <button
          onClick={() => {
            handleOnHold(
              "Please note that this transaction is on hold",
              note?.note,
            );
          }}
        >
          Hold sale
        </button>
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
export function MultiPay({ handleOnHold }) {
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
export function Debit({ handleOnHold }) {
  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Online Payment Coming Soon...!</h3>
      <p>Online Payment is currently under development</p>
      <div className="fx-ac space3 fx-jb">
        <button
          style={{
            color: "#fff",
            backgroundColor: "red",
            padding: ".6rem 1.2rem",
          }}
        >
          Close
        </button>
        <span>&nbsp;</span>
      </div>
    </div>
  );
}
export function Gifting({ handleSaveDraft }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div
      className="OpBtnCont fx-cl space2"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Save as Draft?</h3>
      <p>This transaction will be stored as a draft for later completion.</p>

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

export function Discount({ handleOnHold }) {
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
export function HoldedSales({ handleOnHold }) {
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
          Prospond
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
