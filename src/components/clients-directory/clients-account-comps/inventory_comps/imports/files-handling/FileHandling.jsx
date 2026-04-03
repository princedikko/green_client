import { useState } from "react";
import axios from "axios";

import MailIcon from "@mui/icons-material/Mail";
export default function ResultUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  console.log(file);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("resultsFile", file);

    await axios.post(
      `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/management/result_upload/new_results/postNewResult`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          setProgress(percent);
        },
      },
    );
  };

  return (
    <div className="fx-cl space2">
      <div
        className="fx-cl"
        style={{
          backgroundColor: "rgb(217 216 213)",
          padding: ".61rem",
          borderRadius: ".8rem",
        }}
      >
        <div>{progress}% uploaded</div>
      </div>

      <div
        className="fx-cl"
        style={{
          backgroundColor: "#f7c9f8ff",
          padding: "1rem",
          borderRadius: ".8rem",
        }}
      >
        <div className="fx-ac fx-jb space3">
          <div className="fx-cl">
            <input type="file" accept=".csv" onChange={handleFileChange} />
          </div>
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
              onClick={() => handleUpload}
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
      </div>
    </div>
  );
}
