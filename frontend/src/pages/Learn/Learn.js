import React, { useState } from "react";
import Levels from "../../components/Levels/Levels";
import Subjects from "../../components/Subjects/Subjects";
import Content from "../../components/Content/Content";
import "./Learn.css";

function Learn() {
  const [selectedSubject, setSelectedSubject] = useState({
    id: 1,
    name: "Math",
  });
  const [selectedLevel, setSelectedLevel] = useState(2);

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
          <Levels
            subjectId={selectedSubject?.id}
            setSelectedLevel={setSelectedLevel}
          />
        </div>
        {selectedSubject?.name}
        <Content
          subjectId={selectedSubject?.id}
          selectedLevel={selectedLevel}
        />
      </div>
    </div>
  );
}

export default Learn;
