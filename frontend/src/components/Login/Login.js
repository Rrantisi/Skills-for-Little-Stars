import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

//   const navigate = useNavigate();

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
        const { token } = response.data
        console.log(response.data);
        localStorage.setItem('token', token)
        // navigate('/');
        window.location.reload();
      } else {
        console.log("error response message is: ", response);
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  const handleLogout = async () => {
    try {
      // Send logout request to the backend
      const response = await axios.post("/api/session/logout");

      // If logout is successful
      console.log(response.data);
      // Optionally, you can redirect to the login page or perform other actions
      window.location.href = "/api/session"; // Redirect to login page
    } catch (error) {
      console.error(
        "Logout failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <p>&nbsp;{error}</p>
    </div>
  );
};

export default Login;
