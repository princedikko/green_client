import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ScreenRotationOutlinedIcon from "@mui/icons-material/ScreenRotationOutlined";

export default function Feature() {
  return (
    <section className="section-feature">
      <header
        className="fx-cl"
        style={{ textAlign: "center", fontSize: "3.4rem", padding: "3.4rem" }}
      >
        <span
          style={{ fontweight: "600", color: " #4CAF50", fontSize: "2.4rem" }}
        >
          {" "}
          Through Science and Compassion
        </span>
        <h2>
          Why Choose <span style={{ color: "#2f63b2" }}>Manga C.O.N.S?</span>
        </h2>
      </header>
      <div className="feature-container g g4 space2 rwdG4">
        <figure className="feature-cards fx-cl space1">
          <span>
            <QuestionMarkOutlinedIcon
              style={{ fontSize: "3.4rem", color: "#2f63b2" }}
            />{" "}
          </span>
          <h4>Innovative Programs</h4>
          <p>
            Our diverse range of{" "}
            <span style={{ color: "#2f63b2" }}>
              programs in science and nursing
            </span>{" "}
            are designed to equip students with practical skills and theoretical
            knowledge.
          </p>
        </figure>
        {/* <figure className="feature-cards fx-cl space1">
                    <span><Twitter style={{fontSize: "3.4rem", color:"#2f63b2"}} /></span>
                    <h4>My product is easy to used</h4>
                    <p>cutting-edge research, and compassionate care to develop future leaders in science and nursing</p>
                </figure> */}
        <figure className="feature-cards fx-cl space1">
          <span>
            <MonetizationOnOutlinedIcon
              style={{ fontSize: "3.4rem", color: "#2f63b2" }}
            />
          </span>
          <h4>Expert Faculty</h4>
          <p>
            {" "}
            Learn from industry-leading professionals and researchers who are
            committed to your academic and professional growth.
          </p>
        </figure>
        <figure className="feature-cards fx-cl space1">
          <span>
            <CategoryOutlinedIcon
              style={{ fontSize: "3.4rem", color: "#2f63b2" }}
            />
          </span>
          <h4>State-of-the-Art Facilities</h4>
          <p>
            {" "}
            Experience hands-on learning in our modern labs centers, equipped
            with the latest technology.
          </p>
        </figure>
        <figure className="feature-cards fx-cl space1">
          <span>
            <ScreenRotationOutlinedIcon
              style={{ fontSize: "3.4rem", color: "#2f63b2" }}
            />
          </span>
          <h4>Community and Support</h4>
          <p>
            {" "}
            Join a supportive and vibrant community dedicated to your success,
            with access to academic advising, career services, and{" "}
            <span style={{ color: "#2f63b2" }}>student organizations</span> .
          </p>
        </figure>
        {/* <figure className="feature-cards fx-cl space1">
                    <span><Twitter style={{fontSize: "3.4rem", color:"#2f63b2"}} /></span>
                    <h4>My product is easy to used</h4>
                    <p>cutting-edge research, and compassionate care to develop future leaders in science and nursing</p>
                </figure>
                <figure className="feature-cards fx-cl space1">
                    <span><Twitter style={{fontSize: "3.4rem", color:"#2f63b2"}} /></span>
                    <h4>My product is easy to used</h4>
                    <p>cutting-edge research, and compassionate care to develop future leaders in science and nursing</p>
                </figure>
                <figure className="feature-cards fx-cl space1">
                    <span><Twitter style={{fontSize: "3.4rem", color:"#2f63b2"}} /></span>
                    <h4>My product is easy to used</h4>
                    <p>cutting-edge research, and compassionate care to develop future leaders in science and nursing</p>
                </figure> */}
      </div>
    </section>
  );
}
