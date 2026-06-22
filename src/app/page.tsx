import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyTLC from "@/components/sections/WhyTLC";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import Faq from "@/components/sections/Faq";
import Consultation from "@/components/sections/Consultation";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "TLC Landscape",
  url: "https://book.tlcscape.com",
  telephone: "+1-208-859-9955",
  image: "https://book.tlcscape.com/images/hero-hardscape.jpg",
  priceRange: "$$$",
  foundingDate: "2000",
  description:
    "Owner-operated landscape design and hardscaping company serving Boise and the Treasure Valley for 25+ years. Custom paver patios, retaining walls, water features, fire pits, flagstone and full landscape design and installation. 1,000+ projects completed with a 12-month workmanship warranty.",
  areaServed: [
    { "@type": "City", name: "Boise, ID" },
    { "@type": "City", name: "Eagle, ID" },
    { "@type": "City", name: "Meridian, ID" },
    { "@type": "City", name: "Garden City, ID" },
    { "@type": "City", name: "Hidden Springs, ID" },
    { "@type": "City", name: "Star, ID" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boise",
    addressRegion: "ID",
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
      <Services />
      <WhyTLC />
      <Process />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <Consultation />
    </>
  );
}
