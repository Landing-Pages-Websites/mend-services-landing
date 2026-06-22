import Image from "next/image";
import { ShieldCheck, BadgeCheck, Clock, Wrench, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Signal {
  icon: LucideIcon;
  value: string;
  label: string;
}

const SIGNALS: Signal[] = [
  { icon: ShieldCheck, value: "1-Year", label: "Parts & labor warranty" },
  { icon: BadgeCheck, value: "Licensed", label: "Master professionals" },
  { icon: Clock, value: "24/7", label: "Emergency service" },
  { icon: Wrench, value: "Same-Day", label: "Scheduling available" },
  { icon: MapPin, value: "Local", label: "Greater Austin team" },
];

export default function TrustBar(): React.JSX.Element {
  return (
    <section id="trust-bar" className="border-b border-line bg-surface py-5">
      <div className="container-max flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
        <div className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/google-4-9-rating.png"
            alt="Rated 4.9 stars by Google customers"
            width={262}
            height={165}
            className="h-14 w-auto"
          />
          <span className="hidden h-12 w-px bg-line sm:block" />
        </div>
        <ul className="grid w-full grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:flex lg:flex-1 lg:justify-between lg:gap-4">
          {SIGNALS.map((signal) => (
            <li key={signal.label} className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-teal-500 ring-1 ring-line">
                <signal.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base font-bold uppercase tracking-wide text-ink">
                  {signal.value}
                </span>
                <span className="block text-xs text-muted">{signal.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
