import Link from 'next/link';
import React from 'react';
import { BiSolidPhone } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import './index.scss';
import { IHomePage } from '@/types/home';
import { IMenu } from '@/types/menu';

type IProps = {
  homeData: IHomePage;
  menus: IMenu[];
};

const TopHeader = ({ homeData, menus }: IProps) => {
  return (
    <div className="container p-2 md:p-0">
      <div className="flex justify-between items-center flex-wrap py-2">
        <div className="flex justify-between md:justify-start w-[100%]  md:w-[auto] items-center">
          <div className="flex">
            <span className=" mr-2 text-primary font-gotham font-normal text-sm">
              <BiSolidPhone />
            </span>
            <p className="text-primary font-gotham font-normal text-[12px] sm:text-sm">
              {homeData?.mobile_number}
            </p>
          </div>
          <div className="flex  items-center ml-4">
            <span className=" mr-2 text-primary font-gotham font-normal text-sm">
              <AiFillBell />
            </span>
            <p className=" text-primary font-gotham font-normal text-[12px] sm:text-sm">
              {homeData?.office_time}
            </p>
          </div>
        </div>
        <div className=" hidden md:block">
          <div className="relative group inline-block">
            <Link
              className="sub-link  text-primary font-gotham font-normal text-sm"
              href={'/about'}
            >
              Help
              <span>
                <BsChevronDown className="inline text-[9px] font-bold ml-1" />
              </span>
            </Link>
            <div className="absolute opacity-0 invisible  group-hover:visible help-item sibling w-[130px] py-2 top-[23px]  z-10 left-0">
              <ul className="   bg-[#fff] font-gotham font-normal text-[13px] text-black">
                {menus?.map((menu, index) => (
                  <li key={index} className="px-2 py-1 hover:text-primary">
                    <Link href={`/${menu.slug}`}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            className="ml-6 sub-link text-primary font-gotham font-normal text-sm"
            href={'/login'}
          >
            Login
          </Link>
          <Link
            className="ml-6 sub-link text-primary font-gotham font-normal text-sm"
            href={'/register'}
          >
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
