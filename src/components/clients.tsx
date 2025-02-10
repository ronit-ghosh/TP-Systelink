"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Building2, Monitor, Heart, GraduationCap, Car, UtensilsCrossed, Cpu, Shield } from "lucide-react"
import CountUp from "./ui/countup"

const stats = [
  {
    number: <><CountUp
      from={0}
      to={6}
      separator=","
      direction="up"
      duration={1}
      className="count-up-text"
    />+</>, 
    label: "Years Experience"
  },
  {
    number: <CountUp
      from={0}
      to={47}
      separator=","
      direction="up"
      duration={1}
      className="count-up-text"
    />,
    label: "Clients Served"
  },
  {
    number: <CountUp
      from={0}
      to={8}
      separator=","
      direction="up"
      duration={1}
      className="count-up-text"
    />,
    label: "ISO Standards"
  },
  {
    number:<> <CountUp
      from={0}
      to={100}
      separator=","
      direction="up"
      duration={1}
      className="count-up-text"
    />%</>,
    label: "Success Rate"
  },
]

const industries = [
  { name: "Manufacturing", icon: Building2 },
  { name: "IT Services", icon: Monitor },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "Automotive", icon: Car },
  { name: "Food & Beverage", icon: UtensilsCrossed },
  { name: "Electronics", icon: Cpu },
  { name: "Defense", icon: Shield },
]

export default function Clients() {
  const accentColor =  "#de7d50"

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Trusted Clients
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground">Join our growing list of satisfied clients across various industries</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: accentColor }}>
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <industry.icon className="w-8 h-8 mx-auto mb-4" style={{ color: accentColor }} />
                  <p className="font-medium">{industry.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

