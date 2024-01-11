"use client";
import Button from "@/components/button";
import FormGroup from "@/components/fromgroup";
import ProfileSidebar from "@/components/profile-sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/axiosInstance";
import "../page.scss";
import "./page.scss";

const UpdateProfile = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState("");
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

    if (login) {
      if (password !== confirmPassword) {
        toast.error("Password didn't match");
      }
      try {
        const formData = new FormData();

        formData.append("name", name);
        formData.append("mobile", mobile);
        formData.append("city", city);
        formData.append("password", password);
        formData.append("address", address);
        if (image) {
          formData.append("image", image);
        }
        formData.append("upload_preset", "w8omhp4w");

        const response = await axiosInstance.patch(
          `/users/${login?.user?.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${login?.accessToken}`,
            },
          }
        );
        if (response?.status === 200) {
          toast.success("Profile Updated Successful!");
          route.push("/profile");
        }
      } catch (error) {
        console.log(error);
        toast.error("Profile Update Error!");
      }
    }
  };

  useEffect(() => {
    if (login) {
      setAddress(login.user.address as string);
      setCity(login.user.city as string);
      setMobile(login.user.mobile as string);
      setName(login.user.name as string);
      setEmail(login.user.email);
    }
  }, [login?.user]);

  return (
    <>
      {isLoggedIn ? (
        <section className="profile">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="sidebar  md:col-span-3  px-1">
                <span className="md:hidden">
                  <FaBars />
                </span>
                <div className="items">
                  <ProfileSidebar />
                </div>
              </div>
              <div className=" col-span-12 md:col-span-9">
                <div className="main-area p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <FormGroup
                        title="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <FormGroup
                        title="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      <FormGroup
                        title="Photo"
                        type="file"
                        onChange={(e: any) => setImage(e.target.files[0])}
                      />
                      <FormGroup
                        title="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <FormGroup
                        title="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                      <FormGroup
                        title="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <FormGroup
                        type="password"
                        title="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <FormGroup
                        type="password"
                        title="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>

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
