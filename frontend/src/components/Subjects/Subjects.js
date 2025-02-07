import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/subjectReducer";

function Subjects({ selectedSubject, setSelectedSubject, setSelectedLevel }) {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects.subjects);

  useEffect(() => {
      dispatch(fetchSubjects());
    },
    [dispatch]);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedLevel(2);
  }

  return (
    <>
      {subjects?.map((subject) => (
        <div
          key={subject.id}
          onClick={() => handleSubjectClick(subject)}
          className={selectedSubject.id === subject.id ? "active-subject" : ""}
        >
          {subject.name}
        </div>
      ))}
    </>
  );
}

export default Subjects;
