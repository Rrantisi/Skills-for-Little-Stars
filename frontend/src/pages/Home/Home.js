import React from "react";
import "./Home.css";

function Home({ user }) {
  return (
    <div>
      <h5 id="welcome-user">Welcome, {user.username}!</h5>
    </div>
  );
}

export default Home;
