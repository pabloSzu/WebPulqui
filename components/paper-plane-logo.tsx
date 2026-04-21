"use client"

import { useId } from "react"
import { motion } from "framer-motion"

// Arc from left (P) to right (I) — peaks in the center above the letters.
// Tangent at start points up-right so rotate="auto" faces the nose forward.
const PATH = "M 28 118 C 160 18 400 18 532 118"

export function PaperPlaneLogo({ className }: { className?: string }) {
  const uid       = useId().replace(/[^a-z0-9]/gi, "")
  const pathId    = `pl-p-${uid}`
  const trailGlow = `pl-tg-${uid}`
  const planeGlow = `pl-pg-${uid}`

  return (
    <svg
      viewBox="0 0 560 136"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <path id={pathId} d={PATH} />

        {/* Trail glow */}
        <filter id={trailGlow} x="-10%" y="-40%" width="120%" height="180%">
          <feGaussianBlur stdDeviation="4" in="SourceGraphic" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Plane glow */}
        <filter id={planeGlow} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" in="SourceGraphic" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ghost path — faint full arc always visible */}
      <use href={`#${pathId}`} stroke="#E03D0E" strokeWidth="1.5" fill="none" opacity="0.07" />

      {/* Animated glowing trail — draws once and stays */}
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
          pathLength: { duration: 2.8, ease: [0.4, 0, 0.15, 1], delay: 0.15 },
          opacity:    { duration: 0.3, delay: 0.15 },
        }}
      />

      {/*
        Paper airplane — 5× scale, pointing RIGHT (+X) so rotate="auto" works.
        Nose:         ( 55,   0)
        Top wing tip: (-38, -42)
        Tail notch:   (-18,   0)
        Bot wing tip: (-38,  42)
        Stabiliser L: (-18,  0) → (-45, -18)
        Stabiliser R: (-18,  0) → (-45,  18)
      */}
      <g filter={`url(#${planeGlow})`}>
        {/* Top wing */}
        <path
          d="M 55,0 L -38,-42 L -18,0 Z"
          fill="#E03D0E"
          fillOpacity="0.95"
        />
        {/* Bottom wing — slightly dim for depth */}
        <path
          d="M 55,0 L -38,42 L -18,0 Z"
          fill="#E03D0E"
          fillOpacity="0.58"
        />
        {/* Center fuselage fold */}
        <line
          x1="55" y1="0" x2="-38" y2="0"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.22"
        />
        {/* Tail stabilisers */}
        <line x1="-18" y1="0" x2="-46" y2="-20"
          stroke="#E03D0E" strokeWidth="3" strokeOpacity="0.8" strokeLinecap="round" />
        <line x1="-18" y1="0" x2="-46" y2=" 20"
          stroke="#E03D0E" strokeWidth="3" strokeOpacity="0.8" strokeLinecap="round" />
        {/* Nose highlight */}
        <circle cx="55" cy="0" r="4.5" fill="white" fillOpacity="0.8" />

        {/* Single animateMotion on the whole group */}
        <animateMotion
          dur="2.8s"
          begin="0.15s"
          repeatCount="1"
          fill="freeze"
          rotate="auto"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.4 0 0.15 1"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </g>
    </svg>
  )
}
