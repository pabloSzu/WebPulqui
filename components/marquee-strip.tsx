"use client"

const items = [
  "MÚSICA EN VIVO",
  "CERVEZA ARTESANAL",
  "ARTE",
  "COMEDIA",
  "DANZA",
  "CULTURA",
  "NUEVA CÓRDOBA",
  "INDUSTRIA CULTURAL",
]

export function MarqueeStrip() {
  return (
    <div className="bg-ember overflow-hidden py-4 select-none">
      <div className="marquee-track-fast flex items-center">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center shrink-0">
            {items.map((item, j) => (
              <span key={j} className="flex items-center gap-0">
                <span
                  className="text-chalk uppercase whitespace-nowrap px-6"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {item}
                </span>
                <span className="text-chalk/40 text-xs">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
