"use client"

import { useState, useEffect } from "react"
import { Button } from "@/app/components/Btn/Button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass =
    scrollY > 50
      ? "py-4 bg-black/80 backdrop-blur-md"
      : "py-6 bg-transparent"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:my-4`}
    >
      <div
        className={`holder flex justify-between items-center transition-all duration-500 md:rounded-3xl ${headerClass}`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer">
            Ishtiak Sami
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects", "Skills", "Pricing", "Contact"].map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <Button
            variant="outline"
            className="hidden md:flex border-purple-500 text-purple-400 hover:bg-purple-900/30 hover:text-white transition-all"
          >
            Login / Register
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-800 md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full">
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
