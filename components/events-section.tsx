"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Music, Laugh, Palette, GlassWater, CalendarDays } from "lucide-react"

const events = [
  {
    id: "01",
    date: { day: "18", month: "ABR" },
    title: "JAZZ & BLUES NIGHT",
    description: "Banda invitada: Los Nocturnos",
    time: "21:00",
    category: "MÚSICA",
    Icon: Music,
  },
  {
    id: "02",
    date: { day: "19", month: "ABR" },
    title: "STAND UP COMEDY",
    description: "Noche de humor con artistas locales",
    time: "22:00",
    category: "COMEDIA",
    Icon: Laugh,
  },
  {
    id: "03",
    date: { day: "24", month: "ABR" },
    title: "EXPO ARTE EMERGENTE",
    description: "Inauguración con artistas de Córdoba",
    time: "19:00",
    category: "ARTE",
    Icon: Palette,
  },
  {
    id: "04",
    date: { day: "27", month: "ABR" },
    title: "CATA DE CERVEZAS",
    description: "Guiada por nuestros maestros cerveceros",
    time: "18:00",
    category: "DEGUSTACIÓN",
    Icon: GlassWater,
  },
]

export function EventsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="agenda" ref={ref} className="py-24 md:py-32 bg-void">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="flex items-end justify-between mb-14 pb-5 border-b border-steel">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="section-eyebrow mb-1"
            >
              — 01 —
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading text-[13vw] sm:text-[14vw] md:text-[7rem] lg:text-[8.5rem]"
            >
              AGENDA
            </motion.h2>
          </div>

          <motion.a
            href="#calendario"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-2 text-dust hover:text-ember transition-colors mb-3"
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.25em" }}
          >
            <CalendarDays size={13} />
            VER CALENDARIO
          </motion.a>
        </div>

        {/* ── Events list ────────────────────────────────────── */}
        <div className="divide-y divide-steel">
          {events.map((event, i) => {
            const { Icon } = event
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-5 md:gap-10 py-6 md:py-7 hover:bg-smoke/60 -mx-4 px-4 transition-colors duration-300"
              >
                {/* Row number */}
                <span
                  className="text-dust/35 w-7 shrink-0 hidden sm:block"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.15em" }}
                >
                  {event.id}
                </span>

                {/* Date */}
                <div className="shrink-0 w-12 md:w-16 text-center">
                  <div
                    className="text-chalk group-hover:text-ember transition-colors duration-300 leading-none"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
                  >
                    {event.date.day}
                  </div>
                  <div
                    className="text-dust mt-0.5"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.15em" }}
                  >
                    {event.date.month}
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="w-px h-10 bg-steel shrink-0" />

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3
                      className="text-chalk group-hover:text-ember transition-colors duration-300 leading-none"
                      style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.3rem, 3.5vw, 2rem)", letterSpacing: "0.04em" }}
                    >
                      {event.title}
                    </h3>
                    {/* Category badge — visible on mobile, hidden on sm+ where the right column shows */}
                    <span
                      className="text-ember border border-ember/30 px-1.5 py-0.5 sm:hidden shrink-0"
                      style={{ fontFamily: "var(--font-space-mono)", fontSize: "8px", letterSpacing: "0.15em" }}
                    >
                      {event.category}
                    </span>
                  </div>
                  <p
                    className="text-dust mt-1.5 line-clamp-1"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.1em" }}
                  >
                    {event.description}
                  </p>
                </div>

                {/* Time + category — desktop only */}
                <div className="shrink-0 text-right hidden sm:block">
                  <div className="flex items-center gap-1.5 justify-end">
                    <Clock size={10} className="text-dust" />
                    <span
                      className="text-dust"
                      style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px" }}
                    >
                      {event.time}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span
                      className="text-ember border border-ember/30 px-2 py-0.5"
                      style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Decorative icon */}
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="text-steel group-hover:text-ember/50 transition-colors duration-300 shrink-0 hidden lg:block"
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
