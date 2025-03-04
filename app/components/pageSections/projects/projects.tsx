'use client';

/*
    This component is the projects section, it contains a slideshow and a text section.
    The slideshow is used to show the images of the projects and to navigate between them.
    Each time the user clicks on the next or previous button, the project state is updated
    which is responsible for showing the correct image and text.
*/

import { AnimatePresence, motion, wrap, useInView} from "framer-motion";
import { useState, useRef } from "react";
import { projectData } from "@/app/data/projectData";
import SlideShow from "./slideShow";
import Section from "../../section"

const textVariants = {
    initial:{
        opacity: 0
    },
    animate:{
        opacity: 1
    },
    exit:{
        opacity:0
    }

}

export default function Projects(){
    
    const [[project, direction], SetProject] = useState([0,0])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
       
    const handleProjectChange = (direction : number) => {
        SetProject([project + direction, direction])
    }
    const imageIndex = wrap(0, projectData.length, project);

    return (
        <Section title="Projects">       
            <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={isInView ? { opacity: 1} : {}}
            transition={{duration: 0.75, ease:"easeInOut"}} 
            className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center items-center w-full h-full">
                <AnimatePresence mode="wait">    
                    <motion.div variants={textVariants}
                    key={projectData[imageIndex].title}
                    initial="initial"
                    animate="animate"
                    exit="exit" 
                    className="mx-5 lg:mx-10 min-h-96 min-[1410px]:max-w-[700px]">
                        <h3 id="projectTitle"className="text-3xl">
                            {projectData[imageIndex].title}
                        </h3>
                        {projectData[imageIndex].texts.map((text,i) => 
                        <p id="projectText" key={`${i} text`}>
                            {text}
                        </p>
                        )}
                    </motion.div>
                </AnimatePresence>
                <SlideShow project={project} direction={direction} handler={handleProjectChange}/>
            </motion.div>
            
        </Section>
    )
}




