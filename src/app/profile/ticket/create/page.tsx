"use client";
import Button from "@/components/button";
import FormGroup from "@/components/fromgroup";
import ProfileSidebar from "@/components/profile-sidebar";
import { API_URL } from "@/constant";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateTicket = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [subject, setSubject] = useState<string | null>(null);
  const [details, setDetails] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push("/login");
    }
  }, [login]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (subject && details && login?.user?.id && image) {
      try {
        const formData = new FormData();

        formData.append("subject", subject);
        formData.append("details", details);
        formData.append("user_id", login?.user?.id?.toString());
        formData.append("image", image);
        formData.append("parent_text_id", "0");
        formData.append("text_type", "query");
        formData.append("upload_preset", "w8omhp4w");

        const response = await axios.post(`${API_URL}/supports`, formData, {
          headers: {
            Authorization: `Bearer ${login?.accessToken}`,
          },
        });
        if (response?.status === 201) {
          toast.success("Ticket Created Successfuly!");
          route.push("/profile/ticket");
        }
      } catch (error) {
        console.log(error);
        toast.error("Ticket Create Error!");
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
                <form className="w-[450px] mx-auto" onSubmit={handleSubmit}>
                  <FormGroup
                    className="mt-2 "
                    type="text"
                    title="Subject*"
                    placeholder="subject"
                    required
                    onChange={(e: any) =>
                      e.target.value.trim() === ""
                        ? setSubject(null)
                        : setSubject(e.target.value.trim())
                    }
                  />
                  <textarea
                    className="border border-secondary mt-3 w-full p-2 font-gotham text-xs outline-none min-h-[100px]"
                    placeholder="Your replay"
                    onChange={(e: any) =>
                      e.target.value.trim() === ""
                        ? setDetails(null)
                        : setDetails(e.target.value.trim())
                    }
                  ></textarea>
                  <FormGroup
                    className="mt-2 "
                    type="file"
                    title="photo"
                    placeholder="Photo"
                    required
                    onChange={(e: any) =>
                      e.target.files[0]
                        ? setImage(e.target.files[0])
                        : setImage(null)
                    }
                  />
                  <Button className="mt-2 px-3 py-1 font-gotham text-xs">
                    Submit
                  </Button>
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

export default CreateTicket;
