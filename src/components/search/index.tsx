import React, { useState } from 'react';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SearchArea = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(Object.fromEntries(searchParams));

      if (e.target.value) {
        e.target.value.length > 2 && params.set('q', e.target.value);
      } else {
        params.delete('search');
      }
      replace(`${pathname}?${params}`);
    },
    300
  );
  const handleFocus = () => {
    setIsInputFocused(true); // Set focus state to true
  };

  const handleBlur = () => {
    setIsInputFocused(false); // Set focus state to false
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
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button className="button bg-primary h-9  px-6 font-gotham font-normal text-sm text-white">
            Search
          </button>
        </form>
        {isInputFocused && ( // Conditional rendering based on focus state
          <div className="absolute bg-white top-[40px] left-0 max-h-[300px] w-full p-3">
            products
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchArea;
