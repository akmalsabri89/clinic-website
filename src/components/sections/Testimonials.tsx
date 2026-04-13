"use client"

import { motion, useReducedMotion } from "framer-motion"
import { TESTIMONIALS } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, staggerContainer } from "@/lib/animations"

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <section id="testimonials" className="py-24 px-6" style={{ backgroundColor: "#f0f7f5" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={resolvedFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#16654b", backgroundColor: "rgba(22,101,75,0.1)" }}
          >
            Patient Reviews
          </span>
          <h2
            className="text-4xl font-bold leading-tight"
            style={{ color: "#111827" }}
          >
            What Our Patients Say
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={resolvedStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={resolvedFadeUp}
            >
              <Card
                className="bg-white border-l-4 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
                style={{ borderLeftColor: "#16654b" }}
              >
                <CardContent className="pt-6 pb-6 flex flex-col gap-4">
                  {/* Stars */}
                  <p className="text-yellow-400 text-lg tracking-wide leading-none">
                    ★★★★★
                  </p>

                  {/* Quote */}
                  <p className="text-gray-700 italic leading-relaxed text-sm flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="font-semibold text-sm" style={{ color: "#111827" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
