"use client";
import ProfileSidebar from "@/components/profile-sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import axiosInstance from "../../../../utils/axiosInstance";
import "../page.scss";
import "./page.scss";
import ProfilePagination from "@/components/profile-pagination";
import UserInfo from "@/components/user-info";

const Conversations = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [conversations, setConversations] = useState<any[]>([]);

  const [total, setTotal] = useState(0);
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
      const getAllConversations = async () => {
        try {
          const response = await axiosInstance.get(
            `/customers/querys?page=${page}&limit=10`,
            {
              headers: {
                Authorization: `Bearer ${login?.accessToken}`,
              },
            }
          );
          if (response.status === 200) {
            setTotal(response?.data?.data?.count);
            setConversations(response?.data?.data?.rows);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getAllConversations();
    }
  }, [login, page]);

  return (
    <>
      {isLoggedIn ? (
        <section className="">
          <div className="container md:my-10 mb-10 mt-5">
          <h2 className="md:text-3xl text-xl font-semibold font-gotham text-center mb-3 md:mb-8">
            Your Questions
          </h2>
            <div className="grid grid-cols-12 gap-6">
              <UserInfo/>
              <div className=" col-span-9">
                <table className="w-full text-sm text-left conversation-table ">
                  <thead>
                    <tr className="table-heading">
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium "
                      >
                        SI NO.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium "
                      >
                        Mobile Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium "
                      >
                        Question
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium "
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
                            {i + 1}
                          </td>
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
                            className="px-6 py-3 font-gotham font-light capitalize"
                          >
                            {conversation.status ?? "Pending"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
                {total > 10 && (
                  <div className="mt-5">
                    <ProfilePagination
                      incrementPage={incrementPage}
                      decrementPage={decrementPage}
                      currentPage={page}
                      totalPage={Math.ceil(total / 10)}
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

export default Conversations;
