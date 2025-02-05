import React, { useState } from "react";
import Levels from "../../components/Levels/Levels";
import Subjects from "../../components/Subjects/Subjects";
import "./Learn.css";

function Learn() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <div className="page-wrapper">
      <div className="subjects-wrapper">
        <Subjects
          setSelectedSubject={setSelectedSubject}
          setSelectedLevel={setSelectedLevel}
        />
      </div>
      <div className="content-wrapper">
        <div className="levels-wrapper">
          <Levels subjectId={selectedSubject?.id} />
        </div>
        {selectedSubject?.name}
      </div>
    </div>
  );
}

export default Learn;
