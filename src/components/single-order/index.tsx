'use client';
import React, { useState } from 'react';
import Button from '../button';
import { LiaDownloadSolid, LiaEye } from 'react-icons/lia';

const SingleOrder = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tr className=" font-normal font-gotham text-sm table-border">
      <td scope="row" className="px-6 py-4  ">
        20230927-12584942
      </td>
      <td className="px-6 py-4">27-09-2023</td>
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
            <div className="refund-request shadow-lg">
              <div className="text-right">
                <span
                  className=" cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </span>
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
                      Warrenty/Refund
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" font-normal font-gotham text-sm table-border p-2">
                    <td className="px-6 py-4">Product Name</td>
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">
                      <Button className="px-3 py-1">Apply Now</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default SingleOrder;
