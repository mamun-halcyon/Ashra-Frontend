import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

interface IProps {
  rating: number;
}
const StarRating: React.FC<IProps> = ({ rating }) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<BsStarHalf key="half" />);
  }

  const remainingStars = MAX_STARS - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<AiOutlineStar key={`empty-${i}`} />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
