import React from 'react';
import './page.scss';
import ProfileSidebar from '@/components/profile-sidebar';

const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <ProfileSidebar />
          <div className=" col-span-9">
            <div className="grid grid-cols-3 gap-4">
              <div className=" bg-primary py-5 pl-5">
                <h2 className=" font-medium font-gotham text-base text-white">
                  0 Products
                </h2>
                <p className=" font-gotham font-light text-xs text-white">
                  In Your Cart
                </p>
              </div>
              <div className=" bg-primary py-5 pl-5">
                <h2 className=" font-medium font-gotham text-base text-white">
                  0 Products
                </h2>
                <p className=" font-gotham font-light text-xs text-white">
                  In Your Wishlist
                </p>
              </div>
              <div className=" bg-primary py-5 pl-5">
                <h2 className=" font-medium font-gotham text-base text-white">
                  0 Products
                </h2>
                <p className=" font-gotham font-light text-xs text-white">
                  In Your Ordered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
