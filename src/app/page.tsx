import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import HvacServices from "@/components/sections/HvacServices";
import PlumbingServices from "@/components/sections/PlumbingServices";
import ElectricalServices from "@/components/sections/ElectricalServices";
import WhyMend from "@/components/sections/WhyMend";
import WarrantyGuarantee from "@/components/sections/WarrantyGuarantee";
import ServiceArea from "@/components/sections/ServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import LeadFormSection from "@/components/sections/LeadFormSection";
import FinalCta from "@/components/sections/FinalCta";

const AREAS_SERVED = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Leander",
  "Pflugerville",
  "Georgetown",
  "Kyle",
  "Buda",
  "Lakeway",
  "Bee Cave",
  "Dripping Springs",
  "Hutto",
  "Manor",
  "San Marcos",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Mend Services",
  url: "https://get.mendservices.com",
  telephone: "+1-737-249-6457",
  image: "https://get.mendservices.com/images/hero-hvac.jpg",
  priceRange: "$$$",
  description:
    "Mend Services is Greater Austin's premium whole-home services provider — HVAC, plumbing and electrical under one roof. Same-day scheduling, 24/7 emergency service, licensed master professionals, a one-year parts and labor warranty and a 4.9-star Google rating.",
  areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name: `${name}, TX` })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <TrustBar />
      <HvacServices />
      <PlumbingServices />
      <ElectricalServices />
      <WhyMend />
      <WarrantyGuarantee />
      <ServiceArea />
      <Testimonials />
      <LeadFormSection />
      <FinalCta />
    </>
  );
}
