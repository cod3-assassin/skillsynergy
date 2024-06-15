// src/components/DemoValues.jsx
import React from "react";

const demoValues = {
  name: "Jane Doe",
  email: "janedoe@example.com",
  jobRole: "Software Engineer",
  jobDescription:
    "Passionate software engineer with 3 years of experience in web development, specializing in React and Node.js. Proven ability to design, develop, and deploy web applications that meet user needs and business objectives.",
  academicDetails:
    "Bachelor of Science in Computer Science from XYZ University, Graduated in 2020.",
  technicalSkills:
    "JavaScript\nReact\nNode.js\nExpress.js\nMongoDB\nHTML & CSS\nGit & GitHub",
  projects: JSON.stringify(
    [
      {
        title: "Project A",
        duration: "Jan 2021 - Dec 2021",
        description:
          "Developed a full-stack web application for task management.",
        responsibilities: [
          "Designed the front-end using React.",
          "Implemented RESTful APIs with Node.js and Express.",
          "Integrated MongoDB for database management.",
          "Deployed the application on Heroku.",
        ],
      },
      {
        title: "Project B",
        duration: "Jan 2022 - Present",
        description:
          "Led a team of developers to create an e-commerce platform.",
        responsibilities: [
          "Architected the application using microservices.",
          "Developed reusable components in React.",
          "Set up CI/CD pipelines using GitHub Actions.",
          "Collaborated with UX designers to enhance user experience.",
        ],
      },
    ],
    null,
    2
  ),
  achievements:
    "Received Employee of the Month award at XYZ Company in May 2022.\nCompleted a certification in Advanced JavaScript from ABC Institute.",
  personalDetails:
    "Date of Birth: Jan 1, 1995. Address: 123 Main St, Anytown, USA. Phone: (123) 456-7890.",
  additionalDetails:
    "Fluent in English and Spanish. Enjoys contributing to open source projects and participating in hackathons.",
  coreCompetencies:
    "Web Development\nReact\nNode.js\nExpress.js\nMongoDB\nUI/UX Design\nRESTful APIs\nGit & GitHub",

  summary:
    "o A full stack developer with high problem-solving skills and develops complex projects.o I have proficiency in IoT Devices and built projects which can be used by a widespread of people. o Developed a highly scalable attendance system which is used regularly in our college. o Working professionals achieved Posture improvement with help of my Smart Chair. o Identified the visual inaccuracies in the existing college website and improved the UI. o Possesses in-depth knowledge of multiple technology stacks which in turn contributes to an efficient development stage of products.",

  profileSummary:
    " A full stack developer with high problem-solving skills and develops complex projects",
};

const DemoValues = ({
  setName,
  setEmail,
  setJobRole,
  setProfileSummary,
  setJobDescription,
  setAcademicDetails,
  setTechnicalSkills,
  setProjects,
  setAchievements,
  setPersonalDetails,
  setAdditionalDetails,
  setCoreCompetencies,
  setSummary,
}) => {
  const handleFillForm = () => {
    setName(demoValues.name);
    setEmail(demoValues.email);
    setJobRole(demoValues.jobRole);
    setJobDescription(demoValues.jobDescription);
    setAcademicDetails(demoValues.academicDetails);
    setTechnicalSkills(demoValues.technicalSkills);
    setProjects(demoValues.projects);
    setAchievements(demoValues.achievements);
    setPersonalDetails(demoValues.personalDetails);
    setAdditionalDetails(demoValues.additionalDetails);
    setCoreCompetencies(demoValues.coreCompetencies); // Added to set core competencies
    setSummary(demoValues.summary);
    setProfileSummary(demoValues.profileSummary);
  };

  return (
    <button
      type="button"
      className="w-full px-3 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
      onClick={handleFillForm}
    >
      Fill with Demo Values
    </button>
  );
};

export default DemoValues;
