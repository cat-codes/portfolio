import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Phone from "../../public/svg/Phone";
import Email from "../../public/svg/Email";
import Github from "../../public/svg/Github";
import Linkedin from "../../public/svg/Linkedin";
import Copy from "../../public/svg/Copy";

const Contact = React.forwardRef((props, ref) => {
  const form = useRef();

  const [isSent, setIsSent] = useState(false);

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
          setIsSent(true);
          console.log("Message sent.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log("Sent status: ", isSent);

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
          <input name="user_name" placeholder="Name" type="text" required />
          <input name="user_email" placeholder="Email" type="email" required />
          <textarea name="message" placeholder="Message" required />
          <div
            className="send-confirm"
            style={{ justifyContent: isSent ? "space-between" : "flex-end" }}
          >
            {isSent && (
              <p className="message sent"> Thank You for your message!</p>
            )}
            <button type="submit" value="Send">
              <div className="underline-grow" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
