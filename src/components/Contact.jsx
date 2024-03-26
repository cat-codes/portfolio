import React, { useState } from "react";
import "./Contact.scss";
import { motion, AnimatePresence } from "framer-motion";
import Phone from "../../public/svg/Phone";
import Email from "../../public/svg/Email";
import Github from "../../public/svg/Github";
import Linkedin from "../../public/svg/Linkedin";

const Contact = React.forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  // Stores message content
  const [message, setMessage] = useState("");

  // Handles textarea input change and resizes the textarea
  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
    resizeTextarea();
  };

  // Resizes the textarea vertically based on its content
  const resizeTextarea = () => {
    const textarea = document.getElementById("message");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <section className="contact" ref={ref}>
      <h3>contact</h3>
      <div className="contact-contents">
        <ul>
          <section id="ul-txt">
            Let&apos;s get in touch! To connect with me you can reach out
            through social platforms, through my personal contacts provided
            below, or simply by sending a message directly.
          </section>
          <li>
            <a
              href="tel:+4917665159155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone />
              +49 176 65159155
            </a>
          </li>
          <li>
            <a
              href="mailto:milda.singh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email />
              milda.singh@gmail.com
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
        <form>
          <input id="name" placeholder="Name" />
          <input id="email" placeholder="Email" />
          <textarea
            id="message"
            placeholder="Message"
            value={message}
            onChange={handleTextareaChange}
          />
          <AnimatePresence>
            <motion.button
              type="button"
              style={{
                color: "white",
                fontFamily: "inherit",
                fontWeight: 700,
                padding: "0.5em 2em",
                width: "10em",
                cursor: "pointer",
                border: "none",
                position: "relative",
                overflow: "hidden",
                background: "rgb(1, 2, 3)",
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: isHovered ? "0" : "90%",
                  background: "rgb(255, 43, 78)",
                  transition: "top 0.3s ease-out",
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>Send</span>
            </motion.button>
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
