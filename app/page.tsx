import Header from "./components/pageSections/header/header";
import AboutMe from "./components/pageSections/aboutMe/aboutMe";
import ContactFooter from "./components/pageSections/contact/contactFooter";
import { Hero } from "./components/pageSections/hero";
import Skills from "./components/pageSections/skills/skills";
import Projects from "./components/pageSections/projects/projects";


export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <ContactFooter/>
    </>
  );
}
