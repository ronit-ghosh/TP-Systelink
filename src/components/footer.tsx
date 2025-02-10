"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail, ShieldHalf } from "lucide-react"
import { navItems } from "./header"
import ToggleTheme from "./toggle-theme"

const quickLinks = navItems

const services = [
  "ISO 9001 Certification",
  "ISO 14001 Certification",
  "ISO 45001 Certification",
  "ISO 27001 Certification",
  "ISO 50001 Certification",
  "ISO 22716 Certification",
  "ISO/TS 16949 Certification",
  "ISO 22000 Certification",
]

export default function Footer() {

  return (
    <footer className="bg-muted/50 pt-16 pb-2 bg-gradient-to-b dark:from-[#0a0a0a] from-[#fff]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">TP Systelink</h3>
            <p className="text-muted-foreground mb-6">
              Simplifying Standards, Driving Excellence since 2019. Your trusted partner in ISO certification and
              quality management systems.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                <ShieldHalf className="w-5 h-5" />
              </Link>
              <ToggleTheme />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/5BHSVZG6jxhcREWq7"><p> 3/3/1 Dalu Sarkar Lane, Ground Floor, Kolkata-700023</p></a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+918777410103"> <p>+91 87774 10103</p></a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:services@tpsystelink.com"><p>services@tpsystelink.com</p></a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} TP Systelink. All rights reserved.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-2 text-center text-sm text-muted-foreground">
          <p>Made with ❤️ by <a href="https://ignite-studios.vercel.app/" target="_blank" className="hover:underline">Ignite Studios</a></p>
        </div>
      </div>
    </footer>
  )
}

