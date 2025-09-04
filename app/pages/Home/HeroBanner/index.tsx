"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/app/components/Btn/Button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroBanner() {


  return (
    <>
      {/* About Section */}
      <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-gray-950">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/50 to-gray-950/80" />
          <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-purple-800/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,100,255,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.08),transparent_70%)]" />
        </div>

        <div className="holder relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              I’m <span className="text-purple-400 font-semibold">Ishtiak Sami</span>, a passionate
              <span className="text-cyan-400 font-semibold"> Frontend Developer</span> with a focus
              on building <span className="text-pink-400 font-semibold">sleek</span> and
              <span className="text-purple-400 font-semibold"> modern</span> web applications that
              elevate user experience. I craft complex solutions with elegance and precision.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-3xl transition-all duration-500 group-hover:blur-4xl" />
              <div className="relative bg-gray-900/60 backdrop-blur-lg border border-gray-800/40 rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/40 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-500">
                <Image
                  src={"/sami.jpeg"}
                  alt="Ishtiak Sami"
                  width={176}
                  height={176}
                  className="rounded-full w-44 h-44 object-cover border-4 border-purple-500 mb-6 shadow-xl"
                />
                <h3 className="text-2xl font-bold text-white">Ishtiak Sami</h3>
                <p className="text-gray-400 text-sm mt-1">Frontend Developer</p>
              </div>
            </motion.div>

            {/* Info + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                With hands-on experience in creating <span className="text-purple-400 font-semibold">responsive</span> and
                <span className="text-cyan-400 font-semibold"> scalable</span> applications, I excel in
                <span className="text-purple-400"> HTML</span>,
                <span className="text-purple-400"> CSS</span>,
                <span className="text-purple-400"> JavaScript</span>, and
                <span className="text-purple-400"> React</span>. I am also expanding my skills into backend technologies to become a <span className="text-pink-400 font-semibold">full-stack developer</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { label: "Projects", value: "15+" },
                  { label: "Experience", value: "1+ yr" },
                  { label: "Clients", value: "5+" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-purple-900/20"
                  >
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Resume Button */}
              <Button
                asChild
                className="mt-6 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-xl shadow-purple-900/40 hover:shadow-purple-900/60 transition-all duration-300"
              >
                <Link passHref
                  href="https://www.canva.com/design/DAGNPzQw4n8/gji3hrhPNF2q0w_bbOiFVA/view?utm_content=DAGNPzQw4n8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb6b380d446"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
