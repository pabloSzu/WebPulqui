"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram, Music, Beer, Palette, Mic2, Users, Camera } from "lucide-react"

const posts = [
  { label: "Eventos", Icon: Music },
  { label: "Cervezas", Icon: Beer },
  { label: "Arte", Icon: Palette },
  { label: "Shows", Icon: Mic2 },
  { label: "Comunidad", Icon: Users },
  { label: "Momentos", Icon: Camera },
]

export function InstagramSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-smoke">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="border-b border-steel pb-5 mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="section-eyebrow mb-1"
          >
            — 06 —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-[15vw] md:text-[7rem] lg:text-[8.5rem]"
          >
            INSTAGRAM
          </motion.h2>
        </div>

        {/* ── Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-steel mb-8">
          {posts.map((post, i) => {
            const { Icon } = post
            return (
              <motion.a
                key={i}
                href="https://www.instagram.com/pulqui.industriacultural/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="aspect-square bg-void group flex flex-col items-center justify-center gap-3 hover:bg-ember/10 transition-colors duration-300 relative overflow-hidden"
              >
                <Icon
                  size={28}
                  strokeWidth={1}
                  className="text-steel group-hover:text-ember transition-colors duration-300"
                />
                <span
                  className="text-dust group-hover:text-chalk transition-colors duration-300"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.2em" }}
                >
                  {post.label.toUpperCase()}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram size={22} strokeWidth={1.5} className="text-ember" />
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* ── CTA ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-steel p-6"
        >
          <div className="flex items-center gap-3">
            <Instagram size={18} strokeWidth={1.5} className="text-ember" />
            <span
              className="text-chalk"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px", letterSpacing: "0.1em" }}
            >
              @pulqui.industriacultural
            </span>
          </div>
          <a
            href="https://www.instagram.com/pulqui.industriacultural/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember"
          >
            <span>SEGUIR EN INSTAGRAM</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
