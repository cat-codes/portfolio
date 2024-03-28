import "./Footer.scss";
import Github from "../../public/svg/Github";
import Linkedin from "../../public/svg/Linkedin";
import Email from "../../public/svg/Email";
import Phone from "../../public/svg/Phone";

const Footer = () => {
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
    <div className="footer">
      <div className="content">
        <h1>milda_singh</h1>
        <div className="icons">
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
          <a onClick={() => copyTextToClipboard("milda.singh@gmail.com")}>
            <Email />
          </a>
          <a onClick={() => copyTextToClipboard("+49 176 65159155")}>
            <Phone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
