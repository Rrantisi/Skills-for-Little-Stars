import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../store/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const error = useSelector((state) => state.auth.error);

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials, navigate));
  };

  return (
    <div className="form-wrapper">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-element-wrapper">
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-element-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-submit">
          Log In
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
