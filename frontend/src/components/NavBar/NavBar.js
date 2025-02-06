import React from "react";
import { NavLink, Link } from "react-router-dom";
import { logOutUser, setUser } from "../../store/authReducer";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import "./NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
    dispatch(setUser(null));
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
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
      </div>
    </div>
  );
}
