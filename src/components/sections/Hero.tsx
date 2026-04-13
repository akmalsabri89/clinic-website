"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CLINIC } from "@/lib/constants"
import { fadeUp, staggerContainer } from "@/lib/animations"

interface StatItem {
  value: string
  label: string
}

const STATS: StatItem[] = [
  { value: "500+", label: "Patients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "4", label: "Core Services" },
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <section
      id="hero"
      className="min-h-[90vh] bg-[#f0f7f5] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            className="flex flex-col gap-6"
            variants={resolvedStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={resolvedFadeUp}
              className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-[#16654b]/10 border border-[#16654b]/20"
            >
              <span className="text-xs font-semibold text-[#16654b] tracking-wide uppercase">
                Trusted Healthcare in Malaysia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={resolvedFadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight tracking-tight"
            >
              {CLINIC.tagline}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={resolvedFadeUp}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              {CLINIC.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={resolvedFadeUp}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-[#16654b] text-white font-semibold text-sm hover:bg-[#124f3a] transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-[#16654b] text-[#16654b] font-semibold text-sm hover:bg-[#16654b]/5 transition-colors"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right: stats block */}
          <motion.div
            className="flex flex-col gap-4"
            variants={resolvedStagger}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={resolvedFadeUp}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col gap-1 bg-white rounded-2xl px-6 py-6 shadow-sm border border-white/80"
                >
                  <span className="text-4xl font-bold text-[#16654b] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-gray-500 mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
