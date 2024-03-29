import "./Projects.scss";
import ProjectsGridPiece from "./ProjectsGridPiece";

const Projects = () => {
  return (
    <div className="projects">
      <h3>projects</h3>
      <div className="grid">
        <ProjectsGridPiece
          hrefProject={
            "https://65cb7c78e4850a0007cb9410--elaborate-travesseiro-803688.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/countries"}
          imgLnk={"project-countries.png"}
          title={"COUNTRIES WEBSITE"}
          subject={"Front End Web Development"}
          description={"[Project Description]"}
        />
        <ProjectsGridPiece
          hrefProject={
            "https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/ecommerce-project"}
          imgLnk={"project-ecommerce.png"}
          title={"E-COMMERCE WEBSITE"}
          subject={"Front End Web Development"}
          description={"[Project Description]"}
        />
        <ProjectsGridPiece
          hrefProject={"https://fastidious-daifuku-a70445.netlify.app/"}
          hrefCode={"https://github.com/cat-codes/todo-list"}
          imgLnk={"project-todo.png"}
          title={"TO-DO APP"}
          subject={"Front End Web Development"}
          description={"[Project Description]"}
        />
        <ProjectsGridPiece
          hrefProject={
            "https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/youtube-homepage-replica"}
          imgLnk={"project-youtube-homepage.png"}
          title={"YOUTUBE HOMEPAGE"}
          subject={"Front End Web Development"}
          description={"[Project Description]"}
        />
      </div>
    </div>
  );
};

export default Projects;
