// Customer reviews and testimonials
// Update these with your actual reviews as you receive them

export interface Review {
  name: string;
  rating: number; // 1-5
  text: string;
  date?: string;
  source?: string; // "Google", "Facebook", "Campspot", etc.
}

export const reviews: Review[] = [
  {
    name: "Brittany W.",
    rating: 5,
    text: "We've been staying here for 2 months and it's excellent! The price is super reasonable, it's very quiet, beautiful forest, and spacious spots for the camper. If you need an escape this is the perfect place!",
    source: "Google",
  },
  {
    name: "Rosalind C.",
    rating: 5,
    text: "I'm a travel nurse so I have stayed at a lot of rv parks...this one has set the bar high..literally 20min drive to everything you may need for your stay...I love this RV park",
    source: "Google",
  },
  {
    name: "Peggy W.",
    rating: 5,
    text: "Very nice RV park. Quiet and out of town",
    source: "Google",
  },
];

// Calculate aggregate rating
export const getAverageRating = (): number => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10; // Round to 1 decimal
};

export const getTotalReviews = (): number => {
  return reviews.length;
};

// For schema.org
export const aggregateRating = {
  ratingValue: getAverageRating().toString(),
  ratingCount: getTotalReviews().toString(),
  bestRating: "5",
  worstRating: "1",
};
