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
            ["#svg", {x:0, y:0,zIndex: 0},{duration:0.3,at: "<"}],
            ["#img", {x:0, y:0},{duration:0.3,at: "<"}]
        ]
        
        const heroAnimation = async () => {
            await animate("#background", {opacity: 0},{duration:0})
            await animate("#svg", {x:-10, y:-10,zIndex: 20},{duration:0})
            await animate("#img", {x:10, y:10},{duration:0})
            await animate("#herotext1",{opacity: 0}, {duration: 0})
            await animate("#herotext3",{opacity: 0}, {duration: 0})
            await animate("#imageContainer",{opacity: 1})
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
        <section id="Hero" ref={scope} className="flex justify-center items-center w-screen h-screen gap-20">
            <>
                <motion.div id="imageContainer" onHoverStart={() => handleHoverStart()} 
                onHoverEnd={() => handleHoverEnd()}
                className="relative w-64 h-64">
                    <motion.svg id="svg" width="258" height="258" viewBox="0 0 258 258" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-5 z-0 stroke-current text-primary">
                        <rect x="1" y="1" width="256" height="256" stroke="currentColor" strokeWidth="2" fill="none" rx="6" ry="6" />
                    </motion.svg>
                    <div id="img"
                    className="w-full h-full rounded-md">                
                        <Image
                            src="/images/PictureWithoutBackground.png"
                            alt="Picture of myself"
                            fill
                            className="rounded-md"/>                                                
                        <div id="background" className="absolute inset-0 bg-primary opacity-35 rounded-md"></div>
                    </div>
                </motion.div>
            </>
            <div className="flex flex-col items-start justify-start gap-5">
                <p id="herotext1" className="text-text text-3xl opacity-90">Hi, my name is</p>
                <TextAnim/>
                <p id="herotext3" className="text-text text-7xl opacity-70">Fullstack Developer</p>
            </div>
        </section>
    )

} 