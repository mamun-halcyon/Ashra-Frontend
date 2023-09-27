import ProfileSidebar from '@/components/profile-sidebar';
import '../page.scss';
// import './page.scss';
import React from 'react';
import Link from 'next/link';

const Ticket = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <ProfileSidebar />
          <div className=" col-span-9">
            <table className="w-full text-sm text-left shadow ">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Ticket ID
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Sending Date
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-border">
                  <td scope="row " className="px-6 py-3 font-gotham font-light">
                    #2147483647
                  </td>
                  <td scope="row" className="px-6 py-3 font-gotham font-light">
                    2023-09-27 03:24:50
                  </td>
                  <td scope="row" className="px-6 py-3 font-gotham font-light">
                    Account Recovery
                  </td>
                  <td scope="row" className="px-6 py-3 font-gotham font-light">
                    Pending
                  </td>
                  <td scope="row" className="px-6 py-3 font-gotham font-light">
                    <Link href={'/profile'} className="cursor-pointer">
                      View All →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
