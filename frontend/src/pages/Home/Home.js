import React, { useState } from "react";
import "./Home.css";

function Home({ user }) {
  const [emoji, setEmoji] = useState(localStorage.getItem('feeling') || "😄");

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const feelings = {
    '😄': 'Happy',
    '😛': 'Silly',
    '🙁': 'Sad',
    '😠': 'Angry'
  }

  const d = new Date();
  let day = weekday[d.getDay()];
  let year = d.getFullYear();

  const handleEmojiClick = (e) => {
    const newEmoji = e.target.textContent;
    setEmoji(newEmoji)
    localStorage.setItem('feeling', newEmoji)
  };

  return (
    <div className="home-wrapper">
      <div className="welcome-wrapper">
        <h2 id="welcome-user">Welcome, {user.username} 🤗</h2>
        <h3>
          We are in the amazing year <span className="date-span"> {year}</span>{" "}
          🎊
        </h3>
        <h3>
          📅 Today is a wonderful <span className="date-span"> {day}</span>!
        </h3>
      </div>
      <div className="new-wrapper">
        <h1>What's New</h1>
        <div className="new-stuff-wrapper">
          <div>New Content added for Math Subject!</div>
          <div>New Content added for Listen and Read!</div>
          <div>New Content added for Shapes and Colors!</div>
        </div>
      </div>
      <div className="feelings-wrapper">
        <h2>How are you feeling today?</h2>
        <div className="faces" onClick={handleEmojiClick}>
          <h1>😄</h1>
          <h1>😛</h1>
          <h1>🙁</h1>
          <h1>😠</h1>
        </div>
        <h2 className="feeling-statement">
          <span className="feeling">I'm feeling</span> {feelings[emoji]}
        </h2>
      </div>
    </div>
  );
}

export default Home;
