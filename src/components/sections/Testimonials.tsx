import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Review {
  name: string;
  quote: string;
}

// Real TLC Landscape customer testimonials — verbatim. Do not fabricate others.
const REVIEWS: Review[] = [
  {
    name: "Michael",
    quote:
      "TLC is a top notch Landscape company that has great ideas or compliments to your design wishes. Todd and his team did an excellent job redesigning our backyard landscape and customizing our front yard water system. The team came in and worked diligently to design, implement, and execute a complete customized landscape and watering plan. The team was professional and responsive to our personal desires and wishes even along the way. I highly recommend using TLC for your next landscape installation, redesign and enhancement wishes.",
  },
  {
    name: "A TLC homeowner",
    quote:
      "We are very happy with the work done by TLC to transform our messy yard into a beautiful place to garden and hang out.",
  },
];

export default function Testimonials(): React.JSX.Element {
  return (
    <section id="testimonials" className="bg-surface py-20 lg:py-28">
      <div className="container-max">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">
            In their words
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            What Treasure Valley homeowners say
          </h2>
          <p className="mt-4 text-lg text-muted">
            A few words from neighbors who trusted TLC with their outdoor spaces.
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-line">
                <Quote className="h-8 w-8 text-leaf-500" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <span className="font-display text-sm font-semibold text-ink">
                    — {review.name}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
