"use client";
import { API_ROOT } from "@/constant";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { addToCompare } from "@/redux/features/compare/compareSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ICartItem } from "@/types/cart";
import { ICompareItem } from "@/types/compare";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRepeat, BsHeart } from "react-icons/bs";
import { toast } from "react-toastify";
import Button from "../button";
import EmiPopup from "../emi-popup";
import FormatPrice from "../price-formate";
import StarRating from "../rating";
import "./index.scss";

interface IProps {
  product: any;
}

const ListCard: FC<IProps> = ({ product }) => {
  // console.log(product);
  const [isEmi, setIsEmi] = useState(false);
  const handleEmi = () => setIsEmi(!isEmi);
  const { data: compareItems } = useAppSelector((state) => state.compare);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleBuyNow = (data: ICartItem) => {
    dispatch(addToCart(data));
    router.push("/cart");
  };

  const addCompare = (data: ICompareItem) => {
    if (compareItems.length < 4) {
      dispatch(addToCompare(data));
    } else {
      toast.error("Maximum items exits");
    }
  };

  return (
    <div className="list-card flex  py-5">
      <div className="image md:w-[30%] w-[30%] relative flex items-center justify-center pt-10 box-border">
        <Link
          href={`/product/${product.slug}`}
          className="font-gotham font-medium text-sm inline-block text-black hover:text-primary w-full"
        >
          <div className=" w-[70%]">
            <Image
              className=" w-full object-cover"
              src={`${API_ROOT}/images/product/${product.image}`}
              width={400}
              height={400}
              alt="product"
            />
          </div>
        </Link>
        <div className=" absolute left-0 top-0">
          {((Number(product.regular_price) - Number(product.discount_price)) /
            Number(product.regular_price)) *
            100 !==
            0 && product.discount_price !== 0 ? (
            <span className=" sudo inline-block discount font-gotham text-[10px] md:text-xs font-bold  px-1 md:px-2 py-1  rounded text-primary">
              {(
                ((Number(product.regular_price) -
                  Number(product.discount_price)) /
                  Number(product.regular_price)) *
                100
              ).toFixed(2)}
              %
            </span>
          ) : null}
          {product.is_new ? (
            <span className=" sudo inline-block new font-gotham text-[10px] md:text-xs font-medium px-1 md:px-2 py-1  rounded text-primary">
              New
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="details md:w-[50%] w-[40%] relative">
        <Link
          href={`/product/${product.slug}`}
          className="font-gotham font-medium text-sm  text-black hover:text-primary"
        >
          {product.title}
        </Link>
        <div className="flex flex-wrap items-center mt-1 md:mt-3 review">
          <StarRating rating={4} />
          <span className="font-gotham font-normal w-full md:w-auto text-xs ml-0 md:ml-2">
            Reviews ({4})
          </span>
        </div>
        {/*  <h4 className=" font-gotham font-medium text-xs text-black md:mt-9 mt-5">
          Brand: Gazi
        </h4> */}
        <h3
          className="font-gotham font-medium text-xs text-primary cursor-pointer md:mt-10 mt-4"
          onClick={() => setIsEmi(true)}
        >
          Avail Bank EMI
        </h3>

        <div className="flex flex-wrap md:mt-7 mt-3">
          <div
            className="flex items-center mr-2 cursor-pointer interaction"
            onClick={() =>
              addCompare({
                product_id: product.id,
                description: product.sort_description ?? "",
                image: product.image,
                title: product.title,
                regular_price: Number(product.regular_price),
                price: Number(product.discount_price),
                quantity: 1,
                rating: 5,
              })
            }
          >
            <div className="icon-area p-1">
              <BsArrowRepeat className=" text-xs icon" />
            </div>
            <p className="font-gotham font-normal text-xs icon-title">
              Compare
            </p>
          </div>
          <div className="flex items-center mr-2 mt-2 md:mt-0 cursor-pointer interaction">
            <div className="icon-area p-1">
              <BsHeart className=" text-xs icon" />
            </div>
            <p className="font-gotham font-normal text-xs icon-title">
              Wishlist
            </p>
          </div>
          <div className="flex items-center mr-2 mt-2 md:mt-0 cursor-pointer interaction">
            <div className="icon-area p-1">
              <AiOutlinePlus className=" text-xs icon" />
            </div>
            <p
              className="font-gotham font-normal text-xs icon-title"
              onClick={() =>
                dispatch(
                  addToCart({
                    product_id: product.id,
                    price: Number(product.discount_price),
                    title: product.title,
                    image: product.image,
                    quantity: 1,
                    regular_price: Number(product.regular_price),
                  })
                )
              }
            >
              Add To Cart
            </p>
          </div>
        </div>
      </div>
      <div className="image w-[30%] relative">
        <h3 className="font-gotham font-medium stock pb-1 mb-4">
          {" "}
          {product.availability === 1
            ? "In Stock"
            : product.availability === 2
            ? "Out of Stock"
            : product.availability === 3
            ? "Upcoming"
            : "Unknown Availability"}
        </h3>
        <h4 className=" font-gotham font-normal text-xs line-through text-black">
          ৳ {FormatPrice(product.regular_price)}
        </h4>
        <div className="flex justify-between flex-wrap items-center">
          <h3 className=" font-gotham font-medium text-base text-black">
            ৳ {product.discount_price}
          </h3>
          <span className=" font-gotham font-normal md:text-xs text-[10px]  px-1 py-[2px] save-text save-money">
            Save ৳{" "}
            {Number(product.regular_price) - Number(product.discount_price)}
          </span>
        </div>
        {product.availability === 1 ? (
          <Button
            className="md:w-full px-3 md:px-0 font-gotham font-medium text-[14px] md:text-sm py-1 mt-4 product-btn"
            onClick={() => {
              handleBuyNow({
                product_id: product.id,
                price: Number(product.discount_price),
                title: product.title,
                image: product.image,
                quantity: 1,
                regular_price: Number(product.regular_price),
              });
            }}
          >
            Buy Now
          </Button>
        ) : product.availability === 2 ? (
          <Button className="md:w-full px-3 md:px-0 font-gotham font-medium text-[14px] md:text-sm py-1 mt-4 product-btn stock-out">
            Out of Stock
          </Button>
        ) : product.availability === 3 ? (
          <Button className="md:w-full px-3 md:px-0 font-gotham font-medium text-[14px] md:text-sm py-1 mt-4 product-btn">
            Up Coming
          </Button>
        ) : (
          "Unknown Stock"
        )}
      </div>
      {isEmi && (
        <EmiPopup price={product.discount_price} handleEmi={handleEmi} />
      )}
    </div>
  );
};

export default ListCard;
