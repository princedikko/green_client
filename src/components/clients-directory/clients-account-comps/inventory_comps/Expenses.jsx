import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./expenses.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
import { useSnackbar } from "notistack";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import IsLoading from "../../../../IsLoading.jsx";
import FilterDiscount from "./filters/FilterExpenses.jsx";
import ExportPDFButton from "./exports/ExpensesPDFExport.jsx";
import ExportExcelJSButton from "./exports/ExpensesExcelExport.jsx";
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
import ImgTwo from "./img2.jpg";

let expensesData;

export default function Expenses({ breadcrumbs }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [expensesFilterOpen, setexpensesFilterOpen] = useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(expensesData?.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = expensesData?.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab,
  );

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    expenseId: "EXP-2026-000321",
    expenseType: "OPERATING_EXPENSE",

    status: {
      current: "APPROVED",
      submittedAt: "2026-04-30T09:00:00Z",
      approvedAt: "2026-04-30T10:30:00Z",
    },

    category: "UTILITIES",

    items: [
      {
        name: "Electricity",
        amount: 45000,
        currency: "NGN",
        description: "Monthly electricity bill",
      },
      {
        name: "Internet",
        amount: 15000,
        currency: "NGN",
        description: "Office internet subscription",
      },
    ],

    payment: {
      totalAmount: 60000,
      currency: "NGN",
      paymentMethod: "BANK_TRANSFER",
      paid: true,
      paidAt: "2026-04-30T11:00:00Z",
      reference: "PAY-INV-88921",
    },

    vendor: {
      name: "IKEDC",
      type: "UTILITY_PROVIDER",
      contact: "support@ikedc.com",
    },

    location: {
      branchId: "BR-001",
      name: "Main Store - Lagos",
    },

    approvedBy: {
      userId: "USR-2001",
      name: "Finance Manager",
    },

    submittedBy: {
      userId: "USR-1001",
      name: "Account Officer",
    },

    receipt: {
      hasReceipt: true,
      receiptUrl: "https://cdn.example.com/expenses/exp-321.pdf",
    },

    schedule: {
      expenseDate: "2026-04-30",
      recurring: false,
      frequency: null,
    },

    impact: {
      affectsInventory: false,
      affectsProfit: true,
      affectsCashFlow: true,
    },

    notes: "Monthly operational expenses for store running",

    createdAt: "2026-04-30T09:00:00Z",

    auditTrail: [
      {
        action: "CREATED",
        by: "USR-1001",
        timestamp: "2026-04-30T09:00:00Z",
      },
      {
        action: "APPROVED",
        by: "USR-2001",
        timestamp: "2026-04-30T10:30:00Z",
      },
      {
        action: "PAID",
        by: "USR-1001",
        timestamp: "2026-04-30T11:00:00Z",
      },
    ],
  };

  async function apiPostExpense() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/expenses/post`,
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

      console.log("Expense response:", response);
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

  const apiGetExpense = async () => {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/expenses/get?start_date=2024-01-01&end_date=2024-12-31`,
      )
      .then((response) => {
        expensesData = response.data.expenseData;
        console.log("expensesData: ", expensesData);
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
      case "expenses":
        return <AllCategory />;
      case "expense_category":
        return <ExpensesList />;
      case "add-new":
        return <AddNewExpense />;
      default:
        return <AllCategory />;
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
  // COMPONENTS OF expenses PAGE
  // //////////////////////////////////////////////////////////////////////////

  function AllCategory() {
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
                <th>Expense ID</th>
                <th>Type</th>
                <th>Category</th>
                <th>Vendor</th>
                <th>Branch</th>
                <th>Total Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Paid</th>
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
                    id={item?.expenseId}
                    className={`productsRowTd ${activeRow == index && "active_warehauseRow"}`}
                    onClick={() =>
                      accordion == index
                        ? setAccordion(null)
                        : setAccordion(index)
                    }
                  >
                    <span>
                      <strong>{item?.expenseId}</strong>
                    </span>
                    <span>{item?.expenseType}</span>
                    <span>{item?.category}</span>
                    <span>{item?.vendor?.name}</span>
                    <span>{item?.location?.name}</span>
                    <span>
                      {item?.payment?.currency}{" "}
                      {item?.payment?.totalAmount?.toLocaleString()}
                    </span>
                    <span>{item?.payment?.paymentMethod}</span>
                    <span>{item?.status?.current}</span>
                    <span>{item?.payment?.paid ? "Yes" : "No"}</span>
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
                          <span>Vendor Contact</span>
                          <p>
                            <strong>{item?.vendor?.contact}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Submitted By</span>
                          <p>
                            <strong>{item?.submittedBy?.name}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Approved By</span>
                          <p>
                            <strong>{item?.approvedBy?.name}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Payment Reference</span>
                          <p>
                            <strong>{item?.payment?.reference}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Paid At</span>
                          <p>
                            <strong>
                              {new Date(
                                item?.payment?.paidAt,
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Expense Date</span>
                          <p>
                            <strong>{item?.schedule?.expenseDate}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Impact Profit</span>
                          <p>
                            <strong>
                              {item?.impact?.affectsProfit ? "Yes" : "No"}
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
                            <span>View Expense</span>
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
        <div className="expensesCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="expensesGridCard">
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
                  {expensesData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        expensesData?.length,
                      )} of ${expensesData?.length} entries`}
                </span>
              </span>
              <div className="expenses_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="expenses-page-limit">
                  <button
                    className="expenses-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="expenses-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="expenses-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="expenses-limit-item"
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
            <div className="expenses_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="expenses_pagination fx-ac space2">
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
                        className={`expenses_jumpto ${
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
        <div className="expenses_footer">
          <div className="flight-card clientDashboardCard fx-jb fx-ac space2">
            {/* LEFT: Airline */}
            <div className="expenses-airline fx-cl space1">
              <div className="expenses-airline-logo fx-ac fx-jc">✈️</div>
              <div className="fx-cl space3">
                <div className="expenses-airline-name">Inventory Summation</div>
                <span className="expenses-refund-badge">soled stuff</span>
              </div>
            </div>

            {/* CENTER: Flight info */}
            <div className="expenses-flight-info fx-ac space2">
              <div className="expenses-time-block">
                <div className="expenses-time">12:10</div>
                <div className="expenses-location">
                  Moi Intl, Mombasa
                  <br />
                  Minna
                </div>
              </div>

              <div className="expenses-flight-line fx-ac fx-jc space1">
                <FlightIcon className="expenses-plane-icon" />
                <div className="expenses-duration">3h 30min</div>
                <div className="expenses-stop">Non Stop</div>
              </div>

              <div className="expenses-time-block">
                <div className="expenses-time">15:30</div>
                <div className="expenses-location">
                  <PlaceIcon className="expenses-place-icon" />
                  JFK Terminal, Nairobi,
                  <br />
                  Kenya
                </div>
              </div>
            </div>

            {/* RIGHT: Price */}
            <div className="expenses-price-section">
              <span className="expenses-cheapest">Cheapest</span>
              <div className="expenses-price">$110</div>
              <div className="expenses-class">Business Class</div>
              <button className="expenses-book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function ExpensesList() {
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
                    <strong>{item.sku}</strong>
                  </td>
                  <td>{item.barcode}</td>
                  <td>{item.paymentStatus}</td>
                  <td>test alpha</td>
                  <td>₦{item.totalPaid?.toLocaleString()}</td>
                  <td>{item.brand}</td>
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
        <div className="expensesCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="expensesGridCard">
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
                  {expensesData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        expensesData?.length,
                      )} of ${expensesData?.length} entries`}
                </span>
              </span>
              <div className="expenses_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="expenses-page-limit">
                  <button
                    className="expenses-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="expenses-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="expenses-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="expenses-limit-item"
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
            <div className="expenses_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="expenses_pagination fx-ac space2">
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
                        className={`expenses_jumpto ${
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
        <div className="expenses_footer">Footer here</div>
      </div>
    );
  }
  function AddNewExpense() {
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
          <button className="btnTemporary" onClick={() => apiPostExpense()}>
            Post Expense
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
        <div className="expensesCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="expensesGridCard">
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
                  {expensesData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        expensesData?.length,
                      )} of ${expensesData?.length} entries`}
                </span>
              </span>
              <div className="expenses_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="expenses-page-limit">
                  <button
                    className="expenses-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="expenses-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="expenses-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="expenses-limit-item"
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
            <div className="expenses_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="expenses_pagination fx-ac space2">
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
                        className={`expenses_jumpto ${
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
        <div className="expenses_footer">Footer here</div>
      </div>
    );
  }

  useEffect(() => {
    apiGetExpense();
  }, []);

  return (
    <div className="expensesCompContainer">
      <div className="fx-cl space2">
        <div className="expenses_breadcrumbs fx-ac">
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
        <div className="expenses_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active_title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              Expenses are costs the business pays to operate, not inventory
              purchases. Examples: <br />| Expense | Example | | Electricity |
              ₦45,000 | | Staff salary | ₦250,000 | | Internet | ₦15,000 | |
              Fuel | ₦30,000 | | Shop rent | ₦500,000 |
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
        <div className="expenses_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("expenses")}
              className={`fx-ac  spacem ${
                currentTab == "expenses" && "active"
              }`}
            >
              <span>Categories</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("expense_category")}
              className={`fx-ac  spacem ${
                currentTab == "expense_category" && "active"
              }`}
            >
              <span>Expenses</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("add-new")}
              className={`fx-ac  spacem ${currentTab == "add-new" && "active"}`}
            >
              <span>Add new</span>
              <figure>89</figure>
            </li>
          </ul>
          <div className="right fx-ac fx-jb space1">
            <div className="fx-ac space1">
              <button
                className="expenses_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setexpensesFilterOpen(!expensesFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {expensesFilterOpen && (
                <div
                  className="expenses_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setexpensesFilterOpen(false)} // click outside → close
                >
                  <div
                    className="expenses_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterDiscount />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="expenses_export_btn fx-ac spacem"
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
          <div className="expenses_main">{switchActiveTab()}</div>
        )}
      </div>
    </div>
  );
}
