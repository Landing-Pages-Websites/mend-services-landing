import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

const PHONE_DISPLAY = "(208) 859-9955";
const PHONE_TEL = "tel:+12088599955";

export const metadata: Metadata = {
  title: "Thank You | TLC Landscape",
  description:
    "Thanks for reaching out to TLC Landscape. A team member will be in touch shortly to confirm your free on-site consultation.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage(): React.JSX.Element {
  return (
    <section className="flex min-h-[60vh] items-center bg-surface py-20">
      <div className="container-max max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-success" strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Thanks — your consultation request is in
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
          A TLC Landscape team member will reach out shortly to confirm your details and
          set up a time for your free on-site consultation.
        </p>
        <p className="mt-2 text-sm text-muted">Prefer to talk now? Give us a call.</p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-4 font-display text-base font-semibold text-white shadow-lg shadow-brand-900/25 transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-500/60"
          >
            <Phone className="h-5 w-5" />
            Call {PHONE_DISPLAY}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-ink/15 px-7 py-4 font-display text-base font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
