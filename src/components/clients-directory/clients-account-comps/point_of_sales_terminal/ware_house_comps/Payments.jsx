import { useState, useRef } from "react";
import "./payments.css"; // Import the CSS file
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import axios from "axios";
import Logo from "../test.png";

export default function Payments() {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <div className="fx-cl space3">
      <div className="invoice flex-container">
        {/* First Container */}
        <div className="invoice-first-container">
          <div className="invoice-left-side fx-ac space2">
            <figure className="invoiceLogo">
              <img src={Logo} alt="logo" />
            </figure>
            <div className="fx-cl space1">
              <h1>Payments</h1>

              <p>Register: Fahad Abdulkarim</p>
            </div>
          </div>
          <div className="invoice-right-side fx-cl space1">
            <p>Juwairiyyah M. Najeeb Pharmachy - Abuja</p>
            <p>No. 2 Abuja-Lagos Road, Area-One Area</p>
            <p>Maitama LGA, FCT</p>
          </div>
        </div>

        {/* Second Container */}
        <div className="invoice-second-container fx-jb space3">
          <div className="invoice-inner-div">
            <div className=" fx-cl space1">
              <h3>Sales Details</h3>
              <div className="fx-cl">
                <p>
                  <strong>Register Reference ID:</strong>566gf5657uu7676
                </p>
                <p>
                  <strong>Items sold:</strong>569
                </p>
                <p>
                  <strong>Debts:</strong> 4
                </p>
                <p>
                  <strong>Session:</strong>Fri: 06:32am - 05:40pm
                </p>
                <p>
                  <strong>Total payments:</strong> 537
                </p>
              </div>
            </div>
          </div>
          <div className="invoice-inner-div">
            <div className=" fx-cl space1">
              <h3>User info:</h3>
              <div className="fx-cl">
                <p>
                  <strong>Name: </strong>
                  My Ju
                </p>
                <p>
                  <strong>Staff ID:</strong> MJ/PHCY/12/98
                </p>
                <p>
                  <strong>Hours:</strong> 2,450.55hours
                </p>

                <p>
                  <strong>Location:</strong> Abuja Best Pharmacy
                </p>
                <p>
                  <strong>Username:</strong>ju@green
                </p>
                <p>
                  <strong>Phone No.:</strong> +234 3434 354 356
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Container */}
        <div className="invoice-third-container fx-cl space3">
          <div className="fx-cl">
            <h3>Payment details</h3>
            <p>Student registration fees</p>
          </div>
          <table className="invoiceTable">
            <thead style={{ textAlign: "left" }}>
              <tr>
                <th>Serial No.</th>
                <th>Items</th>
                <th>Discription</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <h2>Earning</h2>

              <tr>
                <td>02</td>
                <td>Maintenance</td>
                <td>Reg fee</td>
                <td>N20,000</td>
              </tr>

              <tr>
                <td>04</td>
                <td>ICT</td>
                <td>Reg fee</td>
                <td>N10,000</td>
              </tr>

              <tr>
                <td>07</td>
                <td>Laboratory</td>
                <td>Reg fee</td>
                <td>N20,000</td>
              </tr>
              <br />
              <h2>Portal access fees</h2>
              <tr>
                <td>01</td>
                <td>Portal Access Fee</td>
                <td>Reg fee</td>
                <td>N10,000</td>
              </tr>
              <tr>
                <td>02</td>
                <td>UP Charges</td>
                <td>Reg fee</td>
                <td>N0.00</td>
              </tr>
              <br />

              <h2>Tuition fees</h2>
              <tr>
                <td>01</td>
                <td>Library</td>
                <td>Reg fee</td>
                <td>N20,000</td>
              </tr>
              <tr>
                <td>02</td>
                <td>Examination</td>
                <td>Reg fee</td>
                <td>N20,000</td>
              </tr>

              <tr>
                <td>03</td>
                <td>Accreditation</td>
                <td>Reg fee</td>
                <td>N150,000</td>
              </tr>
              <tr>
                <td></td>
                <td>TOTAL</td>
                <td>-</td>
                <td>N250,000</td>
              </tr>
            </tbody>
          </table>

          <ul style={{ listStyle: "disc" }}>
            <em>Distribution:</em>
            <li>Head of Department</li>
            <li>Registrar</li>
            <li>Student's Copy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
