import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from '../../store/subjectReducer';

function Levels({ subjectId, selectedLevel, setSelectedLevel }) {
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
          <div key={level.id} onClick={() => setSelectedLevel(reversedIndex)} className={selectedLevel === reversedIndex ? "active-level" : ""}>
            {level.name}
          </div>
        );
      })}
    </>
  );
}

export default Levels
