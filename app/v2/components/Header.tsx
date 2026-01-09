"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const headerLinks = [
    { href: "Methodology", text: "Methodology" },
    { href: "Experience", text: "Experience" },
    { href: "WebSites", text: "WebSites" },
    { href: "TechStack", text: "TechStack" },
]

const titleVariants = {
    initial: { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

const linkVariants = {
    initial: { opacity: 0, y: -6 },
    animate: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.3 } }),
}

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determinar si está en el top
            const atTop = currentScrollY < 20;
            setIsAtTop(atTop);

            // Determinar dirección de scroll y visibilidad
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - ocultar header
                setIsVisible(false);
            } else {
                // Scrolling up - mostrar header
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    // Smooth scroll function
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header>
            <motion.nav
                variants={{
                    visibleStart: { y: 0, backgroundColor: "rgba(0,0,0,0)" },
                    visible: { y: 0, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)", opacity: 0.98, backgroundColor: "rgba(13,14,16,0.95)", backdropFilter: "saturate(180%) blur(6px)" },
                    hidden: { y: "-100%" },
                }}
                animate={!isVisible ? "hidden" : isAtTop ? "visibleStart" : "visible"}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="headerNav lg:justify-between"
                aria-label="Main navigation"
            >
                {/* Left: brand */}
                <motion.button
                    onClick={() => scrollToSection("Hero")}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    className="text-text font-semibold text-sm p-2 lg:ml-6"
                >
                    GB
                </motion.button>

                {/* Center: section links (desktop only) */}
                <div className="xs:max-lg:hidden flex justify-center gap-5">
                    {headerLinks.map((link, i) => (
                        <motion.button
                            key={link.href}
                            custom={i}
                            variants={linkVariants}
                            initial="initial"
                            animate="animate"
                            onClick={() => scrollToSection(link.href)}
                            className="text-text hover-button text-sm p-2 ml-3 rounded"
                        >
                            {link.text}
                        </motion.button>
                    ))}
                </div>

                {/* Right: socials */}
                <div className="flex items-center gap-2 lg:mr-6">
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/galoberlini" target="_blank" className="p-2 rounded hover:bg-third">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.1V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8.5z" /></svg>
                    </a>
                    <a aria-label="Email" href="mailto:galoberlini@gmail.com" className="p-2 rounded hover:bg-third">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>                    </a>
                    <a aria-label="GitHub" href="https://github.com/Galoberlini" target="_blank" className="p-2 rounded hover:bg-third">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="text-text size-6">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                </div>
            </motion.nav>
        </header>
    )
}