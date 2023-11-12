import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { MdVerified } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import './page.scss';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '@/components/button';
import { serviceCardData } from '@/static/serviceCard';
import ServiceCard from '@/components/service-card';

function Checkout() {
  return (
    <main>
      <section className="cart-page">
        <div className="container px-2 md:px-0">
          <div className="grid grid-cols-12 gap-6">
            {/* main content */}
            <div className=" col-span-12 md:col-span-8">
              <div className="direction-area">
                <div className="flex justify-between item-wrapper">
                  <div className="flex items-center item flex-col">
                    <FaShoppingCart className="icon text-xl" />
                    <h4 className=" font-gotham font-medium text-sm  ">
                      My Cart
                    </h4>
                  </div>
                  <div className="flex items-center item flex-col">
                    <FaShoppingCart className=" icon text-xl" />
                    <h4 className=" font-gotham font-medium text-sm  ">
                      Payment
                    </h4>
                  </div>
                  <div className="flex items-center item flex-col">
                    <MdVerified className="icon text-xl" />
                    <h4 className=" font-gotham font-medium text-sm  ">
                      Confirmation
                    </h4>
                  </div>
                </div>
              </div>

              <div className="cart-elements">
                <div className="grid grid-cols-8 gap-1 md:gap-4 product-title">
                  <div className=" col-span-4 flex items-center justify-center">
                    {/* <GoDotFill className="dot-icon" /> */}
                    <h3 className=" font-gotham font-medium text-base text-black text-center">
                      Product
                    </h3>
                  </div>
                  <div className="col-span-2 md:col-span-1 flex items-center ">
                    {/* <GoDotFill className="dot-icon" /> */}
                    <h3 className=" font-gotham font-medium text-base text-black text-center">
                      Price
                    </h3>
                  </div>
                  <div className="col-span-2  items-center hidden md:flex">
                    {/* <GoDotFill className="dot-icon" /> */}
                    <h3 className=" font-gotham font-medium text-base text-black text-center">
                      Quantity
                    </h3>
                  </div>
                  <div className="col-span-1 flex items-center">
                    {/* <GoDotFill className="dot-icon" /> */}
                    <h3 className=" font-gotham font-medium text-base text-black text-center">
                      Subtotal
                    </h3>
                  </div>
                </div>
                {[...Array(2)].map((product, index) => {
                  {
                    /* single cart */
                  }
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-8 gap-1 md:gap-4 items-center product-item"
                    >
                      <div className="col-span-4">
                        <div className="flex items-center">
                          <div className=" cursor-pointer">
                            <span>
                              <RxCross2 className="text-sm " />
                            </span>
                          </div>
                          <div className="w-[80px] mx-2 md:mx-9">
                            <Image
                              className=" w-full object-cover"
                              src={'/assets/images/products/image3.png'}
                              width={200}
                              height={200}
                              alt="product"
                            />
                          </div>
                          <div>
                            <h3 className=" font-gotham font-medium text-[11px] md:text-sm text-black">
                              Gazi Smiss Gas Stove | B-239
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <p className=" font-gotham font-medium text-primary text-sm">
                          ৳ 3000.00
                        </p>
                      </div>
                      <div className="col-span-2 hidden md:block">
                        <div className="flex items-center">
                          <div className="qnt-1">
                            <AiOutlinePlus className="text-sm" />
                          </div>
                          <div className="qnt-1 px-4 font-gotham font-light text-sm">
                            3
                          </div>
                          <div className="qnt-1">
                            <AiOutlineMinus className="text-sm" />
                          </div>
                        </div>
                      </div>
                      <div className=" col-span-2 md:col-span-1">
                        <p className=" font-gotham font-medium text-primary text-sm">
                          ৳ 3000.00
                        </p>
                      </div>
                      <div className=" flex justify-center col-span-8 md:hidden">
                        <div className="flex items-center">
                          <div className="qnt-1">
                            <AiOutlinePlus className="text-sm" />
                          </div>
                          <div className="qnt-1 px-4 font-gotham font-light text-sm">
                            3
                          </div>
                          <div className="qnt-1">
                            <AiOutlineMinus className="text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* summery */}
            <div className=" col-span-12 md:col-span-4">
              <div className="py-11 px-9 cart-summery">
                <h3 className="summery-border font-gotham font-medium text-base text-black pb-2">
                  Cart Summery
                </h3>

                <div className="flex justify-between items-center mt-14 summery-border pb-3">
                  <p className=" font-gotham font-medium text-sm text-black">
                    Sub Total
                  </p>
                  <p className=" font-gotham font-medium text-sm text-primary">
                    ৳ 19000.00
                  </p>
                </div>

                <div className="flex justify-between items-center mt-3 summery-border pb-3">
                  <p className=" font-gotham font-medium text-sm text-black">
                    Shipping
                  </p>
                  <p className=" font-gotham font-medium text-sm text-black">
                    Free Shipping
                  </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className=" font-gotham font-medium text-base text-black">
                    Total
                  </p>
                  <p className=" font-gotham font-medium text-base text-primary">
                    ৳ 16070.00
                  </p>
                </div>
                <Link className=" mt-14 block" href={'/checkout'}>
                  <Button className="w-full font-gotham font-medium text-lg py-1">
                    Continue to Shipping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cart-service">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCardData.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
