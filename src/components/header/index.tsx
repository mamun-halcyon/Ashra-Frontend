"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import "./index.scss";
import { IHomePage } from "@/types/home";
import { IMenu } from "@/types/menu";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearLoginInfo } from "@/redux/features/login/loginSlice";
import { clearWishList } from "@/redux/features/wish-list/wishListSlice";

type IProps = {
  homeData: IHomePage;
  menus: IMenu[];
};

const TopHeader = ({ homeData, menus }: IProps) => {
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [login?.accessToken]);

  const logoutHandler = (e: any) => {
    e.preventDefault();
    dispatch(clearWishList());
    dispatch(clearLoginInfo());
    router.push("/login");
  };

  return (
    <div className="container h-[40px] px-1 md:px-0">
      <div className="flex justify-between items-center flex-wrap py-2">
        <div className="flex justify-between md:justify-start w-[100%]  md:w-[auto] items-center">
          <div className="flex items-center">
            <span className=" mr-2 primary-text font-gotham font-medium hover:text-[#524096] text-sm">
              <BiSolidPhone />
            </span>
            <p className="primary-text font-gotham font-medium hover:text-[#524096] text-[12px] sm:text-sm">
              {homeData?.mobile_number}
            </p>
          </div>
          <div className="flex  items-center ml-4">
            <span className=" mr-2 primary-text font-gotham font-medium hover:text-[#524096] text-sm">
              <AiFillBell />
            </span>
            <p className=" primary-text font-gotham font-medium hover:text-[#524096] text-[12px] sm:text-sm">
              {homeData?.office_time}
            </p>
          </div>
        </div>
        <div className=" hidden md:block">
          <div className="relative group inline-block">
            <p
              className="sub-link cursor-pointer primary-text font-gotham font-medium hover:text-[#524096] text-sm"
            >
              Help
              <span>
                <BsChevronDown className="inline text-[9px] font-bold ml-1" />
              </span>
            </p>
            <div className="absolute  invisible  group-hover:visible help-item sibling w-[130px] py-2 top-[23px]  z-10 left-0">
              <ul className="   bg-[#fff] font-gotham font-medium hover:text-[#524096] text-[13px] black-text">
                {menus?.map((menu, index) => (
                  <li key={index} className="px-2 py-1 hover:text-[#524096] ">
                    <Link href={menu.slug}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {isLoggedIn ? (
            <span
              className="ml-6 sub-link primary-text font-gotham font-medium hover:text-[#524096] text-sm logout-button"
              onClick={logoutHandler}
            >
              Logout
            </span>
          ) : (
            <>
              <Link
                className="ml-6 sub-link primary-text font-gotham font-medium hover:text-[#524096] text-sm"
                href={"/login"}
              >
                Login
              </Link>
              <Link
                className="ml-6 sub-link primary-text font-gotham font-medium hover:text-[#524096] text-sm"
                href={"/register"}
              >
                Registration
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
