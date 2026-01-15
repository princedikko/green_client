import { useState } from "react";
import axios from "axios";
import "./contactUs.css";
import IsLoading from "../../../isLoading";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function ContactUs() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const redirect = useNavigate();
  const [loading, setLoading] = useState(false);
  const [jsonFullname, setFullName] = useState("");
  const [jsonEmail, setjsonEmail] = useState("");
  const [JsonMessage, setJsonMessage] = useState("");
  const [jsonAddress, setjsonAddress] = useState("");
  const [errors, setErrors] = useState({});

  const data = {
    jsonFullname,
    jsonEmail,
    JsonMessage,
    jsonAddress,
  };

  const validateForm = () => {
    let newErrors = {};

    if (!jsonFullname.trim()) {
      newErrors.jsonFullname = "Full Name is required";
    }
    if (!jsonEmail.trim()) {
      newErrors.jsonEmail = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(jsonEmail)) {
      newErrors.jsonEmail = "Enter a valid email address";
    }
    if (!JsonMessage.trim()) {
      newErrors.JsonMessage = "Message is required";
    }
    if (!jsonAddress.trim()) {
      newErrors.jsonAddress = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function submit() {
    if (!validateForm()) return;

    setLoading(true);
    const data = { jsonFullname, jsonEmail, JsonMessage, jsonAddress };

    await axios
      .post(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/contactUs`, data)
      .then((response) => {
        enqueueSnackbar("Thank you for Contacting us, we will respond soon!", {
          variant: "success",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        // navigate("/");
        window.location.reload();
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar("Something went wrong!", {
          variant: "error",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="sectioncontactUs fx-ac fx-jc">
      {loading ? <IsLoading /> : null}
      <div className="contactUsCont fx-jc space3 rwdG2">
        <div className="fx-cl space3 contactUsDiscription rwdHide">
          <div className="fx-cl fx-ac">
            <figure>
              <LocationOnIcon
                style={{ fontSize: "4.5rem", color: "#2f63b2" }}
              />
            </figure>
            <h2>Your address</h2>
            <p>
              Address should include <br /> Country, state, capital, and
              location.
            </p>
          </div>
          <div className="fx-cl fx-ac">
            <figure>
              <CallIcon style={{ fontSize: "4.5rem", color: "#2f63b2" }} />
            </figure>
            <h2>Enter your Contact!</h2>
            <p>Provide an email or phone number for us to reach you.</p>
          </div>
          <div className="fx-cl fx-ac">
            <figure>
              <SendIcon style={{ fontSize: "4.5rem", color: "#2f63b2" }} />
            </figure>
            <h2>Send your Message</h2>
            <p>Your message is important to us.</p>
          </div>
        </div>
        <div className="contactUsForm fx-cl space1">
          <h1>Send us a Message!</h1>
          <div className="fx-cl">
            <input
              type="text"
              name="jsonFullname"
              value={jsonFullname}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Full Name.."
            />
            {errors.jsonFullname && (
              <small style={{ color: "red", fontSize: "1.1rem" }}>
                {errors.jsonFullname}
              </small>
            )}
          </div>

          <div className="fx-cl">
            <input
              type="text"
              name="jsonEmail"
              value={jsonEmail}
              onChange={(event) => setjsonEmail(event.target.value)}
              placeholder="Email address.."
            />
            {errors.jsonEmail && (
              <small style={{ color: "red", fontSize: "1.1rem" }}>
                {errors.jsonEmail}
              </small>
            )}
          </div>
          <div className="fx-cl">
            <textarea
              name="JsonMessage"
              cols="30"
              rows="6"
              value={JsonMessage}
              onChange={(event) => setJsonMessage(event.target.value)}
              placeholder="Your message to us.."
            ></textarea>
            {errors.JsonMessage && (
              <small style={{ color: "red", fontSize: "1.1rem" }}>
                {errors.JsonMessage}
              </small>
            )}
          </div>
          <div className="fx-cl">
            <input
              type="text"
              name="jsonAddress"
              value={jsonAddress}
              onChange={(event) => setjsonAddress(event.target.value)}
              placeholder="Address.."
            />
            {errors.jsonAddress && (
              <small style={{ color: "red", fontSize: "1.1rem" }}>
                {errors.jsonAddress}
              </small>
            )}
          </div>
          <button onClick={submit}>Submit</button>
        </div>
      </div>
    </section>
  );
}
