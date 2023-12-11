"use client";
import ProfileSidebar from "@/components/profile-sidebar";
import "../page.scss";
import React, { useEffect, useState } from "react";
import "./page.scss";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { API_URL } from "@/constant";
import axios from "axios";

const Conversations = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [conversations, setConversations] = useState<any[]>([]);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push("/login");
    }
  }, [login]);

  useEffect(() => {
    if (login?.accessToken) {
      const getAllConversations = async () => {
        try {
          const response = await axios.get(`${API_URL}/customers/querys`, {
            headers: {
              Authorization: `Bearer ${login?.accessToken}`,
            },
          });
          if (response.status === 200) {
            console.log(response?.data?.data);
            setConversations(response?.data?.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getAllConversations();
    }
  }, [login]);

  return (
    <>
      {isLoggedIn ? (
        <section className="profile">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <ProfileSidebar />
              <div className=" col-span-9">
                <table className="w-full text-sm text-left conversation-table ">
                  <thead>
                    <tr className="table-heading">
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium text-center"
                      >
                        Mobile Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium text-center"
                      >
                        Question
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium text-center"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {conversations?.length > 0 ? (
                      conversations?.map((conversation, i) => (
                        <tr className="table-border" key={i}>
                          <td
                            scope="row "
                            className="px-6 py-3 font-gotham font-light"
                          >
                            {conversation?.mobile}
                          </td>
                          <td
                            scope="row"
                            className="px-6 py-3 font-gotham font-light"
                          >
                            {conversation?.question}
                          </td>
                          <td
                            scope="row"
                            className="px-6 py-3 font-gotham font-light"
                          >
                            confirm
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

export default Conversations;
