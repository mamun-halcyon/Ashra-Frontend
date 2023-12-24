'use client';
import Box from '@/components/box';
import FormGroup from '@/components/fromgroup';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Button from '@/components/button';
import './page.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { API_URL } from '@/constant';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/redux/features/cart/cartSlice';

function Checkout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.login);
  const { cart } = useAppSelector((state) => state.cart);
  const [discountCart, setDiscountCart] = useState<any>(cart);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [approvePromoCode, setApprovePromCode] = useState<string | null>(null);
  const [approvePromoData, setApprovePromoData] = useState<any>(null);
  const [approvePromoStatus, setApprovePromStatus] = useState<Number | null>(
    null
  );
  const [selectedPaymentDeliveryStatus, setSelectedPaymentDeliveryStatus] =
    useState<string | null>(null);
  const [couponId, setCouponId] = useState<Number | null>(null);
  const [location, setLocation] = useState<string>('');
  const [locations, setLocations] = useState<any[]>([]);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [thana, setThana] = useState('');
  const [cashOnDeliveryMessage, setCashOnDeliveryMessage] = useState<
    string | null
  >('');
  const [onlinePaymentMessage, setOnlinePaymentMessage] = useState<
    string | null
  >('');

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

  const orderItem = cart.map((item) => ({
    product_id: item.product_id,
    quantity: item.quantity,
  }));

  const subTotal = cart.reduce(
    (sum: any, item: any) => (sum += item.price * item.quantity),
    0
  );

  const orderData = {
    name,
    email: login?.user?.email ? login?.user?.email : email,
    mobile: login?.user?.mobile ? login?.user?.mobile : mobile,
    address,
    city,
    thana,
    order_form: 'web',
    delivery_fee: deliveryFee,
    coupon_id: couponId,
    payment_method: 'Credit Card',
    order_status: 'pending',
    delivery_method: selectedPaymentDeliveryStatus,
    orderItem,
  };

  const handleOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPayment) {
      toast.error('Please Select payment method');
      return;
    }
    if (!selectedPaymentDeliveryStatus) {
      toast.error('Please Select delivery method');
    }
    await axios
      .post(`${API_URL}/orders`, orderData)
      .then((res) => {
        toast.success('Order create successfully');
        dispatch(clearCart());
        router.push('/profile/order');
      })
      .catch((error) => {
        if (error?.response?.status === 400) {
          toast.error('This Email or Phone already used in another account!');
        }
        console.log('error : ', error);
      });
  };

  const handleApplyPromo = async () => {
    if (approvePromoCode?.trim() || approvePromoCode?.trim() !== '') {
      try {
        const response = await axios.post(`${API_URL}/coupons/validation`, {
          coupon_code: approvePromoCode,
        });
        if (response.status == 200) {
          setApprovePromoData(response?.data?.coupon);
          setCouponId(response?.data?.coupon?.id);
          setApprovePromStatus(1);
        } else {
          setApprovePromoData(null);
          setApprovePromStatus(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (approvePromoData) {
      if (approvePromoData?.discount_type === 'flat') {
        let tempDisCart = discountCart;
        if (approvePromoData?.product_id) {
          let tempIdsArr: any[] = [];
          if (approvePromoData?.product_id?.split(',')?.length > 0) {
            tempIdsArr = approvePromoData?.product_id?.split(',');
          } else {
            tempIdsArr = [approvePromoData?.product_id];
          }
          tempDisCart = tempDisCart?.map((item: any) => {
            if (tempIdsArr.find((element) => element == item.product_id)) {
              return {
                ...item,
                price: item.regular_price - approvePromoData.discount_amount,
              };
            }
            return item;
          });
        } else {
          tempDisCart = tempDisCart?.map((item: any) => {
            return {
              ...item,
              price: item.regular_price - approvePromoData.discount_amount,
            };
          });
        }
        setDiscountCart(tempDisCart);
      } else {
        let tempDisCart = discountCart;
        if (approvePromoData?.product_id) {
          let tempIdsArr: any[] = [];
          if (approvePromoData?.product_id?.split(',')?.length > 0) {
            tempIdsArr = approvePromoData?.product_id?.split(',');
          } else {
            tempIdsArr = [approvePromoData?.product_id];
          }
          tempDisCart = tempDisCart?.map((item: any) => {
            if (tempIdsArr.find((element) => element == item.product_id)) {
              return {
                ...item,
                price:
                  item.regular_price -
                  item.regular_price * (approvePromoData.discount_amount / 100),
              };
            }
            return item;
          });
        } else {
          tempDisCart = tempDisCart?.map((item: any) => {
            return {
              ...item,
              price:
                item.regular_price -
                item.regular_price * (approvePromoData.discount_amount / 100),
            };
          });
        }
        setDiscountCart(tempDisCart);
      }
    }
  }, [approvePromoData]);

  useEffect(() => {
    if (approvePromoData) {
      let finalPrice = 0;
      discountCart?.map((item: any) => {
        finalPrice += item.price * item.quantity;
      });
      setFinalPrice(finalPrice);
    } else {
      let finalPrice = 0;
      cart?.map((item: any) => {
        finalPrice += item.price * item.quantity;
      });
      setFinalPrice(finalPrice);
    }
  }, [cart, approvePromoData, discountCart]);

  useEffect(() => {
    const getAllSettings = async () => {
      try {
        const response = await axios.get(`${API_URL}/settings`);
        if (response?.status === 200) {
          setCashOnDeliveryMessage(response?.data?.setting?.cash_on_message);
          setOnlinePaymentMessage(
            response?.data?.setting?.online_payment_message
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllSettings();
  }, []);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await axios.get(`${API_URL}/shippings`);
        if (response?.status === 200) {
          setLocations(response?.data?.data?.rows);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLocations();
  }, []);

  useEffect(() => {
    if (
      selectedPaymentDeliveryStatus &&
      location !== '' &&
      locations?.length > 0
    ) {
      if (selectedPaymentDeliveryStatus == 'pickup') {
        let totalProductsCount = 0;
        let perCountFree = 0;
        cart?.length > 0 &&
          cart?.map((item) => {
            totalProductsCount += item.quantity;
          });
        locations?.map((item) => {
          if (location == item?.location) {
            perCountFree = item?.price;
          }
        });
        setDeliveryFee(totalProductsCount * perCountFree);
      } else {
        setDeliveryFee(0);
      }
    }
  }, [selectedPaymentDeliveryStatus, location, locations]);

  const handleChangeLocation = (e: any) => {
    setLocation(e.target.value);
  };

  return (
    <main>
      <section>
        <div className="container px-2 md:px-0">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/cart'}> Shopping Cart </Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/checkout'}> Checkout </Link>
          </div>
        </div>
      </section>
      <section className=" mb-10">
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
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <FormGroup
                    className="mb-1"
                    type="email"
                    title="Email*"
                    placeholder="Type your e-mail*"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={login?.user?.email ? login?.user?.email : email}
                    disabled={login?.accessToken ? true : false}
                  />
                  <FormGroup
                    className="mb-1"
                    title="Mobile*"
                    placeholder="Type your mobile*"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    value={login?.user?.mobile ? login?.user?.mobile : mobile}
                    disabled={login?.accessToken ? true : false}
                  />
                  <FormGroup
                    className="mb-1"
                    title="Address*"
                    placeholder="Type your address*"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormGroup
                      className="mb-1"
                      title="City*"
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Type your city*"
                    />
                    <div>
                      <label
                        htmlFor="location"
                        className=" font-gotham font-normal text-xs  text-black mb-2"
                      >
                        Location
                      </label>
                      <select
                        id="location"
                        className="bg-gray-50 border border-secondary mt-1 text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                        onChange={handleChangeLocation}
                      >
                        <option value="">Select Location</option>
                        {locations?.length > 0 ? (
                          locations?.map((location, i) => (
                            <option key={i} value={`${location?.location}`}>
                              {location?.location}
                            </option>
                          ))
                        ) : (
                          <></>
                        )}
                      </select>
                    </div>
                    {/* <FormGroup
                      className="mb-1"
                      title="Thana"
                      onChange={(e) => setThana(e.target.value)}
                      placeholder="Select your area"
                    /> */}
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
                            Free Home Delivery
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
                            Regular Home Delivery
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
                          onChange={(e) => setApprovePromCode(e.target.value)}
                        />
                        <Button
                          type="button"
                          className="font-gotham font-medium py-2 text-xs  w-1/4 button"
                          onClick={handleApplyPromo}
                        >
                          Apply Promo
                        </Button>
                      </div>
                      {approvePromoStatus ? (
                        approvePromoStatus === 0 ? (
                          <div className="text font-gotham font-normal bold text-xs">
                            Not Valid
                          </div>
                        ) : (
                          <div className="text font-gotham font-normal bold text-xs">
                            Promo Code Applied
                          </div>
                        )
                      ) : (
                        <></>
                      )}
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
                          {cashOnDeliveryMessage ? cashOnDeliveryMessage : ''}
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="content">
                        <p className="text font-gotham font-normal bold text-xs">
                          {onlinePaymentMessage ? onlinePaymentMessage : ''}
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
                      <div className="heading-table col-span-2 md:col-span-2 p-3 font-gotham font-normal text-xs text-black">
                        Product Name
                      </div>
                      <div className="heading-table col-span-2 md:col-span-1 p-3 font-gotham font-normal text-xs text-black">
                        Regular Price
                      </div>
                      <div className="heading-table col-span-2 md:col-span-1 p-3 font-gotham font-normal text-xs text-black">
                        Price
                      </div>
                      <div className="heading-table col-span-1 p-3 font-gotham font-normal text-xs text-black">
                        Total
                      </div>
                    </div>
                    {approvePromoData
                      ? discountCart.map((item: any, index: number) => (
                          <div key={index} className="grid grid-cols-5 pb-5">
                            <div className="md:col-span-2 col-span-2 p-3 font-gotham font-normal text-xs text-black">
                              {item.title}
                            </div>

                            <div className="p-3 col-span-2 md:col-span-1 font-gotham font-normal text-xs text-black">
                              ৳ {item.regular_price}
                            </div>
                            <div className="p-3 col-span-2 md:col-span-1 font-gotham font-normal text-xs text-black">
                              ৳ {item.price} x {item.quantity}
                            </div>
                            <div className="p-3 col-span-1 font-gotham font-normal text-xs text-black">
                              ৳{item.price * item.quantity}
                            </div>
                          </div>
                        ))
                      : cart.map((item, index) => (
                          <div key={index} className="grid grid-cols-5 pb-5">
                            <div className="md:col-span-2 col-span-2 p-3 font-gotham font-normal text-xs text-black">
                              {item.title}
                            </div>
                            <div className="p-3 col-span-2 md:col-span-1 font-gotham font-normal text-xs text-black">
                              ৳ {item.regular_price}
                            </div>
                            <div className="p-3 col-span-2 md:col-span-1 font-gotham font-normal text-xs text-black">
                              ৳ {item.price} x {item.quantity}
                            </div>
                            <div className="p-3 col-span-1 font-gotham font-normal text-xs text-black">
                              ৳{item.price * item.quantity}
                            </div>
                          </div>
                        ))}

                    <div className="grid grid-cols-5 sub-border">
                      <div className="md:col-span-3 col-span-2 p-3 font-gotham font-normal text-xs text-black"></div>
                      <div className="p-3 col-span-2 md:col-span-1 font-gotham  text-xs text-primary font-medium">
                        Sub-Total :
                      </div>
                      <div className="p-3 font-gotham  text-xs text-primary font-medium">
                        ৳{subTotal}
                      </div>
                    </div>
                    {selectedPaymentDeliveryStatus && (
                      <div className="grid grid-cols-5 sub-border">
                        <div className="md:col-span-3 col-span-2 p-3 font-gotham font-normal text-xs text-black"></div>
                        <div className="p-3 font-gotham col-span-2 md:col-span-1 text-xs text-primary font-medium">
                          Delivery :
                        </div>
                        <div className="col-span-1 p-3 font-gotham text-xs text-primary font-medium">
                          ৳{deliveryFee}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-5 sub-border">
                      <div className="md:col-span-3 col-span-2 p-3 font-gotham font-normal text-xs text-black"></div>
                      <div className="p-3 font-gotham col-span-2 md:col-span-1 text-xs text-primary font-medium">
                        Discount :
                      </div>
                      <div className="col-span-1 p-3 font-gotham text-xs text-primary font-medium">
                        {subTotal - finalPrice}
                      </div>
                    </div>
                    <div className="grid grid-cols-5 sub-border">
                      <div className="md:col-span-3 col-span-2 p-3 font-gotham text-xs text-primary font-medium"></div>
                      <div className="col-span-2 md:col-span-1 p-3 font-gotham text-xs text-primary font-medium">
                        Total :
                      </div>
                      <div className="p-3  font-gotham text-xs text-primary font-medium">
                        ৳{finalPrice + deliveryFee}
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
