import "./App.css";
import Courses from "./components/courses/Courses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
