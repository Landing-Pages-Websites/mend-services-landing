import Image from "next/image";
import { Snowflake, Flame, CalendarClock, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { DualCta } from "@/components/ui/cta";

interface Capability {
  icon: LucideIcon;
  title: string;
  body: string;
}

const CAPABILITIES: Capability[] = [
  {
    icon: Snowflake,
    title: "AC Repair & Replacement",
    body: "Fast, honest diagnostics — we repair what's worth repairing and replace when it makes sense. Free estimates on system replacements.",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    body: "Furnace and heat-pump repair, tune-ups and installation to keep your home warm through every Hill Country cold snap.",
  },
  {
    icon: CalendarClock,
    title: "Maintenance Plans",
    body: "Seasonal tune-ups that catch small issues before they become a 100-degree breakdown — and extend the life of your system.",
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    body: "Filtration, duct and air-quality solutions for cleaner, healthier, better-circulated air in every room of your home.",
  },
];

export default function HvacServices(): React.JSX.Element {
  return (
    <section id="hvac" className="bg-white py-20 lg:py-28">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface ring-1 ring-line">
                <Image
                  src="/images/icon-air-conditioning.png"
                  alt=""
                  width={74}
                  height={74}
                  className="h-7 w-7"
                />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-600">
                Heating &amp; Air Conditioning
              </p>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
              Cool, Reliable Comfort —{" "}
              <span className="text-teal-500">Backed by Master Techs</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              When the Austin heat spikes, a dead AC isn&apos;t an inconvenience — it&apos;s an
              emergency. Our licensed HVAC pros diagnose fast, fix it right the first time,
              and back the work with a one-year parts &amp; labor warranty. Same-day
              appointments and 24/7 emergency service keep your home comfortable in any
              season.
            </p>

            <DualCta className="mt-8" />
          </div>

          <ScrollReveal className="lg:justify-self-end">
            <figure className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink/15 ring-1 ring-line">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hero-hvac.jpg"
                  alt="Mend HVAC technician inspecting a residential air-conditioning condenser unit"
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={(i % 4) * 70}>
              <article className="group flex h-full flex-col rounded-2xl bg-surface p-6 ring-1 ring-line transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/10 hover:ring-brand-500">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500 ring-1 ring-teal-500/15">
                  <cap.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
