import Link from "next/link";
import { DarkModeButton } from "./themeButton";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { headerLinks } from "@/app/utils/headerData";
import { useState } from "react";


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

  useMotionValueEvent(scrollY, "change",(latest) => {
    const previous = scrollY.getPrevious()
    console.log(scrollY)
    if (latest < 48){
      setStart(true)
    } else {
      setStart(false)
    }
    if (previous && latest > previous && latest > 50){
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
          animate={hidden ? "hidden" : start ? "visibleStart" : "visible"}
          transition={{duration: 0.25, ease: "easeInOut"}} 
          className="fixed top-0 left-0 h-12 bg-bg z-50 flex justify-between items-center w-full p-1 "> 
            <motion.div 
            variants={titleVariants}
            initial="initial"
            animate="animate">
              <Link href="#hero2" className="text-text hover:bg-primary hover:rounded-full hover:text-bg text-sm p-2 ml-6 rounded">
                Galo Berlini
              </Link>
            </motion.div>
            <div className="flex justify-center items-center gap-5">
              {headerLinks.map((link, i) => (
                  <motion.div
                  key={i}
                  custom={i} 
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  >
                    <Link href={link.href}
                     className="text-text hover:bg-primary hover:rounded-full hover:text-bg text-sm p-2 ml-3 rounded">
                      {link.text}</Link>
                  </motion.div>
                )
                )
              }
              <motion.div 
                custom={4} 
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