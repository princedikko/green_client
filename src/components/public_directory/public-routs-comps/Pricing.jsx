import React from "react";
import "./pricing.css";
import ImageOne from "./skillpoint.png";
const plans = [
  {
    name: "STANDARD",
    serviceId: "srv-d6sln7paae7s73ddqh10",
    priceYearly: "₦2,755.50",
    priceMonthly: "₦3,865.50",
    actualPrice: 3850,
    currency: "NGN",
    discount: "46% off for 3 months",
    features: [
      {
        discription: "40 barcode label creation",
        logo: ImageOne,
      },
      {
        discription: "40 qrcode label creation",
        logo: ImageOne,
      },
      {
        discription: "export excel",
        logo: ImageOne,
      },
      {
        discription: "export pdf",
        logo: ImageOne,
      },
      {
        discription: "export csv",
        logo: ImageOne,
      },
      {
        discription: "100 unique items",
        logo: ImageOne,
      },
      {
        discription: "1 user",
        logo: ImageOne,
      },
    ],
  },
  {
    name: "PROFESSIONAL",
    priceYearly: "₦4,750.94",
    priceMonthly: "₦5,950.94",
    actualPrice: 5950.94,
    currency: "NGN",
    discount: "46% off for 3 months",
    features: [
      {
        discription: "40 barcode label creation",
        logo: ImageOne,
      },
      {
        discription: "40 qrcode label creation",
        logo: ImageOne,
      },
      {
        discription: "export excel",
        logo: ImageOne,
      },
      {
        discription: "export pdf",
        logo: ImageOne,
      },
      {
        discription: "export csv",
        logo: ImageOne,
      },
      {
        discription: "500 unique items",
        logo: ImageOne,
      },
      {
        discription: "7 user",
        logo: ImageOne,
      },
    ],
  },
  {
    name: "PREMIUM",
    priceYearly: "₦12,500.00",
    priceMonthly: "₦16,500.00",
    actualPrice: 16500.0,
    currency: "NGN",
    discount: "46% off for 3 months",
    features: [
      {
        discription: "40 barcode label creation",
        logo: ImageOne,
      },
      {
        discription: "40 qrcode label creation",
        logo: ImageOne,
      },
      {
        discription: "export excel",
        logo: ImageOne,
      },
      {
        discription: "export pdf",
        logo: ImageOne,
      },
      {
        discription: "export csv",
        logo: ImageOne,
      },
      {
        discription: "2,000 unique items",
        logo: ImageOne,
      },
      {
        discription: "12 users",
        logo: ImageOne,
      },
    ],
  },
  {
    name: "ENTERPRISE",
    price: "",
    priceYearly: "₦20,850.00",
    priceMonthly: "₦25,850.00",
    actualPrice: 20850.0,
    currency: "NGN",
    discount: "46% off for 3 months",
    features: [
      {
        discription: "40 barcode label creation",
        logo: ImageOne,
      },
      {
        discription: "40 qrcode label creation",
        logo: ImageOne,
      },
      {
        discription: "export excel",
        logo: ImageOne,
      },
      {
        discription: "export pdf",
        logo: ImageOne,
      },
      {
        discription: "export csv",
        logo: ImageOne,
      },
      {
        discription: "15,000 unique items",
        logo: ImageOne,
      },
      {
        discription: "45 user +",
        logo: ImageOne,
      },
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
              asdf
              <span>/mo</span>
            </div>

            <p className="users">asfda</p>

            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f.discription}</li>
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
