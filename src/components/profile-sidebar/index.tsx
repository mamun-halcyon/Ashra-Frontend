"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineFilePpt, AiOutlineHeart } from "react-icons/ai";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { RiPhoneCameraLine, RiUserShared2Fill } from "react-icons/ri";
import { GrUserSettings } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import "./index.scss";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { clearLoginInfo } from "@/redux/features/login/loginSlice";
import { clearWishList } from "@/redux/features/wish-list/wishListSlice";
import { API_ROOT } from "@/constant";

const ProfileSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { login } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch(); // To handle logout action
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const logoutHandler = (e: any) => {
    e.preventDefault();
    dispatch(clearWishList());
    dispatch(clearLoginInfo());
    router.push("/login");
    onClose();  // Close sidebar after logout
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay open" onClick={onClose} />}
      <div
        ref={sidebarRef}
        className={`profile-sidebar w-[250px] md:w-[400px] ${isOpen ? "open" : ""}`}
      >
        <button className="close-btn" onClick={onClose}>
          <MdClose className="w-5 h-5 cursor-pointer" />
        </button>
        <div className="md:col-span-3 shadow py-10 white-bg">
          <div className="relative profile-top">
            {login?.user ? (
              <>
                <div className="primary-bg h-28">
                  <div className="shadow absolute left-[50%] rounded-full p-4 w-24 h-24 white-bg flex justify-center items-center translate-y-[50%] translate-x-[-50%] overflow-hidden">
                    {login?.user?.image ? (
                      <Image
                        className="w-full"
                        src={`${API_ROOT}/images/user/${login.user.image}`}
                        width={80}
                        height={80}
                        alt="profile"
                      />
                    ) : (
                      <Image
                        className="w-full"
                        src={"/assets/images/icon/profile.png"}
                        width={80}
                        height={80}
                        alt="profile"
                      />
                    )}
                  </div>
                </div>
                <div className="mt-16 text-center px-5">
                  <div className="text-center">
                    <h3 className="font-gotham font-medium text-base md:text-lg black-text text-center">
                      {login?.user?.name}
                    </h3>
                    <p className="font-gotham font-normal text-sm md:text-base black-text secondary-bg mt-1 text-center">
                      {login?.user?.email}
                    </p>
                  </div>
                  <ul className="mt-12 text-left profile-link">
                    <li className="flex items-center pl-3">
                      <span className="mr-2">
                        <RxDashboard />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/profile"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="flex items-center pl-3 mt-1">
                      <span className="mr-2">
                        <AiOutlineFilePpt />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/profile/order"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Purchase History
                      </Link>
                    </li>

                    <li className="flex items-center pl-3 mt-1">
                      <span className="mr-2">
                        <LiaHandHoldingUsdSolid />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/profile/refund"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Refund Requested
                      </Link>
                    </li>
                    <li className="flex items-center pl-3">
                      <span className="mr-2">
                        <AiOutlineHeart />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/wishlist"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Wishlist
                      </Link>
                    </li>
                    <li className="flex items-center pl-3 mt-1">
                      <span className="mr-2">
                        <BsArrowRepeat />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/compare"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Compare
                      </Link>
                    </li>
                    <li className="flex items-center pl-3">
                      <span className="mr-2">
                        <BiMessageDetail />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/profile/questions"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Questions
                      </Link>
                    </li>
                    <li className="flex items-center pl-3 mt-1">
                      <span className="mr-2">
                        <RiPhoneCameraLine />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/profile/ticket"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Support Ticket
                      </Link>
                    </li>
                    <li className="flex items-center pl-3">
                      <span className="mr-2">
                        <GrUserSettings />
                      </span>
                      <Link
                        className="font-gotham font-normal text-sm md:text-base black-text py-2"
                        href={"/profile/manage-profile"}
                        onClick={onClose} // Close sidebar when clicked
                      >
                        Manage Profile
                      </Link>
                    </li>
                    <li className="flex items-center pl-3" onClick={logoutHandler}>
                      <span className="mr-2">
                        <RiUserShared2Fill />
                      </span>
                      <p className="cursor-pointer font-gotham font-normal text-sm md:text-base black-text py-2">
                        Logout
                      </p>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <Link href="/login" onClick={onClose}>
                  <button className="primary-bg text-white px-6 py-2 rounded-md">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
