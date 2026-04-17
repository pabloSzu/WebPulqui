"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "AGENDA",    href: "#agenda" },
  { label: "ESPACIO",   href: "#espacio" },
  { label: "CERVEZAS",  href: "#cervezas" },
  { label: "CARTA",     href: "#carta" },
  { label: "CONTACTO",  href: "#contacto" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-void/95 backdrop-blur-sm border-b border-steel"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-18">
          {/* Logo */}
          <a
            href="#inicio"
            className="text-chalk hover:text-ember transition-colors duration-300 text-2xl tracking-widest"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            PULQUI
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group text-dust hover:text-chalk transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ember group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-chalk hover:text-ember transition-colors"
            aria-label="Menú"
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-void flex flex-col justify-center items-start px-12 gap-6"
          >
            {/* Decorative line */}
            <div className="w-10 h-px bg-ember mb-4" />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="text-chalk hover:text-ember transition-colors duration-200 text-5xl tracking-widest"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Bottom info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-8 text-dust text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Mar—Dom · 18:00—02:00
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
