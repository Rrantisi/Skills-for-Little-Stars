import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from '../../store/subjectReducer';

function Levels({ subjectId, setSelectedLevel }) {
  const dispatch = useDispatch();
  const levels = useSelector((state) => state.subjects.subjectDetails[subjectId]?.[0]?.levels || []);

  useEffect(() => {
    dispatch(fetchSubjectDetails(subjectId));
  }, [dispatch, subjectId]);

  return (
    <>
      {levels?.map((level, index) => {
        const reversedIndex = levels.length - 1 - index;
        return (
          <div key={level.id} onClick={() => setSelectedLevel(reversedIndex)}>
            {level.name}
          </div>
        );
      })}
    </>
  );
}

export default Levels
