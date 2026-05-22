import React, { useState } from "react";
import "./clientsDashboard.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DiscountIcon from "@mui/icons-material/Discount";

export default function ClientsDashboard() {
  const [newInfo, setNewInfo] = useState(true);
  return (
    <div className="clientDashboard fx-cl space1">
      {newInfo && (
        <div className="clientDashboardCard clientNotifBar fx-ac fx-jb space3">
          <div className="fx-ac space2">
            <figure className="fx-ac fx-jc">@</figure>
            <div className="fx-cl spacem">
              <h4>Dear Candidate,</h4>
              <p>
                We have observed a decline in [Hermawan]’s performance over the
                past 2 weeks.
              </p>
            </div>
          </div>
          <button onClick={() => setNewInfo(!newInfo)}>View Details</button>
        </div>
      )}
      <div className="clntDashboardTop space1">
        <figure className="earnings clientDashboardCard fx-cl space1">
          <div className="fx-jb space2">
            <p className="name">Hi! Fatimah Bello Wadata</p>

            <span className="forwardIcn fx-ac fx-jc">
              <ArrowForwardIcon />
            </span>
          </div>
          <div className="earningsAmount fx-ac fx-jb space2">
            <div className=" fx-ac space1">
              <span style={{ fontSize: "1.4rem" }}>earnings:</span>
              <p>₦98,355</p>
            </div>
            <figure>Today's earning</figure>
          </div>
          <div className="fx-ac fx-fb">
            <button className="fx-ac space1">
              <span className="">Explore all earning</span>
              <span className="">
                <AddTaskIcon />
              </span>
            </button>
            <span>&nbsp;</span>
          </div>
        </figure>
        <figure className="totalPurchase clientDashboardCard fx-cl space1">
          <div className="jead fx-jb fx-ac space2">
            <p>Total Purchase</p>
            <span className="forwardIcn fx-ac fx-jc">
              <ArrowForwardIcon />
            </span>
          </div>
          <div className="fx-cl spacem">
            <div className="fx-ac space1">
              <p className="clientDashboardNumber">₦89,732</p>
            </div>
            <div className="tagCont fx-ac space1">
              <div className="tag high fx-ac spacem">
                <span className="indication">
                  {" "}
                  <ArrowForwardIcon />
                </span>{" "}
                <span>+ 15%</span>
              </div>

              <p>Than last Month</p>
            </div>
          </div>
        </figure>
        <figure className="totalPurchase clientDashboardCard fx-cl space1">
          <div className="jead fx-jb fx-ac space2">
            <p>Total Revenue</p>
            <span className="forwardIcn fx-ac fx-jc">
              <ArrowForwardIcon />
            </span>
          </div>
          <div className="fx-cl spacem">
            <div className="fx-ac space1">
              <p className="clientDashboardNumber">₦941,659</p>
            </div>
            <div className="tagCont fx-ac space1">
              <div className="prdState fx-ac">
                <span>&nbsp;</span>
                <p>164 high</p>
              </div>
              <div className="prdState fx-ac">
                <span>&nbsp;</span>
                <p>5 low</p>
              </div>
              <div className="prdState fx-ac">
                <span>&nbsp;</span>
                <p>12 outk</p>
              </div>
            </div>
          </div>
        </figure>
        <figure className="totalPurchase clientDashboardCard fx-cl space1">
          <div className="jead fx-jb fx-ac space2">
            <p>Total Sales</p>
            <span className="forwardIcn fx-ac fx-jc">
              <ArrowForwardIcon />
            </span>
          </div>
          <div className="fx-cl spacem">
            <div className="fx-ac space1">
              <p className="clientDashboardNumber">₦241,572</p>
            </div>
            <div className="tagCont fx-ac space1">
              <div className="tag low fx-ac spacem">
                <span className="indication">
                  {" "}
                  <ArrowForwardIcon />
                </span>{" "}
                <span>- 02%</span>
              </div>

              <p>Than last Month</p>
            </div>
          </div>
        </figure>
      </div>

      <div className="clientDashboardGecco space1">
        <div className=" clientDashboardCard fx-cl space2">
          <div className="fx-ac fx-jb space1">
            <div className="asideDisc fx-ac space1">
              <figure className="clientPrRoundIcon fx-ac fx-jc">
                <DiscountIcon fontSize="large" />
              </figure>
              <div className="fx-cl spacem">
                <h4>Products </h4>
                <p>Best performance ranking</p>
              </div>
            </div>
          </div>
          <div className="fx-cl space1">
            <div className="fx-ac space1">
              <div className="fx-cl">
                <p
                  style={{
                    color: "#c2c3c5",
                    fontSize: "1.3rem",
                  }}
                >
                  Available
                </p>
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "500",
                  }}
                >
                  542
                </span>
              </div>
              <figure className="prdProgressBarWrap">
                <div
                  className="prdProgressBar fx-jb fx-ac"
                  style={{
                    backgroundColor: "#f3f3f3",
                    width: "86%",
                  }}
                >
                  {" "}
                  <span>&nbsp;</span>
                  <h6>86%</h6>
                </div>
              </figure>
            </div>
            <div className="fx-ac space1">
              <div className="fx-cl">
                <p
                  style={{
                    color: "#c2c3c5",
                    fontSize: "1.3rem",
                  }}
                >
                  Finished
                </p>
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "500",
                  }}
                >
                  87
                </span>
              </div>
              <figure className="prdProgressBarWrap">
                <div
                  className="prdProgressBar fx-jb fx-ac"
                  style={{
                    backgroundColor: "#f0f0f0",
                    width: "67%",
                  }}
                >
                  <span>&nbsp;</span>
                  <h6>67%</h6>
                </div>
              </figure>
            </div>
            <div className="fx-ac space1">
              <div className="fx-cl">
                <p
                  style={{
                    color: "#c2c3c5",
                    fontSize: "1.3rem",
                  }}
                >
                  Very low
                </p>
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "500",
                  }}
                >
                  16
                </span>
              </div>
              <figure className="prdProgressBarWrap">
                <div
                  className="prdProgressBar fx-jb fx-ac"
                  style={{
                    backgroundColor: "#3a84f8",
                    color: "#fff",
                    width: "43%",
                  }}
                >
                  <span>&nbsp;</span>
                  <h6
                    style={{
                      color: "#fff",
                    }}
                  >
                    43%
                  </h6>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className=" clientDashboardCard fx-cl space2">
          <div className=" fx-cl space1">
            <div className="fx-ac fx-jb space1">
              <div className="asideDisc fx-ac space2">
                <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
                <div className="fx-cl spacem">
                  <h4>Ongoing Tasks</h4>
                  <p>Best performance ranking</p>
                </div>
              </div>
              <div className="fx-ac space1">
                <figure className="tag fx-ac fx-jc">@</figure>
                <figure className="tag fx-ac fx-jc">@</figure>
              </div>
            </div>
          </div>
          <div className="clientDashboardCard fx-cl space1">
            <div className="fx-ac fx-jb space1">
              <div className="asideDisc fx-ac space2">
                <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
                <div className="fx-cl spacem">
                  <h4>Ongoing Tasks</h4>
                  <p>Best performance ranking</p>
                </div>
              </div>
              <div className="fx-ac space1">
                <figure className="tag fx-ac fx-jc">@</figure>
                <figure className="tag fx-ac fx-jc">@</figure>
              </div>
            </div>
          </div>
        </div>
        <div className=" clientDashboardCard fx-cl space2">
          <div className=" fx-cl space1">
            <div className="fx-ac fx-jb space1">
              <div className="asideDisc fx-ac space2">
                <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
                <div className="fx-cl spacem">
                  <h4>Ongoing Tasks</h4>
                  <p>Best performance ranking</p>
                </div>
              </div>
              <div className="fx-ac space1">
                <figure className="tag fx-ac fx-jc">@</figure>
                <figure className="tag fx-ac fx-jc">@</figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clientDashboardAside space1">
        <div className="clientDashboardAsideLeft clientDashboardCard fx-cl space1">
          <div className="fx-ac fx-jb space1">
            <div className="asideDisc fx-ac space2">
              <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
              <div className="fx-cl spacem">
                <h4>Ongoing Tasks</h4>
                <p>Best performance ranking</p>
              </div>
            </div>
            <div className="fx-ac space1">
              <figure className="tag fx-ac fx-jc">@</figure>
              <figure className="tag fx-ac fx-jc">@</figure>
            </div>
          </div>
          <div className="clientDashboardCard fx-ac fx-jb space3">
            <div className="asideDisc fx-ac space2">
              <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
              <div className="fx-cl spacem">
                <h4>Ongoing Tasks</h4>
                <p>Best performance ranking</p>
              </div>
            </div>
            <div className="fx-ac space1">
              <figure className="tag fx-ac fx-jc">@</figure>
              <figure className="tag fx-ac fx-jc">@</figure>
            </div>
          </div>
          <div className="clientDashboardCard fx-ac fx-jb space3">
            <div className="asideDisc fx-ac space2">
              <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
              <div className="fx-cl spacem">
                <h4>Ongoing Tasks</h4>
                <p>Best performance ranking</p>
              </div>
            </div>
            <div className="fx-ac space1">
              <figure className="tag fx-ac fx-jc">@</figure>
              <figure className="tag fx-ac fx-jc">@</figure>
            </div>
          </div>
          <div className="clientDashboardCard fx-ac fx-jb space3">
            <div className="asideDisc fx-ac space2">
              <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
              <div className="fx-cl spacem">
                <h4>Ongoing Tasks</h4>
                <p>Best performance ranking</p>
              </div>
            </div>
            <div className="fx-ac space1">
              <figure className="tag fx-ac fx-jc">@</figure>
              <figure className="tag fx-ac fx-jc">@</figure>
            </div>
          </div>
        </div>
        <div className="clientDashboardAsideRight clientDashboardCard fx-cl space2">
          <div className=" fx-cl space1">
            <div className="fx-ac fx-jb space1">
              <div className="asideDisc fx-ac space2">
                <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
                <div className="fx-cl spacem">
                  <h4>Ongoing Tasks</h4>
                  <p>Best performance ranking</p>
                </div>
              </div>
              <div className="fx-ac space1">
                <figure className="tag fx-ac fx-jc">@</figure>
                <figure className="tag fx-ac fx-jc">@</figure>
              </div>
            </div>
          </div>
          <div className="clientDashboardCard fx-cl space1">
            <div className="fx-ac fx-jb space1">
              <div className="asideDisc fx-ac space2">
                <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
                <div className="fx-cl spacem">
                  <h4>Ongoing Tasks</h4>
                  <p>Best performance ranking</p>
                </div>
              </div>
              <div className="fx-ac space1">
                <figure className="tag fx-ac fx-jc">@</figure>
                <figure className="tag fx-ac fx-jc">@</figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clientDashboardCard fx-cl space2">
        <div className=" fx-cl space1">
          <div className="fx-ac fx-jb space1">
            <div className="asideDisc fx-ac space2">
              <figure className="clientPrRoundIcon fx-ac fx-jc">@</figure>
              <div className="fx-cl spacem">
                <h4>Top Sellings Products</h4>
                <p>Table of the most needed products by the consumers</p>
              </div>
            </div>
            <div className="fx-ac space1">
              <figure className="tag fx-ac fx-jc">@</figure>
              <figure className="tag fx-ac fx-jc">@</figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
