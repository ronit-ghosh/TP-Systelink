"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

const differentiators = [
  {
    title: "Industry Expertise",
    description:
      "Our team brings deep industry knowledge and expertise across various sectors, ensuring relevant and effective certification solutions.",
  },
  {
    title: "Customized Approach",
    description:
      "We tailor our certification process to meet your specific needs while maintaining compliance with international standards.",
  },
  {
    title: "Dedicated Support",
    description:
      "Our commitment extends beyond certification, providing ongoing support to ensure sustained compliance and improvement.",
  },
  {
    title: "Time-Efficient Process",
    description: "Our streamlined approach ensures quick turnaround without compromising on quality or thoroughness.",
  },
]

export default function WhatSetsUsApart() {
  const accentColor =  "#de7d50"

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
            What Sets Us Apart
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our unique approach and commitment to excellence make us stand out in the certification industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

