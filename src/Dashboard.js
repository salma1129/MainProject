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

  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-container">
    <div className="card">
        <div className="card-header">
            <User className="card-icon" size={40} />
            <p>Total Employees</p>
            <p className="stat">120</p>
        </div>
    </div>

    <div className="card">
        <div className="card-header">
            <Briefcase className="card-icon" size={40} />
            <p>Active Employees</p>
            <p className="stat">95</p>
        </div>
    </div>

    <div className="card">
        <div className="card-header">
            <Clock className="card-icon" size={40} />
            <p>On Leave</p>
            <p className="stat">15</p>
        </div>
    </div>
</div>

          </div>
        

        <div className="chart-container">
          <h2 className="text-xl font-semibold mb-6">Employee Growth</h2>
          <ResponsiveContainer width="25%" height={300}>
            <BarChart data={activityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="employees" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex space-x-6 mt-8">
          <button className="button-primary">Add Employee</button>
          <button className="button-secondary">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
