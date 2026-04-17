"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            VENÍ A VISITARNOS
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            ¿Tenés una consulta, querés reservar para un grupo grande o proponer un evento? 
            Escribinos y te respondemos a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="aspect-video bg-charcoal relative overflow-hidden border border-foreground/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-amber/40 mx-auto mb-4" />
                  <p className="text-foreground/40 text-sm">
                    Av. Hipólito Yrigoyen 350<br />
                    Nueva Córdoba, Córdoba
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-sm text-foreground/50">
                    Av. Hipólito Yrigoyen 350<br />
                    Nueva Córdoba, Córdoba
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horarios</h3>
                  <p className="text-sm text-foreground/50">
                    Martes a Domingo<br />
                    18:00 - 02:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                  <p className="text-sm text-foreground/50">
                    +54 351 456 7890
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-foreground/50">
                    hola@pulqui.bar
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5493514567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              ESCRIBINOS POR WHATSAPP
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-charcoal border border-foreground/10 p-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-amber" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    Mensaje Enviado
                  </h3>
                  <p className="text-foreground/60">
                    Gracias por escribirnos. Te responderemos pronto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-amber hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-charcoal border border-foreground/10 p-8">
                <h3 className="font-display text-2xl text-foreground mb-6">
                  ENVIANOS UN MENSAJE
                </h3>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground/60 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-foreground/10 text-foreground focus:border-amber focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground/60 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-foreground/10 text-foreground focus:border-amber focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-foreground/60 mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-foreground/10 text-foreground focus:border-amber focus:outline-none transition-colors"
                    >
                      <option value="">Seleccioná un asunto</option>
                      <option value="reserva">Reserva para grupo</option>
                      <option value="evento">Propuesta de evento</option>
                      <option value="consulta">Consulta general</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-foreground/60 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-foreground/10 text-foreground focus:border-amber focus:outline-none transition-colors resize-none"
                      placeholder="Contanos en qué podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-amber text-background font-semibold tracking-wide hover:bg-amber-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
