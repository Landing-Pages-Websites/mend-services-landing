import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

// CTM routing number for call attribution — swapped dynamically by the CTM script.
export const PHONE_DISPLAY = "(208) 859-9955";
export const PHONE_TEL = "tel:+12088599955";

export function PrimaryCta({
  label = "Schedule My Free Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}): React.JSX.Element {
  return (
    <Link
      href="#consultation"
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-4 font-display text-base font-semibold text-white shadow-lg shadow-brand-900/25 ring-1 ring-inset ring-transparent transition-all duration-200 hover:bg-brand-600 hover:ring-leaf-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-500/60 ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function PhoneCta({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}): React.JSX.Element {
  const tone =
    variant === "dark"
      ? "border-white/30 text-white hover:border-leaf-500 hover:text-leaf-400"
      : "border-ink/15 text-ink hover:border-brand-500 hover:text-brand-500";
  return (
    <a
      href={PHONE_TEL}
      aria-label={`Call TLC Landscape at ${PHONE_DISPLAY}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 font-display text-base font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-500/60 ${tone} ${className}`}
    >
      <Phone className="h-4 w-4" />
      {PHONE_DISPLAY}
    </a>
  );
}

export function DualCta({
  primaryLabel,
  phoneVariant = "light",
  className = "",
}: {
  primaryLabel?: string;
  phoneVariant?: "light" | "dark";
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <PhoneCta variant={phoneVariant} />
      <PrimaryCta label={primaryLabel} />
    </div>
  );
}
