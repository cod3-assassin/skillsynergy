import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaTrash,
  FaKey,
  FaSave,
  FaUpload,
  FaUndo,
} from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [password, setPassword] = useState("");
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User not authenticated");
        }
        const response = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching user:", error); // Log the error for debugging
        setError(error.message); // Set error state to handle in UI
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }
      await axios.put(
        `http://localhost:5000/api/profile`,
        { name, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.message);
    }
  };

  const handleUploadResume = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resume);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }
      await axios.post(`http://localhost:5000/api/profile/resume`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Resume uploaded successfully");
    } catch (error) {
      console.error("Error uploading resume:", error);
      setError(error.message);
    }
  };

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }
      await axios.put(
        `http://localhost:5000/api/profile/password`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Password changed successfully");
      setShowPasswordChange(false);
    } catch (error) {
      console.error("Error changing password:", error);
      setError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }
      await axios.post(
        `http://localhost:5000/api/profile/forgot-password`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Password reset link sent to your email");
      setForgotPassword(false);
    } catch (error) {
      console.error("Error sending reset link:", error);
      setError(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }
      await axios.delete(`http://localhost:5000/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Account deleted successfully");
      // Redirect or take further action after account deletion
    } catch (error) {
      console.error("Error deleting account:", error);
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">User Profile</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-700">{user.email}</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600"
              title="Edit Profile"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => setShowPasswordChange(true)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
              title="Change Password"
            >
              <FaKey />
            </button>
            <button
              onClick={() => setForgotPassword(true)}
              className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600"
              title="Forgot Password"
            >
              <FaUndo />
            </button>
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              title="Delete Account"
            >
              <FaTrash />
            </button>
          </div>
        </div>
        {isEditing && (
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>
            <button
              onClick={handleUpdateProfile}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
            >
              <FaSave className="mr-2" /> Save
            </button>
          </div>
        )}
        {showPasswordChange && (
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                New Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>
            <button
              onClick={handleChangePassword}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
            >
              <FaSave className="mr-2" /> Save Password
            </button>
          </div>
        )}
        {forgotPassword && (
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <button
              onClick={handleForgotPassword}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center"
            >
              <FaUndo className="mr-2" /> Send Reset Link
            </button>
          </div>
        )}
        <div className="bg-gray-100 p-6 rounded-lg">
          <form onSubmit={handleUploadResume}>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Upload Resume:
              </label>
              <input
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                className="w-full p-3 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
            >
              <FaUpload className="mr-2" /> Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
