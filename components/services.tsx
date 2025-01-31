"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { CheckCircle, Trees, Shield, Lock, Zap, MoreHorizontal } from "lucide-react"

const services = [
  {
    icon: CheckCircle,
    title: "ISO 9001",
    description:
      "Quality Management System certification ensuring organizational excellence and customer satisfaction.",
  },
  {
    icon: Trees,
    title: "ISO 14001",
    description: "Environmental Management System certification for sustainable business practices.",
  },
  {
    icon: Shield,
    title: "ISO 45001",
    description: "Occupational Health & Safety Management System for workplace safety.",
  },
  {
    icon: Lock,
    title: "ISO 27001",
    description: "Information Security Management System for data protection and cybersecurity.",
  },
  {
    icon: Zap,
    title: "ISO 50001",
    description: "Energy Management System for optimal energy efficiency and sustainability.",
  },
]

export default function Services() {
  const { theme } = useTheme()
  const accentColor = "#de7d50"

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Certification Services
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <service.icon
                    className="w-12 h-12 p-2 rounded-lg"
                    style={{
                      color: accentColor,
                    }}
                  />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* More Services Card */}
          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4 h-full">
                <MoreHorizontal
                  className="w-12 h-12 p-2 rounded-lg"
                  style={{
                    color: accentColor,
                    backgroundColor: theme === "dark" ? "rgba(49, 70, 51, 0.1)" : "rgba(222, 125, 80, 0.1)",
                  }}
                />
                <h3 className="text-xl font-bold">More Services</h3>
                <p className="text-muted-foreground">
                  Discover our other certification services including ISO 22716, ISO/TS 16949, ISO 22000, and SA 8000
                </p>
                <Button
                  className="mt-4"
                  style={{
                    backgroundColor: accentColor,
                    color: "white",
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

