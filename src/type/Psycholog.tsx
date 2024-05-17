export interface Psychology {
  about: string;
  avatar_url: string;
  experience: string;
  initial_consultation: string;
  license: string;
  name: string;
  price_per_hour: number;
  rating: number;
  specialization: string;
  reviews: [
    {
      reviewer: string;
      comment: string;
      rating: number;
    }
  ];
}
export interface Reviews {
  reviewer: string;
  comment: string;
  rating: number;
}
