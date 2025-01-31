"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "ISO 9001",
    description:
      "Quality Management System certification ensuring organizational excellence and customer satisfaction.",
  },
  {
    title: "ISO 14001",
    description: "Environmental Management System certification for sustainable business practices.",
  },
  {
    title: "ISO 45001",
    description: "Occupational Health & Safety Management System for workplace safety.",
  },
  {
    title: "ISO 27001",
    description: "Information Security Management System for data protection and cybersecurity.",
  },
  {
    title: "ISO 50001",
    description: "Energy Management System for optimal energy efficiency and sustainability.",
  },
  {
    title: "ISO 22716",
    description: "Good Manufacturing Practices (GMP) for Cosmetics ensuring product safety and quality.",
  },
  {
    title: "ISO/TS 16949",
    description: "Quality Management Systems in Automotive Industry for improved product and process quality.",
  },
  {
    title: "ISO 22000",
    description: "Food Safety Management System ensuring safe food production and distribution.",
  },
  {
    title: "SA 8000",
    description: "Social Accountability certification for ethical workplace practices and worker rights.",
  },
]

export default function IsoCertifications() {
  const accentColor = "#de7d50"

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our ISO Certification Services
          </motion.h1>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of ISO certification services tailored to meet your organization&apos;s specific
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-3" style={{ color: accentColor }}>
                    {cert.title}
                  </h2>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

