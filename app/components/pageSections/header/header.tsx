'use client';

import { DarkModeButton } from "./themeButton";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { headerLinks } from "@/app/data/headerData";
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
	position of the page. The "Galo Berlini" button is separated from the other buttons if the screen is +1024px
	wide

	I considered that wrapping the DarkModeButton in a div was better than passing variants as props to the component 
	since:
	1) This way DarkModeButton is fully reusable and isolated.
	2) This allows me to keep the logic related to responsiveness here in the header component.
	3) It is easier to understand how its animation works as the other 'a' tags have the same one. 
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
			className="headerNav lg:justify-between"> 
				<motion.a href="#Hero"
				variants={titleVariants}
				initial="initial"
				animate="animate"
				className="text-text hover-button text-sm p-2 lg:ml-6">
					Galo Berlini
				</motion.a>
				{/* This div is used for screens that have at least 1024px of width */}
				<div className="flex justify-center gap-5 xs:max-lg:hidden">
				{headerLinks.map((link, i) => (
					<motion.a
					key={i}
					custom={i} 
					variants={linkVariants}
					initial="initial"
					animate="animate"
					href={link.href}
					onClick={() => handleClickButton()}
					className="text-text hover-button text-sm p-2 ml-3 rounded">
						{link.text}
                  	</motion.a>
				))}
					<motion.div 
					custom={headerLinks.length} 
					variants={linkVariants}
					initial="initial"
					animate="animate">
						<DarkModeButton/>
					</motion.div>
            	</div>
				{/*These 'a' tags and the div below are only shown if the screen has a width of 1023px or less */}
				{headerLinks.map((link, i) => (
				<motion.a
				key={i}
				custom={i} 
				variants={linkVariants}
				initial="initial"
				animate="animate"
				href={link.href}
				onClick={() => handleClickButton()}
				className="text-text hover:bg-third hover:rounded-xl text-sm p-2 ml-3 rounded lg:hidden">
						{link.text}
				</motion.a>
			))}
				<motion.div 
				custom={headerLinks.length} 
				variants={linkVariants}
				initial="initial"
				animate="animate"
				className="lg:hidden xs:max-[410px]:order-first">
					<DarkModeButton/>
				</motion.div>
         	</motion.nav> 
     	</header>
    )
}