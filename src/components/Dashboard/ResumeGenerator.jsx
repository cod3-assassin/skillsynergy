// src/components/Dashboard/ResumeGenerator.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const ResumeGenerator = () => {
  const location = useLocation();
  const { name, email, experience } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Generated Resume</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p>{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator;
