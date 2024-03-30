import React from "react";
import "./Intro.scss";

const Intro = React.forwardRef(({ scrollToContact }, ref) => {
  return (
    <div ref={ref} className="intro">
      <div className="intro-text">
        <h2>
          <section style={{ whiteSpace: "nowrap" }}>Hi there,</section>
          <section style={{ whiteSpace: "nowrap" }}>
            I&apos;m <span id="underline">Milda Singh</span>.
          </section>
        </h2>
        <p>
          I&apos;m a React front end developer based in Munich, Germany. I am
          especially interested in motion design, and my passions is seeing the
          websites I am working on come alive through animated interactions.
        </p>
        <button onClick={scrollToContact}>
          CONTACT ME
          <div className="underline-expand" />
        </button>
      </div>
      <div className="dp">
        <img src="/img/dp.png" alt="Profile Picture" />
      </div>
    </div>
  );
});

Intro.displayName = "Intro";

export default Intro;
