'use client';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import Button from '../button';
import { LiaDownloadSolid, LiaEye } from 'react-icons/lia';
import { RxCross2 } from 'react-icons/rx';
import './index.scss';
import axios from 'axios';
import { API_URL } from '@/constant';
import { useAppSelector } from '@/redux/hooks';
import { formatDate } from '../dateformate';
import ReactToPrint from 'react-to-print';
import Invoice from '../invoice';
import TextAreaGroup from '../textarea';
import SingleOrderDetails from '../orderDetails';

export interface IProps {
  order: any;
}

const SingleOrder: FC<IProps> = ({ order }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { login } = useAppSelector((state) => state.login);
  const [isOpen, setIsOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>({});
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [amountBeforeCoupon, setAmountBeforeCoupon] = useState<number>(0);

  useEffect(() => {
    if (order?.id) {
      const getOrderDetails = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/customers/orders/${order?.id}`,
            {
              headers: {
                Authorization: `Bearer ${login?.accessToken}`,
              },
            }
          );
          if (response?.status === 200) {
            setOrderDetails(response?.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getOrderDetails();
    }
  }, [order?.id]);

  useEffect(() => {
    if (orderDetails?.coupon) {
      if (orderDetails?.coupon?.discount_type === 'flat') {
        let tempDisCart = orderDetails?.orderItems;
        if (orderDetails?.coupon?.product_id) {
          let tempIdsArr: any[] = [];
          if (orderDetails?.coupon?.product_id?.split(',')?.length > 0) {
            tempIdsArr = orderDetails?.coupon?.product_id?.split(',');
          } else {
            tempIdsArr = [orderDetails?.coupon?.product_id];
          }
          tempDisCart = tempDisCart?.map((item: any) => {
            if (tempIdsArr.find((element) => element == item.product_id)) {
              return {
                ...item,
                discount_price:
                  item.regular_price - orderDetails?.coupon?.discount_amount,
              };
            }
            return item;
          });
        } else {
          tempDisCart = tempDisCart?.map((item: any) => {
            return {
              ...item,
              discount_price:
                item.regular_price - orderDetails?.coupon?.discount_amount,
            };
          });
        }
        setOrderDetails((prevState: any) => {
          return {
            ...prevState,
            orderItems: tempDisCart,
          };
        });
      } else {
        let tempDisCart = orderDetails?.orderItems;
        if (orderDetails?.coupon?.product_id) {
          let tempIdsArr: any[] = [];
          if (orderDetails?.coupon?.product_id?.split(',')?.length > 0) {
            tempIdsArr = orderDetails?.coupon?.product_id?.split(',');
          } else {
            tempIdsArr = [orderDetails?.coupon?.product_id];
          }
          tempDisCart = tempDisCart?.map((item: any) => {
            if (tempIdsArr.find((element) => element == item.product_id)) {
              return {
                ...item,
                discount_price:
                  item.regular_price -
                  item.regular_price *
                    (orderDetails?.coupon.discount_amount / 100),
              };
            }
            return item;
          });
        } else {
          tempDisCart = tempDisCart?.map((item: any) => {
            return {
              ...item,
              discount_price:
                item.regular_price -
                item.regular_price *
                  (orderDetails?.coupon.discount_amount / 100),
            };
          });
        }
        setOrderDetails((prevState: any) => {
          return {
            ...prevState,
            orderItems: tempDisCart,
          };
        });
      }
    }
  }, [orderDetails?.coupon]);

  useEffect(() => {
    if (orderDetails?.orderItems?.length > 0) {
      if (orderDetails?.coupon) {
        let finalPrice = 0;
        orderDetails?.orderItems?.map((item: any) => {
          finalPrice += item?.discount_price * item?.quantity;
        });
        setFinalPrice(finalPrice);
      } else {
        let finalPrice = 0;
        orderDetails?.orderItems?.map((item: any) => {
          finalPrice += item?.discount_price
            ? item?.discount_price
            : item?.regular_price * item?.quantity;
        });
        setFinalPrice(finalPrice);
      }
    }

    if (orderDetails?.orderItems?.length > 0) {
      let amountBeforeCoupon = 0;
      orderDetails?.orderItems?.forEach((item: any) => {
        amountBeforeCoupon += item?.regular_price * item?.quantity;
      });
      setAmountBeforeCoupon(amountBeforeCoupon);
    }
  }, [orderDetails?.coupon, orderDetails?.orderItems]);

  return (
    <tr className=" font-normal font-gotham text-sm table-border">
      <td scope="row" className="px-6 py-4  ">
        {order?.order_prefix}-{order.id}
      </td>
      <td className="px-6 py-4">{formatDate(order?.created_at)}</td>
      <td className="px-6 py-4">৳{finalPrice + order.delivery_fee}</td>
      <td className="px-6 py-4">{order.order_status}</td>
      <td className="px-6 py-4">{order?.delivery_method}</td>
      <td className="px-6 py-2">
        <div className="flex justify-center info-icons">
          <div onClick={() => setIsOpen(true)}>
            <LiaEye className="mr-1 cursor-pointer" />
          </div>
          <ReactToPrint
            trigger={() => <LiaDownloadSolid className="cursor-pointer" />}
            content={() => componentRef.current}
          />

          <div className="print-area" ref={componentRef}>
            {<Invoice order={order} amountBeforeCoupon={amountBeforeCoupon} shipingCost={order.delivery_fee} finalPrice={finalPrice}/>}
          </div>

          {/* Order Popup View */}
          {isOpen && (
            <div className="refund-request shadow-lg mb-4">
              <div className="flex justify-end">
                <span
                  className=" cursor-pointer ml-auto"
                  onClick={() => setIsOpen(false)}
                >
                  <RxCross2 />
                </span>
              </div>

              <div className="flex justify-between flex-wrap mb-4">
                <div className="w-full md:w-auto">
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Invoice No:
                    </p>
                    <p className=" font-gotham text-sm">
                      {order.order_prefix}-{order.id}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Customer Name:
                    </p>
                    <p className=" font-gotham text-sm">{orderDetails?.name}</p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">Email:</p>
                    <p className=" font-gotham text-sm">
                      {orderDetails?.email}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Shipping Address:{' '}
                    </p>
                    <p className=" font-gotham text-sm">
                      {orderDetails?.address}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Order Date :{' '}
                    </p>
                    <p className=" font-gotham text-sm ml-2">
                      {formatDate(orderDetails?.created_at)}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Order Status:{' '}
                    </p>
                    <p className=" font-gotham text-sm ml-2">
                      {orderDetails?.order_status}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Total Order Amount:{' '}
                    </p>
                    <p className=" font-gotham text-sm ml-2">
                      {finalPrice + order.delivery_fee}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Shipping method:{' '}
                    </p>
                    <p className=" font-gotham text-sm ml-2">
                      {orderDetails?.delivery_method}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Payment method:{' '}
                    </p>
                    <p className=" font-gotham text-sm ml-2">
                      {orderDetails?.payment_method}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-scroll md:overflow-x-visible">
                <table className="w-full text-sm text-left  ">
                  <thead>
                    <tr className="table-heading">
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Variant
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Warrenty/Refund
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails?.orderItems?.length > 0 ? (
                      orderDetails?.orderItems?.map((item: any, i: any) => {
                        return <SingleOrderDetails item={item} key={i} />;
                      })
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="mt-12">
                <div className="flex md:justify-end justify-start py-1">
                  <div>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Regular Price:
                    </h3>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Shipping:
                    </h3>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Discount:
                    </h3>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Total:
                    </h3>
                  </div>
                  <div className="ml-6">
                    <p className=" font-gotham text-sm mb-3">
                      ৳ {amountBeforeCoupon}
                    </p>
                    <p className=" font-gotham text-sm mb-3">
                      ৳ {orderDetails.delivery_fee}
                    </p>
                    <p className=" font-gotham text-sm mb-3">
                      ৳ {amountBeforeCoupon - finalPrice}
                    </p>
                    <p className=" font-gotham text-sm mb-3">
                      ৳ {finalPrice + order.delivery_fee}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default SingleOrder;
