'use client';

import Image from "next/image";
import clsx from "clsx";
import { Segment } from "../../../utils/AboutMeSegments";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/*  
    The idea behind this component is to create a segment of the about me page.
    Every segment has a list of texts and an image. The component receives a segment as a prop
    and renders the texts and the image in a row. The order of the row is inverted every segment.
    The component receives a boolean prop which determines the order and its value depends on the 
    index of the segment in the list of segments.
*/
export default function AboutMeSegment({segment, inverted} : {segment:Segment, inverted:boolean}) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <>
            <motion.div 
            ref={ref}
            initial={{opacity: 0}}
            animate={isInView ? { opacity: 1} : {}}
            transition={{duration: 0.75, ease:"easeInOut"}}
            className={clsx("flex justify-around items-center", inverted && "flex-row-reverse")}
            >
                <div className="text-pretty mx-5">
                    {segment.texts.map((text, index) => (
                        <p key={index} className="mt-3">{text}</p>
                    ))}
                </div>
                <Image
                    {...segment.imageProps}
                    alt={segment.imageProps.alt}
                    className="rounded-3xl">
                </Image>
            </motion.div>
        </> 
    )

}