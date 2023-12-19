'use client';
import Image from 'next/image';
import './index.scss';
import Button from '../button';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRepeat } from 'react-icons/bs';
import Link from 'next/link';
import { API_ROOT, API_URL } from '@/constant';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { addToWishList } from '@/redux/features/wish-list/wishListSlice';
import { ICartItem } from '@/types/cart';
import { useRouter } from 'next/navigation';
import { addToCompare } from '@/redux/features/compare/compareSlice';
import { ICompareItem } from '@/types/compare';
import { toast } from 'react-toastify';
import axios from 'axios';

interface IProps {
  product_id: number;
  image: string;
  title: string;
  regular_price: string | number;
  discount_price: string | number;
  sort_description: string;
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
  sort_description,
}) => {
  const { login } = useAppSelector((state) => state.login);
  const { data: compareItems } = useAppSelector((state) => state.compare);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleBuyNow = (data: ICartItem) => {
    dispatch(addToCart(data));
    router.push('/cart');
  };

  const addCompare = (data: ICompareItem) => {
    if (compareItems.length < 4) {
      dispatch(addToCompare(data));
    } else {
      toast.error('Maximum items exits');
    }
  };

  const addWishList = async () => {
    if (login?.accessToken && login?.user?.id) {
      try {
        const response = await axios.post(`${API_URL}/wishlists`, {
          product_id,
          user_id: login?.user?.id,
        });
        if (response.status == 201) {
          dispatch(
            addToWishList({
              product_id: response.data.data.product_id,
              user_id: response.data.data.user_id,
            })
          );
        } else {
          console.log('Status : ', response.status);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push('/login');
    }
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
        <div className=" h-12">
          <Link
            href={`/product/${url}`}
            className=" font-gotham product-title font-normal text-center text-sm"
          >
            {title.substring(0, 46)}
          </Link>
        </div>
        <p className=" mb-2 text-center text-sm">
          <span
            className={`mr-2 font-gotham ${
              Number(discount_price) > 0
                ? 'line-through font-normal '
                : 'font-bold'
            } text-xs`}
          >
            ৳ {regular_price}
          </span>
          {Number(discount_price) > 0 && (
            <span className=" font-gotham font-bold text-xs">
              ৳ {discount_price}
            </span>
          )}
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() =>
              dispatch(
                addToCart({
                  product_id: product_id,
                  price: Number(
                    Number(discount_price) > 0 ? discount_price : regular_price
                  ),
                  title: title,
                  image: image,
                  quantity: 1,
                  regular_price: Number(regular_price),
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
                regular_price: Number(regular_price),
              })
            }
            className="font-gotham font-medium py-2 text-xs  w-[102px]"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className=" absolute top-2 left-2">
        {((Number(regular_price) - Number(discount_price)) /
          Number(regular_price)) *
          100 !==
        0 ? (
          <span className=" sudo inline-block discount font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
            {(
              ((Number(regular_price) - Number(discount_price)) /
                Number(regular_price)) *
              100
            ).toFixed(2)}
            %
          </span>
        ) : null}
        {isNew ? (
          <span className=" sudo inline-block new font-gotham text-xs font-bold  px-2 py-1  rounded text-primary">
            New
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className=" absolute  feature top-2 right-2">
        <div className="mb-1 cursor-pointer action-item" onClick={addWishList}>
          <AiOutlineHeart className=" hover:text-primary" />
        </div>
        <div
          className="mb-1 cursor-pointer action-item"
          onClick={() =>
            addCompare({
              product_id,
              description: sort_description ?? '',
              image,
              title,
              regular_price: Number(regular_price),
              price: Number(discount_price),
              quantity: 1,
              rating: 5,
            })
          }
        >
          <BsArrowRepeat className=" hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
