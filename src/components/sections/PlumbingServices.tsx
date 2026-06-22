import Image from "next/image";
import { Droplets, Waves, Wrench, ShowerHead } from "lucide-react";
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
    icon: Droplets,
    title: "Water Heaters",
    body: "Repair, replacement and tankless upgrades — often same day, so you're never stuck with a cold shower for long.",
  },
  {
    icon: Waves,
    title: "Drain Clearing",
    body: "Clogged or slow drains cleared fast, with camera diagnostics to find the real cause instead of guessing.",
  },
  {
    icon: Wrench,
    title: "Repairs & Leaks",
    body: "Leaks, fixtures and pipe repairs handled cleanly — we explain the problem and the fix before any work starts.",
  },
  {
    icon: ShowerHead,
    title: "Fixtures & Installs",
    body: "Faucets, fixtures, water lines and whole-home plumbing installed to code by licensed master plumbers.",
  },
];

export default function PlumbingServices(): React.JSX.Element {
  return (
    <section id="plumbing" className="bg-surface py-20 lg:py-28">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="order-2 lg:order-1">
            <figure className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink/15 ring-1 ring-line">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/plumbing.jpg"
                  alt="Mend plumber repairing pipework beneath a bathroom water heater in an Austin-area home"
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-line">
                <Image
                  src="/images/icon-water-heater.png"
                  alt=""
                  width={74}
                  height={74}
                  className="h-7 w-7"
                />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-600">
                Plumbing
              </p>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
              Plumbing Done Right{" "}
              <span className="text-teal-500">the First Time</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              From a water heater that quit overnight to a stubborn drain, our licensed
              plumbers show up when we say we will and leave your home cleaner than we
              found it. Upfront communication, clean workmanship, and the same one-year
              parts &amp; labor warranty on every job.
            </p>

            <DualCta className="mt-8" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={(i % 4) * 70}>
              <article className="group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-line transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/10 hover:ring-brand-500">
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
