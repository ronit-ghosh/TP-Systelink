"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ClipboardList, BookOpen, UserCheck, FileCheck, Award, RefreshCw } from "lucide-react"

const processes = [
  {
    icon: CheckCircle,
    title: "Initial Consultation",
    description:
      "We begin with a thorough discussion to understand your organization's needs, goals, and current systems.",
  },
  {
    icon: ClipboardList,
    title: "Gap Analysis",
    description:
      "Our experts conduct a comprehensive assessment to identify areas that need improvement to meet the ISO standard requirements.",
  },
  {
    icon: BookOpen,
    title: "Implementation Planning",
    description:
      "We develop a tailored implementation plan to address the gaps and align your processes with the ISO standards.",
  },
  {
    icon: UserCheck,
    title: "Documentation and Training",
    description:
      "We assist in creating necessary documentation and provide training to your staff on the new processes and requirements.",
  },
  {
    icon: FileCheck,
    title: "Internal Audit",
    description:
      "We conduct a thorough internal audit to ensure all requirements are met and identify any final adjustments needed.",
  },
  {
    icon: Award,
    title: "Certification Audit",
    description:
      "We support you through the official certification audit conducted by an accredited certification body.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Post-certification, we provide ongoing support to maintain compliance and drive continuous improvement.",
  },
]

export default function CertificationProcess() {
  const accentColor = "#de7d50"

  return (
    <section id="process" className="py-20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <process.icon className="w-6 h-6" style={{ color: accentColor }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

