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
  projects: JSON.stringify([
    {
      title: "Task Manager App",
      duration: "Jan 2021 - Dec 2021",
      description:
        "Developed a full-stack web application for task management  application for task management Designed the front-end using React..",
      responsibilities:
        "Designed the front-end using React. Implemented RESTful APIs with Node.js and Express. Integrated MongoDB for database management. Deployed the application on Heroku.",
      sourceCode: "https://github.com/janedoe/task-manager",
      liveLink: "https://task-manager.janedoe.com",
    },
    {
      title: "E-commerce Platform",
      duration: "Jan 2022 - Present",
      description:
        "Led a team of developers to create an e-commerce platform.\nLed a team of developers to create an e-commerce platform.\nLed a team of developers to create an e-commerce platform.",
      responsibilities:
        "Architected the application using microservices. Developed reusable components in React. Set up CI/CD pipelines using GitHub Actions. Collaborated with UX designers to enhance user experience.",
      sourceCode: "https://github.com/janedoe/e-commerce",
      liveLink: "https://ecommerce.janedoe.com",
    },
    {
      title: "E-commerce Platform",
      duration: "Jan 2022 - Present",
      description:
        "Led a team of developers to create an e-commerce platform.\nLed a team of developers to create an e-commerce platform.\nLed a team of developers to create an e-commerce platform.",
      responsibilities:
        "Architected the application using microservices. Developed reusable components in React. Set up CI/CD pipelines using GitHub Actions. Collaborated with UX designers to enhance user experience.",
      sourceCode: "https://github.com/janedoe/e-commerce",
      liveLink: "https://ecommerce.janedoe.com",
    },
  ]),
  achievements:
    "Received Employee of the Month award at XYZ Company in May 2022.\nCompleted a certification in Advanced JavaScript from ABC Institute.",
  personalDetails:
    "Date of Birth: Jan 1, 1995. Address: 123 Main St, Anytown, USA. Phone: (123) 456-7890.",
  additionalDetails:
    "Fluent in English and Spanish. Enjoys contributing to open source projects and participating in hackathons.",
  coreCompetencies:
    "Web Development\nReact\nNode.js\nExpress.js\nMongoDB\nUI/UX Design\nRESTful APIs\nGit & GitHub",
  summary:
    "A full stack developer with high problem-solving skills and the ability to develop complex projects. Proficient in IoT Devices with projects beneficial to a wide audience. Developed a highly scalable attendance system used regularly in college. Created a Smart Chair that improved posture for working professionals. Enhanced the UI of the college website by identifying and correcting visual inaccuracies. In-depth knowledge of multiple technology stacks contributing to efficient product development.",
  profileSummary:
    "A full stack developer with high problem-solving skills and the ability to develop complex projects.A full stack developer with high problem-solving skills and the ability to develop complex projects.",
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
  setPhone,
}) => {
  const handleFillForm = () => {
    setName(demoValues.name);
    setEmail(demoValues.email);
    setJobRole(demoValues.jobRole);
    setJobDescription(demoValues.jobDescription);
    setAcademicDetails(demoValues.academicDetails);
    setTechnicalSkills(demoValues.technicalSkills);
    setProjects(JSON.parse(demoValues.projects));
    setAchievements(demoValues.achievements);
    setPersonalDetails(demoValues.personalDetails);
    setAdditionalDetails(demoValues.additionalDetails);
    setCoreCompetencies(demoValues.coreCompetencies);
    setSummary(demoValues.summary);
    setProfileSummary(demoValues.profileSummary);
    setPhone(demoValues.phone);
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
