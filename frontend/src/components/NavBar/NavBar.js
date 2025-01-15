import React from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  const handleLogout = () => {
    logOut();
    setUser(null);
  };

  return (
    <div>
      <h5 id="welcome-user">Welcome, {user.username}!</h5>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/learn">
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to="/practice">
              Practice
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz">
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/progress">
              Progress
            </NavLink>
          </li>
          <li>
            <NavLink to="/parents">
              Parents
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={handleLogout}>
              Log Out
            </NavLink>
          </li>
        </ul>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
