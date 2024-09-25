import "../../App.css";
import AboutSection from "./AboutSection/AboutSection";
import Header from "../Header/Header";


function About() {
  return (
    <>
      <main>
        <Header way={"/about"} />
        <AboutSection/>
      </main>
    </>
  );
}

export default About;
