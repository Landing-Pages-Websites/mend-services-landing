import Image from "next/image";
import { Check, PhoneCall, Clock, Users } from "lucide-react";
import { DualCta } from "@/components/ui/cta";

const REASONS = [
  "One call for HVAC, plumbing and electrical — no juggling three contractors",
  "Licensed master professionals on every single job",
  "Same-day scheduling and 24/7 emergency service",
  "Real communication — clear quotes, honest options, no surprises",
  "We show up when we say we will, and we clean up when we leave",
  "Locally rooted — we live and work in Greater Austin too",
];

const PILLARS = [
  { icon: PhoneCall, title: "Real communication", body: "Straight answers and clear quotes." },
  { icon: Clock, title: "On time, every time", body: "We show up when we promise." },
  { icon: Users, title: "Your neighbors", body: "A local team, not a call center." },
];

export default function WhyMend(): React.JSX.Element {
  return (
    <section id="why-mend" className="bg-ink-900 py-20 text-white lg:py-28">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-400">
            Experience the Difference
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
            The Trade Up Experience
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/80">
            Mend was built on a simple idea: home services should feel premium, not
            painful. That means real communication, technicians who show up when we say we
            will, and craftsmanship we stand behind. We&apos;re your neighbors in Greater
            Austin — not a faceless call center.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-[15px] text-white/90">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" strokeWidth={3} />
                {reason}
              </li>
            ))}
          </ul>

          <DualCta className="mt-10" scheduleVariant="dark" />
        </div>

        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
          <div className="flex items-center gap-4">
            <Image
              src="/images/google-4-9-rating.png"
              alt="Rated 4.9 stars by Google customers"
              width={262}
              height={165}
              className="h-20 w-auto rounded-lg bg-white px-3 py-2"
            />
            <p className="text-sm leading-snug text-white/80">
              A 4.9-star Google rating earned across hundreds of Greater Austin homes.
            </p>
          </div>

          <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/25">
                  <pillar.icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="mt-0.5 text-sm text-white/70">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
