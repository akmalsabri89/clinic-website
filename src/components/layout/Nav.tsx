"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { CLINIC, NAV_LINKS } from "@/lib/constants"

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  function handleNavClick(href: string) {
    setMobileOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navVariants = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm"
      initial={navVariants.initial}
      animate={navVariants.animate}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#hero")
            }}
            className="flex items-center gap-2 font-bold text-[#111827] text-lg hover:text-[#0891B2] transition-colors"
          >
            <Heart className="w-5 h-5 text-[#0891B2] fill-[#0891B2]" />
            <span>{CLINIC.name}</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-sm font-medium text-gray-600 hover:text-[#0891B2] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0891B2] text-white text-sm font-semibold hover:bg-[#0e7490] transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#0891B2] hover:bg-[#ecfeff] transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
            initial={shouldReduceMotion ? { opacity: 0 } : mobileMenuVariants.initial}
            animate={shouldReduceMotion ? { opacity: 1 } : mobileMenuVariants.animate}
            exit={shouldReduceMotion ? { opacity: 0 } : mobileMenuVariants.exit}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:text-[#0891B2] hover:bg-[#ecfeff] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#contact")
                }}
                className="mt-2 inline-flex justify-center items-center px-4 py-2 rounded-lg bg-[#0891B2] text-white text-sm font-semibold hover:bg-[#0e7490] transition-colors"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
