"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { websites } from "../data/websites"

export default function WebSites() {
    return (
        <section id="WebSites" className="w-10/12 max-w-4xl mx-auto my-24">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-color)]">
                    Websites
                </h2>
            </div>

            <div className="space-y-24 md:space-y-32">
                {websites.map((w, i) => (
                    <motion.div
                        key={`${w.title}-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`flex flex-col gap-8 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        <div className="w-full md:w-[45%] group">
                            <a
                                href={w.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-video rounded-xl overflow-hidden border border-[var(--third-color)] bg-[var(--secondary-color)]/30"
                            >
                                <Image
                                    src={w.image}
                                    alt={w.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(min-width: 768px) 400px, 100vw"
                                />
                            </a>
                        </div>

                        <div className="w-full md:w-[55%] flex flex-col space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-color)]">
                                {w.title}
                            </h3>

                            <p className="text-sm md:text-base text-[var(--text-color)]/70 leading-relaxed">
                                {w.description}
                            </p>

                            <div className="pt-2">
                                <a
                                    href={w.url}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-color)]/60 hover:text-[var(--text-color)] transition-all group"
                                >
                                    <span className="border-b border-transparent group-hover:border-[var(--text-color)]">
                                        Ver proyecto
                                    </span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}