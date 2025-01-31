"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const stats = [
  { number: "23+", label: "Years Experience" },
  { number: "500+", label: "Clients Served" },
  { number: "9+", label: "ISO Standards" },
  { number: "100%", label: "Success Rate" },
]

const services = [
  "Expert Consultation and Guidance",
  "Comprehensive Certification Support",
  "Dedicated Professional Team",
]

export default function About() {

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-4xl font-bold mb-2" >
                      {stat.number}
                    </h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.h2
                className="text-3xl font-bold"
                style={{ color: "#de7d50" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About TP Systelink
              </motion.h2>
              <div className="w-16 h-1 rounded" />
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                Since 2000, TP Systelink has been at the forefront of ISO certification services, helping organizations
                achieve excellence through standardization. Based in West Bengal, we&apos;ve established ourselves as a
                trusted partner in quality management systems and certification processes.
              </p>
              <p className="text-muted-foreground">
                Our commitment to simplifying standards and driving excellence has made us a preferred choice for
                businesses seeking ISO certifications. We take pride in our comprehensive approach and dedication to
                empowering organizational success.
              </p>
            </motion.div>

            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}

