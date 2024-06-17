import React from "react";
import { PDFDocument, rgb } from "pdf-lib";

const DownloadButton = ({ resumeData }) => {
  const handleDownload = async () => {
    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();

      const {
        name,
        jobRole,
        profileSummary,
        academicDetails,
        safeTechnicalSkills,
        safeCoreCompetencies,
        parsedProjects,
        achievements,
        personalDetails,
      } = resumeData;

      const content = `
        Name: ${name}
        Job Role: ${jobRole}

        Profile Summary:
        ${profileSummary}

        Academic Details:
        ${academicDetails}

        Technical Skills:
        ${safeTechnicalSkills.join(", ")}

        Core Competencies:
        ${safeCoreCompetencies.join(", ")}

        Projects:
        ${projects
          .map((project) => {
            const responsibilities = Array.isArray(project.responsibilities)
              ? project.responsibilities.join(", ")
              : "Responsibilities not provided";

            return `
    Title: ${project.title}
    Duration: ${project.duration}
    Description: ${project.description}
    Responsibilities: ${responsibilities}
    Source Code: ${project.sourceCode || "Not provided"}
    Live Link: ${project.liveLink || "Not provided"}
  `;
          })
          .join("\n\n")}

        Achievements:
        ${achievements.join(", ")}

        Personal Details:
        ${personalDetails}
      `;

      // Draw text on the PDF page
      page.drawText(content, {
        x: 50,
        y: page.getHeight() - 100,
        size: 12,
        color: rgb(0, 0, 0),
      });

      // Serialize the PDFDocument to bytes
      const pdfBytes = await pdfDoc.save();

      // Convert bytes to a blob URL
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      // Create an anchor tag and simulate click to download
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Release the URL object
      URL.revokeObjectURL(url);
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
