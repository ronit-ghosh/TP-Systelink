"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const mainCertifications = [
  {
    id: "iso9001",
    title: "ISO 9001",
    subtitle: "Quality Management",
    description: "International standard for Quality Management Systems",
    backContent: ["Process Approach", "Customer Focus", "Leadership", "Continuous Improvement"],
  },
  {
    id: "iso14001",
    title: "ISO 14001",
    subtitle: "Environmental Management",
    description: "Standard for Environmental Management Systems",
    backContent: ["Environmental Impact", "Sustainability", "Compliance", "Resource Efficiency"],
  },
  {
    id: "iso45001",
    title: "ISO 45001",
    subtitle: "Occupational Safety",
    description: "Standard for Occupational Health and Safety",
    backContent: ["Risk Management", "Safety Culture", "Legal Compliance", "Worker Protection"],
  },
]

const additionalCertifications = [
  "ISO 27001 - Information Security",
  "ISO 50001 - Energy Management",
  "ISO 22716 - GMP",
  "ISO/TS 16949 - Automotive",
  "ISO 22000 - Food Safety",
  "SA 8000 - Social Accountability",
]

export default function CertificationPortfolio() {
  const accentColor = "#de7d50"

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Certification Portfolio
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground">Comprehensive certification solutions tailored to your industry needs</p>
        </div>

        {/* Main Certifications */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainCertifications.map((cert, index) => (
            <div key={cert.id} className="perspective">
              <motion.div
                className="relative preserve-3d duration-500 hover:rotate-y-180 cursor-pointer h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Front of card */}
                <Card className="absolute w-full h-full backface-hidden p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: accentColor }}>
                    {cert.title}
                  </h3>
                  <h4 className="text-xl mb-2">{cert.subtitle}</h4>
                  <p className="text-muted-foreground">{cert.description}</p>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute w-full h-full backface-hidden rotate-y-180 p-6 flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: index === 1 ? "#de7d50" : "var(--card)",
                    color: index === 1 ? "white" : "var(--card-foreground)",
                  }}
                >
                  <ul className="space-y-4">
                    {cert.backContent.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">Additional Certifications</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {additionalCertifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-muted rounded-full px-6 py-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

