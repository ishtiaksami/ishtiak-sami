"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Code, Cpu, Github, Globe, Menu, MessageSquare, Twitter, X, Linkedin, Mail, Facebook } from "lucide-react"
import Link from "next/link"
import { Input } from "@/app/components/Input/input"
import { Button } from "@/app/components/Btn/Button"


import { motion, AnimatePresence } from "framer-motion"
export default function Contact() {


    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="py-24 relative overflow-hidden bg-gray-950">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,50,255,0.1),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                            I’m always open to discuss projects, collaborations, or just say hi. Send me a message and I’ll get back to you!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 p-[2px] rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
                                <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-gray-800/40">
                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Input
                                                type="text"
                                                placeholder="Your Name"
                                                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12 rounded-lg px-4 text-gray-200 placeholder-gray-400"
                                            />
                                            <Input
                                                type="email"
                                                placeholder="Your Email"
                                                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12 rounded-lg px-4 text-gray-200 placeholder-gray-400"
                                            />
                                        </div>
                                        <Input
                                            type="text"
                                            placeholder="Subject"
                                            className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12 rounded-lg px-4 text-gray-200 placeholder-gray-400"
                                        />
                                        <textarea
                                            rows={5}
                                            placeholder="Your Message"
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                        ></textarea>
                                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 text-base font-semibold rounded-xl shadow-lg transition-all duration-300">
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Info / Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center space-y-8"
                        >
                            {/* Info Card */}
                            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 border border-gray-800/40 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-white">Contact Info</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li>
                                        <span className="font-medium text-purple-400">Email:</span> ishtiaksami.dev@gmail.com
                                    </li>
                                    <li>
                                        <span className="font-medium text-purple-400">Phone:</span> +8801600081601
                                    </li>
                                    <li>
                                        <span className="font-medium text-purple-400">Location:</span> Dhaka, Bangladesh
                                    </li>
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 border border-gray-800/40 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-white">Follow Me</h3>
                                <div className="flex gap-4">
                                    <Link href="https://github.com/ishtiaksami" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        <Github className="h-6 w-6" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/ishtiaksami" className="text-gray-400 hover:text-blue-500 transition-colors">
                                        <Linkedin className="h-6 w-6" />
                                    </Link>
                                    <Link href="https://www.facebook.com/ishtiak.sami.x" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        <Facebook className="h-6 w-6" />
                                    </Link>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-4 text-gray-400 text-center md:text-left">
                                <p>Looking for collaborations or freelance projects? Let’s build something amazing together!</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
