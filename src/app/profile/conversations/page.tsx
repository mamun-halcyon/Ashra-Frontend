import ProfileSidebar from '@/components/profile-sidebar';
import '../page.scss';
import React from 'react';

const Conversations = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <ProfileSidebar />
          <div className="shadow col-span-9">
            <table className="w-full text-sm text-left ">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Mobile Number
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Question
                  </th>
                  <th scope="col" className="px-6 py-3 font-gotham font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="px-6 py-3 font-gotham font-light">
                    +8801724721383
                  </td>
                  <td scope="row" className="px-6 py-3 font-gotham font-light">
                    How do you rate the quality of our products as compared to
                    our competitors?
                  </td>
                  <td scope="row" className="px-6 py-3 font-gotham font-light">
                    pending
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

export default Conversations;
