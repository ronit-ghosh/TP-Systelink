"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function CeoMessage() {

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Card className="w-full bg-muted/50">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <Quote className="w-8 h-8 md:w-12 md:h-12" />
                  <blockquote className="text-base md:text-lg">
                    &quot;At TP Systelink, our mission is to simplify the path to excellence through comprehensive
                    certification services. We believe that quality management should be accessible to all
                    organizations, regardless of their size or industry. Our team&apos;s dedication to this mission has
                    helped hundreds of businesses achieve their certification goals and improve their operational
                    excellence.&quot;
                  </blockquote>
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-semibold">Tashmita A Paul</h3>
                    <p className="text-base md:text-lg">
                      CEO, TP Systelink
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <Image
                      src="https://res.cloudinary.com/drynqkitl/image/upload/v1739103143/Tashmita_A_Paul_ghdvj7.jpg"
                      alt="CEO of TP Systelink"
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}