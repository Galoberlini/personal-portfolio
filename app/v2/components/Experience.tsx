"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { experienceItems } from "../data/experience"

export default function Experience() {
    return (
        <section id="Experience" className="relative w-full max-w-4xl mx-auto my-24 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[var(--text-color)]">
                Professional Experience
            </h2>

            {/* Contenedor con más margen lateral en mobile para que no se pegue al borde */}
            <div className="relative border-l-2 border-[var(--third-color)] ml-3 md:ml-10">
                {experienceItems.map((exp, i) => (
                    <motion.article
                        key={`${exp.company}-${i}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        /* Incrementamos pb-16 en mobile para evitar que se pegue al siguiente indicador */
                        className="relative pl-8 pb-16 md:pb-20 last:pb-0"
                    >
                        {/* Indicador de Timeline (Punto) - Mejorado con un anillo de sombra para visibilidad */}
                        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-[var(--text-color)] border-4 border-[var(--bg-color)] shadow-[0_0_0_1px_var(--third-color)]" />

                        <div className="flex flex-col gap-1 mb-4">
                            {/* Título y Fecha */}
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4">
                                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-color)] leading-tight">
                                    {`${exp.company} — ${exp.charge}`}
                                </h3>
                                <span className="text-xs md:text-sm font-mono text-[var(--text-color)]/40 whitespace-nowrap">
                                    {exp.date}
                                </span>
                            </div>

                            {/* Ubicación con estilo más discreto para no competir con el texto principal */}
                            <span className="text-sm text-[var(--text-color)]/50 font-medium flex items-center gap-1">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                {exp.ubicacion}
                            </span>
                        </div>

                        <div className="grid md:grid-cols-[1fr_100px] gap-6 items-start">
                            <div className="space-y-4">
                                <p className="text-[var(--text-color)]/70 leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>

                                {/* Tags más compactos en mobile */}
                                <ul className="flex flex-wrap gap-2">
                                    {exp.stack.map((tag, t) => (
                                        <li key={t} className="text-[10px] md:text-xs font-medium uppercase tracking-widest px-2.5 py-1 border border-[var(--third-color)] text-[var(--text-color)]/60 rounded-md bg-[var(--secondary-color)]/30 transition-colors hover:border-[var(--text-color)]/30">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Logo - Solo visible en desktop para limpiar el mobile, o puedes dejarlo pero con margen top */}
                            <div className="hidden md:block relative w-24 h-24 rounded-2xl overflow-hidden border border-[var(--third-color)] bg-[var(--bg-color)] group">
                                <Image
                                    src={exp.imageUrl}
                                    alt={`${exp.company} logo`}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                />
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}