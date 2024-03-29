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
    <a className="grid-piece" href={hrefProject}>
      <div className="image-container">
        <img src={`img/${imgLnk}`} alt="Project Image" />
        <div className="description">{description}</div>
      </div>
      <div>
        <h5>{title}</h5>
        <p>{subject}</p>
      </div>
      <div className="links">
        <button href={hrefProject}>
          VIEW PROJECT
          <div className="underline-expand" />
        </button>
        <button href={hrefCode}>
          VIEW CODE
          <div className="underline-expand" />
        </button>
      </div>
    </a>
  );
};

export default ProjectsGridPiece;
