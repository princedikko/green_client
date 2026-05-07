import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function ReconcileStocks() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [reconciliationPayload, setreconciliationPayload] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      reconciliationId: "REC-2026-000045",
      reconciliationType: "CYCLE_COUNT",

      statusCurrent: "COMPLETED",
      statusStartedAt: "2026-04-30T07:00:00Z",
      statusCompletedAt: "2026-04-30T12:30:00Z",

      locationLocationId: "LOC-WH-01",
      locationType: "WAREHOUSE",
      locationName: "Main Warehouse",
      locationAddress: "Ikeja, Lagos",

      conductedByUserId: "USR-3001",
      conductedByName: "Inventory Officer",

      approvedByUserId: "USR-2001",
      approvedByName: "Supervisor",
      approvedByApprovedAt: "2026-04-30T13:00:00Z",

      itemsProductId_1: "PRD-1001",
      itemsName_1: "Peak Milk",
      itemsSku_1: "PM-200",
      itemsSystemQuantity_1: 200,
      itemsPhysicalQuantity_1: 190,
      itemsVariance_1: -10,
      itemsVarianceType_1: "SHORTAGE",
      itemsReason_1: "Possible theft or miscount",
      itemsAdjustmentRequired_1: true,

      itemsProductId_2: "PRD-1002",
      itemsName_2: "Coca Cola",
      itemsSku_2: "CC-300",
      itemsSystemQuantity_2: 300,
      itemsPhysicalQuantity_2: 305,
      itemsVariance_2: 5,
      itemsVarianceType_2: "OVERAGE",
      itemsReason_2: "Scanning error during sales",
      itemsAdjustmentRequired_2: true,

      summaryTotalItemsChecked: 2,
      summaryTotalShortage: 10,
      summaryTotalOverage: 5,
      summaryNetVariance: -5,

      inventoryAdjustmentAdjustmentId: "ADJ-2026-000078",
      inventoryAdjustmentStatus: "POSTED",
      inventoryAdjustmentAdjustedAt: "2026-04-30T14:00:00Z",

      methodCountMethod: "MANUAL",
      methodFrequency: "WEEKLY",
      methodNotes: "Routine weekly stock verification",

      attachmentsType_1: "IMAGE",
      attachmentsUrl_1: "https://cdn.example.com/reconciliation/photo1.jpg",

      exceptionsType_1: "THEFT_SUSPECTED",
      exceptionsDescription_1: "Repeated shortage detected for Peak Milk",
      exceptionsReportedAt_1: "2026-04-30T12:45:00Z",

      createdAt: "2026-04-30T07:00:00Z",

      auditTrailAction_1: "STARTED",
      auditTrailBy_1: "USR-3001",
      auditTrailTimestamp_1: "2026-04-30T07:00:00Z",

      auditTrailAction_2: "COMPLETED",
      auditTrailBy_2: "USR-3001",
      auditTrailTimestamp_2: "2026-04-30T12:30:00Z",

      auditTrailAction_3: "APPROVED",
      auditTrailBy_3: "USR-2001",
      auditTrailTimestamp_3: "2026-04-30T13:00:00Z",
    },
  );

  const payload = {
    reconciliationId: reconciliationPayload.reconciliationId,
    reconciliationType: reconciliationPayload.reconciliationType,

    status: {
      current: reconciliationPayload.statusCurrent,
      startedAt: reconciliationPayload.statusStartedAt,
      completedAt: reconciliationPayload.statusCompletedAt,
    },

    location: {
      locationId: reconciliationPayload.locationLocationId,
      type: reconciliationPayload.locationType,
      name: reconciliationPayload.locationName,
      address: reconciliationPayload.locationAddress,
    },

    conductedBy: {
      userId: reconciliationPayload.conductedByUserId,
      name: reconciliationPayload.conductedByName,
    },

    approvedBy: {
      userId: reconciliationPayload.approvedByUserId,
      name: reconciliationPayload.approvedByName,
      approvedAt: reconciliationPayload.approvedByApprovedAt,
    },

    items: [
      {
        productId: reconciliationPayload.itemsProductId_1,
        name: reconciliationPayload.itemsName_1,
        sku: reconciliationPayload.itemsSku_1,

        systemQuantity: reconciliationPayload.itemsSystemQuantity_1,
        physicalQuantity: reconciliationPayload.itemsPhysicalQuantity_1,

        variance: reconciliationPayload.itemsVariance_1,
        varianceType: reconciliationPayload.itemsVarianceType_1,

        reason: reconciliationPayload.itemsReason_1,
        adjustmentRequired: reconciliationPayload.itemsAdjustmentRequired_1,
      },
      {
        productId: reconciliationPayload.itemsProductId_2,
        name: reconciliationPayload.itemsName_2,
        sku: reconciliationPayload.itemsSku_2,

        systemQuantity: reconciliationPayload.itemsSystemQuantity_2,
        physicalQuantity: reconciliationPayload.itemsPhysicalQuantity_2,

        variance: reconciliationPayload.itemsVariance_2,
        varianceType: reconciliationPayload.itemsVarianceType_2,

        reason: reconciliationPayload.itemsReason_2,
        adjustmentRequired: reconciliationPayload.itemsAdjustmentRequired_2,
      },
    ],

    summary: {
      totalItemsChecked: reconciliationPayload.summaryTotalItemsChecked,
      totalShortage: reconciliationPayload.summaryTotalShortage,
      totalOverage: reconciliationPayload.summaryTotalOverage,
      netVariance: reconciliationPayload.summaryNetVariance,
    },

    inventoryAdjustment: {
      adjustmentId: reconciliationPayload.inventoryAdjustmentAdjustmentId,
      status: reconciliationPayload.inventoryAdjustmentStatus,
      adjustedAt: reconciliationPayload.inventoryAdjustmentAdjustedAt,
    },

    method: {
      countMethod: reconciliationPayload.methodCountMethod,
      frequency: reconciliationPayload.methodFrequency,
      notes: reconciliationPayload.methodNotes,
    },

    attachments: [
      {
        type: reconciliationPayload.attachmentsType_1,
        url: reconciliationPayload.attachmentsUrl_1,
      },
    ],

    exceptions: [
      {
        type: reconciliationPayload.exceptionsType_1,
        description: reconciliationPayload.exceptionsDescription_1,
        reportedAt: reconciliationPayload.exceptionsReportedAt_1,
      },
    ],

    createdAt: reconciliationPayload.createdAt,

    auditTrail: [
      {
        action: reconciliationPayload.auditTrailAction_1,
        by: reconciliationPayload.auditTrailBy_1,
        timestamp: reconciliationPayload.auditTrailTimestamp_1,
      },
      {
        action: reconciliationPayload.auditTrailAction_2,
        by: reconciliationPayload.auditTrailBy_2,
        timestamp: reconciliationPayload.auditTrailTimestamp_2,
      },
      {
        action: reconciliationPayload.auditTrailAction_3,
        by: reconciliationPayload.auditTrailBy_3,
        timestamp: reconciliationPayload.auditTrailTimestamp_3,
      },
    ],
  };

  async function apiPostReconciliation() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/stock_management/stock-reconciliation`,
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
      <h2 className="head-title">Reconcile Stocks</h2>
      <button
        className="btn"
        onClick={apiPostReconciliation}
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit Reconciliation"}
      </button>

      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        {/* RECONCILIATION */}
        <input
          value={reconciliationPayload.reconciliationId || ""}
          onChange={(e) =>
            setreconciliationPayload({ reconciliationId: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.reconciliationType || ""}
          onChange={(e) =>
            setreconciliationPayload({ reconciliationType: e.target.value })
          }
        />

        {/* STATUS */}
        <input
          value={reconciliationPayload.statusCurrent || ""}
          onChange={(e) =>
            setreconciliationPayload({ statusCurrent: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.statusStartedAt || ""}
          onChange={(e) =>
            setreconciliationPayload({ statusStartedAt: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.statusCompletedAt || ""}
          onChange={(e) =>
            setreconciliationPayload({ statusCompletedAt: e.target.value })
          }
        />

        {/* LOCATION */}
        <input
          value={reconciliationPayload.locationLocationId || ""}
          onChange={(e) =>
            setreconciliationPayload({ locationLocationId: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.locationType || ""}
          onChange={(e) =>
            setreconciliationPayload({ locationType: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.locationName || ""}
          onChange={(e) =>
            setreconciliationPayload({ locationName: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.locationAddress || ""}
          onChange={(e) =>
            setreconciliationPayload({ locationAddress: e.target.value })
          }
        />

        {/* CONDUCTED BY */}
        <input
          value={reconciliationPayload.conductedByUserId || ""}
          onChange={(e) =>
            setreconciliationPayload({ conductedByUserId: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.conductedByName || ""}
          onChange={(e) =>
            setreconciliationPayload({ conductedByName: e.target.value })
          }
        />

        {/* APPROVAL */}
        <input
          value={reconciliationPayload.approvedByUserId || ""}
          onChange={(e) =>
            setreconciliationPayload({ approvedByUserId: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.approvedByName || ""}
          onChange={(e) =>
            setreconciliationPayload({ approvedByName: e.target.value })
          }
        />
        <input
          value={reconciliationPayload.approvedByApprovedAt || ""}
          onChange={(e) =>
            setreconciliationPayload({ approvedByApprovedAt: e.target.value })
          }
        />

        {/* ITEMS */}
        {[1, 2].map((i) => (
          <div key={i}>
            <input
              value={reconciliationPayload[`itemsProductId_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsProductId_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`itemsName_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsName_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`itemsSku_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsSku_${i}`]: e.target.value,
                })
              }
            />
            <input
              type="number"
              value={reconciliationPayload[`itemsSystemQuantity_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsSystemQuantity_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              value={reconciliationPayload[`itemsPhysicalQuantity_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsPhysicalQuantity_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              value={reconciliationPayload[`itemsVariance_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsVariance_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              value={reconciliationPayload[`itemsVarianceType_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsVarianceType_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`itemsReason_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsReason_${i}`]: e.target.value,
                })
              }
            />
            <input
              type="checkbox"
              checked={
                reconciliationPayload[`itemsAdjustmentRequired_${i}`] || false
              }
              onChange={(e) =>
                setreconciliationPayload({
                  [`itemsAdjustmentRequired_${i}`]: e.target.checked,
                })
              }
            />
          </div>
        ))}

        {/* SUMMARY */}
        <input
          type="number"
          value={reconciliationPayload.summaryTotalItemsChecked || ""}
          onChange={(e) =>
            setreconciliationPayload({
              summaryTotalItemsChecked: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={reconciliationPayload.summaryTotalShortage || ""}
          onChange={(e) =>
            setreconciliationPayload({
              summaryTotalShortage: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={reconciliationPayload.summaryTotalOverage || ""}
          onChange={(e) =>
            setreconciliationPayload({
              summaryTotalOverage: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={reconciliationPayload.summaryNetVariance || ""}
          onChange={(e) =>
            setreconciliationPayload({
              summaryNetVariance: Number(e.target.value),
            })
          }
        />

        {/* INVENTORY ADJUSTMENT */}
        <input
          value={reconciliationPayload.inventoryAdjustmentAdjustmentId || ""}
          onChange={(e) =>
            setreconciliationPayload({
              inventoryAdjustmentAdjustmentId: e.target.value,
            })
          }
        />
        <input
          value={reconciliationPayload.inventoryAdjustmentStatus || ""}
          onChange={(e) =>
            setreconciliationPayload({
              inventoryAdjustmentStatus: e.target.value,
            })
          }
        />
        <input
          value={reconciliationPayload.inventoryAdjustmentAdjustedAt || ""}
          onChange={(e) =>
            setreconciliationPayload({
              inventoryAdjustmentAdjustedAt: e.target.value,
            })
          }
        />

        {/* METHOD */}
        <input
          value={reconciliationPayload.methodCountMethod || ""}
          onChange={(e) =>
            setreconciliationPayload({
              methodCountMethod: e.target.value,
            })
          }
        />
        <input
          value={reconciliationPayload.methodFrequency || ""}
          onChange={(e) =>
            setreconciliationPayload({
              methodFrequency: e.target.value,
            })
          }
        />
        <input
          value={reconciliationPayload.methodNotes || ""}
          onChange={(e) =>
            setreconciliationPayload({
              methodNotes: e.target.value,
            })
          }
        />

        {/* ATTACHMENTS */}
        {[1].map((i) => (
          <div key={i}>
            <input
              value={reconciliationPayload[`attachmentsType_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`attachmentsType_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`attachmentsUrl_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`attachmentsUrl_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* EXCEPTIONS */}
        {[1].map((i) => (
          <div key={i}>
            <input
              value={reconciliationPayload[`exceptionsType_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`exceptionsType_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`exceptionsDescription_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`exceptionsDescription_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`exceptionsReportedAt_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`exceptionsReportedAt_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* AUDIT */}
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <input
              value={reconciliationPayload[`auditTrailAction_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`auditTrailAction_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`auditTrailBy_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`auditTrailBy_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={reconciliationPayload[`auditTrailTimestamp_${i}`] || ""}
              onChange={(e) =>
                setreconciliationPayload({
                  [`auditTrailTimestamp_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* META */}
        <input
          value={reconciliationPayload.createdAt || ""}
          onChange={(e) =>
            setreconciliationPayload({ createdAt: e.target.value })
          }
        />
      </div>
    </div>
  );
}
