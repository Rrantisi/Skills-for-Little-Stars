import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from '../../store/subjectReducer';

function Levels({ subjectId }) {
  const dispatch = useDispatch();
  const levels = useSelector((state) => state.subjects.subjectDetails[subjectId]?.[0]?.levels || []);

  useEffect(() => {
    dispatch(fetchSubjectDetails(subjectId));
  }, [dispatch, subjectId]);

  return (
    <>
      {levels?.map((level) => (
        <div key={level.id}>{level.name}</div>
      ))}
    </>
  );
}

export default Levels
