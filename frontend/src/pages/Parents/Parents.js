import React from 'react';
import { useSelector } from "react-redux";
import './Parents.css';

function Parents({ user }) {
  const progress = useSelector((state) => state.progress);

  // Calculate completion rate:
  const totalData = progress.progress.length;
  const completedItems = progress.progress?.filter(data => data.completed).length || 0;
  const completionRate = totalData > 0 ? (completedItems / totalData) * 100 : 0;

  // Calculate overall score across all subjects and levels:
  let totalScore = 0;
  for(let i = 0; i < progress.progress.length; i++){
    let item = progress.progress[i];
    totalScore += item.score;
  }

  return (
    <div className="parents-profile-wrapper">
      <h1>Hi Parent 👋</h1>
      <h3>
        <span className="username">{user.username}</span>'s Progress:
      </h3>
      <h4>
        <span>Levels Completed:</span> {completionRate}%
      </h4>
      <h4>
        <span>Overall Score:</span> {totalScore}
      </h4>
      <div className="settings-wrapper">
        <h3>Settings:</h3>
        <p>Update Username</p>
        <p>Change Password</p>
        <p>Set Progress Notifications</p>
      </div>
    </div>
  );
}

export default Parents
