import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./products.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import IsLoading from "../../../../IsLoading.jsx";
import FilterProducts from "./filters/FilterProducts.jsx";
import ExportPDFButton from "./exports/ProductsPDFExport.jsx";
import ExportExcelJSButton from "./exports/ProductsExcelExport.jsx";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import from MUI
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PrintIcon from "@mui/icons-material/Print";
import FlightIcon from "@mui/icons-material/Flight";
import PlaceIcon from "@mui/icons-material/Place";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AddIcon from "@mui/icons-material/Add";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
// image imports
import ImgOne from "./img1.jpg";

let productsData;
export default function Products({ breadcrumbs }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [productsFilterOpen, setproductsFilterOpen] = useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(productsData?.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = productsData?.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab,
  );

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    sku: "MILK-PEAK-001",
    barcode: "6224001234567",
    qrcode: "1234567890123",
    name: "Peak Milk 170g",
    brand: "Peak",
    productType: "inventory", // service, digital, subscription
    units: {
      baseUnit: "tin",
      purchaseUnit: "carton",
      conversionRate: 24,
      salesUnit: "tin",
    },
    description: "Business laptop",
    categoryId: "cat-1234",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 650,
      sellingPrice: 820,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      reorderLevel: 5,
      reorderQuantity: 10,
      minLevel: 20,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack B",
        quantity: 35,
        reservedQuantity: 0,
        damagedQuantity: 0,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124A",
          costPrice: 800,
          quantityAvailable: 35,
          manufactureDate: "2024-01-01",
          expiryDate: "2026-01-30",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdBy: "userId",
    updatedBy: "userId",
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  async function apiPostProducts() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/add_product`,
        payload,
      );
      if (response?.data?.status === 201) {
        enqueueSnackbar(response?.data?.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(response?.data?.message || "Failed to fetch products", {
          variant: "error",
          autoHideDuration: 3000,
        });
      }

      console.log("Add product response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      enqueueSnackbar("Server error while fetching products", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }

  async function apiGetProducts() {
    try {
      setLoading(true);

      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/manage_products/client/691a663dc9f64e6b9b8be48e/products/fetch_product`,
      );

      if (response?.data?.status === 201) {
        productsData = response.data.productDB;
        enqueueSnackbar(response?.data?.message || "Failed to fetch products", {
          variant: "success",
          autoHideDuration: 3000,
        });
        console.log("Fetched products:", productsData);
      } else {
        enqueueSnackbar(response?.data?.message || "Failed to fetch products", {
          variant: "error",
          autoHideDuration: 3000,
        });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      enqueueSnackbar("Server error while fetching products", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }

  // /////////////////////////////////////////////////////////
  // Redux functions for sub-navigation
  // /////////////////////////////////////////////////////////
  function handleCurrentTAB(item) {
    dispatch(DispatchCurrentTAB(item));
  }
  const DispatchCurrentTAB = (item) => async (dispatch) => {
    try {
      dispatch(Action.dispatchCurrentTAB({ item }));
    } catch (error) {
      console.log(error);
    }
  };
  function handlePrint(data) {
    dispatch(DispatchPrinting(data));
    // navigate(`/clients/${id}}/account/data_printing`);
    window.open(`/clients/${id}/account/data_printing`, "_blank");
  }
  const DispatchPrinting = (data) => async (dispatch) => {
    try {
      dispatch(Action.dispatchPrintData({ data }));
    } catch (error) {
      console.log(error);
    }
  };

  // ////////////////////////////////////////////////////////////
  function getPagination(current, total) {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 4) {
      return [1, 2, 3, 4, 5, "...", total];
    }

    if (current >= total - 3) {
      return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
    }

    return [1, "...", current - 1, current, current + 1, "...", total];
  }

  function switchActiveTab() {
    switch (currentTab) {
      case "products":
        return <AllProducts />;
      case "codes":
        return <ProductCode />;
      case "add_product":
        return <AddProduct />;
      default:
        return <AllProducts />;
    }
  }

  // //////////////////////////////////////////////////////////////////////////
  // COMPONENTS OF products PAGE
  // //////////////////////////////////////////////////////////////////////////

  function AllProducts() {
    function switchView() {
      switch (changeview) {
        case "grid":
          return <CardView currentRows={currentRows} />;
        case "table":
          return <TableView currentRows={currentRows} />;
        default:
          return <TableView currentRows={currentRows} />;
      }
    }
    function TableView({ currentRows }) {
      const [openItemDrpdwn, setOpenItemDrpdwn] = useState(false);
      const [accordion, setAccordion] = useState(null);
      const [brands, setBrands] = useState("All brands");
      const [activeRow, setActiveRow] = useState(null);
      const dispatch = useDispatch();

      function handleItemDrpdwn(index) {
        setOpenItemDrpdwn(!openItemDrpdwn);
        if (activeRow === index) {
          setActiveRow(null);
        } else {
          setActiveRow(index);
        }
      }

      return (
        <div className="products">
          <table className="fx-cl spacem">
            <thead className="fx-cl spacem">
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Purchase Price</th>
                <th>Selling Price</th>
                <th>Stock</th>
                <th>Unit</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="fx-cl spacem">
              {currentRows?.map((item, index) => (
                <tr
                  key={index}
                  id={`${accordion == index && "productsAccordionOpen"}`}
                  className="productsRowTdCont fx-cl space1"
                >
                  <td
                    id={item?.sku}
                    className={`productsRowTd ${activeRow == index && "active_warehauseRow"}`}
                    onClick={() =>
                      accordion == index
                        ? setAccordion(null)
                        : setAccordion(index)
                    }
                  >
                    <span>
                      <strong>{item?.name}</strong>
                    </span>
                    <span>{item?.categoryId}</span>
                    <span>{item?.brand}</span>
                    <span>₦{item?.pricing?.costPrice?.toLocaleString()}</span>
                    <span>
                      ₦{item?.pricing?.sellingPrice?.toLocaleString()}
                    </span>
                    <span>{item?.stock?.quantityAvailable}</span>
                    <span>{item?.units?.baseUnit}</span>
                    <span>{item?.warehouses?.[0]?.location}</span>
                    <span>{item?.status}</span>
                  </td>

                  <span className="productsAccordionCont">
                    <div className="productsAccordionDisc fx-ac space1">
                      <figure className="fx-ac fx-jc">
                        <ShoppingCartIcon
                          style={{
                            fontSize: "9.5rem",
                            color: "rgb(233 245 243)",
                          }}
                        />
                      </figure>

                      <div className="productsAccordionDetails g g4 space1">
                        <div className="fx-cl spacem">
                          <span>Batch</span>
                          <p>
                            <strong>
                              {item?.batch?.batches?.[0]?.batchNo}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Item SKU</span>
                          <p>
                            <strong>{item?.sku}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Base Unit</span>
                          <p>
                            <strong>{item?.units?.baseUnit}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Expiry Date</span>
                          <p>
                            <strong>
                              {item?.batch?.batches?.[0]?.expiryDate}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Warehouse</span>
                          <p>
                            <strong>{item?.warehouses?.[0]?.location}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Barcode</span>
                          <p>
                            <strong>{item?.barcode}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Stock Available</span>
                          <p>
                            <strong>{item?.stock?.quantityAvailable}</strong>
                          </p>
                        </div>
                        <div className="fx-cl spacem">
                          <span>Date Created</span>
                          <p>
                            <strong>
                              {" "}
                              {new Date(item?.createdAt).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                },
                              )}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-ac space1">
                          <button
                            className="controlButtons"
                            style={{
                              cursor:
                                currentRows.length > 0
                                  ? "pointer"
                                  : "not-allowed",
                              opacity: currentRows.length > 0 ? 1 : 0.6,
                            }}
                          >
                            <span>Return item</span>
                          </button>

                          <button
                            className="controlButtons"
                            style={{
                              cursor:
                                currentRows.length > 0
                                  ? "pointer"
                                  : "not-allowed",
                              opacity: currentRows.length > 0 ? 1 : 0.6,
                            }}
                          >
                            <RemoveCircleOutlineIcon />
                            <span>Edit</span>
                          </button>

                          <button
                            className="controlButtons"
                            style={{
                              cursor:
                                currentRows.length > 0
                                  ? "pointer"
                                  : "not-allowed",
                              opacity: currentRows.length > 0 ? 1 : 0.6,
                            }}
                          >
                            <LocalPrintshopIcon />
                            <span>Discount</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </span>
                </tr>
              ))}
            </tbody>
            {/* <tbody className="fx-cl spacem">
              {currentRows?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <strong>{item?.name}</strong>
                  </td>
                  <td>{item?.sku}</td>
                  <td>{item?.categoryId}</td>
                  <td>{item?.brand}</td>
                  <td>₦{item?.pricing?.costPrice?.toLocaleString()}</td>
                  <td>₦{item?.pricing?.sellingPrice?.toLocaleString()}</td>
                  <td>{item?.stock?.quantityAvailable}</td>
                  <td>{item?.units?.baseUnit}</td>
                  <td>{item?.warehouses?.[0]?.location}</td>
                  <td>{item?.status}</td>
                  <td>{new Date(item?.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      );
    }

    function CardView({ currentRows }) {
      return (
        <div className="productsCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item?.barcode} className="productsGridCard">
              {/* Header */}
              <div className="cardHeader">
                <img alt="customer" className="avatar" src={ImgOne} />

                <div className="cardInfo">
                  <h4>{item?.name}</h4>
                  <p>Invoice #{item?.barcode}</p>

                  <div className="ratingRow">
                    <span className="rating">
                      ⭐ {item?.paymentStatus === "Paid" ? "5.0" : "4.0"}
                    </span>
                    <span className="location">📍 {item?.sku}</span>
                  </div>

                  <small>{item?.totalItems} items</small>
                </div>
              </div>

              {/* Tags */}
              <div className="tags">
                <span>Total</span>
                <span>Paid</span>
                <span>+{item?.totalItems}</span>
              </div>

              {/* Footer */}
              <div className="cardFooter">
                <div className="price">
                  ₦{item?.sellingPrice}
                  <small> / sale</small>
                </div>

                <button className="cardBtn">View Sale</button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="fx-cl space2">
        <div className="fx-cl space2">
          <div className="fx-cl spacem">
            <div className="fx-ac fx-jb space2" style={{ fontSize: "1.2rem" }}>
              <span className="fx-ac spacem">
                <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                  Display:
                </strong>
                <span>
                  {productsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        productsData?.length,
                      )} of ${productsData?.length} entries`}
                </span>
              </span>
              <div className="products_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="products-page-limit">
                  <button
                    className="products-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="products-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="products-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="products-limit-item"
                          onClick={() => {
                            setRowsPerPage(n);
                            setCurrentPage(1);
                            setOpenLimit(false);
                          }}
                        >
                          {n} / page
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="products_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="products_pagination fx-ac space2">
                <button
                  className="fx-ac spacem"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  <SkipPreviousIcon />
                  Prev
                </button>
                <div className="fx-ac">
                  {getPagination(currentPage, totalPages)?.map((page, i) =>
                    page === "..." ? (
                      <span key={i} className="dots">
                        …
                      </span>
                    ) : (
                      <button
                        key={i}
                        className={`products_jumpto ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  className="fx-ac spacem"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                  <SkipNextIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="products_footer">
          <div className="flight-card clientDashboardCard fx-jb fx-ac space2">
            {/* LEFT: Airline */}
            <div className="products-airline fx-cl space1">
              <div className="products-airline-logo fx-ac fx-jc">✈️</div>
              <div className="fx-cl space3">
                <div className="products-airline-name">Inventory Summation</div>
                <span className="products-refund-badge">soled stuff</span>
              </div>
            </div>

            {/* CENTER: Flight info */}
            <div className="products-flight-info fx-ac space2">
              <div className="products-time-block">
                <div className="products-time">12:10</div>
                <div className="products-location">
                  Moi Intl, Mombasa
                  <br />
                  Minna
                </div>
              </div>

              <div className="products-flight-line fx-ac fx-jc space1">
                <FlightIcon className="products-plane-icon" />
                <div className="products-duration">3h 30min</div>
                <div className="products-stop">Non Stop</div>
              </div>

              <div className="products-time-block">
                <div className="products-time">15:30</div>
                <div className="products-location">
                  <PlaceIcon className="products-place-icon" />
                  JFK Terminal, Nairobi,
                  <br />
                  Kenya
                </div>
              </div>
            </div>

            {/* RIGHT: Price */}
            <div className="products-price-section">
              <span className="products-cheapest">Cheapest</span>
              <div className="products-price">$110</div>
              <div className="products-class">Business Class</div>
              <button className="products-book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function ProductCode() {
    function switchView() {
      switch (changeview) {
        case "grid":
          return <CardView currentRows={currentRows} />;
        case "table":
          return <TableView currentRows={currentRows} />;
        default:
          return <TableView currentRows={currentRows} />;
      }
    }
    function TableView({ currentRows }) {
      return (
        <div className="codes">
          <table className="fx-cl spacem">
            <thead className="fx-cl spacem">
              <tr>
                <th>Customer name</th>
                <th>Invoice No.</th>
                <th>Payment status</th>
                <th>Total amount</th>
                <th>Total paid</th>
                <th>Quantity</th>
                <th>Sell Due</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="fx-cl spacem">
              {currentRows?.map((item, index) => (
                <tr key={item?.invoiceNo}>
                  {/* <td>{index + 1}</td> */}
                  <td>
                    <strong>{item?.name}</strong>
                  </td>
                  <td>{item?.barcode}</td>
                  <td>{item?.brand}</td>
                  <td>₦{item?.sellingPrice}</td>
                  <td>₦{item?.sellingPrice}</td>
                  <td>{item?.unit}</td>
                  <td>₦{item?.costPrice}</td>
                  <td>{item?.date}</td>
                  <td>
                    <button>{item?.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    function CardView({ currentRows }) {
      return (
        <div className="productsCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item?.barcode} className="productsGridCard">
              {/* Header */}
              <div className="cardHeader">
                <img alt="customer" className="avatar" src={ImgOne} />

                <div className="cardInfo">
                  <h4>{item?.name}</h4>
                  <p>Invoice #{item?.barcode}</p>

                  <div className="ratingRow">
                    <span className="rating">
                      ⭐ {item?.paymentStatus === "Paid" ? "5.0" : "4.0"}
                    </span>
                    <span className="location">📍 {item?.sku}</span>
                  </div>

                  <small>{item?.totalItems} items</small>
                </div>
              </div>

              {/* Tags */}
              <div className="tags">
                <span>Total</span>
                <span>Paid</span>
                <span>+{item?.totalItems}</span>
              </div>

              {/* Footer */}
              <div className="cardFooter">
                <div className="price">
                  ₦{item?.sellingPrice}
                  <small> / sale</small>
                </div>

                <button className="cardBtn">View Sale</button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="fx-cl space2">
        <div className="fx-cl space2">
          <div className="fx-cl spacem">
            <div className="fx-ac fx-jb space2" style={{ fontSize: "1.2rem" }}>
              <span className="fx-ac spacem">
                <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                  Display:
                </strong>
                <span>
                  {productsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        productsData?.length,
                      )} of ${productsData?.length} entries`}
                </span>
              </span>
              <div className="products_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="products-page-limit">
                  <button
                    className="products-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="products-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="products-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="products-limit-item"
                          onClick={() => {
                            setRowsPerPage(n);
                            setCurrentPage(1);
                            setOpenLimit(false);
                          }}
                        >
                          {n} / page
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="products_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="products_pagination fx-ac space2">
                <button
                  className="fx-ac spacem"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  <SkipPreviousIcon />
                  Prev
                </button>
                <div className="fx-ac">
                  {getPagination(currentPage, totalPages)?.map((page, i) =>
                    page === "..." ? (
                      <span key={i} className="dots">
                        …
                      </span>
                    ) : (
                      <button
                        key={i}
                        className={`products_jumpto ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  className="fx-ac spacem"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                  <SkipNextIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="products_footer">Footer here</div>
      </div>
    );
  }
  function AddProduct() {
    function switchView() {
      switch (changeview) {
        case "grid":
          return <CardView currentRows={currentRows} />;
        case "table":
          return <TableView currentRows={currentRows} />;
        default:
          return <TableView currentRows={currentRows} />;
      }
    }
    function TableView({ currentRows }) {
      return (
        <div className="prog">
          <button className="btnTemporary" onClick={() => apiPostProducts()}>
            Host Products
          </button>
          <table className="fx-cl spacem">
            <thead className="fx-cl spacem">
              <tr>
                <th>Customer name</th>
                <th>Invoice No.</th>
                <th>Payment status</th>
                <th>Total amount</th>
                <th>Total paid</th>
                <th>Quantity</th>
                <th>Sell Due</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="fx-cl spacem">
              {currentRows?.map((item, index) => (
                <tr key={item?.invoiceNo}>
                  {/* <td>{index + 1}</td> */}
                  <td>
                    <strong>{item?.name}</strong>
                  </td>
                  <td>{item?.barcode}</td>
                  <td>{item?.brand}</td>
                  <td>₦{item?.sellingPrice}</td>
                  <td>₦{item?.sellingPrice}</td>
                  <td>{item?.unit}</td>
                  <td>₦{item?.costPrice}</td>
                  <td>{item?.date}</td>
                  <td>
                    <button>{item?.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    function CardView({ currentRows }) {
      return (
        <div className="productsCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item?.barcode} className="productsGridCard">
              {/* Header */}
              <div className="cardHeader">
                <img alt="customer" className="avatar" src={ImgOne} />

                <div className="cardInfo">
                  <h4>{item?.name}</h4>
                  <p>Invoice #{item?.barcode}</p>

                  <div className="ratingRow">
                    <span className="rating">
                      ⭐ {item?.paymentStatus === "Paid" ? "5.0" : "4.0"}
                    </span>
                    <span className="location">📍 {item?.sku}</span>
                  </div>

                  <small>{item?.totalItems} items</small>
                </div>
              </div>

              {/* Tags */}
              <div className="tags">
                <span>Total</span>
                <span>Paid</span>
                <span>+{item?.totalItems}</span>
              </div>

              {/* Footer */}
              <div className="cardFooter">
                <div className="price">
                  ₦{item?.sellingPrice}
                  <small> / sale</small>
                </div>

                <button className="cardBtn">View Sale</button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="fx-cl space2">
        <div className="fx-cl space2">
          <div className="fx-cl spacem">
            <div className="fx-ac fx-jb space2" style={{ fontSize: "1.2rem" }}>
              <span className="fx-ac spacem">
                <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                  Display:
                </strong>
                <span>
                  {productsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        productsData?.length,
                      )} of ${productsData?.length} entries`}
                </span>
              </span>
              <div className="products_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="products-page-limit">
                  <button
                    className="products-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="products-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="products-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="products-limit-item"
                          onClick={() => {
                            setRowsPerPage(n);
                            setCurrentPage(1);
                            setOpenLimit(false);
                          }}
                        >
                          {n} / page
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="products_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="products_pagination fx-ac space2">
                <button
                  className="fx-ac spacem"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  <SkipPreviousIcon />
                  Prev
                </button>
                <div className="fx-ac">
                  {getPagination(currentPage, totalPages)?.map((page, i) =>
                    page === "..." ? (
                      <span key={i} className="dots">
                        …
                      </span>
                    ) : (
                      <button
                        key={i}
                        className={`products_jumpto ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  className="fx-ac spacem"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                  <SkipNextIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="products_footer">Footer here</div>
      </div>
    );
  }

  useEffect(() => {
    apiGetProducts();
  }, []);

  return (
    <div className="productsCompContainer">
      <div className="fx-cl space2">
        <div className="products_breadcrumbs fx-ac">
          <Link className="fx-ac spacem">
            <strong>{breadcrumbs.active && breadcrumbs.active_title}</strong>{" "}
            <KeyboardArrowRightIcon fontSize="small" />{" "}
          </Link>
          <Link className="fx-ac spacem">
            <span>
              {breadcrumbs.active_display_title &&
                breadcrumbs.active_display_title}
            </span>
            <KeyboardArrowRightIcon fontSize="small" />
            <span>{currentTab && currentTab}</span>
          </Link>
        </div>
        <div className="products_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active_title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              This module stores services instead of physical products: A
              service has no stock.
            </p>
          </div>
          <div className="fx-ac fx-jb spacem">
            <div className=" fx-ac spacem">
              <div>
                {changeview === "grid" ? (
                  <button
                    className="iconBtn"
                    onClick={() => setChangeView("table")}
                  >
                    <ListAltIcon fontSize="large" />
                  </button>
                ) : (
                  <button
                    className="iconBtn"
                    onClick={() => setChangeView("grid")}
                  >
                    <AppsOutlinedIcon fontSize="large" />
                  </button>
                )}
              </div>
              <button
                className="iconBtn printingBtn"
                onClick={() =>
                  handlePrint({
                    currentRows: currentRows,
                    tab: currentTab,
                  })
                }
              >
                <PrintIcon fontSize="large" />
              </button>
              <ExportPDFButton currentRows={currentRows} />
            </div>

            <div className="fx-ac space1">
              <ExportExcelJSButton currentRows={currentRows} />
            </div>
          </div>
        </div>
        <div className="products_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("products")}
              className={`fx-ac  spacem ${
                currentTab == "products" && "active"
              }`}
            >
              <span>All Products</span>
              <figure>{productsData?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("codes")}
              className={`fx-ac  spacem ${currentTab == "codes" && "active"}`}
            >
              <span>Product Codes</span>
              <figure>{productsData?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("add_product")}
              className={`fx-ac  spacem ${
                currentTab == "add_product" && "active"
              }`}
            >
              <span>Add New Product</span>
              <figure>+</figure>
            </li>
          </ul>
          <div className="right fx-ac fx-jb space1">
            <div className="fx-ac space1">
              <button
                className="products_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setproductsFilterOpen(!productsFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {productsFilterOpen && (
                <div
                  className="products_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setproductsFilterOpen(false)} // click outside → close
                >
                  <div
                    className="products_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterProducts />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="products_export_btn fx-ac spacem"
                onClick={() => navigate("/clients/warehouse_terminal")}
              >
                <AddIcon fontSize="large" /> <span>Add new</span>
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <IsLoading />
        ) : (
          <div className="products_main">{switchActiveTab()}</div>
        )}
      </div>
    </div>
  );
}
