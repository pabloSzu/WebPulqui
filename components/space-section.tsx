"use client"

import { motion } from "framer-motion"
import { Users, Music, Palette, Clock, MapPin, Sparkles } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Capacidad",
    description: "Espacio para 120 personas con ambientes diferenciados",
  },
  {
    icon: Music,
    title: "Escenario",
    description: "Escenario equipado para bandas y artistas en vivo",
  },
  {
    icon: Palette,
    title: "Galería",
    description: "Muros destinados a exposiciones rotativas de arte",
  },
  {
    icon: Sparkles,
    title: "Ambiente",
    description: "Diseño industrial con toques cálidos y acogedores",
  },
]

const stats = [
  { value: "2019", label: "Año de apertura" },
  { value: "12", label: "Canillas de cerveza" },
  { value: "500+", label: "Eventos realizados" },
  { value: "∞", label: "Buenas historias" },
]

export function SpaceSection() {
  return (
    <section id="espacio" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestro Espacio
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wider mb-6">
              MÁS QUE UN BAR
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed mb-8">
              PULQUI nació de la idea de crear un espacio donde la cerveza artesanal 
              se encontrara con la cultura. Un lugar para disfrutar de buena música, 
              descubrir arte emergente, y conectar con personas que comparten la pasión 
              por lo auténtico.
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed mb-10">
              Ubicados en el corazón de Nueva Córdoba, nuestro espacio combina la estética 
              industrial con la calidez de un lugar pensado para quedarse.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-foreground/50">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber/20 to-rust/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-amber/20">P</span>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-charcoal to-background border border-foreground/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music className="w-12 h-12 text-amber/30" />
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-gradient-to-br from-rust/20 to-amber/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="w-12 h-12 text-amber/30" />
                </div>
              </div>
              <div className="aspect-[4/5] bg-gradient-to-br from-charcoal to-background border border-foreground/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-amber/20">Q</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-foreground/10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-amber mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/50 tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-foreground/50"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber" />
            <span>Av. Hipólito Yrigoyen 350, Nueva Córdoba</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber" />
            <span>Mar a Dom: 18:00 - 02:00</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
