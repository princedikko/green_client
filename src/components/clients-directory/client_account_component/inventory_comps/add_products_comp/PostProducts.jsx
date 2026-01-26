import React, { useReducer } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./postProducts.css";

const initialState = {
  sku: "",
  barcode: "",
  name: "",
  brand: "",
  category: { id: "", name: "" },
  unit: "",
  costPrice: "",
  sellingPrice: "",
  taxRate: "",
  stock: { quantity: "", minLevel: "", reorderLevel: "" },
  batchTracking: false,
  expiryTracking: false,
  batches: [],
  supplier: { id: "", name: "" },
  status: "ACTIVE",

  // batch temp state
  tempBatch: {
    batchNo: "",
    expiryDate: "",
    quantity: "",
    costPrice: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };

    case "SET_CATEGORY":
      return {
        ...state,
        category: { ...state.category, [action.field]: action.value },
      };

    case "SET_STOCK":
      return {
        ...state,
        stock: { ...state.stock, [action.field]: action.value },
      };

    case "SET_SUPPLIER":
      return {
        ...state,
        supplier: { ...state.supplier, [action.field]: action.value },
      };

    case "SET_TEMP_BATCH":
      return {
        ...state,
        tempBatch: { ...state.tempBatch, [action.field]: action.value },
      };

    case "ADD_BATCH":
      return {
        ...state,
        batches: [...state.batches, state.tempBatch],
        tempBatch: { batchNo: "", expiryDate: "", quantity: "", costPrice: "" },
      };

    case "TOGGLE_BATCH_TRACKING":
      return { ...state, batchTracking: !state.batchTracking };

    case "TOGGLE_EXPIRY_TRACKING":
      return { ...state, expiryTracking: !state.expiryTracking };

    default:
      return state;
  }
}

export default function PostProduct() {
  const { enqueueSnackbar } = useSnackbar();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/a4df5a564f5sd65f4a65df/products/add_product`,
        {
          sku: state.sku,
          barcode: state.barcode,
          name: state.name,
          brand: state.brand,
          category: state.category,
          unit: state.unit,
          costPrice: Number(state.costPrice),
          sellingPrice: Number(state.sellingPrice),
          taxRate: Number(state.taxRate),
          stock: {
            quantity: Number(state.stock.quantity),
            minLevel: Number(state.stock.minLevel),
            reorderLevel: Number(state.stock.reorderLevel),
          },
          batchTracking: state.batchTracking,
          expiryTracking: state.expiryTracking,
          batches: state.batches,
          supplier: state.supplier,
          status: state.status,
        },
      );

      if (response.data.status === 201) {
        enqueueSnackbar("Product added successfully!", {
          variant: "success",
        });
        console.log("Product added:", response.data.info);
      } else {
        enqueueSnackbar(response.data.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Failed to add product", { variant: "error" });
      console.log(error);
    }
  };

  return (
    <div className="add-product-container" style={{ padding: "20px" }}>
      <h2>Add Product</h2>

      <form className="g g2" onSubmit={handleSubmit}>
        <div className="fx">
          <label>SKU</label>
          <input
            value={state.sku}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "sku",
                value: e.target.value,
              })
            }
            required
          />
        </div>

        <div>
          <label>Barcode</label>
          <input
            value={state.barcode}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "barcode",
                value: e.target.value,
              })
            }
            required
          />
        </div>

        <div>
          <label>Name</label>
          <input
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            required
          />
        </div>

        <div>
          <label>Brand</label>
          <input
            value={state.brand}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "brand",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Category Name</label>
          <input
            value={state.category.name}
            onChange={(e) =>
              dispatch({
                type: "SET_CATEGORY",
                field: "name",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Unit</label>
          <input
            value={state.unit}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "unit",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Cost Price</label>
          <input
            type="number"
            value={state.costPrice}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "costPrice",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Selling Price</label>
          <input
            type="number"
            value={state.sellingPrice}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "sellingPrice",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Tax Rate (%)</label>
          <input
            type="number"
            value={state.taxRate}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "taxRate",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Stock Quantity</label>
          <input
            type="number"
            value={state.stock.quantity}
            onChange={(e) =>
              dispatch({
                type: "SET_STOCK",
                field: "quantity",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Min Level</label>
          <input
            type="number"
            value={state.stock.minLevel}
            onChange={(e) =>
              dispatch({
                type: "SET_STOCK",
                field: "minLevel",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Reorder Level</label>
          <input
            type="number"
            value={state.stock.reorderLevel}
            onChange={(e) =>
              dispatch({
                type: "SET_STOCK",
                field: "reorderLevel",
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>
            Batch Tracking
            <input
              type="checkbox"
              checked={state.batchTracking}
              onChange={() => dispatch({ type: "TOGGLE_BATCH_TRACKING" })}
            />
          </label>
        </div>

        <div>
          <label>
            Expiry Tracking
            <input
              type="checkbox"
              checked={state.expiryTracking}
              onChange={() => dispatch({ type: "TOGGLE_EXPIRY_TRACKING" })}
            />
          </label>
        </div>

        <div>
          <h4>Add Batch</h4>
          <input
            placeholder="Batch No"
            value={state.tempBatch.batchNo}
            onChange={(e) =>
              dispatch({
                type: "SET_TEMP_BATCH",
                field: "batchNo",
                value: e.target.value,
              })
            }
          />
          <input
            type="date"
            value={state.tempBatch.expiryDate}
            onChange={(e) =>
              dispatch({
                type: "SET_TEMP_BATCH",
                field: "expiryDate",
                value: e.target.value,
              })
            }
          />
          <input
            placeholder="Quantity"
            type="number"
            value={state.tempBatch.quantity}
            onChange={(e) =>
              dispatch({
                type: "SET_TEMP_BATCH",
                field: "quantity",
                value: e.target.value,
              })
            }
          />
          <input
            placeholder="Cost Price"
            type="number"
            value={state.tempBatch.costPrice}
            onChange={(e) =>
              dispatch({
                type: "SET_TEMP_BATCH",
                field: "costPrice",
                value: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => dispatch({ type: "ADD_BATCH" })}>
            Add Batch
          </button>
        </div>

        <div>
          <label>Supplier Name</label>
          <input
            value={state.supplier.name}
            onChange={(e) =>
              dispatch({
                type: "SET_SUPPLIER",
                field: "name",
                value: e.target.value,
              })
            }
          />
        </div>

        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}
