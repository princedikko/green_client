import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./sales.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import salesData from "../data";
import FilterSales from "./filters/FilterSales";
import IsLoading from "../../../../isLoading";
import ExportPDFButton from "./exports/SalesPDFExport";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import from MUI
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExportExcelJSButton from "./exports/SalesExcelExport";
import PrintIcon from "@mui/icons-material/Print";
import FlightIcon from "@mui/icons-material/Flight";
import PlaceIcon from "@mui/icons-material/Place";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AddIcon from "@mui/icons-material/Add";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";

// image imports
import ImgOne from "./img1.jpg";
import ImgTwo from "./img2.jpg";

export default function Sales({ breadcrumbs }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [salesFilterOpen, setSalesFilterOpen] = useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(salesData.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = salesData.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab
  );

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
      case "sales":
        return <ToDo />;
      case "completed":
        return <Completed />;
      case "progress":
        return <Progress />;
      default:
        return <ToDo />;
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
  // COMPONENTS OF SALES PAGE
  // //////////////////////////////////////////////////////////////////////////

  function ToDo() {
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
        <div className="sales">
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
              {currentRows.map((item, index) => (
                <tr key={item.invoiceNo}>
                  {/* <td>{index + 1}</td> */}
                  <td>
                    <strong>{item.customerName}</strong>
                  </td>
                  <td>{item.invoiceNo}</td>
                  <td>{item.paymentStatus}</td>
                  <td>₦{item.totalAmount.toLocaleString()}</td>
                  <td>₦{item.totalPaid.toLocaleString()}</td>
                  <td>{item.totalItems}</td>
                  <td>₦{item.sellDue.toLocaleString()}</td>
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
        <div className="salesCardGrid g g4 space2">
          {currentRows.map((item) => (
            <div key={item.invoiceNo} className="salesGridCard">
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
                  ₦{item.totalAmount.toLocaleString()}
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
        {loading ? (
          <IsLoading />
        ) : (
          <div className="fx-cl space2">
            <div className="fx-cl spacem">
              <div
                className="fx-ac fx-jb space2"
                style={{ fontSize: "1.2rem" }}
              >
                <span className="fx-ac spacem">
                  <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                    Display:
                  </strong>
                  <span>
                    {salesData.length === 0
                      ? "0 to 0 of 0 entries"
                      : `${start + 1} to ${Math.min(
                          end,
                          salesData.length
                        )} of ${salesData.length} entries`}
                  </span>
                </span>
                <div className="sales_entries-info fx-ac spacem">
                  <h4>Rows</h4>
                  <div className="sales-page-limit">
                    <button
                      className="sales-page-limit-btn"
                      onClick={() => setOpenLimit(!openLimit)}
                    >
                      {rowsPerPage} / page
                      <span className="sales-page-limit-arrow">▾</span>
                    </button>

                    {openLimit && (
                      <ul className="sales-limit-dropdown">
                        {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                          <li
                            key={n}
                            className="sales-limit-item"
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
              <div className="sales_row" id="printable">
                {switchView()}
              </div>
              <div className="fx-jc">
                <div className="sales_pagination fx-ac space2">
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
                          className={`sales_jumpto ${
                            currentPage === page ? "active" : ""
                          }`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      )
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
        )}
        <div className="sales_footer">
          <div className="flight-card clientDashboardCard fx-jb fx-ac space2">
            {/* LEFT: Airline */}
            <div className="sales-airline fx-cl space1">
              <div className="sales-airline-logo fx-ac fx-jc">✈️</div>
              <div className="fx-cl space3">
                <div className="sales-airline-name">Inventory Summation</div>
                <span className="sales-refund-badge">soled stuff</span>
              </div>
            </div>

            {/* CENTER: Flight info */}
            <div className="sales-flight-info fx-ac space2">
              <div className="sales-time-block">
                <div className="sales-time">12:10</div>
                <div className="sales-location">
                  Moi Intl, Mombasa
                  <br />
                  Minna
                </div>
              </div>

              <div className="sales-flight-line fx-ac fx-jc space1">
                <FlightIcon className="sales-plane-icon" />
                <div className="sales-duration">3h 30min</div>
                <div className="sales-stop">Non Stop</div>
              </div>

              <div className="sales-time-block">
                <div className="sales-time">15:30</div>
                <div className="sales-location">
                  <PlaceIcon className="sales-place-icon" />
                  JFK Terminal, Nairobi,
                  <br />
                  Kenya
                </div>
              </div>
            </div>

            {/* RIGHT: Price */}
            <div className="sales-price-section">
              <span className="sales-cheapest">Cheapest</span>
              <div className="sales-price">$110</div>
              <div className="sales-class">Business Class</div>
              <button className="sales-book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function Completed() {
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
              {currentRows.map((item, index) => (
                <tr key={item.invoiceNo}>
                  {/* <td>{index + 1}</td> */}
                  <td>
                    <strong>{item.customerName}</strong>
                  </td>
                  <td>{item.invoiceNo}</td>
                  <td>{item.paymentStatus}</td>
                  <td>₦{item.totalAmount.toLocaleString()}</td>
                  <td>₦{item.totalPaid.toLocaleString()}</td>
                  <td>{item.totalItems}</td>
                  <td>₦{item.sellDue.toLocaleString()}</td>
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
        <div className="salesCardGrid g g4 space2">
          {currentRows.map((item) => (
            <div key={item.invoiceNo} className="salesGridCard">
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
                  ₦{item.totalAmount.toLocaleString()}
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
        {loading ? (
          <IsLoading />
        ) : (
          <div className="fx-cl space2">
            <div className="fx-cl spacem">
              <div
                className="fx-ac fx-jb space2"
                style={{ fontSize: "1.2rem" }}
              >
                <span className="fx-ac spacem">
                  <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                    Display:
                  </strong>
                  <span>
                    {salesData.length === 0
                      ? "0 to 0 of 0 entries"
                      : `${start + 1} to ${Math.min(
                          end,
                          salesData.length
                        )} of ${salesData.length} entries`}
                  </span>
                </span>
                <div className="sales_entries-info fx-ac spacem">
                  <h4>Rows</h4>
                  <div className="sales-page-limit">
                    <button
                      className="sales-page-limit-btn"
                      onClick={() => setOpenLimit(!openLimit)}
                    >
                      {rowsPerPage} / page
                      <span className="sales-page-limit-arrow">▾</span>
                    </button>

                    {openLimit && (
                      <ul className="sales-limit-dropdown">
                        {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                          <li
                            key={n}
                            className="sales-limit-item"
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
              <div className="sales_row" id="printable">
                {switchView()}
              </div>
              <div className="fx-jc">
                <div className="sales_pagination fx-ac space2">
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
                          className={`sales_jumpto ${
                            currentPage === page ? "active" : ""
                          }`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      )
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
        )}
        <div className="sales_footer">Footer here</div>
      </div>
    );
  }
  function Progress() {
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
              {currentRows.map((item, index) => (
                <tr key={item.invoiceNo}>
                  {/* <td>{index + 1}</td> */}
                  <td>
                    <strong>{item.customerName}</strong>
                  </td>
                  <td>{item.invoiceNo}</td>
                  <td>{item.paymentStatus}</td>
                  <td>₦{item.totalAmount.toLocaleString()}</td>
                  <td>₦{item.totalPaid.toLocaleString()}</td>
                  <td>{item.totalItems}</td>
                  <td>₦{item.sellDue.toLocaleString()}</td>
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
        <div className="salesCardGrid g g4 space2">
          {currentRows.map((item) => (
            <div key={item.invoiceNo} className="salesGridCard">
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
                  ₦{item.totalAmount.toLocaleString()}
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
        {loading ? (
          <IsLoading />
        ) : (
          <div className="fx-cl space2">
            <div className="fx-cl spacem">
              <div
                className="fx-ac fx-jb space2"
                style={{ fontSize: "1.2rem" }}
              >
                <span className="fx-ac spacem">
                  <strong className="fx-jc" style={{ color: "#3a84f8" }}>
                    Display:
                  </strong>
                  <span>
                    {salesData.length === 0
                      ? "0 to 0 of 0 entries"
                      : `${start + 1} to ${Math.min(
                          end,
                          salesData.length
                        )} of ${salesData.length} entries`}
                  </span>
                </span>
                <div className="sales_entries-info fx-ac spacem">
                  <h4>Rows</h4>
                  <div className="sales-page-limit">
                    <button
                      className="sales-page-limit-btn"
                      onClick={() => setOpenLimit(!openLimit)}
                    >
                      {rowsPerPage} / page
                      <span className="sales-page-limit-arrow">▾</span>
                    </button>

                    {openLimit && (
                      <ul className="sales-limit-dropdown">
                        {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                          <li
                            key={n}
                            className="sales-limit-item"
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
              <div className="sales_row" id="printable">
                {switchView()}
              </div>
              <div className="fx-jc">
                <div className="sales_pagination fx-ac space2">
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
                          className={`sales_jumpto ${
                            currentPage === page ? "active" : ""
                          }`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      )
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
        )}
        <div className="sales_footer">Footer here</div>
      </div>
    );
  }
  console.log(
    "PRINTING:",
    useSelector((state) => state.clientFunction?.printData)
  );
  return (
    <div className="salesCompContainer">
      <div className="fx-cl space2">
        <div className="sales_breadcrumbs fx-ac">
          <Link className="fx-ac spacem">
            <strong>{breadcrumbs.active && breadcrumbs.active}</strong>{" "}
            <KeyboardArrowRightIcon fontSize="small" />{" "}
          </Link>
          <Link className="fx-ac spacem">
            <span>
              {breadcrumbs.active_display && breadcrumbs.active_display}
            </span>
            <KeyboardArrowRightIcon fontSize="small" />
            <span>{currentTab && currentTab}</span>
          </Link>
        </div>
        <div className="sales_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              Here is a list of sales you have made
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
        <div className="sales_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("sales")}
              className={`fx-ac  spacem ${currentTab == "sales" && "active"}`}
            >
              <span>Todo</span>
              <figure>34</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("completed")}
              className={`fx-ac  spacem ${
                currentTab == "completed" && "active"
              }`}
            >
              <span>Completed</span>
              <figure>45</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("progress")}
              className={`fx-ac  spacem ${
                currentTab == "progress" && "active"
              }`}
            >
              <span>In Progress</span>
              <figure>89</figure>
            </li>
          </ul>
          <div className="right fx-ac fx-jb space1">
            <div className="fx-ac space1">
              <button
                className="sales_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setSalesFilterOpen(!salesFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {salesFilterOpen && (
                <div
                  className="sales_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setSalesFilterOpen(false)} // click outside → close
                >
                  <div
                    className="sales_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterSales />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="sales_export_btn fx-ac spacem"
                onClick={() => navigate("/clients/warehouse_terminal")}
              >
                <AddIcon fontSize="large" /> <span>Add new</span>
              </button>
            </div>
          </div>
        </div>
        <div className="sales_main">{switchActiveTab()}</div>
      </div>
    </div>
  );
}
