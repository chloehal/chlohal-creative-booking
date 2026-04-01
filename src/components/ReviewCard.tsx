import { Star, Quote } from "lucide-react";
import type { Review } from "@/types/reviews";

const WORKSHOP_LABELS: Record<string, string> = {
  couture: "Couture",
  linogravure: "Linogravure",
  "fleurs-en-perles": "Fleurs en Perles",
  plusieurs: "Plusieurs ateliers",
};

export const ReviewCard = ({ review }: { review: Review }) => {
  const date = new Date(review.created_at).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="relative p-6 rounded-lg border border-base-300 bg-base-100 flex flex-col gap-4">
      <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />

      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i <= review.rating
                ? "fill-warning text-warning"
                : "text-base-content/15"
            }`}
          />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-base-content/80 flex-1">
        {review.comment}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-base-200">
        <div>
          <p className="font-semibold text-sm text-base-content">
            {review.name}
          </p>
          <p className="text-xs text-base-content/40">{date}</p>
        </div>
        <span className="badge badge-sm bg-base-200 border-0 text-base-content/60">
          {WORKSHOP_LABELS[review.workshop_type]}
        </span>
      </div>
    </div>
  );
};
