import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Learn from "../src/pages/Learn/Learn";
import Practice from "../src/pages/Practice/Practice";
import Quiz from "../src/pages/Quiz/Quiz";
import Progress from "../src/pages/Progress/Progress";
import Parents from "../src/pages/Parents/Parents";
import AuthPage from "../src/pages/AuthPage/AuthPage";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      {user ? (
        <>
          <NavBar />
          <div className="body">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/progress" element={<Progress user={user} />} />
              <Route path="/parents" element={<Parents user={user} />} />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage path="/" />
      )}
    </>
  );
}

export default App;
