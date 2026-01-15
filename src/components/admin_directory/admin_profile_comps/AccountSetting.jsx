import "./accountcomp.css";

export default function AccountSetting() {
  return (
    <section className="sectionAccountSetting ">
      <div className="fx-cl space3">
        <h4>Admin Profile</h4>
        <div className="adminStContent fx-ac space2">
          <figure className="adMinDp">DP</figure>
          <div className="contentsAd fx-cl spacem">
            <h2>Abdulrahman Sani M.</h2>
            <span>H.O.D Midwifery Department</span>
            <span>Manga college of nursing sciences</span>
          </div>
          <span>
            <button>Edit</button>
          </span>
        </div>
        <div className="adminStContent fx-cl space3">
          <div className=" fx-ac space4">
            <div className="contentsAd fx-cl spacem">
              <h2>Personal information</h2>
            </div>
            <span>
              <button>Edit</button>
            </span>
          </div>

          <div className="g g2 space2">
            <div className="fx-cl spacem">
              <h3>First name</h3>
              <span>Abdulrahman</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Last name:</h3>
              <span>Muhammad Sani</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Email</h3>
              <span>info.mangacons@gmail.com</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Phone number</h3>
              <span>08012345678</span>
            </div>
            <div className="fx-cl spacem">
              <h3>Bio</h3>
              <span>Head of Midwifery</span>
            </div>
          </div>
        </div>
        <div className="adminStContent fx-cl space3">
          <div className=" fx-ac space4">
            <div className="contentsAd fx-cl spacem">
              <h2>Address</h2>
            </div>
            <span>
              <button>Edit</button>
            </span>
          </div>

          <div className="g g2 space2">
            <div className="fx-cl spacem">
              <h3>Country</h3>
              <span>Nigeria</span>
            </div>
            <div className="fx-cl spacem">
              <h3>City/State</h3>
              <span>Sokoto state</span>
            </div>
            <div className="fx-cl spacem">
              <h3>LGA</h3>
              <span>Wamakko</span>
            </div>
            {/* <div className="fx-cl spacem">
              <h3>Postal code</h3>
              <span>9745678</span>
            </div> */}
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
