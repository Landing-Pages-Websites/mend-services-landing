import { Phone, Siren } from "lucide-react";
import { CallCta, ScheduleCta, PHONE_DISPLAY, PHONE_TEL } from "@/components/ui/cta";

export default function FinalCta(): React.JSX.Element {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-20 text-white lg:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative container-max max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-error/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white ring-1 ring-error/40">
          <Siren className="h-3.5 w-3.5 text-error" strokeWidth={2.5} />
          24/7 Emergency Service
        </span>

        <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.05] text-white sm:text-4xl lg:text-5xl">
          No Heat, No AC, No Power? <span className="text-brand-400">We&apos;re On the Way.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Don&apos;t sweat it out or wait days for a callback. Mend&apos;s licensed master
          pros are ready around the clock for Greater Austin — same-day when you need it,
          24/7 when it&apos;s an emergency.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallCta className="px-8 py-4 text-lg" />
          <ScheduleCta variant="dark" />
        </div>

        <a
          href={PHONE_TEL}
          className="mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-brand-400"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          {PHONE_DISPLAY} · Greater Austin&apos;s whole-home pros
        </a>
      </div>
    </section>
  );
}
