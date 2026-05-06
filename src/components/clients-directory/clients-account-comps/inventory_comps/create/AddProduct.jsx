import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function AddProduct() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [productPayloads, setProductPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      sku: "MILK-PEAK-001",
      barcode: "6224001234567",
      qrcode: "1234567890123",
      name: "Peak Milk 170g",
      brand: "Peak",

      productType: "inventory",

      // units flattened
      unitsBaseUnit: "tin",
      unitsPurchaseUnit: "carton",
      unitsConversionRate: 24,
      unitsSalesUnit: "tin",

      description: "Business laptop",
      categoryId: "cat-1234",
      supplierId: "uac-5678",

      pricingCostPrice: 650,
      pricingSellingPrice: 820,
      pricingTaxRate: 7.5,
      pricingCurrency: "NGN",

      stockReorderLevel: 5,
      stockReorderQuantity: 10,
      stockMinLevel: 20,
      stockSellingQuantity: 1,

      // warehouses flattened (single object)
      warehousesWarehouseId: "sdr3-1234-sdfg-5678",
      warehousesLocation: "Aisle 3 - Rack B",
      warehousesQuantity: 35,
      warehousesReservedQuantity: 0,
      warehousesDamagedQuantity: 0,

      // batch flattened (single object)
      batchBatchTracking: true,
      batchExpiryTracking: true,
      batchTrackingMethod: "FEFO",

      batchBatchNo: "PK0124A",
      batchCostPrice: 800,
      batchQuantityAvailable: 35,
      batchManufactureDate: "2024-01-01",
      batchExpiryDate: "2026-01-30",
      batchWarehouseId: "sdr3-1234-sdfg-5678",

      // dimensions flattened
      dimensionsWeight: null,
      dimensionsLength: null,
      dimensionsWidth: null,
      dimensionsHeight: null,

      images: [],
      trackInventory: true,
      status: "active",

      createdBy: "userId",
      updatedBy: "userId",

      createdAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    },
  );

  const payload = {
    sku: productPayloads.sku,
    barcode: productPayloads.barcode,
    qrcode: productPayloads.qrcode,
    name: productPayloads.name,
    brand: productPayloads.brand,

    productType: productPayloads.productType,

    units: {
      baseUnit: productPayloads.unitsBaseUnit,
      purchaseUnit: productPayloads.unitsPurchaseUnit,
      conversionRate: productPayloads.unitsConversionRate,
      salesUnit: productPayloads.unitsSalesUnit,
    },

    description: productPayloads.description,
    categoryId: productPayloads.categoryId,
    supplierId: productPayloads.supplierId,

    pricing: {
      costPrice: productPayloads.pricingCostPrice,
      sellingPrice: productPayloads.pricingSellingPrice,
      taxRate: productPayloads.pricingTaxRate,
      currency: productPayloads.pricingCurrency,
    },

    stock: {
      reorderLevel: productPayloads.stockReorderLevel,
      reorderQuantity: productPayloads.stockReorderQuantity,
      minLevel: productPayloads.stockMinLevel,
      sellingQuantity: productPayloads.stockSellingQuantity,
    },

    warehouses: [
      {
        warehouseId: productPayloads.warehousesWarehouseId,
        location: productPayloads.warehousesLocation,
        quantity: productPayloads.warehousesQuantity,
        reservedQuantity: productPayloads.warehousesReservedQuantity,
        damagedQuantity: productPayloads.warehousesDamagedQuantity,
      },
    ],

    batch: {
      batchTracking: productPayloads.batchBatchTracking,
      expiryTracking: productPayloads.batchExpiryTracking,
      trackingMethod: productPayloads.batchTrackingMethod,

      batches: [
        {
          batchNo: productPayloads.batchBatchNo,
          costPrice: productPayloads.batchCostPrice,
          quantityAvailable: productPayloads.batchQuantityAvailable,
          manufactureDate: productPayloads.batchManufactureDate,
          expiryDate: productPayloads.batchExpiryDate,
          warehouseId: productPayloads.batchWarehouseId,
        },
      ],
    },

    dimensions: {
      weight: productPayloads.dimensionsWeight,
      length: productPayloads.dimensionsLength,
      width: productPayloads.dimensionsWidth,
      height: productPayloads.dimensionsHeight,
    },

    images: productPayloads.images,
    trackInventory: productPayloads.trackInventory,
    status: productPayloads.status,

    createdBy: productPayloads.createdBy,
    updatedBy: productPayloads.updatedBy,
    createdAt: productPayloads.createdAt,
  };

  async function apiPostProducts() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/add_product`,
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

      console.log("Add product response:", response);
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
      <h1>Add Product</h1>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => apiPostProducts()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="SKU"
          value={productPayloads.sku}
          onChange={(e) => setProductPayloads({ sku: e.target.value })}
        />
        <input
          placeholder="Barcode"
          value={productPayloads.barcode}
          onChange={(e) => setProductPayloads({ barcode: e.target.value })}
        />
        <input
          placeholder="QR Code"
          value={productPayloads.qrcode}
          onChange={(e) => setProductPayloads({ qrcode: e.target.value })}
        />
        <input
          placeholder="Name"
          value={productPayloads.name}
          onChange={(e) => setProductPayloads({ name: e.target.value })}
        />
        <input
          placeholder="Brand"
          value={productPayloads.brand}
          onChange={(e) => setProductPayloads({ brand: e.target.value })}
        />

        <input
          placeholder="Product Type"
          value={productPayloads.productType}
          onChange={(e) => setProductPayloads({ productType: e.target.value })}
        />

        <input
          placeholder="Description"
          value={productPayloads.description}
          onChange={(e) => setProductPayloads({ description: e.target.value })}
        />
        <input
          placeholder="Category ID"
          value={productPayloads.categoryId}
          onChange={(e) => setProductPayloads({ categoryId: e.target.value })}
        />
        <input
          placeholder="Supplier ID"
          value={productPayloads.supplierId}
          onChange={(e) => setProductPayloads({ supplierId: e.target.value })}
        />

        {/* UNITS */}
        <input
          placeholder="Base Unit"
          value={productPayloads.unitsBaseUnit}
          onChange={(e) =>
            setProductPayloads({ unitsBaseUnit: e.target.value })
          }
        />
        <input
          placeholder="Purchase Unit"
          value={productPayloads.unitsPurchaseUnit}
          onChange={(e) =>
            setProductPayloads({ unitsPurchaseUnit: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Conversion Rate"
          value={productPayloads.unitsConversionRate}
          onChange={(e) =>
            setProductPayloads({
              unitsConversionRate: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Sales Unit"
          value={productPayloads.unitsSalesUnit}
          onChange={(e) =>
            setProductPayloads({ unitsSalesUnit: e.target.value })
          }
        />

        {/* PRICING */}
        <input
          type="number"
          placeholder="Cost Price"
          value={productPayloads.pricingCostPrice}
          onChange={(e) =>
            setProductPayloads({
              pricingCostPrice: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Selling Price"
          value={productPayloads.pricingSellingPrice}
          onChange={(e) =>
            setProductPayloads({
              pricingSellingPrice: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Tax Rate"
          value={productPayloads.pricingTaxRate}
          onChange={(e) =>
            setProductPayloads({
              pricingTaxRate: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Currency"
          value={productPayloads.pricingCurrency}
          onChange={(e) =>
            setProductPayloads({ pricingCurrency: e.target.value })
          }
        />

        {/* STOCK */}
        <input
          type="number"
          placeholder="Reorder Level"
          value={productPayloads.stockReorderLevel}
          onChange={(e) =>
            setProductPayloads({
              stockReorderLevel: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Reorder Quantity"
          value={productPayloads.stockReorderQuantity}
          onChange={(e) =>
            setProductPayloads({
              stockReorderQuantity: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Min Level"
          value={productPayloads.stockMinLevel}
          onChange={(e) =>
            setProductPayloads({
              stockMinLevel: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Selling Quantity"
          value={productPayloads.stockSellingQuantity}
          onChange={(e) =>
            setProductPayloads({
              stockSellingQuantity: Number(e.target.value),
            })
          }
        />

        {/* WAREHOUSES */}
        <input
          placeholder="Warehouse ID"
          value={productPayloads.warehousesWarehouseId}
          onChange={(e) =>
            setProductPayloads({
              warehousesWarehouseId: e.target.value,
            })
          }
        />
        <input
          placeholder="Location"
          value={productPayloads.warehousesLocation}
          onChange={(e) =>
            setProductPayloads({
              warehousesLocation: e.target.value,
            })
          }
        />
        <input
          type="number"
          placeholder="Quantity"
          value={productPayloads.warehousesQuantity}
          onChange={(e) =>
            setProductPayloads({
              warehousesQuantity: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Reserved Quantity"
          value={productPayloads.warehousesReservedQuantity}
          onChange={(e) =>
            setProductPayloads({
              warehousesReservedQuantity: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Damaged Quantity"
          value={productPayloads.warehousesDamagedQuantity}
          onChange={(e) =>
            setProductPayloads({
              warehousesDamagedQuantity: Number(e.target.value),
            })
          }
        />

        {/* BATCH */}
        <input
          type="checkbox"
          checked={productPayloads.batchBatchTracking}
          onChange={(e) =>
            setProductPayloads({
              batchBatchTracking: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={productPayloads.batchExpiryTracking}
          onChange={(e) =>
            setProductPayloads({
              batchExpiryTracking: e.target.checked,
            })
          }
        />
        <input
          placeholder="Tracking Method"
          value={productPayloads.batchTrackingMethod}
          onChange={(e) =>
            setProductPayloads({
              batchTrackingMethod: e.target.value,
            })
          }
        />
        <input
          placeholder="Batch No"
          value={productPayloads.batchBatchNo}
          onChange={(e) => setProductPayloads({ batchBatchNo: e.target.value })}
        />
        <input
          type="number"
          placeholder="Batch Cost Price"
          value={productPayloads.batchCostPrice}
          onChange={(e) =>
            setProductPayloads({
              batchCostPrice: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Quantity Available"
          value={productPayloads.batchQuantityAvailable}
          onChange={(e) =>
            setProductPayloads({
              batchQuantityAvailable: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Manufacture Date"
          value={productPayloads.batchManufactureDate}
          onChange={(e) =>
            setProductPayloads({
              batchManufactureDate: e.target.value,
            })
          }
        />
        <input
          placeholder="Expiry Date"
          value={productPayloads.batchExpiryDate}
          onChange={(e) =>
            setProductPayloads({
              batchExpiryDate: e.target.value,
            })
          }
        />
        <input
          placeholder="Batch Warehouse ID"
          value={productPayloads.batchWarehouseId}
          onChange={(e) =>
            setProductPayloads({
              batchWarehouseId: e.target.value,
            })
          }
        />

        {/* DIMENSIONS */}
        <input
          placeholder="Weight"
          value={productPayloads.dimensionsWeight || ""}
          onChange={(e) =>
            setProductPayloads({
              dimensionsWeight: e.target.value,
            })
          }
        />
        <input
          placeholder="Length"
          value={productPayloads.dimensionsLength || ""}
          onChange={(e) =>
            setProductPayloads({
              dimensionsLength: e.target.value,
            })
          }
        />
        <input
          placeholder="Width"
          value={productPayloads.dimensionsWidth || ""}
          onChange={(e) =>
            setProductPayloads({
              dimensionsWidth: e.target.value,
            })
          }
        />
        <input
          placeholder="Height"
          value={productPayloads.dimensionsHeight || ""}
          onChange={(e) =>
            setProductPayloads({
              dimensionsHeight: e.target.value,
            })
          }
        />

        {/* IMAGES + STATUS */}
        <input
          placeholder="Images (JSON)"
          value={JSON.stringify(productPayloads.images)}
          onChange={(e) =>
            setProductPayloads({
              images: JSON.parse(e.target.value || "[]"),
            })
          }
        />
        <input
          type="checkbox"
          checked={productPayloads.trackInventory}
          onChange={(e) =>
            setProductPayloads({
              trackInventory: e.target.checked,
            })
          }
        />
        <input
          placeholder="Status"
          value={productPayloads.status}
          onChange={(e) => setProductPayloads({ status: e.target.value })}
        />

        {/* AUDIT */}
        <input
          placeholder="Created By"
          value={productPayloads.createdBy}
          onChange={(e) => setProductPayloads({ createdBy: e.target.value })}
        />
        <input
          placeholder="Updated By"
          value={productPayloads.updatedBy}
          onChange={(e) => setProductPayloads({ updatedBy: e.target.value })}
        />
        <input
          placeholder="Created At"
          value={productPayloads.createdAt}
          onChange={(e) => setProductPayloads({ createdAt: e.target.value })}
        />
      </div>
    </div>
  );
}
