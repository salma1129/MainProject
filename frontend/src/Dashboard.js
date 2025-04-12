import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { User, Briefcase, Clock, Menu } from "lucide-react";
import React from "react";
import './Dashboard.css';  

const Sidebar = () => (
  <div className="sidebar">
    <h2>HR Dashboard</h2>
    <ul>
      <li>Dashboard</li>
      <li>Employees</li>
      <li>Reports</li>
      <li>Settings</li>
    </ul>
  </div>
);

const Navbar = () => (
  <div className="navbar">
    <Menu size={24} className="cursor-pointer" />
    <h1>HR Dashboard</h1>
    <div className="admin">
      <p>Admin</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [stats] = useState({
    totalEmployees: 120,
    activeEmployees: 95,
    onLeave: 15,
  });

  const activityData = [
    { name: "Jan", employees: 100 },
    { name: "Feb", employees: 110 },
    { name: "Mar", employees: 120 },
  ];

  // State for the user input form
  const [userInput, setUserInput] = useState({ name: "", role: "" });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  // Handle form submission (optional, you can expand this)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User submitted:", userInput);
    setUserInput({ name: "", role: "" }); // Clear the form after submission
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard">
        <Navbar />
        
        {/* Dashboard content */}
        <div className="content-container">
          {/* Stat Cards */}
          <div className="card-container flex flex-col md:flex-row gap-6 p-4">
            <div className="card">
              <div className="card-header">
                <User className="card-icon" size={40} />
                <p>Total Employees</p>
                <p className="stat">{stats.totalEmployees}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <Briefcase className="card-icon" size={40} />
                <p>Active Employees</p>
                <p className="stat">{stats.activeEmployees}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <Clock className="card-icon" size={40} />
                <p>On Leave</p>
                <p className="stat">{stats.onLeave}</p>
              </div>
            </div>
          </div>

          {/* Chart Container */}
          <div className="chart-container p-4">
            <h2 className="text-xl font-semibold mb-6">Employee Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="employees" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
