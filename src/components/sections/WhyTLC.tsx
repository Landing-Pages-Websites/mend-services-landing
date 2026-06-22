import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { DualCta } from "@/components/ui/cta";

const REASONS = [
  "25 years building outdoor spaces in the Treasure Valley",
  "Owner-operated — Todd is involved in every project",
  "65+ years of combined crew experience",
  "1,000+ completed projects across the Boise metro",
  "Meticulous craftsmanship, done right the first time",
  "Backed by a 12-month workmanship warranty",
];

const VALUES = [
  "Doing It Right The First Time",
  "Artful Design",
  "Meticulous Detail",
  "Unparalleled Customer Service",
  "Craftsmanship Quality",
];

export default function WhyTLC(): React.JSX.Element {
  return (
    <section id="why-tlc" className="bg-forest-900 py-20 text-white lg:py-28">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">
            Why homeowners choose TLC
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            A local team that builds it right — and stands behind the work
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/80">
            TLC Landscape isn&apos;t a national franchise or a referral service. You work
            directly with an owner-operated crew that has spent 25 years perfecting
            hardscaping and landscape design across Boise and the Treasure Valley.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-[15px] text-white/90">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf-400" strokeWidth={2.5} />
                {reason}
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2">
            {VALUES.map((value) => (
              <li
                key={value}
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/15"
              >
                {value}
              </li>
            ))}
          </ul>

          <DualCta className="mt-10" phoneVariant="dark" primaryLabel="Schedule Your Free On-Site Consultation" />
        </div>

        <ScrollReveal className="lg:justify-self-end">
          <figure className="relative mx-auto max-w-lg overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/team.jpg"
                alt="The TLC Landscape crew on a Treasure Valley project site"
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/90 to-transparent p-6">
              <p className="font-display text-lg font-semibold text-white">
                Owner-operated since 2000
              </p>
              <p className="mt-1 text-sm text-white/80">
                65+ years of combined experience on every crew.
              </p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
