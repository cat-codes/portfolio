import "./Header.scss";
import Github from "../../public/svg/Github";
import Linkedin from "../../public/svg/Linkedin";
import Email from "../../public/svg/Email";
import Phone from "../../public/svg/Phone";

const Header = () => {
  const copyTextToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied: ", text);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="header">
      <div className="content">
        <h1>milda_singh</h1>
        <div className="icons">
          <div>
            <a
              href="https://github.com/cat-codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/milda-singh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>

          <div>
            <a onClick={() => copyTextToClipboard("milda.singh@gmail.com")}>
              <Email />
            </a>
          </div>

          <div>
            <a onClick={() => copyTextToClipboard("+49 176 65159155")}>
              <Phone />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
