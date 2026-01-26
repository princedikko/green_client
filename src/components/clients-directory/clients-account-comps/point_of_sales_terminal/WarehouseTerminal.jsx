import "./warehouseTerminal.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Action from "../../../../store/redux/hybrid_reducer.js";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import IsLoading from "../../../../isLoading.jsx";
import Calculator from "./modalBoxComps/Calculator.jsx";
import Items from "./ware_house_comps/Items.jsx";
// ------------------NEW IMPORTS---------------------

import SearchIcon from "@mui/icons-material/Search";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import CalculateIcon from "@mui/icons-material/Calculate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TestImage from "./test.png";
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
import Counter, { CounterMini } from "./modalBoxComps/Counter.jsx";

let queue;

function WarehouseTerminal() {
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

  // REDUX STATE SELECTOR----------------------
  const products = useSelector(
    (state) => state.hybridActions.warehouse.products,
  );
  const cart = useSelector((state) => state.hybridActions.warehouse.cart);
  console.log("PRODUCTS:", products);
  // END OF MODAL FUNCTIONS------------------
  const [toggleAside, setToggleAside] = useState("instruction");
  const [showModal, setShowModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [onTimeChange, setOnTimeChange] = useState(false);
  const [togglePagination, setTogglePagination] = useState(true);
  const [customer, setCustomer] = useState("Walk-in Customer");
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

  /////////////////////////////////////////////////////////////////////////
  // REDUX FUCNTIONS
  /////////////////////////////////////////////////////////////////////////
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
  }
  function clearProducts() {
    dispatch(Action.clearProductsAction());
  }
  // ...................////////
  function toggleModalBoxContents() {
    switch (showModal) {
      case "calculator":
        return <Calculator setOpenModal={setOpenModal} />;
      case "itemList":
        return (
          <Items setOpenModal={setOpenModal} openCalculator={openCalculator} />
        );
      case "counter":
        return (
          <ShoppingCartCheckoutIcon
            style={{ fontSize: "22rem", color: "#fff" }}
          />
        );
      case "warning":
        return "Waring!";
      case "submit":
        return <button>Clear data</button>;
      case "exams logs":
        return "something";
      case "appeals":
        return "someth";
      default:
        return null;
    }
  }
  function openCalculator() {
    setOpenModal(true);
    setShowModal("calculator");
  }
  function openCounter() {
    setOpenModal(true);
    setShowModal("counter");
  }
  function cashPaidSubmit() {
    enqueueSnackbar(`Product soled successfully`, {
      variant: "success",
      autoHideDuration: 3000,
      ContentProps: {
        style: { fontSize: "16px", fontWeight: "bold" },
      },
    });
  }
  function openWarning() {
    setOpenModal(true);
    setShowModal("warning");
  }
  function openAppeals() {
    setOpenModal(true);
    setShowModal("appeals");
  }
  function closeModalDiv() {
    setOpenModal(false);
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
            products={products}
            addToCart={addToCart}
            clearCart={clearCart}
          />
        );
      case "regulation":
        return <Regulations />;
      case "guide":
        return <OperatingGuide />;
      default:
        return (
          <Products
            products={products}
            addToCart={addToCart}
            clearCart={clearCart}
          />
        );
    }
  }

  // useEffect(() => {
  //   !isFullscreen && toggleFullscreen();
  // }, [isFullscreen]);
  return (
    <section className="sectionwarehouseHub fx-cl">
      {openModal && (
        <div id="modalContainer" onClick={() => closeModalDiv()}>
          {toggleModalBoxContents()}
        </div>
      )}
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
              <CalculateIcon style={{ color: "#f85a38", fontSize: "3.2rem" }} />
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
          <div className="main fx-cl space1">
            <div className="fx-cl">
              <div className="warehouseHubSubjects fx-ac space2">
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
                        <ul className="customers-limit-dropdown">
                          {customerTypesArray.map((n) => (
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
                  <button style={{ width: "5rem" }} onClick={() => clearCart()}>
                    +
                  </button>
                </div>
              </div>

              <div className="warehouseItemsCont fx-cl space1">
                <div className="warehouseHubQuestionBtn fx-ac space2">
                  <button className="">
                    <span className="tooltips">tooltips</span>
                    {/* QuestionMarkIcon */}
                    <QuestionMarkIcon fontSize="large" />
                  </button>
                  <button className="">
                    <span className="tooltips">tooltips</span>
                    {/* Previews Question on Modal box */}
                    <VisibilityIcon fontSize="large" />
                  </button>
                </div>

                <div className="warehouseHubMiddleWare fx-ac fx-jb space4">
                  <button
                    onClick={() => openCounter()}
                    className="fx-ac spacem"
                  >
                    <figure className="counterIcon">&nbsp;</figure>
                    <div className="fx-ac space2">
                      <div className="fx-ac spacem">
                        <span>TOTAL:</span>{" "}
                        <strong> ₦ {cart?.unitPrice}</strong>
                      </div>
                    </div>
                  </button>
                  <div className="fx-ac spacem">
                    <button
                      onClick={() => openCalculator()}
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
                            {[
                              "All",
                              "Samsung",
                              "Apple",
                              "Sony",
                              "LG",
                              "Xiaomi",
                              "Infinix",
                              "Tecno",
                              "Huawei",
                              "Nokia",
                              "HP",
                              "Dell",
                              "Lenovo",
                              "Acer",
                              "Asus",
                            ].map((n) => (
                              <li
                                key={n}
                                className="brands-limit-item"
                                onClick={() => {
                                  setBrands(n);
                                  setOpenBrands(false);
                                }}
                              >
                                {n}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <span className="warehouseHubQuestionCounts fx-ac spacem">
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
                </span>

                {/* ____________CART ITEMS MAPPING___________ */}
                <Items />
              </div>
            </div>
            {isIconButtons ? (
              <div className="warehouseHubOperations fx-ac space3 fx-jb">
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
                  <button
                    onClick={() => openCounter()}
                    className={`${showModal === "counter" && "active"}`}
                  >
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
                  <button
                    onClick={() => openAppeals()}
                    className={`${showModal === "appeals" && "active"}`}
                  >
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
                <button onClick={() => clearProducts()}>
                  <AppsOutlinedIcon />
                  <span>Prospond</span>
                </button>
                <button onClick={() => clearProducts()}>
                  <AppsOutlinedIcon />
                  <span>Suspend</span>
                </button>
                <button onClick={() => clearProducts()}>
                  <AppsOutlinedIcon />
                  <span>Credit sale</span>
                </button>
                <button
                  onClick={() => cashPaidSubmit()}
                  className="cashPaid fx-jc"
                >
                  Complete
                </button>
                <button onClick={() => clearProducts()}>
                  <SkipPreviousIcon />
                  <span>Multi-pay</span>
                </button>
                <button onClick={() => clearProducts()}>
                  <SkipPreviousIcon />
                  <span>Pay Online</span>
                </button>
                <button onClick={() => clearProducts()}>
                  <SkipPreviousIcon />
                  <span>Save draft</span>
                </button>
              </div>
            )}
          </div>
          <div className=" fx-cl space1">
            <div className="warehouseHubAsideNav fx-ac spacem">
              <button
                onClick={() => setToggleAside("products")}
                className={`${toggleAside === "instruction" && "active"}`}
              >
                Products
              </button>
              <button
                onClick={() => setToggleAside("regulation")}
                className={`${toggleAside === "regulation" && "active"}`}
              >
                Properties
              </button>
              <button
                onClick={() => setToggleAside("guide")}
                className={`${toggleAside === "guide" && "active"}`}
              >
                Activity log
              </button>
            </div>
            <div className="aside fx-cl space1">
              <div>{switchAsideComp()}</div>
            </div>
          </div>
        </div>
        <div className="warehouseHubFooter fx-ac fx-jc">
          <span>
            copy right &copy; {new Date().getFullYear()} Universe Tech Industry,
            all rights reserves
          </span>
        </div>
      </div>
    </section>
  );
}

function Regulations() {
  return (
    <div className="Instructions">
      <div className="fx-cl">
        <div className="fx-cl">
          <strong>Examination Regulations</strong>
          <span>Lorem ipsum dolor sit.</span>
        </div>
        <div className="g g4">
          <figure className=" productsCardWH fx-cl space1">
            <img src="" alt="xt" />
            <h3>name</h3>
            <p>price</p>
          </figure>
        </div>
      </div>
    </div>
  );
}
function Products({ products, addToCart, clearCart }) {
  return (
    <div className="fx-cl space1">
      <div className="warehauseSearchCont fx-jb space3">
        <div className=" fx-ac spacem">
          <div className="warehauseSearch fx-jb">
            <input
              type="text"
              name="application_number"
              placeholder="Search products..."
            />
          </div>
          <button onClick={() => clearCart()}>
            <SearchIcon fontSize="large" />
          </button>
        </div>
        <button
          className="wareHouseAddnewProd fx-ac fx-jc"
          onClick={() => alert("Add New Product")}
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
              className=" productsCardWH fx-cl space1"
            >
              <h4>{item.name}</h4>
              <p>₦{item.unitPrice}</p>
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
