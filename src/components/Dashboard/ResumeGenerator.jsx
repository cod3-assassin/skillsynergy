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
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl"
        style={{ maxWidth: "850px" }}
      >
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-blue-700">{name}</h1>
            <p className="text-base text-blue-700">{jobRole}</p>
          </div>
          <div className="flex space-x-4">
            <a
              href={linkedin}
              className="text-blue-700 no-underline hover:underline text-sm"
            >
              LinkedIn
            </a>
            <a
              href={github}
              className="text-blue-700 no-underline hover:underline text-sm"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Objective */}
        <section className="mb-6">
          <p className="text-base">
            Targeting Full Stack Developer roles with an organization of high
            repute with a scope of improving knowledge and further career
            growth.
          </p>
        </section>

        <hr className="my-6 border-t-2 border-gray-300" />
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Profile Summary</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              A full stack developer with high problem-solving skills and
              develops complex projects.
            </li>
            <li>
              Proficient in IoT Devices and built projects for widespread use.
            </li>
          </ul>
        </div>

        {/* Contact Information and Academic Details */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="md:flex-1 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Contact Information</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              <li>
                Portfolio: <a href="#">Your Portfolio Link</a>
              </li>
            </ul>
          </div>
          <div className="md:flex-1 md:ml-4">
            <h2 className="text-lg font-bold mb-2">Academic Details</h2>
            <p className="text-sm">{academicDetails}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2">Technical Skills</h2>
              <div className="text-sm">
                <h3 className="font-semibold">Frontend Development:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>React.js (including Redux)</li>
                  <li>HTML5, CSS (Bootstrap, Tailwind)</li>
                  <li>JavaScript (ES6+)</li>
                  <li>GSAP (Animation)</li>
                  <li>Responsive Design</li>
                </ul>

                <h3 className="font-semibold mt-4">Backend Development:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Node.js, Express.js</li>
                  <li>MongoDB (NoSQL)</li>
                </ul>

                <h3 className="font-semibold mt-4">Authentication:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>JSON Web Tokens (JWT)</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2">Core Competencies</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {safeCoreCompetencies.map((competency, index) => (
                  <li key={index}>{competency}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2">Personal Details</h2>
              <p className="text-sm">{personalDetails}</p>
            </section>
          </div>

          <div className="md:w-1/2 md:ml-0" style={{ marginLeft: "-40px" }}>
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2">Academic Projects</h2>
              {parsedProjects.length > 0 ? (
                parsedProjects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-md font-bold">{project.title}</h3>
                    <p className="italic text-sm">{project.duration}</p>
                    <p className="text-sm">{project.description}</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {project.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                    {project.sourceCode && (
                      <p className="text-sm">
                        Source Code: {project.sourceCode}
                      </p>
                    )}
                    {project.liveLink && (
                      <p className="text-sm">Live Link: {project.liveLink}</p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm">No projects found.</p>
              )}
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2">Academic Achievements</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {achievements &&
                  achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-200">
        Download Resume
      </button>
    </div>
  );
};

export default ResumeGenerator;
