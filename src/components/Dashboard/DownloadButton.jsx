import React from "react";
import html2pdf from "html2pdf.js";

const DownloadButton = () => {
  const handleDownload = async () => {
    const resumeElement = document.getElementById("resume-content");

    if (!resumeElement) {
      console.error("Resume content element not found");
      return;
    }

    try {
      // Get the height of the resume content
      const contentHeight = resumeElement.offsetHeight;

      // Use html2pdf to convert the resume element to PDF
      const opt = {
        margin: 0,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: {
          unit: "px",
          format: [resumeElement.offsetWidth, contentHeight],
          orientation: "portrait",
        },
      };

      html2pdf().from(resumeElement).set(opt).save();
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
