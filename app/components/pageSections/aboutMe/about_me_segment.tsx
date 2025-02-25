import Image from "next/image";
import clsx from "clsx";
import { Segment } from "../../../utils/AboutMeSegments";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMeSegment(segment : Segment) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <>
            <motion.div 
                ref={ref}
                initial={{opacity: 0}}
                animate={isInView ? { opacity: 1} : {}}
                transition={{duration: 0.75, ease:"easeInOut"}}
                className={clsx("flex justify-around items-center", segment.inverted && "flex-row-reverse")}
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