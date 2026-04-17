"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Music2, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Eventos", href: "#eventos" },
  { name: "Espacio", href: "#espacio" },
  { name: "Cervezas", href: "#cervezas" },
  { name: "Carta", href: "#carta" },
  { name: "Contacto", href: "#contacto" },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/pulqui.bar" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/pulquibar" },
  { name: "Spotify", icon: Music2, href: "https://spotify.com/pulqui" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#inicio" className="font-display text-4xl text-amber tracking-wider">
              PULQUI
            </Link>
            <p className="text-foreground/50 mt-4 text-sm leading-relaxed">
              Cervecería artesanal y espacio cultural en el corazón de Nueva Córdoba. 
              Un lugar donde la buena cerveza se encuentra con el arte.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4 tracking-wide">NAVEGACIÓN</h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/50 hover:text-amber transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4 tracking-wide">CONTACTO</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-foreground/50 hover:text-amber transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Av. Hipólito Yrigoyen 350, Nueva Córdoba</span>
              </a>
              <a
                href="tel:+543514567890"
                className="flex items-center gap-3 text-foreground/50 hover:text-amber transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+54 351 456 7890</span>
              </a>
              <a
                href="mailto:hola@pulqui.bar"
                className="flex items-center gap-3 text-foreground/50 hover:text-amber transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hola@pulqui.bar</span>
              </a>
            </div>
          </motion.div>

          {/* Social & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4 tracking-wide">HORARIOS</h3>
            <div className="text-sm text-foreground/50 mb-6">
              <p>Martes a Jueves: 18:00 - 01:00</p>
              <p>Viernes y Sábado: 18:00 - 02:00</p>
              <p>Domingo: 18:00 - 00:00</p>
              <p className="text-amber mt-2">Lunes cerrado</p>
            </div>

            <h3 className="font-semibold text-foreground mb-4 tracking-wide">SEGUINOS</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/50 flex items-center justify-center text-foreground/50 hover:bg-amber hover:text-background transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-foreground/40">
            &copy; 2026 PULQUI. Todos los derechos reservados.
          </p>
          <p className="text-sm text-foreground/40">
            Beber con moderación. Prohibida la venta a menores de 18 años.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
