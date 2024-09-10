"use client";
import ProfileSidebar from "@/components/profile-sidebar";
import "../page.scss";
import "./page.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { FaBars } from "react-icons/fa6";
import { formatDate } from "@/components/dateformate";
import axiosInstance from "../../../../utils/axiosInstance";
import UserInfo from "@/components/user-info";

const Ticket = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push("/login");
    }
  }, [login, route]);

  useEffect(() => {
    if (login?.accessToken) {
      const getAllTickets = async () => {
        try {
          const response = await axiosInstance.get(`/customers/supports`, {
            headers: {
              Authorization: `Bearer ${login?.accessToken}`,
            },
          });
          if (response.status === 200) {
            setTickets(response?.data?.data?.rows);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getAllTickets();
    }
  }, [login]);

  return (
    <>
      {isLoggedIn ? (
        <section className="">
          <div className="container md:my-10 mb-10 mt-5">
          <h2 className="md:text-3xl text-xl font-semibold font-gotham text-center mb-3 md:mb-8">
            Your Support Ticket
          </h2>
            <div className="grid grid-cols-12 gap-6">
              <UserInfo/>
              <div className=" col-span-12 md:col-span-9 overflow-x-scroll md:overflow-x-visible px-2">
                <Link href={"/profile/ticket/create"}>
                  <Button className="px-2 py-1 font-gotham">New Ticket</Button>
                </Link>
                <table className="w-full text-sm text-left ticket-table mt-3 ">
                  <thead>
                    <tr className="table-heading">
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Ticket ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Sending Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Subject
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
                    {tickets?.length > 0 ? (
                      tickets?.map((ticket, index) => (
                        <tr className="table-border" key={index}>
                          <td
                            scope="row "
                            className="px-6 py-3 font-gotham font-normal"
                          >
                            #{ticket?.id}
                          </td>
                          <td
                            scope="row"
                            className="px-6 py-3 font-gotham font-normal"
                          >
                            {formatDate(ticket?.created_at)}
                          </td>
                          <td
                            scope="row"
                            className="px-6 py-3 font-gotham font-normal"
                          >
                            {ticket?.subject}
                          </td>

                          <td
                            scope="row"
                            className="px-6 py-3 font-gotham font-normal"
                          >
                            <Link
                              href={`/profile/ticket/${ticket?.id}`}
                              className="cursor-pointer"
                            >
                              View All →
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
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

export default Ticket;
