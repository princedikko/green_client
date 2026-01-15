import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./fileupload.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const initialState = {
  files: {
    uploadpassport: null,
    ssceCertificate: null,
    secsectesti: null,
    fslce: null,
    birthcertificate: null,
    // primaryTestimonial: null,
    // primaryCertificate: null,
    // customDoc: null,
  },
  uploadProgress: {
    uploadpassport: 0,
    ssceCertificate: 0,
    secsectesti: 0,
    fslce: 0,
    birthcertificate: 0,
    // primaryTestimonial: 0,
    // primaryCertificate: 0,
    // customDoc: 0,
  },
  uploadStatus: {
    uploadpassport: null,
    ssceCertificate: null,
    secsectesti: null,
    fslce: null,
    birthcertificate: null,
    // primaryTestimonial: null,
    // primaryCertificate: null,
    // customDoc: null,
  },
  uploadedImageUrl: {
    uploadpassport: null,
    ssceCertificate: null,
    secsectesti: null,
    fslce: null,
    birthcertificate: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILE":
      return {
        ...state,
        files: {
          ...state.files,
          [action.docType]: action.payload,
        },
      };
    case "UPLOAD_PROGRESS":
      return {
        ...state,
        uploadProgress: {
          ...state.uploadProgress,
          [action.docType]: action.payload,
        },
      };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        uploadStatus: {
          ...state.uploadStatus,
          [action.docType]: `File uploaded successfully!`,
        },
        uploadedImageUrl: {
          ...state.uploadedImageUrl,
          [action.docType]: action.payload, // Save the uploaded image URL
        },
      };
    case "UPLOAD_FAILURE":
      return {
        ...state,
        uploadStatus: {
          ...state.uploadStatus,
          [action.docType]: `Failed to upload file`,
        },
      };
    case "RESET_STATUS":
      return { ...state, uploadStatus: null };
    default:
      return state;
  }
};
export const FileUploads = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();
  const handleFileChange = async (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      dispatch({ type: "ADD_FILE", docType, payload: file });
      await uploadFile(file, docType);
    }
  };

  const uploadFile = async (file, docType) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/upload/${id}`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            dispatch({
              type: "UPLOAD_PROGRESS",
              docType,
              payload: percentage,
            });
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: "UPLOAD_SUCCESS",
          docType,
          payload: response.data.url, // Assume the server returns the uploaded file URL
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      dispatch({ type: "UPLOAD_FAILURE", docType });
    }
  };

  return (
    <div className="uploads-container">
      {/* Button 1: Upload SSCE Certificate */}
      <div className="fileUploadCont fx-cl fx-ac fx-jc">
        {state.uploadStatus.ssceCertificate ===
        "File uploaded successfully!" ? (
          <div className="uploadedImage">
            <img
              src={state.uploadedImageUrl.ssceCertificate}
              alt="Uploaded Passport"
            />
          </div>
        ) : (
          <button
            className="fx-cl space1 fx-ac fx-jc"
            onClick={() => document.getElementById("ssceInput").click()}
          >
            <CloudUploadIcon style={{ fontSize: "5.4rem", color: "#065ad8" }} />

            <span>Upload SSCE/NABTEB</span>
          </button>
        )}

        <input
          type="file"
          id="ssceInput"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "ssceCertificate")}
        />
        {state.uploadStatus.ssceCertificate ===
        "File uploaded successfully!" ? null : (
          <progress
            value={state.uploadProgress.ssceCertificate || 0}
            max="100"
          ></progress>
        )}
        {state.uploadStatus.ssceCertificate && (
          <p>{state.uploadStatus.ssceCertificate}</p>
        )}
      </div>

      {/* Button 2: Upload Secondary School Testimonial */}
      <div className="fileUploadCont fx-cl fx-ac fx-jc">
        {state.uploadStatus.secsectesti === "File uploaded successfully!" ? (
          <div className="uploadedImage">
            <img
              src={state.uploadedImageUrl.secsectesti}
              alt="Uploaded Passport"
            />
          </div>
        ) : (
          <button
            className="fx-cl space1 fx-ac fx-jc"
            onClick={() => document.getElementById("secschtestimonial").click()}
          >
            <CloudUploadIcon style={{ fontSize: "5.4rem", color: "#065ad8" }} />

            <span>Upload Secondary School Testimonial</span>
          </button>
        )}

        <input
          type="file"
          id="secschtestimonial"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "secsectesti")}
        />

        {state.uploadStatus.secsectesti ===
        "File uploaded successfully!" ? null : (
          <progress
            value={state.uploadProgress.secsectesti || 0}
            max="100"
          ></progress>
        )}

        {state.uploadStatus.secsectesti && (
          <p>{state.uploadStatus.secsectesti}</p>
        )}
      </div>

      {/* Button 3: Upload Primary Certificate */}
      <div className="fileUploadCont fx-cl fx-ac fx-jc">
        {state.uploadStatus.fslce === "File uploaded successfully!" ? (
          <div className="uploadedImage">
            <img src={state.uploadedImageUrl.fslce} alt="Uploaded Passport" />
          </div>
        ) : (
          <button
            className="fx-cl space1 fx-ac fx-jc"
            onClick={() => document.getElementById("fslce").click()}
          >
            <CloudUploadIcon style={{ fontSize: "5.4rem", color: "#065ad8" }} />

            <span>Upload Primary School Certificate</span>
          </button>
        )}

        <input
          type="file"
          id="fslce"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "fslce")}
        />
        {state.uploadStatus.fslce === "File uploaded successfully!" ? null : (
          <progress
            value={state.uploadProgress.fslce || 0}
            max="100"
          ></progress>
        )}

        {state.uploadStatus.fslce && <p>{state.uploadStatus.fslce}</p>}
      </div>

      {/* Button 4: Upload Birth Certificate */}
      <div className="fileUploadCont fx-cl fx-ac fx-jc">
        {state.uploadStatus.birthcertificate ===
        "File uploaded successfully!" ? (
          <div className="uploadedImage">
            <img
              src={state.uploadedImageUrl.birthcertificate}
              alt="Uploaded Passport"
            />
          </div>
        ) : (
          <button
            className="fx-cl space1 fx-ac fx-jc"
            onClick={() => document.getElementById("birthcert").click()}
          >
            <CloudUploadIcon style={{ fontSize: "5.4rem", color: "#065ad8" }} />

            <span>Upload Birth Certificate</span>
          </button>
        )}

        <input
          type="file"
          id="birthcert"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "birthcertificate")}
        />
        {state.uploadStatus.birthcertificate ===
        "File uploaded successfully!" ? null : (
          <progress
            value={state.uploadProgress.birthcertificate || 0}
            max="100"
          ></progress>
        )}

        {state.uploadStatus.birthcertificate && (
          <p>{state.uploadStatus.birthcertificate}</p>
        )}
      </div>
    </div>
  );
};

export const PassportUpload = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();

  const handleFileChange = async (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      dispatch({ type: "ADD_FILE", docType, payload: file });
      await uploadFile(file, docType);
    }
  };

  const uploadFile = async (file, docType) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/upload/passport/${id}`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            dispatch({
              type: "UPLOAD_PROGRESS",
              docType,
              payload: percentage,
            });
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: "UPLOAD_SUCCESS",
          docType,
          payload: response.data.url, // Assume the server returns the uploaded file URL
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      dispatch({ type: "UPLOAD_FAILURE", docType });
    }
  };
  return (
    <div className="passportUploadCont  fileUploadCont fx-cl fx-ac ">
      {state.uploadStatus.uploadpassport === "File uploaded successfully!" ? (
        <div className="uploadedImage">
          <img
            src={state.uploadedImageUrl.uploadpassport}
            alt="Uploaded Passport"
          />
        </div>
      ) : (
        <button
          className="fx-cl space1 fx-ac fx-jc"
          onClick={() => document.getElementById("passportInput").click()}
        >
          <CloudUploadIcon style={{ fontSize: "5.4rem", color: "#065ad8" }} />
          <span>Upload passport</span>
        </button>
      )}
      <input
        type="file"
        id="passportInput"
        style={{ display: "none" }}
        onChange={(e) => handleFileChange(e, "uploadpassport")}
      />

      {state.uploadStatus.uploadpassport !== "File uploaded successfully!" && (
        <progress
          value={state.uploadProgress.uploadpassport || 0}
          max="100"
        ></progress>
      )}
      {state.uploadStatus.uploadpassport && (
        <p>{state.uploadStatus.uploadpassport}</p>
      )}
    </div>
  );
};
