import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
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
import Users from "./Users";



function App() {
  return (
    <BrowserRouter>
    <Routers>
      <Route>
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
        <Route path="/Users" element={<Users />} />

      </Route>
    </Routers>
    </BrowserRouter>
  );
}

export default App;
