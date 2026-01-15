import React from "react";
import "./clientsDashboard.css";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AddTaskIcon from "@mui/icons-material/AddTask";
export default function ClientsDashboard() {
  return (
    <div className="clientDashboard fx-cl space2">
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
        <button>View Details</button>
      </div>
      <div className="g g4 space1">
        <figure className="clientDashboardCard fx-cl spacem">
          <div className="fx-jb space2">
            <p>Active candidates</p>
            <span>
              <CastForEducationIcon />
            </span>
          </div>
          <div className="fx-ac space1">
            <span className="clientPrRoundIcon">
              <AddTaskIcon />
            </span>
            <p className="clientDashboardNumber">547</p>
          </div>
        </figure>
        <figure className="clientDashboardCard fx-cl spacem">
          <div className="fx-jb space2">
            <p>Total Tasks</p>
            <span>
              <CastForEducationIcon />
            </span>
          </div>
          <div className="fx-ac space1">
            <span className="clientPrRoundIcon">
              <AddTaskIcon />
            </span>
            <p className="clientDashboardNumber">897</p>
          </div>
        </figure>
        <figure className="clientDashboardCard fx-cl spacem">
          <div className="fx-jb space2">
            <p>Number of projects</p>
            <span>
              <CastForEducationIcon />
            </span>
          </div>
          <div className="fx-ac space1">
            <span className="clientPrRoundIcon">
              <AddTaskIcon />
            </span>
            <p className="clientDashboardNumber">786</p>
          </div>
        </figure>
        <figure className="clientDashboardCard fx-cl spacem">
          <div className="fx-jb space2">
            <p>Targets completed</p>
            <span>
              <CastForEducationIcon />
            </span>
          </div>
          <div className="fx-ac space1">
            <span className="clientPrRoundIcon">
              <AddTaskIcon />
            </span>
            <p className="clientDashboardNumber">89.76%</p>
          </div>
        </figure>
      </div>

      <div className="clientDashboardAside space2">
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
    </div>
  );
}
