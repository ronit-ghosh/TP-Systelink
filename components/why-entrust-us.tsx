"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Briefcase, Shield, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Mastery Across Standards",
    description:
      "Our expertise spans the full spectrum of ISO standards—ISO 9001, ISO 14001, ISO 45001, and beyond—allowing us to sculpt bespoke compliance strategies tailored to your specific needs and aspirations.",
  },
  {
    icon: Users,
    title: "A Collaborative Partnership",
    description:
      "We walk beside you at every juncture, offering not just services, but a true collaboration. From insightful assessments to seamless implementations and audit readiness, we ensure a journey of precision and success.",
  },
  {
    icon: Briefcase,
    title: "Industry Acumen",
    description:
      "Our team's profound industry knowledge translates into tailored solutions that resonate deeply with the nuances of your sector, empowering you to rise above the ordinary.",
  },
  {
    icon: Shield,
    title: "A Legacy of Trust",
    description:
      "With a rich history of transforming organizations, our clients' successes speak to our unwavering commitment to delivering enduring, impactful results.",
  },
  {
    icon: Rocket,
    title: "A Vision for the Future",
    description:
      "Our partnership extends far beyond compliance. We align ourselves with your long-term vision, fostering continuous improvement, innovation, and operational brilliance.",
  },
]

export default function WhyEntrustUs() {
  const { theme } = useTheme()
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
            Why Entrust TP SYSTELINK with Your Compliance Journey?
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At TP SYSTELINK, we don't just offer compliance solutions—we craft pathways to excellence, embedding
            quality, sustainability, and safety into the very fabric of your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <reason.icon className="w-12 h-12 mb-4" style={{ color: accentColor }} />
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

