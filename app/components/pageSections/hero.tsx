'use client';

import { motion, useAnimate, AnimationSequence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import TextAnim from "@/app/utils/animations";

/*
    This component is the main component of the hero section. It shows an image of myself, my name and 
    my role. It uses the useAnimate hook to animate the elements when the component is mounted.
    In case I decide to add more elements to the animation sequence, I'd consider moving the TextAnim component
    here. Since the animation is only used in this component and I am timing the this animation by adding delays
    to the useAnimate hook, which is not the best practice.
*/

export function Hero(){

    const [scope, animate] = useAnimate()

    useEffect(() => {
        
        const imageSequence: AnimationSequence = [
            ["#background", {opacity: 0.35},{duration:0.3,at: 1.25}],
            ["#svg", {x:0, y:0, opacity:1},{duration:0.3,at: "<"}],
            ["#img", {x:0, y:0},{duration:0.3,at: "<"}]
        ]
        
        const heroAnimation = async () => {
            await animate([
                ["#background", { opacity: 0 }, { duration: 0 }],
                ["#herotext1", { opacity: 0 }, { duration: 0 }],
                ["#herotext3", { opacity: 0 }, { duration: 0 }]
            ]);
            await animate(imageSequence)
            await animate("#herotext1",{opacity: 1},{duration: 0.3,})
            await animate("#herotext3",{opacity: 1},{duration: 0.3, delay: 0.7})
        }
        heroAnimation()
    }
    ,[animate])
    
    const handleHoverStart = () => { 
        animate("#background", {opacity: 0})
        animate("#svg", {x:-10, y:-10,zIndex: 20})
        animate("#img", {x:10, y:10})
    }
    const handleHoverEnd = () => { 
        animate("#background", {opacity: 0.35})
        animate("#svg", {x:0, y:0,zIndex: 0})
        animate("#img", {x:0, y:0})
    }

    return (
        <section id="Hero" ref={scope} className="hero lg:flex-row lg:gap-20 xs:max-[410px]:pt-[rem] lg:pt-0 lg:pb-6">
            <motion.div id="imageContainer"
            key="HeroImg"
            onHoverStart={() => handleHoverStart()} 
            onHoverEnd={() => handleHoverEnd()}
            className="relative w-64 h-64">
                <motion.svg id="svg"
                key="herosvg"
                width="100%"
                height="100%"
                viewBox="0 0 258 258"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: -10, y: -10, opacity:0}}
                className="absolute inset-5 z-0 stroke-current text-primary">
                    <rect x="1" y="1" width="256" height="256" stroke="currentColor" strokeWidth="2" fill="none" rx="6" ry="6" />
                </motion.svg>
                <motion.div id="img"
                initial={{ x: 10, y: 10}}
                className="w-full h-full rounded-md z-20">                
                    <Image
                        src="/images/PictureWithoutBackground.png"
                        alt="Picture of myself"
                        fill
                        className="rounded-md"/>                                                
                    <motion.div 
                    id="background"
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-primary opacity-35 rounded-md"></motion.div>
                </motion.div>
            </motion.div>
            <div className="flex flex-col items-center text-center lg:items-start gap-4">
                <motion.p id="herotext1" 
                initial={{ opacity: 0 }}
                className="text-text text-2xl lg:text-3xl opacity-90 mb-0">
                    Hi, my name is
                </motion.p>
                <TextAnim/>
                <motion.p id="herotext3"
                initial={{ opacity: 0 }}
                className="text-text text-5xl  lg:text-7xl opacity-70">Fullstack Developer</motion.p>
            </div>
        </section>
    )

} 