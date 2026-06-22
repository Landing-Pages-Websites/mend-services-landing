"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, FORM_ANCHOR } from "@/components/ui/cta";

export default function Header(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div
        className={`container-max flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-16 lg:h-20"
        }`}
      >
        <Link href="#hero" aria-label="Mend Services — home" className="shrink-0">
          <Image
            src="/images/mend-logo.png"
            alt="Mend Services"
            width={641}
            height={146}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-9 lg:h-11"}`}
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink md:inline-flex">
            <Star className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
            4.9 Google rating
          </span>
          <Link
            href={FORM_ANCHOR}
            className="hidden items-center gap-2 rounded-lg border-2 border-teal-500/30 px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-teal-600 transition-colors hover:bg-teal-500 hover:border-teal-500 hover:text-white sm:inline-flex"
          >
            Schedule
          </Link>
          <a
            href={PHONE_TEL}
            aria-label={`Call Mend Services at ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3.5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-ink shadow-sm ring-1 ring-inset ring-brand-700/20 transition-all duration-200 hover:bg-brand-600 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
