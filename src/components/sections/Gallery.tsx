import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface Shot {
  src: string;
  alt: string;
  featured?: boolean;
}

const SHOTS: Shot[] = [
  {
    src: "/images/patio-pavers.jpg",
    alt: "Custom paver patio with curved borders in a Treasure Valley backyard",
    featured: true,
  },
  { src: "/images/paver-detail.jpg", alt: "Close detail of precision-laid paver work" },
  { src: "/images/gallery-walkway.jpg", alt: "Paver walkway winding through a landscaped Treasure Valley yard" },
  { src: "/images/gallery-stone-steps.jpg", alt: "Natural stone retaining wall with built-in steps" },
  { src: "/images/gallery-pond.jpg", alt: "Backyard pond water feature set in a landscaped yard" },
  { src: "/images/gallery-planting.jpg", alt: "Freshly planted garden bed with new landscaping" },
];

export default function Gallery(): React.JSX.Element {
  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="container-max">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">
            Recent work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Recent projects across the Treasure Valley
          </h2>
          <p className="mt-4 text-lg text-muted">
            A look at real paver patios, water features and outdoor living spaces we&apos;ve
            built for Boise-area homeowners.
          </p>
        </header>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {SHOTS.map((shot, i) => (
            <ScrollReveal
              key={shot.src}
              delay={(i % 4) * 70}
              className={shot.featured ? "col-span-2 row-span-2" : ""}
            >
              <figure className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-line">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
