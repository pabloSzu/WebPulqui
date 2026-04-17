"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const beers = [
  {
    id: 1,
    name: "PAMPA DORADA",
    style: "Golden Ale",
    abv: "5.2%",
    ibu: 18,
    accentColor: "#C07A08",
    tags: ["Suave", "Refrescante"],
    description: "Notas de miel y cereales. Ligera, refrescante y perfecta para arrancar la noche.",
  },
  {
    id: 2,
    name: "TORMENTA ROJA",
    style: "Irish Red Ale",
    abv: "5.8%",
    ibu: 25,
    accentColor: "#8B2525",
    tags: ["Equilibrada", "Maltosa"],
    description: "Caramelo tostado, cuerpo medio, final seco. Para los que saben lo que quieren.",
  },
  {
    id: 3,
    name: "NOCHE NEGRA",
    style: "Stout",
    abv: "6.5%",
    ibu: 35,
    accentColor: "#4A4A4A",
    tags: ["Intensa", "Compleja"],
    description: "Café, chocolate amargo, notas ahumadas. La cerveza para quedarse hasta el cierre.",
  },
  {
    id: 4,
    name: "CIELO IPA",
    style: "American IPA",
    abv: "6.8%",
    ibu: 55,
    accentColor: "#D4880A",
    tags: ["Lupulada", "Cítrica"],
    description: "Explosión cítrica y tropical. Amargor pronunciado pero balanceado. Para los valientes.",
  },
  {
    id: 5,
    name: "BRISA DE TRIGO",
    style: "Hefeweizen",
    abv: "4.9%",
    ibu: 12,
    accentColor: "#B8973A",
    tags: ["Frutal", "Sedosa"],
    description: "Banana, clavo de olor, textura sedosa. Un clásico alemán hecho en Córdoba.",
  },
  {
    id: 6,
    name: "FUEGO DEL SUR",
    style: "Chile Ale",
    abv: "5.5%",
    ibu: 20,
    accentColor: "#E03D0E",
    tags: ["Especial", "Picante"],
    description: "Con ají. Empieza suave, termina con fuego. Nuestra especialidad de la casa.",
  },
]

export function BeersSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="cervezas" ref={ref} className="py-24 md:py-32 bg-smoke">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="border-b border-steel pb-5 mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="section-eyebrow mb-1"
          >
            — 04 —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-[15vw] md:text-[7rem] lg:text-[8.5rem]"
          >
            CERVEZAS
          </motion.h2>
        </div>

        {/* ── Beer grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel">
          {beers.map((beer, i) => (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.07 }}
              onMouseEnter={() => setHovered(beer.id)}
              onMouseLeave={() => setHovered(null)}
              className="bg-void p-8 group relative overflow-hidden hover:bg-smoke transition-colors duration-300 cursor-default"
            >
              {/* Top color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500 group-hover:h-[5px]"
                style={{ backgroundColor: beer.accentColor }}
              />

              {/* ABV — large background number */}
              <div
                className="text-steel/25 leading-none mb-5 transition-colors duration-300 group-hover:text-steel/40"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "3.5rem" }}
              >
                {beer.abv}
              </div>

              {/* Beer name */}
              <h3
                className="text-chalk leading-none mb-1 group-hover:text-ember transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  letterSpacing: "0.05em",
                }}
              >
                {beer.name}
              </h3>

              {/* Style */}
              <p
                className="text-dust uppercase mb-4"
                style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.25em" }}
              >
                {beer.style}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {beer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-steel text-dust px-2 py-0.5 group-hover:border-dust/40 transition-colors"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "8px", letterSpacing: "0.2em" }}
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                className="text-dust/70 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", lineHeight: 1.75 }}
              >
                {beer.description}
              </p>

              {/* IBU progress bar */}
              <div className="flex items-center gap-3">
                <span
                  className="text-dust/40 shrink-0"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.1em" }}
                >
                  IBU
                </span>
                <div className="flex-1 h-px bg-steel relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full"
                    initial={{ width: 0 }}
                    animate={{ width: hovered === beer.id ? `${Math.min(beer.ibu * 1.6, 100)}%` : "0%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ backgroundColor: beer.accentColor }}
                  />
                </div>
                <span
                  className="text-dust/40 shrink-0"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px" }}
                >
                  {beer.ibu}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom note ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-px bg-void border border-steel p-6 text-center"
        >
          <p
            className="text-dust"
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.1em", lineHeight: 1.8 }}
          >
            ¿No podés elegir?{" "}
            <span className="text-ember">Pedí el vuelo de cervezas</span>
            {" "}— 6 muestras de 150ml para descubrir tus favoritas.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
