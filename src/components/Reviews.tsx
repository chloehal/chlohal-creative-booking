import { useReviews } from "@/hooks/useReviews";
import { ReviewCard } from "./ReviewCard";
import { Loader2 } from "lucide-react";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayed.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
