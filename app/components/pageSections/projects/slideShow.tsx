import { motion, AnimatePresence, wrap } from "framer-motion";
import clsx from "clsx";
import { projectData } from "@/app/utils/projectData";

type SlideShowProps = {
    project: number;
    direction: number;
    handler: (direction: number) => void;
};

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            transition: {
                delay: 0.1
            }
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: {
                delay: 0.1
            }
        };
    }
};

export default function SlideShow({project, direction, handler}: SlideShowProps){
    

    const imageIndex = wrap(0, projectData.length, project);


    return (
        <div className="relative min-w-96 h-80 overflow-hidden">
            <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.img
                key={project}
                src={projectData[imageIndex].src}
                alt={projectData[imageIndex].alt}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                layoutId={`${project}project`}
                className="w-full h-full max-w-[100%] object-cover"
                />
            </AnimatePresence>
            <div
            onClick={() => handler(1)}
            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-gray-300 opacity-75"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                     <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                
            </div>
            <div
            onClick={() => handler(-1)}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-gray-300 opacity-75 "
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 flex items-center justify-center gap-1 z-10  bg-gray-400 opacity-95 rounded-t-md px-1">
                {projectData.map((_,i) => 
                    <div key={i} className={clsx("size-2 rounded-full ", i===imageIndex ? "bg-white ": "bg-gray-300 opacity-95")} />
                )}
            </div>
        </div>
    )
}