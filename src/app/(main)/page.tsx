import About from "@/components/about";
import CertificationPortfolio from "@/components/certification-portfolio";
import CertificationProcess from "@/components/certification-process";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="sm:0 md:0 lg:mx-24 xl:mx-32 2xl:mx-40">
        <About />
        <Services />
        <CertificationPortfolio />
        <CertificationProcess />
        <Team />
        <Testimonials />
        <Clients />
        <Contact />
        <Toaster />
      </main>
    </>
  )
}

