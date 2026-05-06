import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function CreateUnit() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [unitsPayload, setunitsPayload] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      name: "Piece",
      code: "PCS",
      description: "Single item",
      type: "count",

      baseUnit: Boolean,
      conversionFactor: 1,

      decimal: "Not allowed",

      createdAt: Date,
      updatedAt: Date,
    },
  );
  const payload = {
    name: unitsPayload.name,
    code: unitsPayload.code,
    description: unitsPayload.description,
    type: unitsPayload.type,

    baseUnit: unitsPayload.baseUnit,
    conversionFactor: unitsPayload.conversionFactor,

    decimal: unitsPayload.decimal,

    createdAt: unitsPayload.createdAt,
    updatedAt: unitsPayload.updatedAt,
  };
  //  const payload = {
  //   name: "Piece", // Piece, Kg, Liter, Pack, Carton
  //   code: "PCS", // PCS, KG, LTR, PK, CTN
  //   description: "Single item",
  //   type: "count", // "weight" // "volume" // "package",
  //   baseUnit: Boolean, // true if this is the base unit (e.g., Piece, Kg, Liter)
  //   conversionFactor: 1, // Piece → 1  // Pack → 12 (1 Pack = 12 Pieces)  // Carton → 48 (1 Carton = 48 Pieces)
  //   decimal: "Not allowed", // "Allowed",
  //   createdAt: Date,
  //   updatedAt: Date,
  // };
  async function createUnit() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/create-unit`,
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
      <h1>Create Unit</h1>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => createUnit()}>Create</button>

        {/* BASIC INFO */}
        <input
          placeholder="Name"
          value={unitsPayload.name}
          onChange={(e) => setunitsPayload({ name: e.target.value })}
        />
        <input
          placeholder="Code"
          value={unitsPayload.code}
          onChange={(e) => setunitsPayload({ code: e.target.value })}
        />
        <input
          placeholder="Description"
          value={unitsPayload.description}
          onChange={(e) => setunitsPayload({ description: e.target.value })}
        />
        <input
          placeholder="Type"
          value={unitsPayload.type}
          onChange={(e) => setunitsPayload({ type: e.target.value })}
        />

        {/* UNIT SETTINGS */}
        <input
          type="checkbox"
          checked={unitsPayload.baseUnit}
          onChange={(e) => setunitsPayload({ baseUnit: e.target.checked })}
        />
        <input
          type="number"
          placeholder="Conversion Factor"
          value={unitsPayload.conversionFactor}
          onChange={(e) =>
            setunitsPayload({
              conversionFactor: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Decimal Rule"
          value={unitsPayload.decimal}
          onChange={(e) => setunitsPayload({ decimal: e.target.value })}
        />

        {/* DATES */}
        <input
          placeholder="Created At"
          value={
            unitsPayload.createdAt ? unitsPayload.createdAt.toString() : ""
          }
          onChange={(e) => setunitsPayload({ createdAt: e.target.value })}
        />
        <input
          placeholder="Updated At"
          value={
            unitsPayload.updatedAt ? unitsPayload.updatedAt.toString() : ""
          }
          onChange={(e) => setunitsPayload({ updatedAt: e.target.value })}
        />
      </div>
    </div>
  );
}
