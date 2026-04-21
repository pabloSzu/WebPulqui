"use client"

import { useId } from "react"
import { motion } from "framer-motion"

// Straight right from P, then curves up over the I and stops — becoming the dot.
// Tangent at start = pure right (+X) → nose faces right.
// Tangent at end   = pure up  (-Y)  → nose faces up, plane is the dot of the i.
const PATH = "M 28,118 L 486,118 C 512,118 526,104 526,64"

export function PaperPlaneLogo({ className }: { className?: string }) {
  const uid       = useId().replace(/[^a-z0-9]/gi, "")
  const pathId    = `pl-p-${uid}`
  const trailGlow = `pl-tg-${uid}`
  const planeGlow = `pl-pg-${uid}`

  return (
    <svg
      viewBox="0 0 560 140"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <path id={pathId} d={PATH} />

        <filter id={trailGlow} x="-5%" y="-60%" width="110%" height="220%">
          <feGaussianBlur stdDeviation="3.5" in="SourceGraphic" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id={planeGlow} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" in="SourceGraphic" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ghost path — barely visible full trajectory */}
      <use href={`#${pathId}`} stroke="#E03D0E" strokeWidth="1.5" fill="none" opacity="0.06" />

      {/* Trail draws once and stays */}
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
          pathLength: { duration: 2.6, ease: [0.25, 0, 0.1, 1], delay: 0.1 },
          opacity:    { duration: 0.3, delay: 0.1 },
        }}
      />

      {/*
        Plane points RIGHT (+X). rotate="auto" keeps the nose forward.
        At the end of the path the tangent is UP so the plane rests
        pointing upward — it becomes the dot above the I.

        Nose:         (+55,   0)
        Top wing:     (-38, -42)
        Tail notch:   (-18,   0)
        Bot wing:     (-38, +42)
      */}
      <g filter={`url(#${planeGlow})`}>
        {/* Top wing */}
        <path d="M 55,0 L -38,-42 L -18,0 Z" fill="#E03D0E" fillOpacity="0.95" />
        {/* Bottom wing */}
        <path d="M 55,0 L -38,42  L -18,0 Z" fill="#E03D0E" fillOpacity="0.58" />
        {/* Fuselage fold line */}
        <line x1="55" y1="0" x2="-38" y2="0" stroke="white" strokeWidth="1.4" strokeOpacity="0.2" />
        {/* Tail stabilisers */}
        <line x1="-18" y1="0" x2="-46" y2="-20" stroke="#E03D0E" strokeWidth="3" strokeOpacity="0.8" strokeLinecap="round" />
        <line x1="-18" y1="0" x2="-46" y2=" 20" stroke="#E03D0E" strokeWidth="3" strokeOpacity="0.8" strokeLinecap="round" />
        {/* Nose highlight */}
        <circle cx="55" cy="0" r="4.5" fill="white" fillOpacity="0.8" />

        <animateMotion
          dur="2.6s"
          begin="0.1s"
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
