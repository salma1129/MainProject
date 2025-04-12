import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingUser ? "PUT" : "POST";
    const url = editingUser
      ? `http://localhost:5000/api/users/${editingUser._id}`
      : "http://localhost:5000/api/users/create";

    const userData = editingUser
      ? { name: form.name, email: form.email }
      : { name: form.name, email: form.email, password: "defaultPassword123" };

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
        return;
      }

      fetchUsers();
      setForm({ name: "", email: "" });
      setEditingUser(null);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create/update user. Check your backend.");
    }
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  const editUser = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700">User Management</h2>
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-3 hover:bg-blue-700 transition"
          >
            {editingUser ? "Update" : "Create"} User
          </button>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-blue-200 text-left">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-blue-50 transition">
                  <td className="p-3 border-b">{user.name}</td>
                  <td className="p-3 border-b">{user.email}</td>
                  <td className="p-3 border-b space-x-2">
                    <button
                      onClick={() => editUser(user)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center p-4 text-blue-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
