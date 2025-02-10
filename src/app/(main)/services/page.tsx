import IsoCertificationCards from "@/components/iso-certification-cards"
import CertificationProcess from "@/components/iso-process.cards"

export const metadata = {
  title: "Our Services - TP Systelink",
  description: "Explore our ISO certification services and learn about our certification process.",
}

export default function ServicesPage() {
  return (
    <main className="sm:0 md:0 lg:mx-24 xl:mx-32 2xl:mx-40">
      <IsoCertificationCards />
      <CertificationProcess />
    </main>
  )
}
