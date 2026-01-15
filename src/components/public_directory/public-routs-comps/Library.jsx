import { Link } from "react-router-dom";
import "./library.css"; // Import a CSS file for styling
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Logo from "../home-page/logo/udus_logo.png";

import Footer from "../home-page/home-comps/Footer";

export default function Library() {
  return (
    <div className="library-list-container fx-cl">
      <header className="library-list-header fx-cl">
        {/* <div className="mcons-home-logo">
                    <Link to="/" className="loginLogo">
                    <img src={Logo} alt="mcons-logo" /> 
                    </Link>
                </div> */}
        <h2>Manga C.O.N.S Library</h2>
        <p>
          Introducing librarys Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, possimus quam!
          <br />
          who drive our institution's excellence.
        </p>
      </header>
      <nav
        className="mcons-home-navbar-b "
        style={{ backgroundColor: "#64f727", padding: "4rem" }}
      >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="mcons-home-nav-toggle">&#9776;</div>
        <ul className={`mcons-home-nav-menu-b fx-ac `}>
          <div className="home-nav dropdown">
            <li>
              <Link to="/administration" className="fx-ac ">
                <span>Administration</span>
                <KeyboardArrowRightIcon fontSize="large" />
              </Link>
            </li>

            <div className="home-nav dropdown-content ">
              <div className="administrationDropdown">
                <Link href="#home">Provost</Link>
                <Link href="#home">Deputy Provost Admin</Link>
                <Link href="#home">Deputy Provost library</Link>
                <Link href="#home">Registrar</Link>
                <Link href="#home">STDO</Link>
                <Link href="#home">College Bursar</Link>
                <Link href="#home">Chief Internal Auditor</Link>
                <Link href="#home">College Librarian</Link>
                <Link href="#home">Admission Officer</Link>
                <Link href="#home">Examination Officer</Link>
                <Link href="#home">Students Affair Officer</Link>
                <Link href="#home">library Secretary</Link>
              </div>
            </div>
          </div>
          <div className="home-nav dropdown">
            <li>
              <Link to="/academics" className="fx-ac ">
                <span>Academics</span>
                <KeyboardArrowRightIcon fontSize="large" />
              </Link>
            </li>
            <div className="home-nav dropdown-content">
              <Link href="#home">Basic Midwifery </Link>
              <Link href="#services">Basic Nursing</Link>
              <Link href="#about">Division of General Studies</Link>
            </div>
          </div>
          <div className="home-nav dropdown">
            <li>
              <Link to="/admission" className="fx-ac ">
                <span>Admission</span>
                <KeyboardArrowRightIcon fontSize="large" />
              </Link>
            </li>
            <div className="home-nav dropdown-content">
              <Link href="#home">Check Admission Status</Link>
              <Link href="#home">Application Requirement</Link>
            </div>
          </div>
          <li>
            <Link to="/library">Library</Link>
          </li>

          <div className="home-nav dropdown">
            <li>
              <Link to="/registrations" className="fx-ac ">
                <span>Registration</span>
                <KeyboardArrowRightIcon fontSize="large" />
              </Link>
            </li>

            <div className="home-nav dropdown-content">
              <Link to="/registrations">Apply now</Link>
              <Link href="#home">How to apply</Link>
            </div>
          </div>

          <li>
            <Link to="/about-us">About </Link>
          </li>
          <li>
            <Link to="/contact-us">Contant us</Link>
          </li>
        </ul>
        <div className="fx-ac space2">
          <span>
            <Link style={{ color: "#fff" }} to="/staff_login">
              Staffs
            </Link>
          </span>
          <Link
            className="home-nav-btn"
            to="/library_books"
            style={{ backgroundColor: "#fff", color: "#065AD8" }}
          >
            BOOKS
          </Link>{" "}
        </div>
      </nav>
      <main className="librarys-main">
        <div className="acad-contents fx-cl space3">
          <header
            className="fx-cl"
            style={{ textAlign: "center", fontSize: "3.4rem" }}
          >
            <span
              style={{
                fontweight: "600",
                color: " #4CAF50",
                fontSize: "2.4rem",
              }}
            >
              {" "}
              Through Science and Compassion
            </span>
            <h2>
              Welcome to <span style={{ color: "#2f63b2" }}>Library Unit</span>
            </h2>
          </header>

          <div className="acad-discription">
            <h4>Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              voluptate perspiciatis laborum animi voluptatem rem iure dolorem
              numquam odio dolor! Maxime nesciunt dolore aspernatur atque aut
              possimus dolorum nostrum, fugit hic, incidunt consequatur nobis
              explicabo ipsa quasi illo quae laboriosam eveniet. Officia quasi
              amet iusto dicta animi rem, labore assumenda, cum obcaecati
              provident ex quas odio quisquam ratione? <br />
              Expedita molestiae cumque id quibusdam aspernatur animi nostrum
              amet libero iure eum tempora, ipsam nobis, repellendus vitae
              dignissimos deserunt? Consequatur, velit pariatur sit, labore
              quibusdam minima nisi necessitatibus dicta, est iure laboriosam
              odio eum nam laborum fugiat ex! Delectus a quaerat voluptatibus?
            </p>
          </div>
          <div className="acad-discription fx-ac space3">
            <div>
              <h4>Our Missions</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                atque sapiente rem, aliquam magni ullam eum molestiae quasi
                quaerat et molestias reiciendis?
              </p>
            </div>
            <div>
              <h4>Our Visions</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                atque sapiente rem, aliquam magni ullam eum molestiae quasi
                quaerat et molestias reiciendis?
              </p>
            </div>
          </div>
        </div>
        <aside className="acad-aside fx-cl space2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            minus quibusdam nam at sit. Aperiam, enim voluptas praesentium harum
            impedit fugiat molestias sunt nostrum. Corrupti provident suscipit
            nobis perspiciatis soluta explicabo enim sapiente.
          </p>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
