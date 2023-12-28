'use client';
import React, { useEffect, useState } from 'react';
import './page.scss';
import ProfileSidebar from '@/components/profile-sidebar';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import axiosInstance from '../../../utils/axiosInstance';

const Profile = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const { cart } = useAppSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [dashboard, setDashboard] = useState<any>();

  const getDashboardInfo = async () => {
    const response = await axiosInstance.get(`/customers/dashboards`, {
      headers: {
        Authorization: `Bearer ${login?.accessToken}`,
      },
    });
    if (response?.status === 200) {
      setDashboard(response?.data);
    }
  };

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
      getDashboardInfo();
    } else {
      route.push('/login');
    }
  }, [login]);

  return (
    <>
      {isLoggedIn ? (
        <section className="profile">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="sidebar  md:col-span-3  px-1">
                <span className="md:hidden">
                  <FaBars />
                </span>
                <div className=" items">
                  <ProfileSidebar />
                </div>
              </div>
              <div className=" md:col-span-9 col-span-12 px-1 ">
                <div className="grid grid-cols-3 md:gap-4 gap-1">
                  <div className=" bg-primary py-5 pl-5">
                    <h2 className=" font-medium font-gotham text-base text-white">
                      {cart?.length} Products
                    </h2>
                    <p className=" font-gotham font-light text-xs text-white">
                      In Your Cart
                    </p>
                  </div>
                  <div className=" bg-primary py-5 pl-5">
                    <h2 className=" font-medium font-gotham text-base text-white">
                      {dashboard?.wishlistCount} Products
                    </h2>
                    <p className=" font-gotham font-light text-xs text-white">
                      In Your Wishlist
                    </p>
                  </div>
                  <div className=" bg-primary py-5 pl-5">
                    <h2 className=" font-medium font-gotham text-base text-white">
                      {dashboard?.orderCount} Products
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Profile;
