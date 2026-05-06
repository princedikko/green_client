import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function InsertRecieve() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [recievedPayloads, setrecievedPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      clientId: "JLIM=0001",
      receiveId: "RCV-00021",
      purchaseOrderId: "PO-00981",

      supplierSupplierId: "SUP-0023",
      supplierName: "ABC Supplies Ltd",

      warehouseWarehouseId: "WH-01",
      warehouseName: "Main Warehouse",

      receivedByUserId: "USR-1001",
      receivedByName: "Joolie ",

      receiveDate: "2026-04-29T10:30:00Z",

      status: "PARTIAL",

      itemsProductId_1: "PRD-001",
      itemsName_1: "Laptop HP EliteBook",
      itemsOrderedQty_1: 50,
      itemsReceivedQty_1: 30,
      itemsRejectedQty_1: 2,
      itemsUnitCost_1: 1200,
      itemsTotalCost_1: 36000,
      itemsBatchNumber_1: "BCH-7781",
      itemsExpiryDate_1: null,
      itemsSerialNumbers_1: ["SN001", "SN002", "SN003"],
      itemsLocation_1: "Aisle-3 / Shelf-B",
      itemsCondition_1: "GOOD",
      itemsRemarks_1: "Partial delivery received",

      itemsProductId_2: "PRD-002",
      itemsName_2: "Wireless Mouse",
      itemsOrderedQty_2: 100,
      itemsReceivedQty_2: 100,
      itemsRejectedQty_2: 0,
      itemsUnitCost_2: 15,
      itemsTotalCost_2: 1500,
      itemsBatchNumber_2: "BCH-8890",
      itemsExpiryDate_2: null,
      itemsSerialNumbers_2: [],
      itemsLocation_2: "Aisle-1 / Shelf-A",
      itemsCondition_2: "GOOD",
      itemsRemarks_2: "Fully received",

      inspectionCheckedBy: "USR-2002",
      inspectionCondition: "GOOD",
      inspectionNotes:
        "Items inspected and accepted with minor partial shortage",

      totalsTotalItems: 2,
      totalsTotalOrderedQty: 150,
      totalsTotalReceivedQty: 130,
      totalsTotalRejectedQty: 2,
      totalsTotalCost: 37500,

      attachments: ["invoice_001.pdf", "delivery_note_001.jpg"],

      isClosed: false,
      createdAt: "2026-04-29T10:35:00Z",
      updatedAt: "2026-04-29T10:40:00Z",
    },
  );

  const payload = {
    clientId: recievedPayloads.clientId,
    receiveId: recievedPayloads.receiveId,
    purchaseOrderId: recievedPayloads.purchaseOrderId,

    supplier: {
      supplierId: recievedPayloads.supplierSupplierId,
      name: recievedPayloads.supplierName,
    },

    warehouse: {
      warehouseId: recievedPayloads.warehouseWarehouseId,
      name: recievedPayloads.warehouseName,
    },

    receivedBy: {
      userId: recievedPayloads.receivedByUserId,
      name: recievedPayloads.receivedByName,
    },

    receiveDate: recievedPayloads.receiveDate,

    status: recievedPayloads.status,

    items: [
      {
        productId: recievedPayloads.itemsProductId_1,
        name: recievedPayloads.itemsName_1,

        orderedQty: recievedPayloads.itemsOrderedQty_1,
        receivedQty: recievedPayloads.itemsReceivedQty_1,
        rejectedQty: recievedPayloads.itemsRejectedQty_1,

        unitCost: recievedPayloads.itemsUnitCost_1,
        totalCost: recievedPayloads.itemsTotalCost_1,

        batchNumber: recievedPayloads.itemsBatchNumber_1,
        expiryDate: recievedPayloads.itemsExpiryDate_1,
        serialNumbers: recievedPayloads.itemsSerialNumbers_1,

        location: recievedPayloads.itemsLocation_1,

        condition: recievedPayloads.itemsCondition_1,
        remarks: recievedPayloads.itemsRemarks_1,
      },
      {
        productId: recievedPayloads.itemsProductId_2,
        name: recievedPayloads.itemsName_2,

        orderedQty: recievedPayloads.itemsOrderedQty_2,
        receivedQty: recievedPayloads.itemsReceivedQty_2,
        rejectedQty: recievedPayloads.itemsRejectedQty_2,

        unitCost: recievedPayloads.itemsUnitCost_2,
        totalCost: recievedPayloads.itemsTotalCost_2,

        batchNumber: recievedPayloads.itemsBatchNumber_2,
        expiryDate: recievedPayloads.itemsExpiryDate_2,
        serialNumbers: recievedPayloads.itemsSerialNumbers_2,

        location: recievedPayloads.itemsLocation_2,

        condition: recievedPayloads.itemsCondition_2,
        remarks: recievedPayloads.itemsRemarks_2,
      },
    ],

    inspection: {
      checkedBy: recievedPayloads.inspectionCheckedBy,
      condition: recievedPayloads.inspectionCondition,
      notes: recievedPayloads.inspectionNotes,
    },

    totals: {
      totalItems: recievedPayloads.totalsTotalItems,
      totalOrderedQty: recievedPayloads.totalsTotalOrderedQty,
      totalReceivedQty: recievedPayloads.totalsTotalReceivedQty,
      totalRejectedQty: recievedPayloads.totalsTotalRejectedQty,
      totalCost: recievedPayloads.totalsTotalCost,
    },

    attachments: recievedPayloads.attachments,

    isClosed: recievedPayloads.isClosed,
    createdAt: recievedPayloads.createdAt,
    updatedAt: recievedPayloads.updatedAt,
  };
  async function insertRecieve() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/purchases/insert_recieve`,
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

      console.log("Execute recieve response:", response);
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
  return (
    <div className="fx-cl space2">
      <h3>Insert Receive</h3>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => insertRecieve()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Client ID"
          value={recievedPayloads.clientId}
          onChange={(e) => setrecievedPayloads({ clientId: e.target.value })}
        />
        <input
          placeholder="Receive ID"
          value={recievedPayloads.receiveId}
          onChange={(e) => setrecievedPayloads({ receiveId: e.target.value })}
        />
        <input
          placeholder="Purchase Order ID"
          value={recievedPayloads.purchaseOrderId}
          onChange={(e) =>
            setrecievedPayloads({ purchaseOrderId: e.target.value })
          }
        />

        {/* SUPPLIER */}
        <input
          placeholder="Supplier ID"
          value={recievedPayloads.supplierSupplierId}
          onChange={(e) =>
            setrecievedPayloads({
              supplierSupplierId: e.target.value,
            })
          }
        />
        <input
          placeholder="Supplier Name"
          value={recievedPayloads.supplierName}
          onChange={(e) =>
            setrecievedPayloads({ supplierName: e.target.value })
          }
        />

        {/* WAREHOUSE */}
        <input
          placeholder="Warehouse ID"
          value={recievedPayloads.warehouseWarehouseId}
          onChange={(e) =>
            setrecievedPayloads({
              warehouseWarehouseId: e.target.value,
            })
          }
        />
        <input
          placeholder="Warehouse Name"
          value={recievedPayloads.warehouseName}
          onChange={(e) =>
            setrecievedPayloads({ warehouseName: e.target.value })
          }
        />

        {/* RECEIVED BY */}
        <input
          placeholder="User ID"
          value={recievedPayloads.receivedByUserId}
          onChange={(e) =>
            setrecievedPayloads({
              receivedByUserId: e.target.value,
            })
          }
        />
        <input
          placeholder="Received By Name"
          value={recievedPayloads.receivedByName}
          onChange={(e) =>
            setrecievedPayloads({
              receivedByName: e.target.value,
            })
          }
        />

        {/* STATUS */}
        <input
          placeholder="Status"
          value={recievedPayloads.status}
          onChange={(e) => setrecievedPayloads({ status: e.target.value })}
        />

        <input
          placeholder="Receive Date"
          value={recievedPayloads.receiveDate}
          onChange={(e) => setrecievedPayloads({ receiveDate: e.target.value })}
        />

        {/* ITEM 1 */}
        <h4>Item 1</h4>
        <input
          placeholder="Product ID"
          value={recievedPayloads.itemsProductId_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsProductId_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Name"
          value={recievedPayloads.itemsName_1}
          onChange={(e) => setrecievedPayloads({ itemsName_1: e.target.value })}
        />
        <input
          type="number"
          placeholder="Ordered Qty"
          value={recievedPayloads.itemsOrderedQty_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsOrderedQty_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Received Qty"
          value={recievedPayloads.itemsReceivedQty_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsReceivedQty_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Rejected Qty"
          value={recievedPayloads.itemsRejectedQty_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsRejectedQty_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Unit Cost"
          value={recievedPayloads.itemsUnitCost_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsUnitCost_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Cost"
          value={recievedPayloads.itemsTotalCost_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsTotalCost_1: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Batch Number"
          value={recievedPayloads.itemsBatchNumber_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsBatchNumber_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Expiry Date"
          value={recievedPayloads.itemsExpiryDate_1 || ""}
          onChange={(e) =>
            setrecievedPayloads({
              itemsExpiryDate_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Serial Numbers (comma separated)"
          value={recievedPayloads.itemsSerialNumbers_1.join(",")}
          onChange={(e) =>
            setrecievedPayloads({
              itemsSerialNumbers_1: e.target.value.split(","),
            })
          }
        />
        <input
          placeholder="Location"
          value={recievedPayloads.itemsLocation_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsLocation_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Condition"
          value={recievedPayloads.itemsCondition_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsCondition_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Remarks"
          value={recievedPayloads.itemsRemarks_1}
          onChange={(e) =>
            setrecievedPayloads({
              itemsRemarks_1: e.target.value,
            })
          }
        />

        {/* ITEM 2 */}
        <h4>Item 2</h4>
        <input
          placeholder="Product ID"
          value={recievedPayloads.itemsProductId_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsProductId_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Name"
          value={recievedPayloads.itemsName_2}
          onChange={(e) => setrecievedPayloads({ itemsName_2: e.target.value })}
        />
        <input
          type="number"
          placeholder="Ordered Qty"
          value={recievedPayloads.itemsOrderedQty_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsOrderedQty_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Received Qty"
          value={recievedPayloads.itemsReceivedQty_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsReceivedQty_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Rejected Qty"
          value={recievedPayloads.itemsRejectedQty_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsRejectedQty_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Unit Cost"
          value={recievedPayloads.itemsUnitCost_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsUnitCost_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Cost"
          value={recievedPayloads.itemsTotalCost_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsTotalCost_2: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Batch Number"
          value={recievedPayloads.itemsBatchNumber_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsBatchNumber_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Location"
          value={recievedPayloads.itemsLocation_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsLocation_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Condition"
          value={recievedPayloads.itemsCondition_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsCondition_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Remarks"
          value={recievedPayloads.itemsRemarks_2}
          onChange={(e) =>
            setrecievedPayloads({
              itemsRemarks_2: e.target.value,
            })
          }
        />

        {/* INSPECTION */}
        <input
          placeholder="Checked By"
          value={recievedPayloads.inspectionCheckedBy}
          onChange={(e) =>
            setrecievedPayloads({
              inspectionCheckedBy: e.target.value,
            })
          }
        />
        <input
          placeholder="Condition"
          value={recievedPayloads.inspectionCondition}
          onChange={(e) =>
            setrecievedPayloads({
              inspectionCondition: e.target.value,
            })
          }
        />
        <input
          placeholder="Notes"
          value={recievedPayloads.inspectionNotes}
          onChange={(e) =>
            setrecievedPayloads({
              inspectionNotes: e.target.value,
            })
          }
        />

        {/* TOTALS */}
        <input
          type="number"
          placeholder="Total Items"
          value={recievedPayloads.totalsTotalItems}
          onChange={(e) =>
            setrecievedPayloads({
              totalsTotalItems: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Ordered Qty"
          value={recievedPayloads.totalsTotalOrderedQty}
          onChange={(e) =>
            setrecievedPayloads({
              totalsTotalOrderedQty: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Received Qty"
          value={recievedPayloads.totalsTotalReceivedQty}
          onChange={(e) =>
            setrecievedPayloads({
              totalsTotalReceivedQty: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Rejected Qty"
          value={recievedPayloads.totalsTotalRejectedQty}
          onChange={(e) =>
            setrecievedPayloads({
              totalsTotalRejectedQty: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Cost"
          value={recievedPayloads.totalsTotalCost}
          onChange={(e) =>
            setrecievedPayloads({
              totalsTotalCost: Number(e.target.value),
            })
          }
        />

        {/* ATTACHMENTS */}
        <input
          placeholder="Attachments (comma separated)"
          value={recievedPayloads.attachments.join(",")}
          onChange={(e) =>
            setrecievedPayloads({
              attachments: e.target.value.split(","),
            })
          }
        />

        {/* FINAL STATUS */}
        <input
          type="checkbox"
          checked={recievedPayloads.isClosed}
          onChange={(e) => setrecievedPayloads({ isClosed: e.target.checked })}
        />

        <input
          placeholder="Created At"
          value={recievedPayloads.createdAt}
          onChange={(e) => setrecievedPayloads({ createdAt: e.target.value })}
        />
        <input
          placeholder="Updated At"
          value={recievedPayloads.updatedAt}
          onChange={(e) => setrecievedPayloads({ updatedAt: e.target.value })}
        />
      </div>
    </div>
  );
}
