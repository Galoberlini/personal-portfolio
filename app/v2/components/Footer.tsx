"use client"

export default function Footer() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-10/12 max-w-5xl mx-auto mt-40 mb-12">
            <div className="w-full h-px bg-[var(--third-color)]/50 mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 md:gap-24">

                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--text-color)]">
                            Let&apos;s work together.
                        </h2>
                        <p className="mt-4 text-[var(--text-color)]/60 max-w-md text-base md:text-lg leading-relaxed">
                            I&apos;m looking for opportunities to work on real problems that challenge me and make an actual impact.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-color)]/40 font-bold">Email me</span>
                        <a
                            href="mailto:galoberlini@gmail.com"
                            className="text-xl md:text-2xl font-medium hover:opacity-50 transition-all border-b border-[var(--text-color)]/20 w-fit pb-1"
                        >
                            galoberlini@gmail.com
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-1 gap-12 md:text-right">
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-color)]/40 font-bold">Directory</span>
                        <nav className="flex flex-col gap-2 text-sm font-medium">
                            <button onClick={() => scrollToSection("Hero")} className="hover:opacity-50 transition-all md:justify-end flex">Home</button>
                            <button onClick={() => scrollToSection("Experience")} className="hover:opacity-50 transition-all md:justify-end flex">Experience</button>
                            <button onClick={() => scrollToSection("WebSites")} className="hover:opacity-50 transition-all md:justify-end flex">Websites</button>
                            <button onClick={() => scrollToSection("TechStack")} className="hover:opacity-50 transition-all md:justify-end flex">Tech</button>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-color)]/40 font-bold">Social</span>
                        <nav className="flex flex-col gap-2 text-sm font-medium">
                            <a href="https://linkedin.com/in/galoberlini" target="_blank" className="hover:opacity-50 transition-all">LinkedIn</a>
                            <a href="https://github.com/Galoberlini" target="_blank" className="hover:opacity-50 transition-all">GitHub</a>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="mt-32 pt-8 border-t border-[var(--third-color)]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[var(--text-color)]/30">
                <p>© {currentYear} Galo Berlini</p>
                <div className="flex gap-4">
                    <span>Rosario, AR</span>
                    <span>GMT-3</span>
                </div>
            </div>
        </footer>
    )
}