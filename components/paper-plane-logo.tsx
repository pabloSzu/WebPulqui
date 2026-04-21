"use client"

import { useId } from "react"
import { motion } from "framer-motion"

// Teardrop loop path — the plane starts at the bottom tip, flies up,
// arcs around the top, and returns exactly to the start point.
const PATH = "M 60 94 C 60 94 14 76 14 46 C 14 16 106 16 106 46 C 106 76 60 94 60 94"

interface PaperPlaneLogoProps {
  size?: number
  color?: string
}

export function PaperPlaneLogo({ size = 56, color = "#E03D0E" }: PaperPlaneLogoProps) {
  const uid = useId().replace(/:/g, "")
  const pathId  = `pp-path-${uid}`
  const glowId  = `pp-glow-${uid}`
  const glow2Id = `pp-glow2-${uid}`

  return (
    <svg
      viewBox="0 0 120 110"
      width={size}
      height={Math.round(size * 110 / 120)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Reference path for animateMotion */}
        <path id={pathId} d={PATH} />

        {/* Soft glow for trail */}
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" in="SourceGraphic" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sharper glow for plane */}
        <filter id={glow2Id} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.8" in="SourceGraphic" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Ghost path — full loop, very dim ─────────────────── */}
      <path
        d={PATH}
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity={0.08}
      />

      {/* ── Animated glowing trail ────────────────────────────── */}
      <motion.path
        d={PATH}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${glowId})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 0.92, 1],
          opacity:    [0, 1,    0.7],
        }}
        transition={{
          duration: 3,
          times: [0, 0.88, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />

      {/* ── Paper airplane body ───────────────────────────────── */}
      {/* Uses SVG animateMotion to follow the path smoothly      */}
      <g filter={`url(#${glow2Id})`}>
        {/* Right wing (slightly transparent) */}
        <path d="M 0,-9 L 6,7 L 0,4 Z" fill={color} fillOpacity="0.6">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            rotate="auto"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.42 0 0.58 1"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </path>

        {/* Left wing (solid) */}
        <path d="M 0,-9 L -6,7 L 0,4 Z" fill={color} fillOpacity="0.95">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            rotate="auto"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.42 0 0.58 1"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </path>

        {/* Nose highlight */}
        <circle cx="0" cy="-9" r="1.2" fill="white" fillOpacity="0.7">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            rotate="auto"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.42 0 0.58 1"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>

        {/* Center crease line */}
        <line x1="0" y1="-9" x2="0" y2="7" stroke="white" strokeWidth="0.6" strokeOpacity="0.25">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            rotate="auto"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.42 0 0.58 1"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </line>
      </g>
    </svg>
  )
}
