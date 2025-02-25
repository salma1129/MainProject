import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Forgetpass from "./Forgetpass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Forgetpass />} />
      </Routes>
    </Router>
  );
}

export default App;
