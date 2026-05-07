import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function AdjustStocks() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [stocksAdjustPayload, setstocksAdjustPayload] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      adjustmentId: "ADJ-2026-000078",
      adjustmentType: "RECONCILIATION",

      referenceReferenceType: "RECONCILIATION",
      referenceReferenceId: "REC-2026-000045",

      statusCurrent: "POSTED",
      statusCreatedAt: "2026-04-30T13:30:00Z",
      statusPostedAt: "2026-04-30T14:00:00Z",

      locationLocationId: "LOC-WH-01",
      locationType: "WAREHOUSE",
      locationName: "Main Warehouse",

      itemsProductId_1: "PRD-1001",
      itemsName_1: "Peak Milk",
      itemsSku_1: "PM-200",

      itemsSystemQuantityBefore_1: 200,
      itemsPhysicalQuantity_1: 190,
      itemsAdjustmentQuantity_1: -10,
      itemsSystemQuantityAfter_1: 190,
      itemsAdjustmentType_1: "DECREASE",
      itemsReason_1: "Stock shortage from reconciliation",
      itemsDiscrepancyType_1: "SHORTAGE",
      itemsDiscrepancySeverity_1: "HIGH",

      itemsProductId_2: "PRD-1002",
      itemsName_2: "Coca Cola",
      itemsSku_2: "CC-300",

      itemsSystemQuantityBefore_2: 300,
      itemsPhysicalQuantity_2: 305,
      itemsAdjustmentQuantity_2: 5,
      itemsSystemQuantityAfter_2: 305,
      itemsAdjustmentType_2: "INCREASE",
      itemsReason_2: "Stock overage from reconciliation",
      itemsDiscrepancyType_2: "OVERAGE",
      itemsDiscrepancySeverity_2: "LOW",

      summaryTotalAdjustedItems: 2,
      summaryTotalIncrease: 5,
      summaryTotalDecrease: 10,
      summaryNetAdjustment: -5,

      approvalRequired: true,
      approvalApprovedBy: "USR-2001",
      approvalApprovedAt: "2026-04-30T13:50:00Z",

      financialImpactTotalValueIncrease: 4000,
      financialImpactTotalValueDecrease: 12000,
      financialImpactNetValueImpact: -8000,
      financialImpactCurrency: "NGN",

      notes: "Adjustment after weekly stock reconciliation",

      createdBy: "USR-3001",
      createdAt: "2026-04-30T13:30:00Z",

      auditTrailAction_1: "CREATED",
      auditTrailBy_1: "USR-3001",
      auditTrailTimestamp_1: "2026-04-30T13:30:00Z",

      auditTrailAction_2: "APPROVED",
      auditTrailBy_2: "USR-2001",
      auditTrailTimestamp_2: "2026-04-30T13:50:00Z",

      auditTrailAction_3: "POSTED",
      auditTrailBy_3: "USR-3001",
      auditTrailTimestamp_3: "2026-04-30T14:00:00Z",
    },
  );

  const payload = {
    adjustmentId: stocksAdjustPayload.adjustmentId,
    adjustmentType: stocksAdjustPayload.adjustmentType,

    reference: {
      referenceType: stocksAdjustPayload.referenceReferenceType,
      referenceId: stocksAdjustPayload.referenceReferenceId,
    },

    status: {
      current: stocksAdjustPayload.statusCurrent,
      createdAt: stocksAdjustPayload.statusCreatedAt,
      postedAt: stocksAdjustPayload.statusPostedAt,
    },

    location: {
      locationId: stocksAdjustPayload.locationLocationId,
      type: stocksAdjustPayload.locationType,
      name: stocksAdjustPayload.locationName,
    },

    items: [
      {
        productId: stocksAdjustPayload.itemsProductId_1,
        name: stocksAdjustPayload.itemsName_1,
        sku: stocksAdjustPayload.itemsSku_1,

        systemQuantityBefore: stocksAdjustPayload.itemsSystemQuantityBefore_1,
        physicalQuantity: stocksAdjustPayload.itemsPhysicalQuantity_1,

        adjustmentQuantity: stocksAdjustPayload.itemsAdjustmentQuantity_1,
        systemQuantityAfter: stocksAdjustPayload.itemsSystemQuantityAfter_1,

        adjustmentType: stocksAdjustPayload.itemsAdjustmentType_1,
        reason: stocksAdjustPayload.itemsReason_1,

        discrepancy: {
          type: stocksAdjustPayload.itemsDiscrepancyType_1,
          severity: stocksAdjustPayload.itemsDiscrepancySeverity_1,
        },
      },
      {
        productId: stocksAdjustPayload.itemsProductId_2,
        name: stocksAdjustPayload.itemsName_2,
        sku: stocksAdjustPayload.itemsSku_2,

        systemQuantityBefore: stocksAdjustPayload.itemsSystemQuantityBefore_2,
        physicalQuantity: stocksAdjustPayload.itemsPhysicalQuantity_2,

        adjustmentQuantity: stocksAdjustPayload.itemsAdjustmentQuantity_2,
        systemQuantityAfter: stocksAdjustPayload.itemsSystemQuantityAfter_2,

        adjustmentType: stocksAdjustPayload.itemsAdjustmentType_2,
        reason: stocksAdjustPayload.itemsReason_2,

        discrepancy: {
          type: stocksAdjustPayload.itemsDiscrepancyType_2,
          severity: stocksAdjustPayload.itemsDiscrepancySeverity_2,
        },
      },
    ],

    summary: {
      totalAdjustedItems: stocksAdjustPayload.summaryTotalAdjustedItems,
      totalIncrease: stocksAdjustPayload.summaryTotalIncrease,
      totalDecrease: stocksAdjustPayload.summaryTotalDecrease,
      netAdjustment: stocksAdjustPayload.summaryNetAdjustment,
    },

    approval: {
      required: stocksAdjustPayload.approvalRequired,
      approvedBy: stocksAdjustPayload.approvalApprovedBy,
      approvedAt: stocksAdjustPayload.approvalApprovedAt,
    },

    financialImpact: {
      totalValueIncrease: stocksAdjustPayload.financialImpactTotalValueIncrease,
      totalValueDecrease: stocksAdjustPayload.financialImpactTotalValueDecrease,
      netValueImpact: stocksAdjustPayload.financialImpactNetValueImpact,
      currency: stocksAdjustPayload.financialImpactCurrency,
    },

    notes: stocksAdjustPayload.notes,

    createdBy: stocksAdjustPayload.createdBy,
    createdAt: stocksAdjustPayload.createdAt,

    auditTrail: [
      {
        action: stocksAdjustPayload.auditTrailAction_1,
        by: stocksAdjustPayload.auditTrailBy_1,
        timestamp: stocksAdjustPayload.auditTrailTimestamp_1,
      },
      {
        action: stocksAdjustPayload.auditTrailAction_2,
        by: stocksAdjustPayload.auditTrailBy_2,
        timestamp: stocksAdjustPayload.auditTrailTimestamp_2,
      },
      {
        action: stocksAdjustPayload.auditTrailAction_3,
        by: stocksAdjustPayload.auditTrailBy_3,
        timestamp: stocksAdjustPayload.auditTrailTimestamp_3,
      },
    ],
  };

  async function apiPostAdjustment() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/stock_management/stock-adjustment`,
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

      console.log("Adjustment response:", response);
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
      <h2>Adjust Stocks</h2>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => apiPostAdjustment()}>Post</button>

        {/* ADJUSTMENT */}
        <input
          value={stocksAdjustPayload.adjustmentId || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ adjustmentId: e.target.value })
          }
        />
        <input
          value={stocksAdjustPayload.adjustmentType || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ adjustmentType: e.target.value })
          }
        />

        {/* REFERENCE */}
        <input
          value={stocksAdjustPayload.referenceReferenceType || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              referenceReferenceType: e.target.value,
            })
          }
        />
        <input
          value={stocksAdjustPayload.referenceReferenceId || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              referenceReferenceId: e.target.value,
            })
          }
        />

        {/* STATUS */}
        <input
          value={stocksAdjustPayload.statusCurrent || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ statusCurrent: e.target.value })
          }
        />
        <input
          value={stocksAdjustPayload.statusCreatedAt || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ statusCreatedAt: e.target.value })
          }
        />
        <input
          value={stocksAdjustPayload.statusPostedAt || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ statusPostedAt: e.target.value })
          }
        />

        {/* LOCATION */}
        <input
          value={stocksAdjustPayload.locationLocationId || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ locationLocationId: e.target.value })
          }
        />
        <input
          value={stocksAdjustPayload.locationType || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ locationType: e.target.value })
          }
        />
        <input
          value={stocksAdjustPayload.locationName || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ locationName: e.target.value })
          }
        />

        {/* ITEMS */}
        {[1, 2].map((i) => (
          <div key={i}>
            <input
              value={stocksAdjustPayload[`itemsProductId_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsProductId_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={stocksAdjustPayload[`itemsName_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsName_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={stocksAdjustPayload[`itemsSku_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsSku_${i}`]: e.target.value,
                })
              }
            />

            <input
              type="number"
              value={
                stocksAdjustPayload[`itemsSystemQuantityBefore_${i}`] || ""
              }
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsSystemQuantityBefore_${i}`]: Number(e.target.value),
                })
              }
            />

            <input
              type="number"
              value={stocksAdjustPayload[`itemsPhysicalQuantity_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsPhysicalQuantity_${i}`]: Number(e.target.value),
                })
              }
            />

            <input
              type="number"
              value={stocksAdjustPayload[`itemsAdjustmentQuantity_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsAdjustmentQuantity_${i}`]: Number(e.target.value),
                })
              }
            />

            <input
              type="number"
              value={stocksAdjustPayload[`itemsSystemQuantityAfter_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsSystemQuantityAfter_${i}`]: Number(e.target.value),
                })
              }
            />

            <input
              value={stocksAdjustPayload[`itemsAdjustmentType_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsAdjustmentType_${i}`]: e.target.value,
                })
              }
            />

            <input
              value={stocksAdjustPayload[`itemsReason_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsReason_${i}`]: e.target.value,
                })
              }
            />

            <input
              value={stocksAdjustPayload[`itemsDiscrepancyType_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsDiscrepancyType_${i}`]: e.target.value,
                })
              }
            />

            <input
              value={stocksAdjustPayload[`itemsDiscrepancySeverity_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`itemsDiscrepancySeverity_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* SUMMARY */}
        <input
          type="number"
          value={stocksAdjustPayload.summaryTotalAdjustedItems || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              summaryTotalAdjustedItems: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={stocksAdjustPayload.summaryTotalIncrease || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              summaryTotalIncrease: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={stocksAdjustPayload.summaryTotalDecrease || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              summaryTotalDecrease: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={stocksAdjustPayload.summaryNetAdjustment || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              summaryNetAdjustment: Number(e.target.value),
            })
          }
        />

        {/* APPROVAL */}
        <input
          type="checkbox"
          checked={stocksAdjustPayload.approvalRequired || false}
          onChange={(e) =>
            setstocksAdjustPayload({
              approvalRequired: e.target.checked,
            })
          }
        />
        <input
          value={stocksAdjustPayload.approvalApprovedBy || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              approvalApprovedBy: e.target.value,
            })
          }
        />
        <input
          value={stocksAdjustPayload.approvalApprovedAt || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              approvalApprovedAt: e.target.value,
            })
          }
        />

        {/* FINANCIAL IMPACT */}
        <input
          type="number"
          value={stocksAdjustPayload.financialImpactTotalValueIncrease || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              financialImpactTotalValueIncrease: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={stocksAdjustPayload.financialImpactTotalValueDecrease || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              financialImpactTotalValueDecrease: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={stocksAdjustPayload.financialImpactNetValueImpact || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              financialImpactNetValueImpact: Number(e.target.value),
            })
          }
        />
        <input
          value={stocksAdjustPayload.financialImpactCurrency || ""}
          onChange={(e) =>
            setstocksAdjustPayload({
              financialImpactCurrency: e.target.value,
            })
          }
        />

        {/* NOTES */}
        <input
          value={stocksAdjustPayload.notes || ""}
          onChange={(e) => setstocksAdjustPayload({ notes: e.target.value })}
        />

        {/* META */}
        <input
          value={stocksAdjustPayload.createdBy || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ createdBy: e.target.value })
          }
        />
        <input
          value={stocksAdjustPayload.createdAt || ""}
          onChange={(e) =>
            setstocksAdjustPayload({ createdAt: e.target.value })
          }
        />

        {/* AUDIT TRAIL */}
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <input
              value={stocksAdjustPayload[`auditTrailAction_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`auditTrailAction_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={stocksAdjustPayload[`auditTrailBy_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
                  [`auditTrailBy_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={stocksAdjustPayload[`auditTrailTimestamp_${i}`] || ""}
              onChange={(e) =>
                setstocksAdjustPayload({
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
