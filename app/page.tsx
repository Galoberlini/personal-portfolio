'use client'; 

import Header from "./components/pageSections/header";
import AboutMe from "./components/pageSections/about_me";
import ContactFooter from "./components/pageSections/contactFooter";
import Hero from "./components/pageSections/hero";
import { useEffect } from "react";


export default function Home() {
  
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.body.setAttribute("data-theme", selectedTheme);
    }
  }, []); 

  return (
    <div id="start">
      <Header/>
      <Hero/>
      <AboutMe/>
      <ContactFooter/>
    </div>
  );
}
