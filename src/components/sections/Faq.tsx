import { ChevronDown } from "lucide-react";
import { DualCta } from "@/components/ui/cta";

interface QA {
  q: string;
  a: string;
}

const FAQS: QA[] = [
  {
    q: "Is the on-site consultation really free?",
    a: "Yes — completely free and no-obligation. An experienced TLC designer comes to your property, walks the space with you, listens to your vision, and talks through what's possible. There's no pressure and nothing to buy.",
  },
  {
    q: "What does a typical project cost?",
    a: "Every project is custom, so cost depends on the size of your space, the materials you choose, and the scope of the work. Rather than guess, we give you honest, specific direction during your free on-site consultation — including a clear plan built around your goals and budget, with no obligation.",
  },
  {
    q: "Do you handle both design and installation?",
    a: "We do. TLC is a full design-and-build landscaper — we create the plan and our own crew installs every element, from grading and hardscaping to plantings, lighting and irrigation. One accountable team start to finish.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope and weather, but you'll get a clear timeline as part of your custom plan before any work begins. Because we use our own crews, we're able to keep projects moving and on schedule.",
  },
  {
    q: "Is your work warrantied?",
    a: "Yes. Every project is backed by our 12-month workmanship warranty, and with 25 years and 1,000+ completed projects behind us, we build it right the first time.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Boise and the wider Treasure Valley throughout Ada County — including Eagle, Meridian, Garden City, Hidden Springs and Star.",
  },
];

export default function Faq(): React.JSX.Element {
  return (
    <section id="faq" className="bg-surface py-20 lg:py-28">
      <div className="container-max max-w-3xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">
            Good questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </header>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl bg-white p-5 ring-1 ring-line [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>

        <DualCta className="mt-12 justify-center" primaryLabel="Schedule Your Free On-Site Consultation" />
      </div>
    </section>
  );
}
