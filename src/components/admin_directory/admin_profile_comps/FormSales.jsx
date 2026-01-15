import { useState, useEffect } from "react";
import axios from "axios";
import "./formsales.css";

// import from MUI
import boy from "./testImages/ddd.jpg";
import IsLoading from "../../../isLoading";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
let dataFetch;
let countS;
function TableView() {
  return (
    <table className="fx-cl spacem">
      <thead className="fx-cl spacem">
        <tr>
          <th>S/N</th>
          <th>Name of Applicant</th>
          <th>Application No.</th>
          <th>Gender</th>
          <th>Programme</th>
          <th>Form Payment RRR</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody className="fx-cl">
        {dataFetch?.map((response, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <figure className="fx-ac fx-jc">
                  {response.passport?.url ? (
                    <img src={response.passport?.url} alt="gal" />
                  ) : (
                    response.first_Name?.slice(0, 1).toUpperCase()
                  )}
                </figure>
                <span>
                  {response.first_Name +
                    " " +
                    response.sur_Name +
                    " " +
                    response.other_Name}
                </span>
              </td>
              <td>{response.application_number}</td>
              <td>{response.gender}</td>
              <td>{response.programme_of_study}</td>
              <td>{response.account_status.reference_number}</td>
              {/* <td>
                <span className={`${response.account_status.paymentStatus}`}>
                  {response.account_status.paymentStatus}
                </span>
              </td> */}
              <td>{response.registered_date.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function CardView() {
  return (
    <div className="girdViewCont">
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="gridViewCard ">
        <h4>Othman Umar Dikko Jooli</h4>
        <div>
          <div className="fx-cl spacem">
            <div className="fx-ac">
              <span>Heading</span> <span>Heading here</span>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
export default function FormSales() {
  const [loading, setLoading] = useState(false);
  const [changeview, setChangeView] = useState("");
  const [month, setMonth] = useState("");
  const [course, setCourse] = useState("");

  function switchView() {
    switch (changeview) {
      case "grid":
        return <CardView />;
      case "table":
        return <TableView />;
      default:
        return <TableView />;
    }
  }

  async function getApplicants() {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_SCRIPT_HOST}/form_sales`)
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  async function getByFilters() {
    const data = { month, course };
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/formSales/fitlerSearch`,
        data
      )
      .then((response) => {
        dataFetch = response.data.response;
        countS = response.data;

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  useEffect(() => {
    getApplicants();
  }, []);

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="forms-sale">
          <div className="fx-cl space3">
            <header className="fx-ac fx-jb space4">
              <div className="fx-ac space3">
                <select
                  name="course"
                  id=""
                  value={course}
                  onChange={(event) => {
                    setCourse(event.target.value);
                  }}
                >
                  <option value="" hidden>
                    Course
                  </option>
                  <option value="Midwifery">Midwifery</option>
                  <option value="Nursing">Nursing</option>
                </select>
                <select
                  name="month"
                  value={month}
                  onChange={(event) => {
                    setMonth(event.target.value);
                  }}
                >
                  <option value="" hidden>
                    Month
                  </option>
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>

                <button onClick={() => getByFilters()}>Fetch data </button>
              </div>

              <div className="fx-ac space2">
                <span onClick={() => setChangeView("table")}>
                  <TocOutlinedIcon />
                </span>
                <span onClick={() => setChangeView("grid")}>
                  <AppsOutlinedIcon />
                </span>
              </div>
            </header>
            <figure className="cardsHeader g g3 space3">
              <div>
                <p>{countS?.count}</p>
                <h3>Total candidates</h3>
              </div>
              <div>
                <p>₦{countS?.count * 10000}</p>
                <h3>Total amount</h3>
              </div>
              <div>
                <p>{countS?.completeds}</p>
                <h3>Completed</h3>
              </div>
            </figure>
          </div>
          {switchView()}
        </div>
      )}
    </>
  );
}
