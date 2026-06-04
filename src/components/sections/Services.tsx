"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Stethoscope, ShieldCheck, Heart, Users, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SERVICES } from "@/lib/constants"
import { fadeUp, staggerContainer } from "@/lib/animations"

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  ShieldCheck,
  Heart,
  Users,
}

export default function Services() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "#111827" }}
          >
            Comprehensive Care for Every Stage of Life
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            From your first check-up to long-term disease management, we provide evidence-based care
            tailored to each patient — across all ages and health needs.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={resolvedStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]

            return (
              <motion.div
                key={service.title}
                variants={resolvedFadeUp}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className="h-full hover:shadow-lg transition-shadow duration-200"
                  style={{ outline: "1px solid #e5e7eb" }}
                >
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: "#ecfeff" }}
                    >
                      {Icon && <Icon size={22} style={{ color: "#0891B2" }} strokeWidth={1.75} />}
                    </div>
                    <CardTitle className="text-base font-semibold" style={{ color: "#111827" }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <CardDescription className="text-sm leading-relaxed">
                      {service.desc}
                    </CardDescription>
                    <a
                      href="#contact"
                      className="text-sm font-medium inline-flex items-center gap-1 transition-opacity hover:opacity-75"
                      style={{ color: "#0891B2" }}
                    >
                      {service.cta} →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
