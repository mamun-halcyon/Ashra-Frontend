"use client";
import Button from "@/components/button";
import FormGroup from "@/components/fromgroup";
import { API_URL } from "@/constant";
import { saveLoginInfo } from "@/redux/features/login/loginSlice";
import { setWishList } from "@/redux/features/wish-list/wishListSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";
import axios from "../../lib/axios";
import "./page.scss";
import { FaLock, FaLockOpen } from "react-icons/fa";

function Login() {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false)
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (login?.accessToken) {
      route.push("/profile");
    } else {
      setIsLoggedIn(false);
    }
  }, [login]);

  useEffect(() => {
    getWishListItems();
  }, [login?.accessToken]);

  const getWishListItems = async () => {
    if (login?.accessToken) {
      try {
        const response = await axiosInstance.get(`/customers/wishlists`, {
          headers: {
            Authorization: `Bearer ${login?.accessToken}`,
          },
        });
        if (response.status == 200) {
          dispatch(setWishList(response?.data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response: any = await axios.post(`${API_URL}/auths/login`, {
        user_name: email.startsWith("+88") ? email.split("+88")[1] : email,
        password: password,
      });
      dispatch(saveLoginInfo(response.data));
      toast.success("Login Successful!");

      router.push("/profile");
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        setError(error?.response?.data?.message);
      }
      console.error("Login error:", error);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <main>
          <section className=" hidden md:block">
            <div className="container">
              <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
                <Link href={"/"}>Home</Link>
                <RiArrowDropRightLine className=" text-xl" />
                <Link href={"/login"}> Login </Link>
              </div>
            </div>
          </section>
          <section className="flex justify-center items-center login-page">
            <div className="md:w-[400px] w-[95%] login-area px-4 py-6 ">
              <h2 className=" font-gotham font-normal text-xl black-text">
                Account Login
              </h2>
              <form onSubmit={handleLogin}>
                <FormGroup
                  className="mt-2 "
                  type="text"
                  title="Email/Mobile*"
                  placeholder="Your Email or Mobile"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <FormGroup
                  type={isPasswordShow ? "text" : "password"}
                  className="mt-2"
                  title="Password*"
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <div onClick={() => setIsPasswordShow(!isPasswordShow)} className="children">
                    {
                      !isPasswordShow ? <FaLock /> : <FaLockOpen />
                    }
                  </div>
                </FormGroup>

                <div className="mt-3 flex justify-between items-center">
                  <div className="flex">
                    <input type="checkbox" name="check" id="check" />
                    <label
                      className="font-gotham font-normal text-sm black-text ml-1"
                      htmlFor="check"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <Link
                      className="font-gotham font-normal text-sm black-text primary-hover"
                      href={"/password/reset"}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <Button className="w-full py-1 mt-3 font-gotham font-normal text-base">
                  Login
                </Button>
              </form>
              <p className=" font-gotham text-xs warning pt-1">{error}</p>
              <h3 className="font-gotham font-normal text-sm black-text my-2 text-center relative auth-border">
                {`Don't`} Have An Account?
              </h3>
              <Link
                className="w-full inline-block text-center py-1 mt-3 register-outline  font-gotham font-normal text-base"
                href={"/register"}
              >
                Register Now
              </Link>
            </div>
          </section>
        </main>
      ) : (
        <></>
      )}
    </>
  );
}

export default Login;
