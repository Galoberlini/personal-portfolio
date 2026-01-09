import Header from "./components/Header";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import Experience from "./components/Experience";
import WebSites from "./components/WebSites";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function V2Page() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Methodology />
                <Experience />
                <WebSites />
                <TechStack />
            </main>
            <Footer />
        </>
    )
}
