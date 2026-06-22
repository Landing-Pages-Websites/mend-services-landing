import { ShieldCheck, BadgeCheck, ThumbsUp, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CallCta, ScheduleCta } from "@/components/ui/cta";

interface Pledge {
  icon: LucideIcon;
  title: string;
  body: string;
}

const PLEDGES: Pledge[] = [
  {
    icon: ShieldCheck,
    title: "1-Year Parts & Labor",
    body: "Every repair and installation is covered by a full one-year parts and labor warranty.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    body: "Master-licensed HVAC, plumbing and electrical pros — fully insured for your protection.",
  },
  {
    icon: ThumbsUp,
    title: "We Make It Right",
    body: "If something isn't right, we come back and fix it. That's the Mend standard, every time.",
  },
];

export default function WarrantyGuarantee(): React.JSX.Element {
  return (
    <section id="warranty" className="bg-surface py-20 lg:py-28">
      <div className="container-max">
        <div className="overflow-hidden rounded-3xl bg-teal-500 text-white shadow-2xl shadow-teal-700/20">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:items-center lg:p-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-300">
                Our Promise
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                One-Year Parts &amp; Labor Warranty
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/85">
                We stand behind every job. Each repair and installation is backed by a
                full one-year parts and labor warranty — if something isn&apos;t right, we
                make it right. Ask about current seasonal savings when you call.
              </p>

              <div className="mt-7 inline-flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20">
                <Tag className="h-4 w-4 text-brand-300" strokeWidth={2.25} />
                Seasonal savings available — inquire for details
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallCta />
                <ScheduleCta variant="dark" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4">
                {PLEDGES.map((pledge) => (
                  <div
                    key={pledge.title}
                    className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink">
                      <pledge.icon className="h-6 w-6" strokeWidth={2.25} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{pledge.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/80">{pledge.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
