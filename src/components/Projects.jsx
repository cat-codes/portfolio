import React from "react";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h3>projects</h3>
      <div className="projects-grid">
        <a
          className="projects-grid-piece"
          href="https://65cb7c78e4850a0007cb9410--elaborate-travesseiro-803688.netlify.app/"
        >
          <img id="project" src="img/project-countries.png" />
          <h5>COUNTRIES WEBSITE</h5>
          <p className="projects-grid-piece-skills">
            HTML CSS JAVASCRIPT REACTJS GITHUB
          </p>
        </a>
        <a
          className="projects-grid-piece"
          href="https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/"
        >
          <img id="project" src="img/project-ecommerce.jpg" />
          <h5>E-COMMERCE WEBSITE</h5>
          <p className="projects-grid-piece-skills">
            HTML SCSS JAVASCRIPT REACTJS GITHUB FRAMERMOTION
          </p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
