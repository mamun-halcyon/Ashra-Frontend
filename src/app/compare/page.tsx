import React from 'react';
import './page.scss';
import Button from '@/components/button';
import Image from 'next/image';
import { RxCrossCircled } from 'react-icons/rx';
import StarRating from '@/components/rating';

function Compare() {
  return (
    <section className="compare">
      <div className="container">
        {/*   <div className="header py-6">
          <div className="flex">
            <div className="w-[15%]"></div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
          </div>
        </div> */}

        <div className="mb-4 flex justify-between">
          <h3 className=" font-gotham font-medium text-base">Wishlist</h3>
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
          <div className="p-4 product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <p className=" font-gotham font-light text-xs danger-text">
              <span className="mt-1">
                <RxCrossCircled className="inline mr-1" />
              </span>
              Remove
            </p>
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
              <Button className="px-2 font-gotham font-light text-sm">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="p-4 product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <p className=" font-gotham font-light text-xs danger-text">
              <span className="mt-1">
                <RxCrossCircled className="inline mr-1" />
              </span>
              Remove
            </p>
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
              <Button className="px-2 font-gotham font-light text-sm">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="p-4 product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <p className=" font-gotham font-light text-xs danger-text">
              <span className="mt-1">
                <RxCrossCircled className="inline mr-1" />
              </span>
              Remove
            </p>
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
              <Button className="px-2 font-gotham font-light text-sm">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="p-4 product-card">
            <p className=" font-gotham font-light text-xs text-black">
              Kitchen Hood
            </p>
            <p className=" font-gotham font-light text-xs danger-text">
              <span className="mt-1">
                <RxCrossCircled className="inline mr-1" />
              </span>
              Remove
            </p>
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
              <Button className="px-2 font-gotham font-light text-sm">
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
            <h3 className=" font-gotham font-medium text-black text-xs">
              Gazi
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-medium text-black text-xs">
              Gazi
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-medium text-black text-xs">
              Gazi
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-medium text-black text-xs">
              Gazi
            </h3>
          </div>
          <div className="p-4 product-card">
            <h3 className=" font-gotham font-medium text-black text-xs">
              Rating
            </h3>
          </div>
          <div className="p-4 product-card">
            <StarRating rating={4} />
          </div>
          <div className="p-4 product-card">
            <StarRating rating={4} />
          </div>
          <div className="p-4 product-card">
            <StarRating rating={4} />
          </div>
          <div className="p-4 product-card">
            <StarRating rating={4} />
          </div>
          <div className="p-4">Brand</div>
          <h1>1023</h1>
          <h1>1023</h1>
          <h1>1023</h1>
        </div>
      </div>
    </section>
  );
}

export default Compare;
