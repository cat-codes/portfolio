import React from "react";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h3>projects</h3>
      <div className="grid">
        <a
          className="grid-container"
          href="https://65cb7c78e4850a0007cb9410--elaborate-travesseiro-803688.netlify.app/"
        >
          <img src="img/project-countries.png" />
          <h5>COUNTRIES WEBSITE</h5>
          <p>HTML CSS JAVASCRIPT REACTJS GITHUB</p>
          <div className="links">
            <button>
              VIEW PROJECT
              <div className="underline-expand" />
            </button>
            <button>
              VIEW CODE
              <div className="underline-expand" />
            </button>
          </div>
        </a>
        <a
          className="grid-container"
          href="https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/"
        >
          <img src="img/project-ecommerce.jpg" />
          <h5>E-COMMERCE WEBSITE</h5>
          <p>HTML SCSS JAVASCRIPT REACTJS GITHUB FRAMERMOTION</p>
          <div className="links">
            <button>
              VIEW PROJECT
              <div className="underline-expand" />
            </button>
            <button>
              VIEW CODE
              <div className="underline-expand" />
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
