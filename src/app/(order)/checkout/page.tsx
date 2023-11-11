'use client';
import Box from '@/components/box';
import FormGroup from '@/components/fromgroup';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Button from '@/components/button';
import './page.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

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
  };

  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/cart'}> Shopping Cart </Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/checkout'}> Checkout </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-2 md:px-0">
          <form onSubmit={handleOrder}>
            <div className="grid grid-cols-3 gap-4">
              <div className=" md:col-span-1 col-span-3">
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
              <div className=" md:col-span-2 col-span-3">
                <div className="grid gap-4 grid-cols-2 ">
                  <Box
                    className=" text-primary col-span-2 md:col-span-1"
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
                      className="w-9/12 mt-2"
                      width={200}
                      height={100}
                      alt="logo"
                    />
                  </Box>
                  <div className="col-span-2 md:col-span-1">
                    <Box
                      className=" text-primary"
                      step="3"
                      title="Delivery Method"
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
                    <div className="mt-4">
                      <div className="flex">
                        <input
                          className="w-3/4 block form-input placeholder:text-xs  placeholder:font-gotham placeholder:font-normal text-xs text-black promo-box"
                          type="text"
                          placeholder="Promo Code"
                        />
                        <Button
                          type="button"
                          className="font-gotham font-medium py-2 text-xs  w-1/4 button"
                        >
                          Apply Promo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wearing mt-6 ">
                  <Tabs>
                    <TabList>
                      <Tab className="font-gotham font-bold text-xs mr-9 pr-5 pb-2 react-tabs__tab cursor-pointer">
                        Cash on Delivery
                      </Tab>
                      <Tab className="font-gotham font-bold text-xs mr-9 pr-5 pb-2 react-tabs__tab cursor-pointer">
                        Online Payment
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className="content">
                        <p className="text font-gotham font-normal bold text-xs">
                          ধন্যবাদ আপনার অর্ডারের জন্য। আমাদের অফিশিয়াল ফোন কল না
                          পাওয়া পর্যন্ত আপনার অর্ডারটি পেন্ডিং -এ থাকবে। (Thank
                          you for your order. Your order is pending until the
                          official phone call confirmation)
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="content">
                        <p className="text font-gotham font-normal bold text-xs">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum illum sint laudantium nesciunt rerum, esse
                          quod assumenda repellendus accusamus velit optio quo
                          odit, dolor rem laboriosam commodi deserunt dolorem
                          illo?
                        </p>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
                <Box
                  className="mt-6 order-summery"
                  step="4"
                  title="Order Summary"
                >
                  <div className="summery-table w-full h-full">
                    <div className="grid grid-cols-5">
                      <div className="heading-table col-span-3 p-3 font-gotham font-normal text-xs text-black">
                        Product Name
                      </div>
                      <div className="heading-table p-3 font-gotham font-normal text-xs text-black">
                        Price
                      </div>
                      <div className="heading-table p-3 font-gotham font-normal text-xs text-black">
                        Total
                      </div>
                    </div>
                    <div className="grid grid-cols-5 pb-5">
                      <div className="col-span-3 p-3 font-gotham font-normal text-xs text-black">
                        HY-955 - Gazi Smiss Kitchen Hood
                      </div>
                      <div className="p-3 font-gotham font-normal text-xs text-black">
                        ৳24,000.00 x 1
                      </div>
                      <div className="p-3 font-gotham font-normal text-xs text-black">
                        ৳24,000.00
                      </div>
                    </div>
                    <div className="grid grid-cols-5 sub-border">
                      <div className="md:col-span-3 col-span-2 p-3 font-gotham font-normal text-xs text-black"></div>
                      <div className="p-3 font-gotham  text-xs text-primary font-medium">
                        Sub-Total :
                      </div>
                      <div className="p-3 font-gotham  text-xs text-primary font-medium">
                        ৳24,000.00
                      </div>
                    </div>
                    <div className="grid grid-cols-5 sub-border">
                      <div className="col-span-3 p-3 font-gotham font-normal text-xs text-black"></div>
                      <div className="p-3 font-gotham text-xs text-primary font-medium">
                        Home Delivery :
                      </div>
                      <div className="p-3 font-gotham text-xs text-primary font-medium">
                        ৳0.00
                      </div>
                    </div>
                    <div className="grid grid-cols-5 sub-border">
                      <div className="col-span-3 p-3 font-gotham text-xs text-primary font-medium"></div>
                      <div className="p-3 font-gotham text-xs text-primary font-medium">
                        Total :
                      </div>
                      <div className="p-3 font-gotham text-xs text-primary font-medium">
                        ৳24,000.00
                      </div>
                    </div>
                  </div>
                </Box>
                <div className="accepted">
                  <div className="py-6">
                    <div className="flex">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name="accept"
                        id="accept"
                        required
                      />
                      <label
                        htmlFor="accept"
                        className=" font-gotham font-normal text-xs"
                      >
                        I have read and agree to the{' '}
                        <span className="sudo">
                          {' '}
                          Terms and Conditions, Privacy Policy
                        </span>{' '}
                        and{' '}
                        <span className="sudo">Refund and Return Policy</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text-right mt-6">
                  <Button
                    className="font-gotham font-medium py-2 text-xs w-[142px] button"
                    type="submit"
                  >
                    Confirm Order
                  </Button>
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
