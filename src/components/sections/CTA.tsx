"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CLINIC } from "@/lib/constants"
import { fadeUp } from "@/lib/animations"

export default function CTA() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const circleAnimation = shouldReduceMotion
    ? {}
    : {
        animate: { rotate: 360 },
        transition: { duration: 20, repeat: Infinity, ease: "linear" as const },
      }

  const slowCircleAnimation = shouldReduceMotion
    ? {}
    : {
        animate: { rotate: -360 },
        transition: { duration: 30, repeat: Infinity, ease: "linear" as const },
      }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 px-6"
      style={{ backgroundColor: "#16654b" }}
    >
      {/* Decorative background circles */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        aria-hidden="true"
        {...circleAnimation}
      />
      <motion.div
        className="absolute -bottom-32 -right-16 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        aria-hidden="true"
        {...slowCircleAnimation}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        aria-hidden="true"
        {...circleAnimation}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-3xl mx-auto text-center"
        variants={resolvedFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Take Charge of Your Health?
        </h2>

        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Book an appointment today. Walk-ins welcome, online booking available 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <motion.a
            href="#"
            className="inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-sm whitespace-nowrap"
            style={{
              backgroundColor: "#ffffff",
              color: "#16654b",
            }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff"
            }}
          >
            Book Appointment
          </motion.a>

          <motion.a
            href={`tel:${CLINIC.phone}`}
            className="inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-lg border-2 transition-colors duration-200 text-sm whitespace-nowrap text-white"
            style={{ borderColor: "#ffffff" }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            Call Us Now
          </motion.a>
        </div>

        {/* Clinic details */}
        <p
          className="text-sm"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          <span className="font-medium text-white">{CLINIC.phone}</span>
          <span className="mx-3 opacity-40">·</span>
          {CLINIC.hours}
        </p>
      </motion.div>
    </section>
  )
}
