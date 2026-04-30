import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./adjustment.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";

import { useSnackbar } from "notistack";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import IsLoading from "../../../../IsLoading.jsx";
import FilterAdjustment from "./filters/FilterAdjustment.jsx";
import ExportPDFButton from "./exports/AdjustmentPDFExport.jsx";
import ExportExcelJSButton from "./exports/AdjustmetExcelExport.jsx";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import from MUI
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
import ImgTwo from "./img2.jpg";

let adjustmentsData;

export default function Adjustment({ breadcrumbs }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [adjustmentFilterOpen, setadjustmentFilterOpen] = useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(adjustmentsData?.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = adjustmentsData?.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab,
  );

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////
  const payload = {
    adjustmentId: "ADJ-2026-000078",
    adjustmentType: "RECONCILIATION",

    reference: {
      referenceType: "RECONCILIATION",
      referenceId: "REC-2026-000045",
    },

    status: {
      current: "POSTED",
      createdAt: "2026-04-30T13:30:00Z",
      postedAt: "2026-04-30T14:00:00Z",
    },

    location: {
      locationId: "LOC-WH-01",
      type: "WAREHOUSE",
      name: "Main Warehouse",
    },

    items: [
      {
        productId: "PRD-1001",
        name: "Peak Milk",
        sku: "PM-200",

        systemQuantityBefore: 200,
        physicalQuantity: 190,

        adjustmentQuantity: -10,
        systemQuantityAfter: 190,

        adjustmentType: "DECREASE",
        reason: "Stock shortage from reconciliation",

        discrepancy: {
          type: "SHORTAGE",
          severity: "HIGH",
        },
      },
      {
        productId: "PRD-1002",
        name: "Coca Cola",
        sku: "CC-300",

        systemQuantityBefore: 300,
        physicalQuantity: 305,

        adjustmentQuantity: 5,
        systemQuantityAfter: 305,

        adjustmentType: "INCREASE",
        reason: "Stock overage from reconciliation",

        discrepancy: {
          type: "OVERAGE",
          severity: "LOW",
        },
      },
    ],

    summary: {
      totalAdjustedItems: 2,
      totalIncrease: 5,
      totalDecrease: 10,
      netAdjustment: -5,
    },

    approval: {
      required: true,
      approvedBy: "USR-2001",
      approvedAt: "2026-04-30T13:50:00Z",
    },

    financialImpact: {
      totalValueIncrease: 4000,
      totalValueDecrease: 12000,
      netValueImpact: -8000,
      currency: "NGN",
    },

    notes: "Adjustment after weekly stock reconciliation",

    createdBy: "USR-3001",
    createdAt: "2026-04-30T13:30:00Z",

    auditTrail: [
      {
        action: "CREATED",
        by: "USR-3001",
        timestamp: "2026-04-30T13:30:00Z",
      },
      {
        action: "APPROVED",
        by: "USR-2001",
        timestamp: "2026-04-30T13:50:00Z",
      },
      {
        action: "POSTED",
        by: "USR-3001",
        timestamp: "2026-04-30T14:00:00Z",
      },
    ],
  };
  async function apiPostAdjustment() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/stock_management/stock-adjustment`,
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

      console.log("Adjustment response:", response);
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
  const apiGetAdjustments = async () => {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_stocks/fetch_adjustments`,
      )
      .then((response) => {
        adjustmentsData = response.data.adjustmentsData;
        console.log("adjustmentsData: ", adjustmentsData);
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
  };

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
      case "adjustment":
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
  // COMPONENTS OF adjustment PAGE
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
                <th>Adjustment ID</th>
                <th>Reference ID</th>
                <th>Type</th>
                <th>Location</th>
                <th>Approved By</th>
                <th>Created Date</th>
                <th>Status</th>
                <th>Total Items</th>
                <th>Net Adjustment</th>
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
                    id={item?.adjustmentId}
                    className={`productsRowTd ${activeRow == index && "active_warehauseRow"}`}
                    onClick={() =>
                      accordion == index
                        ? setAccordion(null)
                        : setAccordion(index)
                    }
                  >
                    <span>
                      <strong>{item?.adjustmentId}</strong>
                    </span>
                    <span>{item?.reference?.referenceId}</span>
                    <span>{item?.adjustmentType}</span>
                    <span>{item?.location?.name}</span>
                    <span>{item?.approval?.approvedBy}</span>
                    <span>
                      {new Date(item?.status?.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </span>
                    <span>{item?.status?.current}</span>
                    <span>{item?.summary?.totalAdjustedItems}</span>
                    <span>{item?.summary?.netAdjustment}</span>
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
                          <span>Reference Type</span>
                          <p>
                            <strong>{item?.reference?.referenceType}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Posted At</span>
                          <p>
                            <strong>
                              {new Date(
                                item?.status?.postedAt,
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Total Increase</span>
                          <p>
                            <strong>{item?.summary?.totalIncrease}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Total Decrease</span>
                          <p>
                            <strong>{item?.summary?.totalDecrease}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Net Value Impact</span>
                          <p>
                            <strong>
                              {item?.financialImpact?.currency}{" "}
                              {item?.financialImpact?.netValueImpact?.toLocaleString()}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Approved At</span>
                          <p>
                            <strong>
                              {new Date(
                                item?.approval?.approvedAt,
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Notes</span>
                          <p>
                            <strong>{item?.notes}</strong>
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
                            <span>View Adjustment</span>
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
        <div className="adjustmentCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="adjustmentGridCard">
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
                  {adjustmentsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        adjustmentsData?.length,
                      )} of ${adjustmentsData?.length} entries`}
                </span>
              </span>
              <div className="adjustment_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="adjustment-page-limit">
                  <button
                    className="adjustment-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="adjustment-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="adjustment-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="adjustment-limit-item"
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
            <div className="adjustment_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="adjustment_pagination fx-ac space2">
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
                        className={`adjustment_jumpto ${
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
        <div className="adjustment_footer">
          <div className="flight-card clientDashboardCard fx-jb fx-ac space2">
            {/* LEFT: Airline */}
            <div className="adjustment-airline fx-cl space1">
              <div className="adjustment-airline-logo fx-ac fx-jc">✈️</div>
              <div className="fx-cl space3">
                <div className="adjustment-airline-name">
                  Inventory Summation
                </div>
                <span className="adjustment-refund-badge">soled stuff</span>
              </div>
            </div>

            {/* CENTER: Flight info */}
            <div className="adjustment-flight-info fx-ac space2">
              <div className="adjustment-time-block">
                <div className="adjustment-time">12:10</div>
                <div className="adjustment-location">
                  Moi Intl, Mombasa
                  <br />
                  Minna
                </div>
              </div>

              <div className="adjustment-flight-line fx-ac fx-jc space1">
                <FlightIcon className="adjustment-plane-icon" />
                <div className="adjustment-duration">3h 30min</div>
                <div className="adjustment-stop">Non Stop</div>
              </div>

              <div className="adjustment-time-block">
                <div className="adjustment-time">15:30</div>
                <div className="adjustment-location">
                  <PlaceIcon className="adjustment-place-icon" />
                  JFK Terminal, Nairobi,
                  <br />
                  Kenya
                </div>
              </div>
            </div>

            {/* RIGHT: Price */}
            <div className="adjustment-price-section">
              <span className="adjustment-cheapest">Cheapest</span>
              <div className="adjustment-price">$110</div>
              <div className="adjustment-class">Business Class</div>
              <button className="adjustment-book-btn">Book Now</button>
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
        <div className="adjustmentCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="adjustmentGridCard">
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
                  {adjustmentsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        adjustmentsData?.length,
                      )} of ${adjustmentsData?.length} entries`}
                </span>
              </span>
              <div className="adjustment_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="adjustment-page-limit">
                  <button
                    className="adjustment-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="adjustment-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="adjustment-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="adjustment-limit-item"
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
            <div className="adjustment_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="adjustment_pagination fx-ac space2">
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
                        className={`adjustment_jumpto ${
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
        <div className="adjustment_footer">Footer here</div>
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
          <button className="btnTemporary" onClick={() => apiPostAdjustment()}>
            Post Adjustment
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
        <div className="adjustmentCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="adjustmentGridCard">
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
                  {adjustmentsData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        adjustmentsData?.length,
                      )} of ${adjustmentsData?.length} entries`}
                </span>
              </span>
              <div className="adjustment_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="adjustment-page-limit">
                  <button
                    className="adjustment-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="adjustment-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="adjustment-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="adjustment-limit-item"
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
            <div className="adjustment_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="adjustment_pagination fx-ac space2">
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
                        className={`adjustment_jumpto ${
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
        <div className="adjustment_footer">Footer here</div>
      </div>
    );
  }

  useEffect(() => {
    apiGetAdjustments();
  }, []);
  return (
    <div className="adjustmentCompContainer">
      <div className="fx-cl space2">
        <div className="adjustment_breadcrumbs fx-ac">
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
        <div className="adjustment_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active_title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              Here is a list of adjustment you have made
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
        <div className="adjustment_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("adjustment")}
              className={`fx-ac  spacem ${
                currentTab == "adjustment" && "active"
              }`}
            >
              <span>Todo</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("completed")}
              className={`fx-ac  spacem ${
                currentTab == "completed" && "active"
              }`}
            >
              <span>Completed</span>
              <figure>{currentRows?.length || 0}</figure>
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
                className="adjustment_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setadjustmentFilterOpen(!adjustmentFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {adjustmentFilterOpen && (
                <div
                  className="adjustment_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setadjustmentFilterOpen(false)} // click outside → close
                >
                  <div
                    className="adjustment_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterAdjustment />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="adjustment_export_btn fx-ac spacem"
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
          <div className="adjustment_main">{switchActiveTab()}</div>
        )}
      </div>
    </div>
  );
}
