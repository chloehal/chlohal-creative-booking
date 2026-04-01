import { useReviews } from "@/hooks/useReviews";
import { ReviewCard } from "./ReviewCard";
import { Loader2, Star } from "lucide-react";

interface ReviewsProps {
  workshopType?: "couture" | "linogravure" | "fleurs-en-perles";
  limit?: number;
}

export const Reviews = ({ workshopType, limit }: ReviewsProps) => {
  const { data: reviews, isLoading, error } = useReviews(workshopType);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>Erreur lors du chargement des avis</span>
      </div>
    );
  }

  const displayed = limit ? reviews?.slice(0, limit) : reviews;

  if (!displayed || displayed.length === 0) {
    return (
      <div className="text-center py-8 opacity-60">
        <p>Aucun avis pour le moment. Soyez le premier !</p>
      </div>
    );
  }

  const avgRating =
    displayed.reduce((sum, r) => sum + r.rating, 0) / displayed.length;

  return (
    <div>
      {/* Summary bar */}
      <div className="flex flex-wrap items-center gap-4 mb-8 p-4 rounded-lg bg-base-200">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold font-serif text-base-content">
            {avgRating.toFixed(1)}
          </span>
          <div className="flex flex-col">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i <= Math.round(avgRating)
                      ? "fill-warning text-warning"
                      : "text-base-content/15"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-base-content/50">
              {displayed.length} avis
            </span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {displayed.map((review) => (
          <div key={review.id} className="break-inside-avoid">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};
