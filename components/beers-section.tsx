"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const beers = [
  {
    id: 1,
    name: "Pampa Dorada",
    style: "Golden Ale",
    abv: "5.2%",
    ibu: "18",
    description: "Suave y refrescante, con notas a miel y un final limpio. Ideal para empezar la noche.",
    color: "from-yellow-300 to-amber-400",
    tags: ["Suave", "Refrescante"],
  },
  {
    id: 2,
    name: "Tormenta Roja",
    style: "Irish Red Ale",
    abv: "5.8%",
    ibu: "25",
    description: "Equilibrada con caramelo, tostados suaves y un toque de malta. Cuerpo medio con final seco.",
    color: "from-orange-500 to-red-700",
    tags: ["Equilibrada", "Maltosa"],
  },
  {
    id: 3,
    name: "Noche Negra",
    style: "Stout",
    abv: "6.5%",
    ibu: "35",
    description: "Intensa con café, chocolate amargo y un toque ahumado. Para los que buscan profundidad.",
    color: "from-stone-800 to-stone-950",
    tags: ["Intensa", "Compleja"],
  },
  {
    id: 4,
    name: "Cielo IPA",
    style: "American IPA",
    abv: "6.8%",
    ibu: "55",
    description: "Explosión de cítricos y frutas tropicales. Amargor pronunciado pero balanceado.",
    color: "from-amber-400 to-orange-500",
    tags: ["Lupulada", "Cítrica"],
  },
  {
    id: 5,
    name: "Brisa de Trigo",
    style: "Hefeweizen",
    abv: "4.9%",
    ibu: "12",
    description: "Clásica alemana con banana, clavo de olor y una textura sedosa. Perfecta para el verano.",
    color: "from-yellow-200 to-yellow-400",
    tags: ["Frutal", "Sedosa"],
  },
  {
    id: 6,
    name: "Fuego del Sur",
    style: "Chile Ale",
    abv: "5.5%",
    ibu: "20",
    description: "Nuestra especial con ají. Empieza suave y termina con un calor que invita a otro sorbo.",
    color: "from-red-500 to-red-800",
    tags: ["Especial", "Picante"],
  },
]

export function BeersSection() {
  const [selectedBeer, setSelectedBeer] = useState(beers[0])

  return (
    <section id="cervezas" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--amber)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Nuestras Cervezas
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            DE LA CANILLA A TU VASO
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Elaboramos todas nuestras cervezas en el mismo lugar donde las servimos. 
            Frescura y sabor garantizados en cada pinta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Beer List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-2"
          >
            {beers.map((beer) => (
              <button
                key={beer.id}
                onClick={() => setSelectedBeer(beer)}
                className={`w-full text-left p-4 transition-all ${
                  selectedBeer.id === beer.id
                    ? "bg-background border-l-4 border-amber"
                    : "bg-background/50 border-l-4 border-transparent hover:bg-background hover:border-foreground/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-semibold ${selectedBeer.id === beer.id ? "text-amber" : "text-foreground"}`}>
                      {beer.name}
                    </h3>
                    <p className="text-sm text-foreground/50">{beer.style}</p>
                  </div>
                  <span className="text-sm text-foreground/40">{beer.abv}</span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Selected Beer Detail */}
          <motion.div
            key={selectedBeer.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 bg-background border border-foreground/10 p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Beer Glass Visualization */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-48 rounded-b-full border-4 border-foreground/20 relative overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "85%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${selectedBeer.color}`}
                    >
                      {/* Foam */}
                      <div className="absolute -top-3 left-0 right-0 h-6 bg-cream rounded-full opacity-90" />
                    </motion.div>
                  </div>
                  {/* Glass base */}
                  <div className="w-20 h-2 bg-foreground/20 rounded-full mx-auto mt-1" />
                </div>
              </div>

              {/* Beer Info */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedBeer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wider text-amber bg-amber/10 px-3 py-1"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-4xl md:text-5xl text-foreground mb-2">
                  {selectedBeer.name}
                </h3>
                <p className="text-amber text-lg mb-6">{selectedBeer.style}</p>

                <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                  {selectedBeer.description}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-charcoal p-4">
                    <div className="text-2xl font-display text-amber">{selectedBeer.abv}</div>
                    <div className="text-sm text-foreground/50">Alcohol</div>
                  </div>
                  <div className="bg-charcoal p-4">
                    <div className="text-2xl font-display text-amber">{selectedBeer.ibu}</div>
                    <div className="text-sm text-foreground/50">IBU (Amargor)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-background/50 border border-foreground/10"
        >
          <p className="text-foreground/60 mb-4">
            ¿Querés probarlas todas? Preguntá por nuestro <span className="text-amber">vuelo de cervezas</span>: 
            6 muestras de 150ml para descubrir tus favoritas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
