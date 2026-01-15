import "./accountcomp.css";
import { useSelector } from "react-redux";

export default function AccountCompAdmin() {
  const data = useSelector((state) => state.adminFunction.queue.adminData);

  return (
    <section className="sectionAccount ">
      <div className="fx-cl space3">
        <div className="adminPrContent fx-ac space2">
          {data.profileImage?.url ? (
            <figure
              className="adMinDp fx-ac fx-jc"
              style={{
                color: "#6693fa",
                fontSize: "5.5rem",
                fontWeight: "500",
              }}
            >
              <img src={data.profileImage?.url} alt="dp" />
            </figure>
          ) : (
            <figure
              className="adMinDp fx-ac fx-jc"
              style={{
                color: "#6693fa",
                fontSize: "5.5rem",
                fontWeight: "500",
              }}
            >
              {data.first_Name.slice(0, 1) + data.sur_Name.slice(0, 1)}
            </figure>
          )}

          <div className="contentsAd fx-cl spacem">
            <h2>
              {data.first_Name + " " + data.sur_Name + " " + data.other_Name}
            </h2>
            <span>{data.position}</span>
            <span>Manga College of Nursing Sciences</span>
          </div>
          <span></span>
        </div>
        <div className="adminPrContent fx-cl space3">
          <div className=" fx-ac space4">
            <div className="contentsAd fx-cl spacem">
              <h2>Personal information</h2>
            </div>
            <span></span>
          </div>

          <div className="g g2 space2">
            <div className="fx-cl spacem">
              <h3>First name</h3>
              <span>{data.first_Name}</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Last name:</h3>
              <span>{data.sur_Name + " " + data.other_Name}</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Email</h3>
              <span>{data.email}</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Phone number</h3>
              <span>{data.phoneNumber}</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Bio</h3>
              <span>{data.position}</span>
            </div>
          </div>
        </div>
        <div className="adminPrContent fx-cl space3">
          <div className=" fx-ac space4">
            <div className="contentsAd fx-cl spacem">
              <h2>Address</h2>
            </div>
            <span></span>
          </div>

          <div className="g g2 space2">
            <div className="fx-cl spacem">
              <h3>Country</h3>
              <span>{data.nationality}</span>
            </div>
            <div className="fx-cl spacem">
              <h3>City/State</h3>
              <span>{data.state_of_origin}</span>
            </div>
            <div className="fx-cl spacem">
              <h3>LGA</h3>
              <span>{data.local_govt_area}</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Area</h3>
              <span>Gidan fulani, sokoto </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
