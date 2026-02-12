import "./optionalbuttons.css";
export function OnHold({ handleOnHold }) {
  return (
    <div className="OpBtnCont fx-cl space2">
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
export function AddNewCustomer({ handleOnHold }) {
  return (
    <div className="OpBtnCont fx-cl space2">
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
    <div className="OpBtnCont fx-cl space2">
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
    <div className="OpBtnCont fx-cl space2">
      <h3>Are you sure you want to prospond this selling?</h3>
      <p>You are about to temporarily save this transaction</p>
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
    <div className="OpBtnCont fx-cl space2">
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
    <div className="OpBtnCont fx-cl space2">
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
    <div className="OpBtnCont fx-cl space2">
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
    <div className="OpBtnCont fx-cl space2">
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
export function SaveDraft({ handleOnHold }) {
  return (
    <div className="OpBtnCont fx-cl space2">
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
