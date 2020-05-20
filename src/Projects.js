import React from "react";
import "./styles.css";

const SingleProject = myProps => (
  <div className="SingleProject">
    <div className="ProjectTitle">{myProps.title}</div>
    <div className="ProjectSummary">{myProps.summary}</div>
    <div className="ProjectDetail">{myProps.detail}</div>
  </div>
);

export default function Projects() {
  return (
    <div className="ProjectList">
      <SingleProject
        title="Project List"
        summary="A list of projects with titles, summaries, and a done state."
        detail="Bonus: Populate projects via Google Sheets or AirTable. second commit"
      />
      <SingleProject
        title="Timer"
        summary="Start, stop; pause, resume, and set time"
      />
      <SingleProject
        title="Color Picker"
        summary="Set primary color, toggle complementaries, add secondary, add saturation variations"
      />
    </div>
  );
}
