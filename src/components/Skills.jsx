import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="front">
        <h4>Front End Web Development</h4>
        <div className="back">
          HTML | (S)CSS | JavaScript | ReactJS | Git(Hub) | FramerMotion
        </div>
      </div>
      <div className="front">
        <h4>Software development</h4>
        <div className="back">Python | C++</div>
      </div>
      <div className="front">
        <h4>UX/UI Design</h4>
        <div className="back">
          Figma | Adobe XD | UX Research | Accessibility | Ideation |
          Wireframing | Prototyping{" "}
        </div>
      </div>
      <div className="front">
        <h4>Video Editing</h4>
        <div className="back">
          Adobe Premiere Pro | Adobe After Effects | Adobe Media Encoder |
          DaVinci Resolve
        </div>
      </div>
      <div className="front">
        <h4>Graphic Design</h4>
        <div className="back">
          Adobe Photoshop | Adobe Illustrator | Adobe InDesign | Adobe Lightroom
        </div>
      </div>
      <div className="front">
        <h4>Cloud Infrastructure</h4>
        <div className="back">AWS | Linux | MySQL | Terraform</div>
      </div>
      <div className="front">
        <h4>Containerization & Virtualization</h4>
        <div className="back">VM VirtualBox | Docker | Kubernetes</div>
      </div>
    </div>
  );
};

export default Skills;
