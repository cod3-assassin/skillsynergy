import React from "react";

const demoValues = {
  name: "Jane Doe",
  email: "janedoe@example.com",
  phone: "1234567889",
  jobRole: "Software Engineer",
  jobDescription:
    "Passionate software engineer with 3 years of experience in web development, specializing in React and Node.js. Proven ability to design, develop, and deploy web applications that meet user needs and business objectives.",
  academicDetails:
    "Bachelor of Science in Computer Science from XYZ University, Graduated in 2020.",
  technicalSkills:
    "JavaScript\nReact\nNode.js\nExpress.js\nMongoDB\nHTML & CSS\nGit & GitHub",
  projects: [
    {
      title: "Project One",
      description: "A web application for managing tasks.",
      duration: "Jan 2020 - Dec 2020",
      responsibilities: "Developed front-end using React.",
      sourceCode: "https://github.com/johndoe/project-one",
      liveLink: "https://project-one.johndoe.com",
    },
    {
      title: "Project Two",
      description: "A mobile app for tracking fitness activities.",
      duration: "Jan 2021 - Dec 2021",
      responsibilities: "Developed back-end using Node.js.",
      sourceCode: "https://github.com/johndoe/project-two",
      liveLink: "https://project-two.johndoe.com",
    },
    {
      title: "Project Three",
      description: "An e-commerce platform for selling products online.",
      duration: "Jan 2022 - Dec 2022",
      responsibilities: "Implemented full-stack features and integrations.",
      sourceCode: "https://github.com/johndoe/project-three",
      liveLink: "https://project-three.johndoe.com",
    },
  ],
  achievements:
    "Received Employee of the Month award at XYZ Company in May 2022.\nCompleted a certification in Advanced JavaScript from ABC Institute.",
  personalDetails:
    "Date of Birth: Jan 1, 1995.\nAddress: 123 Main St, Anytown, USA.\nPhone: (123) 456-7890.",
  additionalDetails:
    "Fluent in English and Spanish. Enjoys contributing to open source projects and participating in hackathons.",
  coreCompetencies:
    "Web Development\nReact\nNode.js\nExpress.js\nMongoDB\nUI/UX Design\nRESTful APIs\nGit & GitHub",
  summary:
    "A full stack developer with high problem-solving skills and the ability to develop complex projects. Proficient in IoT Devices with projects beneficial to a wide audience. Developed a highly scalable attendance system used regularly in college. Created a Smart Chair that improved posture for working professionals. Enhanced the UI of the college website by identifying and correcting visual inaccuracies. In-depth knowledge of multiple technology stacks contributing to efficient product development.",
  profileSummary:
    "A full stack developer with high problem-solving skills and the ability to develop complex projects.",
  linkedin: "https://linkedin.com/in/janedoe",
  github: "https://github.com/janedoe",
  portfolio: "https://janedoe.com",
};

const DemoValues = ({
  setName,
  setEmail,
  setPhone,
  setJobRole,
  setJobDescription,
  setProfileSummary,
  setAdditionalDetails,
  setAcademicDetails,
  setTechnicalSkills,
  setLinkedin,
  setGithub,
  setPortfolio,
  setProjects,
  setAchievements,
  setPersonalDetails,
  setCoreCompetencies,
  setSummary,
}) => {
  const handleFillForm = () => {
    setName(demoValues.name);
    setEmail(demoValues.email);
    setPhone(demoValues.phone);
    setJobRole(demoValues.jobRole);
    setJobDescription(demoValues.jobDescription);
    setProfileSummary(demoValues.profileSummary);
    setAdditionalDetails(demoValues.additionalDetails);
    setAcademicDetails(demoValues.academicDetails);
    setTechnicalSkills(demoValues.technicalSkills);
    setLinkedin(demoValues.linkedin);
    setGithub(demoValues.github);
    setPortfolio(demoValues.portfolio);
    setProjects(demoValues.projects);
    setAchievements(demoValues.achievements);
    setPersonalDetails(demoValues.personalDetails);
    setCoreCompetencies(demoValues.coreCompetencies);
    setSummary(demoValues.summary);
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
