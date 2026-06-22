import { MapPin, Leaf } from "lucide-react";
import { DualCta } from "@/components/ui/cta";

const CITIES = [
  "Boise",
  "Eagle",
  "Meridian",
  "Garden City",
  "Hidden Springs",
  "Star",
];

const MEMBERSHIPS = [
  "Idaho Nursery & Landscape Association (INLA)",
  "ICPI · Masonry & Hardscapes Association",
  "Houzz Professional",
  "NALP",
];

export default function ServiceArea(): React.JSX.Element {
  return (
    <section id="service-area" className="bg-white py-20 lg:py-28">
      <div className="container-max">
        <div className="rounded-3xl bg-forest-900 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">
                Where we work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                Proudly serving the Treasure Valley
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/80">
                Based in Boise and serving homeowners throughout Ada County. If your
                project is anywhere in the Treasure Valley, we&apos;d love to walk your
                property and talk through what&apos;s possible.
              </p>
              <DualCta className="mt-9" phoneVariant="dark" primaryLabel="Schedule Your Free On-Site Consultation" />
            </div>

            <div>
              <ul className="grid grid-cols-2 gap-4">
                {CITIES.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-3 text-[15px] font-medium text-white ring-1 ring-white/10"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-leaf-400" strokeWidth={2} />
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wider text-white/55">
                Ada County, Idaho
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf-400">
              Credentials &amp; memberships
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {MEMBERSHIPS.map((member) => (
                <li key={member} className="flex items-center gap-2 text-sm text-white/85">
                  <Leaf className="h-4 w-4 shrink-0 text-leaf-500" strokeWidth={2} />
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
