"use client"

import { Instagram, Facebook } from "lucide-react"

const navLinks = [
  { label: "AGENDA",   href: "#agenda" },
  { label: "ESPACIO",  href: "#espacio" },
  { label: "CERVEZAS", href: "#cervezas" },
  { label: "CARTA",    href: "#carta" },
  { label: "CONTACTO", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="bg-smoke border-t border-steel">
      {/* ── Main footer ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <div
              className="text-chalk text-4xl tracking-widest mb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              PULQUI
            </div>
            <p
              className="text-dust leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.1em", lineHeight: 2 }}
            >
              Bar, cervecería artesanal<br />
              y espacio cultural.<br />
              Córdoba, Argentina.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/pulqui.industriacultural/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-steel flex items-center justify-center text-dust hover:border-ember hover:text-ember transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-steel flex items-center justify-center text-dust hover:border-ember hover:text-ember transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-ember mb-5"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.4em" }}
            >
              SECCIONES
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-dust hover:text-chalk transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", letterSpacing: "0.2em" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <p
              className="text-ember mb-5"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.4em" }}
            >
              INFORMACIÓN
            </p>
            <div className="space-y-4">
              <div>
                <p
                  className="text-chalk"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", lineHeight: 1.9 }}
                >
                  Av. Hipólito Yrigoyen 350<br />
                  Nueva Córdoba, Córdoba
                </p>
              </div>
              <div>
                <p
                  className="text-chalk"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", lineHeight: 1.9 }}
                >
                  Mar — Dom&nbsp;&nbsp;18:00 — 02:00<br />
                  <span className="text-dust">Cerrado los lunes</span>
                </p>
              </div>
              <div>
                <a
                  href="mailto:hola@pulqui.bar"
                  className="text-dust hover:text-ember transition-colors"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px" }}
                >
                  hola@pulqui.bar
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="border-t border-steel">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-dust/50"
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.15em" }}
          >
            © 2026 PULQUI INDUSTRIA CULTURAL — TODOS LOS DERECHOS RESERVADOS
          </p>
          <p
            className="text-dust/40"
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", letterSpacing: "0.1em" }}
          >
            BEBER CON MODERACIÓN — PROHIBIDA LA VENTA A MENORES
          </p>
        </div>
      </div>
    </footer>
  )
}
