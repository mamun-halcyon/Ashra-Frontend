'use client';
import { useState } from 'react';
import FilterBox from '@/components/filterbox';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
import ReactSlider from 'react-slider';
import './page.scss';
import Image from 'next/image';

function Category() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const handlePriceChange = (newValue: [number, number]) => {
    setPriceRange(newValue);
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice) && newPrice < priceRange[1]) {
      setPriceRange([newPrice, priceRange[1]]);
    }
  };
  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      setPriceRange([priceRange[0], newPrice]);
    }
  };

  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-5">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/bathware'}> Home Appliance </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div>
              <FilterBox title="Category">
                <ul>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Gas Stove
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/kitchen-hod'}
                    >
                      Kitchen Hood
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/cookware'}
                    >
                      Cookware
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/digital-scale'}
                    >
                      Digital Scale
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Appliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Cooker
                    </Link>
                  </li>
                </ul>
              </FilterBox>
              <FilterBox title="Availability">
                <div className="flex mb-2">
                  <input type="checkbox" name="stock" id="stock" />
                  <label
                    className="ml-2 font-gotham font-normal text-xs"
                    htmlFor="stock"
                  >
                    In Stock
                  </label>
                </div>
                <div className="flex mb-2">
                  <input type="checkbox" name="stock-out" id="stockout" />
                  <label
                    className="ml-2 font-gotham font-normal text-xs"
                    htmlFor="stockout"
                  >
                    Out of Stock
                  </label>
                </div>
                <div className="flex">
                  <input type="checkbox" name="instock" id="upcoming" />
                  <label
                    className="ml-2 font-gotham font-normal text-xs"
                    htmlFor="upcoming"
                  >
                    Up Coming
                  </label>
                </div>
              </FilterBox>
              <FilterBox title="Price">
                <div className="double-slider-container">
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    value={priceRange}
                    min={0}
                    max={8000}
                    step={1} // Adjust step size as needed
                    minDistance={500}
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="flex w-full justify-between mt-2">
                  <input
                    className="price-input font-gotham f"
                    type="number"
                    value={priceRange[0]}
                    onChange={handleMinPrice}
                  />
                  <input
                    className="price-input font-gotham font-medium text-xs"
                    type="number"
                    value={priceRange[1]}
                    onChange={handleMaxPrice}
                  />
                </div>
              </FilterBox>
            </div>
            <div className="col-span-5">
              <div className="category-banner">
                <Image
                  className="w-full"
                  src={'/assets/images/banner/categorybanner.png'}
                  width={400}
                  height={300}
                  alt="gazi category-banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Category;
