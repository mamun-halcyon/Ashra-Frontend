'use client';
import Image from 'next/image';
import './index.scss';
import Button from '../button';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRepeat } from 'react-icons/bs';
import Link from 'next/link';
import { API_ROOT } from '@/constant';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { ICartItem } from '@/types/cart';
import { useRouter } from 'next/navigation';

interface IProps {
  product_id: number;
  image: string;
  title: string;
  regular_price: string | number;
  discount_price: string | number;
  url: string;
  isNew?: boolean;
}
const ProductCard: React.FC<IProps> = ({
  image,
  title,
  regular_price,
  discount_price,
  url,
  isNew,
  product_id,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleBuyNow = (data: ICartItem) => {
    dispatch(addToCart(data));
    router.push('/cart');
  };

  return (
    <div className="product-card group relative p-3  mt-2">
      <Link href={`/product/${url}`}>
        <div className="flex justify-center items-center pt-10 pb-5 px-6 image">
          <Image
            src={`${API_ROOT}/images/product/${image}`}
            width={100}
            height={100}
            alt="product"
          />
        </div>
      </Link>

      <div className="text ">
        <Link
          href={`/product/${url}`}
          className=" font-gotham product-title font-normal text-center text-sm"
        >
          {title}
        </Link>
        <p className=" mb-2 text-center text-sm">
          <span className=" mr-2 line-through font-normal text-xs">
            ৳ {regular_price}
          </span>
          <span className=" font-gotham font-bold text-xs">
            ৳ {discount_price}
          </span>
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() =>
              dispatch(
                addToCart({
                  product_id: product_id,
                  price: Number(discount_price),
                  title: title,
                  image: image,
                  quantity: 1,
                })
              )
            }
            className="font-gotham font-medium py-2 text-xs mr-2 w-[102px]"
          >
            Add to Cart
          </Button>
          <Button
            onClick={() =>
              handleBuyNow({
                product_id,
                price: Number(discount_price),
                title: title,
                image: image,
                quantity: 1,
              })
            }
            className="font-gotham font-medium py-2 text-xs  w-[102px]"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className=" absolute top-2 left-2">
        <span className=" sudo inline-block discount font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
          {((Number(regular_price) - Number(discount_price)) /
            Number(regular_price)) *
            100}
          %
        </span>
        {isNew && (
          <span className=" sudo inline-block new font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
            New
          </span>
        )}
      </div>
      <div className=" absolute  feature top-2 right-2">
        <div className="mb-1 cursor-pointer action-item">
          <AiOutlineHeart className=" hover:text-primary" />
        </div>
        <div className="mb-1 cursor-pointer action-item">
          <BsArrowRepeat className=" hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
