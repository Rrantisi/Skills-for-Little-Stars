import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../store/authReducer";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirm: "",
  });

  const error = useSelector((state) => state.auth.error);

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpUser(credentials, navigate));
  };

  const disabled = credentials.password !== credentials.confirm;

  return (
    <div className="form-wrapper">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-element-wrapper">
          <input
            type="text"
            placeholder="Choose a username"
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
            placeholder="Choose a password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-element-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            name="confirm"
            value={credentials.confirm}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" disabled={disabled} className="form-submit">
          Sign Up
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
