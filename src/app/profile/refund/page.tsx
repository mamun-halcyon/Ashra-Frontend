import ProfileSidebar from '@/components/profile-sidebar';
import React from 'react';
import { FaBars } from 'react-icons/fa6';
import '../page.scss';

const Refund = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="sidebar  md:col-span-3  px-1">
            <span className="md:hidden">
              <FaBars />
            </span>
            <div className="items">
              <ProfileSidebar />
            </div>
          </div>
          <div className=" md:col-span-9 col-span-12 overflow-x-scroll md:overflow-x-visible  ">
            <table className="w-full text-sm text-left ">
              <thead>
                <tr className="table-heading">
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Order ID
                  </th>
                  <th className="px-6 py-3 font-gotham font-medium">Product</th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(2)].map((item, index) => (
                  <tr
                    key={index}
                    className=" font-normal font-gotham text-sm table-border p-2"
                  >
                    <td className="px-6 py-4">14-11-2023</td>
                    <td className="px-6 py-4">GHA-223</td>
                    <td className="px-6 py-4">P-320C - Gazi Smiss Gas Stove</td>
                    <td className="px-6 py-4">Amount</td>
                    <td className="px-6 py-4">Rejected</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refund;
