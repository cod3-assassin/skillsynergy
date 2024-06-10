import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 bg-opacity-50 backdrop-blur-lg text-white shadow-lg border-b-4 border-blue-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-300 transition duration-300"
        >
          JobResumeMaker
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300"
          >
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300"
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            <FaHome />
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-300">
            <FaUser />
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300">
            <FaSignInAlt />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
