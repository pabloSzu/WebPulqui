"use client"

import { useId } from "react"
import { motion } from "framer-motion"

// preserveAspectRatio="none" → SVG stretches to fill the container exactly,
// so the path always goes from the very left edge (P) to the right edge (I).
// ViewBox is deliberately wide (1000×120) to keep the plane shape reasonable.
//
// Path: straight right from x=48 to x=912, then curve up to (958, 38).
// At start the plane points right (+X). At end it points up → the dot of the I.
const PATH = "M 48,82 L 912,82 C 942,82 958,65 958,35"

export function PaperPlaneLogo({ className }: { className?: string }) {
  const uid       = useId().replace(/[^a-z0-9]/gi, "")
  const pathId    = `pl-p-${uid}`
  const trailGlow = `pl-tg-${uid}`
  const planeGlow = `pl-pg-${uid}`

  return (
    <svg
      viewBox="0 0 1000 120"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <path id={pathId} d={PATH} />

        <filter id={trailGlow} x="-2%" y="-80%" width="104%" height="260%">
          <feGaussianBlur stdDeviation="3" in="SourceGraphic" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id={planeGlow} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" in="SourceGraphic" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ghost path — faint full trajectory */}
      <use href={`#${pathId}`} stroke="#E03D0E" strokeWidth="1.5" fill="none" opacity="0.07" />

      {/* Animated trail — draws once, stays */}
      <motion.path
        d={PATH}
        stroke="#E03D0E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${trailGlow})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 2.6, ease: [0.25, 0, 0.1, 1], delay: 0.2 },
          opacity:    { duration: 0.3, delay: 0.2 },
        }}
      />

      {/*
        Plane points RIGHT (+X) → rotate="auto" keeps nose forward.
        3× scale so it's visible but not oversize.
        Nose:       ( 30,   0)
        Top wing:   (-20, -22)
        Tail notch: (-10,   0)
        Bot wing:   (-20, +22)
      */}
      <g filter={`url(#${planeGlow})`}>
        <path d="M 30,0 L -20,-22 L -10,0 Z" fill="#E03D0E" fillOpacity="0.95" />
        <path d="M 30,0 L -20, 22 L -10,0 Z" fill="#E03D0E" fillOpacity="0.6"  />
        <line x1="30" y1="0" x2="-20" y2="0" stroke="white" strokeWidth="1.2" strokeOpacity="0.22" />
        <circle cx="30" cy="0" r="3.5" fill="white" fillOpacity="0.85" />

        <animateMotion
          dur="2.6s"
          begin="0.2s"
          repeatCount="1"
          fill="freeze"
          rotate="auto"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.25 0 0.1 1"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </g>
    </svg>
  )
}
