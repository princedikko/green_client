import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./reportsMain.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Action from "../../../../store/redux/client_reducer.js";
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import salesData from "../data";
import IsLoading from "../../../../IsLoading.jsx";
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
                        <h4>Sales-Based Reports</h4>
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
                        <h4>Customer Relationship Management</h4>
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
                        <h4>Services Report</h4>
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
                        <h4>Productions Report</h4>
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
                        <h4>Contact Report</h4>
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
                        <h4>Financial Inventory Reports</h4>
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

  console.log(
    "PRINTING:",
    useSelector((state) => state.clientFunction?.printData),
  );
  return (
    <div className="reportsmainCompContainer">
      <div className="fx-cl space2">
        <div className="reportsmain_breadcrumbs fx-ac">
          <Link className="fx-ac spacem">
            <strong>{breadcrumbs.active && breadcrumbs.active_title}</strong>{" "}
            <KeyboardArrowRightIcon fontSize="small" />{" "}
          </Link>
          <Link className="fx-ac spacem">
            <span>{currentTab && currentTab}</span>
          </Link>
        </div>
        <div className="reportsmain_main">{switchActiveTab()}</div>
      </div>
    </div>
  );
}
