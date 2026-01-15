import React from "react";
import "./test.css";

const PrintPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-wrapper">
      {/* PRINT BUTTON (will not appear on print) */}
      <div className="no-print">
        <button onClick={handlePrint}>Print Page</button>
      </div>

      {/* PRINT CONTENT */}
      <div className="print-area">
        <h1>Sales Invoice</h1>

        <p>
          <strong>Customer:</strong> John Doe
        </p>
        <p>
          <strong>Invoice No:</strong> INV-001
        </p>
        <p>
          <strong>Date:</strong> 15 Jan 2026
        </p>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rice</td>
              <td>2</td>
              <td>₦5,000</td>
              <td>₦10,000</td>
            </tr>
            <tr>
              <td>Beans</td>
              <td>1</td>
              <td>₦3,000</td>
              <td>₦3,000</td>
            </tr>
          </tbody>
        </table>

        <h3>Total Amount: ₦13,000</h3>

        <p className="footer">Thank you for your business</p>
      </div>
    </div>
  );
};

export default PrintPage;
