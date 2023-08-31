import Box from '@/components/box';
import FormGrout from '@/components/fromgroup';
import Link from 'next/link';
import React from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';

function Checkout() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-5">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/cart'}> Shopping Cart </Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/checkout'}> Checkout </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <form>
            <div className="grid grid-cols-3 gap-4">
              <div className=" col-span-1">
                <Box step="1" title="Customer Information">
                  <FormGrout
                    className="mb-1"
                    title="Full Name*"
                    placeholder="Type your full name*"
                    required
                  />
                  <FormGrout
                    className="mb-1"
                    title="Email*"
                    placeholder="Type your e-mail*"
                    required
                  />
                  <FormGrout
                    className="mb-1"
                    title="Mobile*"
                    placeholder="Type your mobile*"
                    required
                  />
                  <FormGrout
                    className="mb-1"
                    title="Address*"
                    placeholder="Type your address*"
                    required
                  />
                </Box>
              </div>
              <div className=" col-span-2">fdfas</div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
