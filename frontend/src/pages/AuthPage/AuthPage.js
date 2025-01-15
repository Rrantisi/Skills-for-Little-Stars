import React, { useState } from "react";
import LogIn from "../../components/Login/Login";
import SignUp from "../../components/Signup/Signup";

function AuthPage() {
  const [isSignedUp, setIsSignedUp] = useState(true);

  const toggleForm = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <div>
      {isSignedUp ? <SignUp /> : <LogIn />}
      <div>
        <button onClick={toggleForm}>
          {isSignedUp
            ? "Already a user? Login here"
            : "Join us today for a fun learning experience"}
        </button>
      </div>
    </div>
  );
}

export default AuthPage;
