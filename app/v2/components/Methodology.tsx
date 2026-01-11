"use client"
import { motion } from "framer-motion"
import methodologySteps from "../data/methodology"

const itemVariants = {
    off: { opacity: 0.35 },
    on: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } },
}

const lineVariants = {
    off: { pathLength: 0, opacity: 0 },
    on: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
}

const textVariants = {
    off: { opacity: 0, y: 10 },
    on: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
}

const descriptionVariants = {
    off: { opacity: 0 },
    on: { opacity: 0.9, transition: { duration: 0.6, ease: "easeInOut" } },
}

export default function Methodology() {
    return (
        <section id="Methodology" className="relative w-10/12 mx-auto my-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Methodology</h2>
            <div className="flex flex-col">
                {methodologySteps.map((s, i) => (
                    <motion.div
                        key={s.id}
                        className="flex min-h-[150px] md:min-h-[180px]"
                        initial="off"
                        whileInView="on"
                        viewport={{ once: true, amount: 1 }}
                        variants={itemVariants}
                    >
                        <div className="flex flex-col items-center mr-4 md:mr-10">
                            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                    <circle cx="50%" cy="50%" r="45%" fill="transparent" strokeWidth="2" stroke="currentColor" strokeDasharray="4 4" className="text-third" />
                                    <motion.circle cx="50%" cy="50%" r="45%" fill="transparent" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" variants={lineVariants} className="text-primary" />
                                </svg>
                                <span className="text-sm md:text-lg font-mono font-bold text-text">{s.id}</span>
                            </div>
                            {i !== methodologySteps.length - 1 && (
                                <div className="relative w-px flex-grow my-2">
                                    <div className="absolute inset-0 border-l-2 border-dashed border-third" />
                                    <svg className="absolute inset-0 h-full w-1 overflow-visible">
                                        <motion.line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="3" variants={lineVariants} className="text-primary" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="pt-0 md:pt-0 pb-12 md:pb-16">
                            <motion.h3 variants={textVariants} className="text-xl md:text-3xl font-bold text-text mb-2 tracking-tight">{s.title}</motion.h3>
                            <motion.p variants={descriptionVariants} className="text-sm md:text-lg text-text/80 max-w-lg leading-relaxed">{s.description}</motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}