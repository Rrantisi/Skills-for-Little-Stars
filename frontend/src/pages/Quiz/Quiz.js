import React, { useState } from "react";
import Subjects from "../../components/Subjects/Subjects";

function Quiz() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  return (
    <div className="page-wrapper">
      <div className="subjects-wrapper">
        <Subjects
          setSelectedSubject={setSelectedSubject}
          setSelectedLevel={setSelectedLevel}
        />
      </div>
      <div className="content-wrapper">{selectedSubject.name}</div>
    </div>
  );
}

export default Quiz;
