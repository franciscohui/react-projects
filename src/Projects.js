import React from "react";
import "./styles.css";

const projectListData = [
  {
    title: "Project List 1.0",
    summary:
      "A static list of projects with titles, summaries, and a done state.",
    detail: "Commit to Github. Deploy site via Netlify. Populate via JSON"
  },
  {
    title: "Project List 1.1",
    summary: "Make it dynamic and interactive",
    detail:
      "Populate projects via Google Sheets or AirTable. Mark items as done. Add sorting and filtering."
  },
  {
    title: "Timer",
    summary: "Start, stop; pause, resume, and set time",
    detail: ""
  },
  {
    title: "Color Picker",
    summary:
      "Set primary color, toggle complementaries, add secondary, add saturation variations",
    detail: ""
  },
  {
    title: "Weather via API",
    summary: "Pull and display data from a weather API",
    detail: "Bonus: allow users to enter a new zip code to change the city"
  },
  {
    title: "Set up local dev environment",
    summary: "Build React apps locally",
    detail: ""
  }
];

export default function Projects() {
  return <ProjectList projectData={projectListData} />;
}

const ProjectList = myProps => {
  const rows = myProps.projectData.map((row, index) => {
    return (
      <div className="SingleProject" key={index}>
        <div className="ProjectTitle">{row.title}</div>
        <div className="ProjectSummary">{row.summary}</div>
        <div className="ProjectDetail">{row.detail}</div>
      </div>
    );
  });

  return <div>{rows}</div>;
};
