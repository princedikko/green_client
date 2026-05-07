import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function CreateProduction() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [productionPayload, setproductionPayload] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      productionId: "PROD-2026-000011",
      productionType: "MANUFACTURING",

      statusCurrent: "IN_PROGRESS",
      statusStartedAt: "2026-04-30T06:00:00Z",
      statusCompletedAt: null,

      productProductId: "MILK-PEAK-001",
      productName: "Peak Milk 170g",
      productSku: "MILK-PEAK-001",
      productBatchNo: "PM-APR-2026-A",

      billOfMaterialsIngredientId_1: "RAW-FLOUR-001",
      billOfMaterialsName_1: "Flour",
      billOfMaterialsRequiredQuantity_1: 5,
      billOfMaterialsUnit_1: "kg",
      billOfMaterialsCostPerUnit_1: 300,
      billOfMaterialsTotalCost_1: 1500,

      billOfMaterialsIngredientId_2: "RAW-SUGAR-001",
      billOfMaterialsName_2: "Sugar",
      billOfMaterialsRequiredQuantity_2: 1,
      billOfMaterialsUnit_2: "kg",
      billOfMaterialsCostPerUnit_2: 500,
      billOfMaterialsTotalCost_2: 500,

      billOfMaterialsIngredientId_3: "RAW-YEAST-001",
      billOfMaterialsName_3: "Yeast",
      billOfMaterialsRequiredQuantity_3: 0.2,
      billOfMaterialsUnit_3: "kg",
      billOfMaterialsCostPerUnit_3: 2000,
      billOfMaterialsTotalCost_3: 400,

      outputPlannedQuantity: 100,
      outputCompletedQuantity: 0,
      outputUnit: "tin",

      wastageExpectedWaste: 2,
      wastageActualWaste: 0,
      wastageUnit: "kg",

      costingTotalMaterialCost: 2400,
      costingLaborCost: 1000,
      costingOverheadCost: 600,
      costingTotalProductionCost: 4000,
      costingCostPerUnit: 40,

      warehouseProductionLocationId: "LOC-PROD-01",
      warehouseOutputWarehouseId: "sdr3-1234-sdfg-5678",

      inventoryImpactRawMaterialsConsumed: true,
      inventoryImpactFinishedGoodsAdded: false,

      qualityControlChecked: false,
      qualityControlPassed: null,
      qualityControlNotes: "",

      schedulePlannedStart: "2026-04-30T06:00:00Z",
      schedulePlannedEnd: "2026-04-30T14:00:00Z",

      createdBy: "userId",
      approvedBy: null,

      notes: "Morning production batch",

      auditTrailAction_1: "CREATED",
      auditTrailBy_1: "userId",
      auditTrailTimestamp_1: "2026-04-30T05:50:00Z",

      auditTrailAction_2: "STARTED",
      auditTrailBy_2: "userId",
      auditTrailTimestamp_2: "2026-04-30T06:00:00Z",
    },
  );

  const payload = {
    productionId: productionPayload.productionId,
    productionType: productionPayload.productionType,

    status: {
      current: productionPayload.statusCurrent,
      startedAt: productionPayload.statusStartedAt,
      completedAt: productionPayload.statusCompletedAt,
    },

    product: {
      productId: productionPayload.productProductId,
      name: productionPayload.productName,
      sku: productionPayload.productSku,
      batchNo: productionPayload.productBatchNo,
    },

    billOfMaterials: [
      {
        ingredientId: productionPayload.billOfMaterialsIngredientId_1,
        name: productionPayload.billOfMaterialsName_1,
        requiredQuantity: productionPayload.billOfMaterialsRequiredQuantity_1,
        unit: productionPayload.billOfMaterialsUnit_1,
        costPerUnit: productionPayload.billOfMaterialsCostPerUnit_1,
        totalCost: productionPayload.billOfMaterialsTotalCost_1,
      },
      {
        ingredientId: productionPayload.billOfMaterialsIngredientId_2,
        name: productionPayload.billOfMaterialsName_2,
        requiredQuantity: productionPayload.billOfMaterialsRequiredQuantity_2,
        unit: productionPayload.billOfMaterialsUnit_2,
        costPerUnit: productionPayload.billOfMaterialsCostPerUnit_2,
        totalCost: productionPayload.billOfMaterialsTotalCost_2,
      },
      {
        ingredientId: productionPayload.billOfMaterialsIngredientId_3,
        name: productionPayload.billOfMaterialsName_3,
        requiredQuantity: productionPayload.billOfMaterialsRequiredQuantity_3,
        unit: productionPayload.billOfMaterialsUnit_3,
        costPerUnit: productionPayload.billOfMaterialsCostPerUnit_3,
        totalCost: productionPayload.billOfMaterialsTotalCost_3,
      },
    ],

    output: {
      plannedQuantity: productionPayload.outputPlannedQuantity,
      completedQuantity: productionPayload.outputCompletedQuantity,
      unit: productionPayload.outputUnit,
    },

    wastage: {
      expectedWaste: productionPayload.wastageExpectedWaste,
      actualWaste: productionPayload.wastageActualWaste,
      unit: productionPayload.wastageUnit,
    },

    costing: {
      totalMaterialCost: productionPayload.costingTotalMaterialCost,
      laborCost: productionPayload.costingLaborCost,
      overheadCost: productionPayload.costingOverheadCost,
      totalProductionCost: productionPayload.costingTotalProductionCost,
      costPerUnit: productionPayload.costingCostPerUnit,
    },

    warehouse: {
      productionLocationId: productionPayload.warehouseProductionLocationId,
      outputWarehouseId: productionPayload.warehouseOutputWarehouseId,
    },

    inventoryImpact: {
      rawMaterialsConsumed:
        productionPayload.inventoryImpactRawMaterialsConsumed,
      finishedGoodsAdded: productionPayload.inventoryImpactFinishedGoodsAdded,
    },

    qualityControl: {
      checked: productionPayload.qualityControlChecked,
      passed: productionPayload.qualityControlPassed,
      notes: productionPayload.qualityControlNotes,
    },

    schedule: {
      plannedStart: productionPayload.schedulePlannedStart,
      plannedEnd: productionPayload.schedulePlannedEnd,
    },

    createdBy: productionPayload.createdBy,
    approvedBy: productionPayload.approvedBy,

    notes: productionPayload.notes,

    auditTrail: [
      {
        action: productionPayload.auditTrailAction_1,
        by: productionPayload.auditTrailBy_1,
        timestamp: productionPayload.auditTrailTimestamp_1,
      },
      {
        action: productionPayload.auditTrailAction_2,
        by: productionPayload.auditTrailBy_2,
        timestamp: productionPayload.auditTrailTimestamp_2,
      },
    ],
  };

  async function apiPostProduction() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/account/production/post`,
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

      console.log("Production response:", response);
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
    <div id="createCont" className="fx-cl space3">
      <h2 className="title">Create Production</h2>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => apiPostProduction()}>Post</button>

        {/* PRODUCTION */}
        <input
          value={productionPayload.productionId || ""}
          onChange={(e) =>
            setproductionPayload({ productionId: e.target.value })
          }
        />
        <input
          value={productionPayload.productionType || ""}
          onChange={(e) =>
            setproductionPayload({ productionType: e.target.value })
          }
        />

        {/* STATUS */}
        <input
          value={productionPayload.statusCurrent || ""}
          onChange={(e) =>
            setproductionPayload({ statusCurrent: e.target.value })
          }
        />
        <input
          value={productionPayload.statusStartedAt || ""}
          onChange={(e) =>
            setproductionPayload({ statusStartedAt: e.target.value })
          }
        />
        <input
          value={productionPayload.statusCompletedAt || ""}
          onChange={(e) =>
            setproductionPayload({ statusCompletedAt: e.target.value })
          }
        />

        {/* PRODUCT */}
        <input
          value={productionPayload.productProductId || ""}
          onChange={(e) =>
            setproductionPayload({ productProductId: e.target.value })
          }
        />
        <input
          value={productionPayload.productName || ""}
          onChange={(e) =>
            setproductionPayload({ productName: e.target.value })
          }
        />
        <input
          value={productionPayload.productSku || ""}
          onChange={(e) => setproductionPayload({ productSku: e.target.value })}
        />
        <input
          value={productionPayload.productBatchNo || ""}
          onChange={(e) =>
            setproductionPayload({ productBatchNo: e.target.value })
          }
        />

        {/* BILL OF MATERIALS */}
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <input
              value={
                productionPayload[`billOfMaterialsIngredientId_${i}`] || ""
              }
              onChange={(e) =>
                setproductionPayload({
                  [`billOfMaterialsIngredientId_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={productionPayload[`billOfMaterialsName_${i}`] || ""}
              onChange={(e) =>
                setproductionPayload({
                  [`billOfMaterialsName_${i}`]: e.target.value,
                })
              }
            />
            <input
              type="number"
              value={
                productionPayload[`billOfMaterialsRequiredQuantity_${i}`] || ""
              }
              onChange={(e) =>
                setproductionPayload({
                  [`billOfMaterialsRequiredQuantity_${i}`]: Number(
                    e.target.value,
                  ),
                })
              }
            />
            <input
              value={productionPayload[`billOfMaterialsUnit_${i}`] || ""}
              onChange={(e) =>
                setproductionPayload({
                  [`billOfMaterialsUnit_${i}`]: e.target.value,
                })
              }
            />
            <input
              type="number"
              value={productionPayload[`billOfMaterialsCostPerUnit_${i}`] || ""}
              onChange={(e) =>
                setproductionPayload({
                  [`billOfMaterialsCostPerUnit_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              value={productionPayload[`billOfMaterialsTotalCost_${i}`] || ""}
              onChange={(e) =>
                setproductionPayload({
                  [`billOfMaterialsTotalCost_${i}`]: Number(e.target.value),
                })
              }
            />
          </div>
        ))}

        {/* OUTPUT */}
        <input
          type="number"
          value={productionPayload.outputPlannedQuantity || ""}
          onChange={(e) =>
            setproductionPayload({
              outputPlannedQuantity: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={productionPayload.outputCompletedQuantity || ""}
          onChange={(e) =>
            setproductionPayload({
              outputCompletedQuantity: Number(e.target.value),
            })
          }
        />
        <input
          value={productionPayload.outputUnit || ""}
          onChange={(e) => setproductionPayload({ outputUnit: e.target.value })}
        />

        {/* WASTAGE */}
        <input
          type="number"
          value={productionPayload.wastageExpectedWaste || ""}
          onChange={(e) =>
            setproductionPayload({
              wastageExpectedWaste: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={productionPayload.wastageActualWaste || ""}
          onChange={(e) =>
            setproductionPayload({
              wastageActualWaste: Number(e.target.value),
            })
          }
        />
        <input
          value={productionPayload.wastageUnit || ""}
          onChange={(e) =>
            setproductionPayload({ wastageUnit: e.target.value })
          }
        />

        {/* COSTING */}
        <input
          type="number"
          value={productionPayload.costingTotalMaterialCost || ""}
          onChange={(e) =>
            setproductionPayload({
              costingTotalMaterialCost: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={productionPayload.costingLaborCost || ""}
          onChange={(e) =>
            setproductionPayload({
              costingLaborCost: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={productionPayload.costingOverheadCost || ""}
          onChange={(e) =>
            setproductionPayload({
              costingOverheadCost: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={productionPayload.costingTotalProductionCost || ""}
          onChange={(e) =>
            setproductionPayload({
              costingTotalProductionCost: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          value={productionPayload.costingCostPerUnit || ""}
          onChange={(e) =>
            setproductionPayload({
              costingCostPerUnit: Number(e.target.value),
            })
          }
        />

        {/* WAREHOUSE */}
        <input
          value={productionPayload.warehouseProductionLocationId || ""}
          onChange={(e) =>
            setproductionPayload({
              warehouseProductionLocationId: e.target.value,
            })
          }
        />
        <input
          value={productionPayload.warehouseOutputWarehouseId || ""}
          onChange={(e) =>
            setproductionPayload({
              warehouseOutputWarehouseId: e.target.value,
            })
          }
        />

        {/* IMPACT */}
        <input
          type="checkbox"
          checked={
            productionPayload.inventoryImpactRawMaterialsConsumed || false
          }
          onChange={(e) =>
            setproductionPayload({
              inventoryImpactRawMaterialsConsumed: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={productionPayload.inventoryImpactFinishedGoodsAdded || false}
          onChange={(e) =>
            setproductionPayload({
              inventoryImpactFinishedGoodsAdded: e.target.checked,
            })
          }
        />

        {/* QUALITY CONTROL */}
        <input
          type="checkbox"
          checked={productionPayload.qualityControlChecked || false}
          onChange={(e) =>
            setproductionPayload({
              qualityControlChecked: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={productionPayload.qualityControlPassed || false}
          onChange={(e) =>
            setproductionPayload({
              qualityControlPassed: e.target.checked,
            })
          }
        />
        <input
          value={productionPayload.qualityControlNotes || ""}
          onChange={(e) =>
            setproductionPayload({
              qualityControlNotes: e.target.value,
            })
          }
        />

        {/* SCHEDULE */}
        <input
          value={productionPayload.schedulePlannedStart || ""}
          onChange={(e) =>
            setproductionPayload({
              schedulePlannedStart: e.target.value,
            })
          }
        />
        <input
          value={productionPayload.schedulePlannedEnd || ""}
          onChange={(e) =>
            setproductionPayload({
              schedulePlannedEnd: e.target.value,
            })
          }
        />

        {/* META */}
        <input
          value={productionPayload.createdBy || ""}
          onChange={(e) => setproductionPayload({ createdBy: e.target.value })}
        />
        <input
          value={productionPayload.approvedBy || ""}
          onChange={(e) => setproductionPayload({ approvedBy: e.target.value })}
        />

        {/* NOTES */}
        <input
          value={productionPayload.notes || ""}
          onChange={(e) => setproductionPayload({ notes: e.target.value })}
        />

        {/* AUDIT TRAIL */}
        {[1, 2].map((i) => (
          <div key={i}>
            <input
              value={productionPayload[`auditTrailAction_${i}`] || ""}
              onChange={(e) =>
                setproductionPayload({
                  [`auditTrailAction_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={productionPayload[`auditTrailBy_${i}`] || ""}
              onChange={(e) =>
                setproductionPayload({
                  [`auditTrailBy_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={productionPayload[`auditTrailTimestamp_${i}`] || ""}
              onChange={(e) =>
                setproductionPayload({
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
