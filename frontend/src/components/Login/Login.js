import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login data to backend
    try {
      const response = await axios.post("/api/session", {
        username: credentials.username,
        password: credentials.password,
      });

      // If login is successful, handle the response
      if (response.status === 200) {
        const { token } = response.data;
        console.log(response.data);
        localStorage.setItem("token", token);
        window.location.reload();
      } else {
        console.log("error response message is: ", response);
      }
    } catch (err) {
      setError("Invalid username or password");
    }
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
      <p>&nbsp;{error}</p>
    </div>
  );
};

export default Login;
