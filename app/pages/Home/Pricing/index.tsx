"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Pricing() {
  const plans = [
    {
      package: "Starter Website",
      amount: "$499",
      features: ["Up to 5 pages", "Responsive Design", "Basic SEO"],
      icon: "/images/starter.png", // ✅ Add your own image (inside public/images)
      bgColor: "from-purple-600 to-indigo-600",
      btnColor: "from-purple-600 to-indigo-600",
    },
    {
      package: "Business Website",
      amount: "$999",
      features: [
        "Up to 10 pages",
        "SEO Optimized",
        "Contact Form",
        "Responsive Design",
      ],
      icon: "/images/business.png",
      bgColor: "from-indigo-500 to-blue-500",
      btnColor: "from-indigo-500 to-blue-500",
    },
    {
      package: "Elite Website",
      amount: "$1999",
      features: [
        "Up to 20 pages",
        "Blog & E-commerce",
        "Custom Design",
        "SEO & Performance Optimized",
        "Premium Support",
      ],
      icon: "/images/elite.png",
      bgColor: "from-purple-700 to-pink-600",
      btnColor: "from-purple-700 to-pink-600",
    },
  ]

  // ✅ fallback image if missing
  const fallbackIcon = "/images/default-icon.png"

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gray-950">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.1),transparent_50%)]" />

      <div className="holder relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-purple-400">
              Premium Website Packages
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose your website package. Transparent pricing, secure payments,
              and high-end modern designs for your business.
            </p>
          </motion.div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-gray-900 border border-gray-700">
                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-r ${plan.bgColor} p-6 flex items-center gap-4`}
                >
                  <div className="flex-shrink-0 w-16 h-16">
                    <Image
                      src={plan.icon || fallbackIcon} // ✅ safe fallback
                      alt={plan.package}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-2xl">
                      {plan.package}
                    </h4>
                    <p className="text-gray-200 text-lg font-semibold mt-1">
                      {plan.amount}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-1 space-y-3">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <span className="w-5 h-5 mr-2 text-green-400 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Pay Now Button */}
                <div className="p-6 text-center">
                  <button
                    className={`bg-gradient-to-r ${plan.btnColor} text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300`}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
