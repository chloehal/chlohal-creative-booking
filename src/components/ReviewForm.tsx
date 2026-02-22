import { useState } from "react";
import { useSubmitReview } from "@/hooks/useReviews";
import { Star, Loader2 } from "lucide-react";
import type { ReviewSubmission } from "@/types/reviews";

type WorkshopValue = "couture" | "linogravure" | "fleurs-en-perles";

const WORKSHOP_OPTIONS: { value: WorkshopValue; label: string }[] = [
  { value: "couture", label: "Couture" },
  { value: "linogravure", label: "Linogravure" },
  { value: "fleurs-en-perles", label: "Fleurs en Perles" },
];

interface ReviewFormProps {
  workshopType?: WorkshopValue;
  onSuccess?: () => void;
}

export const ReviewForm = ({ workshopType, onSuccess }: ReviewFormProps) => {
  const [formData, setFormData] = useState<Omit<ReviewSubmission, "workshop_type">>({
    name: "",
    rating: 5,
    comment: "",
  });
  const [selectedWorkshops, setSelectedWorkshops] = useState<WorkshopValue[]>(
    workshopType ? [workshopType] : []
  );
  const [hoveredRating, setHoveredRating] = useState(0);
  const { mutate: submit, isPending, isSuccess, error } = useSubmitReview();

  const toggleWorkshop = (value: WorkshopValue) => {
    setSelectedWorkshops((prev) =>
      prev.includes(value) ? prev.filter((w) => w !== value) : [...prev, value]
    );
  };

  const getWorkshopType = (): ReviewSubmission["workshop_type"] => {
    if (selectedWorkshops.length === 1) return selectedWorkshops[0];
    return "plusieurs";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(
      { ...formData, workshop_type: getWorkshopType() },
      {
        onSuccess: () => {
          setFormData({ name: "", rating: 5, comment: "" });
          setSelectedWorkshops(workshopType ? [workshopType] : []);
          onSuccess?.();
        },
      }
    );
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
            <span className="label-text">Atelier(s) suivi(s)</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {WORKSHOP_OPTIONS.map(({ value, label }) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                  checked={selectedWorkshops.includes(value)}
                  onChange={() => toggleWorkshop(value)}
                  disabled={isPending}
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
          {selectedWorkshops.length === 0 && (
            <p className="text-xs text-error mt-1">Sélectionnez au moins un atelier.</p>
          )}
        </div>
      )}

      <div className="form-control">
        <label className="label">
          <span className="label-text">Votre avis</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Partagez votre expérience..."
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

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isPending || (!workshopType && selectedWorkshops.length === 0)}
      >
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
