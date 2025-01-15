import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Learn from '../src/pages/Learn/Learn';
import Practice from '../src/pages/Practice/Practice';
import Quiz from '../src/pages/Quiz/Quiz';
import Progress from '../src/pages/Progress/Progress';
import Parents from '../src/pages/Parents/Parents';
import AuthPage from '../src/pages/AuthPage/AuthPage';
import NavBar from "./components/NavBar/NavBar";
import { getUser } from "./utilities/users-service";

function App() {
   const [user, setUser] = useState(getUser());

  return (
    <>
      {user ? (
        <>
          <NavBar
            user={user}
            setUser={setUser}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/progress" element={<Progress user={user} />} />
            <Route path="/parents" element={<Parents user={user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage path="/" setUser={setUser} />
      )}
    </>
  );
}

export default App;
