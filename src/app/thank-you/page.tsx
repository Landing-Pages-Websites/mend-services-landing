import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

const PHONE_DISPLAY = "(737) 249-6457";
const PHONE_TEL = "tel:+17372496457";

export const metadata: Metadata = {
  title: "Thank You | Mend Services",
  description:
    "Thanks for reaching out to Mend Services. A team member will call you right back to confirm your HVAC, plumbing or electrical appointment.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage(): React.JSX.Element {
  return (
    <section className="flex min-h-[60vh] items-center bg-surface py-20">
      <div className="container-max max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-success" strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-3xl font-extrabold uppercase text-ink sm:text-4xl">
          Thanks — Your Request Is In
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
          A Mend Services team member will call you right back to confirm your details and
          set up your HVAC, plumbing or electrical appointment.
        </p>
        <p className="mt-2 text-sm text-muted">
          Need help now or have an emergency? Call us — we&apos;re available 24/7.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={PHONE_TEL}
            aria-label={`Call Mend Services at ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-ink shadow-lg shadow-ink/15 transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Call {PHONE_DISPLAY}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-teal-500/30 px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-teal-600 transition-colors hover:bg-teal-500 hover:border-teal-500 hover:text-white"
          >
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
