import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './index.scss';

interface IExplore {
  image: string;
  title: string;
}
interface IProps {
  item: IExplore;
  className?: string;
  href: string;
}
const ExploreCard: React.FC<IProps> = ({
  item,
  className,
  href,
}): React.JSX.Element => {
  return (
    <div className={`${className} explore-card`}>
      <Link className="explore-item" href={href ? href : '/'}>
        <Image
          src={`/assets/images/explore/${item.image}`}
          width={150}
          height={150}
          alt="explore"
        />
        <p className=" mt-5 text-sm font-gotham font-medium font-sm uppercase">
          {item.title}
        </p>
      </Link>
    </div>
  );
};

export default ExploreCard;
