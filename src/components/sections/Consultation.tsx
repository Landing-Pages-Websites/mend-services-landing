import { Phone, Check } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/ui/cta";

const REASSURANCE = [
  "Free, on-site, and no-obligation",
  "Meet an experienced TLC designer",
  "A custom plan for your space and budget",
];

export default function Consultation(): React.JSX.Element {
  return (
    <section id="consultation" className="bg-forest-900 py-20 text-white lg:py-28">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">
            Your free on-site consultation
          </p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s design the outdoor space you&apos;ve been picturing
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/80">
            Tell us a little about your project and we&apos;ll set up a relaxed, no-pressure
            visit. Our team will confirm your details and find a time that works for you.
          </p>

          <ul className="mt-8 space-y-3">
            {REASSURANCE.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] text-white/90">
                <Check className="h-5 w-5 shrink-0 text-leaf-400" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-white/75">
            Prefer to talk?{" "}
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-1.5 font-display font-semibold text-leaf-400 transition-colors hover:text-leaf-300"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <LeadForm idPrefix="consultation" />
      </div>
    </section>
  );
}
