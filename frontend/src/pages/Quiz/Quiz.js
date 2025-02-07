import React, { useState } from "react";
// import Subjects from "../../components/Subjects/Subjects";
import Levels from "../../components/Levels/Levels";
import Content from "../../components/Content/Content";

function Quiz() {
  const selectedSubject = { id: 1, name: "Math" };
  const [selectedLevel, setSelectedLevel] = useState(2);

  return (
    <div className="page-wrapper">
      <div className="subjects-wrapper">
        <div key={selectedSubject.id}>{selectedSubject.name}</div>
      </div>
      <div className="content-wrapper">
        <div className="levels-wrapper">
          <Levels
            subjectId={selectedSubject?.id}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
          />
        </div>
        <Content
          subjectId={selectedSubject?.id}
          selectedLevel={selectedLevel}
        />
      </div>
    </div>
  );
}

export default Quiz;
