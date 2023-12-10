"use client";
import ProfileSidebar from "@/components/profile-sidebar";
import "../page.scss";
import React, { useEffect, useState } from "react";
import "./page.scss";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

const Conversations = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push("/login");
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
                    <tr className="table-border">
                      <td
                        scope="row "
                        className="px-6 py-3 font-gotham font-light"
                      >
                        +8801724721383
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        How do you rate the quality of our products as compared
                        to our competitors? Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Expedita quos placeat
                        quam. Deserunt perferendis libero dicta. Nesciunt
                        voluptate aut maiores voluptatem odio repellat adipisci?
                        Consequuntur id aperiam quibusdam vitae quisquam!
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        confirm
                      </td>
                    </tr>
                    <tr className="table-border">
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        +8801724721383
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        How do you rate the quality of our products as compared
                        to our competitors?
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        pending
                      </td>
                    </tr>
                    <tr className="table-border">
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        +8801724721383
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        How do you rate the quality of our products as compared
                        to our competitors?
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-3 font-gotham font-light"
                      >
                        pending
                      </td>
                    </tr>
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
