import { motion  } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react"; 


/*
	This component is the theme button, it allows the user to switch between light and dark mode.
	I am using next/themes to handle the theme switches. 
*/

export function DarkModeButton(){
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	
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
    	<div className={clsx("flex items-center rounded-full w-14 h-7 border-2 p-0.5 mr-10 cursor-pointer",theme === "dark" ? "justify-end bg-gray-900" : "justify-start bg-slate-100")} onClick={toggleDarkMode}>
      		<motion.div className="bg-white size-5 rounded-full" layout transition={spring} />
    	</div>
  );
}

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30
};
