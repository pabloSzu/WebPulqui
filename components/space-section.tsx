"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const stats = [
  { number: "2019", label: "Año de apertura" },
  { number: "12",   label: "Canillas en barra" },
  { number: "500+", label: "Eventos realizados" },
  { number: "120",  label: "Personas de capacidad" },
]

const features = [
  { title: "ESCENARIO",  body: "Equipado para bandas en vivo, DJs, performers y cualquier locura que se te ocurra." },
  { title: "GALERÍA",    body: "Muestra de arte en rotación permanente. Siempre hay algo nuevo colgado en las paredes." },
  { title: "BARRA",      body: "12 canillas. Producción propia + cervezas invitadas de toda la región." },
  { title: "PATIO",      body: "Espacio exterior para respirar entre show y show. Ampliado en temporada de verano." },
]

const spaceImages = [
  { src: "/escenario-solo.png",  label: "EL ESCENARIO" },
  { src: "/banda-escenario.png", label: "MÚSICA EN VIVO" },
  { src: "/vista-arriba.png",    label: "EL PATIO" },
  { src: "/mural-entrada.png",   label: "LA ENTRADA" },
]

export function SpaceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="espacio" ref={ref} className="py-24 md:py-32 bg-void">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="border-b border-steel pb-5 mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="section-eyebrow mb-1"
          >
            — 03 —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-[15vw] md:text-[7rem] lg:text-[8.5rem]"
          >
            EL ESPACIO
          </motion.h2>
        </div>

        {/* ── Stats grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-steel mb-px">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 + i * 0.1 }}
              className="bg-void p-8 md:p-10 text-center group hover:bg-smoke transition-colors duration-300"
            >
              <div
                className="text-ember group-hover:text-chalk transition-colors duration-300 leading-none mb-2"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {s.number}
              </div>
              <div
                className="text-dust uppercase"
                style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.2em" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>


        {/* ── Image strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex overflow-x-auto hide-scrollbar -mx-6 md:mx-0 mb-px"
        >
          {spaceImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="relative shrink-0 w-[70vw] sm:w-[45vw] md:flex-1 overflow-hidden group"
              style={{ height: "clamp(220px, 35vw, 420px)" }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 70vw, 25vw"
              />
              <div className="absolute inset-0 bg-void/65 group-hover:bg-void/35 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-ember group-hover:w-full transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                <p className="text-chalk tracking-wider" style={{ fontFamily: "var(--font-bebas)", fontSize: "1.1rem" }}>
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Features grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-steel mb-px">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.08 }}
              className="bg-smoke p-8 group hover:bg-void transition-colors duration-300"
            >
              <div className="w-6 h-px bg-ember mb-5 group-hover:w-10 transition-all duration-300" />
              <h3
                className="text-chalk group-hover:text-ember transition-colors duration-300 mb-3 tracking-wider"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem" }}
              >
                {f.title}
              </h3>
              <p
                className="text-dust leading-relaxed"
                style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", lineHeight: 1.8 }}
              >
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Address / hours ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85 }}
          className="bg-smoke border-t-2 border-ember p-8 flex flex-col sm:flex-row justify-between gap-6"
        >
          <div>
            <p
              className="text-ember mb-1 uppercase"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.35em" }}
            >
              UBICACIÓN
            </p>
            <p
              className="text-chalk"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px" }}
            >
              Rodríguez Peña 455, Barrio Alberdi
            </p>
          </div>
          <div>
            <p
              className="text-ember mb-1 uppercase"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.35em" }}
            >
              HORARIOS
            </p>
            <p
              className="text-chalk"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px" }}
            >
              Martes — Domingo&nbsp;&nbsp;18:00 — 02:00
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
