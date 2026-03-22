import { useState } from "react";
import { useSelector } from "react-redux";
import "./specialWorkFlow.css";
import Calculator from "./modalBoxComps/Calculator";

import TestQr from "./testqr.png";
import SearchIcon from "@mui/icons-material/Search";
import LayersClearIcon from "@mui/icons-material/LayersClear";
import SettingsRemoteTwoToneIcon from "@mui/icons-material/SettingsRemoteTwoTone";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CalculateIcon from "@mui/icons-material/Calculate";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import CloseIcon from "@mui/icons-material/Close";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AdjustIcon from "@mui/icons-material/Adjust";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ShareIcon from "@mui/icons-material/Share";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";

import ViewInArIcon from "@mui/icons-material/ViewInAr";
export default function SpecialWorkFlow({
  addToCart,
  handleModalSwitch,
  toggleScreen,
  handleCloseRegister,
}) {
  const [reveal, setReveal] = useState("");

  function controlReveal(active) {
    if (reveal === active) {
      setReveal("");
    } else {
      setReveal(active);
    }
  }

  return (
    <section id="specialWorkFlow" className=" fx-cl fx-jb space5">
      <div className="fx-cl space3">
        <div className="workflowItem">
          <button
            className={`workflowItemBtn fx-ac spacem ${reveal === "closeRegister" && "activeFlow"}`}
            onClick={() => controlReveal("closeRegister")}
          >
            {reveal === "closeRegister" ? (
              <CloseIcon fontSize="large" />
            ) : (
              <PowerSettingsNewIcon fontSize="large" />
            )}
          </button>
          <aside className="workflowDisplayCont">
            <RoundUpInfo handleCloseRegister={handleCloseRegister} />
          </aside>
          <div className="workflowItemTooltip">Close Register</div>
        </div>
        <div className="fx-cl space1">
          <div className="workflowItem">
            <button
              className={`workflowItemBtn fx-ac spacem ${reveal === "reveal-products" && "activeFlow"}`}
              onClick={() => controlReveal("reveal-products")}
            >
              {reveal === "reveal-products" ? (
                <CloseIcon fontSize="large" />
              ) : (
                <StorefrontIcon fontSize="large" />
              )}
            </button>
            <aside className="workflowDisplayCont">
              <AllProducts addToCart={addToCart} />
            </aside>
            <div className="workflowItemTooltip">View Products</div>
          </div>
          <figure>
            <div className="workflowItem">
              <button
                className={`workflowItemBtn fx-ac spacem ${reveal === "layer2" && "activeFlow"}`}
                onClick={() => controlReveal("layer2")}
              >
                {reveal === "layer2" ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <BroadcastOnHomeIcon fontSize="large" />
                )}
              </button>
              <aside className="workflowDisplayCont">
                Coneecting Smart QR/Bar Code Scanner
              </aside>
              <div className="workflowItemTooltip">Tooltip content</div>
            </div>
            <div className="workflowItem">
              <button
                className={`workflowItemBtn fx-ac spacem ${reveal === "layer6" && "activeFlow"}`}
                onClick={() => controlReveal("layer6")}
              >
                {reveal === "layer6" ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <ViewInArIcon fontSize="large" />
                )}
              </button>
              <aside className="workflowDisplayCont">asdf</aside>
              <div className="workflowItemTooltip">Tooltip content</div>
            </div>
            <div className="workflowItem">
              <button
                className={`workflowItemBtn fx-ac spacem ${reveal === "layer3" && "activeFlow"}`}
                onClick={() => controlReveal("layer3")}
              >
                {reveal === "layer3" ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <NotificationsActiveIcon fontSize="large" />
                )}
              </button>
              <aside className="workflowDisplayCont">Thanks</aside>
              <div className="workflowItemTooltip">Tooltip content</div>
            </div>
            <div className="workflowItem">
              <button
                className={`workflowItemBtn fx-ac spacem ${reveal === "layer4" && "activeFlow"}`}
                onClick={() => controlReveal("layer4")}
              >
                {reveal === "layer4" ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <ShareIcon fontSize="large" />
                )}
              </button>
              <aside className="workflowDisplayCont">Thanks</aside>
              <div className="workflowItemTooltip">Tooltip content</div>
            </div>
          </figure>
          <div className="workflowItem">
            <button
              className={`workflowItemBtn fx-ac spacem ${reveal === "layer11" && "activeFlow"}`}
              onClick={() => controlReveal("layer11")}
            >
              {reveal === "layer11" ? (
                <CloseIcon fontSize="large" />
              ) : (
                <SettingsSuggestIcon fontSize="large" />
              )}
            </button>
            <aside className="workflowDisplayCont">Thanks</aside>
            <div className="workflowItemTooltip">Tooltip content</div>
          </div>
        </div>
      </div>
      <div className="fx-cl space1">
        <div className="workflowItem">
          <button
            className={`workflowItemBtn fx-ac spacem ${reveal === "calculator" && "activeFlow"}`}
            onClick={() => controlReveal("calculator")}
          >
            {reveal === "calculator" ? (
              <CloseIcon fontSize="large" />
            ) : (
              <CalculateIcon fontSize="large" />
            )}
          </button>
          <aside className="workflowDisplayCont workFlowCalculator">
            <Calculator />
          </aside>
          <div className="workflowItemTooltip">Tooltip content</div>
        </div>

        <figure>
          <div className="workflowItem">
            <button
              className="workflowItemBtn fx-ac fx-jc"
              onClick={() => toggleScreen()}
            >
              {reveal === "layer" ? (
                <CloseIcon fontSize="large" />
              ) : (
                <BroadcastOnHomeIcon fontSize="large" />
              )}
            </button>
            <aside className="workflowDisplayCont">Calculator</aside>
            <div className="workflowItemTooltip">Tooltip content</div>
          </div>
          <button
            className="workflowItemBtn"
            onClick={() => handleModalSwitch("clear_cart")}
          >
            {reveal === "layer" ? (
              <CloseIcon fontSize="large" />
            ) : (
              <DeleteForeverIcon fontSize="large" />
            )}
          </button>
        </figure>
      </div>
    </section>
  );
}

function AllProducts({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // SELECTORS FROM REDUX
  const products = useSelector(
    (state) => state.hybridActions.warehouse.products,
  );
  // ----------------------------------------------------

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

  function switchProductView() {
    if (filteredProducts.length > 0) {
      return (
        <div className="workFlowProductsDisplay fx-cl spacem">
          {filteredProducts.map((product) => (
            <div
              className="workflowDisplayItem"
              key={product.productId}
              onClick={() => {
                addToCart(product);
                setFilteredProducts("");
                setSearchTerm("");
              }}
            >
              <div className="fx-ac spacem">
                <figure className="productAct">&nbsp;</figure>
                <p>
                  {" "}
                  <AdjustIcon />
                  <strong>{product.name}</strong>
                </p>
                <span>N{(product.pricing?.sellingPrice).toLocaleString()}</span>
              </div>
              <div className="fx-ac spacem">
                <p>{product.brand}</p>
                <p>{product.units.baseUnit}</p>
                <span>{product.sellingQuantity}</span>
                <span>{product.status}</span>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (searchTerm.trim() !== "") {
      return (
        <p className="no-products-found" style={{ color: "#fff" }}>
          No products found
        </p>
      );
    } else {
      return (
        <div className="workFlowProductsDisplay fx-cl spacem">
          {products.map((product) => (
            <div
              className="workflowDisplayItem fx-cl spacem"
              key={product.productId}
              onClick={() => {
                addToCart(product);
                setFilteredProducts("");
                setSearchTerm("");
              }}
            >
              <div className="fx-ac spacem">
                <figure className="productAct">&nbsp;</figure>
                <p>{product.name}</p>
                <span>N{(product.pricing?.sellingPrice).toLocaleString()}</span>
              </div>
              <div className="fx-ac spacem">
                <p>
                  <strong>{product.brand}</strong>
                </p>
                <p>{product.units.baseUnit}</p>
                <span>{product.sellingQuantity}</span>
                <span>{product.status}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div
      className="fx-cl space2"
      style={{ position: "relative", padding: "0.7rem 1rem" }}
    >
      <h3 className="workflowHead">Products</h3>

      <div className="fx-cl space1">
        <div className="workFlowSearchCont fx-ac space1">
          <SearchIcon fontSize="large" />
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="fx">
          <button>Filter Search</button>
        </div>
      </div>

      <div className="workFlowProductsCont fx-cl space1">
        <span style={{ fontSize: "1.6rem" }}>
          <strong>All Products</strong>
        </span>
        {switchProductView()}
      </div>
    </div>
  );
}

function RoundUpInfo({ handleCloseRegister }) {
  return (
    <div className="roundUpRegister fx-cl space2">
      <div className="fx-ac space1">
        <SettingsRemoteTwoToneIcon />
        <h3>Register</h3>
      </div>
      <div className="fx-cl space2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, earum
          necessitatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          excepturi velit amet laborum eius impedit totam debitis eos eum!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
          fugiat eligendi nostrum maiores impedit, earum nihil animi laudantium
          possimus aspernatur, eos corrupti doloribus!
        </p>
      </div>
      <div className="fx-cl space1">
        <h4>Qr Code Details</h4>
        <div className="roundUpRegComp fx">
          <div className="regQrCont">
            <div className="fx-cl space1">
              <p>
                Lorem dolor sit amet, elit. Similique est ut unde laudantium!
              </p>
              <p>adipisicing elit. Similique est ut unde laudantium!</p>
            </div>
            <div className="regQr">
              <img src={TestQr} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="fx-cl space1">
        <h4>Account</h4>

        <div className="roundUpRegComp fx">
          <div className="fx-cl space1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              corporis itaque aliquam harum minima qui quis dolorum quas
              voluptatum blanditiis consectetur nihil labore, debitis deserunt,
              eaque atque, libero iste deleniti saepe earum!
            </p>
          </div>
        </div>
      </div>
      <div className="fx-cl space1">
        <h4>Register</h4>

        <div className="roundUpRegComp fx">
          <div className="roundUpClose fx-cl space1">
            <button id="registerClose" onClick={() => handleCloseRegister()}>
              Close Register
            </button>
            <p>Close your Register to access your Pro Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
