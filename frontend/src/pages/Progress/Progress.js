import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgress } from "../../store/progressReducer";
import './Progress.css';

function Progress() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user)
  const progress = useSelector((state) => state.progress);

  let progressData = progress ? progress.progress : [];

  useEffect(() => {
    dispatch(fetchProgress(user.id))
  }, [dispatch, user.id])

  return (
    <div className="progress-wrapper">
      {progressData && progressData.length > 0 ? (
        progressData.map(
          (data) =>
            data.level.name === "Beginner" && (
              <div className="progress-result-wrapper" key={data.id}>
                <div id="subject-name">{data.subject.name}</div>
                <div id="level-name">
                  <span>Level:</span> {data.level.name}
                </div>
                <div id="completed">
                  <span>Completed:</span> {data.completed === false ? 'No' : 'Yes'}
                </div>
                <div id="score">
                  <span>Score:</span> {data.score}
                </div>
              </div>
            )
        )
      ) : (
        <div>No progress data found for this user.</div>
      )}
    </div>
  );
}

export default Progress;
