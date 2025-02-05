import React, { useState } from "react";
import Subjects from "../../components/Subjects/Subjects";
import "./Learn.css";

function Learn() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  return (
    <div className="page-wrapper">
      <div className="subjects-wrapper">
        <Subjects setSelectedSubject={setSelectedSubject} setSelectedLevel={setSelectedLevel}/>
      </div>
      <div className="content-wrapper">{selectedSubject.name}</div>
    </div>
  );
}

export default Learn;
