import React from "react";
import Subjects from "../../components/Subjects/Subjects";
import "./Learn.css";

function Learn() {
  return (
    <div className="page-wrapper">
      <div className="subjects-wrapper">
        <Subjects />
      </div>
      <div className="content-wrapper">Learn</div>
    </div>
  );
}

export default Learn;
