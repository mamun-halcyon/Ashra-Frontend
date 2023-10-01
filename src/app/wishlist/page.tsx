import Button from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import './page.scss';
import ServiceCard from '@/components/service-card';
import { serviceCardData } from '@/static/serviceCard';

function WishlistPage() {
  return (
    <main>
      <section className="wishlist-page">
        <div className="container">
          <h2 className=" font-gotham font-medium text-lg wish-heading mb-1 pb-1">
            Wishlist
          </h2>
          <div className="cart-elements">
            <div className="grid grid-cols-8 gap-4 product-title">
              <div className=" col-span-4 flex items-center justify-center">
                {/* <GoDotFill className="dot-icon" /> */}
                <div className="w-full">
                  <h3 className="ml-[162px] font-gotham font-medium text-base text-black">
                    Product Name
                  </h3>
                </div>
              </div>
              <div className="col-span-1 flex items-center ">
                {/* <GoDotFill className="dot-icon" /> */}
                <h3 className=" font-gotham font-medium text-base text-black text-center">
                  Price
                </h3>
              </div>
              <div className="col-span-2 flex items-center">
                {/* <GoDotFill className="dot-icon" /> */}
                <h3 className=" font-gotham font-medium text-base text-black text-center">
                  Stock Status
                </h3>
              </div>
              <div className="col-span-1 flex items-center"></div>
            </div>
            {/* single cart */}
            <div className="grid grid-cols-8 gap-4 items-center product-item">
              <div className="col-span-4">
                <div className="flex items-center">
                  <div className=" cursor-pointer">
                    <span>
                      <RxCross2 className="text-xs " />
                    </span>
                  </div>
                  <div className="w-[80px] mx-9">
                    <Image
                      className=" w-full object-cover"
                      src={'/assets/images/products/image3.png'}
                      width={200}
                      height={200}
                      alt="product"
                    />
                  </div>
                  <div>
                    <h3 className=" font-gotham font-normal text-sm text-black">
                      Gazi Smiss Gas Stove | B-239
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <p className=" font-gotham font-medium text-primary text-xs">
                  ৳ 3000.00
                </p>
              </div>
              <div className="col-span-2">
                <h3 className=" font-gotham font-medium text-sm">Instock</h3>
              </div>
              <div className="col-span-1">
                <Button className="px-6 py-1 font-gotham font-medium text-sm">
                  Add to Cart
                </Button>
              </div>
            </div>
            {/* single cart */}
            <div className="grid grid-cols-8 gap-4 items-center product-item">
              <div className="col-span-4">
                <div className="flex items-center">
                  <div className=" cursor-pointer">
                    <span>
                      <RxCross2 className="text-xs " />
                    </span>
                  </div>
                  <div className="w-[80px] mx-9">
                    <Image
                      className=" w-full object-cover"
                      src={'/assets/images/products/image4.png'}
                      width={200}
                      height={200}
                      alt="product"
                    />
                  </div>
                  <div>
                    <h3 className=" font-gotham font-normal text-sm text-black">
                      Gazi Smiss Gas Stove | B-239
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <p className=" font-gotham font-medium text-primary text-xs">
                  ৳ 3000.00
                </p>
              </div>
              <div className="col-span-2">
                <h3 className=" font-gotham font-medium text-sm">
                  Out of Stock
                </h3>
              </div>
              <div className="col-span-1">
                <Button className="px-6 py-1 font-gotham font-medium text-sm">
                  Add to Cart
                </Button>
              </div>
            </div>
            {/* single cart */}
            <div className="grid grid-cols-8 gap-4 items-center product-item">
              <div className="col-span-4">
                <div className="flex items-center">
                  <div className=" cursor-pointer">
                    <span>
                      <RxCross2 className="text-xs " />
                    </span>
                  </div>
                  <div className="w-[80px] mx-9">
                    <Image
                      className=" w-full object-cover"
                      src={'/assets/images/products/image3.png'}
                      width={200}
                      height={200}
                      alt="product"
                    />
                  </div>
                  <div>
                    <h3 className=" font-gotham font-normal text-sm text-black">
                      Gazi Smiss Gas Stove | B-239
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <p className=" font-gotham font-medium text-primary text-xs">
                  ৳ 3000.00
                </p>
              </div>
              <div className="col-span-2">
                <h3 className=" font-gotham font-medium text-sm">Instock</h3>
              </div>
              <div className="col-span-1">
                <Button className="px-6 py-1 font-gotham font-medium text-sm">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cart-service">
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            {serviceCardData.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default WishlistPage;
