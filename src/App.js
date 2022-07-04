import "./App.css";
import Courses from "./components/courses/Courses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import SnackbarProvider from "react-simple-snackbar";
import React from "react";
function App() {
  return (
    <SnackbarProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </div>
    </SnackbarProvider>
  );
}

export default App;
