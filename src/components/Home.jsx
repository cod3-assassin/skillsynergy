// src/components/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DemoValues from "./DemoValues";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [academicDetails, setAcademicDetails] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [achievements, setAchievements] = useState("");
  const [personalDetails, setPersonalDetails] = useState("");
  const [coreCompetencies, setCoreCompetencies] = useState("");
  const [summary, setSummary] = useState("");
  const [profileSummary, setProfileSummary] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse projects into an array
    const projectsArray = projects.trim() ? JSON.parse(projects) : [];

    // Stringify the projects array to send in the state object
    const projectsJsonString = JSON.stringify(projectsArray);

    navigate("/resume-generator", {
      state: {
        name,
        email,
        jobRole,
        jobDescription,
        profileSummary,
        additionalDetails,
        academicDetails,
        technicalSkills: technicalSkills.split("\n"),
        projects: projectsJsonString,
        achievements: achievements.split("\n"),
        personalDetails,
        coreCompetencies: coreCompetencies.split("\n"),
        summary,
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resume Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Role
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Academic Details
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={academicDetails}
            onChange={(e) => setAcademicDetails(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Technical Skills (Separate by new line)
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={technicalSkills}
            onChange={(e) => setTechnicalSkills(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Projects (Format: JSON Array)
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Achievements (Separate by new line)
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Personal Details
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={personalDetails}
            onChange={(e) => setPersonalDetails(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Details
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
          />
        </div>
        <DemoValues
          setName={setName}
          setEmail={setEmail}
          setJobRole={setJobRole}
          setJobDescription={setJobDescription}
          setAcademicDetails={setAcademicDetails}
          setTechnicalSkills={setTechnicalSkills}
          setProjects={setProjects}
          setAchievements={setAchievements}
          setPersonalDetails={setPersonalDetails}
          setAdditionalDetails={setAdditionalDetails}
          setCoreCompetencies={setCoreCompetencies}
          setSummary={setSummary}
          setProfileSummary={setProfileSummary}
        />
        <button
          type="submit"
          className="w-full px-3 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default Home;
