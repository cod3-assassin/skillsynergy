import React from "react";
import { useLocation } from "react-router-dom";

const ResumeGenerator = () => {
  const location = useLocation();
  const {
    name,
    email,
    phone,
    linkedin,
    github,
    jobRole,
    objective,
    profileSummary,
    academicDetails,
    technicalSkills,
    coreCompetencies,
    projects,
    achievements,
    personalDetails,
  } = location.state || {};

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

  const safeCoreCompetencies = Array.isArray(coreCompetencies)
    ? coreCompetencies
    : [];
  const safeTechnicalSkills = Array.isArray(technicalSkills)
    ? technicalSkills
    : [];

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-3xl transform scale-90 md:scale-100">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start justify-between mb-4">
          <div className="flex flex-col items-start md:items-center">
            <h1 className="text-lg md:text-2xl mb-0 text-blue-700">{name}</h1>
            <p className="text-sm md:text-base text-blue-700">{jobRole}</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <a
              href={linkedin}
              className="text-blue-700 no-underline hover:underline text-xs md:text-sm ml-auto"
            >
              LinkedIn
            </a>
            <a
              href={github}
              className="text-blue-700 no-underline hover:underline text-xs md:text-sm ml-2 md:ml-4"
            >
              GitHub
            </a>
          </div>
        </header>
        <hr className="my-8 border-t-2 border-gray-300" />
        {/* Contact Information and Profile Summary */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Information */}
          <div className="md:flex-1 mb-4 md:mb-0">
            <section>
              <h2 className="text-lg font-bold mb-2">Contact Information</h2>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
                <li>
                  Portfolio: <a href="#">Your Portfolio Link</a>
                </li>
              </ul>
            </section>
          </div>

          {/* Profile Summary */}
          <div className="md:flex-1 md:ml-4">
            <section>
              <h2 className="text-lg font-bold mb-2">Profile Summary</h2>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>
                  A full stack developer with high problem-solving skills and
                  develops complex projects.
                </li>
                <li>
                  I have proficiency in IoT Devices and built projects which can
                  be used by a widespread of people.
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <section className="mb-4">
              <h2 className="text-lg font-bold mb-2">Academic Details</h2>
              <p className="text-xs md:text-sm">{academicDetails}</p>
            </section>

            <section className="mb-4">
              <h2 className="text-lg font-bold mb-2">Soft Skills</h2>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Analytical</li>
                <li>Collaborator</li>
                <li>Leader</li>
                <li>Adaptable</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="text-lg font-bold mb-2">Technical Skills</h2>
              <p className="text-xs md:text-sm">
                {safeTechnicalSkills.join(", ")}
              </p>
            </section>

            <section className="mb-4">
              <h2 className="text-lg font-bold mb-2">Core Competencies</h2>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                {safeCoreCompetencies.map((competency, index) => (
                  <li key={index}>{competency}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2">Personal Details</h2>
              <p className="text-xs md:text-sm">{personalDetails}</p>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <section className="mb-4">
              <h2 className="text-lg font-bold mb-2">Academic Projects</h2>
              {parsedProjects.length > 0 ? (
                parsedProjects.map((project, index) => (
                  <div key={index} className="mb-2">
                    <h3 className="text-md font-bold mb-1">{project.title}</h3>
                    <p className="italic text-xs md:text-sm">
                      {project.duration}
                    </p>
                    <p className="text-xs md:text-sm">{project.description}</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                      {project.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                    {project.sourceCode && (
                      <p className="text-xs md:text-sm">
                        Source Code: {project.sourceCode}
                      </p>
                    )}
                    {project.liveLink && (
                      <p className="text-xs md:text-sm">
                        Live Link: {project.liveLink}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-xs md:text-sm">No projects found.</p>
              )}
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2">Academic Achievements</h2>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                {achievements &&
                  achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeGenerator;
