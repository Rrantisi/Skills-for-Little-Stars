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
        <h2 id="welcome-user">Welcome, {user.username}!</h2>
        <h3>🌟 We are in the amazing year {year}! 🎊</h3>
        <h3>📅 Today is a wonderful {day}! 🥳</h3>
      </div>
      <div className="new-wrapper">
        <h1>What's New</h1>
        <h3>New stuff are here</h3>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui eaque
          molestiae inventore soluta quam itaque commodi in pariatur. Ipsum
          asperiores quis itaque nisi ullam tenetur minima. Voluptates, illo.
          Non, natus?
        </h3>
      </div>
      <div className="feelings-wrapper">
        <h2>How are you feeling today?</h2>
        <div className="faces" onClick={handleEmojiClick}>
          <h1>😄</h1>
          <h1>😛</h1>
          <h1>🙁</h1>
          <h1>😠</h1>
        </div>
        <h2>I'm feeling {emoji}</h2>
      </div>
    </div>
  );
}

export default Home;
