import { Star } from "lucide-react";
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
    day: "numeric",
  });

  return (
    <div className="p-4 rounded-lg border border-base-300 bg-base-100">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="font-semibold text-sm">{review.name}</p>
          <p className="text-xs opacity-60">{date}</p>
        </div>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i <= review.rating
                  ? "fill-warning text-warning"
                  : "text-base-content/20"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm">{review.comment}</p>
      <div className="mt-2">
        <span className="badge badge-outline badge-xs">
          {WORKSHOP_LABELS[review.workshop_type]}
        </span>
      </div>
    </div>
  );
};
