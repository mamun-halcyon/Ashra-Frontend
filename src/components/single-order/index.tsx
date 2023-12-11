"use client";
import React, { FC, useEffect, useState } from "react";
import Button from "../button";
import { LiaDownloadSolid, LiaEye } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import "./index.scss";
import axios from "axios";
import { API_URL } from "@/constant";
import { useAppSelector } from "@/redux/hooks";

export interface IProps {
  order: any;
}

const SingleOrder: FC<IProps> = ({ order }) => {
  const { login } = useAppSelector((state) => state.login);
  const [isOpen, setIsOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any[]>([]);

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
            console.log(response?.data);
            setOrderDetails(response?.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getOrderDetails();
    }
  }, [order?.id]);

  return (
    <tr className=" font-normal font-gotham text-sm table-border">
      <td scope="row" className="px-6 py-4  ">
        20230927-12584942
      </td>
      <td className="px-6 py-4">{order?.created_at}</td>
      <td className="px-6 py-4">৳17,280.00</td>
      <td className="px-6 py-4">Delivered</td>
      <td className="px-6 py-4">Paid</td>
      <td className="px-6 py-2">
        <div className="flex justify-center info-icons">
          <div onClick={() => setIsOpen(true)}>
            <LiaEye className="mr-1 cursor-pointer" />
          </div>
          <LiaDownloadSolid className="cursor-pointer" />
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

              <div className="flex justify-between mb-4">
                <div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Order Code:
                    </p>
                    <p className=" font-gotham text-sm">GHA-21</p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Customer Name:
                    </p>
                    <p className=" font-gotham text-sm">John</p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">Email:</p>
                    <p className=" font-gotham text-sm">example@gmail.com</p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Shipping Address:{" "}
                    </p>
                    <p className=" font-gotham text-sm">
                      340, Road5, Ave3, Mirpur Dohs
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Order Date :{" "}
                    </p>
                    <p className=" font-gotham text-sm ml-2">
                      12-12-2023 02:43AM
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Order Status:{" "}
                    </p>
                    <p className=" font-gotham text-sm ml-2">Pending</p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Total Order Amount:{" "}
                    </p>
                    <p className=" font-gotham text-sm ml-2">2302</p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Shipping method:{" "}
                    </p>
                    <p className=" font-gotham text-sm ml-2">Flat Shipping</p>
                  </div>
                  <div className="flex py-1">
                    <p className=" font-gotham text-sm font-semibold">
                      Payment method:{" "}
                    </p>
                    <p className=" font-gotham text-sm ml-2">
                      Cash on Delivery
                    </p>
                  </div>
                </div>
              </div>

              <table className="w-full text-sm text-left ">
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
                  <tr className=" font-normal font-gotham text-sm table-border p-2">
                    <td className="px-6 py-4">Product Name</td>
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">LPG</td>
                    <td className="px-6 py-4">৳2000</td>
                    <td className="px-6 py-4">
                      <Button className="px-3 py-1">Apply Now</Button>
                    </td>
                  </tr>
                  <tr className=" font-normal font-gotham text-sm table-border p-2">
                    <td className="px-6 py-4">Product Name</td>
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">LPG</td>
                    <td className="px-6 py-4">৳2000</td>
                    <td className="px-6 py-4">
                      <Button className="px-3 py-1">Apply Now</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-12">
                <div className="flex justify-end py-1">
                  <div>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Subtotal:
                    </h3>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Shipping:
                    </h3>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Coupon:
                    </h3>
                    <h3 className=" font-gotham text-sm font-semibold mb-3">
                      Total:
                    </h3>
                  </div>
                  <div className="ml-6">
                    <p className=" font-gotham text-sm mb-3">৳1200</p>
                    <p className=" font-gotham text-sm mb-3">৳120</p>
                    <p className=" font-gotham text-sm mb-3">৳200</p>
                    <p className=" font-gotham text-sm mb-3">৳1000</p>
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
