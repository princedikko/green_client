import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function RecordReturned() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [returnedPayloads, setreturnedPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      returnId: "RTN-00045",
      originalPurchaseOrderId: "PO-00981",
      receiveId: "RCV-00021",

      supplierSupplierId: "SUP-0023",
      supplierName: "ABC Supplies Ltd",
      supplierContact: "+2348012345678",

      warehouseWarehouseId: "WH-01",
      warehouseName: "Main Warehouse",

      processedByUserId: "USR-1001",
      processedByName: "Amina",

      returnDate: "2026-04-29T11:20:00Z",

      status: "APPROVED",
      returnType: "PARTIAL",

      reasonSummary: "Damaged and wrong items delivered",

      itemsProductId_1: "PRD-001",
      itemsName_1: "Laptop HP EliteBook",
      itemsQuantityReturned_1: 5,
      itemsUnitPrice_1: 1200,
      itemsTotalRefundValue_1: 6000,
      itemsReason_1: "DAMAGED",
      itemsCondition_1: "UNUSABLE",
      itemsBatchNumber_1: "BCH-7781",
      itemsSerialNumbers_1: ["SN001", "SN002"],
      itemsInspectionChecked_1: true,
      itemsInspectionInspector_1: "USR-2002",
      itemsInspectionNotes_1: "Screen cracked, cannot be restocked",
      itemsResolution_1: "RETURN_TO_SUPPLIER",

      itemsProductId_2: "PRD-003",
      itemsName_2: "Keyboard Logitech K120",
      itemsQuantityReturned_2: 10,
      itemsUnitPrice_2: 25,
      itemsTotalRefundValue_2: 250,
      itemsReason_2: "WRONG_ITEM",
      itemsCondition_2: "NEW",
      itemsBatchNumber_2: "BCH-9911",
      itemsSerialNumbers_2: [],
      itemsInspectionChecked_2: true,
      itemsInspectionInspector_2: "USR-2002",
      itemsInspectionNotes_2: "Wrong model delivered (K120 instead of K270)",
      itemsResolution_2: "REPLACE",

      financialsTotalItemsReturned: 2,
      financialsTotalQuantityReturned: 15,
      financialsTotalRefundValue: 6250,
      financialsCurrency: "USD",

      supplierActionResponseStatus: "PENDING",
      supplierActionReturnReferenceCode: "SUP-RMA-77821",
      supplierActionExpectedResolutionDate: "2026-05-05",

      logisticsShippedBack: true,
      logisticsShippingMethod: "DHL",
      logisticsTrackingNumber: "DHL-99887766",
      logisticsShippingCost: 120,
      logisticsPickupDate: "2026-04-30",

      attachments: [
        "damage_report_001.jpg",
        "return_invoice.pdf",
        "inspection_video.mp4",
      ],

      auditTrailAction_1: "CREATED",
      auditTrailBy_1: "USR-1001",
      auditTrailDate_1: "2026-04-29T11:20:00Z",

      auditTrailAction_2: "APPROVED",
      auditTrailBy_2: "MANAGER-001",
      auditTrailDate_2: "2026-04-29T11:45:00Z",

      createdAt: "2026-04-29T11:20:00Z",
      updatedAt: "2026-04-29T11:50:00Z",
    },
  );

  const payload = {
    returnId: returnedPayloads.returnId,
    originalPurchaseOrderId: returnedPayloads.originalPurchaseOrderId,
    receiveId: returnedPayloads.receiveId,

    supplier: {
      supplierId: returnedPayloads.supplierSupplierId,
      name: returnedPayloads.supplierName,
      contact: returnedPayloads.supplierContact,
    },

    warehouse: {
      warehouseId: returnedPayloads.warehouseWarehouseId,
      name: returnedPayloads.warehouseName,
    },

    processedBy: {
      userId: returnedPayloads.processedByUserId,
      name: returnedPayloads.processedByName,
    },

    returnDate: returnedPayloads.returnDate,

    status: returnedPayloads.status,
    returnType: returnedPayloads.returnType,

    reasonSummary: returnedPayloads.reasonSummary,

    items: [
      {
        productId: returnedPayloads.itemsProductId_1,
        name: returnedPayloads.itemsName_1,

        quantityReturned: returnedPayloads.itemsQuantityReturned_1,
        unitPrice: returnedPayloads.itemsUnitPrice_1,
        totalRefundValue: returnedPayloads.itemsTotalRefundValue_1,

        reason: returnedPayloads.itemsReason_1,
        condition: returnedPayloads.itemsCondition_1,
        batchNumber: returnedPayloads.itemsBatchNumber_1,
        serialNumbers: returnedPayloads.itemsSerialNumbers_1,

        inspection: {
          checked: returnedPayloads.itemsInspectionChecked_1,
          inspector: returnedPayloads.itemsInspectionInspector_1,
          notes: returnedPayloads.itemsInspectionNotes_1,
        },

        resolution: returnedPayloads.itemsResolution_1,
      },

      {
        productId: returnedPayloads.itemsProductId_2,
        name: returnedPayloads.itemsName_2,

        quantityReturned: returnedPayloads.itemsQuantityReturned_2,
        unitPrice: returnedPayloads.itemsUnitPrice_2,
        totalRefundValue: returnedPayloads.itemsTotalRefundValue_2,

        reason: returnedPayloads.itemsReason_2,
        condition: returnedPayloads.itemsCondition_2,
        batchNumber: returnedPayloads.itemsBatchNumber_2,
        serialNumbers: returnedPayloads.itemsSerialNumbers_2,

        inspection: {
          checked: returnedPayloads.itemsInspectionChecked_2,
          inspector: returnedPayloads.itemsInspectionInspector_2,
          notes: returnedPayloads.itemsInspectionNotes_2,
        },

        resolution: returnedPayloads.itemsResolution_2,
      },
    ],

    financials: {
      totalItemsReturned: returnedPayloads.financialsTotalItemsReturned,
      totalQuantityReturned: returnedPayloads.financialsTotalQuantityReturned,
      totalRefundValue: returnedPayloads.financialsTotalRefundValue,
      currency: returnedPayloads.financialsCurrency,
    },

    supplierAction: {
      responseStatus: returnedPayloads.supplierActionResponseStatus,
      returnReferenceCode: returnedPayloads.supplierActionReturnReferenceCode,
      expectedResolutionDate:
        returnedPayloads.supplierActionExpectedResolutionDate,
    },

    logistics: {
      shippedBack: returnedPayloads.logisticsShippedBack,
      shippingMethod: returnedPayloads.logisticsShippingMethod,
      trackingNumber: returnedPayloads.logisticsTrackingNumber,
      shippingCost: returnedPayloads.logisticsShippingCost,
      pickupDate: returnedPayloads.logisticsPickupDate,
    },

    attachments: returnedPayloads.attachments,

    auditTrail: [
      {
        action: returnedPayloads.auditTrailAction_1,
        by: returnedPayloads.auditTrailBy_1,
        date: returnedPayloads.auditTrailDate_1,
      },
      {
        action: returnedPayloads.auditTrailAction_2,
        by: returnedPayloads.auditTrailBy_2,
        date: returnedPayloads.auditTrailDate_2,
      },
    ],

    createdAt: returnedPayloads.createdAt,
    updatedAt: returnedPayloads.updatedAt,
  };

  async function postReturn() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/purchases/post_return`,
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

      console.log("Return response:", response);
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
      <h3>Record Returned</h3>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => postReturn()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Return ID"
          value={returnedPayloads.returnId}
          onChange={(e) => setreturnedPayloads({ returnId: e.target.value })}
        />
        <input
          placeholder="Original PO ID"
          value={returnedPayloads.originalPurchaseOrderId}
          onChange={(e) =>
            setreturnedPayloads({ originalPurchaseOrderId: e.target.value })
          }
        />
        <input
          placeholder="Receive ID"
          value={returnedPayloads.receiveId}
          onChange={(e) => setreturnedPayloads({ receiveId: e.target.value })}
        />

        {/* SUPPLIER */}
        <input
          placeholder="Supplier ID"
          value={returnedPayloads.supplierSupplierId}
          onChange={(e) =>
            setreturnedPayloads({ supplierSupplierId: e.target.value })
          }
        />
        <input
          placeholder="Supplier Name"
          value={returnedPayloads.supplierName}
          onChange={(e) =>
            setreturnedPayloads({ supplierName: e.target.value })
          }
        />
        <input
          placeholder="Supplier Contact"
          value={returnedPayloads.supplierContact}
          onChange={(e) =>
            setreturnedPayloads({ supplierContact: e.target.value })
          }
        />

        {/* WAREHOUSE */}
        <input
          placeholder="Warehouse ID"
          value={returnedPayloads.warehouseWarehouseId}
          onChange={(e) =>
            setreturnedPayloads({ warehouseWarehouseId: e.target.value })
          }
        />
        <input
          placeholder="Warehouse Name"
          value={returnedPayloads.warehouseName}
          onChange={(e) =>
            setreturnedPayloads({ warehouseName: e.target.value })
          }
        />

        {/* PROCESSED BY */}
        <input
          placeholder="User ID"
          value={returnedPayloads.processedByUserId}
          onChange={(e) =>
            setreturnedPayloads({ processedByUserId: e.target.value })
          }
        />
        <input
          placeholder="Processed By Name"
          value={returnedPayloads.processedByName}
          onChange={(e) =>
            setreturnedPayloads({ processedByName: e.target.value })
          }
        />

        {/* RETURN META */}
        <input
          placeholder="Return Date"
          value={returnedPayloads.returnDate}
          onChange={(e) => setreturnedPayloads({ returnDate: e.target.value })}
        />
        <input
          placeholder="Status"
          value={returnedPayloads.status}
          onChange={(e) => setreturnedPayloads({ status: e.target.value })}
        />
        <input
          placeholder="Return Type"
          value={returnedPayloads.returnType}
          onChange={(e) => setreturnedPayloads({ returnType: e.target.value })}
        />
        <input
          placeholder="Reason Summary"
          value={returnedPayloads.reasonSummary}
          onChange={(e) =>
            setreturnedPayloads({ reasonSummary: e.target.value })
          }
        />

        {/* ITEM 1 */}
        <h4>Item 1</h4>
        <input
          placeholder="Product ID"
          value={returnedPayloads.itemsProductId_1}
          onChange={(e) =>
            setreturnedPayloads({ itemsProductId_1: e.target.value })
          }
        />
        <input
          placeholder="Name"
          value={returnedPayloads.itemsName_1}
          onChange={(e) => setreturnedPayloads({ itemsName_1: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity Returned"
          value={returnedPayloads.itemsQuantityReturned_1}
          onChange={(e) =>
            setreturnedPayloads({
              itemsQuantityReturned_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Unit Price"
          value={returnedPayloads.itemsUnitPrice_1}
          onChange={(e) =>
            setreturnedPayloads({
              itemsUnitPrice_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Refund Value"
          value={returnedPayloads.itemsTotalRefundValue_1}
          onChange={(e) =>
            setreturnedPayloads({
              itemsTotalRefundValue_1: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Reason"
          value={returnedPayloads.itemsReason_1}
          onChange={(e) =>
            setreturnedPayloads({ itemsReason_1: e.target.value })
          }
        />
        <input
          placeholder="Condition"
          value={returnedPayloads.itemsCondition_1}
          onChange={(e) =>
            setreturnedPayloads({ itemsCondition_1: e.target.value })
          }
        />
        <input
          placeholder="Batch Number"
          value={returnedPayloads.itemsBatchNumber_1}
          onChange={(e) =>
            setreturnedPayloads({ itemsBatchNumber_1: e.target.value })
          }
        />
        <input
          placeholder="Serial Numbers"
          value={returnedPayloads.itemsSerialNumbers_1.join(",")}
          onChange={(e) =>
            setreturnedPayloads({
              itemsSerialNumbers_1: e.target.value.split(","),
            })
          }
        />
        <input
          type="checkbox"
          checked={returnedPayloads.itemsInspectionChecked_1}
          onChange={(e) =>
            setreturnedPayloads({
              itemsInspectionChecked_1: e.target.checked,
            })
          }
        />
        <input
          placeholder="Inspector"
          value={returnedPayloads.itemsInspectionInspector_1}
          onChange={(e) =>
            setreturnedPayloads({
              itemsInspectionInspector_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Inspection Notes"
          value={returnedPayloads.itemsInspectionNotes_1}
          onChange={(e) =>
            setreturnedPayloads({
              itemsInspectionNotes_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Resolution"
          value={returnedPayloads.itemsResolution_1}
          onChange={(e) =>
            setreturnedPayloads({
              itemsResolution_1: e.target.value,
            })
          }
        />

        {/* ITEM 2 */}
        <h4>Item 2</h4>
        <input
          placeholder="Product ID"
          value={returnedPayloads.itemsProductId_2}
          onChange={(e) =>
            setreturnedPayloads({ itemsProductId_2: e.target.value })
          }
        />
        <input
          placeholder="Name"
          value={returnedPayloads.itemsName_2}
          onChange={(e) => setreturnedPayloads({ itemsName_2: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity Returned"
          value={returnedPayloads.itemsQuantityReturned_2}
          onChange={(e) =>
            setreturnedPayloads({
              itemsQuantityReturned_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Unit Price"
          value={returnedPayloads.itemsUnitPrice_2}
          onChange={(e) =>
            setreturnedPayloads({
              itemsUnitPrice_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Refund Value"
          value={returnedPayloads.itemsTotalRefundValue_2}
          onChange={(e) =>
            setreturnedPayloads({
              itemsTotalRefundValue_2: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Reason"
          value={returnedPayloads.itemsReason_2}
          onChange={(e) =>
            setreturnedPayloads({ itemsReason_2: e.target.value })
          }
        />
        <input
          placeholder="Condition"
          value={returnedPayloads.itemsCondition_2}
          onChange={(e) =>
            setreturnedPayloads({ itemsCondition_2: e.target.value })
          }
        />
        <input
          placeholder="Batch Number"
          value={returnedPayloads.itemsBatchNumber_2}
          onChange={(e) =>
            setreturnedPayloads({ itemsBatchNumber_2: e.target.value })
          }
        />
        <input
          placeholder="Inspector"
          value={returnedPayloads.itemsInspectionInspector_2}
          onChange={(e) =>
            setreturnedPayloads({
              itemsInspectionInspector_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Inspection Notes"
          value={returnedPayloads.itemsInspectionNotes_2}
          onChange={(e) =>
            setreturnedPayloads({
              itemsInspectionNotes_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Resolution"
          value={returnedPayloads.itemsResolution_2}
          onChange={(e) =>
            setreturnedPayloads({
              itemsResolution_2: e.target.value,
            })
          }
        />

        {/* FINANCIALS */}
        <input
          type="number"
          placeholder="Total Items Returned"
          value={returnedPayloads.financialsTotalItemsReturned}
          onChange={(e) =>
            setreturnedPayloads({
              financialsTotalItemsReturned: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Quantity Returned"
          value={returnedPayloads.financialsTotalQuantityReturned}
          onChange={(e) =>
            setreturnedPayloads({
              financialsTotalQuantityReturned: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Refund Value"
          value={returnedPayloads.financialsTotalRefundValue}
          onChange={(e) =>
            setreturnedPayloads({
              financialsTotalRefundValue: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Currency"
          value={returnedPayloads.financialsCurrency}
          onChange={(e) =>
            setreturnedPayloads({
              financialsCurrency: e.target.value,
            })
          }
        />

        {/* SUPPLIER ACTION */}
        <input
          placeholder="Supplier Status"
          value={returnedPayloads.supplierActionResponseStatus}
          onChange={(e) =>
            setreturnedPayloads({
              supplierActionResponseStatus: e.target.value,
            })
          }
        />
        <input
          placeholder="Return Ref Code"
          value={returnedPayloads.supplierActionReturnReferenceCode}
          onChange={(e) =>
            setreturnedPayloads({
              supplierActionReturnReferenceCode: e.target.value,
            })
          }
        />
        <input
          placeholder="Expected Resolution Date"
          value={returnedPayloads.supplierActionExpectedResolutionDate}
          onChange={(e) =>
            setreturnedPayloads({
              supplierActionExpectedResolutionDate: e.target.value,
            })
          }
        />

        {/* LOGISTICS */}
        <input
          type="checkbox"
          checked={returnedPayloads.logisticsShippedBack}
          onChange={(e) =>
            setreturnedPayloads({
              logisticsShippedBack: e.target.checked,
            })
          }
        />
        <input
          placeholder="Shipping Method"
          value={returnedPayloads.logisticsShippingMethod}
          onChange={(e) =>
            setreturnedPayloads({
              logisticsShippingMethod: e.target.value,
            })
          }
        />
        <input
          placeholder="Tracking Number"
          value={returnedPayloads.logisticsTrackingNumber}
          onChange={(e) =>
            setreturnedPayloads({
              logisticsTrackingNumber: e.target.value,
            })
          }
        />
        <input
          type="number"
          placeholder="Shipping Cost"
          value={returnedPayloads.logisticsShippingCost}
          onChange={(e) =>
            setreturnedPayloads({
              logisticsShippingCost: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Pickup Date"
          value={returnedPayloads.logisticsPickupDate}
          onChange={(e) =>
            setreturnedPayloads({
              logisticsPickupDate: e.target.value,
            })
          }
        />

        {/* ATTACHMENTS */}
        <input
          placeholder="Attachments (comma separated)"
          value={returnedPayloads.attachments.join(",")}
          onChange={(e) =>
            setreturnedPayloads({
              attachments: e.target.value.split(","),
            })
          }
        />

        {/* AUDIT TRAIL */}
        <h4>Audit Trail 1</h4>
        <input
          placeholder="Action"
          value={returnedPayloads.auditTrailAction_1}
          onChange={(e) =>
            setreturnedPayloads({
              auditTrailAction_1: e.target.value,
            })
          }
        />
        <input
          placeholder="By"
          value={returnedPayloads.auditTrailBy_1}
          onChange={(e) =>
            setreturnedPayloads({
              auditTrailBy_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Date"
          value={returnedPayloads.auditTrailDate_1}
          onChange={(e) =>
            setreturnedPayloads({
              auditTrailDate_1: e.target.value,
            })
          }
        />

        <h4>Audit Trail 2</h4>
        <input
          placeholder="Action"
          value={returnedPayloads.auditTrailAction_2}
          onChange={(e) =>
            setreturnedPayloads({
              auditTrailAction_2: e.target.value,
            })
          }
        />
        <input
          placeholder="By"
          value={returnedPayloads.auditTrailBy_2}
          onChange={(e) =>
            setreturnedPayloads({
              auditTrailBy_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Date"
          value={returnedPayloads.auditTrailDate_2}
          onChange={(e) =>
            setreturnedPayloads({
              auditTrailDate_2: e.target.value,
            })
          }
        />

        {/* META */}
        <input
          placeholder="Created At"
          value={returnedPayloads.createdAt}
          onChange={(e) => setreturnedPayloads({ createdAt: e.target.value })}
        />
        <input
          placeholder="Updated At"
          value={returnedPayloads.updatedAt}
          onChange={(e) => setreturnedPayloads({ updatedAt: e.target.value })}
        />
      </div>
    </div>
  );
}
