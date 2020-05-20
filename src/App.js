import React from "react";
import Projects from "./Projects";
import Names from "./DataTest";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Project Ideas</h1>
      <p>A list of projects I'd like to build in React</p>
      <Projects />
      <Names />
    </div>
  );
}
