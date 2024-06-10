import React, { useState } from "react";

const JobUpload = () => {
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job description upload
    console.log("Job Description:", jobDescription);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Job Description</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4"
      >
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows="6"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default JobUpload;
