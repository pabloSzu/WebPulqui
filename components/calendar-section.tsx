"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const daysOfWeek    = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
const daysOfWeekMin = ["D",   "L",   "M",   "M",   "J",   "V",   "S"]

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

const eventsData: Record<string, { title: string; type: string }[]> = {
  "2026-04-17": [{ title: "Noche de Folk", type: "Música" }],
  "2026-04-18": [{ title: "Jazz & Blues Night", type: "Música" }],
  "2026-04-19": [{ title: "Stand Up Comedy", type: "Comedia" }],
  "2026-04-24": [{ title: "Expo Arte Emergente", type: "Arte" }],
  "2026-04-25": [{ title: "DJ Set Electrónico", type: "Música" }],
  "2026-04-27": [{ title: "Cata de Cervezas", type: "Degustación" }],
}

const typeColors: Record<string, string> = {
  Música: "#E03D0E",
  Comedia: "#C07A08",
  Arte: "#8B6FD4",
  Degustación: "#2A9D5C",
}

export function CalendarSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1))
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevMonth = () => { setCurrentDate(new Date(year, month - 1, 1)); setSelectedDate(null) }
  const nextMonth = () => { setCurrentDate(new Date(year, month + 1, 1)); setSelectedDate(null) }

  const formatKey = (day: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

  const days: (number | null)[] = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const selectedEvents = selectedDate ? eventsData[selectedDate] ?? [] : []

  return (
    <section id="calendario" ref={ref} className="py-24 md:py-32 bg-smoke">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="border-b border-steel pb-5 mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="section-eyebrow mb-1"
          >
            — 02 —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-[13vw] sm:text-[14vw] md:text-[7rem] lg:text-[8.5rem]"
          >
            CALENDARIO
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-steel bg-void p-6 md:p-10"
        >
          {/* Month nav */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevMonth}
              className="p-2 text-dust hover:text-ember transition-colors"
              aria-label="Mes anterior"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <h3
              className="text-chalk tracking-widest"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              {monthNames[month]} {year}
            </h3>

            <button
              onClick={nextMonth}
              className="p-2 text-dust hover:text-ember transition-colors"
              aria-label="Mes siguiente"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-2">
            {daysOfWeek.map((d, i) => (
              <div
                key={d}
                className="text-center py-2 text-dust"
                style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.1em" }}
              >
                <span className="hidden sm:inline">{d}</span>
                <span className="sm:hidden">{daysOfWeekMin[i]}</span>
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-px bg-steel" style={{ gridAutoRows: "minmax(2.75rem, 1fr)" }}>
            {days.map((day, idx) => {
              if (day === null) {
                return <div key={`e-${idx}`} className="bg-void" />
              }

              const key = formatKey(day)
              const hasEvents = !!eventsData[key]
              const isSelected = selectedDate === key
              const isToday = key === "2026-04-17"

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(isSelected ? null : key)}
                  className={`flex flex-col items-center justify-center relative transition-all duration-200 ${
                    isSelected
                      ? "bg-ember"
                      : isToday
                      ? "bg-ember/15"
                      : hasEvents
                      ? "bg-void hover:bg-smoke"
                      : "bg-void hover:bg-smoke/60"
                  }`}
                >
                  <span
                    className={
                      isSelected
                        ? "text-chalk"
                        : isToday
                        ? "text-ember"
                        : "text-chalk/80"
                    }
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)" }}
                  >
                    {day}
                  </span>
                  {hasEvents && !isSelected && (
                    <span
                      className="absolute bottom-1.5 w-1 h-1 rounded-full"
                      style={{ background: isToday ? "var(--ember)" : "var(--ember)" }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Selected events */}
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-steel overflow-hidden"
            >
              {selectedEvents.length > 0 ? (
                <div className="space-y-3">
                  {selectedEvents.map((ev, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-smoke border-l-2"
                      style={{ borderLeftColor: typeColors[ev.type] ?? "var(--ember)" }}
                    >
                      <div>
                        <h4
                          className="text-chalk"
                          style={{ fontFamily: "var(--font-bebas)", fontSize: "1.1rem", letterSpacing: "0.05em" }}
                        >
                          {ev.title}
                        </h4>
                        <span
                          className="text-dust"
                          style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.15em" }}
                        >
                          {ev.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className="text-dust text-center py-4"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  SIN EVENTOS ESTE DÍA
                </p>
              )}
            </motion.div>
          )}

          {/* Legend */}
          <div className="mt-6 pt-5 border-t border-steel flex flex-wrap gap-5">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                <span
                  className="text-dust"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.15em" }}
                >
                  {type.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
