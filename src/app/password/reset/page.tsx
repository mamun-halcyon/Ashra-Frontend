"use client";
import Button from "@/components/button";
import FormGroup from "@/components/fromgroup";
import { API_URL } from "@/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "./page.scss";

function ResetPassword() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");

  const handleReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, status } = await axios.post(`${API_URL}/auths/reset`, {
        user_name: mobile,
      });
      if (status === 200) {
        setMobile("");
        toast.success(data.message);
        router.push("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
      console.log("reset Error" + error);
    }
  };

  return (
    <main>
      <section className="flex justify-center items-center forget-page">
        <div className="md:w-[400px] w-[95%] forget-area px-4 py-6 ">
          <h2 className=" font-gotham font-normal text-xl black-text">
            Forget Password?
          </h2>
          <p className="font-gotham font-light text-sm black-text mt-2">
            Please Enter Your Phone Number Below & Set New Password.
          </p>
          <form onSubmit={handleReset}>
            <FormGroup
              className="mt-2 "
              type="text"
              placeholder="Your Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            <Button className="w-full py-1 mt-3 font-gotham font-normal text-base forget-button">
              Reset Password
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ResetPassword;
