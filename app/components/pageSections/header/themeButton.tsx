import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme, } from "next-themes";
import { useState, useEffect } from "react"; 

/*
	This component is the theme button, it allows the user to switch between light and dark mode.
	I am using next/themes to handle the theme switches. 
*/

export function DarkModeButton(){
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, resolvedTheme } = useTheme()
	
	const toggleDarkMode = () => {
		if(theme === "light"){
			setTheme("dark")
		}
		else{
			setTheme("light")
		}
	}  

	useEffect(() => {
		setMounted(true)
	  }, [])
	
	  if (!mounted) {
		return null
	  }

  	return (
    	<button className={clsx("flex items-center rounded-full border-2 p-0.5 w-6 h-6 lg:mr-10 md:w-14 md:h-7 cursor-pointer",resolvedTheme === "dark" ? "justify-end bg-gray-900" : "justify-start bg-slate-100 ")}
		onClick={toggleDarkMode}>
      		<motion.div className="bg-slate-300 md:bg-white size-4 md:size-5 rounded-full" layout transition={spring} />
    	</button>
  );
}

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30
};
