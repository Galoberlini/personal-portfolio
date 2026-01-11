'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export type VersionCard = {
    description: string;
    image: string;
}

type Props = {
    cards: VersionCard[]
}

export default function VersionModal({ cards }: Props) {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const modalRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const openButtonRef = useRef<HTMLButtonElement>(null)

    const close = useCallback(() => setOpen(false), [])
    const openModal = useCallback(() => setOpen(true), [])

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
            if (!open || !modalRef.current) return
            const focusables = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) as NodeListOf<HTMLElement>
            if (focusables.length === 0) return
            const first = focusables[0]
            const last = focusables[focusables.length - 1]
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        }
        if (open) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', onKeyDown)
            closeButtonRef.current?.focus()
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [open, close])

    return (
        <>
            {!open && (
                <button
                    ref={openButtonRef}
                    onClick={openModal}
                    aria-label="Open versions"
                    className="fixed bottom-5 right-5 z-[80] rounded-full bg-primary text-bg shadow-lg hover:opacity-90 transition-opacity p-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-text">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>

                </button>
            )}

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-[60] bg-black/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={close}
                        />

                        <motion.div
                            ref={modalRef}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="version-modal-title"
                            aria-describedby="version-modal-description"
                            className="fixed inset-0 z-[70] flex items-center justify-center"
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        >
                            <div className="w-[min(92vw,560px)] aspect-square overflow-hidden bg-bg text-text shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-3">
                                    <h2 id="version-modal-title" className="text-lg font-semibold">Versions</h2>
                                    <button ref={closeButtonRef} onClick={close} aria-label="Close" className="p-2 rounded hover:bg-third focus:outline-none focus:ring-2 focus:ring-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M6.225 4.811 4.81 6.225 9.586 11l-4.775 4.775 1.414 1.414L11 12.414l4.775 4.775 1.414-1.414L12.414 11l4.775-4.775-1.414-1.414L11 9.586 6.225 4.811z" />
                                        </svg>
                                    </button>
                                </div>
                                <div id="version-modal-description" className="overflow-auto h-[calc(100%-56px)] p-4">
                                    <ul className="grid grid-cols-1 gap-4">
                                        {cards.map((c, i) => (
                                            <li
                                                key={i}
                                                tabIndex={0}
                                                role="button"
                                                onClick={() => router.push(`/v${i + 1}`)}
                                                onKeyDown={(e) => { if (e.key === 'Enter') router.push(`/v${i + 1}`) }}
                                                className="group flex flex-col overflow-hidden rounded-xl border border-third bg-secondary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition-all hover:border-[var(--text-color)]/30"
                                            >
                                                {/* Imagen: Ahora más grande y arriba */}
                                                <div className="relative w-full aspect-[16/9] flex-shrink-0 border-b border-third overflow-hidden">
                                                    <Image
                                                        src={c.image}
                                                        alt={`Version ${i + 1}`}
                                                        fill
                                                        sizes="(max-width: 560px) 100vw, 560px"
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                        unoptimized
                                                    />
                                                </div>

                                                {/* Texto informativo */}
                                                <div className="p-4">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <h4 className="font-bold text-lg">V{i + 1}</h4>
                                                    </div>
                                                    <p className="text-sm opacity-70 leading-relaxed">{c.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                        {cards.length === 0 && (
                                            <li className="text-sm opacity-70 text-center py-10">No versions yet.</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
