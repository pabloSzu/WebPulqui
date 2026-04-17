"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const menuCategories = [
  {
    name: "Para Picar",
    items: [
      { name: "Papas Rústicas", description: "Con cheddar fundido, panceta y ciboulette", price: "$4.500" },
      { name: "Nachos Cargados", description: "Guacamole, pico de gallo, crema y jalapeños", price: "$5.200" },
      { name: "Tabla de Fiambres", description: "Selección de quesos y embutidos artesanales", price: "$8.500" },
      { name: "Bastones de Mozzarella", description: "Con salsa marinara casera", price: "$4.800" },
      { name: "Aros de Cebolla", description: "Crocantes con dip de cerveza negra", price: "$3.900" },
    ],
  },
  {
    name: "Hamburguesas",
    items: [
      { name: "La Clásica", description: "200g de carne, cheddar, lechuga, tomate, cebolla caramelizada", price: "$7.200" },
      { name: "La Pulqui", description: "Doble carne, bacon, huevo frito, BBQ ahumada", price: "$9.500" },
      { name: "Veggie Burger", description: "Medallón de lentejas y hongos, queso azul, rúcula", price: "$6.800" },
      { name: "La Picante", description: "Carne, pepper jack, jalapeños, salsa sriracha", price: "$8.200" },
    ],
  },
  {
    name: "Sándwiches",
    items: [
      { name: "Club Sandwich", description: "Pollo, bacon, huevo, lechuga, tomate, mayonesa", price: "$6.500" },
      { name: "Bondiola Braseada", description: "12 horas de cocción, coleslaw, BBQ", price: "$7.800" },
      { name: "Veggie Wrap", description: "Verduras grilladas, hummus, queso de cabra", price: "$5.900" },
    ],
  },
  {
    name: "Dulce",
    items: [
      { name: "Brownie Tibio", description: "Con helado de vainilla y salsa de chocolate", price: "$4.200" },
      { name: "Cheesecake del Día", description: "Consultá el sabor de la semana", price: "$3.800" },
      { name: "Churros con Dulce de Leche", description: "6 unidades con chocolate caliente", price: "$3.500" },
    ],
  },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name)

  const currentCategory = menuCategories.find((c) => c.name === activeCategory)

  return (
    <section id="carta" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Nuestra Carta
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            PARA ACOMPAÑAR
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Comida pensada para compartir y para maridar con nuestras cervezas. 
            Todo hecho en casa, con ingredientes frescos.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 text-sm tracking-wide transition-all ${
                activeCategory === category.name
                  ? "bg-amber text-background"
                  : "border border-foreground/20 text-foreground/70 hover:border-amber hover:text-amber"
              }`}
            >
              {category.name.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1"
        >
          {currentCategory?.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-charcoal hover:bg-charcoal/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent hover:border-amber transition-all"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-amber transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-foreground/50 mt-1">{item.description}</p>
              </div>
              <div className="font-display text-2xl text-amber">{item.price}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/40 mt-12"
        >
          * Los precios pueden variar. Consultá por opciones sin TACC y veganas.
        </motion.p>
      </div>
    </section>
  )
}
