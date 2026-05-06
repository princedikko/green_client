import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./returns.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
import { useSnackbar } from "notistack";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import salesData from "../data";
import IsLoading from "../../../../IsLoading.jsx";
import FilterRuturns from "./filters/FilterReturn.jsx";
import ExportPDFButton from "./exports/ReturnPDFExport.jsx";
import ExportExcelJSButton from "./exports/ReturnsExcelExport.jsx";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import from MUI
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PrintIcon from "@mui/icons-material/Print";
import FlightIcon from "@mui/icons-material/Flight";
import PlaceIcon from "@mui/icons-material/Place";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AddIcon from "@mui/icons-material/Add";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// image imports
import ImgOne from "./img1.jpg";
import RecordReturned from "./create/RecordReturned.jsx";

let returnsData;

export default function Returns({ breadcrumbs }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [returnsFilterOpen, setreturnsFilterOpen] = useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(returnsData?.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = returnsData?.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab,
  );

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  async function apiFetchReturns() {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/purchases/client/691a663dc9f64e6b9b8be48e/get_returns`,
      )
      .then((response) => {
        returnsData = response.data.returnsData;
        console.log("returnsData: ", response);
        if (response.data.status === 201) {
          setLoading(false);
          enqueueSnackbar(`${response.data.message}`, {
            variant: "success",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
        } else {
          enqueueSnackbar(`${response.data.message}`, {
            variant: "error",
            autoHideDuration: 3000,
            ContentProps: {
              style: { fontSize: "16px", fontWeight: "bold" },
            },
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        enqueueSnackbar(`error: something went wrong!`, {
          variant: "error",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        console.log(error);
        setLoading(false);
      });
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
      case "returns":
        return <AllReturned />;
      case "completed":
        return <Pending />;
      case "progress":
        return <RecordReturned />;
      default:
        return <AllReturned />;
    }
  }

  const printElement = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const printWindow = window.open("", "_blank", "width=900,height=650");

    printWindow.document.write(`
    <html>
      <head>
        <title>Print</title>
        <style>
          body { font-family: Arial; padding: 20px; }
        </style>
      </head>

      <body>
        ${element.innerHTML}

        <script>
          window.onload = function () {
            window.print();

            // close after print dialog finishes
            window.onafterprint = function () {
              window.close();
            };
          };
        </script>
      </body>
    </html>
  `);

    printWindow.document.close();
  };
  // //////////////////////////////////////////////////////////////////////////
  // COMPONENTS OF returns PAGE
  // //////////////////////////////////////////////////////////////////////////

  function AllReturned() {
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
                <th>Return ID</th>
                <th>Purchase Order ID</th>
                <th>Receive ID</th>
                <th>Supplier</th>
                <th>Warehouse</th>
                <th>Processed By</th>
                <th>Return Date</th>
                <th>Status</th>
                <th>Total Refund</th>
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
                    id={item?.returnId}
                    className={`productsRowTd ${activeRow == index && "active_warehauseRow"}`}
                    onClick={() =>
                      accordion == index
                        ? setAccordion(null)
                        : setAccordion(index)
                    }
                  >
                    <span>
                      <strong>{item?.returnId}</strong>
                    </span>
                    <span>{item?.originalPurchaseOrderId}</span>
                    <span>{item?.receiveId}</span>
                    <span>{item?.supplier?.name}</span>
                    <span>{item?.warehouse?.name}</span>
                    <span>{item?.processedBy?.name}</span>
                    <span>
                      {new Date(item?.returnDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>{item?.status}</span>
                    <span>
                      {item?.financials?.currency}{" "}
                      {item?.financials?.totalRefundValue?.toLocaleString()}
                    </span>
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
                          <span>Return ID</span>
                          <p>
                            <strong>{item?.returnId}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Return Type</span>
                          <p>
                            <strong>{item?.returnType}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Supplier Contact</span>
                          <p>
                            <strong>{item?.supplier?.contact}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Reason Summary</span>
                          <p>
                            <strong>{item?.reasonSummary}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Total Quantity Returned</span>
                          <p>
                            <strong>
                              {item?.financials?.totalQuantityReturned}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Total Refund Value</span>
                          <p>
                            <strong>
                              {item?.financials?.currency}{" "}
                              {item?.financials?.totalRefundValue?.toLocaleString()}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Shipping Method</span>
                          <p>
                            <strong>{item?.logistics?.shippingMethod}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Tracking Number</span>
                          <p>
                            <strong>{item?.logistics?.trackingNumber}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Created At</span>
                          <p>
                            <strong>
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
                          <button className="controlButtons">
                            <span>View Return</span>
                          </button>

                          <button className="controlButtons">
                            <RemoveCircleOutlineIcon />
                            <span>Edit</span>
                          </button>

                          <button className="controlButtons">
                            <LocalPrintshopIcon />
                            <span>Export</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </span>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    function CardView({ currentRows }) {
      return (
        <div className="returnsCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="returnsGridCard">
              {/* Header */}
              <div className="cardHeader">
                <img alt="customer" className="avatar" src={ImgOne} />

                <div className="cardInfo">
                  <h4>{item.customerName}</h4>
                  <p>Invoice #{item.invoiceNo}</p>

                  <div className="ratingRow">
                    <span className="rating">
                      ⭐ {item.paymentStatus === "Paid" ? "5.0" : "4.0"}
                    </span>
                    <span className="location">📍 {item.date}</span>
                  </div>

                  <small>{item.totalItems} items</small>
                </div>
              </div>

              {/* Tags */}
              <div className="tags">
                <span>Total</span>
                <span>Paid</span>
                <span>+{item.totalItems}</span>
              </div>

              {/* Footer */}
              <div className="cardFooter">
                <div className="price">
                  ₦{item.totalAmount?.toLocaleString()}
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
                  {returnsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        returnsData?.length,
                      )} of ${returnsData?.length} entries`}
                </span>
              </span>
              <div className="returns_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="returns-page-limit">
                  <button
                    className="returns-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="returns-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="returns-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="returns-limit-item"
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
            <div className="returns_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="returns_pagination fx-ac space2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  Previous
                </button>
                <div className="fx-ac">
                  {getPagination(currentPage, totalPages).map((page, i) =>
                    page === "..." ? (
                      <span key={i} className="dots">
                        …
                      </span>
                    ) : (
                      <button
                        key={i}
                        className={`returns_jumpto ${
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
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="returns_footer">
          <div className="flight-card clientDashboardCard fx-jb fx-ac space2">
            {/* LEFT: Airline */}
            <div className="returns-airline fx-cl space1">
              <div className="returns-airline-logo fx-ac fx-jc">✈️</div>
              <div className="fx-cl space3">
                <div className="returns-airline-name">Inventory Summation</div>
                <span className="returns-refund-badge">soled stuff</span>
              </div>
            </div>

            {/* CENTER: Flight info */}
            <div className="returns-flight-info fx-ac space2">
              <div className="returns-time-block">
                <div className="returns-time">12:10</div>
                <div className="returns-location">
                  Moi Intl, Mombasa
                  <br />
                  Minna
                </div>
              </div>

              <div className="returns-flight-line fx-ac fx-jc space1">
                <FlightIcon className="returns-plane-icon" />
                <div className="returns-duration">3h 30min</div>
                <div className="returns-stop">Non Stop</div>
              </div>

              <div className="returns-time-block">
                <div className="returns-time">15:30</div>
                <div className="returns-location">
                  <PlaceIcon className="returns-place-icon" />
                  JFK Terminal, Nairobi,
                  <br />
                  Kenya
                </div>
              </div>
            </div>

            {/* RIGHT: Price */}
            <div className="returns-price-section">
              <span className="returns-cheapest">Cheapest</span>
              <div className="returns-price">$110</div>
              <div className="returns-class">Business Class</div>
              <button className="returns-book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function Pending() {
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
        <div className="completed">
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
                <tr key={item.invoiceNo}>
                  {/* <td>{index + 1}</td> */}
                  <td>
                    <strong>{item.customerName}</strong>
                  </td>
                  <td>{item.invoiceNo}</td>
                  <td>{item.paymentStatus}</td>
                  <td>₦{item.totalAmount?.toLocaleString()}</td>
                  <td>₦{item.totalPaid?.toLocaleString()}</td>
                  <td>{item.totalItems}</td>
                  <td>₦{item.sellDue?.toLocaleString()}</td>
                  <td>{item.date}</td>
                  <td>
                    <button>{item.action}</button>
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
        <div className="returnsCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="returnsGridCard">
              {/* Header */}
              <div className="cardHeader">
                <img alt="customer" className="avatar" src={ImgOne} />

                <div className="cardInfo">
                  <h4>{item.customerName}</h4>
                  <p>Invoice #{item.invoiceNo}</p>

                  <div className="ratingRow">
                    <span className="rating">
                      ⭐ {item.paymentStatus === "Paid" ? "5.0" : "4.0"}
                    </span>
                    <span className="location">📍 {item.date}</span>
                  </div>

                  <small>{item.totalItems} items</small>
                </div>
              </div>

              {/* Tags */}
              <div className="tags">
                <span>Total</span>
                <span>Paid</span>
                <span>+{item.totalItems}</span>
              </div>

              {/* Footer */}
              <div className="cardFooter">
                <div className="price">
                  ₦{item.totalAmount?.toLocaleString()}
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
                  {returnsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        returnsData?.length,
                      )} of ${returnsData?.length} entries`}
                </span>
              </span>
              <div className="returns_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="returns-page-limit">
                  <button
                    className="returns-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="returns-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="returns-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="returns-limit-item"
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
            <div className="returns_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="returns_pagination fx-ac space2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  Previous
                </button>
                <div className="fx-ac">
                  {getPagination(currentPage, totalPages).map((page, i) =>
                    page === "..." ? (
                      <span key={i} className="dots">
                        …
                      </span>
                    ) : (
                      <button
                        key={i}
                        className={`returns_jumpto ${
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
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="returns_footer">Footer here</div>
      </div>
    );
  }
  useEffect(() => {
    apiFetchReturns();
  }, []);
  return (
    <div className="returnsCompContainer">
      <div className="fx-cl space2">
        <div className="returns_breadcrumbs fx-ac">
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
        <div className="returns_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active_title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              Returns means sending products back to the supplier. Reasons:
              damaged goods expired products wrong items delivered quality
              issues
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
        <div className="returns_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("returns")}
              className={`fx-ac  spacem ${currentTab == "returns" && "active"}`}
            >
              <span>Returned List</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("completed")}
              className={`fx-ac  spacem ${
                currentTab == "completed" && "active"
              }`}
            >
              <span>Pending</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("progress")}
              className={`fx-ac  spacem ${
                currentTab == "progress" && "active"
              }`}
            >
              <span>In AddNew</span>
              <figure>89</figure>
            </li>
          </ul>
          <div className="right fx-ac fx-jb space1">
            <div className="fx-ac space1">
              <button
                className="returns_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setreturnsFilterOpen(!returnsFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {returnsFilterOpen && (
                <div
                  className="returns_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setreturnsFilterOpen(false)} // click outside → close
                >
                  <div
                    className="returns_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterRuturns />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="returns_export_btn fx-ac spacem"
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
          <div className="returns_main">{switchActiveTab()}</div>
        )}
      </div>
    </div>
  );
}
