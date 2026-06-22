import { MapPin, Clock } from "lucide-react";
import { DualCta } from "@/components/ui/cta";

const CITIES = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Leander",
  "Pflugerville",
  "Georgetown",
  "Kyle",
  "Buda",
  "Lakeway",
  "Bee Cave",
  "Dripping Springs",
  "Hutto",
  "Manor",
  "San Marcos",
  "Spicewood",
  "Wimberley",
];

export default function ServiceArea(): React.JSX.Element {
  return (
    <section id="service-area" className="bg-white py-20 lg:py-28">
      <div className="container-max">
        <div className="rounded-3xl bg-ink-900 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-400">
                Where We Work
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                Proudly Serving Greater Austin
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/80">
                From downtown Austin out to the Hill Country, Mend serves homeowners across
                the greater metro. If you&apos;re in or around these communities, we&apos;d
                love to help — same-day appointments and 24/7 emergency service available.
              </p>

              <p className="mt-6 flex items-center gap-2.5 text-sm font-semibold text-brand-300">
                <Clock className="h-5 w-5" strokeWidth={2.25} />
                Same-day scheduling · 24/7 emergency service
              </p>

              <DualCta className="mt-8" scheduleVariant="dark" />
            </div>

            <div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                {CITIES.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-3 text-[15px] font-medium text-white ring-1 ring-white/10"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-brand-400" strokeWidth={2.25} />
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wider text-white/55">
                Greater Austin &amp; surrounding Hill Country communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
