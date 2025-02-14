import Link from "next/link";
import { DarkModeButton } from "../themeButton";

export default function Header(){
    return (
        <header>
        <nav className="fixed top-0 left-0 h-12 bg-bg z-50 flex justify-between items-center w-full p-1 shadow-xl"> 
          <Link href="#start" className="text-text hover:bg-primary hover:rounded-full hover:text-bg text-sm p-2 ml-3 rounded">
            Galo Berlini
          </Link>
          <div className="flex justify-center items-center gap-5">
            <Link href="#about_me" className="text-text  hover:bg-primary hover:text-bg hover:rounded-full p-2 text-sm rounded">
              About Me  
            </Link>
            <Link href="#skills" className="text-text  hover:bg-primary hover:text-bg hover:rounded-full p-2 text-sm rounded">
              Skills
            </Link>
            <Link href="#contact_footer" className="text-text  hover:bg-primary hover:text-bg hover:rounded-full p-2 text-sm rounded">
              Contact Me
            </Link>
            <DarkModeButton/>
          </div>
        </nav>
      </header>
    )
}