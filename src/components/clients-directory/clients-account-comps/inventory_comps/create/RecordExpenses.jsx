import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function RecordExpenses() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [expensesPayload, setexpensesPayload] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      expenseId: "EXP-2026-000321",
      expenseType: "OPERATING_EXPENSE",

      statusCurrent: "APPROVED",
      statusSubmittedAt: "2026-04-30T09:00:00Z",
      statusApprovedAt: "2026-04-30T10:30:00Z",

      category: "UTILITIES",

      itemsName_1: "Electricity",
      itemsAmount_1: 45000,
      itemsCurrency_1: "NGN",
      itemsDescription_1: "Monthly electricity bill",

      itemsName_2: "Internet",
      itemsAmount_2: 15000,
      itemsCurrency_2: "NGN",
      itemsDescription_2: "Office internet subscription",

      paymentTotalAmount: 60000,
      paymentCurrency: "NGN",
      paymentMethod: "BANK_TRANSFER",
      paymentPaid: true,
      paymentPaidAt: "2026-04-30T11:00:00Z",
      paymentReference: "PAY-INV-88921",

      vendorName: "IKEDC",
      vendorType: "UTILITY_PROVIDER",
      vendorContact: "support@ikedc.com",

      locationBranchId: "BR-001",
      locationName: "Main Store - Lagos",

      approvedByUserId: "USR-2001",
      approvedByName: "Finance Manager",

      submittedByUserId: "USR-1001",
      submittedByName: "Account Officer",

      receiptHasReceipt: true,
      receiptUrl: "https://cdn.example.com/expenses/exp-321.pdf",

      scheduleExpenseDate: "2026-04-30",
      scheduleRecurring: false,
      scheduleFrequency: null,

      impactAffectsInventory: false,
      impactAffectsProfit: true,
      impactAffectsCashFlow: true,

      notes: "Monthly operational expenses for store running",

      createdAt: "2026-04-30T09:00:00Z",

      auditTrailAction_1: "CREATED",
      auditTrailBy_1: "USR-1001",
      auditTrailTimestamp_1: "2026-04-30T09:00:00Z",

      auditTrailAction_2: "APPROVED",
      auditTrailBy_2: "USR-2001",
      auditTrailTimestamp_2: "2026-04-30T10:30:00Z",

      auditTrailAction_3: "PAID",
      auditTrailBy_3: "USR-1001",
      auditTrailTimestamp_3: "2026-04-30T11:00:00Z",
    },
  );

  const payload = {
    expenseId: expensesPayload.expenseId,
    expenseType: expensesPayload.expenseType,

    status: {
      current: expensesPayload.statusCurrent,
      submittedAt: expensesPayload.statusSubmittedAt,
      approvedAt: expensesPayload.statusApprovedAt,
    },

    category: expensesPayload.category,

    items: [
      {
        name: expensesPayload.itemsName_1,
        amount: expensesPayload.itemsAmount_1,
        currency: expensesPayload.itemsCurrency_1,
        description: expensesPayload.itemsDescription_1,
      },
      {
        name: expensesPayload.itemsName_2,
        amount: expensesPayload.itemsAmount_2,
        currency: expensesPayload.itemsCurrency_2,
        description: expensesPayload.itemsDescription_2,
      },
    ],

    payment: {
      totalAmount: expensesPayload.paymentTotalAmount,
      currency: expensesPayload.paymentCurrency,
      paymentMethod: expensesPayload.paymentMethod,
      paid: expensesPayload.paymentPaid,
      paidAt: expensesPayload.paymentPaidAt,
      reference: expensesPayload.paymentReference,
    },

    vendor: {
      name: expensesPayload.vendorName,
      type: expensesPayload.vendorType,
      contact: expensesPayload.vendorContact,
    },

    location: {
      branchId: expensesPayload.locationBranchId,
      name: expensesPayload.locationName,
    },

    approvedBy: {
      userId: expensesPayload.approvedByUserId,
      name: expensesPayload.approvedByName,
    },

    submittedBy: {
      userId: expensesPayload.submittedByUserId,
      name: expensesPayload.submittedByName,
    },

    receipt: {
      hasReceipt: expensesPayload.receiptHasReceipt,
      receiptUrl: expensesPayload.receiptUrl,
    },

    schedule: {
      expenseDate: expensesPayload.scheduleExpenseDate,
      recurring: expensesPayload.scheduleRecurring,
      frequency: expensesPayload.scheduleFrequency,
    },

    impact: {
      affectsInventory: expensesPayload.impactAffectsInventory,
      affectsProfit: expensesPayload.impactAffectsProfit,
      affectsCashFlow: expensesPayload.impactAffectsCashFlow,
    },

    notes: expensesPayload.notes,

    createdAt: expensesPayload.createdAt,

    auditTrail: [
      {
        action: expensesPayload.auditTrailAction_1,
        by: expensesPayload.auditTrailBy_1,
        timestamp: expensesPayload.auditTrailTimestamp_1,
      },
      {
        action: expensesPayload.auditTrailAction_2,
        by: expensesPayload.auditTrailBy_2,
        timestamp: expensesPayload.auditTrailTimestamp_2,
      },
      {
        action: expensesPayload.auditTrailAction_3,
        by: expensesPayload.auditTrailBy_3,
        timestamp: expensesPayload.auditTrailTimestamp_3,
      },
    ],
  };

  async function apiPostExpense() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/expenses/post`,
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

      console.log("Expense response:", response);
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
    <div id="createCont" className="fx-cl space2">
      <h2 className="title">Record Expenses</h2>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        <button onClick={() => apiPostExpense()}>Post</button>

        {/* EXPENSE */}
        <input
          value={expensesPayload.expenseId || ""}
          onChange={(e) => setexpensesPayload({ expenseId: e.target.value })}
        />
        <input
          value={expensesPayload.expenseType || ""}
          onChange={(e) => setexpensesPayload({ expenseType: e.target.value })}
        />

        {/* STATUS */}
        <input
          value={expensesPayload.statusCurrent || ""}
          onChange={(e) =>
            setexpensesPayload({ statusCurrent: e.target.value })
          }
        />
        <input
          value={expensesPayload.statusSubmittedAt || ""}
          onChange={(e) =>
            setexpensesPayload({ statusSubmittedAt: e.target.value })
          }
        />
        <input
          value={expensesPayload.statusApprovedAt || ""}
          onChange={(e) =>
            setexpensesPayload({ statusApprovedAt: e.target.value })
          }
        />

        {/* CATEGORY */}
        <input
          value={expensesPayload.category || ""}
          onChange={(e) => setexpensesPayload({ category: e.target.value })}
        />

        {/* ITEMS */}
        {[1, 2].map((i) => (
          <div key={i}>
            <input
              value={expensesPayload[`itemsName_${i}`] || ""}
              onChange={(e) =>
                setexpensesPayload({
                  [`itemsName_${i}`]: e.target.value,
                })
              }
            />
            <input
              type="number"
              value={expensesPayload[`itemsAmount_${i}`] || ""}
              onChange={(e) =>
                setexpensesPayload({
                  [`itemsAmount_${i}`]: Number(e.target.value),
                })
              }
            />
            <input
              value={expensesPayload[`itemsCurrency_${i}`] || ""}
              onChange={(e) =>
                setexpensesPayload({
                  [`itemsCurrency_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={expensesPayload[`itemsDescription_${i}`] || ""}
              onChange={(e) =>
                setexpensesPayload({
                  [`itemsDescription_${i}`]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* PAYMENT */}
        <input
          type="number"
          value={expensesPayload.paymentTotalAmount || ""}
          onChange={(e) =>
            setexpensesPayload({
              paymentTotalAmount: Number(e.target.value),
            })
          }
        />
        <input
          value={expensesPayload.paymentCurrency || ""}
          onChange={(e) =>
            setexpensesPayload({ paymentCurrency: e.target.value })
          }
        />
        <input
          value={expensesPayload.paymentMethod || ""}
          onChange={(e) =>
            setexpensesPayload({ paymentMethod: e.target.value })
          }
        />
        <input
          type="checkbox"
          checked={expensesPayload.paymentPaid || false}
          onChange={(e) =>
            setexpensesPayload({ paymentPaid: e.target.checked })
          }
        />
        <input
          value={expensesPayload.paymentPaidAt || ""}
          onChange={(e) =>
            setexpensesPayload({ paymentPaidAt: e.target.value })
          }
        />
        <input
          value={expensesPayload.paymentReference || ""}
          onChange={(e) =>
            setexpensesPayload({ paymentReference: e.target.value })
          }
        />

        {/* VENDOR */}
        <input
          value={expensesPayload.vendorName || ""}
          onChange={(e) => setexpensesPayload({ vendorName: e.target.value })}
        />
        <input
          value={expensesPayload.vendorType || ""}
          onChange={(e) => setexpensesPayload({ vendorType: e.target.value })}
        />
        <input
          value={expensesPayload.vendorContact || ""}
          onChange={(e) =>
            setexpensesPayload({ vendorContact: e.target.value })
          }
        />

        {/* LOCATION */}
        <input
          value={expensesPayload.locationBranchId || ""}
          onChange={(e) =>
            setexpensesPayload({ locationBranchId: e.target.value })
          }
        />
        <input
          value={expensesPayload.locationName || ""}
          onChange={(e) => setexpensesPayload({ locationName: e.target.value })}
        />

        {/* USERS */}
        <input
          value={expensesPayload.approvedByUserId || ""}
          onChange={(e) =>
            setexpensesPayload({ approvedByUserId: e.target.value })
          }
        />
        <input
          value={expensesPayload.approvedByName || ""}
          onChange={(e) =>
            setexpensesPayload({ approvedByName: e.target.value })
          }
        />
        <input
          value={expensesPayload.submittedByUserId || ""}
          onChange={(e) =>
            setexpensesPayload({ submittedByUserId: e.target.value })
          }
        />
        <input
          value={expensesPayload.submittedByName || ""}
          onChange={(e) =>
            setexpensesPayload({ submittedByName: e.target.value })
          }
        />

        {/* RECEIPT */}
        <input
          type="checkbox"
          checked={expensesPayload.receiptHasReceipt || false}
          onChange={(e) =>
            setexpensesPayload({
              receiptHasReceipt: e.target.checked,
            })
          }
        />
        <input
          value={expensesPayload.receiptUrl || ""}
          onChange={(e) => setexpensesPayload({ receiptUrl: e.target.value })}
        />

        {/* SCHEDULE */}
        <input
          value={expensesPayload.scheduleExpenseDate || ""}
          onChange={(e) =>
            setexpensesPayload({
              scheduleExpenseDate: e.target.value,
            })
          }
        />
        <input
          type="checkbox"
          checked={expensesPayload.scheduleRecurring || false}
          onChange={(e) =>
            setexpensesPayload({
              scheduleRecurring: e.target.checked,
            })
          }
        />
        <input
          value={expensesPayload.scheduleFrequency || ""}
          onChange={(e) =>
            setexpensesPayload({
              scheduleFrequency: e.target.value,
            })
          }
        />

        {/* IMPACT */}
        <input
          type="checkbox"
          checked={expensesPayload.impactAffectsInventory || false}
          onChange={(e) =>
            setexpensesPayload({
              impactAffectsInventory: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={expensesPayload.impactAffectsProfit || false}
          onChange={(e) =>
            setexpensesPayload({
              impactAffectsProfit: e.target.checked,
            })
          }
        />
        <input
          type="checkbox"
          checked={expensesPayload.impactAffectsCashFlow || false}
          onChange={(e) =>
            setexpensesPayload({
              impactAffectsCashFlow: e.target.checked,
            })
          }
        />

        {/* NOTES */}
        <input
          value={expensesPayload.notes || ""}
          onChange={(e) => setexpensesPayload({ notes: e.target.value })}
        />

        {/* META */}
        <input
          value={expensesPayload.createdAt || ""}
          onChange={(e) => setexpensesPayload({ createdAt: e.target.value })}
        />

        {/* AUDIT */}
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <input
              value={expensesPayload[`auditTrailAction_${i}`] || ""}
              onChange={(e) =>
                setexpensesPayload({
                  [`auditTrailAction_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={expensesPayload[`auditTrailBy_${i}`] || ""}
              onChange={(e) =>
                setexpensesPayload({
                  [`auditTrailBy_${i}`]: e.target.value,
                })
              }
            />
            <input
              value={expensesPayload[`auditTrailTimestamp_${i}`] || ""}
              onChange={(e) =>
                setexpensesPayload({
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
