import Image from "next/image";
import { ShieldCheck, Clock, BadgeCheck, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { CallCta, ScheduleCta } from "@/components/ui/cta";

const TRUST_CHIPS = [
  { icon: ShieldCheck, label: "1-year parts & labor warranty" },
  { icon: BadgeCheck, label: "Licensed master professionals" },
  { icon: Clock, label: "Same-day & 24/7 emergency" },
  { icon: MapPin, label: "Locally rooted in Greater Austin" },
];

export default function Hero(): React.JSX.Element {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-hvac.jpg"
          alt="Mend Services technician servicing a home air-conditioning unit outside an Austin-area home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[35%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/95 to-ink-900/50" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900 to-transparent" />
      </div>

      <div className="relative container-max grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="animate-fade-up lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-300 ring-1 ring-brand-500/30">
            Greater Austin · HVAC · Plumbing · Electrical
          </span>

          <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Austin Heat Won&apos;t Wait.{" "}
            <span className="text-brand-400">Neither Do We.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            When your AC quits in the Texas heat, you need a licensed master tech today —
            not next week. Mend delivers same-day air conditioning repair, plus
            whole-home plumbing and electrical, backed by a one-year parts &amp; labor
            warranty and a 4.9-star reputation. We live and work here too.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallCta />
            <ScheduleCta variant="dark" />
          </div>

          <div className="mt-7 flex items-center gap-4">
            <Image
              src="/images/google-4-9-rating.png"
              alt="Rated 4.9 stars by Google customers"
              width={262}
              height={165}
              className="h-16 w-auto rounded-lg bg-white/95 px-3 py-2"
            />
            <p className="max-w-[14rem] text-sm leading-snug text-white/75">
              Trusted by Greater Austin homeowners across hundreds of Google reviews.
            </p>
          </div>

          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {TRUST_CHIPS.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2.5 text-sm text-white/90">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <chip.icon className="h-4 w-4 text-brand-400" strokeWidth={2.25} />
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
