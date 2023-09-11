import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import Link from 'next/link';
import React from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './page.scss';

function Login() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/register'}> Register </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center register">
        <div className="w-[470px] register-area p-8">
          <h2 className=" font-gotham font-normal text-xl text-black">
            Create an Account
          </h2>
          <form>
            <FormGroup
              className="mt-2"
              title="Full Name*"
              placeholder="Full Name"
              required
            />
            <FormGroup
              className="mt-2"
              type="email"
              title="E-Mail*"
              placeholder="Your Email"
              required
            />
            <FormGroup
              className="mt-2"
              title="Mobile (optional)"
              placeholder="Mobile Number"
            />
            <FormGroup
              type="password"
              className="mt-2"
              title="Password*"
              placeholder="Enter Password"
              required
            />
            <Button className="w-full py-1 mt-3 font-gotham font-normal text-base">
              Register
            </Button>
          </form>
          <h3 className="font-gotham font-normal text-sm text-black my-2 text-center relative auth-border">
            Already have an account?
          </h3>
          <h3 className="font-gotham font-normal text-sm text-black">
            If you already have an account with us, please login at the{' '}
            <Link className="text-primary" href={'/login'}>
              login page
            </Link>
            .
          </h3>
        </div>
      </section>
    </main>
  );
}

export default Login;
