import { useState } from "react";
import { FaUser, FaHome, FaCog, FaBars, FaChevronDown } from "react-icons/fa";
import "./Dashboard.css";
import React from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <button className="menu-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </button>
        <nav className="nav-menu">
          <NavItem icon={<FaHome />} text="Home" showText={sidebarOpen} />
          <NavItem icon={<FaUser />} text="Profile" showText={sidebarOpen} />
          <NavItem icon={<FaCog />} text="Settings" showText={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation Bar */}
        <div className="top-nav">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="profile-menu-container">
            <button className="profile-button" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
              <FaUser className="profile-icon" />
              <FaChevronDown className="dropdown-icon" />
            </button>
            {profileMenuOpen && (
              <div className="profile-dropdown">
                <button className="dropdown-item">Manage Profile</button>
                <button className="dropdown-item logout">Log Out</button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <h2 className="profile-title">Manage Profile</h2>
          <p className="profile-description">Update your personal information here.</p>
          <div className="profile-form">
            <input type="text" placeholder="Full Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <button className="save-button">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, text, showText }) {
  return (
    <div className="nav-item">
      {icon}
      {showText && <span className="nav-text">{text}</span>}
    </div>
  );
}
