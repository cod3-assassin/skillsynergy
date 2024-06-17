import React from "react";
import { useLocation } from "react-router-dom";
import DownloadButton from "./DownloadButton";

const ResumeGenerator = () => {
  const location = useLocation();
  const resumeData = location.state || {};
  const {
    name,
    summary,
    email,
    phone,
    linkedin,
    github,
    jobRole,
    profileSummary,
    academicDetails,
    technicalSkills,
    coreCompetencies,
    projects,
    achievements,
    personalDetails,
  } = resumeData;

  // Parse projects JSON string
  let parsedProjects = [];
  if (typeof projects === "string" && projects.trim() !== "") {
    try {
      parsedProjects = JSON.parse(projects);
      if (!Array.isArray(parsedProjects)) {
        parsedProjects = [];
      }
    } catch (error) {
      console.error("Error parsing projects JSON:", error);
      parsedProjects = [];
    }
  }

  // Ensure core competencies and technical skills are arrays
  const safeCoreCompetencies = Array.isArray(coreCompetencies)
    ? coreCompetencies
    : [];
  const safeTechnicalSkills = Array.isArray(technicalSkills)
    ? technicalSkills
    : [];

  return (
    <div className="bg-gray-100 min-h-screen py-4 flex items-center justify-center">
      <div className="w-full md:max-w-screen-lg">
        {/* Resume Content */}
        <div id="resume-content" className="bg-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <header className="flex flex-col md:flex-row items-start justify-between mb-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-blue-700">{name}</h1>
              <p className="text-base text-blue-700">{jobRole}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={linkedin}
                className="text-blue-700 no-underline hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={github}
                className="text-blue-700 no-underline hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </header>

          {/* Objective */}
          <section className="mb-6">
            <p className="text-base">{profileSummary}</p>
          </section>

          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Profile Summary</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>{summary}</li>
            </ul>
          </div>

          {/* Contact Information and Academic Details */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="md:flex-1 mb-4 md:mb-0">
              <h2 className="text-lg font-bold mb-2">Contact Information</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
              </ul>
            </div>
            <div className="md:flex-1 md:ml-4">
              <h2 className="text-lg font-bold mb-2">Academic Details</h2>
              <p className="text-sm">{academicDetails}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row mb-6">
            <div className="md:w-1/2 md:pr-8">
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-2">Technical Skills</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {safeTechnicalSkills.length > 0 ? (
                    safeTechnicalSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  ) : (
                    <li>No technical skills found.</li>
                  )}
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-lg font-bold mb-2">Core Competencies</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {safeCoreCompetencies.length > 0 ? (
                    safeCoreCompetencies.map((competency, index) => (
                      <li key={index}>{competency}</li>
                    ))
                  ) : (
                    <li>No core competencies found.</li>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2">Personal Details</h2>
                <p className="text-sm">{personalDetails}</p>
              </section>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-2">Academic Projects</h2>
                {parsedProjects.length > 0 ? (
                  parsedProjects.map((project, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-md font-bold">{project.title}</h3>
                      <p className="italic text-sm">{project.duration}</p>
                      <p className="text-sm">{project.description}</p>
                      {Array.isArray(project.responsibilities) && (
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {project.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      )}
                      {project.sourceCode && (
                        <p className="text-sm">
                          Source Code:{" "}
                          <a
                            href={project.sourceCode}
                            className="text-blue-700 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.sourceCode}
                          </a>
                        </p>
                      )}
                      {project.liveLink && (
                        <p className="text-sm">
                          Live Link:{" "}
                          <a
                            href={project.liveLink}
                            className="text-blue-700 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.liveLink}
                          </a>
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm">No projects found.</p>
                )}
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2">
                  Academic Achievements
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {achievements &&
                    achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                </ul>
              </section>
            </div>
          </div>

          <hr className="my-4 border-t-2 border-gray-300" />
        </div>

        {/* Download Button */}
        <div className="text-center mt-4">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator;
