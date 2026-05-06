import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function PlaceOrder() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [servicesPayloads, placedOrdersPayload] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      orderId: "PO-2026-000981",
      orderType: "PURCHASE_ORDER",

      statusCurrent: "APPROVED",

      statusHistoryState_1: "PENDING",
      statusHistoryTimestamp_1: "2026-04-28T08:00:00Z",

      statusHistoryState_2: "APPROVED",
      statusHistoryTimestamp_2: "2026-04-28T10:30:00Z",
      statusHistoryApprovedBy_2: "USR-1002",

      supplierSupplierId: "SUP-0023",
      supplierName: "ABC Supplies Ltd",
      supplierEmail: "sales@abcsupplies.com",
      supplierPhone: "+2348012345678",
      supplierAddress: "Lagos Industrial Area",

      warehouseWarehouseId: "WH-01",
      warehouseName: "Main Warehouse",
      warehouseLocation: "Ikeja, Lagos",

      itemsProductId_1: "PRD-1001",
      itemsName_1: "Peak Milk",
      itemsQuantity_1: 200,
      itemsUnitPrice_1: 1200,
      itemsTotal_1: 240000,

      itemsProductId_2: "PRD-1002",
      itemsName_2: "Coca Cola",
      itemsQuantity_2: 300,
      itemsUnitPrice_2: 800,
      itemsTotal_2: 240000,

      pricingSubtotal: 480000,
      pricingTax: 38400,
      pricingDiscount: 0,
      pricingTotalAmount: 518400,
      pricingCurrency: "NGN",

      workflowCreatedBy: "USR-1001",
      workflowApprovedBy: "USR-1002",
      workflowSentToSupplierAt: "2026-04-28T11:00:00Z",
      workflowReceivedAt: null,

      deliveryExpectedDeliveryDate: "2026-05-03",
      deliveryActualDeliveryDate: null,
      deliveryDeliveryStatus: "PENDING",
      deliveryTrackingNumber: null,

      paymentPaymentStatus: "UNPAID",
      paymentPaymentMethod: "BANK_TRANSFER",
      paymentPaidAmount: 0,
      paymentDueAmount: 518400,

      approvalRequired: true,
      approvalLevel: "MANAGEMENT",
      approvalStatus: "APPROVED",

      notes: "Urgent stock replenishment for supermarket operations",

      auditTrailAction_1: "CREATED",
      auditTrailBy_1: "USR-1001",
      auditTrailTimestamp_1: "2026-04-28T08:00:00Z",

      auditTrailAction_2: "APPROVED",
      auditTrailBy_2: "USR-1002",
      auditTrailTimestamp_2: "2026-04-28T10:30:00Z",

      auditTrailAction_3: "SENT_TO_SUPPLIER",
      auditTrailBy_3: "USR-1001",
      auditTrailTimestamp_3: "2026-04-28T11:00:00Z",
    },
  );

  const payload = {
    orderId: servicesPayloads.orderId,
    orderType: servicesPayloads.orderType,

    status: {
      current: servicesPayloads.statusCurrent,
      history: [
        {
          state: servicesPayloads.statusHistoryState_1,
          timestamp: servicesPayloads.statusHistoryTimestamp_1,
        },
        {
          state: servicesPayloads.statusHistoryState_2,
          timestamp: servicesPayloads.statusHistoryTimestamp_2,
          approvedBy: servicesPayloads.statusHistoryApprovedBy_2,
        },
      ],
    },

    supplier: {
      supplierId: servicesPayloads.supplierSupplierId,
      name: servicesPayloads.supplierName,
      email: servicesPayloads.supplierEmail,
      phone: servicesPayloads.supplierPhone,
      address: servicesPayloads.supplierAddress,
    },

    warehouse: {
      warehouseId: servicesPayloads.warehouseWarehouseId,
      name: servicesPayloads.warehouseName,
      location: servicesPayloads.warehouseLocation,
    },

    items: [
      {
        productId: servicesPayloads.itemsProductId_1,
        name: servicesPayloads.itemsName_1,
        quantity: servicesPayloads.itemsQuantity_1,
        unitPrice: servicesPayloads.itemsUnitPrice_1,
        total: servicesPayloads.itemsTotal_1,
      },
      {
        productId: servicesPayloads.itemsProductId_2,
        name: servicesPayloads.itemsName_2,
        quantity: servicesPayloads.itemsQuantity_2,
        unitPrice: servicesPayloads.itemsUnitPrice_2,
        total: servicesPayloads.itemsTotal_2,
      },
    ],

    pricing: {
      subtotal: servicesPayloads.pricingSubtotal,
      tax: servicesPayloads.pricingTax,
      discount: servicesPayloads.pricingDiscount,
      totalAmount: servicesPayloads.pricingTotalAmount,
      currency: servicesPayloads.pricingCurrency,
    },

    workflow: {
      createdBy: servicesPayloads.workflowCreatedBy,
      approvedBy: servicesPayloads.workflowApprovedBy,
      sentToSupplierAt: servicesPayloads.workflowSentToSupplierAt,
      receivedAt: servicesPayloads.workflowReceivedAt,
    },

    delivery: {
      expectedDeliveryDate: servicesPayloads.deliveryExpectedDeliveryDate,
      actualDeliveryDate: servicesPayloads.deliveryActualDeliveryDate,
      deliveryStatus: servicesPayloads.deliveryDeliveryStatus,
      trackingNumber: servicesPayloads.deliveryTrackingNumber,
    },

    payment: {
      paymentStatus: servicesPayloads.paymentPaymentStatus,
      paymentMethod: servicesPayloads.paymentPaymentMethod,
      paidAmount: servicesPayloads.paymentPaidAmount,
      dueAmount: servicesPayloads.paymentDueAmount,
    },

    approval: {
      required: servicesPayloads.approvalRequired,
      level: servicesPayloads.approvalLevel,
      status: servicesPayloads.approvalStatus,
    },

    notes: servicesPayloads.notes,

    auditTrail: [
      {
        action: servicesPayloads.auditTrailAction_1,
        by: servicesPayloads.auditTrailBy_1,
        timestamp: servicesPayloads.auditTrailTimestamp_1,
      },
      {
        action: servicesPayloads.auditTrailAction_2,
        by: servicesPayloads.auditTrailBy_2,
        timestamp: servicesPayloads.auditTrailTimestamp_2,
      },
      {
        action: servicesPayloads.auditTrailAction_3,
        by: servicesPayloads.auditTrailBy_3,
        timestamp: servicesPayloads.auditTrailTimestamp_3,
      },
    ],
  };

  async function apiPostOrders() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/purchases/post_order`,
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

      console.log("Order response:", response);
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
      <h2>Place Order Page</h2>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => apiPostOrders()}>Post</button>

        {/* ORDER INFO */}
        <input
          placeholder="Order ID"
          value={servicesPayloads.orderId}
          onChange={(e) => placedOrdersPayload({ orderId: e.target.value })}
        />
        <input
          placeholder="Order Type"
          value={servicesPayloads.orderType}
          onChange={(e) => placedOrdersPayload({ orderType: e.target.value })}
        />

        {/* STATUS */}
        <input
          placeholder="Current Status"
          value={servicesPayloads.statusCurrent}
          onChange={(e) =>
            placedOrdersPayload({ statusCurrent: e.target.value })
          }
        />

        {/* STATUS HISTORY 1 */}
        <h4>Status History 1</h4>
        <input
          placeholder="State"
          value={servicesPayloads.statusHistoryState_1}
          onChange={(e) =>
            placedOrdersPayload({
              statusHistoryState_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Timestamp"
          value={servicesPayloads.statusHistoryTimestamp_1}
          onChange={(e) =>
            placedOrdersPayload({
              statusHistoryTimestamp_1: e.target.value,
            })
          }
        />

        {/* STATUS HISTORY 2 */}
        <h4>Status History 2</h4>
        <input
          placeholder="State"
          value={servicesPayloads.statusHistoryState_2}
          onChange={(e) =>
            placedOrdersPayload({
              statusHistoryState_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Timestamp"
          value={servicesPayloads.statusHistoryTimestamp_2}
          onChange={(e) =>
            placedOrdersPayload({
              statusHistoryTimestamp_2: e.target.value,
            })
          }
        />
        <input
          placeholder="Approved By"
          value={servicesPayloads.statusHistoryApprovedBy_2}
          onChange={(e) =>
            placedOrdersPayload({
              statusHistoryApprovedBy_2: e.target.value,
            })
          }
        />

        {/* SUPPLIER */}
        <input
          placeholder="Supplier ID"
          value={servicesPayloads.supplierSupplierId}
          onChange={(e) =>
            placedOrdersPayload({
              supplierSupplierId: e.target.value,
            })
          }
        />
        <input
          placeholder="Supplier Name"
          value={servicesPayloads.supplierName}
          onChange={(e) =>
            placedOrdersPayload({ supplierName: e.target.value })
          }
        />
        <input
          placeholder="Supplier Email"
          value={servicesPayloads.supplierEmail}
          onChange={(e) =>
            placedOrdersPayload({ supplierEmail: e.target.value })
          }
        />
        <input
          placeholder="Supplier Phone"
          value={servicesPayloads.supplierPhone}
          onChange={(e) =>
            placedOrdersPayload({ supplierPhone: e.target.value })
          }
        />
        <input
          placeholder="Supplier Address"
          value={servicesPayloads.supplierAddress}
          onChange={(e) =>
            placedOrdersPayload({ supplierAddress: e.target.value })
          }
        />

        {/* WAREHOUSE */}
        <input
          placeholder="Warehouse ID"
          value={servicesPayloads.warehouseWarehouseId}
          onChange={(e) =>
            placedOrdersPayload({
              warehouseWarehouseId: e.target.value,
            })
          }
        />
        <input
          placeholder="Warehouse Name"
          value={servicesPayloads.warehouseName}
          onChange={(e) =>
            placedOrdersPayload({ warehouseName: e.target.value })
          }
        />
        <input
          placeholder="Warehouse Location"
          value={servicesPayloads.warehouseLocation}
          onChange={(e) =>
            placedOrdersPayload({ warehouseLocation: e.target.value })
          }
        />

        {/* ITEM 1 */}
        <h4>Item 1</h4>
        <input
          placeholder="Product ID"
          value={servicesPayloads.itemsProductId_1}
          onChange={(e) =>
            placedOrdersPayload({ itemsProductId_1: e.target.value })
          }
        />
        <input
          placeholder="Name"
          value={servicesPayloads.itemsName_1}
          onChange={(e) => placedOrdersPayload({ itemsName_1: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={servicesPayloads.itemsQuantity_1}
          onChange={(e) =>
            placedOrdersPayload({
              itemsQuantity_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Unit Price"
          value={servicesPayloads.itemsUnitPrice_1}
          onChange={(e) =>
            placedOrdersPayload({
              itemsUnitPrice_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total"
          value={servicesPayloads.itemsTotal_1}
          onChange={(e) =>
            placedOrdersPayload({
              itemsTotal_1: Number(e.target.value),
            })
          }
        />

        {/* ITEM 2 */}
        <h4>Item 2</h4>
        <input
          placeholder="Product ID"
          value={servicesPayloads.itemsProductId_2}
          onChange={(e) =>
            placedOrdersPayload({ itemsProductId_2: e.target.value })
          }
        />
        <input
          placeholder="Name"
          value={servicesPayloads.itemsName_2}
          onChange={(e) => placedOrdersPayload({ itemsName_2: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={servicesPayloads.itemsQuantity_2}
          onChange={(e) =>
            placedOrdersPayload({
              itemsQuantity_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Unit Price"
          value={servicesPayloads.itemsUnitPrice_2}
          onChange={(e) =>
            placedOrdersPayload({
              itemsUnitPrice_2: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total"
          value={servicesPayloads.itemsTotal_2}
          onChange={(e) =>
            placedOrdersPayload({
              itemsTotal_2: Number(e.target.value),
            })
          }
        />

        {/* PRICING */}
        <input
          type="number"
          placeholder="Subtotal"
          value={servicesPayloads.pricingSubtotal}
          onChange={(e) =>
            placedOrdersPayload({
              pricingSubtotal: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Tax"
          value={servicesPayloads.pricingTax}
          onChange={(e) =>
            placedOrdersPayload({
              pricingTax: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Discount"
          value={servicesPayloads.pricingDiscount}
          onChange={(e) =>
            placedOrdersPayload({
              pricingDiscount: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Amount"
          value={servicesPayloads.pricingTotalAmount}
          onChange={(e) =>
            placedOrdersPayload({
              pricingTotalAmount: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Currency"
          value={servicesPayloads.pricingCurrency}
          onChange={(e) =>
            placedOrdersPayload({ pricingCurrency: e.target.value })
          }
        />

        {/* WORKFLOW */}
        <input
          placeholder="Created By"
          value={servicesPayloads.workflowCreatedBy}
          onChange={(e) =>
            placedOrdersPayload({
              workflowCreatedBy: e.target.value,
            })
          }
        />
        <input
          placeholder="Approved By"
          value={servicesPayloads.workflowApprovedBy}
          onChange={(e) =>
            placedOrdersPayload({
              workflowApprovedBy: e.target.value,
            })
          }
        />
        <input
          placeholder="Sent To Supplier"
          value={servicesPayloads.workflowSentToSupplierAt}
          onChange={(e) =>
            placedOrdersPayload({
              workflowSentToSupplierAt: e.target.value,
            })
          }
        />
        <input
          placeholder="Received At"
          value={servicesPayloads.workflowReceivedAt || ""}
          onChange={(e) =>
            placedOrdersPayload({
              workflowReceivedAt: e.target.value,
            })
          }
        />

        {/* DELIVERY */}
        <input
          placeholder="Expected Delivery"
          value={servicesPayloads.deliveryExpectedDeliveryDate}
          onChange={(e) =>
            placedOrdersPayload({
              deliveryExpectedDeliveryDate: e.target.value,
            })
          }
        />
        <input
          placeholder="Actual Delivery"
          value={servicesPayloads.deliveryActualDeliveryDate || ""}
          onChange={(e) =>
            placedOrdersPayload({
              deliveryActualDeliveryDate: e.target.value,
            })
          }
        />
        <input
          placeholder="Delivery Status"
          value={servicesPayloads.deliveryDeliveryStatus}
          onChange={(e) =>
            placedOrdersPayload({
              deliveryDeliveryStatus: e.target.value,
            })
          }
        />
        <input
          placeholder="Tracking Number"
          value={servicesPayloads.deliveryTrackingNumber || ""}
          onChange={(e) =>
            placedOrdersPayload({
              deliveryTrackingNumber: e.target.value,
            })
          }
        />

        {/* PAYMENT */}
        <input
          placeholder="Payment Status"
          value={servicesPayloads.paymentPaymentStatus}
          onChange={(e) =>
            placedOrdersPayload({
              paymentPaymentStatus: e.target.value,
            })
          }
        />
        <input
          placeholder="Payment Method"
          value={servicesPayloads.paymentPaymentMethod}
          onChange={(e) =>
            placedOrdersPayload({
              paymentPaymentMethod: e.target.value,
            })
          }
        />
        <input
          type="number"
          placeholder="Paid Amount"
          value={servicesPayloads.paymentPaidAmount}
          onChange={(e) =>
            placedOrdersPayload({
              paymentPaidAmount: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Due Amount"
          value={servicesPayloads.paymentDueAmount}
          onChange={(e) =>
            placedOrdersPayload({
              paymentDueAmount: Number(e.target.value),
            })
          }
        />

        {/* APPROVAL */}
        <input
          type="checkbox"
          checked={servicesPayloads.approvalRequired}
          onChange={(e) =>
            placedOrdersPayload({
              approvalRequired: e.target.checked,
            })
          }
        />
        <input
          placeholder="Approval Level"
          value={servicesPayloads.approvalLevel}
          onChange={(e) =>
            placedOrdersPayload({ approvalLevel: e.target.value })
          }
        />
        <input
          placeholder="Approval Status"
          value={servicesPayloads.approvalStatus}
          onChange={(e) =>
            placedOrdersPayload({ approvalStatus: e.target.value })
          }
        />

        {/* NOTES */}
        <input
          placeholder="Notes"
          value={servicesPayloads.notes}
          onChange={(e) => placedOrdersPayload({ notes: e.target.value })}
        />

        {/* AUDIT TRAIL */}
        <h4>Audit 1</h4>
        <input
          placeholder="Action"
          value={servicesPayloads.auditTrailAction_1}
          onChange={(e) =>
            placedOrdersPayload({
              auditTrailAction_1: e.target.value,
            })
          }
        />
        <input
          placeholder="By"
          value={servicesPayloads.auditTrailBy_1}
          onChange={(e) =>
            placedOrdersPayload({ auditTrailBy_1: e.target.value })
          }
        />
        <input
          placeholder="Timestamp"
          value={servicesPayloads.auditTrailTimestamp_1}
          onChange={(e) =>
            placedOrdersPayload({
              auditTrailTimestamp_1: e.target.value,
            })
          }
        />

        <h4>Audit 2</h4>
        <input
          placeholder="Action"
          value={servicesPayloads.auditTrailAction_2}
          onChange={(e) =>
            placedOrdersPayload({
              auditTrailAction_2: e.target.value,
            })
          }
        />
        <input
          placeholder="By"
          value={servicesPayloads.auditTrailBy_2}
          onChange={(e) =>
            placedOrdersPayload({ auditTrailBy_2: e.target.value })
          }
        />
        <input
          placeholder="Timestamp"
          value={servicesPayloads.auditTrailTimestamp_2}
          onChange={(e) =>
            placedOrdersPayload({
              auditTrailTimestamp_2: e.target.value,
            })
          }
        />

        <h4>Audit 3</h4>
        <input
          placeholder="Action"
          value={servicesPayloads.auditTrailAction_3}
          onChange={(e) =>
            placedOrdersPayload({
              auditTrailAction_3: e.target.value,
            })
          }
        />
        <input
          placeholder="By"
          value={servicesPayloads.auditTrailBy_3}
          onChange={(e) =>
            placedOrdersPayload({ auditTrailBy_3: e.target.value })
          }
        />
        <input
          placeholder="Timestamp"
          value={servicesPayloads.auditTrailTimestamp_3}
          onChange={(e) =>
            placedOrdersPayload({
              auditTrailTimestamp_3: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
