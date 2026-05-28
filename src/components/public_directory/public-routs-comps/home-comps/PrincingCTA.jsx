import React, { useState } from "react";
import "./pricingCTA.css";
import { useNavigate } from "react-router-dom";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

export default function PricingCTA() {
  const redirect = useNavigate();
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
          values: ["01", "05", "10", "Unlimited"],
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
    <div className="homeCTAComparePlans fx-cl space6">
      <div className="compareHomeCTA-title fx-cl spacem fx-jc">
        <h2 className="compareHomeCTA-title-btn">Compare Our Plans</h2>
        <p className="fs7">See how our plans are compared side by side.</p>
      </div>
      <div className="fx-cl space3">
        <div className="advanceTableHomeComparePlanCTA fs4 fw300">
          <div className="advanceTableTbody advanceTableTbodyFirst fx-cl">
            <div className="tableHeaderPrices fs3">
              <span style={{ fontstyle: "italic" }}>&nbsp;</span>
            </div>
            {comparisonSections.map((section, sectionIndex) => (
              <figure className="fx-cl" key={sectionIndex}>
                {/* Heading Row */}
                <span className="subHeadingAdvTb fw600">{section.heading}</span>

                {/* Feature Rows */}
                {section.rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="cellDataHmPricing">
                    <span>{row.title}</span>
                  </div>
                ))}
              </figure>
            ))}
          </div>
          <div className="advanceTableTbody adtbEnterprise fx-cl">
            {" "}
            <div className="tableHeaderPrices">
              <div className="tableHeaderPricesCard fx-cl fx-ac spacem">
                <span className="fw500">
                  <strong>Enterprise</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtnHomeCTA"
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
            {comparisonSections.map((section, sectionIndex) => (
              <figure className="fx-cl" key={3}>
                {/* Heading Row */}
                <span className="subHeadingAdvTb fw500">&nbsp;</span>

                {/* Feature Rows */}
                {section.rows?.map((val, i) => (
                  <div key={i} className="cellDataHmPricing">
                    {val.values[3] === "✓" && (
                      <DoneIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "oklch(0.64 0.11 162.91)",
                        }}
                      />
                    )}
                    {val.values[3].length >= 2 && val.values[3]}
                    {val.values[3] === "" && (
                      <CloseIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "red",
                        }}
                      />
                    )}
                  </div>
                ))}
              </figure>
            ))}
          </div>
          <div className="advanceTableTbody fx-cl">
            {" "}
            <div className="tableHeaderPrices">
              <div className="tableHeaderPricesCard fx-cl fx-ac spacem">
                <span className="fw500">
                  <strong>Premium</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtnHomeCTA"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent("premium")}&serviceId=${encodeURIComponent("347987sdafsdfa8afa")}`,
                    )
                  }
                >
                  Select Plan
                </button>
              </div>
            </div>
            {comparisonSections.map((section, sectionIndex) => (
              <figure className="fx-cl" key={2}>
                {/* Heading Row */}
                <span className="subHeadingAdvTb fw500">&nbsp;</span>

                {/* Feature Rows */}
                {section.rows?.map((val, i) => (
                  <div key={i} className="cellDataHmPricing">
                    {val.values[2] === "✓" && (
                      <DoneIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "oklch(0.64 0.11 162.91)",
                        }}
                      />
                    )}
                    {val.values[2].length >= 2 && val.values[2]}
                    {val.values[2] === "" && (
                      <CloseIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "red",
                        }}
                      />
                    )}
                  </div>
                ))}
              </figure>
            ))}
          </div>
          <div className="advanceTableTbody fx-cl">
            {" "}
            <div className="tableHeaderPrices">
              <div className="tableHeaderPricesCard fx-cl fx-ac spacem">
                <span className="fw500">
                  <strong>Professional</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtnHomeCTA"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent("professional")}&serviceId=${encodeURIComponent("347987sdafsdfa8afa")}`,
                    )
                  }
                >
                  Select Plan
                </button>
              </div>
            </div>
            {comparisonSections.map((section, sectionIndex) => (
              <figure className="fx-cl" key={1}>
                {/* Heading Row */}
                <span className="subHeadingAdvTb fw500">&nbsp;</span>

                {/* Feature Rows */}
                {section.rows?.map((val, i) => (
                  <div key={i} className="cellDataHmPricing">
                    {val.values[1] === "✓" && (
                      <DoneIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "oklch(0.64 0.11 162.91)",
                        }}
                      />
                    )}
                    {val.values[1].length >= 2 && val.values[1]}
                    {val.values[1] === "" && (
                      <CloseIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "red",
                        }}
                      />
                    )}
                  </div>
                ))}
              </figure>
            ))}
          </div>
          <div className="advanceTableTbody fx-cl">
            {" "}
            <div className="tableHeaderPrices">
              <div className="tableHeaderPricesCard fx-cl fx-ac spacem">
                <span className="fw500">
                  <strong>Standard</strong>
                </span>
                <span>₦3,865.5/mo</span>
                <button
                  className="planExecuteBtnHomeCTA"
                  onClick={() =>
                    redirect(
                      `/create_new_account?plan=${encodeURIComponent("standard")}&serviceId=${encodeURIComponent("347987sdafsdfa8afa")}`,
                    )
                  }
                >
                  Select Plan
                </button>
              </div>
            </div>
            {comparisonSections.map((section, sectionIndex) => (
              <figure className="fx-cl" key={0}>
                {/* Heading Row */}
                <span className="subHeadingAdvTb fw500">&nbsp;</span>

                {/* Feature Rows */}
                {section.rows?.map((val, i) => (
                  <div key={i} className="cellDataHmPricing">
                    {val.values[0] === "✓" && (
                      <DoneIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "oklch(0.64 0.11 162.91)",
                        }}
                      />
                    )}
                    {val.values[0].length >= 2 && val.values[0]}
                    {val.values[0] === "" && (
                      <CloseIcon
                        style={{
                          fontSize: "2.8rem",
                          color: "red",
                        }}
                      />
                    )}
                  </div>
                ))}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
