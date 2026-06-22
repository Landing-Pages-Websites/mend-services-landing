"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export default function FloatingCTA(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const consultation = document.getElementById("consultation");
    let heroVisible = true;
    let consultationVisible = false;

    const sync = (): void => setVisible(!heroVisible && !consultationVisible);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "hero") heroVisible = entry.isIntersecting;
          if (entry.target.id === "consultation")
            consultationVisible = entry.isIntersecting;
        }
        sync();
      },
      { threshold: 0.1 }
    );

    if (hero) observer.observe(hero);
    if (consultation) observer.observe(consultation);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 shadow-[0_-8px_24px_rgba(4,32,15,0.12)] backdrop-blur-md transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center">
        <Link
          href="#consultation"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-500 font-display text-sm font-semibold text-white shadow-lg shadow-brand-900/25 transition-colors hover:bg-brand-600"
        >
          <CalendarCheck className="h-5 w-5" />
          Schedule Free Consultation
        </Link>
      </div>
    </div>
  );
}
