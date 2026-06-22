import Image from "next/image";
import { Star } from "lucide-react";

interface Review {
  name: string;
  initials: string;
  trade: string;
  quote: string;
}

// Verbatim Google reviews from mendservices.com/reviews — do not fabricate or edit.
const REVIEWS: Review[] = [
  {
    name: "Brian S.",
    initials: "BS",
    trade: "HVAC",
    quote:
      "Robert and Patrick came out ON TIME to repair an A/C system in an outbuilding. They diagnosed that a capacitor needed replacing. They also installed an “overflow” protection device to eliminate water overflowing from the unit in the attic. A year ago they rerouted some air ducts to make them fit our use of rooms. Superb results---it is so much better now. Very professional and personable, explaining what they were doing. Job completed in one hour. Thank you.",
  },
  {
    name: "Nicky N.",
    initials: "NN",
    trade: "Plumbing & Electrical",
    quote:
      "Our hot water heater went out, and Elaine was fantastic at getting us scheduled quickly! We also decided to have it relocated, and they were able to come out the very next day. Mark and Tim were our plumbers—super friendly and left everything spotless (the garage was actually cleaner when they left than when they arrived!). Brandyn handled the electrical work and was impressively quick. I was amazed at how fast everything got done. We’re Menders for life!",
  },
  {
    name: "Sarah S.",
    initials: "SS",
    trade: "Multiple projects",
    quote:
      "Cannot say enough good things about Mend! We have used Chris & team on several projects. Professional, timely & highly skilled.",
  },
  {
    name: "Lisa D.",
    initials: "LD",
    trade: "Generator, HVAC & Electrical",
    quote:
      "Mend Services has consistently provided excellent installation, maintenance, and repairs for our generator, HVAC, and electrical systems. Nick and Chase are true experts—they provide a detailed plan for the work needed and review everything once the job is complete. We’ll definitely be calling Mend for our plumbing needs as well!",
  },
  {
    name: "Jay R.",
    initials: "JR",
    trade: "Whole-home",
    quote:
      "This is probably the first review I’ve ever written. I can’t say enough good things about Mend. Thorough bid they stuck to, schedule was timely and followed, and the site visits were frequent and available on-call. Most of all, there was an issue with a piece of flooring protection (not a Mend issue) and they made it right, and they stressed that they would not leave or finish the job until it was perfect. Will use them for any needs I ever have with the house.",
  },
];

function Stars(): React.JSX.Element {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
      ))}
    </div>
  );
}

export default function Testimonials(): React.JSX.Element {
  return (
    <section id="testimonials" className="bg-surface py-20 lg:py-28">
      <div className="container-max">
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-600">
              In Their Words
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
              See Why Austin Trusts Mend
            </h2>
            <p className="mt-4 text-lg text-muted">
              Real reviews from real Greater Austin homeowners — across HVAC, plumbing and
              electrical.
            </p>
          </div>
          <Image
            src="/images/google-4-9-rating.png"
            alt="Rated 4.9 stars by Google customers"
            width={262}
            height={165}
            className="h-20 w-auto shrink-0"
          />
        </header>

        <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="inline-block w-full break-inside-avoid rounded-2xl bg-white p-7 ring-1 ring-line"
            >
              <Stars />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500 font-display text-sm font-bold text-white">
                  {review.initials}
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-ink">
                    {review.name}
                  </span>
                  <span className="block text-xs text-muted">{review.trade} · Google review</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
