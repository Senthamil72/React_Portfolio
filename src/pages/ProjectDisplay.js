import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img alt="" src={project.image} style={{ width: "500px" }} />
      <p>
        Skills:<b>{project.skills}</b>
      </p>
      <a
        href="https://github.com/Senthamil72/React_Project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
export default ProjectDisplay;
