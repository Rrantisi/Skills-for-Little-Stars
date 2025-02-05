import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/subjectReducer";

function Subjects() {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects.subjects);

  useEffect(() => {
      dispatch(fetchSubjects());
    },
    [dispatch]);

  return (
    <>
      {subjects?.map((subject) => (
        <div key={subject.id}>{subject.name}</div>
      ))}
    </>
  );
}

export default Subjects;
