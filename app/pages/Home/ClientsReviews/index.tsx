"use client"

import React from "react"
import Image from "next/image"

export default function ClientsReviews() {
  return (
    <section id="clients-review" className="py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.1),transparent_50%)]" />

      <div className="holder relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Clients Reviews</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear directly from our valued clients about their experience with TechNova and how our solutions helped their business thrive.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Client 1 */}
          <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
            <div className="h-full bg-gray-900/80 p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/client1.jpg"
                    alt="Sarah Johnson"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">TechStart Inc.</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                {"\"The Plant Riverside website developed by Ishtiak Sami has elevated our online presence. The modern design, smooth interactions, and responsive layout have impressed our visitors and enhanced user engagement significantly.\""}
              </p>
            </div>
          </div>

          {/* Client 2 */}
          <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
            <div className="h-full bg-gray-900/80 p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/client2.jpg"
                    alt="Michael Chen"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">DataFlow</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                {"\"ScamWatch.ai has significantly enhanced our ability to identify and mitigate online threats. By leveraging advanced AI algorithms, it provides real-time analysis of suspicious communications, empowering our team to act swiftly and protect our users from evolving scams.\""}
              </p>
            </div>
          </div>

          {/* Client 3 */}
          <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
            <div className="h-full bg-gray-900/80 p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/client3.jpg"
                    alt="Emily Rodriguez"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Emily Rodriguez</h4>
                  <p className="text-gray-400 text-sm">InnovateCorp</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                {"\"Ishtiak Sami's portfolio website showcases creativity, technical expertise, and attention to detail. The design is modern and user-friendly, effectively highlighting projects, skills, and achievements. It's a perfect blend of aesthetics and functionality, reflecting professionalism and innovation.\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
