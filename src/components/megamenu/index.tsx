'use client';
import Link from 'next/link';
import './index.scss';
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';
import { ICategoryData } from '@/types/category';
import { useRouter } from 'next/navigation';
import { FaBars } from 'react-icons/fa6';

type IProps = {
  menus: ICategoryData[];
};
const MegaMenu = ({ menus }: IProps) => {
  const route = useRouter();
  return (
    <>
      <div className="py-2 shadow hidden md:block">
        <div className="container px-2 md:px-0">
          <div className="flex justify-between items-center ">
            <div className="flex">
              {menus
                ?.filter(
                  (parent) =>
                    parent.parent_category === '0' ||
                    parent.parent_category === null ||
                    parent.parent_category === ''
                )
                .map((menu, index) => (
                  <div className="mr-2 text-left relative heading" key={index}>
                    <div
                      className="py-2  md:cursor-pointer px-1 md:px-5 font-gotham font-medium text-[10px] md:text-sm  flex justify-between items-center  pr-5 group md:border mdd:border-black text-black hover:border-primary hover:text-white hover:bg-primary transition-all"
                      onClick={() =>
                        route.push(`/category/filter?category=${menu.slug}`)
                      }
                    >
                      {menu.title.toUpperCase()}
                      <span className="text-xl  md:block hidden">
                        <RiArrowDropDownLine className=" text-xl" />
                      </span>
                    </div>
                    <div className=" absolute z-10 sub-heading shadow">
                      {/* Heading item */}
                      {menus
                        .filter(
                          (category) => category.parent_category === menu.slug
                        )
                        .map((subCategory, index) => (
                          <div key={index}>
                            <div className=" relative flex justify-between items-center sub-item">
                              <Link
                                className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                                href={`/category/filter?category=${subCategory.slug}`}
                              >
                                {subCategory.title}
                              </Link>
                              <span>
                                <RiArrowDropRightLine className=" text-xl" />
                              </span>
                              <div className=" absolute children-item shadow">
                                <ul>
                                  {menus
                                    .filter(
                                      (children) =>
                                        children.parent_category ===
                                        subCategory.slug
                                    )
                                    .map((childrenCategory, index) => (
                                      <li key={index}>
                                        <Link
                                          className=" font-gotham font-medium text-sm  text-black"
                                          href={`/category/filter?category=${childrenCategory.slug}`}
                                        >
                                          {childrenCategory.title}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <Link
                className=" font-gotham font-medium text-sm text-black hover:text-primary "
                href={'/videos'}
              >
                Videos
              </Link>
              <Link
                className=" font-gotham font-medium text-sm text-black hover:text-primary ml-4 md:ml-14"
                href={'/blogs'}
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="shadow py-2 md:hidden mobile-menu">
        <div className="container px-2">
          <div className="flex justify-between">
            <div className="relative main-button">
              <FaBars />
              <div className="absolute bg-white mt-4 z-10 w-[180px] shadow">
                {menus
                  ?.filter(
                    (parent) =>
                      parent.parent_category === '0' ||
                      parent.parent_category === null ||
                      parent.parent_category === ''
                  )
                  .map((menu, index) => (
                    <div key={index} className="menus">
                      <div
                        className="py-2  cursor-pointer px-1  font-gotham font-medium  text-sm  flex justify-between items-center   group md:border mdd:border-black text-black hover:border-primary hover:text-white hover:bg-primary transition-all parent-category"
                        onClick={() =>
                          route.push(`/category/filter?category=${menu.slug}`)
                        }
                      >
                        <Link href={menu.slug}>{menu.title}</Link>
                        <span className="text-xl ">
                          <RiArrowDropDownLine className=" text-xl" />
                        </span>
                      </div>
                      <div className="sub-categories">
                        {menus
                          .filter(
                            (category) => category.parent_category === menu.slug
                          )
                          .map((subCategory, index) => (
                            <div key={index} className="sub-category">
                              <div className=" relative  sub-item cursor-pointer px-1  font-gotham font-medium  text-sm  flex justify-between items-center   group md:border mdd:border-black text-black hover:border-primary self hover:bg-primary transition-all">
                                <Link
                                  className=" font-gotham font-sm my-2 text-sm text-black sub-element"
                                  href={`/category/filter?category=${subCategory.slug}`}
                                >
                                  {subCategory.title}
                                </Link>
                                <span>
                                  <RiArrowDropRightLine className=" text-xl" />
                                </span>
                              </div>
                              <div className="children-category">
                                {menus
                                  .filter(
                                    (children) =>
                                      children.parent_category ===
                                      subCategory.slug
                                  )
                                  .map((childrenCategory, index) => (
                                    <div
                                      key={index}
                                      className="   sub-item cursor-pointer px-1  font-gotham font-medium  text-sm  flex justify-between items-center   group md:border mdd:border-black text-black hover:border-primary hover:text-white hover:bg-primary transition-all self"
                                    >
                                      <Link
                                        className=" font-gotham font-sm my-2 text-sm text-black sub-element"
                                        href={`/category/filter?category=${childrenCategory.slug}`}
                                      >
                                        {childrenCategory.title}
                                      </Link>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <Link
                className=" font-gotham font-medium text-sm text-black hover:text-primary "
                href={'/videos'}
              >
                Videos
              </Link>
              <Link
                className=" font-gotham font-medium text-sm text-black hover:text-primary ml-4 md:ml-14"
                href={'/blogs'}
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
