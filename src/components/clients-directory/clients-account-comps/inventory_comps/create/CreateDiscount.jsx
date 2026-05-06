import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function CreateDiscount() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [discountPayloads, setDiscountPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      discountId: "DISC-00021",
      name: "Ramadan Promo",

      startsAt: new Date("2026-01-20").toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),

      endsAt: new Date("2026-03-30").toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),

      discountType: "percentage",
      discountAmount: 10,
      priority: 1,
      brand: "Nestle",
      category: "Beverages",

      // products flattened (single object)
      productsProductId: "prod-101",
      productsName: "Peak Milk 170g",

      // location flattened
      locationWarehouseId: "wh-001",
      locationName: "Main Store",

      active: true,

      createdAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),

      updatedAt: "",
    },
  );

  const payload = {
    discountId: discountPayloads.discountId,
    name: discountPayloads.name,

    startsAt: discountPayloads.startsAt,
    endsAt: discountPayloads.endsAt,

    discountType: discountPayloads.discountType,
    discountAmount: discountPayloads.discountAmount,
    priority: discountPayloads.priority,
    brand: discountPayloads.brand,
    category: discountPayloads.category,

    products: [
      {
        productId: discountPayloads.productsProductId,
        name: discountPayloads.productsName,
      },
    ],

    location: {
      warehouseId: discountPayloads.locationWarehouseId,
      name: discountPayloads.locationName,
    },

    active: discountPayloads.active,

    createdAt: discountPayloads.createdAt,
    updatedAt: discountPayloads.updatedAt,
  };

  async function saveDiscount() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/inventory/discount/create`,
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
      console.log("Quotation response:", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      enqueueSnackbar("An error occurred while submitting the quotation", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }

  return (
    <div className="fx-cl space2">
      <h1>Create Discount</h1>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => saveDiscount()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Discount ID"
          value={discountPayloads.discountId}
          onChange={(e) => setDiscountPayloads({ discountId: e.target.value })}
        />
        <input
          placeholder="Name"
          value={discountPayloads.name}
          onChange={(e) => setDiscountPayloads({ name: e.target.value })}
        />

        {/* DATE RANGE */}
        <input
          placeholder="Start Date"
          value={discountPayloads.startsAt}
          onChange={(e) => setDiscountPayloads({ startsAt: e.target.value })}
        />
        <input
          placeholder="End Date"
          value={discountPayloads.endsAt}
          onChange={(e) => setDiscountPayloads({ endsAt: e.target.value })}
        />

        {/* DISCOUNT DETAILS */}
        <input
          placeholder="Discount Type"
          value={discountPayloads.discountType}
          onChange={(e) =>
            setDiscountPayloads({ discountType: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Discount Amount"
          value={discountPayloads.discountAmount}
          onChange={(e) =>
            setDiscountPayloads({
              discountAmount: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Priority"
          value={discountPayloads.priority}
          onChange={(e) =>
            setDiscountPayloads({
              priority: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Brand"
          value={discountPayloads.brand}
          onChange={(e) => setDiscountPayloads({ brand: e.target.value })}
        />
        <input
          placeholder="Category"
          value={discountPayloads.category}
          onChange={(e) => setDiscountPayloads({ category: e.target.value })}
        />

        {/* PRODUCT */}
        <input
          placeholder="Product ID"
          value={discountPayloads.productsProductId}
          onChange={(e) =>
            setDiscountPayloads({
              productsProductId: e.target.value,
            })
          }
        />
        <input
          placeholder="Product Name"
          value={discountPayloads.productsName}
          onChange={(e) =>
            setDiscountPayloads({
              productsName: e.target.value,
            })
          }
        />

        {/* LOCATION */}
        <input
          placeholder="Warehouse ID"
          value={discountPayloads.locationWarehouseId}
          onChange={(e) =>
            setDiscountPayloads({
              locationWarehouseId: e.target.value,
            })
          }
        />
        <input
          placeholder="Location Name"
          value={discountPayloads.locationName}
          onChange={(e) =>
            setDiscountPayloads({
              locationName: e.target.value,
            })
          }
        />

        {/* STATUS */}
        <input
          type="checkbox"
          checked={discountPayloads.active}
          onChange={(e) => setDiscountPayloads({ active: e.target.checked })}
        />

        {/* AUDIT */}
        <input
          placeholder="Created At"
          value={discountPayloads.createdAt}
          onChange={(e) => setDiscountPayloads({ createdAt: e.target.value })}
        />
        <input
          placeholder="Updated At"
          value={discountPayloads.updatedAt}
          onChange={(e) => setDiscountPayloads({ updatedAt: e.target.value })}
        />
      </div>
    </div>
  );
}
