"use client";
import { formatDate } from "@/components/dateformate";
import ProfileSidebar from "@/components/profile-sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import axiosInstance from "../../../../utils/axiosInstance";
import "../page.scss";

const Refund = () => {
  const { login } = useAppSelector((state) => state.login);
  const [refunds, setRefunds] = useState<any[]>([]);

  useEffect(() => {
    if (login?.accessToken) {
      const getAllOrders = async () => {
        try {
          const response = await axiosInstance.get(
            `/refunds?customer_id=${login.user.id}`,
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
                    <td className="px-6 py-4">৳ {item.product_price}</td>
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
