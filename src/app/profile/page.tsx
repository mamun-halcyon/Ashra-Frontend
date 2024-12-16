"use client";
import React, { useEffect, useState } from "react";
import "./page.scss";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { FaBars, FaUserCircle } from "react-icons/fa";
import axiosInstance from "../../../utils/axiosInstance";
import Image from "next/image";
import { API_ROOT } from "@/constant";
import Link from "next/link";

const Profile = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const { cart } = useAppSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [dashboard, setDashboard] = useState<any>();

  const getDashboardInfo = async () => {
    const response = await axiosInstance.get(`/customers/dashboards`, {
      headers: {
        Authorization: `Bearer ${login?.accessToken}`,
      },
    });
    if (response?.status === 200) {
      setDashboard(response?.data);
    }
  };

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
      getDashboardInfo();
    } else {
      route.push("/login");
    }
  }, [login, route]);

  return (
    <>
      {isLoggedIn ? (
        <div className="container md:my-10 mb-10 mt-5">
          <h2 className="md:text-3xl text-xl font-semibold font-gotham text-center mb-3 md:mb-8">
            Your Dashboard
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="md:col-span-3 mx-10 md:mx-0 col-span-12 flex flex-col justify-center items-center primary-bg py-5">
              <div className="shadow rounded-full p-4 w-24 h-24 white-bg">
                {login?.user?.image ? (
                  <Image
                    className="w-full rounded-full"
                    src={`${API_ROOT}/images/user/${login.user.image}`}
                    width={80}
                    height={80}
                    alt="profile"
                  />
                ) : (
                  <Image
                    className="w-full rounded-full"
                    src={"/assets/images/icon/profile.png"}
                    width={80}
                    height={80}
                    alt="profile"
                  />
                )}
              </div>
              <div className="">
                <h3 className="font-gotham font-medium text-base md:text-lg text-white text-center">
                  {login?.user?.name}
                </h3>
                <p className="font-gotham font-normal text-sm md:text-base text-white mt-1 text-center">
                  {login?.user?.email}
                </p>
              </div>
            </div>

            <div className=" md:col-span-9 col-span-12 px-2 ">
            <p className="font-gotham font-semibold ">Welcome back {login?.user?.name}, you have...</p>
              <div className="grid grid-cols-3 md:gap-4 gap-1">
                <Link href={'/cart'} className=" primary-bg py-5 pl-5">
                  <h2 className=" font-medium font-gotham text-base white-text">
                    {cart?.length} Products
                  </h2>
                  <p className=" font-gotham font-light text-xs white-text">
                    In Your Cart
                  </p>
                </Link>
                <Link href={'/wishlist'} className=" primary-bg py-5 pl-5">
                  <h2 className=" font-medium font-gotham text-base white-text">
                    {dashboard?.wishlistCount} Products
                  </h2>
                  <p className=" font-gotham font-light text-xs white-text">
                    In Your Wishlist
                  </p>
                </Link>
                <Link href={'/profile/order'} className=" primary-bg py-5 pl-5">
                  <h2 className=" font-medium font-gotham text-base white-text">
                    {dashboard?.orderCount} Products
                  </h2>
                  <p className=" font-gotham font-light text-xs white-text">
                    In Your Ordered
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Profile;
