import React from "react";
import "./Home.css";

function Home({ user }) {
  return (
    <div className="home-wrapper">
      <div className="welcome-wrapper">
        <h2 id="welcome-user">Welcome, {user.username}!</h2>
        <h3>Today is Wednesday</h3>
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
      </div>
    </div>
  );
}

export default Home;
