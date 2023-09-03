import Box from '@/components/box';
import FormGroup from '@/components/fromgroup';
import Image from 'next/image';
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
                <Box
                  className=" text-primary"
                  step="1"
                  title="Customer Information"
                >
                  <FormGroup
                    className="mb-1"
                    title="Full Name*"
                    placeholder="Type your full name*"
                    required
                  />
                  <FormGroup
                    className="mb-1"
                    type="email"
                    title="Email*"
                    placeholder="Type your e-mail*"
                    required
                  />
                  <FormGroup
                    className="mb-1"
                    title="Mobile*"
                    placeholder="Type your mobile*"
                    required
                  />
                  <FormGroup
                    className="mb-1"
                    title="Address*"
                    placeholder="Type your address*"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormGroup
                      className="mb-1"
                      title="City*"
                      placeholder="Type your city*"
                    />
                    <FormGroup
                      className="mb-1"
                      title="Thana"
                      placeholder="Select your area"
                    />
                  </div>
                </Box>
              </div>
              <div className=" col-span-2">
                <div className="grid gap-4 grid-cols-2">
                  <Box
                    className=" text-primary"
                    step="2"
                    title="Payment Method"
                  >
                    <p className=" font-gotham font-normal text-xs text-black">
                      Select a payment method
                    </p>
                    <p className=" font-gotham font-normal text-xs text-black">
                      We Accept
                    </p>
                    <Image
                      src={'/assets/images/service/card-logo.png'}
                      className="w-9/12"
                      width={200}
                      height={100}
                      alt="logo"
                    />
                  </Box>
                  <Box
                    className=" text-primary"
                    step="2"
                    title="Payment Method"
                  >
                    <p>Select a delivery method</p>
                  </Box>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
