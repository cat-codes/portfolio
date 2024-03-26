import "./Header.scss";
import Github from "../../public/svg/Github";
import Linkedin from "../../public/svg/Linkedin";
import Email from "../../public/svg/Email";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>milda_singh</h1>
        <section className="header-content-icons">
          <a
            href="https://github.com/cat-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/milda-singh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:milda.singh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </a>
        </section>
      </div>
      <div className="header-border" />
    </div>
  );
};

export default Header;
