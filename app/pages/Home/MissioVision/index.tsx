"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MissionVission() {


    return (
        <>
            {/* Mission & Vision Section */}
            <section id="mission-vision" className="py-16 md:py-28 relative overflow-hidden bg-gray-950">
                {/* Subtle Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-950 opacity-30" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            My Mission & Vision
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                            As a front-end developer and designer, I aim to craft digital experiences that are visually stunning, functional, and user-friendly. Here’s what drives me every day.
                        </p>
                    </motion.div>

                    {/* Mission & Vision Cards */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 border border-gray-800/40"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">My Mission</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                                To create websites and digital experiences that are elegant, responsive, and user-friendly, while continuously improving my skills as a front-end developer.
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Design and develop interactive, modern websites.</li>
                                <li>Deliver high-quality work that meets client and user needs.</li>
                                <li>Continuously learn new technologies and improve coding practices.</li>
                                <li>Create responsive and accessible digital experiences for all users.</li>
                            </ul>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 border border-gray-800/40"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">My Vision</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                                To establish myself as a trusted front-end developer and designer, delivering premium, modern websites that inspire, engage, and add value to every client or project I work on.
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Build a portfolio that showcases creativity, skill, and professionalism.</li>
                                <li>Contribute to innovative projects that make a positive impact.</li>
                                <li>Stay at the forefront of web development and design trends.</li>
                                <li>Create solutions that combine functionality, aesthetics, and performance.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
