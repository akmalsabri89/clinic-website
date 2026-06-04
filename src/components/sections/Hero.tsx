"use client"

import Image from "next/image"
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
      className="min-h-[90vh] bg-[#ecfeff] flex items-center"
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
              className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-[#0891B2]/10 border border-[#0891B2]/20"
            >
              <span className="text-xs font-semibold text-[#0891B2] tracking-wide uppercase">
                Trusted Healthcare in Malaysia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={resolvedFadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#111827]"
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
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-[#0891B2] text-white font-semibold text-sm hover:bg-[#0e7490] transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-[#0891B2] text-[#0891B2] font-semibold text-sm hover:bg-[#0891B2]/5 transition-colors"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right: photo with stats overlapping the edges */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={resolvedStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Fixed-size wrapper — reference frame for stat card positioning */}
            <div className="relative w-[420px] h-[600px]">
              {/* Decorative blob behind photo */}
              <div className="absolute -inset-8 bg-[#0891B2]/10 rounded-[4rem] blur-3xl -z-10" />

              {/* Doctor image — 1.5× original size */}
              <motion.div
                variants={resolvedFadeUp}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/hero-family.png"
                  alt="Malaysian family at MediCare Clinic"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>

              {/* Stat card — top-left, overlapping photo edge */}
              <motion.div
                variants={resolvedFadeUp}
                className="absolute top-10 -left-[34px] bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex flex-col gap-0.5 min-w-[130px] z-10"
              >
                <span className="text-xl font-bold leading-none" style={{ color: "#0891B2" }}>{STATS[0].value}</span>
                <span className="text-[11px] text-gray-500 font-medium">{STATS[0].label}</span>
              </motion.div>

              {/* Stat card — right-middle, overlapping photo edge */}
              <motion.div
                variants={resolvedFadeUp}
                className="absolute top-1/2 -translate-y-1/2 -right-[54px] bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex flex-col gap-0.5 min-w-[130px] z-10"
              >
                <span className="text-xl font-bold leading-none" style={{ color: "#0891B2" }}>{STATS[1].value}</span>
                <span className="text-[11px] text-gray-500 font-medium">{STATS[1].label}</span>
              </motion.div>

              {/* Stat card — bottom-right, overlapping photo edge */}
              <motion.div
                variants={resolvedFadeUp}
                className="absolute bottom-12 -right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex flex-col gap-0.5 min-w-[130px] z-10"
              >
                <span className="text-xl font-bold leading-none" style={{ color: "#0891B2" }}>{STATS[2].value}</span>
                <span className="text-[11px] text-gray-500 font-medium">{STATS[2].label}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
