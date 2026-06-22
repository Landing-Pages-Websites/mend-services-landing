"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/ui/cta";

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
      <div className="container-max flex h-16 items-center justify-between lg:h-20">
        <Link href="#hero" aria-label="TLC Landscape — home" className="shrink-0">
          <Image
            src="/images/tlc-logo.png"
            alt="TLC Landscape"
            width={200}
            height={64}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-lg border-2 border-line px-3 py-1.5 font-display text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-500 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-brand-500" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="#consultation"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 font-display text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-500/60"
          >
            <Phone className="h-4 w-4 sm:hidden" />
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
