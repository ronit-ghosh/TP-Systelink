"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The certification process was seamless and professional. Their expertise in ISO standards made our journey to certification much easier than expected.",
    company: "Ashok Company",
    sector: "Manufacturing Sector",
    initials: "AC",
  },
  {
    quote:
      "Outstanding support throughout our ISO 14001 certification. The team's knowledge and guidance were invaluable to our success.",
    company: "Tech Innovations",
    sector: "IT Services",
    initials: "TI",
  },
  {
    quote:
      "Highly recommended for their expertise in multiple ISO standards. Their team made the complex certification process simple and manageable.",
    company: "Green Foods",
    sector: "Food Processing",
    initials: "GF",
  },
]

export default function Testimonials() {
  const accentColor = "#de7d50" 

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground">See what our clients say about their certification journey with us</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <Quote className="w-8 h-8 mb-4" style={{ color: accentColor }} />
                    <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback
                        style={{
                          backgroundColor: accentColor,
                          color: "white",
                        }}
                      >
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.company}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.sector}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

