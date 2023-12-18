"use client";
import Button from "@/components/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./page.scss";
import ServiceCard from "@/components/service-card";
import { serviceCardData } from "@/static/serviceCard";
import axios from "axios";
import { API_ROOT, API_URL } from "@/constant";
import { toast } from "react-toastify";
import { removeFromWishList } from "@/redux/features/wish-list/wishListSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearLoginInfo } from "@/redux/features/login/loginSlice";
import {
  setWishList,
  clearWishList,
} from "@/redux/features/wish-list/wishListSlice";
import { useRouter } from "next/navigation";

function WishlistPage() {
  const [wishListItems, setWishListItems] = useState<any[]>([]);
  const { login } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const route = useRouter();

  const getWishListItems = async () => {
    if (login?.accessToken) {
      try {
        const response = await axios.get(`${API_URL}/customers/wishlists`, {
          headers: {
            Authorization: `Bearer ${login?.accessToken}`,
          },
        });
        if (response.status == 200) {
          setWishListItems(response?.data);
          dispatch(setWishList(response?.data));
        }
      } catch (error) {
        if (error?.response?.status === 401) {
          dispatch(clearWishList());
          dispatch(clearLoginInfo());
          route.push("/login");
        }
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleRemoveItem = async (wishlistID: number, productID: number) => {
    if (login?.accessToken && login?.user?.id) {
      try {
        const response = await axios.delete(
          `${API_URL}/wishlists?ids=[${wishlistID}]`,
          {
            headers: {
              Authorization: `Bearer ${login?.accessToken}`,
            },
          }
        );
        if (response.status == 200) {
          toast.success("Item removed successfuly!");
          dispatch(
            removeFromWishList({
              product_id: productID,
              user_id: login?.user?.id,
            })
          );
          getWishListItems();
        }
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  useEffect(() => {
    getWishListItems();
  }, []);

  return (
    <main>
      <section className="wishlist-page">
        <div className="container px-2 md:px-0">
          <h2 className=" font-gotham font-medium text-lg wish-heading mb-1  pb-1">
            Wishlist
          </h2>
          <div className="cart-elements">
            <div className="grid grid-cols-8 gap-4 product-title">
              <div className=" col-span-4 flex items-center justify-center">
                {/* <GoDotFill className="dot-icon" /> */}
                <div className="w-full">
                  <h3 className="md:ml-[162px] ml-[30px] font-gotham font-medium text-base text-black">
                    Product Name
                  </h3>
                </div>
              </div>
              <div className="col-span-1 flex items-center ">
                {/* <GoDotFill className="dot-icon" /> */}
                <h3 className=" font-gotham font-medium text-base text-black text-center">
                  Price
                </h3>
              </div>
              <div className=" hidden col-span-2 md:flex items-center">
                {/* <GoDotFill className="dot-icon" /> */}
                <h3 className=" font-gotham font-medium text-base text-black text-center">
                  Stock Status
                </h3>
              </div>
              <div className="col-span-1 flex items-center"></div>
            </div>
            {wishListItems.length > 0 &&
              wishListItems.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-8 gap-4 items-center product-item"
                >
                  <div className="col-span-4">
                    <div className="flex items-center">
                      <div
                        className=" cursor-pointer"
                        onClick={() =>
                          handleRemoveItem(item.wishlist_id, item?.id)
                        }
                      >
                        <span>
                          <RxCross2 className="text-xs " />
                        </span>
                      </div>
                      <div className="w-[80px] mx-2 md:mx-9">
                        <Image
                          className=" w-full object-cover"
                          src={`${API_ROOT}/images/product/${item.image}`}
                          width={200}
                          height={200}
                          alt="product"
                        />
                      </div>
                      <div>
                        <h3 className=" font-gotham font-medium text-sm text-black">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-1 col-span-2">
                    <p className=" font-gotham font-medium text-primary text-xs">
                      ৳ {item.discount_price}
                    </p>
                  </div>
                  <div className="col-span-2 hidden md:block">
                    <h3 className=" font-gotham font-medium text-sm">
                      {item.availability == 0 ? "Instock" : ""}
                      {item.availability === 1 ? "Out of stock" : ""}
                      {item.availability === 2 ? "Upcomming" : ""}
                    </h3>
                  </div>
                  <div className="md:col-span-1 col-span-2">
                    <div>
                      <Button
                        className="px-6 py-1 font-gotham font-medium text-sm w-btn"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              product_id: Number(item.id),
                              price: item.discount_price,
                              title: item.title,
                              image: item.image,
                              quantity: 1,
                              regular_price: item.regular_price,
                            })
                          )
                        }
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* <section className="cart-service">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCardData.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default WishlistPage;
