import React from "react";
import "./pricing.css";

const plans = [
  {
    name: "STANDARD",
    serviceId: "srv-d6sln7paae7s73ddqh10",
    price: "₦3,865.50",
    features: [
      "40 barcode label creation",
      "40 qrcode label creation",
      "export excel",
      "export pdf",
      "export csv",
      "100 unique items",
      "1 user",
    ],
  },
  {
    name: "PROFESSIONAL",
    price: "₦5,950.94",
    features: [
      "40 barcode label creation",
      "export excel",
      "export pdf",
      "500 unique items",
      "7 user",
    ],
  },
  {
    name: "PREMIUM",
    price: "₦16,500.00",
    features: [
      "40 barcode label creation",
      "40 qrcode label creation",
      "export excel",
      "export pdf",
      "export csv",
      "2,000 unique items",
      "12 user",
      "bulk items upload",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "₦25,850.00",
    features: [
      "40 barcode label creation",
      "40 qrcode label creation",
      "export excel",
      "export pdf",
      "export csv",
      "15,000 unique items",
      "45 user +",
      "bulk items upload",
    ],
  },
];
const comparisonRows = [
  {
    title: "Unique Items",
    values: ["100", "500", "2,000", "15,000"],
  },
  {
    title: "User Licenses",
    values: ["1", "2", "5", "8"],
  },
  {
    title: "Inventory Import",
    values: ["✓", "✓", "✓", "✓"],
  },
  {
    title: "QR Code Labels",
    values: ["", "✓", "✓", "✓"],
  },
  {
    title: "Purchase Orders",
    values: ["", "", "✓", "✓"],
  },
  {
    title: "API Access",
    values: ["", "", "", ""],
  },
];

export default function PricingPage() {
  return (
    <div className="pricing-container">
      <h1 className="title">Start Your 14-Day Free Trial Today</h1>
      <p className="subtitle">
        Transform how your business does inventory with our powerful system.
      </p>

      {/* PRICING CARDS */}

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
          >
            <h3>{plan.name}</h3>

            <div className="price">
              {plan.price}
              <span>/mo</span>
            </div>

            <p className="users">{plan.users}</p>

            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <button className="kjljlasdfa">Register</button>
          </div>
        ))}
      </div>

      {/* COMPARISON TABLE */}

      <h2 className="compare-title">Compare Plans</h2>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Feature</th>
            {plans.map((plan, index) => (
              <th key={index}>{plan.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {comparisonRows.map((row, index) => (
            <tr key={index}>
              <td>{row.title}</td>

              {row.values.map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
