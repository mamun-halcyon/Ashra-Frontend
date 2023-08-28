import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
      <Link href={href ? href : '/'}>
        <Image
          src={`/assets/images/explore/${item.image}`}
          width={300}
          height={200}
          alt="explore"
        />
      </Link>
      <p className=" mt-10 text-lg font-gotham font-normal">{item.title}</p>
    </div>
  );
};

export default ExploreCard;
