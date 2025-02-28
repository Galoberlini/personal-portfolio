'use client';

import { motion  } from "framer-motion";
import clsx from "clsx";
import { useEffect, useState } from "react";

/*
	This component is the theme button, it allows the user to switch between light and dark mode.
	The theme is saved in the local storage, so the user doesn't have to change the theme every time
	they visit the page.
*/

export function DarkModeButton(){
    
	const [darkMode, SetDarkMode] = useState(false)
	useEffect(() => {
		const selectedTheme = localStorage.getItem("theme");
		if(selectedTheme === "theme2"){
			SetDarkMode(true)
		}
	}, [])
  
	const toggleDarkMode = () => {
		if(darkMode){
			document.body.setAttribute("data-theme", "theme1");
			localStorage.setItem('theme', "theme1");
		}
		else{
			document.body.setAttribute("data-theme", "theme2");
			localStorage.setItem('theme', "theme2");
		}
		SetDarkMode(!darkMode);
	}
  
  
  	return (
    	<div className={clsx("flex items-center rounded-full w-14 h-7 border-2 p-0.5 mr-10 cursor-pointer",darkMode ? "justify-end bg-gray-900" : "justify-start bg-slate-100")} onClick={toggleDarkMode}>
      		<motion.div className="bg-white size-5 rounded-full" layout transition={spring} />
    	</div>
  );
}

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30
};
