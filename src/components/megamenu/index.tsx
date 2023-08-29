'use client';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Link from 'next/link';
import { megaLinks } from '@/static/megaLinks';

const MegaMenu = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  return (
    <div className="py-3">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div className="flex">
            {megaLinks.map((link, i) => (
              <div key={i}>
                <div className="mr-2 text-left md:cursor-pointer group">
                  <div
                    className="py-1 px-5 font-gotham font-medium text-sm flex justify-between items-center  pr-5 group border border-black text-black hover:border-primary hover:text-primary transition-all"
                    onClick={() => {
                      heading !== link.name
                        ? setHeading(link.name)
                        : setHeading('');
                      setSubHeading('');
                    }}
                  >
                    {link.name}
                    <span className=" text-xs md:hidden inline">
                      <BsChevronDown />
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2  md:block hidden">
                      <BsChevronDown className=" text-xs" />
                    </span>
                  </div>
                  {link.submenu && (
                    <div>
                      <div className="absolute z-10 hrefp-20 hidden group-hover:md:block hover:md:block">
                        <div className="py-3">
                          <div
                            className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                          ></div>
                        </div>
                        <div className="bg-white p-5 grid grid-cols-3 gap-10">
                          {link.sublinks.map((mysublinks, i) => (
                            <div key={i}>
                              <h1 className="text-lg font-semibold">
                                {mysublinks.Head}
                              </h1>
                              {mysublinks.sublink.map((slink, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-gray-600 my-2.5"
                                >
                                  <Link
                                    href={slink.link}
                                    className="hover:text-primary"
                                  >
                                    {slink.name}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Mobile menus */}
                <div
                  className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
                >
                  {/* sublinks */}
                  {link.sublinks.map((slinks, i) => (
                    <div key={i}>
                      <div>
                        <h1
                          onClick={() =>
                            subHeading !== slinks.Head
                              ? setSubHeading(slinks.Head)
                              : setSubHeading('')
                          }
                          className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                        >
                          {slinks.Head}

                          <span className="text-xl md:mt-1 md:ml-2 inline">
                            {subHeading === slinks.Head ? (
                              <BsChevronUp />
                            ) : (
                              <BsChevronDown />
                            )}
                          </span>
                        </h1>
                        <div
                          className={`${
                            subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                          }`}
                        >
                          {slinks.sublink.map((slink, i) => (
                            <li key={i} className="py-3 pl-14">
                              <Link href={slink.link}>{slink.name}</Link>
                            </li>
                          ))}
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
              className=" font-gotham font-medium text-base text-black hover:text-primary "
              href={'/videos'}
            >
              Videos
            </Link>
            <Link
              className=" font-gotham font-medium text-base text-black hover:text-primary ml-14"
              href={'/blogs'}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
