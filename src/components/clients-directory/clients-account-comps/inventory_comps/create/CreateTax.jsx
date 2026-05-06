import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function CreateTax() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [taxPayloads, settaxPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      inventoryId: "JDK-MLN-O9KL-56T8",
      taxId: "tax_config_001",
      currency: "NGN",
      defaultTax: "VAT",

      taxRulesRate: 7.5,
      taxRulesType: "percentage",
      taxRulesAppliesTo: ["physical_goods", "digital_goods"],
      taxRulesIsActive: true,
      taxRulesPriority: 1,
      taxRulesCountry: "NG",

      LUXURY_TAXRate: 10,
      LUXURY_TAXType: "percentage",
      LUXURY_TAXAppliesTo: ["luxury_goods"],
      LUXURY_TAXIsActive: true,
      LUXURY_TAXPriority: 2,
      LUXURY_TAXCountry: "NG",

      ZERO_TAXRate: 0,
      ZERO_TAXType: "percentage",
      ZERO_TAXAppliesTo: ["basic_food", "essential_items"],
      ZERO_TAXIsActive: true,
      ZERO_TAXPriority: 3,
      ZERO_TAXCountry: "NG",

      rulesEngineStackable: false,
      rulesEngineCompoundTax: false,
      rulesEngineRoundingMethod: "nearest",
      rulesEngineDisplayTaxInclusive: true,

      auditCreatedAt: new Date().toISOString(),
      auditUpdatedAt: "",
      auditUpdatedBy: "admin",
    },
  );

  const payload = {
    inventoryId: taxPayloads.inventoryId,
    taxId: taxPayloads.taxId,
    currency: taxPayloads.currency,
    defaultTax: taxPayloads.defaultTax,

    taxRules: {
      rate: taxPayloads.taxRulesRate,
      type: taxPayloads.taxRulesType,
      appliesTo: taxPayloads.taxRulesAppliesTo,
      isActive: taxPayloads.taxRulesIsActive,
      priority: taxPayloads.taxRulesPriority,
      country: taxPayloads.taxRulesCountry,
    },

    LUXURY_TAX: {
      rate: taxPayloads.LUXURY_TAXRate,
      type: taxPayloads.LUXURY_TAXType,
      appliesTo: taxPayloads.LUXURY_TAXAppliesTo,
      isActive: taxPayloads.LUXURY_TAXIsActive,
      priority: taxPayloads.LUXURY_TAXPriority,
      country: taxPayloads.LUXURY_TAXCountry,
    },

    ZERO_TAX: {
      rate: taxPayloads.ZERO_TAXRate,
      type: taxPayloads.ZERO_TAXType,
      appliesTo: taxPayloads.ZERO_TAXAppliesTo,
      isActive: taxPayloads.ZERO_TAXIsActive,
      priority: taxPayloads.ZERO_TAXPriority,
      country: taxPayloads.ZERO_TAXCountry,
    },

    rulesEngine: {
      stackable: taxPayloads.rulesEngineStackable,
      compoundTax: taxPayloads.rulesEngineCompoundTax,
      roundingMethod: taxPayloads.rulesEngineRoundingMethod,
      displayTaxInclusive: taxPayloads.rulesEngineDisplayTaxInclusive,
    },

    audit: {
      createdAt: taxPayloads.auditCreatedAt,
      updatedAt: taxPayloads.auditUpdatedAt,
      updatedBy: taxPayloads.auditUpdatedBy,
    },
  };

  async function addNewTaxRecord() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/create-tax`,
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
      <h1>Create Tax</h1>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => addNewTaxRecord()}>Post</button>

        {/* BASIC INFO */}
        <input
          placeholder="Inventory ID"
          value={taxPayloads.inventoryId}
          onChange={(e) => settaxPayloads({ inventoryId: e.target.value })}
        />
        <input
          placeholder="Tax ID"
          value={taxPayloads.taxId}
          onChange={(e) => settaxPayloads({ taxId: e.target.value })}
        />
        <input
          placeholder="Currency"
          value={taxPayloads.currency}
          onChange={(e) => settaxPayloads({ currency: e.target.value })}
        />
        <input
          placeholder="Default Tax"
          value={taxPayloads.defaultTax}
          onChange={(e) => settaxPayloads({ defaultTax: e.target.value })}
        />

        {/* STANDARD TAX RULE */}
        <input
          type="number"
          placeholder="Tax Rate"
          value={taxPayloads.taxRulesRate}
          onChange={(e) =>
            settaxPayloads({
              taxRulesRate: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Tax Type"
          value={taxPayloads.taxRulesType}
          onChange={(e) => settaxPayloads({ taxRulesType: e.target.value })}
        />
        <input
          placeholder="Applies To (comma separated)"
          value={taxPayloads.taxRulesAppliesTo.join(",")}
          onChange={(e) =>
            settaxPayloads({
              taxRulesAppliesTo: e.target.value.split(","),
            })
          }
        />
        <input
          type="checkbox"
          checked={taxPayloads.taxRulesIsActive}
          onChange={(e) =>
            settaxPayloads({
              taxRulesIsActive: e.target.checked,
            })
          }
        />
        <input
          type="number"
          placeholder="Priority"
          value={taxPayloads.taxRulesPriority}
          onChange={(e) =>
            settaxPayloads({
              taxRulesPriority: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Country"
          value={taxPayloads.taxRulesCountry}
          onChange={(e) => settaxPayloads({ taxRulesCountry: e.target.value })}
        />

        {/* LUXURY TAX */}
        <input
          type="number"
          placeholder="Luxury Rate"
          value={taxPayloads.LUXURY_TAXRate}
          onChange={(e) =>
            settaxPayloads({
              LUXURY_TAXRate: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Luxury Type"
          value={taxPayloads.LUXURY_TAXType}
          onChange={(e) => settaxPayloads({ LUXURY_TAXType: e.target.value })}
        />
        <input
          placeholder="Luxury Applies To"
          value={taxPayloads.LUXURY_TAXAppliesTo.join(",")}
          onChange={(e) =>
            settaxPayloads({
              LUXURY_TAXAppliesTo: e.target.value.split(","),
            })
          }
        />
        <input
          type="checkbox"
          checked={taxPayloads.LUXURY_TAXIsActive}
          onChange={(e) =>
            settaxPayloads({
              LUXURY_TAXIsActive: e.target.checked,
            })
          }
        />
        <input
          type="number"
          placeholder="Luxury Priority"
          value={taxPayloads.LUXURY_TAXPriority}
          onChange={(e) =>
            settaxPayloads({
              LUXURY_TAXPriority: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Luxury Country"
          value={taxPayloads.LUXURY_TAXCountry}
          onChange={(e) =>
            settaxPayloads({ LUXURY_TAXCountry: e.target.value })
          }
        />

        {/* ZERO TAX */}
        <input
          type="number"
          placeholder="Zero Rate"
          value={taxPayloads.ZERO_TAXRate}
          onChange={(e) =>
            settaxPayloads({
              ZERO_TAXRate: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Zero Type"
          value={taxPayloads.ZERO_TAXType}
          onChange={(e) => settaxPayloads({ ZERO_TAXType: e.target.value })}
        />
        <input
          placeholder="Zero Applies To"
          value={taxPayloads.ZERO_TAXAppliesTo.join(",")}
          onChange={(e) =>
            settaxPayloads({
              ZERO_TAXAppliesTo: e.target.value.split(","),
            })
          }
        />
        <input
          type="checkbox"
          checked={taxPayloads.ZERO_TAXIsActive}
          onChange={(e) =>
            settaxPayloads({
              ZERO_TAXIsActive: e.target.checked,
            })
          }
        />
        <input
          type="number"
          placeholder="Zero Priority"
          value={taxPayloads.ZERO_TAXPriority}
          onChange={(e) =>
            settaxPayloads({
              ZERO_TAXPriority: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Zero Country"
          value={taxPayloads.ZERO_TAXCountry}
          onChange={(e) => settaxPayloads({ ZERO_TAXCountry: e.target.value })}
        />

        {/* RULE ENGINE */}
        <input
          type="checkbox"
          checked={taxPayloads.rulesEngineStackable}
          onChange={(e) =>
            settaxPayloads({
              rulesEngineStackable: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={taxPayloads.rulesEngineCompoundTax}
          onChange={(e) =>
            settaxPayloads({
              rulesEngineCompoundTax: e.target.checked,
            })
          }
        />
        <input
          placeholder="Rounding Method"
          value={taxPayloads.rulesEngineRoundingMethod}
          onChange={(e) =>
            settaxPayloads({
              rulesEngineRoundingMethod: e.target.value,
            })
          }
        />
        <input
          type="checkbox"
          checked={taxPayloads.rulesEngineDisplayTaxInclusive}
          onChange={(e) =>
            settaxPayloads({
              rulesEngineDisplayTaxInclusive: e.target.checked,
            })
          }
        />

        {/* AUDIT */}
        <input
          placeholder="Created At"
          value={taxPayloads.auditCreatedAt}
          onChange={(e) => settaxPayloads({ auditCreatedAt: e.target.value })}
        />
        <input
          placeholder="Updated At"
          value={taxPayloads.auditUpdatedAt}
          onChange={(e) => settaxPayloads({ auditUpdatedAt: e.target.value })}
        />
        <input
          placeholder="Updated By"
          value={taxPayloads.auditUpdatedBy}
          onChange={(e) => settaxPayloads({ auditUpdatedBy: e.target.value })}
        />
      </div>
    </div>
  );
}
