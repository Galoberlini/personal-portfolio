import { DarkModeButton } from "./themeButton";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { headerLinks } from "@/app/utils/headerData";
import { useState } from "react";

/*
	This component is the header of the page, it contains the navigation links and the theme button.
	The header is fixed at the top of the page and its shown only if the user scrolls up or if the user
	is at the top of the page. The header is hidden if the user scrolls down. I had to use 3 states to make 
	this work, the first one is simple, it's the scrollY value, in case the user scrolls down, the hidden state
	turns to true. The second one is the start state, it's used to show the header when the user is at the top
	of the page, additionally this allows me to trigger a custom animation when the user scrolls to the top.
	The third one is the clickButton state, it's used to hide the header when the user clicks on a link,
	otherwise the header would be visible if the user clicks the link of a section that is above the current
	position of the page.
*/


const titleVariants = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration:0.33 
    }
  },
}
const linkVariants = {
  initial: (i:number) => ({
    x: 100*(i+1),
    opacity: 0,
    
  }),
  animate: (i:number) => ({
    x: 0,
    opacity: 1,
    transition:{
      duration:0.5 ,
      delay:0.33 + (i*0.1) 
    }
  })
}

export default function Header(){
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)
	const [start, setStart] = useState(true)
	const [clickButton, setClickButton] = useState(false)

  const handleClickButton = () => {
    setClickButton(true)
    setTimeout(() => {setClickButton(false); setHidden(true)}, 700)
  }

  useMotionValueEvent(scrollY, "change",(latest) => {
    const previous = scrollY.getPrevious()
    if (latest < 48){
      setStart(true)
    } else {
      setStart(false)
    }
    if (previous && latest > previous && latest > 48){
      setHidden(true)
    } else {
      setHidden(false)  
    }
  })
  	return (
        <header>
          	<motion.nav variants={{
			visibleStart: {y: 0,},
			visible: {y: 0,boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)", opacity: 0.95},
			hidden: {y: "-100%"},
			}}
			animate={hidden || clickButton ? "hidden" : start ? "visibleStart" : "visible"}
			transition={{duration: 0.25, ease: "easeInOut"}} 
			className="fixed top-0 left-0 h-12 bg-bg z-50 flex justify-between items-center w-full p-1 "> 
				<motion.div 
				variants={titleVariants}
				initial="initial"
				animate="animate">
					<a href="#Hero" className="text-text hover:bg-third hover:rounded-xl text-sm p-2 ml-6">
						Galo Berlini
					</a>
				</motion.div>
				<div className="flex justify-center gap-5">
				{headerLinks.map((link, i) => (
					<motion.div
					key={i}
					custom={i} 
					variants={linkVariants}
					initial="initial"
					animate="animate"
					>
						<a href={link.href}
						onClick={() => handleClickButton()}
						className="text-text hover:bg-third hover:rounded-xl text-sm p-2 ml-3 rounded">
							{link.text}
						</a>
                  	</motion.div>
				))}
					<motion.div 
					custom={5} 
					variants={linkVariants}
					initial="initial"
					animate="animate">
						<DarkModeButton/>
					</motion.div>
            	</div>
         	 </motion.nav> 
     	</header>
    )
}