"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CalendarCheck, UserRound, ClipboardList } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const STEPS = [
  {
    step: "01",
    Icon: CalendarCheck,
    title: "Book an Appointment",
    desc: "Call us, walk in, or book online in under 2 minutes. Same-day slots are usually available.",
  },
  {
    step: "02",
    Icon: UserRound,
    title: "Meet Your Doctor",
    desc: "A friendly, experienced GP listens to your concerns without rushing you through the door.",
  },
  {
    step: "03",
    Icon: ClipboardList,
    title: "Leave with a Clear Plan",
    desc: "You get a diagnosis, prescription or referral, and a follow-up care plan — all in one visit.",
  },
]

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={resolvedFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: "#ecfeff", color: "#0891B2" }}
          >
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#111827" }}>
            Getting Care Has Never Been Easier
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={resolvedStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
            style={{ backgroundColor: "#a5f3fc" }}
          />

          {STEPS.map(({ step, Icon, title, desc }) => (
            <motion.div
              key={step}
              variants={resolvedFadeUp}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              {/* Step circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-md relative z-10"
                style={{ backgroundColor: "#0891B2" }}
              >
                <Icon size={28} color="white" strokeWidth={1.75} />
              </div>

              {/* Step number */}
              <span className="text-xs font-bold tracking-widest" style={{ color: "#0891B2" }}>
                STEP {step}
              </span>

              <h3 className="text-lg font-semibold" style={{ color: "#111827" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6b7280" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
