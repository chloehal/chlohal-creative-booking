import { useState } from "react";
import { useSubmitReview } from "@/hooks/useReviews";
import { Star, Loader2 } from "lucide-react";
import type { ReviewSubmission } from "@/types/reviews";

interface ReviewFormProps {
  workshopType?: "couture" | "linogravure";
  onSuccess?: () => void;
}

export const ReviewForm = ({ workshopType, onSuccess }: ReviewFormProps) => {
  const [formData, setFormData] = useState<ReviewSubmission>({
    name: "",
    rating: 5,
    comment: "",
    workshop_type: workshopType || "both",
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const { mutate: submit, isPending, isSuccess, error } = useSubmitReview();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(formData, {
      onSuccess: () => {
        setFormData({ name: "", rating: 5, comment: "", workshop_type: workshopType || "both" });
        onSuccess?.();
      },
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center py-6">
        <p className="font-semibold text-sm">Merci pour votre avis !</p>
        <p className="text-sm opacity-70 mt-1">
          Il sera publié sur le site une fois validé.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="alert alert-error">
          <span>{error.message}</span>
        </div>
      )}

      <div className="form-control">
        <label className="label">
          <span className="label-text">Votre nom</span>
        </label>
        <input
          type="text"
          placeholder="Votre nom"
          className="input input-bordered"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          maxLength={100}
          disabled={isPending}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Note</span>
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="btn btn-ghost btn-sm p-1"
              disabled={isPending}
            >
              <Star
                className={`w-7 h-7 ${
                  star <= (hoveredRating || formData.rating)
                    ? "fill-warning text-warning"
                    : "text-base-content/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {!workshopType && (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Atelier suivi</span>
          </label>
          <select
            className="select select-bordered"
            value={formData.workshop_type}
            onChange={(e) =>
              setFormData({
                ...formData,
                workshop_type: e.target.value as ReviewSubmission["workshop_type"],
              })
            }
            disabled={isPending}
          >
            <option value="couture">Couture</option>
            <option value="linogravure">Linogravure</option>
            <option value="both">Les deux</option>
          </select>
        </div>
      )}

      <div className="form-control">
        <label className="label">
          <span className="label-text">Votre avis</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Partagez votre experience..."
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          required
          maxLength={1000}
          disabled={isPending}
        />
        <label className="label">
          <span className="label-text-alt">{formData.comment.length}/1000</span>
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer mon avis"
        )}
      </button>
    </form>
  );
};
