import Image from 'next/image';
import './index.scss';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRepeat } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar shadow">
      <div className="container">
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
          <div className=" flex-grow">
            <form className="flex items-center justify-center ">
              <div
                className="select-categories text-center
              flex justify-center items-center  h-9 w-[145px]"
              >
                <h3 className=" font-gotham font-normal text-sm">
                  All Categories
                </h3>
              </div>
              <input
                type="text"
                className="px-3 h-9 focus:outline-none w-[365px] font-gotham font-normal text-sm"
                placeholder="Search for Products..."
              />
              <button className="button bg-primary h-9  px-6 font-gotham font-medium text-sm text-white">
                Search
              </button>
            </form>
          </div>
          <div className="w-[33%]">
            <div className="flex flex-row-reverse">
              <div className=" relative ml-6">
                <BiUserCircle className=" text-2xl text-primary" />
              </div>
              <div className=" relative ml-6">
                <AiOutlineHeart className=" text-2xl text-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full font-poppins font-normal text-xs text-white absolute-item translate-x-2/4 flex justify-center items-center">
                  0
                </div>
              </div>
              <div className=" relative ml-6">
                <HiOutlineShoppingBag className=" text-2xl text-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full font-poppins font-normal text-xs text-white absolute-item translate-x-2/4 flex justify-center items-center">
                  0
                </div>
              </div>
              <div className=" relative ml-6">
                <BsArrowRepeat className=" text-2xl text-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full font-poppins font-normal text-xs text-white absolute-item translate-x-2/4 flex justify-center items-center">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
