import React, { useState } from "react";
import Subjects from "../../components/Subjects/Subjects";
import Levels from "../../components/Levels/Levels";

function Practice() {
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
      <div className="content-wrapper">
        <div className="levels-wrapper">
          <Levels subjectId={selectedSubject?.id} />
        </div>
        {selectedSubject.name}
      </div>
    </div>
  );
}

export default Practice;
