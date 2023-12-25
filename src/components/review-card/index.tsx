import React from 'react';
import StarRating from '../rating';
import { formatDate } from '../dateformate';

const ReviewCard = ({ review }: any) => {
  return (
    <div className="all-reviews py-4">
      <div className="flex justify-between">
        <h3 className=" font-gotham font-semibold text-sm text-primary">
          {review?.name}
        </h3>
        <StarRating rating={review?.rating} />
      </div>
      <p className="font-gotham font-normal text-xs text-black mt-2 mb-1">
        {review?.comment}
      </p>
      <p className="font-gotham font-light text-xs text-black">
        {formatDate(review?.created_at)}
      </p>
    </div>
  );
};

export default ReviewCard;
