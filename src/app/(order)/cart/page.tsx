import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { MdVerified } from 'react-icons/md';

import './page.scss';

function Checkout() {
  return (
    <main>
      <section className="cart-page">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            {/* main content */}
            <div className=" col-span-8">
              <div className="direction-area">
                <div className="flex justify-between item-wrapper">
                  <div className="flex items-center item flex-col">
                    <FaShoppingCart className="icon text-xl" />
                    <h4 className=" font-gotham font-bold text-sm  ">
                      My Cart
                    </h4>
                  </div>
                  <div className="flex items-center item flex-col">
                    <FaShoppingCart className=" icon text-xl" />
                    <h4 className=" font-gotham font-bold text-sm  ">
                      Payment
                    </h4>
                  </div>
                  <div className="flex items-center item flex-col">
                    <MdVerified className="icon text-xl" />
                    <h4 className=" font-gotham font-bold text-sm  ">
                      Confirmation
                    </h4>
                  </div>
                </div>
              </div>

              <div className="cart-elements">
                <div className="grid grid-cols-8 gap-4">
                  <div className=" col-span-4 flex items-center justify-center">
                    <GoDotFill className="dot-icon" />
                    <h3 className=" font-gotham font-bold text-base text-black text-center">
                      Product
                    </h3>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <GoDotFill className="dot-icon" />
                    <h3 className=" font-gotham font-bold text-base text-black text-center">
                      Price
                    </h3>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <GoDotFill className="dot-icon" />
                    <h3 className=" font-gotham font-bold text-base text-black text-center">
                      Quantity
                    </h3>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <GoDotFill className="dot-icon" />
                    <h3 className=" font-gotham font-bold text-base text-black text-center">
                      Subtotal
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-4"></div>
              </div>
            </div>
            {/* summery */}
            <div className=" col-span-4">
              <Link href={'/checkout'}>Continue Shipping</Link>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
