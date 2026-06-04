"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useMotionValue, animate } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { fadeUp, staggerContainer, slideFromLeft } from "@/lib/animations"

const BULLET_POINTS = [
  "Experienced, MOH-registered doctors",
  "Same-day appointments available",
  "Bilingual staff — English & Bahasa Malaysia",
  "Panel clinic for major insurance providers",
]

interface StatItem {
  value: string
  label: string
  numericValue: number
  suffix: string
}

const STATS: StatItem[] = [
  { value: "98%", label: "Patient satisfaction", numericValue: 98, suffix: "%" },
  { value: "24h", label: "Online booking", numericValue: 24, suffix: "h" },
  { value: "6+", label: "Insurance panels", numericValue: 6, suffix: "+" },
  { value: "3", label: "MOH-registered doctors", numericValue: 3, suffix: "" },
]

interface AnimatedCounterProps {
  numericValue: number
  suffix: string
  shouldAnimate: boolean
}

function AnimatedCounter({ numericValue, suffix, shouldAnimate }: AnimatedCounterProps) {
  const motionValue = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!shouldAnimate || hasAnimated.current) return
    hasAnimated.current = true

    const controls = animate(motionValue, numericValue, {
      duration: 1.5,
      ease: "easeOut",
    })

    const unsubscribe = motionValue.on("change", (v) => {
      setDisplayValue(Math.round(v))
    })

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [shouldAnimate, numericValue, motionValue])

  const value = shouldAnimate ? displayValue : numericValue

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}

export default function WhyUs() {
  const shouldReduceMotion = useReducedMotion()
  const [statsInView, setStatsInView] = useState(false)

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  const resolvedSlideLeft = shouldReduceMotion
    ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0 } }
    : slideFromLeft

  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "#ecfeff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={resolvedSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#cffafe", color: "#0891B2" }}
            >
              Why Choose Us
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-snug"
              style={{ color: "#111827" }}
            >
              Care You Can Trust, Expertise You Can Count On
            </h2>
            <ul className="space-y-4 mb-8">
              {BULLET_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#0891B2" }}
                    strokeWidth={2}
                  />
                  <span className="text-base" style={{ color: "#374151" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-semibold border rounded-lg px-5 py-2.5 transition-colors hover:bg-white"
              style={{
                color: "#0891B2",
                borderColor: "#0891B2",
              }}
            >
              Meet Our Doctors →
            </a>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            onViewportEnter={() => setStatsInView(true)}
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={resolvedFadeUp}
                className="rounded-xl p-6 bg-white border border-gray-100 hover:border-[#a5f3fc] transition-colors duration-200"
              >
                <p
                  className="text-4xl font-bold tracking-tight mb-1"
                  style={{ color: "#0891B2" }}
                >
                  <AnimatedCounter
                    numericValue={stat.numericValue}
                    suffix={stat.suffix}
                    shouldAnimate={statsInView && !shouldReduceMotion}
                  />
                </p>
                <p className="text-sm font-medium" style={{ color: "#6b7280" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}

            {/* Attribution */}
            <motion.p
              variants={resolvedFadeUp}
              className="col-span-2 text-xs text-center"
              style={{ color: "#9ca3af" }}
            >
              Satisfaction rate based on 2024 patient feedback · Insurance panels subject to confirmation
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
