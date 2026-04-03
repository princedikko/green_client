import { useReducer, useState } from "react";
import "./importProduct.css";
import Logo from "../img1.jpg";
import IsLoading from "../../../../../IsLoading.jsx";
import FileHandling from "./files-handling/FileHandling.jsx";

export default function ImportProducts() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="resultUploadPrCont">
          <div className="resultUploadPr fx-cl space1">
            <div
              className="fx-cl space1"
              style={{
                padding: "1rem",
                backgroundColor: "transparent",
              }}
            >
              <h3>Mass Results Upload</h3>
              <p>
                Upload your result file in <strong>CSV format</strong>,
                following the structure shown in the sample below.
              </p>
            </div>{" "}
            <div className="fx-cl space1">
              <div className="resultUploadAside fx-cl space1">
                <div className="invoice-second-container fx-jb space3">
                  <div className="invoice-inner-div">
                    <div className=" fx-cl space1">
                      <h3>Please Note:</h3>
                      <p>
                        If a student is absent in CA or Exams, enter ABS in the
                        respective column. For courses without continuous
                        assessment (e.g., Project), use NA in the CA column.
                      </p>
                    </div>
                  </div>
                </div>
                <table className="fx-cl spacem">
                  <thead className="fx-cl spacem">
                    <tr
                      style={{
                        backgroundColor: " rgb(0, 123, 255)",
                        color: "#fff",
                      }}
                    >
                      <th>Admission No</th>
                      <th>Registration Semester</th>
                      <th>Course code</th>
                      <th>CA</th>
                      <th>Exam</th>
                      <th>Total</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MCONSXXXXXXX239</td>
                      <td>First Semester</td>
                      <td>MTH101</td>
                      <td>25</td>
                      <td>60</td>
                      <td>85</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <td>MCONSXXXXXXX239</td>
                      <td>First Semester</td>
                      <td>PHY101</td>
                      <td>18</td>
                      <td>50</td>
                      <td>68</td>
                      <td>B</td>
                    </tr>
                    <tr>
                      <td>MCONSXXXXXXX239</td>
                      <td>Second Semester</td>
                      <td>CHM102</td>
                      <td>15</td>
                      <td>30</td>
                      <td>45</td>
                      <td>D</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div
                className="fx-cl"
                style={{
                  backgroundColor: "rgb(217 216 213)",
                  padding: ".61rem",
                  borderRadius: ".8rem",
                }}
              ></div>
              <div
                className="fx-cl"
                style={{
                  backgroundColor: "#f7c9f8ff",
                  padding: "1rem",
                  borderRadius: ".8rem",
                }}
              >
                <div className="fx-ac fx-jb space3">
                  <FileHandling />

                  <div className="fx-ac space3">
                    <button
                      className="fx-ac spacem"
                      onClick={() => alert("im clicked")}
                      style={{
                        backgroundColor: "rgba(255, 0, 98, 1)",
                        color: "#fff",
                      }}
                    >
                      <MailIcon />
                      <span>Cancel upload</span>
                    </button>

                    <button
                      className="fx-ac spacem"
                      onClick={() => alert("im clicked")}
                      style={{
                        backgroundColor: "rgb(0, 210, 133)",
                        color: "#fff",
                      }}
                    >
                      <MailIcon />
                      <span>Upload results</span>
                    </button>
                  </div>
                </div>
              </div> */}

              <FileHandling />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
