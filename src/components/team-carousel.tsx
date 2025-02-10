"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Linkedin, Twitter, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { KaushikBasu, Mothitnandy, PallabMukherjee, SiddhartPratim, SurajitSarkar, TashmitaPaul } from "@/lib/images"

const teamMembers = [
  {
    name: "Dr. Surajit Sarkar",
    desc: "Food & Beverages",
    image: SurajitSarkar,
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Mr. Siddhart Pratim Dawn",
    desc: "Mechanical , Civil , Electrical",
    image: SiddhartPratim,
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Mr. Mohit Kr. Nandy",
    desc: "Mechanical , Civil , Electrical",
    image: Mothitnandy,
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Mr. Kaushik Basu",
    desc: "Bio & Chemistry",
    image: KaushikBasu,
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Mr. Pallab Mukherjee",
    desc: "Senior Consultant",
    image: PallabMukherjee,
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Tashmita A Paul",
    desc: "Founder & CEO",
    image: TashmitaPaul,
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
]

export default function TeamCarousel() {
  const accentColor = "#de7d50"

  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2"
            style={{ color: accentColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Expert Team
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground">
            Meet our dedicated professionals committed to your certification success
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm mx-auto md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden h-[29rem]">
                    <CardContent className="p-0">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                        <p className="mb-2 h-12 capitalize" style={{ color: accentColor }}>
                          {member.desc}
                        </p>
                        <div className="flex justify-center gap-4">
                          {member.socials.linkedin && (
                            <Link
                              href={member.socials.linkedin}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                            </Link>
                          )}
                          {member.socials.twitter && (
                            <Link
                              href={member.socials.twitter}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Twitter className="w-5 h-5" />
                            </Link>
                          )}
                          {member.socials.facebook && (
                            <Link
                              href={member.socials.facebook}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Facebook className="w-5 h-5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-8">
          <Link
            href="/team"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            style={{ backgroundColor: accentColor }}
          >
            View All Team Members
          </Link>
        </div>
      </div>
    </section>
  )
}

