"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Quote } from "lucide-react"
import { TestimonialsArr } from "@/lib/testimonials"

const testimonials = TestimonialsArr

export default function Testimonials() {
  const accentColor = "#de7d50"

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
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
          <p className="text-muted-foreground">
            See what our clients say about their certification journey with us
          </p>
        </div>

        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-96 flex-shrink-0"
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}