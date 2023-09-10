import Link from 'next/link';
import React from 'react';
import { BiSolidPhone } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import './index.scss';

const TopHeader = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-2">
        <div className="flex  items-center">
          <span className=" mr-2 text-primary font-gotham font-normal text-sm">
            <BiSolidPhone />
          </span>
          <p className="text-primary font-gotham font-normal text-sm">
            +880 1766 688840
          </p>
          <div className="flex  items-center ml-4">
            <span className=" mr-2 text-primary font-gotham font-normal text-sm">
              <AiFillBell />
            </span>
            <p className=" text-primary font-gotham font-normal text-sm">
              10:00 AM - 6:00 PM | Sat - Thus
            </p>
          </div>
        </div>
        <div>
          <div className="relative group inline-block">
            <Link
              className="ml-6 sub-link  text-primary font-gotham font-normal text-sm"
              href={'/about'}
            >
              Help
              <span>
                <BsChevronDown className="inline text-[9px] font-bold ml-1" />
              </span>
            </Link>
            <div className="absolute opacity-0 invisible  group-hover:visible help-item sibling w-[150px] p-2 top-[23px]  z-10 left-0">
              <ul className="   bg-[#fff] font-gotham font-normal text-sm text-black">
                <li className="px-2 py-1 hover:text-primary">
                  <Link href={'/link'}>Link 1</Link>
                </li>
                <li className="px-2 py-1 hover:text-primary">
                  <Link href={'/'}>Link 2</Link>
                </li>
                <li className="px-2 py-1 hover:text-primary">
                  <Link href={'/'}>Link 3</Link>
                </li>
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
