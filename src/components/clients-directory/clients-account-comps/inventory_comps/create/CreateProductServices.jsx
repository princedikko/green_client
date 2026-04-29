import { useEffect, useReducer, useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function CreateProductServices() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [servicesPayloads, setServicesPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      serviceCode: "LAB-SRV-001",
      name: "Product Assembly Service",
      description: "Assembly of products before delivery to customers",

      // category flattened
      categoryType: "labor",
      categorySubType: "physical_labor",
      categoryDepartment: "operations",

      // pricing flattened
      pricingModel: "hourly",
      pricingRate: 2500,
      pricingCurrency: "NGN",
      pricingTaxable: true,
      pricingTaxCategory: "VAT",

      // scope flattened
      scopeAppliesToInventory: true,
      scopeLinkedInventoryIds: ["INV-001", "INV-002"],
      scopeServiceType: ["assembly", "packaging", "maintenance"],

      // work details flattened
      workEstimatedDurationMinutes: 90,
      workDifficultyLevel: "medium",
      workRequiredSkills: ["technical_handling", "product_understanding"],
      workToolsRequired: ["basic_tools", "workbench"],

      // staffing flattened
      staffingAssignedTeam: "operations_team",
      staffingRequiredStaff: 2,
      staffingSkillLevel: "intermediate",

      // status flattened
      statusIsActive: true,
      statusAvailability: "available",
      statusVisibility: "public",

      // performance flattened
      performanceTimesPerformed: 124,
      performanceAverageRating: 4.7,
      performanceCompletionRate: 98,

      // audit flattened
      auditCreatedAt: "2026-04-29T10:00:00Z",
      auditUpdatedAt: "2026-04-29T10:00:00Z",
      auditCreatedBy: "admin",
      auditUpdatedBy: "admin",
    },
  );

  const payload = {
    serviceCode: servicesPayloads.serviceCode,
    name: servicesPayloads.name,
    description: servicesPayloads.description,

    category: {
      type: servicesPayloads.categoryType,
      subType: servicesPayloads.categorySubType,
      department: servicesPayloads.categoryDepartment,
    },

    pricing: {
      model: servicesPayloads.pricingModel,
      rate: servicesPayloads.pricingRate,
      currency: servicesPayloads.pricingCurrency,
      taxable: servicesPayloads.pricingTaxable,
      taxCategory: servicesPayloads.pricingTaxCategory,
    },

    scope: {
      appliesToInventory: servicesPayloads.scopeAppliesToInventory,
      linkedInventoryIds: servicesPayloads.scopeLinkedInventoryIds,
      serviceType: servicesPayloads.scopeServiceType,
    },

    workDetails: {
      estimatedDurationMinutes: servicesPayloads.workEstimatedDurationMinutes,
      difficultyLevel: servicesPayloads.workDifficultyLevel,
      requiredSkills: servicesPayloads.workRequiredSkills,
      toolsRequired: servicesPayloads.workToolsRequired,
    },

    staffing: {
      assignedTeam: servicesPayloads.staffingAssignedTeam,
      requiredStaff: servicesPayloads.staffingRequiredStaff,
      skillLevel: servicesPayloads.staffingSkillLevel,
    },

    status: {
      isActive: servicesPayloads.statusIsActive,
      availability: servicesPayloads.statusAvailability,
      visibility: servicesPayloads.statusVisibility,
    },

    performance: {
      timesPerformed: servicesPayloads.performanceTimesPerformed,
      averageRating: servicesPayloads.performanceAverageRating,
      completionRate: servicesPayloads.performanceCompletionRate,
    },

    audit: {
      createdAt: servicesPayloads.auditCreatedAt,
      updatedAt: servicesPayloads.auditUpdatedAt,
      createdBy: servicesPayloads.auditCreatedBy,
      updatedBy: servicesPayloads.auditUpdatedBy,
    },
  };

  async function postServices() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/product_services/post`,
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
    <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
      <button onClick={() => postServices()}>Post</button>
      {/* BASIC INFO */}
      <input
        placeholder="ID"
        value={servicesPayloads._id}
        onChange={(e) => setServicesPayloads({ _id: e.target.value })}
      />
      <input
        placeholder="Service Code"
        value={servicesPayloads.serviceCode}
        onChange={(e) => setServicesPayloads({ serviceCode: e.target.value })}
      />
      <input
        placeholder="Name"
        value={servicesPayloads.name}
        onChange={(e) => setServicesPayloads({ name: e.target.value })}
      />
      <input
        placeholder="Description"
        value={servicesPayloads.description}
        onChange={(e) => setServicesPayloads({ description: e.target.value })}
      />

      {/* CATEGORY */}
      <input
        placeholder="Category Type"
        value={servicesPayloads.categoryType}
        onChange={(e) => setServicesPayloads({ categoryType: e.target.value })}
      />
      <input
        placeholder="Category Sub Type"
        value={servicesPayloads.categorySubType}
        onChange={(e) =>
          setServicesPayloads({ categorySubType: e.target.value })
        }
      />
      <input
        placeholder="Category Department"
        value={servicesPayloads.categoryDepartment}
        onChange={(e) =>
          setServicesPayloads({ categoryDepartment: e.target.value })
        }
      />

      {/* PRICING */}
      <input
        placeholder="Pricing Model"
        value={servicesPayloads.pricingModel}
        onChange={(e) => setServicesPayloads({ pricingModel: e.target.value })}
      />
      <input
        type="number"
        placeholder="Pricing Rate"
        value={servicesPayloads.pricingRate}
        onChange={(e) =>
          setServicesPayloads({ pricingRate: Number(e.target.value) })
        }
      />
      <input
        placeholder="Currency"
        value={servicesPayloads.pricingCurrency}
        onChange={(e) =>
          setServicesPayloads({ pricingCurrency: e.target.value })
        }
      />
      <input
        type="checkbox"
        checked={servicesPayloads.pricingTaxable}
        onChange={(e) =>
          setServicesPayloads({ pricingTaxable: e.target.checked })
        }
      />
      <input
        placeholder="Tax Category"
        value={servicesPayloads.pricingTaxCategory}
        onChange={(e) =>
          setServicesPayloads({ pricingTaxCategory: e.target.value })
        }
      />

      {/* SCOPE */}
      <input
        placeholder="Applies To Inventory"
        type="checkbox"
        checked={servicesPayloads.scopeAppliesToInventory}
        onChange={(e) =>
          setServicesPayloads({ scopeAppliesToInventory: e.target.checked })
        }
      />
      <input
        placeholder="Linked Inventory IDs"
        value={servicesPayloads.scopeLinkedInventoryIds.join(",")}
        onChange={(e) =>
          setServicesPayloads({
            scopeLinkedInventoryIds: e.target.value.split(","),
          })
        }
      />
      <input
        placeholder="Service Types"
        value={servicesPayloads.scopeServiceType.join(",")}
        onChange={(e) =>
          setServicesPayloads({ scopeServiceType: e.target.value.split(",") })
        }
      />

      {/* WORK DETAILS */}
      <input
        type="number"
        placeholder="Duration (mins)"
        value={servicesPayloads.workEstimatedDurationMinutes}
        onChange={(e) =>
          setServicesPayloads({
            workEstimatedDurationMinutes: Number(e.target.value),
          })
        }
      />
      <input
        placeholder="Difficulty Level"
        value={servicesPayloads.workDifficultyLevel}
        onChange={(e) =>
          setServicesPayloads({ workDifficultyLevel: e.target.value })
        }
      />
      <input
        placeholder="Required Skills"
        value={servicesPayloads.workRequiredSkills.join(",")}
        onChange={(e) =>
          setServicesPayloads({ workRequiredSkills: e.target.value.split(",") })
        }
      />
      <input
        placeholder="Tools Required"
        value={servicesPayloads.workToolsRequired.join(",")}
        onChange={(e) =>
          setServicesPayloads({ workToolsRequired: e.target.value.split(",") })
        }
      />

      {/* STAFFING */}
      <input
        placeholder="Assigned Team"
        value={servicesPayloads.staffingAssignedTeam}
        onChange={(e) =>
          setServicesPayloads({ staffingAssignedTeam: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Required Staff"
        value={servicesPayloads.staffingRequiredStaff}
        onChange={(e) =>
          setServicesPayloads({ staffingRequiredStaff: Number(e.target.value) })
        }
      />
      <input
        placeholder="Skill Level"
        value={servicesPayloads.staffingSkillLevel}
        onChange={(e) =>
          setServicesPayloads({ staffingSkillLevel: e.target.value })
        }
      />

      {/* STATUS */}
      <input
        type="checkbox"
        checked={servicesPayloads.statusIsActive}
        onChange={(e) =>
          setServicesPayloads({ statusIsActive: e.target.checked })
        }
      />
      <input
        placeholder="Availability"
        value={servicesPayloads.statusAvailability}
        onChange={(e) =>
          setServicesPayloads({ statusAvailability: e.target.value })
        }
      />
      <input
        placeholder="Visibility"
        value={servicesPayloads.statusVisibility}
        onChange={(e) =>
          setServicesPayloads({ statusVisibility: e.target.value })
        }
      />

      {/* PERFORMANCE */}
      <input
        type="number"
        placeholder="Times Performed"
        value={servicesPayloads.performanceTimesPerformed}
        onChange={(e) =>
          setServicesPayloads({
            performanceTimesPerformed: Number(e.target.value),
          })
        }
      />
      <input
        type="number"
        placeholder="Average Rating"
        value={servicesPayloads.performanceAverageRating}
        onChange={(e) =>
          setServicesPayloads({
            performanceAverageRating: Number(e.target.value),
          })
        }
      />
      <input
        type="number"
        placeholder="Completion Rate"
        value={servicesPayloads.performanceCompletionRate}
        onChange={(e) =>
          setServicesPayloads({
            performanceCompletionRate: Number(e.target.value),
          })
        }
      />

      {/* AUDIT */}
      <input
        placeholder="Created At"
        value={servicesPayloads.auditCreatedAt}
        onChange={(e) =>
          setServicesPayloads({ auditCreatedAt: e.target.value })
        }
      />
      <input
        placeholder="Updated At"
        value={servicesPayloads.auditUpdatedAt}
        onChange={(e) =>
          setServicesPayloads({ auditUpdatedAt: e.target.value })
        }
      />
      <input
        placeholder="Created By"
        value={servicesPayloads.auditCreatedBy}
        onChange={(e) =>
          setServicesPayloads({ auditCreatedBy: e.target.value })
        }
      />
      <input
        placeholder="Updated By"
        value={servicesPayloads.auditUpdatedBy}
        onChange={(e) =>
          setServicesPayloads({ auditUpdatedBy: e.target.value })
        }
      />
    </div>
  );
}
