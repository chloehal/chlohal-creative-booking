export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  workshop_type: "couture" | "linogravure" | "fleurs-en-perles" | "plusieurs";
  created_at: string;
}

export interface ReviewSubmission {
  name: string;
  rating: number;
  comment: string;
  workshop_type: "couture" | "linogravure" | "fleurs-en-perles" | "plusieurs";
}
