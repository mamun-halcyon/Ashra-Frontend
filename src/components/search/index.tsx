"use client";
import React, { useState } from "react";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchArea = () => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(Object.fromEntries(searchParams));
      params.set("search", e.target.value);
      replace(`${pathname}?${params}`);
    },
    300
  );

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const params = new URLSearchParams(Object.fromEntries(searchParams));
    replace(`/category/filter?${params}`);
  };

  return (
    <div className=" flex-grow hidden md:block">
      <div className="relative">
        <form className="flex items-center justify-center ">
          {/*  <div
                className="select-categories text-center
              flex justify-center items-center  h-9 w-[145px]"
              >
                <Link href={'/products'}>
                  <h3 className=" font-gotham font-normal text-sm">
                    All Categories
                  </h3>
                </Link>
              </div> */}
          <input
            type="text"
            className="px-3 h-9 focus:outline-none w-[450px] font-gotham font-normal text-sm placeholder:font-gotham placeholder:text-sm search-input"
            placeholder="Search for Products..."
            onChange={handleSearch}
          />
          <button
            className="button bg-primary h-9  px-6 font-gotham font-normal text-sm text-white"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchArea;
