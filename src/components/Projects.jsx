import "./Projects.scss";
import ProjectsGridPiece from "./ProjectsGridPiece";

const Projects = () => {
  return (
    <div className="projects">
      <h3>projects</h3>
      <div className="grid">
        <ProjectsGridPiece
          hrefProject={
            "https://660203d787f1d400086e9fdf--sprightly-sunflower-f7d327.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/ecommerce-project"}
          imgLnk={"project-ecommerce.png"}
          title={"E-COMMERCE WEBSITE"}
          subject={"Front End Web Development"}
          description={
            "Here I created a multi-page e-commerce website for sound electronics. The website includes all functionalities from back and forth navigation between pages, adding to cart, adjusting item quantity, to filling in personal details and checking out with the order. The website is fully responsive."
          }
        />
        <ProjectsGridPiece
          hrefProject={
            "https://65cb7c78e4850a0007cb9410--elaborate-travesseiro-803688.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/countries"}
          imgLnk={"project-countries.png"}
          title={"COUNTRIES WEBSITE"}
          subject={"Front End Web Development"}
          description={
            "In this website I used API to retrieve data about world's countries in a simple one-page grid. The countries can be sorted by region or be searched for in the search bar. The website is fully responsive and has adjustable light and dark modes."
          }
        />
        <ProjectsGridPiece
          hrefProject={"https://fastidious-daifuku-a70445.netlify.app/"}
          hrefCode={"https://github.com/cat-codes/todo-list"}
          imgLnk={"project-todo.png"}
          title={"TO-DO APP"}
          subject={"Front End Web Development"}
          description={
            "This simple website allows users to create a to-do list, sort it by clicking the sort button with unchecked tasks first, or simply by dragging and dropping the tasks in a desired order. The list retains the tasks even after the page has been reloaded, therefore users can come back right where they left off. The website is fully responsive and has adjustable light and dark modes."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
