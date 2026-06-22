import { Phone, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/ui/cta";

const ASSURANCES = [
  { icon: Phone, text: "Talk to a real, local team member — not a national call center" },
  { icon: Clock, text: "Same-day appointments and 24/7 emergency response" },
  { icon: ShieldCheck, text: "Licensed master pros and a one-year parts & labor warranty" },
  { icon: MessageSquare, text: "Clear quotes and honest options before any work begins" },
];

export default function LeadFormSection(): React.JSX.Element {
  return (
    <section id="request-service" className="bg-white py-20 lg:py-28">
      <div className="container-max grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-600">
            Request Service
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
            Get Your AC, Plumbing or Electrical Fixed — Fast
          </h2>
          <p className="mt-4 max-w-lg text-lg text-muted">
            Calling is the fastest way to reach us, especially for emergencies. Prefer to
            book online? Fill out the form and a Mend team member will call you right back
            to confirm your appointment.
          </p>

          <a
            href={PHONE_TEL}
            aria-label={`Call Mend Services at ${PHONE_DISPLAY}`}
            className="group mt-8 inline-flex items-center gap-4 rounded-2xl bg-ink-900 p-5 text-left ring-1 ring-ink transition-colors hover:bg-ink"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink">
              <Phone className="h-7 w-7" strokeWidth={2.5} />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-white/60">
                Call now — fastest response
              </span>
              <span className="block font-display text-2xl font-extrabold text-white">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>

          <ul className="mt-8 space-y-3.5">
            {ASSURANCES.map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-[15px] text-ink">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500 ring-1 ring-teal-500/15">
                  <item.icon className="h-4 w-4" strokeWidth={2.25} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:sticky lg:top-24">
          <LeadForm idPrefix="request" />
        </div>
      </div>
    </section>
  );
}
