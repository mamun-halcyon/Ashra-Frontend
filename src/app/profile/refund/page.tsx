import ProfileSidebar from '@/components/profile-sidebar';
import React from 'react';

const Refund = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <ProfileSidebar />
          <div className=" md:col-span-9 col-span-12 ">
            <table className="w-full text-sm text-left ">
              <thead>
                <tr className="table-heading">
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" font-normal font-gotham text-sm table-border p-2">
                  <td className="px-6 py-4">14-11-2023</td>
                  <td className="px-6 py-4">GHA-223</td>
                  <td className="px-6 py-4">P-320C - Gazi Smiss Gas Stove</td>
                  <td className="px-6 py-4">Amount</td>
                  <td className="px-6 py-4">Rejected</td>
                </tr>
                <tr className=" font-normal font-gotham text-sm table-border p-2">
                  <td className="px-6 py-4">14-11-2023</td>
                  <td className="px-6 py-4">GHA-223</td>
                  <td className="px-6 py-4">P-320C - Gazi Smiss Gas Stove</td>
                  <td className="px-6 py-4">Amount</td>
                  <td className="px-6 py-4">Rejected</td>
                </tr>
                <tr className=" font-normal font-gotham text-sm table-border p-2">
                  <td className="px-6 py-4">14-11-2023</td>
                  <td className="px-6 py-4">GHA-223</td>
                  <td className="px-6 py-4">P-320C - Gazi Smiss Gas Stove</td>
                  <td className="px-6 py-4">Amount</td>
                  <td className="px-6 py-4">Rejected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refund;
