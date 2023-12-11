'use client';
import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import ProfileSidebar from '@/components/profile-sidebar';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import './page.scss';

const ViewTicket = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push('/login');
    }
  }, [login]);

  return (
    <>
      {isLoggedIn ? (
        <section className="py-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <ProfileSidebar />
              <div className=" col-span-9">
                <div className="mb-12 h-[350px] overflow-y-scroll scrollbar">
                  <div className="py-2">
                    <p className=" font-gotham text-sm bg-hoverColor text-white inline-block px-2 py-1 rounded-md">
                      Hello
                    </p>
                  </div>
                  <div className="text-right py-2">
                    <p className=" font-gotham text-sm bg-primary text-white inline-block px-2 py-1 rounded-md">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <form className="mx-auto">
                  <label
                    className=" font-gotham text-sm"
                    htmlFor="message"
                  ></label>
                  <textarea
                    id="message"
                    className="border border-secondary mt-3 w-full p-2 font-gotham text-xs outline-none min-h-[100px]"
                    placeholder="Your replay"
                  ></textarea>

                  <FormGroup
                    className="mt-2 "
                    type="file"
                    title="photo"
                    placeholder="Photo"
                    required
                  />
                  <div className="text-right">
                    <Button className="mt-2 px-3 py-1 font-gotham text-xs">
                      Replay
                    </Button>
                  </div>
                </form>
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

export default ViewTicket;
