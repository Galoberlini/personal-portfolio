"use client"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section id="Hero" className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* animated glow background */}
            <div aria-hidden className="pointer-events-none absolute -inset-[10%] opacity-40" style={{
                background: `radial-gradient(40% 40% at 30% 30%, rgba(50,52,55,0.8) 0%, rgba(50,52,55,0.1) 60%, transparent 70%),
                              radial-gradient(30% 30% at 70% 60%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 60%, transparent 75%)`,
                animation: 'glowMove 18s ease-in-out infinite',
            }} />
            <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text drop-shadow-sm bg-[linear-gradient(90deg,_#e5e7eb,_#9ca3af,_#e5e7eb)] [background-size:200%_200%] animate-[gradientShift_8s_ease_infinite_alternate]"
            >
                Galo Berlini
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="mt-3 text-3xl md:text-4xl text-text/90"
            >
                Fullstack Developer
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 max-w-xl text-lg md:text-lg text-text/80"
            >
                Solving complex problems with honest work and reliable code        </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
                <a
                    href="/files/CVGaloBerliniEN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable="false"
                    className="w-full sm:w-auto px-8 py-3 rounded-md bg-[var(--text-color)] text-[var(--bg-color)] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                >
                    <span>View Resume</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                </a>

                <a
                    href="https://linkedin.com/in/galo-berlini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable="false"
                    className="w-full sm:w-auto px-8 py-3 rounded-md border border-[var(--third-color)] text-[var(--text-color)] font-medium hover:bg-[var(--third-color)]/30 transition-all flex items-center justify-center gap-2"
                >
                    <span>Let&apos;s Connect</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
            </motion.div>
        </section>
    )
}