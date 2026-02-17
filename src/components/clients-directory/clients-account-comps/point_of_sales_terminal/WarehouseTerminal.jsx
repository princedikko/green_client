import "./warehouseTerminal.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Action from "../../../../store/redux/hybrid_reducer.js";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import IsLoading from "../../../../isLoading.jsx";
import Calculator from "./modalBoxComps/Calculator.jsx";
import Items from "./ware_house_comps/Items.jsx";
import BannerImg from "./images/banner.avif";
// ------------------NEW IMPORTS---------------------
import LayersClearIcon from "@mui/icons-material/LayersClear";
import SettingsRemoteTwoToneIcon from "@mui/icons-material/SettingsRemoteTwoTone";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CasesIcon from "@mui/icons-material/Cases";

import DiscountIcon from "@mui/icons-material/Discount";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CloseIcon from "@mui/icons-material/Close";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import CalculateIcon from "@mui/icons-material/Calculate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import BedtimeOffIcon from "@mui/icons-material/BedtimeOff";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import GrainIcon from "@mui/icons-material/Grain";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import BalanceIcon from "@mui/icons-material/Balance";
import BackHandIcon from "@mui/icons-material/BackHand";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SchoolIcon from "@mui/icons-material/School";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import SellIcon from "@mui/icons-material/Sell";
import PanToolIcon from "@mui/icons-material/PanTool";

import { contacts } from "../data.js";
import Counter, { CounterMini } from "./modalBoxComps/Counter.jsx";
import {
  AddNewCustomer,
  AddNewProduct,
  ClearCart,
  CreditSale,
  MultiPay,
  Debit,
  OnHold,
  Quotation,
  SaveDraft,
  Discount,
  HoldedSales,
  Subscriptions,
  TransactionLog,
  PaymentLogs,
  Shipping,
  Gifting,
} from "./ware_house_comps/functional_comps/OptionalButtons.jsx";

let queue;

function WarehouseTerminal() {
  const wrapperRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();
  // HOOKS-----------------------------
  const [openBrands, setOpenBrands] = useState(false);
  const [openCustomers, setOpenCustomers] = useState(false);
  const [brands, setBrands] = useState("All brands");
  const [isIconButtons, setIsIconButtons] = useState(false);
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // FULLSCREEN TOGGLE FUNCTION------------------
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // enter fullscreen
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      // exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // USE SELECTORS DATA TYPE SELECTOR----------------------
  const { switchWarehouseView } = useSelector((state) => state.hybridActions);
  const products = useSelector(
    (state) => state.hybridActions.warehouse.products,
  );
  const cart = useSelector((state) => state.hybridActions.warehouse.cart);
  const onHoldData = useSelector(
    (state) => state.hybridActions.on_holded_sales,
  );
  console.log("On-Hold!:", onHoldData);
  // END OF MODAL FUNCTIONS------------------
  const [toggleAside, setToggleAside] = useState("instruction");
  const [showModal, setShowModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [onTimeChange, setOnTimeChange] = useState(false);
  const [togglePagination, setTogglePagination] = useState(true);
  const [customer, setCustomer] = useState("Walk-in Customer");

  /////////////////////////////////////////////////////////////////////////
  // REDUX FUCNTIONS
  /////////////////////////////////////////////////////////////////////////
  function toggleScreen() {
    dispatch(Action.switchView(!switchWarehouseView));
  }

  function addToCart(item) {
    // Check if item already exists in cart
    const existingItem = cart.find(
      (cartItem) => cartItem.productId === item.productId,
    );

    if (existingItem) {
      // If exists, update quantity
      enqueueSnackbar(`Item already in cart`, {
        variant: "success",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
      // dispatch(Action.addtoCart(updatedItem));
      // console.log("CART UPDATED:", updatedItem);
    } else {
      // If not exists, add new item
      dispatch(Action.addtoCart(item));
    }
  }

  function clearCart() {
    dispatch(Action.clearCartAction());
    setOpenModal(false);
  }

  function attendOnHold(data) {
    // Check if item already exists in cart

    if (cart.length > 0) {
      // If exists, update quantity
      enqueueSnackbar(
        `Please clear or finish with the ongoing sales in the cart`,
        {
          variant: "error",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        },
      );
      // dispatch(Action.addtoCart(updatedItem));
      // console.log("CART UPDATED:", updatedItem);
    } else {
      // If not exists, add new item
      dispatch(Action.attandOnhold(data));
      setCustomer(data?.customer_name);
    }
    setOpenModal(false);
  }

  function clearProducts() {
    dispatch(Action.clearProductsAction());
  }
  // Functional buttons methods of actions
  function handleSaveDraft(note) {
    const billDraft = {
      status: "new-draft",
      customer_name: customer,
      note: note,
      items: cart,
      total: "234a",
      date: new Date().toLocaleString(),
    };
    if (cart.length > 0) {
      dispatch(Action.onHoldPayload({ billDraft }));
      clearCart();
      enqueueSnackbar(`Draft saved successfully`, {
        variant: "success",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    } else {
      enqueueSnackbar(`Nothing to put on-hold`, {
        variant: "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    }
    setOpenModal(false);
  }

  function moveOnHoldToDraft(note) {
    const onHoldDatas = {
      status: "new-draft",
      customer_name: customer,
      note: note,
      items: cart,
      total: "234a",
      date: new Date().toLocaleString(),
    };
    if (cart.length > 0) {
      dispatch(Action.onHoldPayload({ onHoldDatas }));
      clearCart();
      enqueueSnackbar(`Draft saved successfully`, {
        variant: "success",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    } else {
      enqueueSnackbar(`Nothing to put on-hold`, {
        variant: "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    }
    setOpenModal(!openModal);
  }
  function handleOnHold(note) {
    const onHoldDatas = {
      customer_name: customer,
      note: note,
      buyings: cart,
    };
    if (cart.length > 0) {
      dispatch(Action.onHoldPayload(onHoldDatas));
      clearCart();
      enqueueSnackbar(`Sales on hold`, {
        variant: "success",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    } else {
      enqueueSnackbar(`Nothing to put on-hold`, {
        variant: "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    }
    setOpenModal(!openModal);
  }
  function handleHoldedSale(note) {
    setOpenModal(!openModal);
  }
  // ...................////////

  function toggleModalBoxContents() {
    switch (showModal) {
      case "calculator":
        return <Calculator setOpenModal={setOpenModal} />;
      case "itemList":
        return <Items setOpenModal={setOpenModal} />;
      case "counter":
        return <img src={BannerImg} style={{ width: "34%" }} />;
      case "add_new_product":
        return <AddNewProduct handleOnHold={handleOnHold} />;
      case "add_new_customer":
        return <AddNewCustomer handleOnHold={handleOnHold} />;
      case "save_draft":
        return <SaveDraft handleSaveDraft={handleSaveDraft} />;
      case "debit":
        return <Debit handleOnHold={handleOnHold} />;
      case "multi_pay":
        return <MultiPay handleOnHold={handleOnHold} />;
      case "credit_sale":
        return <CreditSale handleOnHold={handleOnHold} />;
      case "quotation":
        return <Quotation handleOnHold={handleOnHold} />;
      case "clear_cart":
        return <ClearCart clearCart={clearCart} handleOnHold={handleOnHold} />;
      case "on_hold":
        return <OnHold handleOnHold={handleOnHold} />;
      case "gift":
        return <Gifting handleOnHold={handleOnHold} />;
      case "discount":
        return <Discount clearCart={clearCart} handleOnHold={handleOnHold} />;
      case "on_hold_sales":
        return (
          <HoldedSales
            onHoldData={onHoldData}
            handleHoldedSale={handleHoldedSale}
            attendOnHold={attendOnHold}
            moveOnHoldToDraft={moveOnHoldToDraft}
          />
        );
      case "subscription":
        return <Subscriptions />;
      case "transactions":
        return <TransactionLog />;
      case "payments":
        return <PaymentLogs />;
      case "shipping":
        return <Shipping />;

      default:
        return null;
    }
  }
  function handleModalSwitch(event) {
    setOpenModal(!openModal);
    setShowModal(event);
  }

  function cashPaidSubmit() {
    enqueueSnackbar(`Product soled successfully`, {
      variant: "success",
      autoHideDuration: 3000,
      ContentProps: {
        style: { fontSize: "16px", fontWeight: "bold" },
      },
    });
    clearCart();
  }

  function closeModalDiv() {
    setOpenModal(!openModal);
    setShowModal("");
  }

  function handleCloseTerminal() {
    clearCart();
    clearProducts();
    redirect(`/clients/691a663dc9f64e6b9b8be48e/account`);
  }
  function switchAsideComp() {
    switch (toggleAside) {
      case "products":
        return (
          <Products
            handleModalSwitch={handleModalSwitch}
            products={products}
            addToCart={addToCart}
            clearCart={clearCart}
          />
        );
      case "properties":
        return <Property handleModalSwitch={handleModalSwitch} />;
      case "activity_log":
        return <OperatingGuide />;
      default:
        return (
          <Products
            products={products}
            addToCart={addToCart}
            clearCart={clearCart}
            handleModalSwitch={handleModalSwitch}
          />
        );
    }
  }

  // useEffect(() => {
  //   !isFullscreen && toggleFullscreen();
  // }, [isFullscreen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // clicked outside
        // setFilteredProducts([]);
        setOpenCustomers(false);
        setOpenBrands(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function Main() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [searchTermContacts, setSearchTermContacts] = useState("");
    const [searchTermBrands, setSearchTermBrands] = useState("");
    const [filteredBrands, setFilteredBrands] = useState([]);

    // ARRAYS
    const customerTypesArray = [
      "Walk-in Customer",
      "Guest Customer",
      "Cash Customer",
      "Credit Customer",
      "Wholesale Customer",
      "Retail Customer",
      "VIP Customer",
      "Loyalty Customer",
      "Registered Customer",
      "Corporate Customer",
    ];

    const brandsArray = products.map((n) => n.brand);

    // END OF ARRAYS
    const handleSearch = (e) => {
      const term = e.target.value;
      setSearchTerm(term);

      if (term.trim() === "") {
        setFilteredProducts([]);
      } else {
        const filtered = products.filter(
          (product) =>
            product.name.toLowerCase().includes(term.toLowerCase()) ||
            product.barcode.includes(term),
        );
        setFilteredProducts(filtered);
      }
    };
    const handleSearchBrands = (e) => {
      const term = e.target.value;
      setSearchTermBrands(term);

      if (term.trim() === "") {
        setFilteredBrands([]);
      } else {
        const filtered = brandsArray.filter((brand) =>
          brand.toLowerCase().includes(term.toLowerCase()),
        );
        setFilteredBrands(filtered);
      }
    };
    const handleSearchContacts = (e) => {
      const term = e.target.value;
      setSearchTermContacts(term);

      if (term.trim() === "") {
        setFilteredContacts([]);
      } else {
        const filtered = contacts.filter((contact) =>
          contact.toLowerCase().includes(term.toLowerCase()),
        );
        setFilteredContacts(filtered);
      }
    };

    const handleSelect = (product) => {
      console.log("Selected product:", product);
      setSearchTerm(product.name);
      setFilteredProducts([]); // close dropdown after selection
    };

    return (
      <div className="main fx-cl space1" onClick={(e) => e.stopPropagation()}>
        <div className="fx-cl">
          <div className="warehouseHubSubjects fx-jb fx-ac space2">
            <div className="warehauseCustomerCont fx-ac spacem">
              <div className="customers_entries-info fx-ac spacem">
                {/* <h4>Customer: </h4> */}
                <div className="customers-page-limit">
                  <button
                    className="customers-page-limit-btn"
                    onClick={() => setOpenCustomers(!openCustomers)}
                  >
                    {customer}
                    <span className="customers-page-limit-arrow">▾</span>
                  </button>

                  {openCustomers && (
                    <ul ref={wrapperRef} className="customers-limit-dropdown">
                      <li>
                        <input
                          type="text"
                          placeholder="Search product..."
                          value={searchTerm}
                          onChange={handleSearchContacts}
                        />
                      </li>

                      {contacts.length > 0
                        ? contacts.map((contact) => (
                            <li
                              key={contact.state}
                              onClick={() => {
                                setCustomer(contact.name);
                                setFilteredContacts("");
                                setSearchTermContacts("");
                              }}
                              style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              {contact.name} — {contact.state}
                            </li>
                          ))
                        : customerTypesArray.map((n) => (
                            <li
                              key={n}
                              className="customers-limit-item"
                              onClick={() => {
                                setCustomer(n);
                                setOpenCustomers(false);
                              }}
                            >
                              {n}
                            </li>
                          ))}
                    </ul>
                  )}
                </div>
              </div>
              <button
                style={{ width: "5rem" }}
                onClick={() => handleModalSwitch("add_new_customer")}
              >
                +
              </button>
            </div>

            {!switchWarehouseView && (
              <div className="warehauseSearchCont fx-jb space3">
                <div className=" fx-ac spacem">
                  <div
                    className="warehauseSearch fx-jb"
                    style={{ position: "relative" }}
                  >
                    <input
                      type="text"
                      placeholder="Search product..."
                      value={searchTerm}
                      onChange={handleSearch}
                    />

                    {filteredProducts.length > 0 && (
                      <ul className="searched-products-dropdown">
                        {filteredProducts.map((product) => (
                          <li
                            key={product.productId}
                            onClick={() => {
                              addToCart(product);
                              setFilteredProducts("");
                              setSearchTerm("");
                            }}
                            style={{
                              padding: "8px",
                              cursor: "pointer",
                              borderBottom: "1px solid #eee",
                            }}
                          >
                            {product.name} — {product.barcode}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {/* <button>
            <SearchIcon fontSize="large" />
          </button> */}
                </div>
                <button
                  className="wareHouseAddnewProd fx-ac fx-jc"
                  onClick={() => handleModalSwitch("add_new_product")}
                >
                  +
                </button>
              </div>
            )}
          </div>

          <div className="warehouseItemsCont fx-cl space1">
            <div className="warehouseHubBtn fx-ac space2">
              {cart.length > 0 ? (
                <button
                  className="fx-ac fx-jc"
                  onClick={() => handleModalSwitch("clear_cart")}
                >
                  <span className="tooltips">Clear Cart</span>
                  {/* MarkIcon */}

                  <DeleteForeverIcon
                    fontSize="large"
                    style={{ color: "#f85a38" }}
                  />
                </button>
              ) : (
                <button
                  className="fx-ac fx-jc"
                  style={{ color: "gray", cursor: "not-allowed" }}
                >
                  <span className="tooltips">Clear Cart</span>
                  {/* MarkIcon */}

                  <DeleteForeverIcon fontSize="large" />
                </button>
              )}
              {!switchWarehouseView ? (
                <button className="fx-ac fx-jc" onClick={() => toggleScreen()}>
                  <span className="tooltips">main previews</span>
                  {/* Previews  on Modal box */}
                  <FullscreenExitIcon fontSize="large" />
                </button>
              ) : (
                <button className="fx-ac fx-jc" onClick={() => toggleScreen()}>
                  <span className="tooltips">main previews</span>
                  {/* Previews  on Modal box */}
                  <VisibilityIcon fontSize="large" />
                </button>
              )}
            </div>

            <div className="warehouseHubMiddleWare fx-ac fx-jb space4">
              <button
                onClick={() => handleModalSwitch("counter")}
                className="fx-ac spacem"
              >
                <figure className="counterIcon">&nbsp;</figure>
                <div className="fx-ac space2">
                  <div className="fx-ac spacem">
                    <span>TOTAL:</span>{" "}
                    <strong>
                      {" "}
                      ₦{" "}
                      {cart
                        .reduce(
                          (sum, item) => sum + item.unitPrice * item.quantity,
                          0,
                        )
                        .toLocaleString()}
                    </strong>
                  </div>
                </div>
              </button>
              <div className="fx-ac spacem">
                <button
                  onClick={() => handleModalSwitch("calculator")}
                  className="fx-ac spacem"
                  style={{ color: "#26bf89", padding: ".2rem" }}
                >
                  <CalculateIcon fontSize="large" />
                </button>
                <div className="brands_entries-info fx-ac spacem">
                  <h4>Brand: </h4>
                  <div className="brands-page-limit">
                    <button
                      className="brands-page-limit-btn"
                      onClick={() => setOpenBrands(!openBrands)}
                    >
                      {brands}
                      <span className="brands-page-limit-arrow">▾</span>
                    </button>

                    {openBrands && (
                      <ul className="brands-limit-dropdown">
                        <li>
                          <input
                            type="text"
                            placeholder="Search product..."
                            value={searchTermBrands}
                            onChange={handleSearchBrands}
                          />
                        </li>

                        {filteredBrands.length > 0
                          ? filteredBrands.map((brand) => (
                              <li
                                key={brand}
                                onClick={() => {
                                  setBrands(brand);
                                  setOpenBrands(false);
                                }}
                                style={{
                                  padding: "8px",
                                  cursor: "pointer",
                                  borderBottom: "1px solid #eee",
                                }}
                              >
                                {brand}
                              </li>
                            ))
                          : brandsArray.map((brand) => (
                              <li
                                key={brand}
                                className="brands-limit-item"
                                onClick={() => {
                                  setBrands(brand);
                                  setOpenBrands(false);
                                }}
                              >
                                {brand}
                              </li>
                            ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => alert("i got printed")}
              className="warehouseHubCounts fx-ac fx-jb space3"
            >
              <div className="fx-ac spacem">
                <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                  <ShoppingCartIcon fontSize="medium" /> Cart:
                </strong>
                {cart?.length < 1 ? (
                  "empty"
                ) : (
                  <span>
                    {cart?.length} <em>items</em>
                  </span>
                )}
              </div>
              <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                <LocalPrintshopIcon fontSize="medium" />
              </strong>
            </button>

            {/* ____________CART ITEMS MAPPING___________ */}
            <Items />
          </div>
        </div>
        {isIconButtons ? (
          <div className="warehouseHubOperations iconsBtnFx fx-ac space3 fx-jb">
            <figure className="fx-jc fx-ac space1">
              <button onClick={() => alert("I got clicked")} className="">
                <span className="tooltips">tooltips</span>
                {/* NightMode */}
                <BedtimeOffIcon fontSize="large" />
              </button>
              <button
                onClick={toggleFullscreen}
                className={`${isFullscreen && "active"}`}
              >
                {isFullscreen ? (
                  <FullscreenExitIcon fontSize="large" />
                ) : (
                  <FullscreenIcon fontSize="large" />
                )}
              </button>
              <button className={`${showModal === "counter" && "active"}`}>
                <span className="tooltips">tooltips</span>
                {/* Count Down */}
                <HourglassTopIcon fontSize="large" />
              </button>
              <button
                onClick={() => cashPaidSubmit()}
                className="cashPaid fx-jc"
              >
                Cash payment
              </button>
              <button
                onClick={() => setTogglePagination(!togglePagination)}
                className={`${togglePagination && "active"}`}
              >
                <span className="tooltips">tooltips</span>
                {/* togglePagination */}
                <GrainIcon fontSize="large" />
              </button>
              <button className={`${showModal === "appeals" && "active"}`}>
                <span className="tooltips">tooltips</span>
                {/* Appeal */}
                <BalanceIcon fontSize="large" />
              </button>
              <button onClick={() => alert("I got clicked")} className="">
                {/* RaisingHand */}
                <BackHandIcon fontSize="large" />
                <span className="tooltips"> tooltips</span>
              </button>
            </figure>
          </div>
        ) : (
          <div className="warehouseHubOperations btns fx-ac space1 fx-jc">
            <button
              onClick={() => {
                if (cart.length > 0) {
                  handleModalSwitch("on_hold");
                }
              }}
              style={{
                cursor: cart.length > 0 ? "pointer" : "not-allowed",
                opacity: cart.length > 0 ? 1 : 0.6, // optional, to show disabled look
              }}
            >
              <PanToolIcon />
              <span>On-hold</span>
            </button>
            <button
              onClick={() => {
                if (cart.length > 0) {
                  handleModalSwitch("save_draft");
                }
              }}
              style={{
                cursor: cart.length > 0 ? "pointer" : "not-allowed",
                opacity: cart.length > 0 ? 1 : 0.6, // optional: show disabled look
              }}
            >
              <SaveAsIcon />
              <span>Save draft</span>
            </button>

            <button
              onClick={() => {
                if (cart.length > 0) {
                  handleModalSwitch("credit_sale");
                }
              }}
              style={{
                cursor: cart.length > 0 ? "pointer" : "not-allowed",
                opacity: cart.length > 0 ? 1 : 0.6,
              }}
            >
              <SellIcon />
              <span>Credit sale</span>
            </button>

            <button
              onClick={() => {
                if (cart.length > 0) {
                  cashPaidSubmit();
                }
              }}
              className="cashPaid fx-jc"
              style={{
                cursor: cart.length > 0 ? "pointer" : "not-allowed",
                opacity: cart.length > 0 ? 1 : 0.6,
              }}
            >
              Cash Paid
            </button>

            <button
              onClick={() => {
                if (cart.length > 0) {
                  handleModalSwitch("multi_pay");
                }
              }}
              style={{
                cursor: cart.length > 0 ? "pointer" : "not-allowed",
                opacity: cart.length > 0 ? 1 : 0.6,
              }}
            >
              <LayersClearIcon />
              <span>Multi-pay</span>
            </button>

            <button
              onClick={() => {
                if (cart.length > 0) {
                  handleModalSwitch("debit");
                }
              }}
              style={{
                cursor: cart.length > 0 ? "pointer" : "not-allowed",
                opacity: cart.length > 0 ? 1 : 0.6,
              }}
            >
              <AssuredWorkloadIcon />
              <span>Debit</span>
            </button>

            <button
              onClick={() => {
                if (cart.length > 0) {
                  handleModalSwitch("gift");
                }
              }}
              style={{
                cursor: cart.length > 0 ? "pointer" : "not-allowed",
                opacity: cart.length > 0 ? 1 : 0.6,
              }}
            >
              <CardGiftcardIcon />
              <span>Gift</span>
            </button>
          </div>
        )}
        <div className="warehouseHubFooter fx-ac fx-jc">
          <span>status bar contents</span>
        </div>
      </div>
    );
  }
  return (
    <section className="sectionwarehouseHub fx-cl">
      {openModal && (
        <div id="modalContainer" onClick={() => closeModalDiv()}>
          {toggleModalBoxContents()}
        </div>
      )}
      {!switchWarehouseView ? (
        <div className="warehouseHubCont fx-cl space2" id="largeView">
          <div className="taskBar fx-cl space1">
            <button onClick={() => handleModalSwitch("discount")}>
              <WorkspacePremiumRoundedIcon fontSize="large" />
            </button>
            <button onClick={() => handleModalSwitch("on_hold_sales")}>
              <DiscountIcon fontSize="large" />
            </button>
            <button onClick={() => handleModalSwitch("shipping")}>
              <LocalShippingIcon fontSize="large" />
            </button>
            <button onClick={() => handleModalSwitch("subscription")}>
              <SubscriptionsIcon fontSize="large" />
            </button>
            <button onClick={() => handleModalSwitch("transactions")}>
              <ReceiptLongIcon fontSize="large" />
            </button>
            <button onClick={() => handleModalSwitch("payments")}>
              <AccountBalanceIcon fontSize="large" />
            </button>
          </div>
          <Main />
        </div>
      ) : (
        <div className="warehouseHubCont">
          <div className="warehouseHubHeader">
            <div className="warehouseHubheaderCont fx-ac fx-jb space6">
              <figure className="fx-ac space1">
                <div
                  className="fx-ac fx-jc"
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "300rem",
                    width: "4rem",
                    height: "4rem",
                    padding: ".5rem",
                  }}
                >
                  <SchoolIcon fontSize="large" />
                </div>
                <div className="fx-cl">
                  <p className="warehousehubHeading">
                    <strong>Juwairiyyah Pharmacy:</strong> Sales Terminal
                  </p>
                  <div className="warehousehubStatusBar fx-ac spacem">
                    <span>
                      <strong>User: </strong> Fahad
                    </span>
                    <span
                      className="fx-ac spacem"
                      style={{
                        borderRight: "1px solid #999",
                        borderLeft: "1px solid #999",
                        padding: "0rem .4rem",
                      }}
                    >
                      <ShoppingCartCheckoutIcon />
                      <span>
                        <strong> 263 </strong>
                        SOLD ITEMS
                      </span>
                    </span>
                    <span className="fx-ac spacem">
                      <AccessTimeIcon />
                      <span>02:36hours</span>
                    </span>
                  </div>
                </div>
              </figure>

              <figure className="warehouseHubRight fx-ac spacem">
                <SettingsRemoteTwoToneIcon
                  style={{ color: "#f16b4c", fontSize: "2.8rem" }}
                />
                <div className="fx-ac">
                  <button
                    className="fx-ac fx-jc cbtdp"
                    onClick={() => handleCloseTerminal()}
                  >
                    <PowerSettingsNewIcon fontSize="large" />
                  </button>
                </div>
              </figure>
            </div>
          </div>
          <div className="warehouseHubMain fx-jc space1">
            <Main />
            <div className=" fx-cl fx-ac">
              <div className="warehouseHubAsideNav fx-ac spacem">
                <button
                  onClick={() => setToggleAside("products")}
                  className={`fx-ac spacem ${toggleAside === "products" && "active"}`}
                >
                  <CasesIcon /> <span>Products</span>
                </button>
                <button
                  onClick={() => setToggleAside("properties")}
                  className={`fx-ac spacem ${toggleAside === "properties" && "active"}`}
                >
                  <VideoLibraryRoundedIcon /> <span>Properties </span>
                </button>
                <button
                  onClick={() => setToggleAside("activity_log")}
                  className={`fx-ac spacem ${toggleAside === "activity_log" && "active"}`}
                >
                  <EventRoundedIcon /> <span>Activity log</span>
                </button>
              </div>
              <div className="aside fx-cl space1">
                <div>{switchAsideComp()}</div>
              </div>
            </div>
          </div>
          {/* <div className="warehouseHubFooter fx-ac fx-jc">
            <span>status bar contents</span>
          </div> */}
        </div>
      )}
    </section>
  );
}

function Property({ handleModalSwitch }) {
  return (
    <div className="warehousePropertCont">
      <div className="fx-cl">
        <div className="pptyTopCont fx-cl space2">
          <div className="fx-cl">
            <span style={{ fontSize: "3.2rem" }}>₦754,825.00</span>
            <span>
              <strong>Earnings</strong> of the total sales today.
            </span>
          </div>

          <div className="pptySum fx-cl space2">
            <div className="fx-ac fx-jb space2">
              <div className="fx-ac spacem">
                <figure className="fx-ac fx-jc">1</figure>
                <p>
                  <strong>pre-payment</strong>
                </p>
              </div>
              <strong className="pptyTag">checkout</strong>
              <p>₦64,425</p>
            </div>
            <div className="fx-ac fx-jb space2">
              <div className="fx-ac spacem">
                <figure className="fx-ac fx-jc">2</figure>
                <p>Final Delivery</p>
              </div>
              <p>₦27,024</p>
            </div>
          </div>
        </div>

        <div className="pptyBtnCont g g3 space1">
          <figure className="fx-cl spacem">
            <button onClick={() => handleModalSwitch("discount")}>
              <WorkspacePremiumRoundedIcon fontSize="large" />
            </button>
            <span>Discount</span>
          </figure>

          <figure className="fx-cl spacem">
            <button onClick={() => handleModalSwitch("on_hold_sales")}>
              <DiscountIcon fontSize="large" />
            </button>
            <span>On-hold</span>
          </figure>
          <figure className="fx-cl spacem">
            <button onClick={() => handleModalSwitch("shipping")}>
              <LocalShippingIcon fontSize="large" />
            </button>
            <span>Shipping</span>
          </figure>
          <figure className="fx-cl spacem">
            <button onClick={() => handleModalSwitch("subscription")}>
              <SubscriptionsIcon fontSize="large" />
            </button>
            <span>Subcribing</span>
          </figure>
          <figure className="fx-cl spacem">
            <button onClick={() => handleModalSwitch("transactions")}>
              <ReceiptLongIcon fontSize="large" />
            </button>
            <span>Transactions</span>
          </figure>
          <figure className="fx-cl spacem">
            <button onClick={() => handleModalSwitch("payments")}>
              <AccountBalanceIcon fontSize="large" />
            </button>
            <span>Payments</span>
          </figure>
        </div>
      </div>
    </div>
  );
}
function Products({ handleModalSwitch, products, addToCart, clearCart }) {
  /////////////////////////////////////////////////////////////////////////
  // SEARCH FILTER FUNCTOINS
  /////////////////////////////////////////////////////////////////////////

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.barcode.includes(term),
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSelect = (product) => {
    console.log("Selected product:", product);
    setSearchTerm(product.name);
    setFilteredProducts([]); // close dropdown after selection
  };
  return (
    <div className="fx-cl space1">
      <div className="warehauseSearchCont fx-jb space3">
        <div className=" fx-ac spacem">
          <div
            className="warehauseSearch fx-jb"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={handleSearch}
            />

            {filteredProducts.length > 0 && (
              <ul className="searched-products-dropdown">
                {filteredProducts.map((product) => (
                  <li
                    key={product.productId}
                    onClick={() => {
                      addToCart(product);
                      setFilteredProducts("");
                      setSearchTerm("");
                    }}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {product.name} — {product.barcode}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* <button>
            <SearchIcon fontSize="large" />
          </button> */}
        </div>
        <button
          className="wareHouseAddnewProd fx-ac fx-jc"
          onClick={() => handleModalSwitch("add_new_product")}
        >
          +
        </button>
      </div>

      <div className="items_product_cont g g3 space1">
        {products?.map((item, index) => {
          return (
            <figure
              onClick={() => {
                addToCart({
                  productId: item.productId,
                  barcode: item.barcode,
                  name: item.name,
                  quantity: item.quantity,
                  unitPrice: item.unitPrice,
                  tax: item.tax,
                  discount: item.discount,
                  batchNo: item.batchNo,
                  expiryDate: item.expiryDate,
                  subtotal: item.subtotal,
                  available: item.available,
                });
              }}
              key={index}
              className=" productsCardWH fx-cl space1 fx-jb"
            >
              <h4>{item.name}</h4>
              <div>
                <p>₦{item.unitPrice}</p>
              </div>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
function OperatingGuide() {
  return (
    <div className="OperatingGuide fx-cl space3">
      <div className="fx-cl">
        <strong>Computer Base Guide</strong>
        <span>Lorem ipsum dolor sit.</span>
      </div>
      <div className="OpGuidSec fx-ac space2">
        <NotificationsActiveOutlinedIcon />
        <p>
          <strong>Choose your option and click on</strong>
          next or previous button to submit
        </p>
      </div>
      <div className="OpGuidSec fx-ac space2">
        <NotificationsActiveOutlinedIcon />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ducimus eveniet ut? Vel ea ad placeat praesentium neque?
        </p>
      </div>

      <div className="OpGuidSec fx-ac space2">
        <NotificationsActiveOutlinedIcon />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}
export default WarehouseTerminal;
