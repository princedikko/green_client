import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function CreateVariation() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [variationPayloads, setvariationPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      variationId: "VAR-001",
      name: "33cl",
      sku: "COCA-33CL",

      attributesVolume: "33cl",

      price: 500,
      costPrice: 350,
      stock: 120,
      barcode: "615204983321",
      image: "/products/cocacola-33cl.png",
      isActive: true,

      createdAt: new Date().toLocaleDateString(),
    },
  );

  const payload = {
    variationId: variationPayloads.variationId,
    name: variationPayloads.name,
    sku: variationPayloads.sku,

    attributes: {
      volume: variationPayloads.attributesVolume,
    },

    price: variationPayloads.price,
    costPrice: variationPayloads.costPrice,
    stock: variationPayloads.stock,
    barcode: variationPayloads.barcode,
    image: variationPayloads.image,
    isActive: variationPayloads.isActive,

    createdAt: variationPayloads.createdAt,
  };

  async function postNewVariation() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/post-variation`,
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
        <button onClick={() => postNewVariation()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Variation ID"
          value={variationPayloads.variationId}
          onChange={(e) =>
            setvariationPayloads({ variationId: e.target.value })
          }
        />
        <input
          placeholder="Name"
          value={variationPayloads.name}
          onChange={(e) => setvariationPayloads({ name: e.target.value })}
        />
        <input
          placeholder="SKU"
          value={variationPayloads.sku}
          onChange={(e) => setvariationPayloads({ sku: e.target.value })}
        />

        {/* ATTRIBUTES */}
        <input
          placeholder="Volume"
          value={variationPayloads.attributesVolume}
          onChange={(e) =>
            setvariationPayloads({
              attributesVolume: e.target.value,
            })
          }
        />

        {/* PRICING & STOCK */}
        <input
          type="number"
          placeholder="Price"
          value={variationPayloads.price}
          onChange={(e) =>
            setvariationPayloads({
              price: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Cost Price"
          value={variationPayloads.costPrice}
          onChange={(e) =>
            setvariationPayloads({
              costPrice: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Stock"
          value={variationPayloads.stock}
          onChange={(e) =>
            setvariationPayloads({
              stock: Number(e.target.value),
            })
          }
        />

        {/* IDENTIFIERS */}
        <input
          placeholder="Barcode"
          value={variationPayloads.barcode}
          onChange={(e) => setvariationPayloads({ barcode: e.target.value })}
        />
        <input
          placeholder="Image URL"
          value={variationPayloads.image}
          onChange={(e) => setvariationPayloads({ image: e.target.value })}
        />

        {/* STATUS */}
        <input
          type="checkbox"
          checked={variationPayloads.isActive}
          onChange={(e) => setvariationPayloads({ isActive: e.target.checked })}
        />

        {/* DATE */}
        <input
          placeholder="Created At"
          value={variationPayloads.createdAt}
          onChange={(e) => setvariationPayloads({ createdAt: e.target.value })}
        />
      </div>
    </div>
  );
}
