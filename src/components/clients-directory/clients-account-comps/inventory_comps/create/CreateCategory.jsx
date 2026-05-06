import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function CreateCategory() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [servicesPayloads, setServicesPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      categoryId: "CAT-HHD-005",
      clientId: "CLT-2026-000045",

      name: "Household",
      slug: "household",
      description: "Cleaning materials, kitchen items, and home essentials",

      type: "PRODUCT_CATEGORY",

      parentCategoryId: null,

      icon: "🏠",
      color: "#A0A0A0",

      status: "ACTIVE",
      sortOrder: 5,

      isActive: true,

      createdAt: "2026-04-30T08:00:00Z",

      metaProductCount: 95,
      metaTotalStockValue: 3800000,
      metaAverageMargin: 20.0,
    },
  );

  const payload = {
    categoryId: servicesPayloads.categoryId,
    clientId: servicesPayloads.clientId,

    name: servicesPayloads.name,
    slug: servicesPayloads.slug,
    description: servicesPayloads.description,

    type: servicesPayloads.type,

    parentCategoryId: servicesPayloads.parentCategoryId,

    icon: servicesPayloads.icon,
    color: servicesPayloads.color,

    status: servicesPayloads.status,
    sortOrder: servicesPayloads.sortOrder,

    isActive: servicesPayloads.isActive,

    createdAt: servicesPayloads.createdAt,

    meta: {
      productCount: servicesPayloads.metaProductCount,
      totalStockValue: servicesPayloads.metaTotalStockValue,
      averageMargin: servicesPayloads.metaAverageMargin,
    },
  };
  async function createCategory() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/create-category`,
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
      <h2>Create Category</h2>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => createCategory()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Category ID"
          value={servicesPayloads.categoryId}
          onChange={(e) => setServicesPayloads({ categoryId: e.target.value })}
        />
        <input
          placeholder="Client ID"
          value={servicesPayloads.clientId}
          onChange={(e) => setServicesPayloads({ clientId: e.target.value })}
        />

        <input
          placeholder="Name"
          value={servicesPayloads.name}
          onChange={(e) => setServicesPayloads({ name: e.target.value })}
        />
        <input
          placeholder="Slug"
          value={servicesPayloads.slug}
          onChange={(e) => setServicesPayloads({ slug: e.target.value })}
        />
        <input
          placeholder="Description"
          value={servicesPayloads.description}
          onChange={(e) => setServicesPayloads({ description: e.target.value })}
        />

        {/* TYPE */}
        <input
          placeholder="Type"
          value={servicesPayloads.type}
          onChange={(e) => setServicesPayloads({ type: e.target.value })}
        />
        <input
          placeholder="Parent Category ID"
          value={servicesPayloads.parentCategoryId || ""}
          onChange={(e) =>
            setServicesPayloads({ parentCategoryId: e.target.value })
          }
        />

        {/* APPEARANCE */}
        <input
          placeholder="Icon"
          value={servicesPayloads.icon}
          onChange={(e) => setServicesPayloads({ icon: e.target.value })}
        />
        <input
          placeholder="Color"
          value={servicesPayloads.color}
          onChange={(e) => setServicesPayloads({ color: e.target.value })}
        />

        {/* STATUS */}
        <input
          placeholder="Status"
          value={servicesPayloads.status}
          onChange={(e) => setServicesPayloads({ status: e.target.value })}
        />
        <input
          type="number"
          placeholder="Sort Order"
          value={servicesPayloads.sortOrder}
          onChange={(e) =>
            setServicesPayloads({
              sortOrder: Number(e.target.value),
            })
          }
        />
        <input
          type="checkbox"
          checked={servicesPayloads.isActive}
          onChange={(e) => setServicesPayloads({ isActive: e.target.checked })}
        />

        {/* DATES */}
        <input
          placeholder="Created At"
          value={servicesPayloads.createdAt}
          onChange={(e) => setServicesPayloads({ createdAt: e.target.value })}
        />

        {/* METADATA */}
        <input
          type="number"
          placeholder="Product Count"
          value={servicesPayloads.metaProductCount}
          onChange={(e) =>
            setServicesPayloads({
              metaProductCount: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Total Stock Value"
          value={servicesPayloads.metaTotalStockValue}
          onChange={(e) =>
            setServicesPayloads({
              metaTotalStockValue: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Average Margin"
          value={servicesPayloads.metaAverageMargin}
          onChange={(e) =>
            setServicesPayloads({
              metaAverageMargin: Number(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}
