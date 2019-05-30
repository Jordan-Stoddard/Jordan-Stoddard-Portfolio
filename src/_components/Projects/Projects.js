import React from "react";
import StaticProjectGallery from "./StaticProjectGallery";

import { ProjectContainer } from "./Projects.style";

const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <h1>Projects.</h1>
      <p>
        Here are a few selections of my work as a web developer.
        <br /> You can view some of my other projects on{" "}
        <a
          href="https://github.com/Jordan-Stoddard"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        .
      </p>

      <StaticProjectGallery />
    </ProjectContainer>
  );
};

export { Projects };
