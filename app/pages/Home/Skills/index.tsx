"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="py-10 relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,50,255,0.15),transparent_50%)]" />

        <div className="holder relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">My Skills</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A blend of technical expertise and creative problem-solving — here are the tools and technologies I work with.
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {/* Frontend Development */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">Frontend Development</h3>
              <p className="text-gray-300 text-lg">
                Building responsive, accessible, and visually stunning interfaces with modern frameworks.
              </p>
              <ul className="space-y-3">
                {["HTML5 & CSS3", "JavaScript (ES6+)", "React.js / Next.js", "Tailwind CSS"].map(
                  (skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Backend Development */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">Backend Development</h3>
              <p className="text-gray-300 text-lg">
                Creating secure, scalable, and efficient server-side solutions with modern technologies.
              </p>
              <ul className="space-y-3">
                {["Python", "PHP", "RESTful APIs / GraphQL", "MySQL"].map(
                  (skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Tools & Others */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">Tools & Others</h3>
              <p className="text-gray-300 text-lg">
                Complementary tools and workflows that enhance productivity and collaboration.
              </p>
              <ul className="space-y-3">
                {["Git / GitHub / GitLab", "VS Code", "Figma / Adobe XD"].map(
                  (skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
