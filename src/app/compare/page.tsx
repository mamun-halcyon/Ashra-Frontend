'use client';
import React, { useState } from 'react';
import './page.scss';
import Button from '@/components/button';
import Image from 'next/image';
import { RxCrossCircled } from 'react-icons/rx';
import { LuSearch } from 'react-icons/lu';
import StarRating from '@/components/rating';
import ToggleButton from '@/components/status-button';

function Compare() {
  const [isTrue, setIsTrue] = useState(false);

  const handleToggle = () => setIsTrue(!isTrue);
  return (
    <section className="compare">
      <div className="container">
        <div className="mb-4 flex justify-between">
          <div className="flex">
            <h3 className=" font-gotham font-medium text-base mr-4">Compare</h3>
            <div className="flex items-center">
              <ToggleButton isChecked={isTrue} onClick={handleToggle} />
              <p
                className={`font-gotham font-normal text-sm ml-4 ${
                  isTrue ? 'text-primary' : ''
                }`}
              >
                Highlight differences
              </p>
            </div>
          </div>
          <Button className=" font-gotham font-medium text-sm px-4 py-1">
            Clear All
          </Button>
        </div>

        <table className="w-full text-sm text-left compare-table">
          <thead>
            <tr className="heading">
              <th scope="col" className="px-2 py-3"></th>
              <th scope="col" className="px-2 py-3">
                <div className="header">
                  <h4 className=" font-gotham font-medium text-xs text-black">
                    GH-8203M - Gazi Smiss Gas..
                  </h4>
                  <LuSearch />
                </div>
              </th>
              <th scope="col" className="px-2 py-3">
                <div className="header">
                  <h4 className=" font-gotham font-medium text-xs text-black">
                    GH-8203M - Gazi Smiss Gas..
                  </h4>
                  <LuSearch />
                </div>
              </th>
              <th scope="col" className="px-2 py-3">
                <div className="header">
                  <h4 className=" font-gotham font-medium text-xs text-black">
                    GH-8203M - Gazi Smiss Gas..
                  </h4>
                  <LuSearch />
                </div>
              </th>
              <th scope="col" className="px-2 py-3">
                <div className="header">
                  <h4 className=" font-gotham font-medium text-xs text-black">
                    GH-8203M - Gazi Smiss Gas..
                  </h4>
                  <LuSearch />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col" className="px-2 py-3">
                <div className="pt-3 px-2">
                  <h3 className=" font-gotham font-medium text-xs text-black">
                    Products Comparison
                  </h3>
                  <p className="font-gotham font-normal text-xs text-black mt-2">
                    Find and select products tosee the differences and
                    similarities between them
                  </p>
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="product-card">
                  <p className=" font-gotham font-light text-xs text-black">
                    Kitchen Hood
                  </p>
                  <div className="flex items-center">
                    <RxCrossCircled className="inline danger-text text-xs mr-1" />
                    <p className=" font-gotham font-light text-xs danger-text">
                      Remove
                    </p>
                  </div>
                  <h3 className=" font-gotham font-medium text-xs my-3">
                    GH-8203M - Gazi Smiss Gas Stove
                  </h3>
                  <Image
                    className=" w-3/4 mx-auto my-3"
                    src={'/assets/images/products/image1.png'}
                    width={150}
                    height={150}
                    alt="product"
                  />
                  <p className=" font-gotham font-normal text-xs line-through">
                    ৳ 7000
                  </p>
                  <div className="flex justify-between mt-2">
                    <h3 className=" font-gotham font-bold text-sm">৳ 6000</h3>
                    <Button className="px-2 font-gotham font-light text-xs">
                      Save ৳ 1000
                    </Button>
                  </div>
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="product-card">
                  <p className=" font-gotham font-light text-xs text-black">
                    Kitchen Hood
                  </p>
                  <div className="flex items-center">
                    <RxCrossCircled className="inline danger-text text-xs mr-1" />
                    <p className=" font-gotham font-light text-xs danger-text">
                      Remove
                    </p>
                  </div>
                  <h3 className=" font-gotham font-medium text-xs my-3">
                    GH-8203M - Gazi Smiss Gas Stove
                  </h3>
                  <Image
                    className=" w-3/4 mx-auto my-3"
                    src={'/assets/images/products/image1.png'}
                    width={150}
                    height={150}
                    alt="product"
                  />
                  <p className=" font-gotham font-normal text-xs line-through">
                    ৳ 7000
                  </p>
                  <div className="flex justify-between mt-2">
                    <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
                    <Button className="px-2 font-gotham font-light text-xs">
                      Save ৳ 1000
                    </Button>
                  </div>
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="product-card">
                  <p className=" font-gotham font-light text-xs text-black">
                    Kitchen Hood
                  </p>
                  <div className="flex items-center">
                    <RxCrossCircled className="inline danger-text text-xs mr-1" />
                    <p className=" font-gotham font-light text-xs danger-text">
                      Remove
                    </p>
                  </div>
                  <h3 className=" font-gotham font-medium text-xs my-3">
                    GH-8203M - Gazi Smiss Gas Stove
                  </h3>
                  <Image
                    className=" w-3/4 mx-auto my-3"
                    src={'/assets/images/products/image1.png'}
                    width={150}
                    height={150}
                    alt="product"
                  />
                  <p className=" font-gotham font-normal text-xs line-through">
                    ৳ 7000
                  </p>
                  <div className="flex justify-between mt-2">
                    <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
                    <Button className="px-2 font-gotham font-light text-xs">
                      Save ৳ 1000
                    </Button>
                  </div>
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="product-card">
                  <p className=" font-gotham font-light text-xs text-black">
                    Kitchen Hood
                  </p>
                  <div className="flex items-center">
                    <RxCrossCircled className="inline danger-text text-xs mr-1" />
                    <p className=" font-gotham font-light text-xs danger-text">
                      Remove
                    </p>
                  </div>
                  <h3 className=" font-gotham font-medium text-xs my-3">
                    GH-8203M - Gazi Smiss Gas Stove
                  </h3>
                  <Image
                    className=" w-3/4 mx-auto my-3"
                    src={'/assets/images/products/image1.png'}
                    width={150}
                    height={150}
                    alt="product"
                  />
                  <p className=" font-gotham font-normal text-xs line-through">
                    ৳ 7000
                  </p>
                  <div className="flex justify-between mt-2">
                    <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
                    <Button className="px-2 font-gotham font-light text-xs">
                      Save ৳ 1000
                    </Button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="col" className="px-2 py-3">
                <h3 className=" font-gotham font-medium text-black text-xs">
                  Rating
                </h3>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="icons">
                  <StarRating rating={4} />
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="icons">
                  <StarRating rating={4} />
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="icons">
                  <StarRating rating={4} />
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="icons">
                  <StarRating rating={4} />
                </div>
              </td>
            </tr>
            <tr>
              <td scope="col" className="px-2 py-3">
                <h3 className=" font-gotham font-medium text-black text-xs">
                  Description
                </h3>
              </td>
              <td scope="col" className="px-2 py-3">
                <h3 className=" font-gotham  font-light text-black text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s,
                </h3>
              </td>
              <td scope="col" className="px-2 py-3">
                <h3 className=" font-gotham  font-light text-black text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s,
                </h3>
              </td>
              <td scope="col" className="px-2 py-3">
                <h3 className=" font-gotham  font-light text-black text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s,
                </h3>
              </td>
              <td scope="col" className="px-2 py-3">
                <h3 className=" font-gotham  font-light text-black text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s,
                </h3>
              </td>
            </tr>
            <tr>
              <td scope="col" className="px-2 py-3"></td>
              <td scope="col" className="px-2 py-3">
                <div className="text-center px-4">
                  <Button className="w-full py-1 font-gotham font-normal text-normal">
                    Buy Now
                  </Button>
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="text-center px-4">
                  <Button className="w-full py-1 font-gotham font-normal text-normal">
                    Buy Now
                  </Button>
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="text-center px-4">
                  <Button className="w-full py-1 font-gotham font-normal text-normal">
                    Buy Now
                  </Button>
                </div>
              </td>
              <td scope="col" className="px-2 py-3">
                <div className="text-center px-4">
                  <Button className="w-full py-1 font-gotham font-normal text-normal">
                    Buy Now
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/*  <div className="mb-4 flex justify-between">
          <h3 className=" font-gotham font-medium text-base">Compare</h3>
          <Button className=" font-gotham font-medium text-sm px-4 py-1">
            Clear All
          </Button>
        </div>
        <div className="grid jobair">
          <div className="header"></div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="flex p-3 pb-0 product-card">
            <div className="pt-3 px-2">
              <h3 className=" font-gotham font-medium text-xs text-black">
                Products Comparison
              </h3>
              <p className="font-gotham font-normal text-xs text-black mt-2">
                Find and select products tosee the differences and similarities
                between them
              </p>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-medium text-black text-xs">
              Brand
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light text-black text-xs">Gazi</h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light text-black text-xs">Gazi</h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light text-black text-xs">Gazi</h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light text-black text-xs">Gazi</h3>
          </div>
          <div className="product-card">
            <h3 className=" font-gotham font-medium text-black text-xs">
              Rating
            </h3>
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-medium text-black text-xs">
              Description
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light text-black text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light text-black text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light text-black text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light text-black text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="product-card">
            <h3 className=" font-gotham font-medium text-black text-xs"></h3>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Compare;
