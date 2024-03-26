import { useRef } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <Intro scrollToContact={scrollToContact} />
      <Skills />
      <Projects />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
