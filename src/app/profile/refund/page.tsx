'use client';
import ProfileSidebar from '@/components/profile-sidebar';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import '../page.scss';
import { useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { API_URL } from '@/constant';
import { formatDate } from '@/components/dateformate';

const Refund = () => {
  const { login } = useAppSelector((state) => state.login);
  const [refunds, setRefunds] = useState<any[]>([]);
  console.log(refunds);
  useEffect(() => {
    if (login?.accessToken) {
      const getAllOrders = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/refunds?customer_id=${login.user.id}`,
            {
              headers: {
                Authorization: `Bearer ${login?.accessToken}`,
              },
            }
          );
          if (response.status == 200) {
            setRefunds(response?.data?.data?.rows);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getAllOrders();
    }
  }, [login]);

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
                {refunds?.map((item, index) => (
                  <tr
                    key={index}
                    className=" font-normal font-gotham text-sm table-border p-2"
                  >
                    <td className="px-6 py-4">{formatDate(item.created_at)}</td>
                    <td className="px-6 py-4">{item.order_id}</td>
                    <td className="px-6 py-4">{item.product_name}</td>
                    <td className="px-6 py-4">{item.product_price}</td>
                    <td className="px-6 py-4">{item.refund_status}</td>
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
