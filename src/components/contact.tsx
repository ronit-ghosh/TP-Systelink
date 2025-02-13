"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Mail, Phone } from "lucide-react"
import axios, { isAxiosError } from "axios"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "./ui/toast"

const services = [
  "ISO 9001 Certification",
  "ISO 14001 Certification",
  "ISO 45001 Certification",
  "ISO 27001 Certification",
  "ISO 50001 Certification",
  "ISO 22716 Certification",
  "ISO/TS 16949 Certification",
  "ISO 22000 Certification",
  "Other"
]

export default function Contact() {
  const accentColor = "#de7d50"
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const formatDate = (date: Date): string => {
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).replace(" at", " at");
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      await axios.post(`/api/contact`, formData)
      toast({
        title: "Thank you for contacting us",
        description: formatDate(new Date()),
        action: (
          <ToastAction altText="Goto schedule to undo">Clear</ToastAction>
        ),
      })
      setLoading(false)
    } catch (error) {
      if (isAxiosError(error)) {
        toast({
          title: error.response?.data.error,
          action: (
            <ToastAction altText="Goto schedule to undo">Clear</ToastAction>
          ),
        })
        console.error(error.response?.data);
      }
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-16 h-1 mx-auto rounded mb-4"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground">Ready to start your certification journey? Contact us today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Interested Service</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                style={{
                  backgroundColor: accentColor,
                  color: "white",
                }}
              >
               {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{

                          color: accentColor,
                        }}
                      >
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:services@tpsystelink.com"><p>services@tpsystelink.com</p></a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          color: accentColor,
                        }}
                      >
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+918777410103"> <p>+91 87774 10103</p></a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.3557825715242!2d88.3227660695827!3d22.525816998720344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279fd6f8f2e9b%3A0xf535d03d2192110!2sDalu%20Sarkar%20Ln%2C%20Mominpore%2C%20Kolkata%2C%20West%20Bengal%20700023!5e0!3m2!1sen!2sin!4v1739112439301!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

