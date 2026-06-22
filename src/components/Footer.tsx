import Image from "next/image";
import { Phone, MapPin, Leaf } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/ui/cta";

const SERVICE_AREA =
  "Boise · Eagle · Meridian · Garden City · Hidden Springs · Star (Ada County, ID)";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-forest-950 text-white/70">
      <div className="container-max grid gap-10 py-14 md:grid-cols-3">
        <div>
          <span className="inline-flex rounded-xl bg-white px-4 py-3 shadow-sm">
            <Image
              src="/images/tlc-logo.png"
              alt="TLC Landscape"
              width={180}
              height={58}
              className="h-10 w-auto"
            />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Owner-operated landscape design, paver patios, retaining walls and water
            features across Boise and the Treasure Valley. Built right the first time —
            25 years and 1,000+ projects in.
          </p>
        </div>

        <div className="space-y-3 text-sm md:justify-self-center">
          <h3 className="font-display text-base font-semibold text-white">Get in touch</h3>
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 transition-colors hover:text-leaf-400"
          >
            <Phone className="h-4 w-4 text-leaf-500" />
            {PHONE_DISPLAY}
          </a>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
            Boise, Idaho · Treasure Valley
          </p>
          <p className="flex items-start gap-2">
            <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
            INLA · ICPI · Houzz Pro · NALP
          </p>
        </div>

        <div className="space-y-3 text-sm md:justify-self-end">
          <h3 className="font-display text-base font-semibold text-white">Service area</h3>
          <p className="max-w-xs leading-relaxed">{SERVICE_AREA}</p>
          <p className="text-xs text-white/50">
            Owner-operated · 12-month workmanship warranty
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/45 sm:flex-row">
          <p>&copy; 2026 TLC Landscape. All rights reserved.</p>
          <p>Landscape Design · Paver Patios · Retaining Walls · Water Features · Boise, ID</p>
        </div>
      </div>
    </footer>
  );
}
