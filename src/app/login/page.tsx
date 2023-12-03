'use client';

import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { RiArrowDropRightLine } from 'react-icons/ri';
import './page.scss';;
import axios from '../../lib/axios';
import { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleLogin = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auths/login', {
        email: email,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Login successful');
      router.push('/profile');
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <main>
      <section className=" hidden md:block">
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/login'}> Login </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center login-page">
        <div className="w-[400px] login-area px-4 py-6 ">
          <h2 className=" font-gotham font-normal text-xl text-black">
            Account Login
          </h2>
          <form onSubmit={handleLogin}>
            <FormGroup
              className="mt-2 "
              type="email"
              title="E-Mail*"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormGroup
              type="password"
              className="mt-2"
              title="Password*"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-3 flex justify-between items-center">
              <div className="flex">
                <input type="checkbox" name="check" id="check" />
                <label
                  className="font-gotham font-normal text-sm text-black ml-1"
                  htmlFor="check"
                >
                  Remember Me
                </label>
              </div>
              <div>
                <Link
                  className="font-gotham font-normal text-sm text-black hover:text-primary"
                  href={'/password/reset'}
                >
                  Forget Password
                </Link>
              </div>
            </div>
            <Button className="w-full py-1 mt-3 font-gotham font-normal text-base">
              Login
            </Button>
          </form>
          <h3 className="font-gotham font-normal text-sm text-black my-2 text-center relative auth-border">
            {`Don't`} have an account?
          </h3>
          <Link
            className="w-full inline-block text-center py-1 mt-3 register-outline  font-gotham font-normal text-base"
            href={'/register'}
          >
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
