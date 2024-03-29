import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Phone from "../../public/svg/Phone";
import Email from "../../public/svg/Email";
import Github from "../../public/svg/Github";
import Linkedin from "../../public/svg/Linkedin";
import Copy from "../../public/svg/Copy";

const Contact = React.forwardRef((props, ref) => {
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_to9ifyl", "template_b28uhlf", form.current, {
        publicKey: "yPfAjYlAxEUxeYt5A",
      })
      .then(
        () => {
          console.log("Message sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" ref={ref}>
      <h3>contact</h3>
      <div className="contact-contents">
        <ul>
          <p>
            Let&apos;s get in touch! To connect with me you can reach out
            through social platforms, through my personal contacts provided
            below, or simply by sending a message directly.
          </p>
          <li>
            <a onClick={() => copyTextToClipboard("+49 176 65159155")}>
              <Phone />
              <div className="highlight">
                +49 176 65159155
                <Copy />
              </div>
            </a>
          </li>
          <li>
            <a onClick={() => copyTextToClipboard("milda.singh@gmail.com")}>
              <Email />
              <div className="highlight">
                milda.singh@gmail.com
                <Copy />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cat-codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              https://github.com/cat-codes
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/milda-singh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
              https://www.linkedin.com/in/milda-singh/
            </a>
          </li>
        </ul>
        <form ref={form} onSubmit={sendEmail}>
          <input name="user_name" placeholder="Name" type="text" />
          <input name="user_email" placeholder="Email" type="email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit" value="Send">
            {" "}
            <div id="underline-grow" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
