"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Code, Cpu, Github, Globe, Menu, MessageSquare, Twitter, X, Linkedin, Mail, Facebook } from "lucide-react"


export default function Footer() {
    

    return (
        <>
            {/* Footer */}
            <footer className="py-20 relative overflow-hidden bg-gray-900/90 backdrop-blur-sm rounded-t-3xl shadow-inner">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,50,255,0.08),transparent_70%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Logo & About */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Cpu className="h-6 w-6 text-purple-500" />
                                <span className="font-bold text-xl text-white">Ishtiak Sami</span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Frontend Developer & Designer. I build clean, modern web experiences focused on performance and usability.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { icon: Github, href: "https://github.com/ishtiaksami", color: "hover:text-purple-500" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/ishtiaksami", color: "hover:text-blue-500" },
                                    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                                    { icon: Mail, href: "mailto:ishtiaksami.dev@gmail.com", color: "hover:text-red-500" },
                                ].map((item, idx) => (
                                    <a key={idx} href={item.href} className={`text-gray-400 transition-all duration-300 ${item.color} p-2 rounded-full hover:bg-gray-800/30`}>
                                        <item.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Portfolio Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-purple-400">Portfolio</h4>
                            <ul className="space-y-4">
                                {["Projects", "Blog", "Case Studies", "Testimonials", "About Me"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-purple-400">Services</h4>
                            <ul className="space-y-4">
                                {["Web Development", "UI/UX Design", "Consulting", "SEO Optimization", "Branding"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-purple-400">Contact</h4>
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
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} <a href="https://ishtiaksami.github.io" className="text-purple-400 hover:text-purple-500 transition-colors">Ishtiak Sami.</a> All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {["Privacy Policy", "Terms", "Contact"].map((item) => (
                                <a key={item} href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
