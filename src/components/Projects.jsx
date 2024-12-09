import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Travel Agent App", description: "AI-powered travel booking application." },
    { name: "Crypto Dashboard", description: "Real-time cryptocurrency tracker with React." },
    { name: "Santa Claus E-Commerce", description: "Whimsical store for Christmas crafts." },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
