"use client"

import { motion } from "framer-motion"
import { Instagram, Music, Beer, Palette, Mic2, Users, Sparkles } from "lucide-react"

const instagramPosts = [
  { id: 1, icon: Music, type: "Evento", color: "from-amber/30 to-rust/30" },
  { id: 2, icon: Beer, type: "Cerveza", color: "from-yellow-500/20 to-amber/20" },
  { id: 3, icon: Palette, type: "Arte", color: "from-rust/30 to-red-800/30" },
  { id: 4, icon: Mic2, type: "Comedia", color: "from-amber/20 to-yellow-600/20" },
  { id: 5, icon: Users, type: "Comunidad", color: "from-charcoal to-background" },
  { id: 6, icon: Sparkles, type: "Momentos", color: "from-amber/40 to-rust/20" },
]

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Seguinos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-4">
            @PULQUI.BAR
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Unite a nuestra comunidad. Compartimos momentos, anunciamos eventos y mostramos lo que pasa detrás de escena.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/pulqui.bar"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`aspect-square bg-gradient-to-br ${post.color} relative group overflow-hidden`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <post.icon className="w-8 h-8 text-foreground/30 group-hover:text-amber transition-colors" />
                <span className="text-xs text-foreground/30 mt-2 group-hover:text-amber transition-colors">
                  {post.type}
                </span>
              </div>
              <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Instagram className="w-8 h-8 text-foreground" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/pulqui.bar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-amber text-amber font-semibold tracking-wide hover:bg-amber hover:text-background transition-colors"
          >
            <Instagram className="w-5 h-5" />
            SEGUIR EN INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  )
}
