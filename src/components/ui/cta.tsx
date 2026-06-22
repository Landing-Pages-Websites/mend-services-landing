import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";

// CTM-tracked Google Ads campaign number — call attribution is swapped in by the CTM script.
export const PHONE_DISPLAY = "(737) 249-6457";
export const PHONE_TEL = "tel:+17372496457";
export const FORM_ANCHOR = "#request-service";

/**
 * Primary conversion action — the click-to-call. Lime on slate, the dominant CTA
 * everywhere on the page (phone calls are the priority conversion).
 */
export function CallCta({
  label = `Call ${PHONE_DISPLAY}`,
  className = "",
}: {
  label?: string;
  className?: string;
}): React.JSX.Element {
  return (
    <a
      href={PHONE_TEL}
      aria-label={`Call Mend Services at ${PHONE_DISPLAY}`}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-500 px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-ink shadow-lg shadow-ink/15 ring-1 ring-inset ring-brand-700/20 transition-all duration-200 hover:bg-brand-600 hover:shadow-xl hover:shadow-ink/20 active:scale-[0.99] active:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${className}`}
    >
      <Phone className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" strokeWidth={2.5} />
      {label}
    </a>
  );
}

/**
 * Secondary action — Schedule Service. Teal outline that fills teal on hover.
 * Scrolls to the lead form (the secondary conversion path).
 */
export function ScheduleCta({
  variant = "light",
  label = "Schedule Service",
  className = "",
}: {
  variant?: "light" | "dark";
  label?: string;
  className?: string;
}): React.JSX.Element {
  const tone =
    variant === "dark"
      ? "border-white/35 text-white hover:bg-teal-500 hover:border-teal-500"
      : "border-teal-500/30 text-teal-600 hover:bg-teal-500 hover:border-teal-500 hover:text-white";
  return (
    <Link
      href={FORM_ANCHOR}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 font-display text-base font-bold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${tone} ${className}`}
    >
      <CalendarCheck className="h-5 w-5" strokeWidth={2.5} />
      {label}
    </Link>
  );
}

/**
 * Dual CTA used on every content section: primary click-to-call + secondary schedule.
 */
export function DualCta({
  scheduleVariant = "light",
  className = "",
}: {
  scheduleVariant?: "light" | "dark";
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <CallCta />
      <ScheduleCta variant={scheduleVariant} />
    </div>
  );
}
