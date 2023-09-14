import { FC } from 'react';

interface IProduct {
  title: string;
  discountPrice: string;
  regularPrice: string;
  image: string;
}

interface IProps {
  product: IProduct;
}

const ListCard: FC<IProps> = () => {
  return <div>1</div>;
};

export default ListCard;
