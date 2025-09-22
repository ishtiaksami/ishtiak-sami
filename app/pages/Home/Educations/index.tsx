"use client"

import React from "react"
import { motion } from "framer-motion"

export default function EducationExperience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Skylark Creative",
      duration: "Jan 2024 – Apr 2024",
      type: "Internship",
      details: [
        "Built and styled responsive web components using React and Tailwind CSS",
        "Collaborated with senior developers on client projects",
        "Improved website performance and accessibility",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      duration: "2023 – Present",
      type: "Freelance",
      details: [
        "Developed custom websites for small businesses",
        "Integrated modern UI/UX practices",
        "Worked with clients on SEO and website optimization",
      ],
    },
  ]

  const education = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      duration: "2025 – Present",
      details: [
        "Relevant Courses: Data Structures, Web Development, Database Systems",
        "Activities: Coding Competitions, Developer Clubs",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Notre Dame College Mymensingh",
      duration: "2021 – 2023",
      details: ["Major: Science", "Completed with strong academic performance"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-950 text-gray-100">
      <div className="holder">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Experience & Education
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A blend of professional experience, freelance work, and academic
              achievements that shape my career journey.
            </p>
          </motion.div>
        </div>

        {/* Experience Section */}
        <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="h-full flex flex-col rounded-xl border border-gray-800 bg-gray-900 shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="font-bold text-xl text-white">{exp.title}</h4>
                <p className="text-sm text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="mt-2 text-sm italic text-gray-400">{exp.type}</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {exp.details.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500">✔</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="h-full flex flex-col rounded-xl border border-gray-800 bg-gray-900 shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="font-bold text-xl text-white">{edu.degree}</h4>
                <p className="text-sm text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {edu.details.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500">✔</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
