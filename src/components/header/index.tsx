import Link from 'next/link';
import React from 'react';
import { BiSolidPhone } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';

const TopHeader = () => {
  return (
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
        <Link
          className="mr-2 text-primary font-gotham font-normal text-sm"
          href={'/abut'}
        >
          Help
        </Link>
        <Link
          className="mr-2 text-primary font-gotham font-normal text-sm"
          href={'/'}
        >
          Login
        </Link>
        <Link
          className="mr-2 text-primary font-gotham font-normal text-sm"
          href={'/'}
        >
          Registration
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
