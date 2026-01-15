import { Link } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import axios from "axios";
import "./footer.css";
import { useSnackbar } from "notistack";
// icons
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

function SocialMediaIcons() {
  return (
    <figure className="footerMediaIcons flexcenterbn">
      <Link>
        <TwitterIcon style={{ fontSize: "2.1rem" }} />
      </Link>
      <Link>
        <FacebookIcon style={{ fontSize: "2.1rem" }} />
      </Link>

      <Link>
        <InstagramIcon style={{ fontSize: "2.1rem" }} />
      </Link>
      <Link>
        <WhatsAppIcon style={{ fontSize: "2.1rem" }} />
      </Link>
    </figure>
  );
}

function Footer({ setLoading }) {
  const [subscriber_email, setSubscriber_email] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  async function subscribe() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/subscribe_to_news`,
        subscriber_email
      );

      const { data } = response; // Get response data
      enqueueSnackbar(`${data.message}`, {
        variant: data.status === 201 ? "success" : "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, please try again";
      enqueueSnackbar(errorMessage, {
        variant: "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerStart">
        <div className="footerBanner g g2">
          <div className="fx-cl space2">
            <h3>Confidence that builds a brigther future.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              quia fugiat tenetur labore, nisi repellendus natus a assumenda
              ipsum deleniti distinctio quo
            </p>
          </div>
        </div>
        <div className="headingFooter">
          <h2>UDUPS</h2>
          <Link to="management_login">
            <button className="langbtn" type="lang">
              <SupervisorAccountIcon style={{ fontSize: "3rem" }} /> Admin hub
            </button>
          </Link>
        </div>
        <div className="footerItems rwdG3">
          <ul>
            <li>
              <Link to="/mangacons_requirement">Admission</Link>
            </li>
            <li>
              <Link to="/coming_soon">Shedule of classes</Link>
            </li>
            <li>
              <Link to="/coming_soon">Study plans</Link>
            </li>
            <li>
              <Link to="/aboutcompany">Academic calendar</Link>
            </li>
            <li>
              <Link to="/administration">Admin staff</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/student_login">Student portal</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/coming_soon">Research</Link>
            </li>

            <li>
              <Link to="/coming_soon">Career</Link>
            </li>
            <li>
              <Link to="/coming_soon">Application form</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/coming_soon">Press & Media</Link>
            </li>
            <li>
              <Link to="/coming_soon">Terms</Link>
            </li>

            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Report a problem</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerMiddle rwdG2">
        <p className="subscribe">Subscribe to our news letter</p>
        <div action="#" name="footerForm" className="flex">
          <input
            type="email"
            name="subscriber_email"
            placeholder="Email address"
            value={subscriber_email}
            onChange={(event) => setSubscriber_email(event.target.value)}
            required
          />
          <button type="footerSubmit" onClick={() => subscribe()}>
            Subscribe
          </button>
        </div>
        <SocialMediaIcons />
      </div>
      <div className="footerEnd">
        <div className="copyRight">
          <p>Copyright &copy; {currentYear} UDUPS all rights reserved.</p>
          <ul className="listEnd">
            <li>
              <Link to="/coming_soon">Terms of services</Link>
            </li>
            <li>
              <Link to="/coming_soon">Privacy policy</Link>
            </li>
            <li>
              <Link to="/coming_soon">Cookie setting</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
