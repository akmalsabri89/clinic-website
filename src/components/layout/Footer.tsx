"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Heart } from "lucide-react"
import { CLINIC } from "@/lib/constants"
import { fadeUp, staggerContainer } from "@/lib/animations"

const FOOTER_LINKS = {
  services: [
    { label: "General Consultation", href: "#services" },
    { label: "Preventive Screenings", href: "#services" },
    { label: "Chronic Disease Care", href: "#services" },
    { label: "Family & Child Health", href: "#services" },
    { label: "Specialist Referrals", href: "#services" },
  ],
  clinic: [
    { label: "About Us", href: "#about" },
    { label: "Our Doctors", href: "#about" },
    { label: "Facilities", href: "#about" },
    { label: "Patient Charter", href: "#about" },
    { label: "News & Health Tips", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ],
  patients: [
    { label: "Book Appointment", href: "#contact" },
    { label: "Patient Portal", href: "#contact" },
    { label: "Health Resources", href: "#contact" },
    { label: "Insurance & Panels", href: "#contact" },
    { label: "Patient Rights", href: "#contact" },
  ],
}

interface FooterLinkColumnProps {
  heading: string
  links: { label: string; href: string }[]
}

function FooterLinkColumn({ heading, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
        {heading}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const shouldReduceMotion = useReducedMotion()

  const resolvedFadeUp = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp

  const resolvedStagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer

  return (
    <footer style={{ backgroundColor: "#111827" }}>
      {/* Top section — 4 columns */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={resolvedStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Col 1 — Brand */}
          <motion.div variants={resolvedFadeUp}>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-bold text-white text-lg mb-3"
            >
              <Heart
                className="w-5 h-5 shrink-0"
                style={{ color: "#0891B2", fill: "#0891B2" }}
              />
              <span>{CLINIC.name}</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {CLINIC.tagline}
            </p>
            <address className="not-italic space-y-2">
              <p className="text-white/60 text-sm">{CLINIC.address}</p>
              <p>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {CLINIC.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {CLINIC.email}
                </a>
              </p>
            </address>
          </motion.div>

          {/* Col 2 — Services */}
          <motion.div variants={resolvedFadeUp}>
            <FooterLinkColumn heading="Services" links={FOOTER_LINKS.services} />
          </motion.div>

          {/* Col 3 — Clinic */}
          <motion.div variants={resolvedFadeUp}>
            <FooterLinkColumn heading="Clinic" links={FOOTER_LINKS.clinic} />
          </motion.div>

          {/* Col 4 — Patients */}
          <motion.div variants={resolvedFadeUp}>
            <FooterLinkColumn heading="Patients" links={FOOTER_LINKS.patients} />
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            &copy; 2025 {CLINIC.name}. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            <a href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            {" · "}
            <a href="/terms" className="hover:text-white/80 transition-colors">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
