'use client';

import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { SkillsCards } from "../../../data/skillsContentParams"; 

/* 
    This component is the one that shows the cards with the skills that the user can click on.
    When a user clicks on a card, the content of that card will be shown. The component receives
    a handler and a list of cards which are mapped and shown to the user.
*/

export default function SkillsCard({handler, Cards}:{handler:(index: number) => void, Cards: SkillsCards[]}){
    
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, amount: "all"})

    return (
        <motion.div
        ref={ref}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="flex flex-col items-center sm:flex-row gap-4 sm:gap-8 justify-center"
        >
            {Cards.map((card, i) => 
            <motion.div
            key={card.title}
            initial={{y: 60}}
            animate={isInView ? {y: 0} : {}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            onClick={() => handler(i+1)}
            className="flex flex-col items-center justify-center gap-5 pt-4 size-40 sm:size-64 bg-primary rounded-3xl cursor-pointer"
            >
                {card.svgIcon}
                <p className="text-white">
                    {card.title}
                </p>
            </motion.div>
            )}
        </motion.div>
    )
}