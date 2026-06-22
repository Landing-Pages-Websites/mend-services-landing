import { CalendarClock, UserCheck, Hammer, ShieldCheck, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: CalendarClock, value: "25+", label: "Years in business" },
  { icon: UserCheck, value: "Owner", label: "Owner-operated" },
  { icon: Hammer, value: "1,000+", label: "Projects completed" },
  { icon: ShieldCheck, value: "12-mo", label: "Workmanship warranty" },
  { icon: MapPin, value: "Local", label: "Boise & Treasure Valley team" },
];

export default function TrustBar(): React.JSX.Element {
  return (
    <section id="trust-bar" className="bg-forest-900 py-6 text-white">
      <div className="container-max">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((stat) => (
            <li key={stat.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                <stat.icon className="h-5 w-5 text-leaf-400" strokeWidth={2} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold text-white">
                  {stat.value}
                </span>
                <span className="block text-xs text-white/70">{stat.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
