import Link from "next/link";
import AboutMe from "./components/about_me";
import ContactFooter from "./components/contactFooter";

export default function Home() {
  return (
    <div className="bg-white">
      <header>
        <div className="fixed top-0 left-0 flex justify-between items-center w-full p-1 shadow-md"> 
          <Link href="/" className="text-orange-600 hover:bg-orange-500 hover:rounded-full hover:text-white text-sm p-2 rounded">
            Galo Berlini
          </Link>
          <Link href="/" className="text-orange-600  hover:bg-orange-500 hover:text-white hover:rounded-full p-2 text-sm rounded mr-10">
            Contact Me
          </Link>
        </div>
      </header>
      <div className="mt-16">
          {/* Hero */}
      </div>
      <AboutMe/>
      <ContactFooter/>
    </div>
  );
}
