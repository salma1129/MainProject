import Sidebar from "./Sidebar";
import DashboardUsers from "./DashboardUsers";

import React from "react";
import "./Admin.css"
//import { User, Briefcase, Clock, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom"; // React Router v6 (for navigation)

const Navbar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSignUpClick = () => {
    navigate('/signup'); // This will redirect to the "/signup" route
  };

  return (
    <div className="navbar">
     
      <h1>Admin Dashboard</h1>
      <div className="navbar-right">
        <button 
          onClick={handleSignUpClick} 
          className="button-signup">
          Sign Up
        </button>
      </div>
    </div>
  );
};


const Users = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard">
      <Navbar />

        {/* Add User Form inside a colored box */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-6">
          <DashboardUsers />
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="card-container">
            {/* Add your cards here if needed */}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Users;
