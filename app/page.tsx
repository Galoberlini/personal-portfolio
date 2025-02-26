'use client'; 

import Header from "./components/pageSections/header/header";
import AboutMe from "./components/pageSections/aboutMe/about_me";
import ContactFooter from "./components/pageSections/contact/contactFooter";
// import Hero from "./components/pageSections/hero";
import { SecondHero } from "./components/pageSections/hero";
import Skills from "./components/pageSections/skills/skills";
import { useEffect } from "react";
import Projects from "./components/pageSections/projects/projects";


export default function Home() {
  
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.body.setAttribute("data-theme", selectedTheme);
    }
  }, []); 

  return (
    <>
      <Header/>
      <SecondHero/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <ContactFooter/>
    </>
  );
}
