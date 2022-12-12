import { Container } from "@mui/material";
import React from "react";
import { projects } from "../../data";
import ProjectItem from "./ProjectItem";
import "./project.scss";

const Project = () => {
  return (
    <section id="project" className="project">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="section-title">
          <span>My</span> projects
        </h1>
        <div className="project-list">
          {projects &&
            projects.map((project, index) => (
              <ProjectItem
                key={index}
                image={project.image}
                number={index + 1}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                source={project.source}
                link={project.link || ""}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Project;
