"use client";
import ProfileSidebar from "@/components/profile-sidebar";
import "../page.scss";
import "./page.scss";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import SingleOrder from "@/components/single-order";
import { FaBars } from "react-icons/fa6";
import axiosInstance from "../../../../utils/axiosInstance";
import ProfilePagination from "@/components/profile-pagination";
import Image from "next/image";
import { API_ROOT } from "@/constant";
import UserInfo from "@/components/user-info";

const OrderHistory = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [allOrders, setAllOrders] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const decrementPage = () => setPage(page > 1 ? page - 1 : 1);
  const incrementPage = () => setPage(page + 1);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push("/login");
    }
  }, [login, route]);

  useEffect(() => {
    if (login?.accessToken) {
      const getAllOrders = async () => {
        try {
          const response = await axiosInstance.get(
            `/customers/orders?page=${page}&limit=10`,
            {
              headers: {
                Authorization: `Bearer ${login?.accessToken}`,
              },
            }
          );
          if (response.status == 200) {
            setAllOrders(response?.data?.rows);
            setCount(response?.data?.count);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getAllOrders();
    }
  }, [login, page]);

  return (
    <>
      {isLoggedIn ? (
        <section className="">
          <div className="container md:my-10 mb-10 mt-5">
          <h2 className="md:text-3xl text-xl font-semibold font-gotham text-center mb-3 md:mb-8">
            Your Orders
          </h2>
            <div className="grid grid-cols-12 gap-6">
            <UserInfo/>
              <div className="overflow-x-scroll md:overflow-x-visible md:col-span-9 col-span-12 px-2">
                <div className="order-table">
                  <table className="w-full text-sm text-left ">
                    <thead>
                      <tr className="table-heading">
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium"
                        >
                          Invoice No
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
                {count > 10 && (
                  <div className="mt-5">
                    <ProfilePagination
                      incrementPage={incrementPage}
                      decrementPage={decrementPage}
                      currentPage={page}
                      totalPage={Math.ceil(count / 10)}
                    />
                  </div>
                )}
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
