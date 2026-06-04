"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop",
    alt: "Clinic reception and waiting area",
    label: "Reception & Waiting Area",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80&auto=format&fit=crop",
    alt: "Consultation room",
    label: "Consultation Room",
    className: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80&auto=format&fit=crop",
    alt: "Modern medical equipment",
    label: "Diagnostic Equipment",
    className: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&auto=format&fit=crop",
    alt: "Laboratory and screening area",
    label: "In-House Laboratory",
    className: "col-span-2",
  },
]

export default function Facilities() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <section className="py-24 px-6 bg-white">
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
            Our Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "#111827" }}>
            A Clean, Comfortable Space to Heal
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            We designed our clinic to feel welcoming, not clinical. Modern equipment, friendly spaces, and everything you need under one roof.
          </p>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[220px] gap-4"
          variants={resolvedStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PHOTOS.map((photo) => (
            <motion.div
              key={photo.alt}
              variants={resolvedFadeUp}
              className={`relative rounded-2xl overflow-hidden group ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
