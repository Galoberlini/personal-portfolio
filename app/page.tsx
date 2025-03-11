import { Header, AboutMe, ContactFooter, Hero, Skills, Projects } from "./components/pageSections";

/* 
    I decided to structure the App component this way since it is very easy to understand 
    and works well as the website isn't complex.
*/

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
