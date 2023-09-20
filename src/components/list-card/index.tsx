import Image from 'next/image';
import { FC } from 'react';
import './index.scss';
import StarRating from '../rating';
import Button from '../button';
import Link from 'next/link';
import { BsArrowRepeat, BsHeart } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

interface IProduct {
  title: string;
  discountPrice: string;
  regularPrice: string;
  image: string;
}

interface IProps {
  product: IProduct;
}

const ListCard: FC<IProps> = ({ product }) => {
  return (
    <div className="list-card flex py-5">
      <div className="image w-[30%] relative flex items-center justify-center">
        <Image
          className="w-[70%] object-cover"
          src={product.image}
          width={400}
          height={400}
          alt="product"
        />
        <div className=" absolute right-4 top-0">
          <span className=" sudo inline-block discount font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
            12%
          </span>
          <span className=" sudo inline-block new font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
            New
          </span>
        </div>
      </div>
      <div className="details w-[50%] relative">
        <h3 className="font-gotham font-bold text-sm text-black">
          GH-8203M - Gazi Smiss Gas Stove
        </h3>
        <div className="flex items-center mt-3 review">
          <StarRating rating={4} />
          <span className="font-gotham font-normal text-sm ml-3">
            Reviews (4)
          </span>
        </div>
        <h4 className=" font-gotham font-bold text-xs text-black mt-9">
          Brand: Gazi
        </h4>
        <Link className="font-gotham font-bold text-xs text-primary" href={'/'}>
          Avail Bank EMI
        </Link>

        <div className="flex mt-7">
          <div className="flex items-center mr-2">
            <div className="icon-area p-1">
              <BsArrowRepeat className=" text-xs icon" />
            </div>
            <p className="font-gotham font-normal text-xs icon-title">
              Compare
            </p>
          </div>
          <div className="flex items-center mr-2">
            <div className="icon-area p-1">
              <BsHeart className=" text-xs icon" />
            </div>
            <p className="font-gotham font-normal text-xs icon-title">
              Wishlist
            </p>
          </div>
          <div className="flex items-center mr-2">
            <div className="icon-area p-1">
              <AiOutlinePlus className=" text-xs icon" />
            </div>
            <p className="font-gotham font-normal text-xs icon-title">
              Add To Cart
            </p>
          </div>
        </div>
      </div>
      <div className="image w-[20%] relative">
        <h3 className="font-gotham font-normal stock pb-1 mb-4">Instock</h3>
        <h4 className=" font-gotham font-normal text-xs line-through text-black">
          ৳ 2700
        </h4>
        <div className="flex justify-between">
          <h3 className=" font-gotham font-bold text-base text-black">
            ৳ 2600
          </h3>
          <span className=" font-gotham font-normal text-xs  p-2 bg-primary save-money">
            Save ৳ 1000
          </span>
        </div>
        <Button className="w-full font-gotham font-bold text-sm py-2 mt-4 product-btn">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ListCard;
