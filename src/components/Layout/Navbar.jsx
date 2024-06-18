import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-amber-600 bg-opacity-80 backdrop-blur-md text-white shadow-md border-b border-blue-700">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-semibold text-white hover:text-amber-300 transition duration-300"
        >
          Skillsynergy
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-amber-300 transition duration-300"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-white hover:text-amber-300 transition duration-300"
          >
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center space-x-2 text-white hover:text-amber-300 transition duration-300"
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-amber-300 transition duration-300"
          >
            <FaHome size={20} />
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-amber-300 transition duration-300"
          >
            <FaUser size={20} />
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-amber-300 transition duration-300"
          >
            <FaSignInAlt size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
