import React from "react";
import "./staffPreview.css";

const StaffPreview = () => {
  return (
    <div className="stud-profile-container stud-bg-white stud-shadow-lg stud-rounded-lg stud-p-6 stud-w-96">
      <div className="stud-flex stud-flex-col stud-items-center">
        <div className="stud-w-24 stud-h-24 stud-rounded-full stud-bg-gray-300 stud-flex stud-items-center stud-justify-center stud-text-4xl stud-font-bold stud-text-blue-500">
          O
        </div>
        <button className="stud-mt-2 stud-bg-gray-200 stud-text-gray-600 stud-px-4 stud-py-1 stud-rounded">
          Edit account
        </button>
      </div>

      <h2 className="stud-text-xl stud-font-bold stud-text-center stud-mt-4">
        Othman Omar Dikko
      </h2>
      <p className="stud-text-sm stud-text-center stud-text-gray-500">
        Account is activated
      </p>

      <div className="stud-mt-4 stud-text-center">
        <span className="stud-text-lg stud-font-bold">8.1</span>
        <span className="stud-text-gray-500"> ★☆☆☆☆</span>
      </div>

      <div className="stud-mt-4">
        <h3 className="stud-font-semibold">Contact Information</h3>
        <p>
          <strong>Other name:</strong> Omar Dikko
        </p>
        <p>
          <strong>Email address:</strong>{" "}
          <a href="mailto:princedikko@gmail.com" className="stud-text-blue-500">
            princedikko@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone No.:</strong>{" "}
          <a href="tel:08063996056" className="stud-text-blue-500">
            08063996056
          </a>
        </p>
      </div>

      <div className="stud-mt-4">
        <h3 className="stud-font-semibold">Basic Information</h3>
        <p>
          <strong>Title:</strong> Professor
        </p>
        <p>
          <strong>State:</strong> Sokoto
        </p>
        <p>
          <strong>Gender:</strong> Male
        </p>
      </div>

      <div className="stud-mt-4">
        <h3 className="stud-font-semibold">Works</h3>
        <div className="stud-bg-gray-100 stud-p-2 stud-rounded stud-mb-2">
          <strong>Important Data!</strong> Primary
          <p className="stud-text-sm stud-text-gray-500">
            You have not added any primary information yet
          </p>
        </div>
        <div className="stud-bg-gray-100 stud-p-2 stud-rounded">
          <strong>Training Stuff!</strong> Secondary
          <p className="stud-text-sm stud-text-gray-500">
            Secondary information is not added.
          </p>
        </div>
      </div>

      <div className="stud-mt-4">
        <h3 className="stud-font-semibold">Skills</h3>
        <p className="stud-text-gray-500">Some skills over!</p>
      </div>
    </div>
  );
};

export default StaffPreview;
