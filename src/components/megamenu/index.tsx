"use client";
import { ICategoryData } from "@/types/category";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { FaHome, FaBox, FaPhone, FaUser } from "react-icons/fa";
import "./index.scss";
import { useAppDispatch } from "@/redux/hooks";
import { addCategory } from "@/redux/features/category/categorySlice";
import { Suspense, useEffect, useState } from "react";
import SearchArea from "../search";
import ProfileSidebar from "../profile-sidebar";

type IProps = {
  menus: ICategoryData[];
};

const MegaMenu = ({ menus }: IProps) => {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const [stickyClass, setStickyClass] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [expandedSubCategories, setExpandedSubCategories] = useState<{ [key: string]: boolean }>({});

  function stickNavbar() {
    let windowHeight = window.scrollY;
    windowHeight >= 40 ? setStickyClass("sticky-navbar") : setStickyClass("");
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const toggleSubCategory = (slug: string) => {
    setExpandedSubCategories((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  // Close menu on click outside
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.main-button')) {
        console.log("Clicked outside the menu, closing menu"); // Debug log
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <section className={stickyClass}>
      {/* Desktop Menu */}
      <div className="py-2 shadow hidden md:block">
        <div className="container px-2 md:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {menus
                ?.filter(
                  (parent) =>
                    parent.parent_category === "0" ||
                    parent.parent_category === null ||
                    parent.parent_category === ""
                ).sort((a, b) => {
                  if (a.slug === "campaign") return 1;
                  if (b.slug === "campaign") return -1;
                  return (a.order_id || 0) - (b.order_id || 0);
                })
                .map((menu, index) => (
                  <div className="mr-2 text-left relative heading" key={index}>
                    <div
                      className="py-2 md:cursor-pointer px-1 md:px-5 font-gotham font-medium text-[10px] md:text-sm flex justify-between items-center pr-5 group black-text hover-text-color transition-all"
                      onClick={() => {
                        if (menu.slug === "campaign") {
                          route.push(`/campaign`);
                        } else {
                          route.push(`/category/filter?category=${menu.slug}`);
                          dispatch(addCategory({ title: menu.title, slug: menu.slug }));
                        }
                      }}
                    >
                      {menu.title.toUpperCase()}
                      <span className="text-xl md:block hidden">
                        {menus.filter(
                          (category) => category.parent_category === menu.slug
                        ).length > 1 && (
                            <RiArrowDropDownLine className="text-xl" />
                          )}
                      </span>
                    </div>
                    <div className="absolute z-10 sub-heading shadow rounded-xl">
                      {menus
                        .filter(
                          (category) => category.parent_category === menu.slug
                        )
                        .sort((a, b) => (a.order_id || 0) - (b.order_id || 0))
                        .map((subCategory, index) => (
                          <div key={index}>
                            <div className="relative flex justify-between items-center sub-item">
                              <Link
                                className="font-gotham font-medium my-2 text-sm black-text sub-element w-[90%]"
                                href={`/category/filter?category=${subCategory.slug}`}
                                onClick={() =>
                                  dispatch(
                                    addCategory({
                                      title: subCategory.title,
                                      slug: subCategory.slug,
                                    })
                                  )
                                }
                              >
                                {subCategory.title}
                              </Link>
                              {menus.filter(
                                (children) =>
                                  children.parent_category === subCategory.slug
                              ).length > 0 && (
                                  <span>
                                    <RiArrowDropRightLine className="text-xl" />
                                  </span>
                                )}
                              <div className="absolute children-item shadow rounded-xl">
                                <ul>
                                  {menus
                                    .filter(
                                      (children) =>
                                        children.parent_category ===
                                        subCategory.slug
                                    )
                                    .sort(
                                      (a, b) =>
                                        (a.order_id || 0) - (b.order_id || 0)
                                    )
                                    .map((childrenCategory, index) => (
                                      <li
                                        key={index}
                                        onClick={() =>
                                          dispatch(
                                            addCategory({
                                              title: childrenCategory.title,
                                              slug: childrenCategory.slug,
                                            })
                                          )
                                        }
                                      >
                                        <Link
                                          className="font-gotham font-medium text-sm w-[90%] black-text"
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
                className="font-gotham font-medium text-sm black-text hover-text-color"
                href={"/videos"}
              >
                Videos
              </Link>
              <Link
                className="font-gotham font-medium text-sm black-text hover-text-color ml-4 md:ml-14"
                href={"/blogs"}
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <div className="flex items-center justify-between md:hidden">
        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)} // Close the menu when clicking on the overlay
          ></div>
        )}

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${mobileMenuOpen ? 'open' : ''} shadow md:hidden mobile-menu bg-white`}
        >
          <div className="container px-2 pt-5">
            <div className="flex justify-between items-center mb-4">
              <div className="relative main-button">
                <MdClose className="w-5 h-5 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
              </div>
            </div>
            <Suspense>
              <SearchArea />
            </Suspense>
            <div className="mt-4">
              {menus
                ?.filter(
                  (parent) =>
                    parent.parent_category === '0' ||
                    parent.parent_category === null ||
                    parent.parent_category === ''
                )
                .sort((a, b) => {
                  if (a.slug === 'campaign') return 1;
                  if (b.slug === 'campaign') return -1;
                  return (a.order_id || 0) - (b.order_id || 0);
                })
                .map((menu, index) => (
                  <div key={index} className="menus">
                    <div
                      className="py-2 cursor-pointer px-1 font-gotham font-medium text-sm flex justify-between items-center group black-text hover-text-color transition-all parent-category"
                    >
                      <p
                        onClick={() => {
                          if (menu.slug === 'campaign') {
                            route.push(`/campaign`);
                          } else {
                            route.push(`/category/filter?category=${menu.slug}`);
                            dispatch(addCategory({ title: menu.title, slug: menu.slug }));
                          }
                        }}
                      >
                        {menu.title}
                      </p>
                      <span className="text-xl">
                        {menus.filter((category) => category.parent_category === menu.slug).length > 0 && (
                          <RiArrowDropDownLine onClick={() => toggleCategory(menu.slug)} className="text-xl" />
                        )}
                      </span>
                    </div>
                    {expandedCategories[menu.slug] && (
                      <div className="sub-categories open">
                        {menus
                          .filter((category) => category.parent_category === menu.slug)
                          .sort((a, b) => (a.order_id || 0) - (b.order_id || 0))
                          .map((subCategory, index) => (
                            <div key={index} className="sub-category">
                              <div
                                className="relative sub-item cursor-pointer px-1 font-gotham font-medium text-sm flex justify-between items-center group black-text hover-text-color transition-all"
                              >
                                <Link
                                  className="font-gotham font-sm my-2 text-sm black-text hover-text-color sub-element"
                                  href={`/category/filter?category=${subCategory.slug}`}
                                  onClick={() =>
                                    dispatch(addCategory({ title: subCategory.title, slug: subCategory.slug }))
                                  }
                                >
                                  {subCategory.title}
                                </Link>
                                {menus.filter((children) => children.parent_category === subCategory.slug).length >
                                  0 && (
                                    <span>
                                      <RiArrowDropRightLine
                                        onClick={() => toggleSubCategory(subCategory.slug)}
                                        className="text-xl"
                                      />
                                    </span>
                                  )}
                              </div>
                              {expandedSubCategories[subCategory.slug] && (
                                <div className="children-category open">
                                  {menus
                                    .filter((children) => children.parent_category === subCategory.slug)
                                    .sort((a, b) => (a.order_id || 0) - (b.order_id || 0))
                                    .map((childrenCategory, index) => (
                                      <div
                                        key={index}
                                        className="sub-item cursor-pointer px-1 font-gotham font-medium text-sm flex justify-between items-center group black-text hover-text-color transition-all"
                                        onClick={() =>
                                          dispatch(addCategory({
                                            title: childrenCategory.title,
                                            slug: childrenCategory.slug,
                                          }))
                                        }
                                      >
                                        <Link
                                          className="font-gotham font-sm my-2 text-sm black-text hover-text-color sub-element"
                                          href={`/category/filter?category=${childrenCategory.slug}`}
                                        >
                                          {childrenCategory.title}
                                        </Link>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col pl-3">
            <Link
              className="font-gotham font-medium text-sm black-text hover-text-color py-2"
              href={'/videos'}
            >
              Videos
            </Link>
            <Link
              className="font-gotham font-medium text-sm black-text hover-text-color py-2"
              href={'/blogs'}
            >
              Blogs
            </Link>
          </div>

        </div>
        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 w-full bg-white shadow-md py-2 z-[1002] md:hidden flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center text-gray-700">
            <FaHome className="text-lg text-[#97627d]" />
            <span className="text-xs font-gotham font-semibold text-[#97627d]">Home</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center text-gray-700"
          >
            <FaBars className="text-lg text-[#97627d]" />
            <span className="text-xs font-gotham font-semibold text-[#97627d]">Category</span>
          </button>
          <Link href="/orders" className="flex flex-col items-center text-gray-700">
            <FaBox className="text-lg text-[#97627d]" />
            <span className="text-xs font-gotham font-semibold text-[#97627d]">Orders</span>
          </Link>
          <a href="tel:+1234567890" className="flex flex-col items-center text-gray-700">
            <FaPhone className="text-lg text-[#97627d]" />
            <span className="text-xs font-gotham font-semibold text-[#97627d]">Call</span>
          </a>
          <div className="flex flex-col items-center text-gray-700">
            <FaUser className="text-lg text-[#97627d]" aria-label="profile"
                  onClick={toggleSidebar}/>
            <span className="text-xs font-gotham font-semibold text-[#97627d]">Profile</span>
          </div>
        </div>
      </div>
      <ProfileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </section>
  );
};

export default MegaMenu;
