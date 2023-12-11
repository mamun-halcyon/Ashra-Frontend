"use client";
import ProfileSidebar from "@/components/profile-sidebar";
import "../page.scss";
import "./page.scss";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/constant";
import SingleOrder from "@/components/single-order";

const OrderHistory = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [allOrders, setAllOrders] = useState<any[]>([]);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push("/login");
    }
  }, [login]);

  useEffect(() => {
    if (login?.accessToken) {
      const getAllOrders = async () => {
        try {
          const response = await axios.get(`${API_URL}/customers/orders`, {
            headers: {
              Authorization: `Bearer ${login?.accessToken}`,
            },
          });
          if (response.status == 200) {
            setAllOrders(response?.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getAllOrders();
    }
  }, [login]);

  return (
    <>
      {isLoggedIn ? (
        <section className="profile">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <ProfileSidebar />
              <div className="overflow-x-scroll md:overflow-x-visible md:col-span-9 col-span-12">
                <div className="order-table">
                  <table className="w-full text-sm text-left ">
                    <thead>
                      <tr className="table-heading">
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium"
                        >
                          Code
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium"
                        >
                          Delivery Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium"
                        >
                          Payment Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium"
                        >
                          Options
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrders?.length > 0 ? (
                        allOrders?.map((item, index) => (
                          <SingleOrder order={item} key={index} />
                        ))
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
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

export default OrderHistory;
