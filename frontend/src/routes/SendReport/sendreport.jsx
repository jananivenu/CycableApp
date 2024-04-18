import React, { useState, useRef } from "react";
import CameraComponent from "../Camera/camera";

const SendReport = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div>
      <h1>Send Report</h1>
      {showCamera ? (
        <CameraComponent />
      ) : (
        <button onClick={() => setShowCamera(true)}>Open Camera</button>
      )}
    </div>
  );
};

export default SendReport;
  