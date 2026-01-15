import React, { useReducer, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as Action from "../../../store/redux/admin_reducer.js";
let adminData;
const initialState = {
  files: { uploadpassport: null },
  uploadProgress: { uploadpassport: 0 },
  uploadStatus: { uploadpassport: null },
  uploadedImageUrl: { uploadpassport: null },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILE":
      return {
        ...state,
        files: { ...state.files, [action.docType]: action.payload },
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
          [action.docType]: "File uploaded successfully!",
        },
        uploadedImageUrl: {
          ...state.uploadedImageUrl,
          [action.docType]: action.payload,
        },
      };
    case "UPLOAD_FAILURE":
      return {
        ...state,
        uploadStatus: {
          ...state.uploadStatus,
          [action.docType]: "Failed to upload file",
        },
      };
    case "RESET_STATUS":
      return { ...state, uploadStatus: { uploadpassport: null } };
    default:
      return state;
  }
};

export const PassportUpload = ({ objectId }) => {
  const dispatch = useDispatch();
  const [state, dispatch2] = useReducer(reducer, initialState);
  const { id } = useParams();
  const fileInputRef = useRef(null);

  const handleFileChange = async (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      dispatch2({ type: "ADD_FILE", docType, payload: file });
      await uploadFile(file, docType);
    }
  };

  const uploadFile = async (file, docType) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/upload_admin_passport/${objectId}`,
        formData, // ✅ Pass formData here
        {
          headers: {
            "Content-Type": "multipart/form-data", // ✅ Ensure correct headers
          },
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            dispatch2({
              type: "UPLOAD_PROGRESS",
              docType,
              payload: percentage,
            });
          },
        }
      );

      if (response.status === 200) {
        dispatch2({
          type: "UPLOAD_SUCCESS",
          docType,
          payload: response.data.url, // ✅ Save uploaded image URL
        });
      }
      adminData = response.data?.data?.found;
      dispatch(DispatchLogOut());
    } catch (error) {
      console.error("Error uploading file:", error);
      dispatch2({ type: "UPLOAD_FAILURE", docType });
    }
  };

  const DispatchLogOut = () => async (dispatch) => {
    try {
      dispatch(Action.logOut());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="passportUploadCont fileUploadCont fx-cl fx-ac"
      style={{ maxWidth: "20rem" }}
    >
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
          style={{ backgroundColor: "transparent" }}
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <CloudUploadIcon style={{ fontSize: "5.4rem", color: "#065ad8" }} />
          <span>Upload passport</span>
        </button>
      )}
      <input
        ref={fileInputRef}
        type="file"
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
