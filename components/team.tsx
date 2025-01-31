"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Facebook, PanelTopClose } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Team Member 1",
    position: "Position",
    role: "Certification Expert",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1738330713/Understanding_ISO_Certification__A_Mark_of_Excellence.jpeg_hfbu1f.jpg?height=400&width=400",
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Team Member 2",
    position: "Position",
    role: "Implementation Specialist",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1738330713/Understanding_ISO_Certification__A_Mark_of_Excellence.jpeg_hfbu1f.jpg?height=400&width=400",
    socials: {
      linkedin: "#",
    },
  },
]

export default function Team() {
  const accentColor ="#de7d50"

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
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2"
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

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={member.image || "https://res.cloudinary.com/drynqkitl/image/upload/v1738330713/Understanding_ISO_Certification__A_Mark_of_Excellence.jpeg_hfbu1f.jpg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="mb-2" style={{ color: accentColor }}>
                      {member.position}
                    </p>
                    <p className="text-muted-foreground mb-4">{member.role}</p>
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
            </motion.div>
          ))}

          {/* More Team Members Card */}
          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    color: accentColor,
                  }}
                >
                  <PanelTopClose className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">More Team Members</h3>
                <p className="text-muted-foreground mb-4">Meet our other expert team members</p>
                <Button
                  className="mt-4"
                  style={{
                    backgroundColor: accentColor,
                    color: "white",
                  }}
                >
                  View All
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

