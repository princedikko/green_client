import { useEffect, useReducer, useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./services.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import salesData from "../data";
import IsLoading from "../../../../IsLoading.jsx";
import FilterServices from "./filters/FilterServices.jsx";
import ExportPDFButton from "./exports/ServicesPDFExport.jsx";
import ExportExcelJSButton from "./exports/ServicesExcelExport.jsx";
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
import CreateProductServices from "./create/CreateProductServices.jsx";

let servicesData;
export default function Services({ breadcrumbs }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [productservicesFilterOpen, setproductservicesFilterOpen] =
    useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(servicesData?.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = servicesData?.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab,
  );

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  async function apiGetServices() {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_stocks/fetch_services`,
      );
      servicesData = response?.data.productsServicesData;
      console.log(servicesData);
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
      case "productservices":
        return <Services />;
      case "completed":
        return <Completed />;
      case "add-record":
        return <CreateProductServices />;
      default:
        return <Services />;
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
  // COMPONENTS OF productservices PAGE
  // //////////////////////////////////////////////////////////////////////////

  function Services() {
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
                <th>Service Name</th>
                <th>Category</th>
                <th>Department</th>
                <th>Rate</th>
                <th>Currency</th>
                <th>Taxable</th>
                <th>Difficulty</th>
                <th>Assigned Team</th>
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
                    <span>{item?.category?.type}</span>
                    <span>{item?.category?.department}</span>
                    <span>₦{item?.pricing?.rate?.toLocaleString()}</span>
                    <span>{item?.pricing?.currency}</span>
                    <span>{item?.pricing?.taxable ? "Yes" : "No"}</span>
                    <span>{item?.workDetails?.difficultyLevel}</span>
                    <span>{item?.staffing?.assignedTeam}</span>
                    <span>
                      {item?.status?.isActive ? "Active" : "Inactive"}
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
                          <span>Service Code</span>
                          <p>
                            <strong>{item?.serviceCode}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Sub Category</span>
                          <p>
                            <strong>{item?.category?.subType}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Duration</span>
                          <p>
                            <strong>
                              {item?.workDetails?.estimatedDurationMinutes} mins
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Skills Required</span>
                          <p>
                            <strong>
                              {item?.workDetails?.requiredSkills?.join(", ")}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Tools Required</span>
                          <p>
                            <strong>
                              {item?.workDetails?.toolsRequired?.join(", ")}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Performance Rating</span>
                          <p>
                            <strong>{item?.performance?.averageRating}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Completion Rate</span>
                          <p>
                            <strong>
                              {item?.performance?.completionRate}%
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Created At</span>
                          <p>
                            <strong>
                              {new Date(
                                item?.audit?.createdAt,
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-ac space1">
                          <button className="controlButtons">
                            <span>View Service</span>
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
        <div className="productservicesCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item?.invoiceNo} className="productservicesGridCard">
              {/* Header */}
              <div className="cardHeader">
                <img alt="customer" className="avatar" src={ImgOne} />

                <div className="cardInfo">
                  <h4>{item?.customerName}</h4>
                  <p>Invoice #{item?.invoiceNo}</p>

                  <div className="ratingRow">
                    <span className="rating">
                      ⭐ {item?.paymentStatus === "Paid" ? "5.0" : "4.0"}
                    </span>
                    <span className="location">📍 {item?.date}</span>
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
                  ₦{item?.totalAmount?.toLocaleString()}
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
                  {servicesData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        servicesData?.length,
                      )} of ${servicesData?.length} entries`}
                </span>
              </span>
              <div className="productservices_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="productservices-page-limit">
                  <button
                    className="productservices-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="productservices-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="productservices-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="productservices-limit-item"
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
            <div className="productservices_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              {currentRows && (
                <div className="productservices_pagination fx-ac space2">
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
                          className={`productservices_jumpto ${
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
              )}
            </div>
          </div>
        </div>
        <div className="productservices_footer">
          <div className="flight-card clientDashboardCard fx-jb fx-ac space2">
            {/* LEFT: Airline */}
            <div className="productservices-airline fx-cl space1">
              <div className="productservices-airline-logo fx-ac fx-jc">✈️</div>
              <div className="fx-cl space3">
                <div className="productservices-airline-name">
                  Inventory Summation
                </div>
                <span className="productservices-refund-badge">
                  soled stuff
                </span>
              </div>
            </div>

            {/* CENTER: Flight info */}
            <div className="productservices-flight-info fx-ac space2">
              <div className="productservices-time-block">
                <div className="productservices-time">12:10</div>
                <div className="productservices-location">
                  Moi Intl, Mombasa
                  <br />
                  Minna
                </div>
              </div>

              <div className="productservices-flight-line fx-ac fx-jc space1">
                <FlightIcon className="productservices-plane-icon" />
                <div className="productservices-duration">3h 30min</div>
                <div className="productservices-stop">Non Stop</div>
              </div>

              <div className="productservices-time-block">
                <div className="productservices-time">15:30</div>
                <div className="productservices-location">
                  <PlaceIcon className="productservices-place-icon" />
                  JFK Terminal, Nairobi,
                  <br />
                  Kenya
                </div>
              </div>
            </div>

            {/* RIGHT: Price */}
            <div className="productservices-price-section">
              <span className="productservices-cheapest">Cheapest</span>
              <div className="productservices-price">$110</div>
              <div className="productservices-class">Business Class</div>
              <button className="productservices-book-btn">Book Now</button>
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
                <tr key={item?.invoiceNo}>
                  {/* <td>{index + 1}</td> */}
                  <td>
                    <strong>{item?.customerName}</strong>
                  </td>
                  <td>{item?.invoiceNo}</td>
                  <td>{item?.paymentStatus}</td>
                  <td>₦{item?.totalAmount?.toLocaleString()}</td>
                  <td>₦{item?.totalPaid?.toLocaleString()}</td>
                  <td>{item?.totalItems}</td>
                  <td>₦{item?.sellDue?.toLocaleString()}</td>
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
        <div className="productservicesCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item?.invoiceNo} className="productservicesGridCard">
              {/* Header */}
              <div className="cardHeader">
                <img alt="customer" className="avatar" src={ImgOne} />

                <div className="cardInfo">
                  <h4>{item?.customerName}</h4>
                  <p>Invoice #{item?.invoiceNo}</p>

                  <div className="ratingRow">
                    <span className="rating">
                      ⭐ {item?.paymentStatus === "Paid" ? "5.0" : "4.0"}
                    </span>
                    <span className="location">📍 {item?.date}</span>
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
                  ₦{item?.totalAmount?.toLocaleString()}
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
                  {servicesData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        servicesData?.length,
                      )} of ${servicesData?.length} entries`}
                </span>
              </span>
              <div className="productservices_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="productservices-page-limit">
                  <button
                    className="productservices-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="productservices-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="productservices-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="productservices-limit-item"
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
            <div className="productservices_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="productservices_pagination fx-ac space2">
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
                        className={`productservices_jumpto ${
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
        <div className="productservices_footer">Footer here</div>
      </div>
    );
  }

  useEffect(() => {
    apiGetServices();
  }, []);

  return (
    <div className="productservicesCompContainer">
      <div className="fx-cl space2">
        <div className="productservices_breadcrumbs fx-ac">
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
        <div className="productservices_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active_title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              This module stores services of the product and entire inventory.
              services includes any work done for the business that doesn't
              involve selling a physical product. It encompasses tasks, labor,
              fatique, and other non-tangible offerings that contribute to the
              overall operations and success of the business.
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
        <div className="productservices_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("productservices")}
              className={`fx-ac  spacem ${
                currentTab == "productservices" && "active"
              }`}
            >
              <span>All Services</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("completed")}
              className={`fx-ac  spacem ${
                currentTab == "completed" && "active"
              }`}
            >
              <span>Most Recent</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("add-record")}
              className={`fx-ac  spacem ${
                currentTab == "add-record" && "active"
              }`}
            >
              <span>New Record</span>
              <figure>+</figure>
            </li>
          </ul>
          <div className="right fx-ac fx-jb space1">
            <div className="fx-ac space1">
              <button
                className="productservices_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setproductservicesFilterOpen(!productservicesFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {productservicesFilterOpen && (
                <div
                  className="productservices_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setproductservicesFilterOpen(false)} // click outside → close
                >
                  <div
                    className="productservices_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterServices />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="productservices_export_btn fx-ac spacem"
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
          <div className="productservices_main">{switchActiveTab()}</div>
        )}
      </div>
    </div>
  );
}
