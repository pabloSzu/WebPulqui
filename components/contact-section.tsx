"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react"

const contactInfo = [
  { Icon: MapPin, label: "UBICACIÓN",  value: "Av. Hipólito Yrigoyen 350\nNueva Córdoba, Córdoba" },
  { Icon: Clock,  label: "HORARIOS",   value: "Martes — Domingo\n18:00 — 02:00" },
  { Icon: Phone,  label: "TELÉFONO",   value: "+54 351 456 7890" },
  { Icon: Mail,   label: "EMAIL",      value: "hola@pulqui.bar" },
]

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  const inputClass =
    "w-full px-4 py-3 bg-void border border-steel text-chalk placeholder-dust/40 focus:border-ember focus:outline-none transition-colors duration-200"

  const labelClass = "block mb-2 text-dust"

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32 bg-void">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="border-b border-steel pb-5 mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="section-eyebrow mb-1"
          >
            — 07 —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-[15vw] md:text-[7rem] lg:text-[8.5rem]"
          >
            CONTACTO
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: info ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="aspect-video bg-smoke border border-steel flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin size={32} strokeWidth={1} className="text-ember/30 mx-auto mb-3" />
                <p
                  className="text-dust text-center"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.15em", lineHeight: 2 }}
                >
                  AV. HIPÓLITO YRIGOYEN 350<br />
                  NUEVA CÓRDOBA, CÓRDOBA
                </p>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-void/60 to-transparent pointer-events-none" />
            </div>

            {/* Contact grid */}
            <div className="grid sm:grid-cols-2 gap-px bg-steel">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="bg-smoke p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={13} strokeWidth={1.5} className="text-ember" />
                    <span
                      className="text-ember"
                      style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.3em" }}
                    >
                      {label}
                    </span>
                  </div>
                  <p
                    className="text-chalk whitespace-pre-line"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", lineHeight: 1.9 }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5493514567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#1db954] transition-colors duration-200"
            >
              <MessageCircle size={16} strokeWidth={1.5} className="text-white" />
              <span
                className="text-white"
                style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.25em" }}
              >
                ESCRIBINOS POR WHATSAPP
              </span>
            </a>
          </motion.div>

          {/* ── Right: form ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="h-full min-h-[400px] flex items-center justify-center bg-smoke border border-steel p-12">
                <div className="text-center">
                  <div className="w-12 h-12 border border-ember flex items-center justify-center mx-auto mb-6">
                    <Mail size={20} strokeWidth={1.5} className="text-ember" />
                  </div>
                  <h3
                    className="text-chalk mb-3"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", letterSpacing: "0.05em" }}
                  >
                    MENSAJE ENVIADO
                  </h3>
                  <p
                    className="text-dust mb-6"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", lineHeight: 1.8 }}
                  >
                    Gracias por escribirnos.<br />Te respondemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-ember hover:text-chalk transition-colors"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    ENVIAR OTRO MENSAJE
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-smoke border border-steel p-8 space-y-5"
              >
                <h3
                  className="text-chalk mb-2"
                  style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", letterSpacing: "0.05em" }}
                >
                  ENVIANOS UN MENSAJE
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    NOMBRE *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Tu nombre"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="tu@email.com"
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    ASUNTO
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px" }}
                  >
                    <option value="">Seleccioná un asunto</option>
                    <option value="evento">Propuesta de evento</option>
                    <option value="arte">Propuesta artística</option>
                    <option value="consulta">Consulta general</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    MENSAJE *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Contanos en qué podemos ayudarte..."
                    style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-ember hover:bg-[#bf3309] text-chalk transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.25em" }}
                >
                  {submitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
