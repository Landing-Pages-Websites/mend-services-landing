import Image from "next/image";
import { Squircle, Layers, Waves, Flame, Mountain, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { DualCta } from "@/components/ui/cta";

interface Service {
  icon: LucideIcon;
  title: string;
  image: string;
  alt: string;
  body: string;
}

const FEATURED: Service = {
  icon: Squircle,
  title: "Paver Patios & Walkways",
  image: "/images/big-paver-patio.jpg",
  alt: "Expansive custom paver patio with seating area in a Boise backyard",
  body: "The heart of most outdoor living spaces. We design and lay precision paver patios, walkways and driveways that handle Idaho freeze-thaw and look better every year — laid on a proper base so they stay flat, level and beautiful for decades.",
};

const SERVICES: Service[] = [
  {
    icon: Layers,
    title: "Retaining Walls",
    image: "/images/front-yard-design.jpg",
    alt: "Tiered retaining wall and landscaped front yard by TLC Landscape",
    body: "Engineered block and natural-stone walls that tame slopes, create usable terraces and add structure — built to drain properly and hold for the long haul.",
  },
  {
    icon: Waves,
    title: "Water Features & Ponds",
    image: "/images/water-feature.jpg",
    alt: "Custom backyard water feature with natural stone surround",
    body: "Pondless waterfalls, streams and custom water features that bring movement and sound to your yard — the centerpiece your outdoor space has been missing.",
  },
  {
    icon: Flame,
    title: "Fire Pits & Outdoor Living",
    image: "/images/fire-pit.jpg",
    alt: "Stone fire pit and paver seating area in a Treasure Valley backyard",
    body: "Fire pits, seating walls and full outdoor living rooms designed for how you actually entertain — so your yard works just as well after sunset.",
  },
  {
    icon: Mountain,
    title: "Flagstone & Natural Stone",
    image: "/images/flagstone.jpg",
    alt: "Flagstone patio and natural stone steps installed by TLC Landscape",
    body: "Hand-set flagstone patios, paths and steppers, plus boulder and natural-stone accents that give your landscape a grounded, organic, custom feel.",
  },
  {
    icon: Sprout,
    title: "Full Landscape Design & Installation",
    image: "/images/paver-patio-2.jpg",
    alt: "Completed landscape design with patio, plantings and lawn",
    body: "Start-to-finish design and installation: grading, plantings, lawn, lighting and irrigation — a cohesive plan that ties every element of your yard together.",
  },
];

export default function Services(): React.JSX.Element {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-max">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">
            What we build
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Hardscaping &amp; landscape design, built to last
          </h2>
          <p className="mt-4 text-lg text-muted">
            From the first paver to the final plant, we craft outdoor spaces that
            elevate how your Boise-area home looks — and how you live outside.
          </p>
        </header>

        {/* Featured hardscaping service */}
        <ScrollReveal className="mt-14">
          <article className="grid items-center gap-8 overflow-hidden rounded-2xl bg-surface ring-1 ring-line lg:grid-cols-2">
            <figure className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-80">
              <Image
                src={FEATURED.image}
                alt={FEATURED.alt}
                fill
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="p-8 lg:p-12">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                <FEATURED.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {FEATURED.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{FEATURED.body}</p>
            </div>
          </article>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-shadow duration-200 hover:shadow-xl hover:shadow-forest-950/10">
                <figure className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                    <service.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.body}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <DualCta className="mt-16 justify-center" primaryLabel="Schedule Your Free On-Site Consultation" />
      </div>
    </section>
  );
}
