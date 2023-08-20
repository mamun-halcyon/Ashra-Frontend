import Image from 'next/image';
import React from 'react';

interface IExplore {
  image: string;
  title: string;
}
interface IProps {
  item: IExplore;
  className?: string;
}
const ExploreCard: React.FC<IProps> = ({
  item,
  className,
}): React.JSX.Element => {
  return (
    <div className={`${className} explore-card`}>
      <Image
        src={`/assets/images/explore/${item.image}`}
        width={300}
        height={200}
        alt="explore"
      />
      <p className=" mt-10 text-lg font-gotham font-normal">{item.title}</p>
    </div>
  );
};

export default ExploreCard;
