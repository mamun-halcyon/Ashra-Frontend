import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import {
  AiOutlineFilePpt,
  AiOutlineDownload,
  AiOutlineHeart,
} from 'react-icons/ai';
import { LiaHandHoldingUsdSolid } from 'react-icons/lia';
import { BsArrowRepeat } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { RiPhoneCameraLine } from 'react-icons/ri';
import { GrUserSettings } from 'react-icons/gr';
import './index.scss';

const ProfileSidebar = () => {
  return (
    <div className=" col-span-3 shadow pb-6">
      <div className="relative profile-top">
        <div className="bg-primary h-28">
          <div className="shadow absolute bottom-0 left-[50%] rounded-full p-4 w-24 h-24 bg-white flex justify-center items-center translate-y-[50%] translate-x-[-50%]">
            <Image
              className="w-full"
              src={'/assets/images/icon/profile.png'}
              width={80}
              height={80}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 text-center ">
        <div className="px-10">
          <h3 className=" font-gotham font-medium text-base text-black">
            Profile Name
          </h3>
          <p className=" font-gotham font-normal text-sm text-black bg-secondary mt-1">
            email@gmail.com
          </p>
        </div>
        <ul className="mt-12 text-left profile-link">
          <li className="flex items-center pl-3">
            <span className="mr-2">
              <RxDashboard />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/profile'}
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center  pl-3 mt-1">
            <span className="mr-2">
              <AiOutlineFilePpt />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/profile/order'}
            >
              Purchase History
            </Link>
          </li>
          {/*  <li className="flex items-center pl-3">
            <span className="mr-2">
              <AiOutlineDownload />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/'}
            >
              Downloads
            </Link>
          </li> */}
          <li className="flex items-center  pl-3 mt-1">
            <span className="mr-2">
              <LiaHandHoldingUsdSolid />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/'}
            >
              Refund Requested
            </Link>
          </li>
          <li className="flex items-center  pl-3">
            <span className="mr-2">
              <AiOutlineHeart />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/wishlist'}
            >
              Wishlist
            </Link>
          </li>
          <li className="flex items-center  pl-3 mt-1">
            <span className="mr-2">
              <BsArrowRepeat />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/compare'}
            >
              Compare
            </Link>
          </li>
          <li className="flex items-center  pl-3">
            <span className="mr-2">
              <BiMessageDetail />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/profile/conversations'}
            >
              Conversations
            </Link>
          </li>
          <li className="flex items-center pl-3 mt-1">
            <span className="mr-2">
              <RiPhoneCameraLine />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/profile/ticket'}
            >
              Support Ticket
            </Link>
          </li>
          <li className="flex items-center  pl-3">
            <span className="mr-2">
              <GrUserSettings />
            </span>
            <Link
              className="font-gotham font-normal text-sm text-black py-2"
              href={'/profile/manage-profile'}
            >
              Manage Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
