import "./warehouseTerminal.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Action from "../../../../store/redux/hybrid_reducer.js";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import IsLoading from "../../../../isLoading.jsx";
import Calculator from "./cbtClientComps/Calculator.jsx";
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
import PreviewQuestion from "./cbtClientComps/PreviewQuestion.jsx";
import Counter, { CounterMini } from "./cbtClientComps/Counter.jsx";
import Appeals from "./cbtClientComps/Appeals.jsx";
import ExaminationLogs from "./cbtClientComps/ExaminationLogs.jsx";

let queue;

function WarehouseTerminal() {
  // INTEGRATIONS_-----------------------------
  const [showPassword, setShowPassword] = useState(false);
  const [changeview, setChangeView] = useState("");
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const [selectedSubject, setSelectedSubject] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(undefined);
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
    (state) => state.hybridActions.warehouse.products
  );

  // END OF MODAL FUNCTIONS------------------
  const [toggleAside, setToggleAside] = useState("instruction");
  const [showModal, setShowModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [onTimeChange, setOnTimeChange] = useState(false);
  const [togglePagination, setTogglePagination] = useState(true);

  /////////////////////////////////////////////////////////////////////////
  // REDUX FUCNTIONS
  /////////////////////////////////////////////////////////////////////////

  function addToCart(item) {
    dispatch(Action.addtoCart(item));
    console.log("CART:", item);
  }
  function clearCart() {
    dispatch(Action.clearCart());
  }

  // ...................////////
  function toggleModalBoxContents() {
    switch (showModal) {
      case "calculator":
        return <Calculator setOpenModal={setOpenModal} />;
      case "itemList":
        return (
          <Items
            setOpenModal={setOpenModal}
            selectedSubject={selectedSubject}
            openCalculator={openCalculator}
          />
        );
      case "counter":
        return (
          <Counter
            setOpenModal={setOpenModal}
            setOnTimeChange={setOnTimeChange}
          />
        );
      case "warning":
        return "Waring!";
      case "submit":
        return <button>Clear data</button>;
      case "exams logs":
        return <ExaminationLogs />;
      case "appeals":
        return <Appeals setOpenModal={setOpenModal} />;
      default:
        return null;
    }
  }
  function openPreviewQuestion() {
    setOpenModal(true);
    setShowModal("itemList");
  }
  function openExamLogs() {
    setOpenModal(true);
    setShowModal("exams logs");
  }
  function openCalculator() {
    setOpenModal(true);
    setShowModal("calculator");
  }
  function openCounter() {
    setOpenModal(true);
    setShowModal("counter");
  }
  function openSubmit() {
    setOpenModal(true);
    setShowModal("submit");
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
  function Regulations() {
    return (
      <div className="Instructions">
        <div className="fx-cl">
          <div className="fx-cl">
            <strong>Examination Regulations</strong>
            <span>Lorem ipsum dolor sit.</span>
          </div>
          <div className="g g4">
            <figure className="clientDashboardCard productsCardWH fx-cl space1">
              <img src="" alt="xt" />
              <h3>name</h3>
              <p>price</p>
            </figure>
          </div>
        </div>
      </div>
    );
  }
  function Products() {
    return (
      <div className="g g3 space1">
        {products?.map((item, index) => {
          return (
            <figure
              onClick={() => {
                addToCart({ name: item.name, price: item.price });
              }}
              key={index}
              className="clientDashboardCard productsCardWH fx-cl space1"
            >
              <h3>{item.name}</h3>
              <p>₦{item.price}</p>
            </figure>
          );
        })}
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

  function switchAsideComp() {
    switch (toggleAside) {
      case "products":
        return <Products />;
      case "regulation":
        return <Regulations />;
      case "guide":
        return <OperatingGuide />;
      default:
        return <Products />;
    }
  }

  useEffect(() => {
    !isFullscreen && toggleFullscreen();
  }, [isFullscreen]);
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
                  <strong>Point of Sales Terminal:</strong> Sales Products
                </p>
                <div className="warehousehubStatusBar fx-ac spacem">
                  <span>November, 23 2025</span>
                  <span
                    className="fx-ac spacem"
                    style={{
                      borderRight: "1px solid #999",
                      borderLeft: "1px solid #999",
                      padding: "0rem .4rem",
                    }}
                  >
                    <PeopleAltRoundedIcon />
                    <span>
                      <strong>
                        <em>263 </em>
                      </strong>
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

            <figure className="warehouseHubRight fx-ac space2">
              <strong>Halaalan Provision Store</strong>
              <div className="fx-ac">
                <button
                  className="fx-ac fx-jc cbtdp"
                  onClick={() =>
                    redirect(`/clients/691a663dc9f64e6b9b8be48e/account`)
                  }
                >
                  <PowerSettingsNewIcon fontSize="large" />
                </button>
              </div>
            </figure>
          </div>
        </div>
        <div className="warehouseHubMain fx-jc space1">
          <div className="main fx-cl space3">
            <div className="fx-cl">
              <div className="warehouseHubSubjects fx-ac space2">
                <div className="warehauseSearchCont fx-ac spacem">
                  <div className="warehauseSearch fx-jb">
                    <input
                      type="text"
                      name="application_number"
                      placeholder="im looking for..."
                    />
                  </div>
                  <button onClick={() => clearCart()}>
                    <SearchIcon fontSize="small" />
                  </button>
                </div>
              </div>

              <div className="warehouseItemsCont fx-cl">
                <div className="warehouseHubQuestionBtn fx-ac space2">
                  <button className="">
                    <span className="tooltips">toggle pagination</span>
                    {/* QuestionMarkIcon */}
                    <QuestionMarkIcon fontSize="large" />
                  </button>
                  <button className="">
                    <span className="tooltips">toggle pagination</span>
                    {/* Previews Question on Modal box */}
                    <VisibilityIcon fontSize="large" />
                  </button>
                </div>
                <div className="warehouseHubMiddleWare fx-ac fx-jb space4">
                  <CounterMini openCounter={openCounter} />
                  <div className="fx-ac spacem">
                    <button
                      onClick={() => openCalculator()}
                      className="fx-ac spacem"
                      style={{ color: "#26bf89", padding: ".2rem" }}
                    >
                      <CalculateIcon fontSize="large" />
                    </button>
                    {changeview === "grid" ? (
                      <button
                        onClick={() => setChangeView("table")}
                        style={{ color: "#26bf89", padding: ".2rem" }}
                      >
                        <TocOutlinedIcon fontSize="large" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setChangeView("grid")}
                        style={{ color: "#26bf89", padding: ".2rem" }}
                      >
                        <AppsOutlinedIcon fontSize="large" />
                      </button>
                    )}
                  </div>
                </div>
                <span className="warehouseHubQuestionCounts fx-ac spacem">
                  <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                    <ShoppingCartIcon fontSize="medium" /> Cart:
                  </strong>
                  <span>
                    23 <em>items</em>
                  </span>
                </span>

                {/* ____________CART ITEMS MAPPING___________ */}
                <Items />
              </div>
            </div>

            <div className="warehouseHubOperations fx-ac space3 fx-jb">
              <div className="prev">
                <button>
                  <SkipPreviousIcon />
                  <span>Previous</span>
                </button>

                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "transparent",
                    boxShadow: "none",
                  }}
                >
                  &nbsp;
                </button>
              </div>
              <figure className="fx-jc fx-ac space1">
                <button onClick={() => alert("I got clicked")} className="">
                  <span className="tooltips">toggle pagination</span>
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
                  <span className="tooltips">toggle pagination</span>
                  {/* Count Down */}
                  <HourglassTopIcon fontSize="large" />
                </button>
                <button onClick={() => openSubmit()} className="submit">
                  Cash payment
                </button>
                <button
                  onClick={() => setTogglePagination(!togglePagination)}
                  className={`${togglePagination && "active"}`}
                >
                  <span className="tooltips">toggle pagination</span>
                  {/* togglePagination */}
                  <GrainIcon fontSize="large" />
                </button>
                <button
                  onClick={() => openAppeals()}
                  className={`${showModal === "appeals" && "active"}`}
                >
                  <span className="tooltips">toggle pagination</span>
                  {/* Appeal */}
                  <BalanceIcon fontSize="large" />
                </button>
                <button onClick={() => alert("I got clicked")} className="">
                  <span className="tooltips">toggle pagination</span>
                  {/* RaisingHand */}
                  <BackHandIcon fontSize="large" />
                </button>
              </figure>
              <div className="next">
                <button className="next-button">
                  <span>Next</span>
                  <SkipNextIcon />
                </button>

                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "transparent",
                    boxShadow: "none",
                  }}
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </div>
          <div className="aside fx-cl space1">
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
                Regulations
              </button>
              <button
                onClick={() => setToggleAside("guide")}
                className={`${toggleAside === "guide" && "active"}`}
              >
                Manual
              </button>
            </div>
            <div>{switchAsideComp()}</div>
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
export default WarehouseTerminal;
