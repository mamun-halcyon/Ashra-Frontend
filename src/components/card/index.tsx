import Image from 'next/image';
import './index.scss';
import Button from '../button';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRepeat } from 'react-icons/bs';
import Link from 'next/link';

interface IProduct {
  title: string;
  discountPrice: string;
  regularPrice: string;
  image: string;
}

interface IProps {
  product: IProduct;
}
const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="product-card  relative p-2 pb-0 mt-2">
      <Link href={'/products/1'}>
        <div className="flex justify-center items-center pt-10 pb-5 px-6 image">
          <Image src={product.image} width={300} height={300} alt="product" />
        </div>
      </Link>

      <div className="text ">
        <p className=" font-gotham font-normal text-center text-sm">
          {product.title}
        </p>
        <p className=" mb-2 text-center text-sm">
          <span className=" mr-2 line-through font-normal text-xs">
            ৳ {product.discountPrice}
          </span>
          <span className=" font-gotham font-bold text-xs">
            ৳ {product.regularPrice}
          </span>
        </p>
        <div className="flex justify-center">
          <Button className="font-gotham font-medium py-2 text-xs mr-2 w-[102px]">
            Buy Now
          </Button>
          <Button className="font-gotham font-medium py-2 text-xs w-[102px]">
            Add to Cart
          </Button>
        </div>
      </div>
      <div className=" absolute top-0 left-2">
        <li className=" list-none inline-block font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
          -12%
        </li>
        <li className=" list-none inline-block font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
          New
        </li>
      </div>
      <div className=" absolute feature top-0 right-2">
        <div className="mb-1 cursor-pointer action-item">
          <AiOutlineHeart />
        </div>
        <div className="mb-1 cursor-pointer action-item">
          <BsArrowRepeat />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
