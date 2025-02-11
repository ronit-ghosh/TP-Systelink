import IsoCertificationCards from "@/components/iso-certification-cards"
import CertificationProcess from "@/components/iso-process.cards"

export const metadata = {
  title: "Our Services - TP Systelink",
  description: "Explore our ISO certification services, including ISO 9001, ISO 14001, and more for business compliance and excellence.",
};


export default function ServicesPage() {
  return (
    <main className="sm:0 md:0 lg:mx-24 xl:mx-32 2xl:mx-40">
      <IsoCertificationCards />
      <CertificationProcess />
    </main>
  )
}
