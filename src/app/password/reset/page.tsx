'use client';
import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import './page.scss';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { API_URL } from '@/constant';
import { toast } from 'react-toastify';

function ResetPassword() {
  const [mobile, setMobile] = useState('');

  const handleReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, status } = await axios.post(`${API_URL}/auths/reset`, {
        user_name: mobile,
      });
      if (status === 200) {
        setMobile('');
        toast.success(data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
      console.log('reset Error' + error);
    }
  };

  return (
    <main>
      <section className="flex justify-center items-center forget-page">
        <div className="md:w-[400px] w-[95%] forget-area px-4 py-6 ">
          <h2 className=" font-gotham font-normal text-xl text-black">
            Forgot Password?
          </h2>
          <p className="font-gotham font-light text-sm text-black mt-2">
            Enter your mobile number to recover your password.
          </p>
          <form onSubmit={handleReset}>
            <FormGroup
              className="mt-2 "
              type="text"
              title="Mobile Number*"
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
