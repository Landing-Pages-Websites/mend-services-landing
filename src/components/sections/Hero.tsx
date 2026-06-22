import Image from "next/image";
import { Trees, ShieldCheck, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { DualCta } from "@/components/ui/cta";

const CHIPS = [
  { icon: Trees, label: "25 years building Treasure Valley yards" },
  { icon: MapPin, label: "Owner-operated, local Boise crew" },
  { icon: ShieldCheck, label: "1,000+ projects · 12-month warranty" },
];

export default function Hero(): React.JSX.Element {
  return (
    <section id="hero" className="relative overflow-hidden bg-forest-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-hardscape.jpg"
          alt="Custom paver patio with a water feature and lush landscaping in a Boise, Idaho backyard by TLC Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-900/60" />
      </div>

      <div className="relative container-max grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="animate-fade-up lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-leaf-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-leaf-300 ring-1 ring-leaf-500/30">
            Boise &amp; the Treasure Valley · 25 Years
          </span>

          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">
            A Custom Outdoor Living Space You&apos;ll Actually{" "}
            <span className="text-leaf-400">Use</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Paver patios, retaining walls, water features and full landscape design —
            designed and built right the first time by a local, owner-operated team that
            has transformed Treasure Valley yards for 25 years.
          </p>

          <div className="mt-8">
            <DualCta primaryLabel="Schedule Your Free On-Site Consultation" phoneVariant="dark" />
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-1">
            {CHIPS.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2.5 text-sm text-white/90">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <chip.icon className="h-4 w-4 text-leaf-400" strokeWidth={2} />
                </span>
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-in lg:col-span-5">
          <LeadForm idPrefix="hero" />
        </div>
      </div>
    </section>
  );
}
