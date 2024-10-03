import "./Projects.scss";
import ProjectsGridPiece from "./ProjectsGridPiece";

const Projects = () => {
  return (
    <div className="projects">
      <h3>projects</h3>
      <div className="grid">
        <ProjectsGridPiece
          hrefProject={
            "https://66fd8c892b75560008fe070b--sprightly-sunflower-f7d327.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/ecommerce-project"}
          imgLnk={"project-ecommerce.png"}
          title={"E-COMMERCE WEBSITE"}
          subject={"Front End Web Development"}
          description={
            "In this project I created a multi-page e-commerce website for sound electronics. The website includes all functionalities from back and forth navigation between pages, adding to cart, adjusting item quantity, to filling in personal details, checking their correctness, and checking out with the order. The website is fully responsive."
          }
        />
        <ProjectsGridPiece
          hrefProject={
            "https://66e6eae677581200080bba4a--elaborate-travesseiro-803688.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/countries"}
          imgLnk={"project-countries.png"}
          title={"COUNTRIES WEBSITE"}
          subject={"Front End Web Development"}
          description={
            "This website uses API to retrieve data about world's countries in a simple one-page grid. The countries can be sorted by region or be searched in the search bar. The website is fully responsive and has adjustable light and dark modes."
          }
        />
        <ProjectsGridPiece
          hrefProject={
            "https://66c2567e9c468f00087de099--praepositionen.netlify.app/"
          }
          hrefCode={"https://github.com/cat-codes/prepositions"}
          imgLnk={"project-prepositions.png"}
          title={"PREPOSITIONS LEARNING WEBSITE"}
          subject={"Front End Web Development"}
          description={
            "I created this website to help my friend to practice German prepositions in combination with the right werbs for his C1 German language exam. The website includes both the list of most of the German verb-preposition combnations with usage examples as well as a test option where users can select the level of language for which they want to test their preposition knowledge."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
