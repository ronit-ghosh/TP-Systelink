"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "We begin with a thorough discussion to understand your organization's needs, goals, and current systems.",
  },
  {
    number: 2,
    title: "Gap Analysis",
    description:
      "Our experts conduct a comprehensive assessment to identify areas that need improvement to meet the ISO standard requirements.",
  },
  {
    number: 3,
    title: "Implementation Planning",
    description:
      "We develop a tailored implementation plan to address the gaps and align your processes with the ISO standards.",
  },
  {
    number: 4,
    title: "Documentation and Training",
    description:
      "We assist in creating necessary documentation and provide training to your staff on the new processes and requirements.",
  },
  {
    number: 5,
    title: "Internal Audit",
    description:
      "We conduct a thorough internal audit to ensure all requirements are met and identify any final adjustments needed.",
  },
  {
    number: 6,
    title: "Certification Audit",
    description:
      "We support you through the official certification audit conducted by an accredited certification body.",
  },
  {
    number: 7,
    title: "Continuous Improvement",
    description:
      "Post-certification, we provide ongoing support to maintain compliance and drive continuous improvement.",
  },
]

export default function CertificationProcess() {
  const { theme } = useTheme()
  const accentColor = "#de7d50"

  return (
    <section className="py-20" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Certification Process
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined certification process ensures a smooth journey towards ISO compliance
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/20" />
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: accentColor }}
                >
                  {step.number}
                </div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

