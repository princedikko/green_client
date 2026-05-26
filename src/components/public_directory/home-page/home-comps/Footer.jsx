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
import LanguageIcon from "@mui/icons-material/Language";

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
        subscriber_email,
      );

      const { data } = response;

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
            <h3>Smart inventory that powers smarter business decisions.</h3>
            <p>
              Manage your stock, sales, and operations in real time with a
              powerful inventory management system built for modern businesses.
            </p>
          </div>
        </div>

        <div className="headingFooter">
          <h2>Universe Inventory Management System</h2>
          <Link to="management_login">
            <button className="langbtn" type="lang">
              <LanguageIcon style={{ fontSize: "3rem" }} /> Language
            </button>
          </Link>
        </div>

        <div className="footerItems rwdG3">
          <ul>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/industries">Industries</Link>
            </li>
            <li>
              <Link to="/learning">Learning</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Create Account</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/api">API Docs</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/blog">Blog & Updates</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/report">Report a problem</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerMiddle rwdG2">
        <p className="subscribe">
          Subscribe to inventory updates & product news
        </p>

        <div className="flex">
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
          <p>
            Copyright &copy; {currentYear} Universe Inventory Management System.
            All rights reserved.
          </p>

          <ul className="listEnd">
            <li>
              <Link to="/terms">Terms of service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/cookies">Cookie settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
