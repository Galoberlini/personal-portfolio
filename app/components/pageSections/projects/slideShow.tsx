import { motion, AnimatePresence, wrap } from "framer-motion";
import clsx from "clsx";
import { projectData } from "@/app/data/projectData";

/*
    This component is the slideshow of the project section. It contains the images of the projects and 
    the buttons to navigate between them. The project state is update each time the user clicks on
    one of the buttons.
*/

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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function SlideShow({project, direction, handler}: SlideShowProps){
    

    const imageIndex = wrap(0, projectData.length, project);


    return (
        <div className="relative w-5/6 h-60 sm:min-w-96 sm:h-80 min-[1410px]:max-w-[24rem] overflow-hidden">
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
                className="w-full h-full object-cover rounded-md text-[0px]"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                        handler(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        handler(-1);
                    }
                    }}
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