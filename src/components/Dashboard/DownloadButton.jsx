import React from "react";
import html2pdf from "html2pdf.js";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const resumeElement = document.getElementById("resume-content");

      if (!resumeElement) {
        console.error("Resume content element not found");
        return;
      }

      const options = {
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: {
          scale: 2,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          format: "a4",
          orientation: "portrait",
        },
      };

      html2pdf().from(resumeElement).set(options).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-200"
    >
      Download Resume as PDF
    </button>
  );
};

export default DownloadButton;
