"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"

const DOCTORS = [
  {
    name: "Dr. Amirah Yusoff",
    specialty: "General Practitioner",
    quals: "MBBS (UM) · MOH Registered",
    image: "/doctor-amirah.jpg",
    alt: "Dr. Amirah Yusoff",
    imgStyle: { objectPosition: "center center" },
  },
  {
    name: "Dr. Hafiz Rahman",
    specialty: "Family Medicine",
    quals: "MBBCh (Ireland) · MMed (Family Med)",
    image: "/doctor-hafiz.jpg",
    alt: "Dr. Hafiz Rahman",
    imgStyle: { objectPosition: "center center" },
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Child & Women's Health",
    quals: "MBBS (USM) · Dip. Obs (RCOG)",
    image: "/doctor-priya.jpg",
    alt: "Dr. Priya Nair",
    imgStyle: { objectPosition: "center center" },
  },
]

export default function Doctors() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <section id="doctors" className="py-24 px-6 bg-white">
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
            Our Doctors
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "#111827" }}>
            Meet the People Who Care for You
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            Three doctors. Different specialties. One shared commitment to getting it right.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          variants={resolvedStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {DOCTORS.map((doc) => (
            <motion.div
              key={doc.name}
              variants={resolvedFadeUp}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center text-center gap-4 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Photo */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#ecfeff] group-hover:ring-[#0891B2]/30 transition-all duration-300">
                <Image
                  src={doc.image}
                  alt={doc.alt}
                  fill
                  className="object-cover"
                  style={doc.imgStyle}
                  sizes="128px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold" style={{ color: "#111827" }}>
                  {doc.name}
                </h3>
                <p className="text-sm font-semibold" style={{ color: "#0891B2" }}>
                  {doc.specialty}
                </p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>
                  {doc.quals}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-1 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-[#0891B2] hover:text-white"
                style={{ borderColor: "#0891B2", color: "#0891B2" }}
              >
                Book with this Doctor
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
