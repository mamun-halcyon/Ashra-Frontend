'use client';

import Box from '@/components/box';
import FormGroup from '@/components/fromgroup';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';

function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [selectedPaymentDeliveryStatus, setSelectedPaymentDeliveryStatus] =
    useState<string | null>(null);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPaymentValue = event.target.name;

    if (selectedPayment === selectedPaymentValue) {
      setSelectedPayment(null);
    } else {
      setSelectedPayment(selectedPaymentValue);
    }
  };
  const handlePaymentStatusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedPaymentDeliveryStatusValue = event.target.name;

    if (selectedPayment === selectedPaymentDeliveryStatusValue) {
      setSelectedPaymentDeliveryStatus(null);
    } else {
      setSelectedPaymentDeliveryStatus(selectedPaymentDeliveryStatusValue);
    }
  };

  const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedPayment) {
      toast.error('Please Select payment method');
      return;
    }
    if (!selectedPaymentDeliveryStatus) {
      toast.error('Please Select delivery method');
    }
    console.log(selectedPayment);
    console.log(setSelectedPaymentDeliveryStatus);
  };

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
          <form onSubmit={handleOrder}>
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
                    <div className="py-2">
                      <div className="flex  items-center">
                        <input
                          type="checkbox"
                          name="cashOnDelivery"
                          id="cashOnDelivery"
                          checked={selectedPayment === 'cashOnDelivery'}
                          onChange={handlePaymentChange}
                        />
                        <label
                          className="font-gotham font-normal text-xs text-black ml-1"
                          htmlFor="cash"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="onlinePayment"
                          id="onlinePayment"
                          checked={selectedPayment === 'onlinePayment'}
                          onChange={handlePaymentChange}
                        />
                        <label
                          className="font-gotham font-normal text-xs text-black ml-1"
                          htmlFor="online"
                        >
                          Online Payment
                        </label>
                      </div>
                    </div>
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

                    <div className="py-2">
                      <div className="flex  items-center">
                        <input
                          type="checkbox"
                          name="homeDelivery"
                          id="homeDelivery"
                          checked={
                            selectedPaymentDeliveryStatus === 'homeDelivery'
                          }
                          onChange={handlePaymentStatusChange}
                        />
                        <label
                          className="font-gotham font-normal text-xs text-black ml-1"
                          htmlFor="homeDelivery"
                        >
                          Home Delivery
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="pickup"
                          id="pickup"
                          checked={selectedPaymentDeliveryStatus === 'pickup'}
                          onChange={handlePaymentStatusChange}
                        />
                        <label
                          className="font-gotham font-normal text-xs text-black ml-1"
                          htmlFor="online"
                        >
                          Pickup
                        </label>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
