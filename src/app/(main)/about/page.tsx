import CeoMessage from "@/components/ceo-message"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import WhatSetsUsApart from "@/components/what-sets-us-apart"
import WhyEntrustUs from "@/components/why-entrust-us"
import WhyUs from "@/components/why-us"

export const metadata = {
  title: "About Us - TP Systelink",
  description:
    "Learn more about TP Systelink, our mission, values, and what sets us apart in ISO certification services.",
}

export default function AboutPage() {
  return (
    <main className="sm:0 md:0 lg:mx-24 xl:mx-32 2xl:mx-40">
      <Features />
      <WhyUs />
      <WhatSetsUsApart />
      <WhyEntrustUs />
      <Testimonials />
      <CeoMessage />
    </main>
  )
}

