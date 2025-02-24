import React, { useState } from "react";
// import Login from "./Login";
import Sign from './signup';
import Dashboard from "./Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("Login");

  return (
    <div>
     <Dashboard/>  </div>
  );
}

export default App;
