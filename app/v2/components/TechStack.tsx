"use client"

import { categorizedStack } from "../data/technologies"
import { motion } from "framer-motion"

export default function TechStack() {
    return (
        <section id="TechStack" className="w-10/12 max-w-4xl mx-auto my-32">
            <h2 className="text-3xl font-bold mb-16 text-center">Technologies</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {categorizedStack.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <h3 className="text-[var(--text-color)]/40 text-xs uppercase tracking-[0.2em] font-bold mb-6">
                            {cat.category}
                        </h3>
                        <ul className="space-y-4">
                            {cat.tools.map((tool, j) => (
                                <li key={j} className="flex items-center gap-3 text-lg font-medium group">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--third-color)] group-hover:bg-[var(--text-color)] transition-colors" />
                                    <span className="text-[var(--text-color)]/80 group-hover:text-[var(--text-color)] transition-colors cursor-default">
                                        {tool}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}