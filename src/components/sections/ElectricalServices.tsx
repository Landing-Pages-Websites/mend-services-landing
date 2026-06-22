import Image from "next/image";
import { Zap, BatteryCharging, PlugZap, ClipboardCheck } from "lucide-react";
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
    icon: Zap,
    title: "Panels & Wiring",
    body: "Panel upgrades, rewiring and troubleshooting to keep your home safe, code-compliant and ready for modern loads.",
  },
  {
    icon: BatteryCharging,
    title: "Home Generators",
    body: "Standby generator installation and service so your home stays powered through Texas storms and grid outages.",
  },
  {
    icon: PlugZap,
    title: "EV Charging",
    body: "Level 2 EV charger installation done cleanly and correctly the first time, sized right for your vehicle.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspections & Repairs",
    body: "Electrical inspections, outlets, lighting and repairs handled by licensed master electricians.",
  },
];

export default function ElectricalServices(): React.JSX.Element {
  return (
    <section id="electrical" className="bg-white py-20 lg:py-28">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface ring-1 ring-line">
                <Image
                  src="/images/icon-ev-charging.png"
                  alt=""
                  width={74}
                  height={74}
                  className="h-7 w-7"
                />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-600">
                Electrical
              </p>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
              Safe, Code-Right{" "}
              <span className="text-teal-500">Electrical Work</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              Flickering lights, an overloaded panel, or a new EV charger — our licensed
              electricians handle it safely and explain every recommendation in plain
              English. Whole-home electrical, backed by the same warranty and the same
              Trade Up service you&apos;d expect from a premium local team.
            </p>

            <DualCta className="mt-8" />
          </div>

          <ScrollReveal className="lg:justify-self-end">
            <figure className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink/15 ring-1 ring-line">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/electrical.jpg"
                  alt="Mend electrician working inside an exterior electrical panel on an Austin-area home"
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
