'use client';
import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import ProfileSidebar from '@/components/profile-sidebar';
import { API_URL } from '@/constant';
import { useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ViewTicket = () => {
  const route = useRouter();
  const param = useParams();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [details, setDetails] = useState<string>('');
  const [image, setImage] = useState(undefined);

  const getTicketDetails = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/customers/supports/${param?.slug}`,
        {
          headers: {
            Authorization: `Bearer ${login?.accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        setMessages(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push('/login');
    }
  }, [login]);

  useEffect(() => {
    if (login?.accessToken && param?.slug) {
      getTicketDetails();
    }
  }, [login, param?.slug]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (details?.trim() !== '' && login?.user?.id && image && param?.slug) {
      try {
        const formData = new FormData();
        formData.append('subject', '');
        formData.append('details', details?.trim());
        formData.append('user_id', login?.user?.id?.toString());
        formData.append('image', image);
        formData.append('parent_text_id', param?.slug?.toString());
        formData.append('text_type', 'reply');
        formData.append('upload_preset', 'w8omhp4w');
        const response = await axios.post(`${API_URL}/supports`, formData, {
          headers: {
            Authorization: `Bearer ${login?.accessToken}`,
          },
        });
        if (response?.status === 201) {
          setDetails('');
          setImage(undefined);
          getTicketDetails();
        }
      } catch (error) {
        console.log(error);
        toast.error('Reply Error!');
      }
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <section className="py-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <ProfileSidebar />
              <div className=" col-span-9">
                <div className="mb-12 h-[350px] overflow-y-scroll scrollbar">
                  {messages?.length > 0 ? (
                    messages?.map((message, index) =>
                      message.parent_text_id == 0 ? (
                        <div className="py-2" key={index}>
                          <p className=" font-gotham text-sm bg-hoverColor text-white inline-block px-2 py-1 rounded-md">
                            {message?.details}
                          </p>
                        </div>
                      ) : (
                        <div className="text-right py-2" key={index}>
                          <p className=" font-gotham text-sm bg-primary text-white inline-block px-2 py-1 rounded-md">
                            {message?.details}
                          </p>
                        </div>
                      )
                    )
                  ) : (
                    <></>
                  )}
                </div>
                <form className="mx-auto" onSubmit={handleSubmit}>
                  <label
                    className=" font-gotham text-sm"
                    htmlFor="message"
                  ></label>
                  <textarea
                    id="message"
                    className="border border-secondary mt-3 w-full p-2 font-gotham text-xs outline-none min-h-[100px]"
                    placeholder="Your replay"
                    value={details}
                    onChange={(e: any) => setDetails(e.target.value)}
                  ></textarea>

                  <FormGroup
                    className="mt-2 "
                    type="file"
                    title="photo"
                    placeholder="Photo"
                    onChange={(e: any) => setImage(e.target.files[0])}
                  />
                  <div className="text-right">
                    <Button
                      type="submit"
                      className="mt-2 px-3 py-1 font-gotham text-xs"
                    >
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
