"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const FAQS = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Both are welcome. Walk-ins are accepted during operating hours. For a guaranteed slot and shorter wait, we recommend booking in advance via phone or our online system.",
  },
  {
    q: "What insurance panels do you accept?",
    a: "We are a panel clinic for most major insurers including AIA, Prudential, Great Eastern, Takaful Malaysia, Etiqa, and AXA. Please call ahead to confirm your specific plan.",
  },
  {
    q: "What are your operating hours?",
    a: "We're open Monday to Friday, 8am–6pm, and Saturday 8am–1pm. We're closed on Sundays and public holidays.",
  },
  {
    q: "Do you see children?",
    a: "Yes. We provide paediatric consultations for newborns through teenagers, including vaccinations, growth monitoring, and sick visits.",
  },
  {
    q: "Can I get my blood test done here?",
    a: "Yes — we have an in-house laboratory for routine blood work, urine tests, and health screenings. Results for most tests are available the same day.",
  },
  {
    q: "Do you provide medical certificates?",
    a: "Yes. We issue medical certificates (MC) after a doctor's consultation. For workplace requirements we can also issue specialist referral letters.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#ecfeff" }}>
      <div className="max-w-3xl mx-auto">
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
            style={{ backgroundColor: "#cffafe", color: "#0891B2" }}
          >
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#111827" }}>
            Common Questions, Answered
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="flex flex-col gap-3"
          variants={resolvedStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              variants={resolvedFadeUp}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold" style={{ color: "#111827" }}>
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: open === i ? "#0891B2" : "#ecfeff",
                    color: open === i ? "white" : "#0891B2",
                  }}
                >
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
