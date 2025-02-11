"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TestimonialsArr } from "@/lib/testimonials"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function TestimonialsCards() {
    const testimonials = TestimonialsArr
    const accentColor = "#de7d50"

    return (
        <div className="mt-24 px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
                <motion.h2
                    className="text-4xl font-bold mb-2"
                    style={{ color: accentColor }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Meet Our Team
                </motion.h2>
                <motion.div
                    className="w-16 h-1 mx-auto rounded mb-4"
                    style={{ backgroundColor: accentColor }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                />
                <p className="text-muted-foreground max-w-2xl mx-auto px-4">
                    Our team of experts is dedicated to guiding you through the certification process and ensuring your success.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
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
    )
}