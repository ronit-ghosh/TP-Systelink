"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock, Target, Sparkles } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted Certification Partner",
    description:
      "Over two decades of experience in providing reliable ISO certification services to businesses across industries.",
  },
  {
    icon: Award,
    title: "Accredited Excellence",
    description: "Internationally recognized accreditation ensuring the highest standards of certification services.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated team of certified professionals with extensive experience in quality management systems.",
  },
  {
    icon: Clock,
    title: "Efficient Process",
    description: "Streamlined certification process designed to minimize disruption to your business operations.",
  },
  {
    icon: Target,
    title: "Industry Focus",
    description:
      "Specialized expertise across multiple industries ensuring relevant and effective certification solutions.",
  },
  {
    icon: Sparkles,
    title: "Continuous Support",
    description: "Ongoing guidance and support throughout your certification journey and beyond.",
  },
]

export default function Features() {
  const { theme } = useTheme()
  const accentColor = "#de7d50"

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-2"
            style={{ color: accentColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Features
          </motion.h1>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what makes TP Systelink the preferred choice for ISO certification services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 mb-4" style={{ color: accentColor }} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

