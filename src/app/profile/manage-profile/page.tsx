"use client";
import Button from "@/components/button";
import FormGroup from "@/components/fromgroup";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/axiosInstance";
import { AxiosError } from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { API_ROOT } from "@/constant";

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
  const [errors, setErrors] = useState<any>({});
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push("/login");
    }
  }, [login, route]);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (login) {
      if (password !== confirmPassword) {
        toast.error("Password didn't match");
        return;
      }
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append(
          "mobile",
          mobile.startsWith("+88") ? mobile.split("+88")[1] : mobile
        );
        formData.append("city", city);
        formData.append("password", password);
        formData.append("address", address);
        formData.append("email", email);
        if (image) {
          formData.append("image", image);
        }

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
          toast.success("Profile Updated Successfully!");
          route.push("/profile");
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrors(error.response?.data?.errors);
        }
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
      setImagePreview(login.user.image || null); // Assuming user has a profile image
    }
  }, [login?.user]);

  return (
    <>
      {isLoggedIn ? (
        <section className="min-h-screen py-12 bg-gray-100">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-semibold font-gotham text-center mb-8">
                  Edit Your Profile
                </h2>

                {/* Profile Picture Section */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <label htmlFor="profileImage" className="cursor-pointer">
                      {imagePreview ? (
                        <Image
                          src={`${API_ROOT}/images/user/${imagePreview}`}
                          alt="Profile Picture"
                          width={150}
                          height={150}
                          className="rounded-3xl border-2 border-gray-300 shadow-sm"
                        />
                      ) : (
                        <FaUserCircle className="text-gray-400 text-8xl" />
                      )}
                    </label>
                    <input
                      id="profileImage"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <FormGroup
                        title="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <FormGroup
                        title="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      {errors.mobile && (
                        <p className="text-sm text-red-500">{errors.mobile}</p>
                      )}
                    </div>

                    <div>
                      <FormGroup
                        title="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                        <FormGroup
                          title="Photo"
                          type="file"
                          onChange={(e: any) => setImage(e.target.files[0])}
                        />
                        <p className="text-sm text-red-500 mt-1">
                          {errors.image}
                        </p>
                      </div>

                    <div>
                      <FormGroup
                        title="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      {errors.city && (
                        <p className="text-sm text-red-500">{errors.city}</p>
                      )}
                    </div>



                    <div>
                      <FormGroup
                        title="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <div className="relative">
                      <FormGroup
                        type={isShowPass ? "text" : "password"}
                        title="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div
                        onClick={() => setIsShowPass(!isShowPass)}
                        className="absolute inset-y-0 right-4 top-10 cursor-pointer"
                      >
                        {isShowPass ? <IoMdEyeOff /> : <IoMdEye />}
                      </div>
                    </div>

                    <div className="relative">
                      <FormGroup
                        type={isShowConfirm ? "text" : "password"}
                        title="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <div
                        onClick={() => setIsShowConfirm(!isShowConfirm)}
                        className="absolute inset-y-0 right-4 top-10 cursor-pointer"
                      >
                        {isShowConfirm ? <IoMdEyeOff /> : <IoMdEye />}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Save Changes
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

export default UpdateProfile;
