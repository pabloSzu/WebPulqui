"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

const HERO_IMAGE = "/hero.png"

const tickerItems = [
  "BAR", "CERVECERÍA ARTESANAL", "MÚSICA EN VIVO",
  "ARTE", "COMEDIA", "DANZA", "CULTURA VIVA", "ALBERDI",
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imgY      = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const textY     = useTransform(scrollYProgress, [0, 1], ["0%", "14%"])
  const opacity   = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen overflow-hidden flex flex-col bg-void"
    >

      {/* ── Background image — parallax ──────────────────────── */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imgY }}
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlays ─────────────────────────────────────────── */}
      {/* Base dark tint */}
      <div className="absolute inset-0 bg-void/50" />
      {/* Strong bottom-to-top fade so text is always readable */}
      <div className="absolute inset-0 bg-linear-to-t from-void via-void/70 to-transparent" style={{ backgroundImage: "linear-gradient(to top, #060606 0%, #060606cc 30%, transparent 65%)" }} />
      {/* Top fade for ticker legibility */}
      <div className="absolute top-0 inset-x-0 h-40" style={{ background: "linear-gradient(to bottom, #060606cc 0%, transparent 100%)" }} />
      {/* Ember warm glow — mirrors tank lighting */}
      <div className="absolute bottom-0 left-0 w-[55vw] h-[60vh] bg-ember/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[40vh] bg-ember/6 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Top ticker ──────────────────────────────────────── */}
      <div className="relative z-10 pt-18 overflow-hidden border-b border-white/8">
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
        style={{ y: textY, opacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-16"
      >
        {/* Overline bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 44 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-px bg-ember mb-6"
        />

        {/* PULQUI — screen-filling */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
        transition={{ delay: 1.3 }}
        className="absolute bottom-0 inset-x-0 z-10 flex justify-between items-center px-8 md:px-16 py-5 border-t border-white/8"
      >
        <span
          className="text-[10px] tracking-[0.25em] text-white/25 uppercase hidden sm:block"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Rodríguez Peña 455 — Alberdi
        </span>

        <motion.a
          href="#agenda"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="text-white/25 hover:text-ember transition-colors duration-300 mx-auto sm:mx-0"
        >
          <ArrowDown size={16} strokeWidth={1.2} />
        </motion.a>

        <span
          className="text-[10px] tracking-[0.25em] text-white/25 uppercase hidden sm:block"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Mar—Dom&nbsp;&nbsp;18:00—02:00
        </span>
      </motion.div>

    </section>
  )
}
