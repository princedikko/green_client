import { useState, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function AcceptReturn() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [acceptRtnPayloads, setAcceptRtnPayloads] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      sale_id: "66492e5ac8d21a12",

      // customer flattened
      customerCustomer_id: "664812e5ac8d21a12",
      customerName: "Abdullahi Musa",
      customerPhone: "08034567890",

      // returned_items flattened (single object)
      returnedItemsProduct_id: "664812e5ac8d21a44",
      returnedItemsProduct_name: "Samsung Charger",
      returnedItemsBatch_no: "BATCH123",
      returnedItemsExpiry_date: "2025-12-31",
      returnedItemsQuantity_returned: 1,
      returnedItemsSold_price: 3500,
      returnedItemsSubtotal: 3500,
      returnedItemsReason: "Defective",
      returnedItemsDescription:
        "The charger stopped working after a week of use.",

      invoiceNo: "INV123456",
      total_return_amount: 3500,
      refund_method: "cash",

      // processed_by flattened
      processedByUser_id: "66481111c8d21a99",
      processedByName: "Ameenat",

      return_date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    },
  );
  const payload = {
    sale_id: acceptRtnPayloads.sale_id,

    customer: {
      customer_id: acceptRtnPayloads.customerCustomer_id,
      name: acceptRtnPayloads.customerName,
      phone: acceptRtnPayloads.customerPhone,
    },

    returned_items: [
      {
        product_id: acceptRtnPayloads.returnedItemsProduct_id,
        product_name: acceptRtnPayloads.returnedItemsProduct_name,
        batch_no: acceptRtnPayloads.returnedItemsBatch_no,
        expiry_date: acceptRtnPayloads.returnedItemsExpiry_date,
        quantity_returned: acceptRtnPayloads.returnedItemsQuantity_returned,
        sold_price: acceptRtnPayloads.returnedItemsSold_price,
        subtotal: acceptRtnPayloads.returnedItemsSubtotal,
        reason: acceptRtnPayloads.returnedItemsReason,
        description: acceptRtnPayloads.returnedItemsDescription,
      },
    ],

    invoiceNo: acceptRtnPayloads.invoiceNo,
    total_return_amount: acceptRtnPayloads.total_return_amount,
    refund_method: acceptRtnPayloads.refund_method,

    processed_by: {
      user_id: acceptRtnPayloads.processedByUser_id,
      name: acceptRtnPayloads.processedByName,
    },

    return_date: acceptRtnPayloads.return_date,
  };

  async function acceptSellReturn() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/client/691a663dc9f64e6b9b8be48e/manage_products/sellreturn/post`,
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

      console.log("Production response:", response);
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
      <h1>Accept Return</h1>
      <div className="fx-cl" style={{ gap: "12px", padding: "20px" }}>
        {/* BASIC INFO */}
        <input
          placeholder="Sale ID"
          value={acceptRtnPayloads.sale_id}
          onChange={(e) => setAcceptRtnPayloads({ sale_id: e.target.value })}
        />

        {/* CUSTOMER */}
        <input
          placeholder="Customer ID"
          value={acceptRtnPayloads.customerCustomer_id}
          onChange={(e) =>
            setAcceptRtnPayloads({ customerCustomer_id: e.target.value })
          }
        />
        <input
          placeholder="Customer Name"
          value={acceptRtnPayloads.customerName}
          onChange={(e) =>
            setAcceptRtnPayloads({ customerName: e.target.value })
          }
        />
        <input
          placeholder="Customer Phone"
          value={acceptRtnPayloads.customerPhone}
          onChange={(e) =>
            setAcceptRtnPayloads({ customerPhone: e.target.value })
          }
        />

        {/* RETURNED ITEMS */}
        <input
          placeholder="Product ID"
          value={acceptRtnPayloads.returnedItemsProduct_id}
          onChange={(e) =>
            setAcceptRtnPayloads({ returnedItemsProduct_id: e.target.value })
          }
        />
        <input
          placeholder="Product Name"
          value={acceptRtnPayloads.returnedItemsProduct_name}
          onChange={(e) =>
            setAcceptRtnPayloads({ returnedItemsProduct_name: e.target.value })
          }
        />
        <input
          placeholder="Batch No"
          value={acceptRtnPayloads.returnedItemsBatch_no}
          onChange={(e) =>
            setAcceptRtnPayloads({ returnedItemsBatch_no: e.target.value })
          }
        />
        <input
          placeholder="Expiry Date"
          value={acceptRtnPayloads.returnedItemsExpiry_date}
          onChange={(e) =>
            setAcceptRtnPayloads({ returnedItemsExpiry_date: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Quantity Returned"
          value={acceptRtnPayloads.returnedItemsQuantity_returned}
          onChange={(e) =>
            setAcceptRtnPayloads({
              returnedItemsQuantity_returned: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Sold Price"
          value={acceptRtnPayloads.returnedItemsSold_price}
          onChange={(e) =>
            setAcceptRtnPayloads({
              returnedItemsSold_price: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="Subtotal"
          value={acceptRtnPayloads.returnedItemsSubtotal}
          onChange={(e) =>
            setAcceptRtnPayloads({
              returnedItemsSubtotal: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Reason"
          value={acceptRtnPayloads.returnedItemsReason}
          onChange={(e) =>
            setAcceptRtnPayloads({ returnedItemsReason: e.target.value })
          }
        />
        <input
          placeholder="Description"
          value={acceptRtnPayloads.returnedItemsDescription}
          onChange={(e) =>
            setAcceptRtnPayloads({ returnedItemsDescription: e.target.value })
          }
        />

        {/* PAYMENT INFO */}
        <input
          placeholder="Invoice No"
          value={acceptRtnPayloads.invoiceNo}
          onChange={(e) => setAcceptRtnPayloads({ invoiceNo: e.target.value })}
        />
        <input
          type="number"
          placeholder="Total Return Amount"
          value={acceptRtnPayloads.total_return_amount}
          onChange={(e) =>
            setAcceptRtnPayloads({
              total_return_amount: Number(e.target.value),
            })
          }
        />
        <input
          placeholder="Refund Method"
          value={acceptRtnPayloads.refund_method}
          onChange={(e) =>
            setAcceptRtnPayloads({ refund_method: e.target.value })
          }
        />

        {/* PROCESSED BY */}
        <input
          placeholder="User ID"
          value={acceptRtnPayloads.processedByUser_id}
          onChange={(e) =>
            setAcceptRtnPayloads({ processedByUser_id: e.target.value })
          }
        />
        <input
          placeholder="Processed By Name"
          value={acceptRtnPayloads.processedByName}
          onChange={(e) =>
            setAcceptRtnPayloads({ processedByName: e.target.value })
          }
        />

        {/* RETURN DATE */}
        <input
          placeholder="Return Date"
          value={acceptRtnPayloads.return_date}
          onChange={(e) =>
            setAcceptRtnPayloads({ return_date: e.target.value })
          }
        />
      </div>
    </div>
  );
}
