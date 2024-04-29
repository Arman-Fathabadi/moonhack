import React from "react";
import "./infoStyle.css";

function Info() {
  return (
    <div className="info-container">
      <h2>Information</h2>
      <div className="info-section">
        <h3>Section 1 Title</h3>
        <p>Information related to section 1...</p>
      </div>
      <div className="info-section">
        <h3>Section 2 Title</h3>
        <p>Information related to section 2...</p>
      </div>
      {/* It may need to change/add more content */}
    </div>
  );
}

export default Info;
