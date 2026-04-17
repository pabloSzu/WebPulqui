"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

const eventsData: Record<string, { title: string; type: string }[]> = {
  "2026-04-17": [{ title: "Noche de Folk", type: "Música" }],
  "2026-04-18": [{ title: "Jazz & Blues Night", type: "Música" }],
  "2026-04-19": [{ title: "Stand Up Comedy", type: "Comedia" }],
  "2026-04-24": [{ title: "Expo Arte Emergente", type: "Arte" }],
  "2026-04-25": [{ title: "DJ Set Electrónico", type: "Música" }],
  "2026-04-27": [{ title: "Cata de Cervezas", type: "Degustación" }],
}

export function CalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)) // April 2026
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
    setSelectedDate(null)
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
    setSelectedDate(null)
  }

  const formatDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const selectedEvents = selectedDate ? eventsData[selectedDate] || [] : []

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Calendario
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
            PLANIFICÁ TU VISITA
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-foreground/10 p-6 md:p-8"
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevMonth}
              className="p-2 text-foreground/60 hover:text-amber transition-colors"
              aria-label="Mes anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 text-foreground/60 hover:text-amber transition-colors"
              aria-label="Mes siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-sm text-foreground/40 py-2 font-medium"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="aspect-square" />
              }

              const dateKey = formatDateKey(day)
              const hasEvents = eventsData[dateKey]
              const isSelected = selectedDate === dateKey
              const isToday = dateKey === "2026-04-17"

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(dateKey)}
                  className={`aspect-square flex flex-col items-center justify-center relative transition-all ${
                    isSelected
                      ? "bg-amber text-background"
                      : isToday
                      ? "bg-amber/20 text-amber"
                      : hasEvents
                      ? "bg-charcoal hover:bg-amber/10"
                      : "hover:bg-charcoal"
                  }`}
                >
                  <span className={`text-sm md:text-base ${!isSelected && !isToday ? "text-foreground" : ""}`}>
                    {day}
                  </span>
                  {hasEvents && !isSelected && (
                    <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-amber" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Selected Date Events */}
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 pt-6 border-t border-foreground/10"
            >
              {selectedEvents.length > 0 ? (
                <div className="space-y-3">
                  {selectedEvents.map((event, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-charcoal"
                    >
                      <div>
                        <h4 className="font-medium text-foreground">{event.title}</h4>
                        <span className="text-sm text-amber">{event.type}</span>
                      </div>
                      <button className="px-4 py-2 text-sm border border-amber text-amber hover:bg-amber hover:text-background transition-colors">
                        INFO
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-foreground/50 text-center py-4">
                  No hay eventos programados para este día.
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
