import React from "react";
import Subjects from "../../components/Subjects/Subjects";

function Quiz() {
  return (
    <div className="page-wrapper">
      <div className="subjects-wrapper">
        <Subjects />
      </div>
      <div className="content-wrapper">Quiz</div>
    </div>
  );
}

export default Quiz;
