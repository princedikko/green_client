import React, { useState } from "react";
import "./pricing.css";

import { useNavigate } from "react-router-dom";
import Header from "../home-page/home-comps/Header";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import IosShareIcon from "@mui/icons-material/IosShare";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../home-page/home-comps/Footer";

export default function PricingPage() {
  const redirect = useNavigate();
  const [billingCycle, setBillingCycle] = useState("yearly");
  const plans = [
    {
      name: "Standard",
      serviceId: "srv-d6sln7paae7s73ddqh10",
      priceYearly: 46386.0,
      priceMonthly: 3865.5,
      actualPrice: 12650,
      currency: "NGN",
      discount: "20% Off for yearly",
      class: "standard",
      actionBtn: "Get Started",
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
      footer: "",
    },
    {
      name: "Professional",
      serviceId: "srv-d6sln7paae7s73ddqh10",
      priceYearly: 71411.28,
      priceMonthly: 5950.94,
      actualPrice: 18500.0,
      currency: "NGN",
      discount: "20% Off for yearly",
      class: "professional",
      tag: "Most Popular",
      actionBtn: "Start Professionally",
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
      footer:
        "Ideal for growing businesses that require advanced inventory management, multi-user access, and enhanced reporting features to streamline operations and support expansion.",
    },
    {
      name: "Premium",
      serviceId: "srv-d6sln7paae7s73ddqh10",
      priceYearly: 198000.0,
      priceMonthly: 16500.0,
      actualPrice: 49500.0,
      currency: "NGN",
      discount: "20% Off for yearly",
      class: "premium",
      actionBtn: "Go Premium",
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
      footer:
        "Built for established businesses that require powerful inventory control, team collaboration, detailed reporting, and scalable operations for higher sales volume.",
    },
    {
      name: "Enterprise",
      serviceId: "srv-d6sln7paae7s73ddqh10",
      price: "",
      priceYearly: 310200.0,
      priceMonthly: 25850.0,
      actualPrice: 77550.0,
      currency: "NGN",
      discount: "20% Off for yearly",
      class: "enterprise",
      tag: "Advance",
      actionBtn: "Unlock Full Access",
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
      footer:
        "Best for large businesses and multi-location companies that need enterprise-grade performance, massive inventory management, advanced reporting, and support for large teams.",
    },
  ];

  const comparisonRow = [
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
      values: ["✓", "✓", "✓"],
    },
    {
      title: "QR Code Labels",
      values: ["", "✓", "✓"],
    },
    {
      title: "Purchase Orders",
      values: ["", "", "✓"],
    },
    {
      title: "API Access",
      values: ["", "", "", ""],
    },
  ];

  const comparisonSections = [
    {
      heading: "Organize",
      rows: [
        {
          title: "Unique Items",
          values: ["100", "500", "2,000", "5,000"],
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
          title: "Item Photos",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Inventory Lists",
          values: ["✓", "✓", "✓", "✓"],
        },
      ],
    },

    {
      heading: "Customize",
      rows: [
        {
          title: "Custom Fields",
          values: ["1", "5", "10", "Unlimited"],
        },
        {
          title: "Custom Folders",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Custom Tags",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Custom Units of Measurement",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Customizable User Access",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Customizable Role Permissions",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "Limited Access Seats",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "Multi-account Access (MAA)",
          values: ["", "", "", "✓"],
        },
      ],
    },

    {
      heading: "Manage",
      rows: [
        {
          title: "In-app Barcode & QR Code Scanning",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "3rd-party Scanner Support",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "QR Code Label Creation",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Barcode Label Creation",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Item Check-in/Check-out",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Purchase Orders",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "Pick Lists",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "Stock Counts",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Online Orders",
          values: ["", "", "", "✓"],
          badge: "New",
        },
      ],
    },

    {
      heading: "Track and Update",
      rows: [
        {
          title: "Low Stock Alerts",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Date-based Alerts",
          values: ["", "✓", "✓", "✓"],
        },
        {
          title: "Offline Mobile Access",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Automatic Sync",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "In-app Alerts",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Email Alerts",
          values: ["", "✓", "✓", "✓"],
        },
      ],
    },

    {
      heading: "Report",
      rows: [
        {
          title: "Activity History Reports",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Inventory Summary Reports",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "User Activity Summary Reports",
          values: ["", "✓", "✓", "✓"],
        },
        {
          title: "Low Stock Reports",
          values: ["✓", "✓", "✓", "✓"],
        },
        {
          title: "Move Summary Reports",
          values: ["", "✓", "✓", "✓"],
        },
        {
          title: "Item Flow Reports",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "Quantity Change by Item Reports",
          values: ["", "", "", "✓"],
        },
        {
          title: "Saved Reports",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "Report Subscriptions",
          values: ["", "", "", "✓"],
        },
        {
          title: "Activity History",
          values: ["1 month", "1 year", "3 years", "Unlimited"],
        },
        {
          title: "Transaction Reports",
          values: [
            "1-month limit",
            "1-year limit",
            "3-year limit",
            "Unlimited",
          ],
        },
      ],
    },

    {
      heading: "Integrations",
      rows: [
        {
          title: "Amazon Business US",
          values: ["", "", "", "✓"],
          badge: "New",
        },
        {
          title: "QuickBooks Online",
          values: ["", "✓", "✓", "✓"],
        },
        {
          title: "Slack",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "Webhooks",
          values: ["", "", "", "✓"],
        },
        {
          title: "Microsoft Teams",
          values: ["", "", "✓", "✓"],
        },
        {
          title: "API",
          values: ["", "", "", "✓"],
        },
        {
          title: "SSO",
          values: ["", "", "", ""],
        },
      ],
    },
  ];
  return (
    <section className="fx-cl space6">
      <Header />

      <div className="pricing-container fx-cl fx-ac space5">
        <div className="fx-cl space2">
          <h1 className="title">Start Your Inventory Management Today</h1>
          <p className="subtitle">
            Transform how your business does inventory with our powerful system.
          </p>
        </div>
        <div className="fx-ac fx-jc">
          <div className="pricingBtnPln fx-ac fx-jc space3">
            <button
              className={billingCycle === "monthly" ? "active" : ""}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={billingCycle === "yearly" ? "active" : ""}
              onClick={() => setBillingCycle("yearly")}
            >
              Annually <span className="pricingDiscount">-20%</span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS */}

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.class} fx-cl fx-jb space2 ${plan.highlight ? "highlight" : ""}`}
            >
              {plan.tag && <div className="tag">{plan.tag}</div>}
              <div className="fx-cl space2">
                <h3>{plan.name}</h3>
                <div className="fx-cl spacem">
                  <div className="price fx-ac fx-jc spacem">
                    <span className="actualPrice">
                      ₦
                      {billingCycle === "yearly"
                        ? ((plan.priceYearly * 80) / 100).toLocaleString()
                        : plan.priceMonthly?.toLocaleString()}
                    </span>
                    <span className="pastPrice fx-cl">
                      <span style={{ textDecoration: "line-through" }}>
                        ₦
                        {billingCycle === "yearly"
                          ? (plan.actualPrice * 12).toLocaleString()
                          : plan.actualPrice?.toLocaleString()}
                      </span>
                      <span>{plan.currency}</span>
                    </span>
                  </div>
                  <div className="fx-ac fx-jc spacem">
                    <figure className="perOff">{plan.discount}</figure>
                  </div>
                </div>
                <p className="users">
                  {billingCycle === "yearly"
                    ? `Billed annually, save ₦${(
                        Math.round(((plan.priceYearly * 20) / 100) * 100) / 100
                      ).toLocaleString()}`
                    : "Billed monthly"}
                </p>
                <button
                  className="planExecuteBtn"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent(plan.name.toLowerCase())}&serviceId=${encodeURIComponent(plan.serviceId)}`,
                    )
                  }
                >
                  {plan.actionBtn}
                </button>
              </div>

              <div className="fx-cl space6 fg1 fx-jb">
                <div className="fx-cl spacem">
                  <span className="planDiscHeading">
                    Everything in Standard plus
                  </span>
                  <ul>
                    {plan.features.map((f, i) => (
                      <li key={i} className="fx-ac spacem">
                        <figure className="featuresIcon">{f.logo}</figure>
                        <span className="featuresDisc">{f.discription}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="prcFooter">{plan.footer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div
          className="fx-cl space6"
          style={{ padding: "0rem 2.4rem", width: "90%" }}
        >
          <div className="compare-title fx-cl spacem fx-jc">
            <h2 className="compare-title-btn">Compare Plans</h2>
            <p className="fs7">See how our plans compare side by side.</p>
          </div>
          <div className="fx-cl space3">
            <div className="tableHeaderPrices">
              <span style={{ fontstyle: "italic" }}>
                Manage your business inventory with smart tools designed for
                speed, accuracy, and growth — all in one powerful platform.
              </span>
              <div className="tableHeaderPricesCard fx-cl fx-ac space1">
                <span>
                  <strong>Standard</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtn"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent("standard")}&serviceId=${encodeURIComponent("347987sdafsdfa8afa")}`,
                    )
                  }
                >
                  Select Plan
                </button>
              </div>
              <div className="tableHeaderPricesCard fx-cl fx-ac space1">
                <span>
                  <strong>Professional</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtn"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent("professional")}&serviceId=${encodeURIComponent("347987sdafsdfa8afa")}`,
                    )
                  }
                >
                  Select Plan
                </button>
              </div>
              <div className="tableHeaderPricesCard fx-cl fx-ac space1">
                <span>
                  <strong>Premium</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtn"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent("premium")}&serviceId=${encodeURIComponent("347987sdafsdfa8afa")}`,
                    )
                  }
                >
                  Select Plan
                </button>
              </div>
              <div className="tableHeaderPricesCard fx-cl fx-ac space1">
                <span>
                  <strong>Enterprise</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtn"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent("enterprise")}&serviceId=${encodeURIComponent("347987sdafsdfa8afa")}`,
                    )
                  }
                >
                  Select Plan
                </button>
              </div>
            </div>

            <table className="compare-table">
              <thead>
                {/* <tr>
                <th>Feature</th>
                {plans.map((plan, index) => (
                  <th key={index}>{plan.name}</th>
                ))}
              </tr> */}
              </thead>

              <tbody>
                {comparisonSections.map((section, sectionIndex) => (
                  <React.Fragment key={sectionIndex}>
                    {/* Heading Row */}
                    <tr className="pricingHeadInTable">
                      <td colSpan={6}>{section.heading}</td>
                    </tr>

                    {/* Feature Rows */}
                    {section.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span>{row.title}</span>

                            {row.badge && (
                              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                {row.badge}
                              </span>
                            )}
                          </div>
                        </td>

                        {row.values.map((val, i) => (
                          <td key={i} className="text-center px-4 py-3">
                            {val || <RemoveIcon />}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
