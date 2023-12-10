"use client";
import ProfileSidebar from "@/components/profile-sidebar";
import "../page.scss";
import "./page.scss";
import React, { useEffect, useState } from "react";
import FormGroup from "@/components/fromgroup";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

const UpdateProfile = () => {
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
                <div className="main-area p-4">
                  <form>
                    <div className="grid grid-cols-2 gap-4">
                      <FormGroup title="Your Name" />
                      <FormGroup title="Mobile Number" />
                      <FormGroup title="Photo" type="file" />
                      <FormGroup title="City" />
                      <FormGroup title="Your Password" />
                      <FormGroup title="Confirm Password" />
                    </div>
                    <FormGroup title="Address" />
                    <Button
                      type="submit"
                      className="px-2 py-1 font-gotham text-sm font-normal mt-4"
                    >
                      Update Profile →
                    </Button>
                  </form>
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

export default UpdateProfile;
