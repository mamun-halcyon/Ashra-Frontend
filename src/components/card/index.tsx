"use client";
import { API_ROOT, API_URL } from "@/constant";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { addToCompare } from "@/redux/features/compare/compareSlice";
import { addToWishList } from "@/redux/features/wish-list/wishListSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ICartItem } from "@/types/cart";
import { ICompareItem } from "@/types/compare";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";
import Button from "../button";
import FormatPrice from "../price-formate";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface IProps {
  product_id: number;
  image: string;
  title: string;
  regular_price: string | number;
  discount_price: string | number;
  sort_description: string;
  url: string;
  isNew?: boolean;
  availability: any;
  quantity: number;
  productAttribute?: any[];
  camping_start_date?: string;
  camping_end_date?: string;
  camping_name?: string;
  camping_id?: number;
}

const ProductCard: React.FC<IProps> = ({
  image,
  title,
  regular_price,
  discount_price,
  productAttribute,
  url,
  isNew,
  product_id,
  sort_description,
  availability,
  quantity,
  camping_end_date,
  camping_start_date,
  camping_name,
  camping_id
}) => {
  const { login } = useAppSelector((state) => state.login);
  const { data: compareItems } = useAppSelector((state) => state.compare);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isCampaign, setIsCampaign] = useState(false);

  useEffect(() => {
    const checkCampaign = async () => {
      if (camping_id) {
        try {
          const response = await axios.get<any>(`${API_URL}/campings/${camping_id}`);
          const campaign = response.data.data;

          const now = new Date();
          const startDate = new Date(campaign.start_date);
          const endDate = new Date(campaign.end_date);

          // const date = startDate <= now && endDate >= now;
          // console.log(startDate, endDate);
          if (startDate <= now && endDate >= now) {
            setIsCampaign(true);
          } else {
            setIsCampaign(false);
          }
        } catch (error) {
          console.error("Error fetching campaign details:", error);
          setIsCampaign(false);
        }
      } else {
        setIsCampaign(false);
      }
    };

    checkCampaign();
  }, [camping_id]);


  const handleBuyNow = (data: ICartItem) => {
    dispatch(addToCart(data));
    router.push("/cart");
  };

  const addCompare = (data: ICompareItem) => {
    if (compareItems.length < 4) {
      dispatch(addToCompare(data));
    } else {
      toast.error(
        "You already have added 4 products in your compare list. Please remove one of them from compare page to add a new one."
      );
    }
  };

  const addWishList = async () => {
    if (login?.accessToken && login?.user?.id) {
      try {
        const response = await axiosInstance.post(
          `/wishlists`,
          {
            product_id,
            user_id: login?.user?.id,
          },
          {
            headers: {
              Authorization: `Bearer ${login?.accessToken}`,
            },
          }
        );
        if (response.status == 201) {
          dispatch(
            addToWishList({
              product_id: response.data.wishlist.product_id,
              user_id: response.data.wishlist.user_id,
            })
          );
        } else {
          console.log("Status : ", response.data);
          toast.warning(`${response.data.message}`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="product-card group relative p-3 mt-2">
      <Link href={`/product/${url}`}>
        <div className="flex justify-center items-center pt-2 image">
          <Image
            className="mb-1"
            src={`${API_ROOT}/images/product/${image}`}
            width={220}
            height={210}
            quality={100}

            alt="product"
          />
        </div>
      </Link>

      <div className="text">
        <div className="h-12 md:h-10 leading-3 text-center">
          <Link
            href={`/product/${url}`}
            className="font-gotham primary-text product-title font-medium text-center text-xs md:text-sm"
          >
            {title?.substring(0, 44)}
          </Link>
        </div>
        <p className="mb-6 text-center text-sm h-5 mt-1">
          {Number(regular_price) && (
            <span
              className={`mr-3 font-gotham ${Number(discount_price) > 0 &&
                Number(discount_price) != Number(regular_price)
                ? "line-through font-medium opacity-60 text-xs md:text-sm"
                : "font-bold primary-text"
                } text-sm md:text-base`}
            >
              ৳ {FormatPrice(regular_price)}
            </span>
          )}

          {Number(discount_price) > 0 &&
            Number(discount_price) != Number(regular_price) && (
              <span className="font-gotham primary-text font-bold text-sm md:text-base">
                ৳ {FormatPrice(discount_price)}
              </span>
            )}
        </p>
        <div className="flex justify-center">
          {availability === 1 && (
            <>
              {productAttribute && productAttribute.length > 0 ? (
                // Check if all attribute quantities are 0
                productAttribute.every(attr => attr.attribute_quantity === 0) ? (
                  <Button className="font-gotham font-medium py-2 px-2 text-xs w-[102px] btn__disable">
                    Out of Stock
                  </Button>
                ) : (
                  // At least one attribute has quantity > 0
                  <Link href={`/product/${url}`}>
                    <Button className="font-gotham font-medium py-2 px-2 text-xs w-[102px]">
                      View
                    </Button>
                  </Link>
                )
              ) : (
                // No attributes, check the main quantity
                <>
                  {quantity > 0 ? (
                    <>
                      <Button
                        onClick={() =>
                          dispatch(
                            addToCart({
                              product_id: product_id,
                              price: Number(
                                Number(discount_price) > 0
                                  ? discount_price
                                  : regular_price
                              ),
                              title: title,
                              image: image,
                              quantity: 1,
                              regular_price: Number(regular_price),
                            })
                          )
                        }
                        className="font-gotham font-medium py-2 px-2 text-xs mr-2 w-[102px]"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        onClick={() =>
                          handleBuyNow({
                            product_id,
                            price: Number(
                              Number(discount_price) > 0
                                ? discount_price
                                : regular_price
                            ),
                            title: title,
                            image: image,
                            quantity: 1,
                            regular_price: Number(regular_price),
                          })
                        }
                        className="font-gotham font-medium py-2 px-2 text-xs w-[102px]"
                      >
                        Buy Now
                      </Button>
                    </>
                  ) : (
                    <Button className="font-gotham font-medium py-2 px-2 text-xs w-[102px] btn__disable">
                      Out of Stock
                    </Button>
                  )}
                </>
              )}
            </>
          )}

          {availability === 2 && (
            <Button className="font-gotham font-medium py-2 px-2 text-xs w-[102px] btn__disable">
              Out of Stock
            </Button>
          )}

          {availability === 3 && (
            <Button className="font-gotham font-medium py-2 px-2 text-xs w-[102px]">
              Up Coming
            </Button>
          )}
        </div>

      </div>
      <div className="absolute top-2 left-2">
        {Number(regular_price) > 0 && Number(discount_price) > 0 && (
          (() => {
            const discountPercent =
              ((Number(regular_price) - Number(discount_price)) /
                Number(regular_price)) *
              100;

            // Only show the discount percentage if it is greater than 0
            if (discountPercent > 0) {
              return (
                <span className="sudo inline-block discount font-gotham text-xs font-bold px-2 py-1 rounded primary-text">
                  - {discountPercent % 1 !== 0
                    ? discountPercent.toFixed(2) // Show 2 decimal points if fractional
                    : discountPercent.toString()}%
                </span>
              );
            }
            return null; // Do not render anything if the discount is 0%
          })()
        )}



        {isNew ? (
          <span className="sudo inline-block new font-gotham text-xs font-bold px-2 py-1 rounded primary-text">
            New
          </span>
        ) : null}
        {isCampaign ? (
          <span className="sudo inline-block new font-gotham text-xs font-bold px-2 py-1 rounded primary-text">
            Campaign Offer
          </span>
        ) : null}
      </div>
      <div className="absolute feature top-2 right-2">
        <div className="mb-1 cursor-pointer action-item" onClick={addWishList}>
          <AiOutlineHeart className="action-item-hover" />
        </div>
        <div
          className="mb-1 cursor-pointer action-item"
          onClick={() =>
            addCompare({
              product_id,
              description: sort_description ?? "",
              image,
              title,
              slug: url,
              regular_price: Number(regular_price),
              price: Number(discount_price),
              default_quantity: quantity,
              rating: 5,
              availability: availability,
              productAttribute: productAttribute,
            })
          }
        >
          <BsArrowRepeat className="action-item-hover" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
