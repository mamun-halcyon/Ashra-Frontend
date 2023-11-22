import Image from 'next/image';
import './index.scss';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRepeat } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Link from 'next/link';

import SearchArea from '../search';

const Navbar = () => {
  return (
    <nav className="navbar shadow">
      <div className="container px-2 md:px-0">
        <div className=" flex justify-between items-center py-5">
          <div className=" w-[33%]">
            <Link href={'/'}>
              <Image
                className="logo"
                src={'/assets/images/logo/Logo.png'}
                width={154}
                height={80}
                alt="gazi group logo"
              />
            </Link>
          </div>
          <SearchArea />
          <div className="w-[33%]">
            <div className="flex flex-row-reverse">
              <Link className="link-item" href={'/profile'}>
                <div className=" link relative ml-6">
                  <BiUserCircle className=" text-2xl text-primary" />
                </div>
              </Link>
              <Link className="link-item" href={'/wishlist'}>
                <div className="link relative ml-6">
                  <AiOutlineHeart className=" text-2xl text-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full font-poppins font-normal text-xs text-white absolute-item translate-x-2/4 flex justify-center items-center">
                    1
                  </div>
                </div>
              </Link>
              <Link className="link-item" href={'/cart'}>
                <div className="link relative ml-6">
                  <HiOutlineShoppingBag className=" text-2xl text-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full font-poppins font-normal text-xs text-white absolute-item translate-x-2/4 flex justify-center items-center">
                    0
                  </div>
                </div>
              </Link>
              <Link className="link-item" href={'/compare'}>
                <div className="link relative ml-6">
                  <BsArrowRepeat className=" text-2xl text-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full font-poppins font-normal text-xs text-white absolute-item translate-x-2/4 flex justify-center items-center">
                    0
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
