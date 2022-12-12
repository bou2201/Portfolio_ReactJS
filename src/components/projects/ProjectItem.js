import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectItem = (props) => {
  return (
    <div className="project-item">
      <div className="project-item-image">
        <img src={props.image} alt="project" />
      </div>
      <div className="project-item-content">
        <span className="content-num">Project {props.number}</span>
        <h2 className="content-title">{props.title}</h2>
        <p className="content-desc">{props.description}</p>
        <div className="content-tech">
          {props.technologies.map((tech) => (
            <span>{tech}</span>
          ))}
        </div>
        <div className="content-link">
          <a href={props.source} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer">
            <OpenInNewIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
