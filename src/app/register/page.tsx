"use client";
import Button from "@/components/button";
import FormGroup from "@/components/fromgroup";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "./page.scss";
import { API_URL } from "@/constant";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";

function Login() {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (login?.accessToken) {
      route.push("/profile");
    } else {
      setIsLoggedIn(false);
    }
  }, [login]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      mobile.trim() !== "" &&
      password.trim() !== ""
    ) {
      try {
        const response = await axios.post(`${API_URL}/users`, {
          name: fullName,
          email: email,
          mobile: mobile,
          password: password,
          role_id: 1,
        });
        if (response.status === 201) {
          toast.success("Registration Success!");
          route.push("/login");
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Registration Error!");
      }
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <main>
          <section className="md:block hidden">
            <div className="container">
              <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
                <Link href={"/"}>Home</Link>
                <RiArrowDropRightLine className=" text-xl" />
                <Link href={"/register"}> Register </Link>
              </div>
            </div>
          </section>
          <section className="flex justify-center items-center register">
            <div className="md:w-[470px] w-[400px] register-area p-8">
              <h2 className=" font-gotham font-normal text-xl text-black">
                Create an Account
              </h2>
              <form onSubmit={handleLogin}>
                <FormGroup
                  className="mt-2"
                  title="Full Name*"
                  placeholder="Full Name"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
                <FormGroup
                  className="mt-2"
                  type="email"
                  title="E-Mail*"
                  placeholder="Your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormGroup
                  className="mt-2"
                  title="Mobile *"
                  placeholder="Mobile Number"
                  required
                  onChange={(e) => setMobile(e.target.value)}
                />
                <FormGroup
                  type="password"
                  className="mt-2"
                  title="Password*"
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="w-full py-1 mt-3 font-gotham font-normal text-base">
                  Register
                </Button>
              </form>
              <h3 className="font-gotham font-normal text-sm text-black my-2 text-center relative auth-border">
                Already have an account?
              </h3>
              <h3 className="font-gotham font-normal text-sm text-black">
                If you already have an account with us, please login at the{" "}
                <Link className="text-primary" href={"/login"}>
                  login page
                </Link>
                .
              </h3>
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
