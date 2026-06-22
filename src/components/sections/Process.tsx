import Image from "next/image";
import { CalendarCheck, MessageSquare, PencilRuler, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DualCta } from "@/components/ui/cta";

interface Step {
  icon: LucideIcon;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    icon: CalendarCheck,
    title: "Schedule your free on-site visit",
    body: "Book a relaxed, no-obligation consultation at a time that works for you. No pressure, no sales pitch.",
  },
  {
    icon: MessageSquare,
    title: "Walk your property & share your vision",
    body: "An experienced TLC designer walks your yard, listens to how you want to use the space, and talks through what's possible.",
  },
  {
    icon: PencilRuler,
    title: "Receive a custom plan",
    body: "We put together a design and plan built specifically for your space, your goals and your budget — no guesswork.",
  },
  {
    icon: Hammer,
    title: "We build it right",
    body: "Our own crew installs your project with meticulous detail — and backs the workmanship with a 12-month warranty.",
  },
];

export default function Process(): React.JSX.Element {
  return (
    <section id="process" className="bg-surface py-20 lg:py-28">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <figure className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-forest-950/10 ring-1 ring-line lg:order-1">
            <Image
              src="/images/design-consult.jpg"
              alt="TLC Landscape owner reviewing a project plan on site with a homeowner"
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">
              What to expect
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Your free on-site consultation, step by step
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              It&apos;s simple, relaxed and completely free. Here&apos;s exactly how it works
              from first visit to finished project.
            </p>

            <ol className="mt-8 space-y-5">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 font-display text-base font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-brand-500" strokeWidth={2} />
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <DualCta className="mt-10" primaryLabel="Schedule Your Free On-Site Consultation" />
          </div>
        </div>
      </div>
    </section>
  );
}
