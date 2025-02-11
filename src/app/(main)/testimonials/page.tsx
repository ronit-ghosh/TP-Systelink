import TestimonialsCards from "@/components/testimonials-cards"

export const metadata = {
    title: "Customer Testimonials - TP Systelink",
    description: "Read what our satisfied clients say about TP Systelink's ISO certification services. Trusted by businesses since 2000.",
    openGraph: {
      title: "Customer Testimonials - TP Systelink",
      description: "Discover how TP Systelink has helped businesses achieve ISO compliance with our reliable and professional certification services.",
      url: "https://tp-systelink.vercel.app/testimonials",
      type: "website",
    },
  };
  

export default function page() {
    return(
        <>
        <TestimonialsCards/>
        </>
    )
}
