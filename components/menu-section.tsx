"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const menuCategories = [
  {
    name: "PARA PICAR",
    items: [
      { name: "Papas Rústicas",       description: "Cheddar fundido, panceta, ciboulette",         price: "$4.500" },
      { name: "Nachos Cargados",      description: "Guacamole, pico de gallo, crema, jalapeños",   price: "$5.200" },
      { name: "Tabla de Fiambres",    description: "Selección de quesos y embutidos artesanales",  price: "$8.500" },
      { name: "Bastones de Mozzarella", description: "Salsa marinara casera",                      price: "$4.800" },
      { name: "Aros de Cebolla",      description: "Crocantes con dip de cerveza negra",           price: "$3.900" },
    ],
  },
  {
    name: "HAMBURGUESAS",
    items: [
      { name: "La Clásica",   description: "200g de carne, cheddar, lechuga, tomate, cebolla caramelizada", price: "$7.200" },
      { name: "La Pulqui",    description: "Doble carne, bacon, huevo frito, BBQ ahumada",                  price: "$9.500" },
      { name: "Veggie Burger",description: "Medallón de lentejas y hongos, queso azul, rúcula",             price: "$6.800" },
      { name: "La Picante",   description: "Carne, pepper jack, jalapeños, salsa sriracha",                 price: "$8.200" },
    ],
  },
  {
    name: "SÁNDWICHES",
    items: [
      { name: "Club Sandwich",    description: "Pollo, bacon, huevo, lechuga, tomate, mayonesa", price: "$6.500" },
      { name: "Bondiola Braseada",description: "12 horas de cocción, coleslaw, BBQ",             price: "$7.800" },
      { name: "Veggie Wrap",      description: "Verduras grilladas, hummus, queso de cabra",     price: "$5.900" },
    ],
  },
  {
    name: "DULCE",
    items: [
      { name: "Brownie Tibio",              description: "Con helado de vainilla y salsa de chocolate", price: "$4.200" },
      { name: "Cheesecake del Día",         description: "Consultá el sabor de la semana",              price: "$3.800" },
      { name: "Churros con Dulce de Leche", description: "6 unidades con chocolate caliente",           price: "$3.500" },
    ],
  },
]

export function MenuSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [active, setActive] = useState(menuCategories[0].name)

  const current = menuCategories.find((c) => c.name === active)!

  return (
    <section id="carta" ref={ref} className="py-24 md:py-32 bg-void">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="border-b border-steel pb-5 mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="section-eyebrow mb-1"
          >
            — 05 —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-[15vw] md:text-[7rem] lg:text-[8.5rem]"
          >
            CARTA
          </motion.h2>
        </div>

        {/* ── Category tabs ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-px bg-steel mb-px"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`flex-1 py-3 px-4 min-w-fit transition-colors duration-200 ${
                active === cat.name
                  ? "bg-ember text-chalk"
                  : "bg-smoke text-dust hover:text-chalk hover:bg-void"
              }`}
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.2em" }}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* ── Items list ─────────────────────────────────────── */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="divide-y divide-steel bg-smoke"
        >
          {current.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between gap-4 p-6 hover:bg-void transition-colors duration-200 border-l-2 border-transparent hover:border-ember"
            >
              <div className="flex-1 min-w-0">
                <h3
                  className="text-chalk group-hover:text-ember transition-colors duration-200 leading-none"
                  style={{ fontFamily: "var(--font-bebas)", fontSize: "1.15rem", letterSpacing: "0.04em" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-dust mt-1.5 truncate"
                  style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.08em" }}
                >
                  {item.description}
                </p>
              </div>
              <div
                className="text-ember shrink-0"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "1.3rem", letterSpacing: "0.03em" }}
              >
                {item.price}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Disclaimer ─────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-dust"
          style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", letterSpacing: "0.1em" }}
        >
          * Precios sujetos a cambios. Consultá por opciones sin TACC y veganas.
        </motion.p>

      </div>
    </section>
  )
}
