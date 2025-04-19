import React from 'react';
import { Star, StarHalf, Quote } from 'lucide-react';

type Review = {
  name: string;
  message: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: 'Sarah M.',
    message:
      'EAZIE-GO made my airport transfer absolutely seamless. The driver was early, polite, and the car was very clean.',
    rating: 5,
  },
  {
    name: 'Daniel A.',
    message:
      'Booked a ride for a shopping trip, and the service was top-notch. I’ll definitely use them again!',
    rating: 4.5,
  },
  {
    name: 'Karen B.',
    message:
      'Excellent customer service and punctuality. I love how stress-free the whole experience was!',
    rating: 5,
  },
  {
    name: 'Joshua T.',
    message:
      'Super friendly drivers and fair pricing. Great for regular city pickups.',
    rating: 4,
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`star-${i}`} className="text-yellow-500" size={18} fill="currentColor" />);
  }

  if (halfStar) {
    stars.push(<StarHalf key="half-star" className="text-yellow-500" size={18} />);
  }

  return stars;
};

const Reviews: React.FC = () => {
  return (
    <div className="bg-white border-y text-black pt-20 pb-10 sm:pb-0 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Customer Reviews</h1>
        <p className="text-lg text-gray-700 mt-4">
          Hear what our happy riders have to say about their EAZIE-GO experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 flex flex-col gap-4 bg-gray-50"
          >
            <Quote size={32} className="text-yellow-500" />
            <p className="text-gray-800 italic">"{review.message}"</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-semibold">{review.name}</span>
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-2">We'd love your feedback!</h2>
        <p className="text-gray-700">Tried our service recently? Share your experience with us.</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full transition">
          Leave a Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
