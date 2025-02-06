import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from "../../store/subjectReducer";
import './Content.css';

function Content({ subjectId, selectedLevel }) {
  const dispatch = useDispatch();
  const content = useSelector(
    (state) => state.subjects.subjectDetails[subjectId]?.[0]?.content[selectedLevel]|| []
  );

  const parsedContent = JSON.parse(content.content);

  useEffect(() => {
    dispatch(fetchSubjectDetails(subjectId));
  }, [dispatch, subjectId]);

  return (
    <>
      { content && (
        <div className="content-container">
          <h2>{ parsedContent?.topic || "" }</h2>
          <h3>{ parsedContent?.main || "" }</h3>
          <>
          { parsedContent?.details.length > 0 && (
            parsedContent?.details.map((detail) => (
                <p>{ detail }</p>
            ))
          )}
          </>
        </div>
      )}
    </>
  );
}

export default Content;
