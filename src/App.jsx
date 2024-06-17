// src/components/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Login, Signup, ResetPassword } from "./components/Auth/index";
import Home from "./components/Home";
import UserProfile from "./components/Dashboard/UserProfile";
import ResumeGenerator from "./components/Dashboard/ResumeGenerator";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route
              path="/resume-generator"
              element={<ResumeGenerator hideDownloadButton={true} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
