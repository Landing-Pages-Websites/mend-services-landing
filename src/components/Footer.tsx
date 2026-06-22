import Image from "next/image";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, FORM_ANCHOR } from "@/components/ui/cta";

const SERVICE_AREA =
  "Austin · Round Rock · Cedar Park · Leander · Pflugerville · Georgetown · Kyle · Buda · Lakeway · Bee Cave · Dripping Springs · Hutto · Manor · San Marcos";

const LINKS = [
  { href: "#hvac", label: "HVAC & Air Conditioning" },
  { href: "#plumbing", label: "Plumbing" },
  { href: "#electrical", label: "Electrical" },
  { href: "#warranty", label: "Our Warranty" },
  { href: "#testimonials", label: "Reviews" },
  { href: FORM_ANCHOR, label: "Request Service" },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-ink-900 text-white/70">
      <div className="container-max grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="inline-flex rounded-xl bg-white px-4 py-3 shadow-sm">
            <Image
              src="/images/mend-logo.png"
              alt="Mend Services"
              width={641}
              height={146}
              className="h-9 w-auto"
            />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            HVAC, plumbing and electrical under one roof for Greater Austin homeowners.
            Licensed master pros, same-day scheduling and 24/7 emergency service — we
            live and work here too.
          </p>
          <a
            href={PHONE_TEL}
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-brand-500 px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brand-600"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            {PHONE_DISPLAY}
          </a>
        </div>

        <nav className="space-y-3 text-sm md:col-span-3" aria-label="Footer">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-brand-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 text-sm md:col-span-4">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Greater Austin
          </h3>
          <p className="flex items-start gap-2 leading-relaxed">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {SERVICE_AREA}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-brand-500" />
            24/7 emergency service · same-day scheduling
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-brand-500" />
            Licensed master pros · 1-year parts &amp; labor warranty
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/45 sm:flex-row">
          <p>&copy; 2026 Mend Services. All rights reserved.</p>
          <p>HVAC · Plumbing · Electrical · Greater Austin, TX</p>
        </div>
      </div>
    </footer>
  );
}
