"use client"

import { useId } from "react"
import { motion } from "framer-motion"

// Wide oval path — starts bottom-center, sweeps right, arcs over the top,
// curves back left and returns exactly to the start.
// Tangent at start points RIGHT (+X), so with rotate="auto" the nose faces forward.
const PATH = "M 100 158 C 175 158 188 95 188 65 C 188 15 12 15 12 65 C 12 95 25 158 100 158"

export function PaperPlaneLogo({ size = 110 }: { size?: number }) {
  const uid      = useId().replace(/[^a-z0-9]/gi, "")
  const pathId   = `pl-p-${uid}`
  const glowId   = `pl-g-${uid}`
  const planeGlow = `pl-pg-${uid}`
  const h        = Math.round(size * 170 / 200)

  return (
    <svg
      viewBox="0 0 200 170"
      width={size}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Reference path */}
        <path id={pathId} d={PATH} />

        {/* Trail glow */}
        <filter id={glowId} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3" in="SourceGraphic" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Plane glow */}
        <filter id={planeGlow} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" in="SourceGraphic" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ghost path — full shape always faintly visible */}
      <use href={`#${pathId}`} stroke="#E03D0E" strokeWidth="1" fill="none" opacity="0.08" />

      {/* Animated glowing trail — draws once, stays */}
      <motion.path
        d={PATH}
        stroke="#E03D0E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${glowId})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 3.2, ease: [0.4, 0, 0.15, 1] },
          opacity:    { duration: 0.4 },
        }}
      />

      {/*
        Paper airplane viewed from top — nose points RIGHT (+X).
        rotate="auto" aligns +X of the element with the direction of travel,
        so the nose always faces forward along the curve.

        Shape:
          Nose:        (12,  0)
          Top wing:    (-8, -9)
          Tail notch:  (-4,  0)
          Bottom wing: (-8,  9)
      */}
      <g filter={`url(#${planeGlow})`}>
        {/* Top wing — solid */}
        <path d="M 12,0 L -8,-9 L -4,0 Z" fill="#E03D0E" fillOpacity="0.95" />
        {/* Bottom wing — slightly dim for depth */}
        <path d="M 12,0 L -8,9 L -4,0 Z"  fill="#E03D0E" fillOpacity="0.6"  />
        {/* Fuselage center fold */}
        <line x1="12" y1="0" x2="-8" y2="0" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.25" />
        {/* Tail stabilisers */}
        <line x1="-4" y1="0" x2="-9" y2="-4" stroke="#E03D0E" strokeWidth="1.2" strokeOpacity="0.75" />
        <line x1="-4" y1="0" x2="-9" y2=" 4" stroke="#E03D0E" strokeWidth="1.2" strokeOpacity="0.75" />
        {/* Nose highlight dot */}
        <circle cx="12" cy="0" r="1.4" fill="white" fillOpacity="0.75" />

        {/* Single animateMotion on the group → nose follows path perfectly */}
        <animateMotion
          dur="3.2s"
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
