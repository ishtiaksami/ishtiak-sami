"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {


    return (
        <>
            {/* Projects Section */}
            <section id="projects" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.15),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Projects</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Explore some of the exciting projects we’ve built — blending design, technology, and innovation to solve real-world problems.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                img: "/plantriverside.png",
                                title: "Plant Riverside",
                                description:
                                    "An elegant website showcasing the vibrant Plant Riverside District, featuring dining, entertainment, shopping, and events in Savannah.",
                                link: "https://www.plantriverside.com/",
                            }
                            ,
                            {
                                img: "/scamwatch.png",
                                title: "Scam Watch",
                                description:
                                    "A WhatsApp-like chat app built with PHP and Tailwind CSS, featuring real-time messaging and online status.",
                                link: "https://scamwatch.ai",
                            },
                            {
                                img: "/ishtiak.png",
                                title: "Portfolio Website",
                                description:
                                    "A sleek and interactive personal portfolio showcasing creative projects, built with React and Tailwind.",
                                link: "#",
                            },
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                                    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <Image
                                                src={project.img}
                                                alt={project.title}
                                                width={400}
                                                height={250}
                                                className="rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-purple-400 hover:text-purple-300 font-medium"
                                        >
                                            View Project →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
