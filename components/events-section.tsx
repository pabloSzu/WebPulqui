"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Music, Mic2, Palette, Users } from "lucide-react"
import { useState } from "react"

const upcomingEvents = [
  {
    id: 1,
    title: "Jazz & Blues Night",
    date: "Viernes 18 de Abril",
    time: "21:00 hs",
    type: "Música en Vivo",
    icon: Music,
    description: "Una noche íntima con los mejores sonidos de jazz y blues de la escena local.",
    image: "/event-jazz.jpg",
  },
  {
    id: 2,
    title: "Stand Up Comedy",
    date: "Sábado 19 de Abril",
    time: "22:00 hs",
    type: "Comedia",
    icon: Mic2,
    description: "Los mejores comediantes de Córdoba en una noche de risas y cerveza.",
    image: "/event-comedy.jpg",
  },
  {
    id: 3,
    title: "Expo Arte Emergente",
    date: "Jueves 24 de Abril",
    time: "19:00 hs",
    type: "Arte",
    icon: Palette,
    description: "Muestra colectiva de artistas visuales emergentes de la provincia.",
    image: "/event-art.jpg",
  },
  {
    id: 4,
    title: "Cata de Cervezas",
    date: "Domingo 27 de Abril",
    time: "18:00 hs",
    type: "Degustación",
    icon: Users,
    description: "Descubrí los secretos de nuestras cervezas con el maestro cervecero.",
    image: "/event-tasting.jpg",
  },
]

const eventTypes = ["Todos", "Música en Vivo", "Comedia", "Arte", "Degustación"]

export function EventsSection() {
  const [filter, setFilter] = useState("Todos")

  const filteredEvents = filter === "Todos" 
    ? upcomingEvents 
    : upcomingEvents.filter(e => e.type === filter)

  return (
    <section id="eventos" className="py-24 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Próximos Eventos
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            AGENDA
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Música, arte, comedia y más. Descubrí todo lo que tenemos preparado para vos.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 text-sm tracking-wide transition-all ${
                filter === type
                  ? "bg-amber text-background"
                  : "border border-foreground/20 text-foreground/70 hover:border-amber hover:text-amber"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-charcoal border border-foreground/10 hover:border-amber/40 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Event Image */}
                <div className="sm:w-1/3 h-48 sm:h-auto bg-gradient-to-br from-amber/20 to-rust/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <event.icon className="w-16 h-16 text-amber/40 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Event Details */}
                <div className="sm:w-2/3 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-wider text-amber bg-amber/10 px-3 py-1">
                      {event.type.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-amber transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-foreground/50">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-block px-8 py-4 border border-amber text-amber font-semibold tracking-wide hover:bg-amber hover:text-background transition-colors"
          >
            RESERVAR PARA UN EVENTO
          </a>
        </motion.div>
      </div>
    </section>
  )
}
