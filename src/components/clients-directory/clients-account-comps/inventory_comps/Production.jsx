import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./production.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
import { useSnackbar } from "notistack";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import IsLoading from "../../../../IsLoading.jsx";
import FilterProduction from "./filters/FilterProduction.jsx";
import ExportPDFButton from "./exports/ProductionPDFExport.jsx";
import ExportExcelJSButton from "./exports/ProductionExcelExport.jsx";
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

let productionData;

export default function Production({ breadcrumbs }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeview, setChangeView] = useState("");
  const [productionFilterOpen, setproductionFilterOpen] = useState(false);

  // Paginations Functions
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openLimit, setOpenLimit] = useState(false);
  const totalPages = Math.ceil(productionData?.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentRows = productionData?.slice(start, end);

  const currentTab = useSelector(
    (state) => state.clientFunction?.dashboard?.currentTab,
  );

  // /////////////////////////////////////////////////////////
  // Cross Origin Resource Sharing CRUD - Functions
  // /////////////////////////////////////////////////////////

  const payload = {
    productionId: "PROD-2026-000011",
    productionType: "MANUFACTURING",

    status: {
      current: "IN_PROGRESS",
      startedAt: "2026-04-30T06:00:00Z",
      completedAt: null,
    },

    product: {
      productId: "MILK-PEAK-001",
      name: "Peak Milk 170g",
      sku: "MILK-PEAK-001",
      batchNo: "PM-APR-2026-A",
    },

    billOfMaterials: [
      {
        ingredientId: "RAW-FLOUR-001",
        name: "Flour",
        requiredQuantity: 5,
        unit: "kg",
        costPerUnit: 300,
        totalCost: 1500,
      },
      {
        ingredientId: "RAW-SUGAR-001",
        name: "Sugar",
        requiredQuantity: 1,
        unit: "kg",
        costPerUnit: 500,
        totalCost: 500,
      },
      {
        ingredientId: "RAW-YEAST-001",
        name: "Yeast",
        requiredQuantity: 0.2,
        unit: "kg",
        costPerUnit: 2000,
        totalCost: 400,
      },
    ],

    output: {
      plannedQuantity: 100,
      completedQuantity: 0,
      unit: "tin",
    },

    wastage: {
      expectedWaste: 2,
      actualWaste: 0,
      unit: "kg",
    },

    costing: {
      totalMaterialCost: 2400,
      laborCost: 1000,
      overheadCost: 600,
      totalProductionCost: 4000,
      costPerUnit: 40,
    },

    warehouse: {
      productionLocationId: "LOC-PROD-01",
      outputWarehouseId: "sdr3-1234-sdfg-5678",
    },

    inventoryImpact: {
      rawMaterialsConsumed: true,
      finishedGoodsAdded: false,
    },

    qualityControl: {
      checked: false,
      passed: null,
      notes: "",
    },

    schedule: {
      plannedStart: "2026-04-30T06:00:00Z",
      plannedEnd: "2026-04-30T14:00:00Z",
    },

    createdBy: "userId",
    approvedBy: null,

    notes: "Morning production batch",

    auditTrail: [
      {
        action: "CREATED",
        by: "userId",
        timestamp: "2026-04-30T05:50:00Z",
      },
      {
        action: "STARTED",
        by: "userId",
        timestamp: "2026-04-30T06:00:00Z",
      },
    ],
  };

  async function apiPostProduction() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/account/production/post`,
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

      console.log("Production response:", response);
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

  async function apiFetchProductions() {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/:id/account/production/get?page=${currentPage}&limit=${rowsPerPage}`,
      )
      .then((response) => {
        productionData = response.data.productionData;
        console.log("productionData: ", response);
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
      case "production":
        return <Productions />;
      case "completed":
        return <Completed />;
      case "progress":
        return <Progress />;
      default:
        return <Productions />;
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
  // COMPONENTS OF production PAGE
  // //////////////////////////////////////////////////////////////////////////

  function Productions() {
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
                <th>Production ID</th>
                <th>Product</th>
                <th>SKU</th>
                <th>Type</th>
                <th>Planned Qty</th>
                <th>Completed Qty</th>
                <th>Cost Per Unit</th>
                <th>Total Cost</th>
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
                    id={item?.productionId}
                    className={`productsRowTd ${activeRow == index && "active_warehauseRow"}`}
                    onClick={() =>
                      accordion == index
                        ? setAccordion(null)
                        : setAccordion(index)
                    }
                  >
                    <span>
                      <strong>{item?.productionId}</strong>
                    </span>
                    <span>{item?.product?.name}</span>
                    <span>{item?.product?.sku}</span>
                    <span>{item?.productionType}</span>
                    <span>{item?.output?.plannedQuantity}</span>
                    <span>{item?.output?.actualQuantity}</span>
                    <span>₦{item?.costing?.costPerUnit?.toLocaleString()}</span>
                    <span>
                      ₦{item?.costing?.totalProductionCost?.toLocaleString()}
                    </span>
                    <span>{item?.status?.current}</span>
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
                          <span>Batch No</span>
                          <p>
                            <strong>{item?.product?.batchNo}</strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Started At</span>
                          <p>
                            <strong>
                              {new Date(
                                item?.status?.startedAt,
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Planned End</span>
                          <p>
                            <strong>
                              {new Date(
                                item?.schedule?.plannedEnd,
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Labor Cost</span>
                          <p>
                            <strong>
                              ₦{item?.costing?.laborCost?.toLocaleString()}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Overhead Cost</span>
                          <p>
                            <strong>
                              ₦{item?.costing?.overheadCost?.toLocaleString()}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Total Material Cost</span>
                          <p>
                            <strong>
                              ₦
                              {item?.costing?.totalMaterialCost?.toLocaleString()}
                            </strong>
                          </p>
                        </div>

                        <div className="fx-cl spacem">
                          <span>Warehouse</span>
                          <p>
                            <strong>
                              {item?.warehouse?.productionLocationId}
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
                          <span>Created By</span>
                          <p>
                            <strong>{item?.createdBy}</strong>
                          </p>
                        </div>

                        <div className="fx-ac space1">
                          <button className="controlButtons">
                            <span>View Production</span>
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
        <div className="productionCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="productionGridCard">
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
                  {productionData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        productionData?.length,
                      )} of ${productionData?.length} entries`}
                </span>
              </span>
              <div className="production_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="production-page-limit">
                  <button
                    className="production-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="production-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="production-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="production-limit-item"
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
            <div className="production_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="production_pagination fx-ac space2">
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
                        className={`production_jumpto ${
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
        <div className="production_footer">
          <div className="flight-card clientDashboardCard fx-jb fx-ac space2">
            {/* LEFT: Airline */}
            <div className="production-airline fx-cl space1">
              <div className="production-airline-logo fx-ac fx-jc">✈️</div>
              <div className="fx-cl space3">
                <div className="production-airline-name">
                  Inventory Summation
                </div>
                <span className="production-refund-badge">soled stuff</span>
              </div>
            </div>

            {/* CENTER: Flight info */}
            <div className="production-flight-info fx-ac space2">
              <div className="production-time-block">
                <div className="production-time">12:10</div>
                <div className="production-location">
                  Moi Intl, Mombasa
                  <br />
                  Minna
                </div>
              </div>

              <div className="production-flight-line fx-ac fx-jc space1">
                <FlightIcon className="production-plane-icon" />
                <div className="production-duration">3h 30min</div>
                <div className="production-stop">Non Stop</div>
              </div>

              <div className="production-time-block">
                <div className="production-time">15:30</div>
                <div className="production-location">
                  <PlaceIcon className="production-place-icon" />
                  JFK Terminal, Nairobi,
                  <br />
                  Kenya
                </div>
              </div>
            </div>

            {/* RIGHT: Price */}
            <div className="production-price-section">
              <span className="production-cheapest">Cheapest</span>
              <div className="production-price">$110</div>
              <div className="production-class">Business Class</div>
              <button className="production-book-btn">Book Now</button>
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
        <div className="productionCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="productionGridCard">
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
                  {productionData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        productionData?.length,
                      )} of ${productionData?.length} entries`}
                </span>
              </span>
              <div className="production_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="production-page-limit">
                  <button
                    className="production-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="production-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="production-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="production-limit-item"
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
            <div className="production_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="production_pagination fx-ac space2">
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
                        className={`production_jumpto ${
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
        <div className="production_footer">Footer here</div>
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
        <div className="productionCardGrid g g4 space2">
          {currentRows?.map((item) => (
            <div key={item.invoiceNo} className="productionGridCard">
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
                  {productionData?.length === 0
                    ? "0 to 0 of 0 entries"
                    : `${start + 1} to ${Math.min(
                        end,
                        productionData?.length,
                      )} of ${productionData?.length} entries`}
                </span>
              </span>
              <div className="production_entries-info fx-ac spacem">
                <h4>Rows</h4>
                <div className="production-page-limit">
                  <button
                    className="production-page-limit-btn"
                    onClick={() => setOpenLimit(!openLimit)}
                  >
                    {rowsPerPage} / page
                    <span className="production-page-limit-arrow">▾</span>
                  </button>

                  {openLimit && (
                    <ul className="production-limit-dropdown">
                      {[10, 20, 50, 100, 200, 500, 1000].map((n) => (
                        <li
                          key={n}
                          className="production-limit-item"
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
            <div className="production_row" id="printable">
              {switchView()}
            </div>
            <div className="fx-jc">
              <div className="production_pagination fx-ac space2">
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
                        className={`production_jumpto ${
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
        <div className="production_footer">Footer here</div>
      </div>
    );
  }
  useEffect(() => {
    apiFetchProductions();
  }, []);
  return (
    <div className="productionCompContainer">
      <div className="fx-cl space2">
        <div className="production_breadcrumbs fx-ac">
          <Link className="fx-ac spacem">
            <strong>{breadcrumbs.active && breadcrumbs.active_title}</strong>{" "}
            <KeyboardArrowRightIcon fontSize="small" />{" "}
          </Link>
          <Link className="fx-ac spacem">
            <span>{currentTab && currentTab}</span>
          </Link>
        </div>
        <div className="production_headings fx-jb space4">
          <div className="fx-cl">
            <h2 style={{ textTransform: "capitalize" }}>
              {breadcrumbs.active_title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              The Production module is used when a business manufactures or
              creates products. Instead of buying products, the business
              produces them using raw materials. <br />
              Example business: bakery factory food processing beverage company
              <br />
              Example: Bakery To produce bread:
              <br />| Ingredient | Quantity | | Flour | 5 kg | | Sugar | 1 kg |
              | Yeast | 0.2 kg |
              {/* {
  productProduced: "Bread",
  quantityProduced: 100,
  materialsUsed: [
    { material: "Flour", quantity: 5 },
    { material: "Sugar", quantity: 1 },
    { material: "Yeast", quantity: 0.2 }
  ],
  productionDate: ISODate()
} */}
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
        <div className="production_actionBar fx-jb space4">
          <ul className="left fx-ac">
            <li
              onClick={() => handleCurrentTAB("production")}
              className={`fx-ac  spacem ${
                currentTab == "production" && "active"
              }`}
            >
              <span>Production</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("completed")}
              className={`fx-ac  spacem ${
                currentTab == "completed" && "active"
              }`}
            >
              <span>Recipe</span>
              <figure>{currentRows?.length || 0}</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("progress")}
              className={`fx-ac  spacem ${
                currentTab == "progress" && "active"
              }`}
            >
              <span>Reports</span>
              <figure>89</figure>
            </li>
            <li
              onClick={() => handleCurrentTAB("setting")}
              className={`fx-ac  spacem ${currentTab == "setting" && "active"}`}
            >
              <span>Setting</span>
              <figure>*</figure>
            </li>
          </ul>
          <div className="right fx-ac fx-jb space1">
            <div className="fx-ac space1">
              <button
                className="production_export_btn fx-ac spacem"
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling to document
                  setproductionFilterOpen(!productionFilterOpen);
                }}
              >
                <CandlestickChartIcon fontSize="large" />
                <span>Filter & Sort</span>
              </button>
              {productionFilterOpen && (
                <div
                  className="production_filter_modal_overlay fx-jc fx-ac"
                  onClick={() => setproductionFilterOpen(false)} // click outside → close
                >
                  <div
                    className="production_filter_modal"
                    onClick={(e) => e.stopPropagation()} // click inside → stay open
                  >
                    <FilterProduction />
                  </div>
                </div>
              )}
            </div>
            <div className="fx-ac space1">
              <button
                className="production_export_btn fx-ac spacem"
                onClick={() => apiPostProduction()}
              >
                <AddIcon fontSize="large" /> <span>Add new</span>
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <IsLoading />
        ) : (
          <div className="production_main">{switchActiveTab()}</div>
        )}
      </div>
    </div>
  );
}
