import { useState } from "react";
import { FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-gray-900 h-full transition-all p-4 flex flex-col gap-6 shadow-lg border-r border-gray-700`}>
      <button className="text-white text-2xl self-end mb-4 hover:text-blue-400" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <FaBars />
      </button>
      <nav className="flex flex-col gap-6">
        <NavItem icon={<FaHome />} text="Home" showText={sidebarOpen} />
        <NavItem icon={<FaUser />} text="Profile" showText={sidebarOpen} />
        <NavItem icon={<FaCog />} text="Settings" showText={sidebarOpen} />
      </nav>
    </div>
  );
}
