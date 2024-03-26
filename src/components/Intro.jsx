import React from "react";
import "./Intro.scss";
import { motion } from "framer-motion";

const Intro = React.forwardRef(({ scrollToContact }, ref) => {
  return (
    <div ref={ref} className="intro">
      <div className="intro-text">
        <h2>
          Hi there, <br /> I&apos;m{" "}
          <section className="underline">Milda Singh</section>.
        </h2>
        <p>
          I&apos;m a React front end developer based in Munich, Germany. I love
          motion design, and my favorite part is enriching the websites with
          animated interactions.
        </p>
        <p id="contact" onClick={scrollToContact}>
          CONTACT ME
          <motion.div
            whileHover={{
              scaleX: [0, 1],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            style={{
              height: "3px",
              background: "rgb(255, 43, 78)",
              bottom: "0",
              left: "0",
              width: "100%",
              scaleX: "1",
              transformOrigin: "center",
            }}
          />
        </p>
      </div>
      <img id="dp" src="/img/dp.png" alt="Profile Picture" />
    </div>
  );
});

Intro.displayName = "Intro";

export default Intro;
