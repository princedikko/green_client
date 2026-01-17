import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";

const ExportExcelJSButton = ({ currentRows }) => {
  const exportToExcel = async () => {
    // 1. Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Recieves Table");

    // 2. Define columns
    worksheet.columns = [
      { header: "Customer Name", key: "customerName", width: 25 },
      { header: "Invoice No.", key: "invoiceNo", width: 15 },
      { header: "Quantity", key: "quantity", width: 15 },
      { header: "Total Amount", key: "totalAmount", width: 20 },
      { header: "Total Paid", key: "totalPaid", width: 20 },
      { header: "Sell Due", key: "sellDue", width: 20 },
      { header: "Date", key: "date", width: 15 },
      { header: "Payment Status", key: "paymentStatus", width: 15 },
    ];

    // 3. Add rows
    currentRows.forEach((item) => {
      worksheet.addRow({
        customerName: item.customerName,
        invoiceNo: item.invoiceNo,
        quantity: item.quantity,
        totalAmount: "₦" + item.totalAmount,
        totalPaid: "₦" + item.totalPaid,
        sellDue: "₦" + item.sellDue,
        date: item.date,
        paymentStatus: item.paymentStatus,
      });
    });

    // 4. Style header
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF007BFF" }, // Blue background
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // 5. Style data cells (optional)
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) {
        // skip header
        row.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
      }
    });

    // 6. Export
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, "Recieves List.xlsx");
  };

  return (
    <button
      className="recieves_export_btn fx-ac spacem"
      onClick={exportToExcel}
      style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
    >
      <MultipleStopIcon
        fontSize="large"
        style={{ transform: "rotate(90deg)" }}
      />
      <span>Export Excel</span>
    </button>
  );
};

export default ExportExcelJSButton;
