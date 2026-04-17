"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=85&auto=format&fit=crop"

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
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen overflow-hidden flex flex-col bg-void"
    >
      {/* ── Background image (Ken Burns on load + parallax on scroll) ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: imgScale }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 22, ease: "linear" }}
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Dark overlay — keeps text fully readable */}
        <div className="absolute inset-0 bg-void/72" />

        {/* Gradient — fades to full black at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-2/3 bg-linear-to-t from-void via-void/40 to-transparent" />

        {/* Ember tint — subtle warm glow from bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[35vh] bg-ember/12 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* ── Top ticker ──────────────────────────────────────── */}
      <div className="relative z-10 pt-[4.5rem] overflow-hidden border-b border-white/8">
        <div className="flex overflow-hidden py-3">
          <div className="marquee-track">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center">
                {tickerItems.map((item, j) => (
                  <span key={j} className="flex items-center gap-5 px-5">
                    <span
                      className="text-[10px] tracking-[0.35em] text-white/30 uppercase"
                      style={{ fontFamily: "var(--font-space-mono)" }}
                    >
                      {item}
                    </span>
                    <span className="text-ember/60 text-[8px]">◆</span>
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
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-16"
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
            className="leading-[0.88] tracking-tight text-white text-center drop-shadow-2xl"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 22vw, 22rem)",
            }}
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
          <div className="w-8 h-px bg-white/20" />
          <span
            className="text-[10px] md:text-[11px] tracking-[0.45em] text-white/50 uppercase"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            INDUSTRIA CULTURAL
          </span>
          <div className="w-8 h-px bg-white/20" />
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
          <a
            href="#espacio"
            className="px-8 py-4 border border-white/20 hover:border-ember transition-colors duration-300 group"
          >
            <span
              className="text-white/50 group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.3em" }}
            >
              EL ESPACIO
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* ── Bottom info bar ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex justify-between items-center px-6 md:px-16 pb-7 pt-4 border-t border-white/8"
      >
        <span
          className="text-[10px] tracking-[0.25em] text-white/30 uppercase hidden sm:block"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Av. H. Yrigoyen 350 — Nva. Córdoba
        </span>

        <motion.a
          href="#agenda"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="text-white/30 hover:text-ember transition-colors mx-auto sm:mx-0"
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.a>

        <span
          className="text-[10px] tracking-[0.25em] text-white/30 uppercase hidden sm:block"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Mar—Dom&nbsp;&nbsp;18:00—02:00
        </span>
      </motion.div>
    </section>
  )
}
