"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
    {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        image: "",
        review:
            "The Plant Riverside website developed by Ishtiak Sami has elevated our online presence. The modern design, smooth interactions, and responsive layout have impressed our visitors and enhanced user engagement significantly.",
    },
    {
        name: "Michael Chen",
        company: "DataFlow",
        image: "",
        review:
            "ScamWatch.ai has significantly enhanced our ability to identify and mitigate online threats. By leveraging advanced AI algorithms, it provides real-time analysis of suspicious communications, empowering our team to act swiftly and protect our users from evolving scams.",
    },
    {
        name: "Emily Rodriguez",
        company: "InnovateCorp",
        image: "",
        review:
            "Ishtiak Sami’s portfolio website showcases creativity, technical expertise, and attention to detail. The design is modern and user-friendly, effectively highlighting projects, skills, and achievements. It’s a perfect blend of aesthetics and functionality, reflecting professionalism and innovation.",
    },
]

export default function ClientsReviews() {
    return (
        <section id="clients-review" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.1),transparent_50%)]" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Clients Reviews</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Hear directly from our valued clients about their experience with TechNova and how our solutions helped their business thrive.
                        </p>
                    </motion.div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                                <div className="h-full bg-gray-900/80 p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                                    <div className="flex items-center mb-4">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                                            {/* <Image
                                                src={client.image}
                                                alt={client.name}
                                                width={56}
                                                height={56}
                                                className="object-cover"
                                            /> */}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{client.name}</h4>
                                            <p className="text-gray-400 text-sm">{client.company}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic">"{client.review}"</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
