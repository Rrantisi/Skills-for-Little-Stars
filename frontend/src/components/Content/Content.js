import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from "../../store/subjectReducer";

function Content({ subjectId, selectedLevel }) {
  const dispatch = useDispatch();
  const content = useSelector(
    (state) => state.subjects.subjectDetails[subjectId]?.[0]?.content[selectedLevel] || []
  );

  useEffect(() => {
    dispatch(fetchSubjectDetails(subjectId));
  }, [dispatch, subjectId]);

  return (
    <>
      <div>This is content placeholder</div>
    </>
  );
}

export default Content;
