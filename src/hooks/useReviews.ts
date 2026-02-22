import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Review, ReviewSubmission } from "@/types/reviews";

const API_URL = import.meta.env.VITE_API_URL || "/api";

export const useReviews = (workshopType?: "couture" | "linogravure" | "fleurs-en-perles") => {
  return useQuery<Review[]>({
    queryKey: ["reviews", workshopType],
    queryFn: async () => {
      const url = workshopType
        ? `${API_URL}/reviews.php?workshop_type=${workshopType}`
        : `${API_URL}/reviews.php`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch reviews");
      const data = await response.json();
      return data.reviews || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useSubmitReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (review: ReviewSubmission) => {
      const response = await fetch(`${API_URL}/reviews.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Erreur lors de l'envoi");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
};
