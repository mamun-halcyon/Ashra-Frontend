"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineFilePpt, AiOutlineHeart } from "react-icons/ai";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { RiPhoneCameraLine } from "react-icons/ri";
import { GrUserSettings } from "react-icons/gr";
import "./index.scss";
import { useAppSelector } from "@/redux/hooks";
import { API_ROOT } from "@/constant";
import { MdClose } from "react-icons/md";

const ProfileSidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { login } = useAppSelector((state) => state.login);
  const sidebarRef = useRef<HTMLDivElement>(null); // Ref for the sidebar

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose(); // Close sidebar when clicking outside of it
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

  return (
    <>
    {isOpen && <div className="sidebar-overlay open" onClick={onClose} />} {/* Overlay */}
    <div
      ref={sidebarRef}
      className={`profile-sidebar w-[250px] md:w-[400px] ${isOpen ? "open" : ""}`}
    >
      <button className="close-btn" onClick={onClose}>
      <MdClose className="w-5 h-5 cursor-pointer"/>
      </button>
      <div className="md:col-span-3 shadow py-10 white-bg">
        <div className="relative profile-top">
          <div className="primary-bg h-28">
            <div className="shadow absolute bottom-0 left-[50%] rounded-full p-4 w-24 h-24 white-bg flex justify-center items-center translate-y-[50%] translate-x-[-50%] overflow-hidden">
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
        </div>
        <div className="mt-16 text-center  px-5 ">
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
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center  pl-3 mt-1">
            <span className="mr-2">
              <AiOutlineFilePpt />
            </span>
            <Link
              className="font-gotham font-normal text-sm md:text-base black-text py-2"
              href={"/profile/order"}
            >
              Purchase History
            </Link>
          </li>
          
          <li className="flex items-center  pl-3 mt-1">
            <span className="mr-2">
              <LiaHandHoldingUsdSolid />
            </span>
            <Link
              className="font-gotham font-normal text-sm md:text-base black-text py-2"
              href={"/profile/refund"}
            >
              Refund Requested
            </Link>
          </li>
          <li className="flex items-center  pl-3">
            <span className="mr-2">
              <AiOutlineHeart />
            </span>
            <Link
              className="font-gotham font-normal text-sm md:text-base black-text py-2"
              href={"/wishlist"}
            >
              Wishlist
            </Link>
          </li>
          <li className="flex items-center  pl-3 mt-1">
            <span className="mr-2">
              <BsArrowRepeat />
            </span>
            <Link
              className="font-gotham font-normal text-sm md:text-base black-text py-2"
              href={"/compare"}
            >
              Compare
            </Link>
          </li>
          <li className="flex items-center  pl-3">
            <span className="mr-2">
              <BiMessageDetail />
            </span>
            <Link
              className="font-gotham font-normal text-sm md:text-base black-text py-2"
              href={"/profile/questions"}
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
            >
              Support Ticket
            </Link>
          </li>
          <li className="flex items-center  pl-3">
            <span className="mr-2">
              <GrUserSettings />
            </span>
            <Link
              className="font-gotham font-normal text-sm md:text-base black-text py-2"
              href={"/profile/manage-profile"}
            >
              Manage Profile
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileSidebar;
