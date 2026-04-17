"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

const tickerItems = [
  "BAR", "CERVECERÍA ARTESANAL", "MÚSICA EN VIVO",
  "ARTE", "COMEDIA", "DANZA", "CULTURA VIVA", "NUEVA CÓRDOBA",
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen overflow-hidden flex flex-col bg-void"
    >
      {/* Ember glow — bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55vw] h-[45vh] bg-ember/8 blur-[130px] rounded-full pointer-events-none" />
      {/* Gold glow — top right */}
      <div className="absolute top-1/4 right-0 w-[25vw] h-[30vh] bg-gold/5 blur-[90px] rounded-full pointer-events-none" />

      {/* ── Top ticker ──────────────────────────────────────── */}
      <div className="pt-[4.5rem] overflow-hidden border-b border-steel">
        <div className="flex overflow-hidden py-3">
          <div className="marquee-track">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center">
                {tickerItems.map((item, j) => (
                  <span key={j} className="flex items-center gap-5 px-5">
                    <span
                      className="text-[10px] tracking-[0.35em] text-dust uppercase"
                      style={{ fontFamily: "var(--font-space-mono)" }}
                    >
                      {item}
                    </span>
                    <span className="text-ember text-[8px]">◆</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="flex-1 flex flex-col items-center justify-center relative px-6 md:px-16"
      >
        {/* Overline bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 44 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-ember mb-6"
        />

        {/* PULQUI — screen-filling */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.05, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[22vw] leading-[0.88] tracking-tight text-chalk text-center"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            PULQUI
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center gap-5 mt-5"
        >
          <div className="w-8 h-px bg-steel" />
          <span
            className="text-[10px] md:text-[11px] tracking-[0.45em] text-dust uppercase"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            INDUSTRIA CULTURAL
          </span>
          <div className="w-8 h-px bg-steel" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-3 mt-10"
        >
          <a href="#agenda" className="btn-ember">
            <span>VER AGENDA</span>
          </a>
          <a href="#espacio" className="btn-ghost">
            EL ESPACIO
          </a>
        </motion.div>
      </motion.div>

      {/* ── Bottom info bar ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex justify-between items-center px-6 md:px-16 pb-7 pt-4 border-t border-steel"
      >
        <span
          className="text-[10px] tracking-[0.25em] text-dust uppercase hidden sm:block"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Av. H. Yrigoyen 350 — Nva. Córdoba
        </span>

        <motion.a
          href="#agenda"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="text-dust hover:text-ember transition-colors mx-auto sm:mx-0"
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.a>

        <span
          className="text-[10px] tracking-[0.25em] text-dust uppercase hidden sm:block"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Mar—Dom&nbsp;&nbsp;18:00—02:00
        </span>
      </motion.div>
    </section>
  )
}
