import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h3>projects</h3>
      <div className="grid">
        {/* countries */}
        <a
          className="grid-container"
          href="https://65cb7c78e4850a0007cb9410--elaborate-travesseiro-803688.netlify.app/"
        >
          <div className="image-container">
            <img src="img/project-countries.png" alt="Project Image" />
            <div className="overlay-text">Project Description </div>
          </div>
          <div>
            <h5>COUNTRIES WEBSITE</h5>
            <p>HTML CSS JAVASCRIPT REACTJS GITHUB</p>
          </div>
          <div className="links">
            <button href="https://65cb7c78e4850a0007cb9410--elaborate-travesseiro-803688.netlify.app/">
              VIEW PROJECT
              <div className="underline-expand" />
            </button>
            <button href="https://github.com/cat-codes/countries">
              VIEW CODE
              <div className="underline-expand" />
            </button>
          </div>
        </a>
        {/* audiophile */}
        <a
          className="grid-container"
          href="https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/"
        >
          <div className="image-container">
            <img src="img/project-ecommerce.png" alt="Project Image" />
            <div className="overlay-text">Project Description </div>
          </div>
          <div>
            <h5>E-COMMERCE WEBSITE</h5>
            <p>HTML SCSS JAVASCRIPT REACTJS GITHUB FRAMERMOTION</p>
          </div>
          <div className="links">
            <button href="https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/">
              VIEW PROJECT
              <div className="underline-expand" />
            </button>
            <button href="https://github.com/cat-codes/ecommerce-project">
              VIEW CODE
              <div className="underline-expand" />
            </button>
          </div>
        </a>
        {/* todo */}
        <a
          className="grid-container"
          href="https://fastidious-daifuku-a70445.netlify.app/"
        >
          <div className="image-container">
            <img src="img/todo.png" alt="Project Image" />
            <div className="overlay-text">Project Description </div>
          </div>
          <div>
            <h5>TO-DO APP</h5>
            <p>HTML SCSS JAVASCRIPT REACTJS GITHUB FRAMERMOTION</p>
          </div>
          <div className="links">
            <button href="https://fastidious-daifuku-a70445.netlify.app/">
              VIEW PROJECT
              <div className="underline-expand" />
            </button>
            <button href="https://github.com/cat-codes/todo-list">
              VIEW CODE
              <div className="underline-expand" />
            </button>
          </div>
        </a>
        {/* youtube */}
        <a
          className="grid-container"
          href="https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/"
        >
          <div className="image-container">
            <img src="img/youtube-replica.png" alt="Project Image" />
            <div className="overlay-text">Project Description </div>
          </div>
          <div>
            <h5>YOUTUBE HOMEPAGE</h5>
            <p>HTML CSS GITHUB</p>
          </div>
          <div className="links">
            <button href="">
              VIEW PROJECT
              <div className="underline-expand" />
            </button>
            <button href="https://github.com/cat-codes/youtube-homepage-replica">
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
