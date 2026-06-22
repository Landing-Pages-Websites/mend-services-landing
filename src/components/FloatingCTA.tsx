"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, FORM_ANCHOR } from "@/components/ui/cta";

export default function FloatingCTA(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const form = document.getElementById("request-service");
    let heroVisible = true;
    let formVisible = false;

    const sync = (): void => setVisible(!heroVisible && !formVisible);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "hero") heroVisible = entry.isIntersecting;
          if (entry.target.id === "request-service")
            formVisible = entry.isIntersecting;
        }
        sync();
      },
      { threshold: 0.12 }
    );

    if (hero) observer.observe(hero);
    if (form) observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 shadow-[0_-8px_24px_rgba(25,24,26,0.14)] backdrop-blur-md transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <a
          href={PHONE_TEL}
          aria-label={`Call Mend Services at ${PHONE_DISPLAY}`}
          className="flex h-12 flex-[2] items-center justify-center gap-2 rounded-xl bg-brand-500 font-display text-sm font-bold uppercase tracking-wide text-ink shadow-lg shadow-ink/20 ring-1 ring-inset ring-brand-700/20 transition-colors hover:bg-brand-600 active:bg-brand-700"
        >
          <Phone className="h-5 w-5" strokeWidth={2.5} />
          Call {PHONE_DISPLAY}
        </a>
        <Link
          href={FORM_ANCHOR}
          aria-label="Schedule service"
          className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-teal-500/40 font-display text-sm font-bold uppercase tracking-wide text-teal-600 transition-colors hover:bg-teal-500 hover:border-teal-500 hover:text-white"
        >
          <CalendarCheck className="h-5 w-5" strokeWidth={2.5} />
          Book
        </Link>
      </div>
    </div>
  );
}
