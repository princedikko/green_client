import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function CreateDelivery() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [createDelivery, setcreateDelivery] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      deliveryId: "DEL-2026-000321",
      deliveryType: "INBOUND",

      referenceReferenceType: "PURCHASE_ORDER",
      referenceReferenceId: "PO-2026-000981",

      statusCurrent: "IN_TRANSIT",

      statusHistoryState_1: "CREATED",
      statusHistoryTimestamp_1: "2026-04-29T08:00:00Z",

      statusHistoryState_2: "DISPATCHED",
      statusHistoryTimestamp_2: "2026-04-29T10:00:00Z",

      statusHistoryState_3: "IN_TRANSIT",
      statusHistoryTimestamp_3: "2026-04-29T12:00:00Z",

      statusHistoryState_4: "DELIVERED",
      statusHistoryTimestamp_4: "2026-04-29T12:00:00Z",

      partiesSupplierSupplierId: "SUP-0023",
      partiesSupplierName: "ABC Supplies Ltd",
      partiesSupplierContact: "+2348012345678",

      partiesCustomer: null,

      partiesWarehouseWarehouseId: "WH-01",
      partiesWarehouseName: "Main Warehouse",
      partiesWarehouseLocation: "Ikeja, Lagos",

      itemsProductId_1: "PRD-1001",
      itemsName_1: "Peak Milk",
      itemsOrderedQuantity_1: 200,
      itemsShippedQuantity_1: 200,
      itemsReceivedQuantity_1: 0,
      itemsDamagedQuantity_1: 0,
      itemsUnit_1: "Cartons",

      itemsProductId_2: "PRD-1002",
      itemsName_2: "Coca Cola",
      itemsOrderedQuantity_2: 300,
      itemsShippedQuantity_2: 300,
      itemsReceivedQuantity_2: 0,
      itemsDamagedQuantity_2: 0,
      itemsUnit_2: "Crates",

      transportMode: "ROAD",
      transportVehicleVehicleId: "VEH-009",
      transportVehiclePlateNumber: "LAG-234-XY",
      transportVehicleDriverName: "Ibrahim Musa",
      transportVehicleDriverPhone: "+2348098765432",
      transportCarrier: "DHL Logistics",

      trackingTrackingNumber: "TRK-88990011",
      trackingTrackingUrl: "https://tracking.example.com/TRK-88990011",
      trackingCurrentLocation: "Ibadan",
      trackingLastUpdated: "2026-04-29T13:30:00Z",

      scheduleDispatchDate: "2026-04-29T10:00:00Z",
      scheduleEstimatedArrival: "2026-04-30T18:00:00Z",
      scheduleActualArrival: null,

      proofOfDeliveryReceivedBy: null,
      proofOfDeliverySignatureUrl: null,
      proofOfDeliveryReceivedAt: null,
      proofOfDeliveryNotes: null,

      exceptionsType_1: "DELAY",
      exceptionsDescription_1: "Traffic congestion on Lagos-Ibadan expressway",
      exceptionsReportedAt_1: "2026-04-29T14:00:00Z",

      financialsShippingCost: 25000,
      financialsCurrency: "NGN",
      financialsPaid: false,

      createdBy: "USR-1001",
      createdAt: "2026-04-29T08:00:00Z",

      auditTrailAction_1: "CREATED",
      auditTrailBy_1: "USR-1001",
      auditTrailTimestamp_1: "2026-04-29T08:00:00Z",

      auditTrailAction_2: "DISPATCHED",
      auditTrailBy_2: "USR-1003",
      auditTrailTimestamp_2: "2026-04-29T10:00:00Z",
    },
  );

  const payload = {
    deliveryId: createDelivery.deliveryId,
    deliveryType: createDelivery.deliveryType,

    reference: {
      referenceType: createDelivery.referenceReferenceType,
      referenceId: createDelivery.referenceReferenceId,
    },

    status: {
      current: createDelivery.statusCurrent,
      history: [
        {
          state: createDelivery.statusHistoryState_1,
          timestamp: createDelivery.statusHistoryTimestamp_1,
        },
        {
          state: createDelivery.statusHistoryState_2,
          timestamp: createDelivery.statusHistoryTimestamp_2,
        },
        {
          state: createDelivery.statusHistoryState_3,
          timestamp: createDelivery.statusHistoryTimestamp_3,
        },
        {
          state: createDelivery.statusHistoryState_4,
          timestamp: createDelivery.statusHistoryTimestamp_4,
        },
      ],
    },

    parties: {
      supplier: {
        supplierId: createDelivery.partiesSupplierSupplierId,
        name: createDelivery.partiesSupplierName,
        contact: createDelivery.partiesSupplierContact,
      },
      customer: createDelivery.partiesCustomer,
      warehouse: {
        warehouseId: createDelivery.partiesWarehouseWarehouseId,
        name: createDelivery.partiesWarehouseName,
        location: createDelivery.partiesWarehouseLocation,
      },
    },

    items: [
      {
        productId: createDelivery.itemsProductId_1,
        name: createDelivery.itemsName_1,
        orderedQuantity: createDelivery.itemsOrderedQuantity_1,
        shippedQuantity: createDelivery.itemsShippedQuantity_1,
        receivedQuantity: createDelivery.itemsReceivedQuantity_1,
        damagedQuantity: createDelivery.itemsDamagedQuantity_1,
        unit: createDelivery.itemsUnit_1,
      },
      {
        productId: createDelivery.itemsProductId_2,
        name: createDelivery.itemsName_2,
        orderedQuantity: createDelivery.itemsOrderedQuantity_2,
        shippedQuantity: createDelivery.itemsShippedQuantity_2,
        receivedQuantity: createDelivery.itemsReceivedQuantity_2,
        damagedQuantity: createDelivery.itemsDamagedQuantity_2,
        unit: createDelivery.itemsUnit_2,
      },
    ],

    transport: {
      mode: createDelivery.transportMode,
      vehicle: {
        vehicleId: createDelivery.transportVehicleVehicleId,
        plateNumber: createDelivery.transportVehiclePlateNumber,
        driverName: createDelivery.transportVehicleDriverName,
        driverPhone: createDelivery.transportVehicleDriverPhone,
      },
      carrier: createDelivery.transportCarrier,
    },

    tracking: {
      trackingNumber: createDelivery.trackingTrackingNumber,
      trackingUrl: createDelivery.trackingTrackingUrl,
      currentLocation: createDelivery.trackingCurrentLocation,
      lastUpdated: createDelivery.trackingLastUpdated,
    },

    schedule: {
      dispatchDate: createDelivery.scheduleDispatchDate,
      estimatedArrival: createDelivery.scheduleEstimatedArrival,
      actualArrival: createDelivery.scheduleActualArrival,
    },

    proofOfDelivery: {
      receivedBy: createDelivery.proofOfDeliveryReceivedBy,
      signatureUrl: createDelivery.proofOfDeliverySignatureUrl,
      receivedAt: createDelivery.proofOfDeliveryReceivedAt,
      notes: createDelivery.proofOfDeliveryNotes,
    },

    exceptions: [
      {
        type: createDelivery.exceptionsType_1,
        description: createDelivery.exceptionsDescription_1,
        reportedAt: createDelivery.exceptionsReportedAt_1,
      },
    ],

    financials: {
      shippingCost: createDelivery.financialsShippingCost,
      currency: createDelivery.financialsCurrency,
      paid: createDelivery.financialsPaid,
    },

    createdBy: createDelivery.createdBy,
    createdAt: createDelivery.createdAt,

    auditTrail: [
      {
        action: createDelivery.auditTrailAction_1,
        by: createDelivery.auditTrailBy_1,
        timestamp: createDelivery.auditTrailTimestamp_1,
      },
      {
        action: createDelivery.auditTrailAction_2,
        by: createDelivery.auditTrailBy_2,
        timestamp: createDelivery.auditTrailTimestamp_2,
      },
    ],
  };

  async function apiPostDelivery() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/stock_management/post_delivery`,
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
    <div id="createCont" className="fx-cl space2">
      <h2>Record Recieved Orders</h2>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => apiPostDelivery()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Delivery ID"
          value={createDelivery.deliveryId}
          onChange={(e) => setcreateDelivery({ deliveryId: e.target.value })}
        />
        <input
          placeholder="Delivery Type"
          value={createDelivery.deliveryType}
          onChange={(e) => setcreateDelivery({ deliveryType: e.target.value })}
        />

        {/* REFERENCE */}
        <input
          placeholder="Reference Type"
          value={createDelivery.referenceReferenceType}
          onChange={(e) =>
            setcreateDelivery({
              referenceReferenceType: e.target.value,
            })
          }
        />
        <input
          placeholder="Reference ID"
          value={createDelivery.referenceReferenceId}
          onChange={(e) =>
            setcreateDelivery({
              referenceReferenceId: e.target.value,
            })
          }
        />

        {/* STATUS */}
        <input
          placeholder="Current Status"
          value={createDelivery.statusCurrent}
          onChange={(e) => setcreateDelivery({ statusCurrent: e.target.value })}
        />

        {/* STATUS HISTORY */}
        <h4>Status History</h4>
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <input
              placeholder={`State ${i}`}
              value={createDelivery[`statusHistoryState_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`statusHistoryState_${i}`]: e.target.value,
                })
              }
            />
            <input
              placeholder={`Timestamp ${i}`}
              value={createDelivery[`statusHistoryTimestamp_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`statusHistoryTimestamp_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* PARTIES - SUPPLIER */}
        <input
          placeholder="Supplier ID"
          value={createDelivery.partiesSupplierSupplierId}
          onChange={(e) =>
            setcreateDelivery({
              partiesSupplierSupplierId: e.target.value,
            })
          }
        />
        <input
          placeholder="Supplier Name"
          value={createDelivery.partiesSupplierName}
          onChange={(e) =>
            setcreateDelivery({
              partiesSupplierName: e.target.value,
            })
          }
        />
        <input
          placeholder="Supplier Contact"
          value={createDelivery.partiesSupplierContact}
          onChange={(e) =>
            setcreateDelivery({
              partiesSupplierContact: e.target.value,
            })
          }
        />

        {/* WAREHOUSE */}
        <input
          placeholder="Warehouse ID"
          value={createDelivery.partiesWarehouseWarehouseId}
          onChange={(e) =>
            setcreateDelivery({
              partiesWarehouseWarehouseId: e.target.value,
            })
          }
        />
        <input
          placeholder="Warehouse Name"
          value={createDelivery.partiesWarehouseName}
          onChange={(e) =>
            setcreateDelivery({
              partiesWarehouseName: e.target.value,
            })
          }
        />
        <input
          placeholder="Warehouse Location"
          value={createDelivery.partiesWarehouseLocation}
          onChange={(e) =>
            setcreateDelivery({
              partiesWarehouseLocation: e.target.value,
            })
          }
        />

        {/* ITEMS */}
        <h4>Items</h4>
        {[1, 2].map((i) => (
          <div key={i}>
            <input
              placeholder="Product ID"
              value={createDelivery[`itemsProductId_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`itemsProductId_${i}`]: e.target.value,
                })
              }
            />
            <input
              placeholder="Name"
              value={createDelivery[`itemsName_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`itemsName_${i}`]: e.target.value,
                })
              }
            />
            <input
              type="number"
              placeholder="Ordered Qty"
              value={createDelivery[`itemsOrderedQuantity_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`itemsOrderedQuantity_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              placeholder="Shipped Qty"
              value={createDelivery[`itemsShippedQuantity_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`itemsShippedQuantity_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              placeholder="Received Qty"
              value={createDelivery[`itemsReceivedQuantity_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`itemsReceivedQuantity_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              placeholder="Damaged Qty"
              value={createDelivery[`itemsDamagedQuantity_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`itemsDamagedQuantity_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              placeholder="Unit"
              value={createDelivery[`itemsUnit_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`itemsUnit_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* TRANSPORT */}
        <input
          placeholder="Mode"
          value={createDelivery.transportMode}
          onChange={(e) => setcreateDelivery({ transportMode: e.target.value })}
        />
        <input
          placeholder="Vehicle ID"
          value={createDelivery.transportVehicleVehicleId}
          onChange={(e) =>
            setcreateDelivery({
              transportVehicleVehicleId: e.target.value,
            })
          }
        />
        <input
          placeholder="Plate Number"
          value={createDelivery.transportVehiclePlateNumber}
          onChange={(e) =>
            setcreateDelivery({
              transportVehiclePlateNumber: e.target.value,
            })
          }
        />
        <input
          placeholder="Driver Name"
          value={createDelivery.transportVehicleDriverName}
          onChange={(e) =>
            setcreateDelivery({
              transportVehicleDriverName: e.target.value,
            })
          }
        />
        <input
          placeholder="Driver Phone"
          value={createDelivery.transportVehicleDriverPhone}
          onChange={(e) =>
            setcreateDelivery({
              transportVehicleDriverPhone: e.target.value,
            })
          }
        />
        <input
          placeholder="Carrier"
          value={createDelivery.transportCarrier}
          onChange={(e) =>
            setcreateDelivery({
              transportCarrier: e.target.value,
            })
          }
        />

        {/* TRACKING */}
        <input
          placeholder="Tracking Number"
          value={createDelivery.trackingTrackingNumber}
          onChange={(e) =>
            setcreateDelivery({
              trackingTrackingNumber: e.target.value,
            })
          }
        />
        <input
          placeholder="Tracking URL"
          value={createDelivery.trackingTrackingUrl}
          onChange={(e) =>
            setcreateDelivery({
              trackingTrackingUrl: e.target.value,
            })
          }
        />
        <input
          placeholder="Current Location"
          value={createDelivery.trackingCurrentLocation}
          onChange={(e) =>
            setcreateDelivery({
              trackingCurrentLocation: e.target.value,
            })
          }
        />
        <input
          placeholder="Last Updated"
          value={createDelivery.trackingLastUpdated}
          onChange={(e) =>
            setcreateDelivery({
              trackingLastUpdated: e.target.value,
            })
          }
        />

        {/* SCHEDULE */}
        <input
          placeholder="Dispatch Date"
          value={createDelivery.scheduleDispatchDate}
          onChange={(e) =>
            setcreateDelivery({
              scheduleDispatchDate: e.target.value,
            })
          }
        />
        <input
          placeholder="Estimated Arrival"
          value={createDelivery.scheduleEstimatedArrival}
          onChange={(e) =>
            setcreateDelivery({
              scheduleEstimatedArrival: e.target.value,
            })
          }
        />
        <input
          placeholder="Actual Arrival"
          value={createDelivery.scheduleActualArrival || ""}
          onChange={(e) =>
            setcreateDelivery({
              scheduleActualArrival: e.target.value,
            })
          }
        />

        {/* EXCEPTIONS */}
        <input
          placeholder="Exception Type"
          value={createDelivery.exceptionsType_1}
          onChange={(e) =>
            setcreateDelivery({
              exceptionsType_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Description"
          value={createDelivery.exceptionsDescription_1}
          onChange={(e) =>
            setcreateDelivery({
              exceptionsDescription_1: e.target.value,
            })
          }
        />
        <input
          placeholder="Reported At"
          value={createDelivery.exceptionsReportedAt_1}
          onChange={(e) =>
            setcreateDelivery({
              exceptionsReportedAt_1: e.target.value,
            })
          }
        />

        {/* FINANCIALS */}
        <input
          type="number"
          placeholder="Shipping Cost"
          value={createDelivery.financialsShippingCost}
          onChange={(e) =>
            setcreateDelivery({
              financialsShippingCost: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Currency"
          value={createDelivery.financialsCurrency}
          onChange={(e) =>
            setcreateDelivery({
              financialsCurrency: e.target.value,
            })
          }
        />
        <input
          type="checkbox"
          checked={createDelivery.financialsPaid}
          onChange={(e) =>
            setcreateDelivery({
              financialsPaid: e.target.checked,
            })
          }
        />

        {/* AUDIT */}
        <h4>Audit</h4>
        {[1, 2].map((i) => (
          <div key={i}>
            <input
              placeholder="Action"
              value={createDelivery[`auditTrailAction_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`auditTrailAction_${i}`]: e.target.value,
                })
              }
            />
            <input
              placeholder="By"
              value={createDelivery[`auditTrailBy_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`auditTrailBy_${i}`]: e.target.value,
                })
              }
            />
            <input
              placeholder="Timestamp"
              value={createDelivery[`auditTrailTimestamp_${i}`]}
              onChange={(e) =>
                setcreateDelivery({
                  [`auditTrailTimestamp_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
