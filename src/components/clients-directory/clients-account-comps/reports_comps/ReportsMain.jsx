import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./reportsMain.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import salesData from "../data";
import IsLoading from "../../../../isLoading";
import FilterDiscount from "./reports_filters/ReportsFilters.jsx";
import ExportPDFButton from "./reports_exportations/ReportsPDFExport.jsx";
import ExportExcelJSButton from "./reports_exportations/ReportsExcelExport.jsx";
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
// image imports
import ImgOne from "./img1.jpg";
import ImgTwo from "./img2.jpg";

export default function ReportsMain({ breadcrumbs }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [reportsmainFilterOpen, setreportsmainFilterOpen] = useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(salesData.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = salesData.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab,
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
      case "reportsmain":
        return <MainPage />;
      case "completed":
        return <Completed />;
      case "progress":
        return <Progress />;
      default:
        return <MainPage />;
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
  // COMPONENTS OF reportsmain PAGE
  // //////////////////////////////////////////////////////////////////////////

  function MainPage() {
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
                          salesData.length,
                        )} of ${salesData.length} entries`}
                  </span>
                </span>
              </div>
              <div className="reportsmain_row" id="printable">
                <div className="reportsmainCardGrid g g3 space2">
                  <div className="reportsmainGridCard">
                    {/* Header */}
                    <div className="cardHeader">
                      <img alt="customer" className="avatar" src={ImgOne} />

                      <div className="cardInfo">
                        <h4>Invoices</h4>
                        <p>Invoice #454345</p>

                        <div className="ratingRow">
                          <span className="rating">5.3</span>
                          <span className="location">📍 12/21/2002</span>
                        </div>

                        <small>254 items</small>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="tags">
                      <span>Total</span>
                      <span>Paid</span>
                      <span>+211132</span>
                    </div>

                    {/* Footer */}
                    <div className="cardFooter">
                      <div className="price">
                        ₦365,125
                        <small> / sale</small>
                      </div>

                      <button className="cardBtn">View Sale</button>
                    </div>
                  </div>
                  <div className="reportsmainGridCard">
                    {/* Header */}
                    <div className="cardHeader">
                      <img alt="customer" className="avatar" src={ImgOne} />

                      <div className="cardInfo">
                        <h4>Profit/Loss</h4>
                        <p>Invoice #454345</p>

                        <div className="ratingRow">
                          <span className="rating">5.3</span>
                          <span className="location">📍 12/21/2002</span>
                        </div>

                        <small>254 items</small>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="tags">
                      <span>Total</span>
                      <span>Paid</span>
                      <span>+211132</span>
                    </div>

                    {/* Footer */}
                    <div className="cardFooter">
                      <div className="price">
                        ₦365,125
                        <small> / sale</small>
                      </div>

                      <button className="cardBtn">View Sale</button>
                    </div>
                  </div>
                  <div className="reportsmainGridCard">
                    {/* Header */}
                    <div className="cardHeader">
                      <img alt="customer" className="avatar" src={ImgOne} />

                      <div className="cardInfo">
                        <h4>Purchases</h4>
                        <p>Invoice #454345</p>

                        <div className="ratingRow">
                          <span className="rating">5.3</span>
                          <span className="location">📍 12/21/2002</span>
                        </div>

                        <small>254 items</small>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="tags">
                      <span>Total</span>
                      <span>Paid</span>
                      <span>+211132</span>
                    </div>

                    {/* Footer */}
                    <div className="cardFooter">
                      <div className="price">
                        ₦365,125
                        <small> / sale</small>
                      </div>

                      <button className="cardBtn">View Sale</button>
                    </div>
                  </div>
                  <div className="reportsmainGridCard">
                    {/* Header */}
                    <div className="cardHeader">
                      <img alt="customer" className="avatar" src={ImgOne} />

                      <div className="cardInfo">
                        <h4>Sales</h4>
                        <p>Invoice #454345</p>

                        <div className="ratingRow">
                          <span className="rating">5.3</span>
                          <span className="location">📍 12/21/2002</span>
                        </div>

                        <small>254 items</small>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="tags">
                      <span>Total</span>
                      <span>Paid</span>
                      <span>+211132</span>
                    </div>

                    {/* Footer */}
                    <div className="cardFooter">
                      <div className="price">
                        ₦365,125
                        <small> / sale</small>
                      </div>

                      <button className="cardBtn">View Sale</button>
                    </div>
                  </div>
                  <div className="reportsmainGridCard">
                    {/* Header */}
                    <div className="cardHeader">
                      <img alt="customer" className="avatar" src={ImgOne} />

                      <div className="cardInfo">
                        <h4>Contact & CRM</h4>
                        <p>Invoice #454345</p>

                        <div className="ratingRow">
                          <span className="rating">5.3</span>
                          <span className="location">📍 12/21/2002</span>
                        </div>

                        <small>254 items</small>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="tags">
                      <span>Total</span>
                      <span>Paid</span>
                      <span>+211132</span>
                    </div>

                    {/* Footer */}
                    <div className="cardFooter">
                      <div className="price">
                        ₦365,125
                        <small> / sale</small>
                      </div>

                      <button className="cardBtn">View Sale</button>
                    </div>
                  </div>
                  <div className="reportsmainGridCard">
                    {/* Header */}
                    <div className="cardHeader">
                      <img alt="customer" className="avatar" src={ImgOne} />

                      <div className="cardInfo">
                        <h4>Expense & Account</h4>
                        <p>Invoice #454345</p>

                        <div className="ratingRow">
                          <span className="rating">5.3</span>
                          <span className="location">📍 12/21/2002</span>
                        </div>

                        <small>254 items</small>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="tags">
                      <span>Total</span>
                      <span>Paid</span>
                      <span>+211132</span>
                    </div>

                    {/* Footer */}
                    <div className="cardFooter">
                      <div className="price">
                        ₦365,125
                        <small> / sale</small>
                      </div>

                      <button className="cardBtn">View Sale</button>
                    </div>
                  </div>
                  <div className="reportsmainGridCard">
                    {/* Header */}
                    <div className="cardHeader">
                      <img alt="customer" className="avatar" src={ImgOne} />

                      <div className="cardInfo">
                        <h4>Stocks</h4>
                        <p>Invoice #454345</p>

                        <div className="ratingRow">
                          <span className="rating">5.3</span>
                          <span className="location">📍 12/21/2002</span>
                        </div>

                        <small>254 items</small>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="tags">
                      <span>Total</span>
                      <span>Paid</span>
                      <span>+211132</span>
                    </div>

                    {/* Footer */}
                    <div className="cardFooter">
                      <div className="price">
                        ₦365,125
                        <small> / sale</small>
                      </div>

                      <button className="cardBtn">View Sale</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
        <div className="reportsmainCardGrid g g4 space2">
          {currentRows.map((item) => (
            <div key={item.invoiceNo} className="reportsmainGridCard">
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
                          salesData.length,
                        )} of ${salesData.length} entries`}
                  </span>
                </span>
                <div className="reportsmain_entries-info fx-ac spacem">
                  <h4>Rows</h4>
                  <div className="reportsmain-page-limit">
                    <button
                      className="reportsmain-page-limit-btn"
                      onClick={() => setOpenLimit(!openLimit)}
                    >
                      {rowsPerPage} / page
                      <span className="reportsmain-page-limit-arrow">▾</span>
                    </button>

                    {openLimit && (
                      <ul className="reportsmain-limit-dropdown">
                        {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                          <li
                            key={n}
                            className="reportsmain-limit-item"
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
              <div className="reportsmain_row" id="printable">
                {switchView()}
              </div>
              <div className="fx-jc">
                <div className="reportsmain_pagination fx-ac space2">
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
                          className={`reportsmain_jumpto ${
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
        )}
        <div className="reportsmain_footer">Footer here</div>
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
        <div className="reportsmainCardGrid g g4 space2">
          {currentRows.map((item) => (
            <div key={item.invoiceNo} className="reportsmainGridCard">
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
                          salesData.length,
                        )} of ${salesData.length} entries`}
                  </span>
                </span>
                <div className="reportsmain_entries-info fx-ac spacem">
                  <h4>Rows</h4>
                  <div className="reportsmain-page-limit">
                    <button
                      className="reportsmain-page-limit-btn"
                      onClick={() => setOpenLimit(!openLimit)}
                    >
                      {rowsPerPage} / page
                      <span className="reportsmain-page-limit-arrow">▾</span>
                    </button>

                    {openLimit && (
                      <ul className="reportsmain-limit-dropdown">
                        {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                          <li
                            key={n}
                            className="reportsmain-limit-item"
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
              <div className="reportsmain_row" id="printable">
                {switchView()}
              </div>
              <div className="fx-jc">
                <div className="reportsmain_pagination fx-ac space2">
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
                          className={`reportsmain_jumpto ${
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
        )}
        <div className="reportsmain_footer">Footer here</div>
      </div>
    );
  }
  console.log(
    "PRINTING:",
    useSelector((state) => state.clientFunction?.printData),
  );
  return (
    <div className="reportsmainCompContainer">
      <div className="fx-cl space2">
        <div className="reportsmain_breadcrumbs fx-ac">
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
        <div className="reportsmain_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              Here is a list of reportsmain you have made
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
        <div className="reportsmain_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("reportsmain")}
              className={`fx-ac  spacem ${
                currentTab == "reportsmain" && "active"
              }`}
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
                className="reportsmain_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setreportsmainFilterOpen(!reportsmainFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {reportsmainFilterOpen && (
                <div
                  className="reportsmain_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setreportsmainFilterOpen(false)} // click outside → close
                >
                  <div
                    className="reportsmain_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterDiscount />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="reportsmain_export_btn fx-ac spacem"
                onClick={() => navigate("/clients/warehouse_terminal")}
              >
                <AddIcon fontSize="large" /> <span>Add new</span>
              </button>
            </div>
          </div>
        </div>
        <div className="reportsmain_main">{switchActiveTab()}</div>
      </div>
    </div>
  );
}
