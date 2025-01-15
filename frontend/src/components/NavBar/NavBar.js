import React from "react";
import { NavLink, Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import logo from "../../images/logo.png"
import "./NavBar.css";

export default function NavBar({ setUser }) {
  const handleLogout = () => {
    logOut();
    setUser(null);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Home" />
          </NavLink>
        </div>
        <ul>
          <li>
            <Link to="#"></Link>
          </li>
          <li>
            <NavLink to="/learn">Learn</NavLink>
          </li>
          <li>
            <NavLink to="/practice">Practice</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/progress">Progress</NavLink>
          </li>
          <li>
            <NavLink to="/parents">Parents</NavLink>
          </li>
        </ul>
        <Link to="/" onClick={handleLogout}>
          Log Out
        </Link>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
