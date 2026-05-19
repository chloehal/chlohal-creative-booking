import { Star, Quote } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import type { Review } from "@/types/reviews";


const WORKSHOP_LABELS: Record<string, string> = {
  couture: "Couture",
  linogravure: "Linogravure",
  "fleurs-en-perles": "Fleurs en Perles",
  plusieurs: "Plusieurs ateliers",
};

const LANES = [
  { left: "2%",  duration: "24s", delay: "0s",    rotate: "-2deg" },
  { left: "13%", duration: "31s", delay: "-10s",  rotate: "1.5deg" },
  { left: "25%", duration: "21s", delay: "-17s",  rotate: "-1deg" },
  { left: "37%", duration: "27s", delay: "-5s",   rotate: "2.5deg" },
  { left: "52%", duration: "34s", delay: "-22s",  rotate: "-1.5deg" },
  { left: "63%", duration: "25s", delay: "-12s",  rotate: "1deg" },
  { left: "75%", duration: "29s", delay: "-7s",   rotate: "-3deg" },
  { left: "87%", duration: "22s", delay: "-19s",  rotate: "2deg" },
];

function FlyingCard({ review, lane }: { review: Review; lane: typeof LANES[number] }) {
  const date = new Date(review.created_at).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });

  return (
    <div
      className="fly-card absolute w-56 rounded-lg border border-base-300 bg-base-100 p-4 flex flex-col gap-3 pointer-events-none select-none"
      style={{
        left: lane.left,
        top: 0,
        opacity: 0,
        animationName: "fly-card",
        animationDuration: lane.duration,
        animationDelay: lane.delay,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        ["--card-rotate" as string]: lane.rotate,
        ["--card-opacity" as string]: 0.75,
      }}
    >
      <Quote className="w-4 h-4 text-primary/10 absolute top-3 right-3" />
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i <= review.rating ? "fill-warning text-warning" : "text-base-content/15"}`}
          />
        ))}
      </div>
      <p className="text-xs leading-relaxed text-base-content/70 line-clamp-4">
        {review.comment}
      </p>
      <div className="flex items-center justify-between pt-2 border-t border-base-200">
        <span className="text-xs font-semibold text-base-content/70">{review.name}</span>
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-[10px] bg-base-200 text-base-content/50 px-1.5 py-0.5 rounded">
            {WORKSHOP_LABELS[review.workshop_type]}
          </span>
          <span className="text-[10px] text-base-content/30">{date}</span>
        </div>
      </div>
    </div>
  );
}

export function SuspendedOverlay() {
  const { data: reviews } = useReviews();
  const cards = LANES.flatMap((lane, i) =>
    reviews && reviews.length > 0 ? [{ lane, review: reviews[i % reviews.length] }] : []
  );

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden bg-base-200 flex items-center justify-center">
      {/* Flying cards */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {cards.map(({ lane, review }, i) => (
          <FlyingCard key={i} review={review} lane={lane} />
        ))}
      </div>

      {/* Soft vignette to isolate center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 55% at 50% 50%, transparent 20%, oklch(97% 0 0 / 0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Center panel */}
      <div className="relative z-10 bg-base-100 border border-base-300 rounded-2xl max-w-md w-full mx-6 px-8 py-10 text-center flex flex-col items-center gap-6 shadow-sm">
        <p className="text-xs font-medium tracking-widest uppercase text-secondary">
          Ateliers créatifs
        </p>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-base-content leading-tight">
            Un nouveau tournant
          </h1>
          <p className="text-sm text-base-content/60 leading-relaxed">
            Je me lance dans un nouveau projet professionnel — les ateliers
            sont suspendus pour l'instant.
          </p>
        </div>

        <div className="w-8 h-px bg-base-300" />

        <p className="text-sm text-base-content/70 leading-relaxed">
          Ces moments partagés avec vous ont été une vraie joie.
          Merci pour votre confiance et votre enthousiasme.
        </p>

        <p className="text-xs text-base-content/40 font-serif italic">
          — Chloé
        </p>
      </div>
    </div>
  );
}
