'use client';

// import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import TextAnim from "@/app/utils/animations";

// const heroVariants = {
//         start: { opacity: 0},
//         end: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.75,
//                 ease:"easeInOut"
//             },
//         },
// }

// const descVariants = {
//     start: { opacity: 0},
//     end: {
//         opacity: 1,
//         transition: {
//             delayChildren: 0.5,
//             staggerChildren: 1.5,
//             ease:"easeInOut"
//         },
//     },
// }


// const divVariants = {
//     start: { opacity: 0},
//     end: {
//             opacity: 1}
// } 


// export default function Hero() {

//     return (
//         <motion.div 
//         variants={heroVariants}
//         initial="start"
//         animate="end"
//         id="hero" 
//         className="flex w-screen h-[70vh] pt-12">
//             <motion.div variants={divVariants} className="relative w-1/3">
//                 <Image
//                 src="/images/PictureWithoutBackground.png"
//                 alt="Picture of myself"
//                 fill
//                 />
//                 <div className="absolute inset-0 bg-primary opacity-35"></div>
//             </motion.div>
//             <motion.div variants={descVariants} className="flex flex-col gap-3 w-2/3 bg-third">
//                 <motion.p variants={divVariants} className="text-text text-3xl mt-10 ml-5">
//                     Hi, my name is 
//                 </motion.p>
//                 <TextAnim/>
//                 <motion.p variants={divVariants} className="text-text text-4xl ml-5">
//                     Fullstack Developer
//                 </motion.p>
//                 <motion.p variants={divVariants} className="text-text ml-5">
//                     I enjoy creating websites that offer the best experience for its users.
//                 </motion.p>
//             </motion.div>
//         </motion.div>
//     )

// }

export function SecondHero(){

    // const [scope, animate] = useAnimate()

    // useEffect(() => {
    //     const heroAnimation = async () => {
    //         await animate()
    //         await animate()
    //         await animate()
    //         await animate()
    //         await animate()
    //     }
    //     heroAnimation()


    // }
    // ,[])
    
    //ver bg 
    //ver donde poner svgs y que hacer con ellos, incluso ver qué svgs poner 
    return (
        <section id="hero2" className="flex justify-center items-center w-screen h-screen gap-5">
            <div className="flex justify-self-end items-end justify-end justify-items-end  w-1/3">
                <div className="relative w-64 h-64">
                    <Image
                        src="/images/PictureWithoutBackground.png"
                        alt="Picture of myself"
                        fill/>                                                
                    <div className="absolute inset-0 bg-primary opacity-35"></div>
                    <svg></svg>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start w-2/3 gap-5">
                <p className="text-text text-3xl opacity-90">Hi, my name is</p>
                <TextAnim/>
                <p className="text-text text-7xl opacity-70">Fullstack Developer</p>
            </div>
        </section>
    )

} 