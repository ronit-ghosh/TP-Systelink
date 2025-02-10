"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { KaushikBasu, Mothitnandy, PallabMukherjee, SiddhartPratim, SurajitSarkar, TashmitaPaul } from "@/lib/images"
import { useState } from "react"

const teamMembers = [
  {
    name: "Dr. Surajit Sarkar",
    desc: "Food & Beverages",
    image: SurajitSarkar,
    bio: `A distinguished Dairy Microbiologist with first-class honors in both B.Sc. (Dairy Technology) and 
          M.Sc. (Dairy Microbiology), Dr. Sarkar has 27 years of research and industrial experience in dairying 
          and nutrition. With over 106 published articles, including award-winning research, Dr. Sarkar is currently 
          the Deputy General Manager (Quality Assurance) at Keventer Agro Limited. They serve on the editorial 
          boards of prestigious journals like IJFS, IJMAI, and IJNFS. Research interests include dairy fermentation, 
          probiotics, infant nutrition, and functional foods.`,
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
    bio: `A Mechanical Engineer with over 22 years of experience, Mr. Siddhartha Pratim Dawn is a qualified 
          Lead Assessor for ISO 9000, ISO 14000, SA 8000, OHSAS 18001, and TS 16949. As Principal 
          Consultant at Aim Consultancy Services, he oversees operations in India and overseas, specializing 
          in Quality Management, Occupational Health, Food Safety, and Environmental Management. Mr. Dawn 
          has worked with major companies like Indian Oil, Sika India, and BOC India, and is a Lead Auditor for 
          TUV India and SGS India.`,
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
    bio: `With over 29 years of experience, Mohit Kumar Nandi is a highly skilled Metallurgical Engineer 
          specializing in quality assurance, system audits, and management certifications across various 
          industries, including steel, foundry, tea manufacturing, healthcare, and leather. A graduate of Bengal 
          Engineering College, Shibpur, he excels in metallurgical chemistry, material science, and ISO auditing. 
          As a freelance auditor, Mr. Nandi has worked with SGS India, DNV, and the Indian Institute of Welding, 
          upholding industry standards and driving innovation in metallurgical processes.`,
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
    bio: `A highly accomplished professional with over 33 years of expertise in the Pharmaceutical and 
          Cosmetics industries, is currently designated as General Manager – Technical. Renowned for 
          successfully implementing ISO 22716:2007, ISO 9001:2015, and Cosmetic GMP/GLP Rule 2020, he has 
          led 100+ GMP audits and spearheaded advanced manufacturing projects. With extensive skills in 
          Quality Assurance, Business Development, Export, and Regulatory Liaison, he ensures compliance, 
          operational excellence, and the highest standards of quality management systems.`,
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
    bio: `A B.Com graduate from Calcutta University with a DCA from Webel Informatics Ltd and over 25 years 
          of experience. He is a qualified Lead Assessor for ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 
          22000:2015, and FSSC V5.1, certified by IRCA-UK. His consultancy expertise includes developing and 
          implementing Integrated Management Systems, Food Safety Management, and Certification across 
          East and North East India industries. He has worked with companies like Keventer Agro Ltd, Nuvoco 
          Vistas, and Drangchu Beverage Pvt. Ltd. He handles social audits for global firms like Hindustan 
          Unilever and Diageo.`,
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
    bio: `Seasoned HR professional and ISO Consultant with expertise in quality management systems, HR 
          strategy, and workforce optimization. With over a decade of experience, she has successfully led HR 
          functions, ISO audits, and compliance initiatives across diverse industries, ensuring operational 
          excellence and certifications. A certified Lead Auditor and ESG Reporting expert, she has driven 
          improvements in employee engagement, recruitment efficiency, and system compliance, aligning 
          human capital with organizational goals for sustainable growth.`,
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
]

interface ExpandedCards {
  [key: number]: boolean;
}

export default function TeamGrid() {
  const accentColor = "#de7d50"
  const [expandedCards, setExpandedCards] = useState<ExpandedCards>({})

  const toggleCard = (index: number): void => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

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
            Meet Our Team
          </motion.h1>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of experts is dedicated to guiding you through the certification process and ensuring your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-1">{member.name}</h2>
                    <p className={`mb-4 ${!expandedCards[index] ? 'line-clamp-3' : ''}`}>{member.bio}</p>
                    {member.bio && (
                      <p
                        className="mb-4 cursor-pointer flex items-center text-[#de7d50]"
                        onClick={() => toggleCard(index)}
                      >
                        {expandedCards[index] ?
                          <>
                            Show Less
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={accentColor} fill={"none"}>
                              <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </> :
                          <>
                            Show More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={accentColor} fill={"none"}>
                              <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>}
                      </p>
                    )}
                    <div className="flex gap-4">
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
        </div>
      </div>
    </section>
  )
}

