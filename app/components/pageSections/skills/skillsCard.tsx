'use client';

import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { CardParams } from "../../../utils/skillsContentParams"; 


type ContentProps = {
    handleContentChange: (index: number) => void;
  };

export default function SkillsCard({handler}:{handler:ContentProps}){
    
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, amount: "all"})

    return (
        <motion.div
        ref={ref}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="flex flex-row gap-8 justify-center"
        >
            {CardParams.map((card, i) => 
            <motion.div
            key={card.title}
            initial={{y: 60}}
            animate={isInView ? {y: 0} : {}}
            whileHover={{y: -20}}
            onClick={() => handler.handleContentChange(i+1)}
            className="flex flex-col items-center justify-center size-64 gap-6 bg-primary rounded-3xl cursor-pointer"
            >
                {card.svgIcon}
                <p className="text-text">
                    {card.title}
                </p>
            </motion.div>
            )}
        </motion.div>
        
        
    )
}