import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function TransferStuff() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [transferPayload, settransferPayload] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      transferId: "TRF-2026-000112",
      transferType: "INTERNAL",

      statusCurrent: "IN_TRANSIT",

      statusHistoryState_1: "CREATED",
      statusHistoryTimestamp_1: "2026-04-30T08:00:00Z",

      statusHistoryState_2: "APPROVED",
      statusHistoryTimestamp_2: "2026-04-30T09:00:00Z",

      statusHistoryState_3: "DISPATCHED",
      statusHistoryTimestamp_3: "2026-04-30T10:30:00Z",

      locationsFromLocationId: "LOC-WH-01",
      locationsFromType: "WAREHOUSE",
      locationsFromName: "Main Warehouse",
      locationsFromAddress: "Ikeja, Lagos",

      locationsToLocationId: "LOC-SHOP-02",
      locationsToType: "SHOP_FLOOR",
      locationsToName: "Retail Shop Floor",
      locationsToAddress: "Surulere, Lagos",

      itemsProductId_1: "PRD-1001",
      itemsName_1: "Peak Milk",
      itemsSku_1: "PM-200",
      itemsQuantityRequested_1: 50,
      itemsQuantityDispatched_1: 50,
      itemsQuantityReceived_1: 0,
      itemsUnit_1: "Cartons",

      transportMode: "ROAD",
      transportVehicleVehicleId: "VEH-010",
      transportVehiclePlateNumber: "LAG-556-AA",
      transportVehicleDriverName: "Sani Bello",
      transportVehicleDriverPhone: "+2348011122233",

      scheduleRequestedDate: "2026-04-30T08:00:00Z",
      scheduleDispatchDate: "2026-04-30T10:30:00Z",
      scheduleExpectedArrival: "2026-04-30T14:00:00Z",
      scheduleActualArrival: null,

      inventoryImpactSourceDeducted: true,
      inventoryImpactDestinationAdded: false,

      approvalRequired: true,
      approvalApprovedBy: "USR-2002",
      approvalApprovedAt: "2026-04-30T09:00:00Z",

      notes: "Restocking shop floor for daily sales",

      createdBy: "USR-1001",
      createdAt: "2026-04-30T08:00:00Z",

      auditTrailAction_1: "CREATED",
      auditTrailBy_1: "USR-1001",
      auditTrailTimestamp_1: "2026-04-30T08:00:00Z",

      auditTrailAction_2: "APPROVED",
      auditTrailBy_2: "USR-2002",
      auditTrailTimestamp_2: "2026-04-30T09:00:00Z",

      auditTrailAction_3: "DISPATCHED",
      auditTrailBy_3: "USR-1003",
      auditTrailTimestamp_3: "2026-04-30T10:30:00Z",
    },
  );

  const payload = {
    transferId: transferPayload.transferId,
    transferType: transferPayload.transferType,

    status: {
      current: transferPayload.statusCurrent,
      history: [
        {
          state: transferPayload.statusHistoryState_1,
          timestamp: transferPayload.statusHistoryTimestamp_1,
        },
        {
          state: transferPayload.statusHistoryState_2,
          timestamp: transferPayload.statusHistoryTimestamp_2,
        },
        {
          state: transferPayload.statusHistoryState_3,
          timestamp: transferPayload.statusHistoryTimestamp_3,
        },
      ],
    },

    locations: {
      from: {
        locationId: transferPayload.locationsFromLocationId,
        type: transferPayload.locationsFromType,
        name: transferPayload.locationsFromName,
        address: transferPayload.locationsFromAddress,
      },
      to: {
        locationId: transferPayload.locationsToLocationId,
        type: transferPayload.locationsToType,
        name: transferPayload.locationsToName,
        address: transferPayload.locationsToAddress,
      },
    },

    items: [
      {
        productId: transferPayload.itemsProductId_1,
        name: transferPayload.itemsName_1,
        sku: transferPayload.itemsSku_1,
        quantityRequested: transferPayload.itemsQuantityRequested_1,
        quantityDispatched: transferPayload.itemsQuantityDispatched_1,
        quantityReceived: transferPayload.itemsQuantityReceived_1,
        unit: transferPayload.itemsUnit_1,
      },
    ],

    transport: {
      mode: transferPayload.transportMode,
      vehicle: {
        vehicleId: transferPayload.transportVehicleVehicleId,
        plateNumber: transferPayload.transportVehiclePlateNumber,
        driverName: transferPayload.transportVehicleDriverName,
        driverPhone: transferPayload.transportVehicleDriverPhone,
      },
    },

    schedule: {
      requestedDate: transferPayload.scheduleRequestedDate,
      dispatchDate: transferPayload.scheduleDispatchDate,
      expectedArrival: transferPayload.scheduleExpectedArrival,
      actualArrival: transferPayload.scheduleActualArrival,
    },

    inventoryImpact: {
      sourceDeducted: transferPayload.inventoryImpactSourceDeducted,
      destinationAdded: transferPayload.inventoryImpactDestinationAdded,
    },

    approval: {
      required: transferPayload.approvalRequired,
      approvedBy: transferPayload.approvalApprovedBy,
      approvedAt: transferPayload.approvalApprovedAt,
    },

    notes: transferPayload.notes,

    createdBy: transferPayload.createdBy,
    createdAt: transferPayload.createdAt,

    auditTrail: [
      {
        action: transferPayload.auditTrailAction_1,
        by: transferPayload.auditTrailBy_1,
        timestamp: transferPayload.auditTrailTimestamp_1,
      },
      {
        action: transferPayload.auditTrailAction_2,
        by: transferPayload.auditTrailBy_2,
        timestamp: transferPayload.auditTrailTimestamp_2,
      },
      {
        action: transferPayload.auditTrailAction_3,
        by: transferPayload.auditTrailBy_3,
        timestamp: transferPayload.auditTrailTimestamp_3,
      },
    ],
  };

  async function executeTransfers() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/stock_management/execute_transfers`,
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
    <div className="transfer-stuff-container fx-cl space2">
      <h2>Execute Transfer</h2>
      <button onClick={executeTransfers} disabled={loading}>
        {loading ? "Processing..." : "Execute Transfer"}
      </button>

      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        {/* BASIC INFO */}
        <input
          placeholder="Transfer ID"
          value={transferPayload.transferId}
          onChange={(e) => settransferPayload({ transferId: e.target.value })}
        />
        <input
          placeholder="Transfer Type"
          value={transferPayload.transferType}
          onChange={(e) => settransferPayload({ transferType: e.target.value })}
        />

        {/* STATUS */}
        <input
          placeholder="Current Status"
          value={transferPayload.statusCurrent}
          onChange={(e) =>
            settransferPayload({ statusCurrent: e.target.value })
          }
        />

        {/* STATUS HISTORY */}
        <h4>Status History</h4>
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <input
              placeholder={`State ${i}`}
              value={transferPayload[`statusHistoryState_${i}`]}
              onChange={(e) =>
                settransferPayload({
                  [`statusHistoryState_${i}`]: e.target.value,
                })
              }
            />
            <input
              placeholder={`Timestamp ${i}`}
              value={transferPayload[`statusHistoryTimestamp_${i}`]}
              onChange={(e) =>
                settransferPayload({
                  [`statusHistoryTimestamp_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* FROM LOCATION */}
        <h4>From Location</h4>
        <input
          placeholder="Location ID"
          value={transferPayload.locationsFromLocationId}
          onChange={(e) =>
            settransferPayload({
              locationsFromLocationId: e.target.value,
            })
          }
        />
        <input
          placeholder="Type"
          value={transferPayload.locationsFromType}
          onChange={(e) =>
            settransferPayload({
              locationsFromType: e.target.value,
            })
          }
        />
        <input
          placeholder="Name"
          value={transferPayload.locationsFromName}
          onChange={(e) =>
            settransferPayload({
              locationsFromName: e.target.value,
            })
          }
        />
        <input
          placeholder="Address"
          value={transferPayload.locationsFromAddress}
          onChange={(e) =>
            settransferPayload({
              locationsFromAddress: e.target.value,
            })
          }
        />

        {/* TO LOCATION */}
        <h4>To Location</h4>
        <input
          placeholder="Location ID"
          value={transferPayload.locationsToLocationId}
          onChange={(e) =>
            settransferPayload({
              locationsToLocationId: e.target.value,
            })
          }
        />
        <input
          placeholder="Type"
          value={transferPayload.locationsToType}
          onChange={(e) =>
            settransferPayload({
              locationsToType: e.target.value,
            })
          }
        />
        <input
          placeholder="Name"
          value={transferPayload.locationsToName}
          onChange={(e) =>
            settransferPayload({
              locationsToName: e.target.value,
            })
          }
        />
        <input
          placeholder="Address"
          value={transferPayload.locationsToAddress}
          onChange={(e) =>
            settransferPayload({
              locationsToAddress: e.target.value,
            })
          }
        />

        {/* ITEMS */}
        <h4>Item</h4>
        <input
          placeholder="Product ID"
          value={transferPayload.itemsProductId_1}
          onChange={(e) =>
            settransferPayload({ itemsProductId_1: e.target.value })
          }
        />
        <input
          placeholder="Name"
          value={transferPayload.itemsName_1}
          onChange={(e) => settransferPayload({ itemsName_1: e.target.value })}
        />
        <input
          placeholder="SKU"
          value={transferPayload.itemsSku_1}
          onChange={(e) => settransferPayload({ itemsSku_1: e.target.value })}
        />
        <input
          type="number"
          placeholder="Qty Requested"
          value={transferPayload.itemsQuantityRequested_1}
          onChange={(e) =>
            settransferPayload({
              itemsQuantityRequested_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Qty Dispatched"
          value={transferPayload.itemsQuantityDispatched_1}
          onChange={(e) =>
            settransferPayload({
              itemsQuantityDispatched_1: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Qty Received"
          value={transferPayload.itemsQuantityReceived_1}
          onChange={(e) =>
            settransferPayload({
              itemsQuantityReceived_1: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Unit"
          value={transferPayload.itemsUnit_1}
          onChange={(e) => settransferPayload({ itemsUnit_1: e.target.value })}
        />

        {/* TRANSPORT */}
        <input
          placeholder="Mode"
          value={transferPayload.transportMode}
          onChange={(e) =>
            settransferPayload({ transportMode: e.target.value })
          }
        />
        <input
          placeholder="Vehicle ID"
          value={transferPayload.transportVehicleVehicleId}
          onChange={(e) =>
            settransferPayload({
              transportVehicleVehicleId: e.target.value,
            })
          }
        />
        <input
          placeholder="Plate Number"
          value={transferPayload.transportVehiclePlateNumber}
          onChange={(e) =>
            settransferPayload({
              transportVehiclePlateNumber: e.target.value,
            })
          }
        />
        <input
          placeholder="Driver Name"
          value={transferPayload.transportVehicleDriverName}
          onChange={(e) =>
            settransferPayload({
              transportVehicleDriverName: e.target.value,
            })
          }
        />
        <input
          placeholder="Driver Phone"
          value={transferPayload.transportVehicleDriverPhone}
          onChange={(e) =>
            settransferPayload({
              transportVehicleDriverPhone: e.target.value,
            })
          }
        />

        {/* SCHEDULE */}
        <input
          placeholder="Requested Date"
          value={transferPayload.scheduleRequestedDate}
          onChange={(e) =>
            settransferPayload({
              scheduleRequestedDate: e.target.value,
            })
          }
        />
        <input
          placeholder="Dispatch Date"
          value={transferPayload.scheduleDispatchDate}
          onChange={(e) =>
            settransferPayload({
              scheduleDispatchDate: e.target.value,
            })
          }
        />
        <input
          placeholder="Expected Arrival"
          value={transferPayload.scheduleExpectedArrival}
          onChange={(e) =>
            settransferPayload({
              scheduleExpectedArrival: e.target.value,
            })
          }
        />
        <input
          placeholder="Actual Arrival"
          value={transferPayload.scheduleActualArrival || ""}
          onChange={(e) =>
            settransferPayload({
              scheduleActualArrival: e.target.value,
            })
          }
        />

        {/* INVENTORY IMPACT */}
        <input
          type="checkbox"
          checked={transferPayload.inventoryImpactSourceDeducted}
          onChange={(e) =>
            settransferPayload({
              inventoryImpactSourceDeducted: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={transferPayload.inventoryImpactDestinationAdded}
          onChange={(e) =>
            settransferPayload({
              inventoryImpactDestinationAdded: e.target.checked,
            })
          }
        />

        {/* APPROVAL */}
        <input
          type="checkbox"
          checked={transferPayload.approvalRequired}
          onChange={(e) =>
            settransferPayload({
              approvalRequired: e.target.checked,
            })
          }
        />
        <input
          placeholder="Approved By"
          value={transferPayload.approvalApprovedBy}
          onChange={(e) =>
            settransferPayload({
              approvalApprovedBy: e.target.value,
            })
          }
        />
        <input
          placeholder="Approved At"
          value={transferPayload.approvalApprovedAt}
          onChange={(e) =>
            settransferPayload({
              approvalApprovedAt: e.target.value,
            })
          }
        />

        {/* NOTES */}
        <input
          placeholder="Notes"
          value={transferPayload.notes}
          onChange={(e) => settransferPayload({ notes: e.target.value })}
        />

        {/* AUDIT */}
        <h4>Audit Trail</h4>
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <input
              placeholder="Action"
              value={transferPayload[`auditTrailAction_${i}`]}
              onChange={(e) =>
                settransferPayload({
                  [`auditTrailAction_${i}`]: e.target.value,
                })
              }
            />
            <input
              placeholder="By"
              value={transferPayload[`auditTrailBy_${i}`]}
              onChange={(e) =>
                settransferPayload({
                  [`auditTrailBy_${i}`]: e.target.value,
                })
              }
            />
            <input
              placeholder="Timestamp"
              value={transferPayload[`auditTrailTimestamp_${i}`]}
              onChange={(e) =>
                settransferPayload({
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
