import React from 'react';
import StarRating from '../rating';

const ReviewCard = () => {
  return (
    <div className="all-reviews py-4">
      <div className="flex justify-between">
        <h3 className=" font-gotham font-semibold text-sm text-primary">
          Tanjiya Momo
        </h3>
        <StarRating rating={5} />
      </div>
      <p className="font-gotham font-normal text-xs text-black mt-2 mb-1">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure.
      </p>
      <p className="font-gotham font-light text-xs text-black">27/09/2022</p>
    </div>
  );
};

export default ReviewCard;
