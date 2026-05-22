import React from "react";
import "./pricing.css";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import IosShareIcon from "@mui/icons-material/IosShare";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";

export default function PricingPage() {
  const plans = [
    {
      name: "Standard",
      serviceId: "srv-d6sln7paae7s73ddqh10",
      priceYearly: "₦2,755.50",
      priceMonthly: "₦3,865.50",
      actualPrice: 3850,
      currency: "NGN",
      discount: "46% Off for yearly",
      class: "standard",
      features: [
        {
          discription: "Real time Point of sales",
          logo: <StreamOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 barcode label creation",
          logo: <BrandingWatermarkOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 qrcode label creation",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "export excel",
          logo: <IosShareIcon fontSize="large" />,
        },
        {
          discription: "export pdf",
          logo: <PictureAsPdfOutlinedIcon fontSize="large" />,
        },
        {
          discription: "export csv",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "100 unique items",
          logo: <SellOutlinedIcon fontSize="large" />,
        },
        {
          discription: "1 user",
          logo: <GroupAddOutlinedIcon fontSize="large" />,
        },
        {
          discription: "3 location +",
          logo: <AddLocationAltOutlinedIcon fontSize="large" />,
        },
      ],
    },
    {
      name: "Professional",
      priceYearly: "₦4,750.94",
      priceMonthly: "₦5,950.94",
      actualPrice: 5950.94,
      currency: "NGN",
      discount: "46% Off for yearly",
      class: "professional",
      features: [
        {
          discription: "Real time Point of sales",
          logo: <StreamOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 barcode label creation",
          logo: <BrandingWatermarkOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 qrcode label creation",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "export excel",
          logo: <IosShareIcon fontSize="large" />,
        },
        {
          discription: "export pdf",
          logo: <PictureAsPdfOutlinedIcon fontSize="large" />,
        },
        {
          discription: "export csv",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "500 unique items",
          logo: <SellOutlinedIcon fontSize="large" />,
        },
        {
          discription: "4 users",
          logo: <GroupAddOutlinedIcon fontSize="large" />,
        },
        {
          discription: "2 location +",
          logo: <AddLocationAltOutlinedIcon fontSize="large" />,
        },
      ],
    },
    {
      name: "Premium",
      priceYearly: "₦12,500.00",
      priceMonthly: "₦16,500.00",
      actualPrice: 16500.0,
      currency: "NGN",
      discount: "46% Off for yearly",
      class: "premium",
      features: [
        {
          discription: "Real time Point of sales",
          logo: <StreamOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 barcode label creation",
          logo: <BrandingWatermarkOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 qrcode label creation",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "export excel",
          logo: <IosShareIcon fontSize="large" />,
        },
        {
          discription: "export pdf",
          logo: <PictureAsPdfOutlinedIcon fontSize="large" />,
        },
        {
          discription: "export csv",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "2,000 unique items",
          logo: <SellOutlinedIcon fontSize="large" />,
        },
        {
          discription: "12 users",
          logo: <GroupAddOutlinedIcon fontSize="large" />,
        },
      ],
    },
    {
      name: "Enterprise",
      price: "",
      priceYearly: "₦20,850.00",
      priceMonthly: "₦25,850.00",
      actualPrice: 20850.0,
      currency: "NGN",
      discount: "46% Off for yearly",
      class: "enterprise",
      features: [
        {
          discription: "Real time Point of sales",
          logo: <StreamOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 barcode label creation",
          logo: <BrandingWatermarkOutlinedIcon fontSize="large" />,
        },
        {
          discription: "40 qrcode label creation",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "export excel",
          logo: <IosShareIcon fontSize="large" />,
        },
        {
          discription: "export pdf",
          logo: <PictureAsPdfOutlinedIcon fontSize="large" />,
        },
        {
          discription: "export csv",
          logo: <QrCode2Icon fontSize="large" />,
        },
        {
          discription: "15,000 unique items",
          logo: <SellOutlinedIcon fontSize="large" />,
        },
        {
          discription: "45 users +",
          logo: <GroupAddOutlinedIcon fontSize="large" />,
        },
        {
          discription: "4 location +",
          logo: <AddLocationAltOutlinedIcon fontSize="large" />,
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
  return (
    <div className="pricing-container fx-cl space5">
      <div className="fx-cl space2">
        <h1 className="title">Start Your Inventory Management Today</h1>
        <p className="subtitle">
          Transform how your business does inventory with our powerful system.
        </p>
      </div>
      <div className="fx-ac fx-jc">
        <div className="pricingBtnPln fx-ac fx-jc space3">
          <button>Monthly</button>
          <button className="active">
            Annually <span className="pricingDiscount">-20%</span>
          </button>
        </div>
      </div>

      {/* PRICING CARDS */}

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card fx-cl space2 ${plan.highlight ? "highlight" : ""}`}
          >
            <h3>{plan.name}</h3>

            <div className="price fx-ac fx-jc spacem">
              <span className="actualPrice">{plan?.priceMonthly}</span>
              <span className="pastPrice fx-cl">
                <span>$43.02</span>
                <span>USD</span>
              </span>
            </div>
            <div className="fx-ac fx-jc spacem">
              <figure className="perOff">{plan.discount}</figure>
            </div>

            <p className="users">Per month</p>

            <button className="planExecuteBtn">Try Free for 14 Days</button>

            <ul>
              {plan.features.map((f, i) => (
                <li key={i} className="fx-ac spacem">
                  <figure className="featuresIcon">{f.logo}</figure>
                  <span className="featuresDisc">{f.discription}</span>
                </li>
              ))}
            </ul>
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
