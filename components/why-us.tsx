"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const reasons = [
  "23+ years of industry experience",
  "100% success rate in certification",
  "Comprehensive support throughout the process",
  "Expert consultation and guidance",
  "Fast-track certification options",
  "Post-certification support",
]

export default function WhyUs() {

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src="https://res.cloudinary.com/drynqkitl/image/upload/v1738330713/Understanding_ISO_Certification__A_Mark_of_Excellence.jpeg_hfbu1f.jpg"
              alt="Why Choose TP Systelink"
              width={1000}
              height={1000}
              className="rounded-lg w-full h-[560px] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 
              className="text-2xl md:text-3xl font-bold mb-2"
              
            >
              Why Choose TP Systelink?
            </h2>
            <div className="w-16 h-1 rounded mb-6 bg-[#de7d50]" />
            <p className="text-muted-foreground mb-8">
              At TP Systelink, we combine expertise, experience, and excellence to deliver exceptional certification
              services that help organizations achieve their quality management goals.
            </p>
            <ul className="grid gap-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 shrink-0 text-current" />
                  <span className="text-sm md:text-base">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}