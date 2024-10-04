import React from "react";
import "./ProjectsGridPiece.scss";

const ProjectsGridPiece = ({
  hrefProject,
  hrefCode,
  imgLnk,
  title,
  subject,
  description,
}) => {
  return (
    <div className="grid-piece">
      <div className="image-container">
        <img src={`img/${imgLnk}`} alt="Project Image" />
        <div className="description">{description}</div>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{subject}</p>
      </div>
      <div className="links">
        <a href={hrefProject} target="_blank" rel="noopener noreferrer">
          <button>
            VIEW PROJECT
            <div className="underline-expand" />
          </button>
        </a>
        <a href={hrefCode} target="_blank" rel="noopener noreferrer">
          <button>
            VIEW CODE
            <div className="underline-expand" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsGridPiece;
