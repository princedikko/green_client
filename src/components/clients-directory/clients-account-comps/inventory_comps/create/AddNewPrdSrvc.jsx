import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function AddNewPrdSrvc() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [prdservicesPayloads, setprdservicesPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      sku: "MILK-PEAK-001",
      barcode: "6224001234567",
      name: "Peak Milk 170g",
      brand: "Peak",

      categoryName: "Dairy",

      unit: "tin",
      costPrice: 820,
      sellingPrice: 950,
      taxRate: 2.5,

      stockQuantity: 245,
      stockMinLevel: 20,
      stockReorderLevel: 50,

      batchTracking: true,
      expiryTracking: true,

      batchesBatchNo: "PK0124A",
      batchesCostPrice: 800,

      supplierName: "UAC Foods",

      status: "ACTIVE",
    },
  );

  const payload = {
    sku: prdservicesPayloads.sku,
    barcode: prdservicesPayloads.barcode,
    name: prdservicesPayloads.name,
    brand: prdservicesPayloads.brand,

    category: {
      name: prdservicesPayloads.categoryName,
    },

    unit: prdservicesPayloads.unit,
    costPrice: prdservicesPayloads.costPrice,
    sellingPrice: prdservicesPayloads.sellingPrice,
    taxRate: prdservicesPayloads.taxRate,

    stock: {
      quantity: prdservicesPayloads.stockQuantity,
      minLevel: prdservicesPayloads.stockMinLevel,
      reorderLevel: prdservicesPayloads.stockReorderLevel,
    },

    batchTracking: prdservicesPayloads.batchTracking,
    expiryTracking: prdservicesPayloads.expiryTracking,

    batches: [
      {
        batchNo: prdservicesPayloads.batchesBatchNo,
        costPrice: prdservicesPayloads.batchesCostPrice,
      },
    ],

    supplier: {
      name: prdservicesPayloads.supplierName,
    },

    status: prdservicesPayloads.status,
  };

  async function postServices() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/post-service`,
        payload,
      );
      if (response?.data?.status === 201) {
        enqueueSnackbar(response?.data?.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(response?.data?.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }

      console.log("Price-Groups :", response);
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
      <h1>Create Variation</h1>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => postServices()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="SKU"
          value={prdservicesPayloads.sku}
          onChange={(e) => setprdservicesPayloads({ sku: e.target.value })}
        />
        <input
          placeholder="Barcode"
          value={prdservicesPayloads.barcode}
          onChange={(e) => setprdservicesPayloads({ barcode: e.target.value })}
        />
        <input
          placeholder="Name"
          value={prdservicesPayloads.name}
          onChange={(e) => setprdservicesPayloads({ name: e.target.value })}
        />
        <input
          placeholder="Brand"
          value={prdservicesPayloads.brand}
          onChange={(e) => setprdservicesPayloads({ brand: e.target.value })}
        />

        {/* CATEGORY */}
        <input
          placeholder="Category Name"
          value={prdservicesPayloads.categoryName}
          onChange={(e) =>
            setprdservicesPayloads({ categoryName: e.target.value })
          }
        />

        {/* UNIT & PRICING */}
        <input
          placeholder="Unit"
          value={prdservicesPayloads.unit}
          onChange={(e) => setprdservicesPayloads({ unit: e.target.value })}
        />
        <input
          type="number"
          placeholder="Cost Price"
          value={prdservicesPayloads.costPrice}
          onChange={(e) =>
            setprdservicesPayloads({
              costPrice: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Selling Price"
          value={prdservicesPayloads.sellingPrice}
          onChange={(e) =>
            setprdservicesPayloads({
              sellingPrice: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Tax Rate"
          value={prdservicesPayloads.taxRate}
          onChange={(e) =>
            setprdservicesPayloads({
              taxRate: Number(e.target.value),
            })
          }
        />

        {/* STOCK */}
        <input
          type="number"
          placeholder="Stock Quantity"
          value={prdservicesPayloads.stockQuantity}
          onChange={(e) =>
            setprdservicesPayloads({
              stockQuantity: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Min Stock Level"
          value={prdservicesPayloads.stockMinLevel}
          onChange={(e) =>
            setprdservicesPayloads({
              stockMinLevel: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Reorder Level"
          value={prdservicesPayloads.stockReorderLevel}
          onChange={(e) =>
            setprdservicesPayloads({
              stockReorderLevel: Number(e.target.value),
            })
          }
        />

        {/* TRACKING */}
        <input
          type="checkbox"
          checked={prdservicesPayloads.batchTracking}
          onChange={(e) =>
            setprdservicesPayloads({
              batchTracking: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={prdservicesPayloads.expiryTracking}
          onChange={(e) =>
            setprdservicesPayloads({
              expiryTracking: e.target.checked,
            })
          }
        />

        {/* BATCH */}
        <input
          placeholder="Batch No"
          value={prdservicesPayloads.batchesBatchNo}
          onChange={(e) =>
            setprdservicesPayloads({
              batchesBatchNo: e.target.value,
            })
          }
        />
        <input
          type="number"
          placeholder="Batch Cost Price"
          value={prdservicesPayloads.batchesCostPrice}
          onChange={(e) =>
            setprdservicesPayloads({
              batchesCostPrice: Number(e.target.value),
            })
          }
        />

        {/* SUPPLIER */}
        <input
          placeholder="Supplier Name"
          value={prdservicesPayloads.supplierName}
          onChange={(e) =>
            setprdservicesPayloads({
              supplierName: e.target.value,
            })
          }
        />

        {/* STATUS */}
        <input
          placeholder="Status"
          value={prdservicesPayloads.status}
          onChange={(e) => setprdservicesPayloads({ status: e.target.value })}
        />
      </div>
    </div>
  );
}
