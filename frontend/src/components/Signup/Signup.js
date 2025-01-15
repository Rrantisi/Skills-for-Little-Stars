import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (credentials.password !== credentials.confirm) {
      setError("Passwords do not match");
      return;
    }

    // Send signup data to backend
    try {
      const response = await axios.post("/api/session/signup", {
        username: credentials.username,
        password: credentials.password,
      });

      // If signup is successful, handle the response
      setSuccess("Account created successfully. You can now log in.");
      console.log(response);
      setCredentials({
        username: "",
        password: "",
        confirm: "",
      });
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  const disabled = credentials.password !== credentials.confirm;

  return (
    <div>
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
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm"
          value={credentials.confirm}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={disabled}>
          Sign Up
        </button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
}

export default Signup;
