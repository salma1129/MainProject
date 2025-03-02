import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Forgetpass from "./Forgetpass";
import Admin from "./Admin";
import Apply from "./Apply";
import Leave from "./Leave";
import Manage from "./Manage";
import JobDescription from "./HomePage";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Forgetpass />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/JobDescription" element={<JobDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
