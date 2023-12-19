'use client';
import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './page.scss';
import axios from '../../lib/axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { saveLoginInfo } from '@/redux/features/login/loginSlice';
import { API_URL } from '@/constant';
import { setWishList } from '@/redux/features/wish-list/wishListSlice';

function Login() {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (login?.accessToken) {
      route.push('/profile');
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
        const response = await axios.get(`${API_URL}/customers/wishlists`, {
          headers: {
            Authorization: `Bearer ${login?.accessToken}`,
          },
        });
        if (response.status == 200) {
          dispatch(setWishList(response?.data));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response: any = await axios.post(`${API_URL}/auths/login`, {
        user_name: email,
        password: password,
      });
      dispatch(saveLoginInfo(response.data));
      toast.success('Successfull Login!');

      router.push('/profile');
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
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
                  type="text"
                  title="Email/Mobile*"
                  placeholder="Your Email or Mobile"
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
      ) : (
        <></>
      )}
    </>
  );
}

export default Login;
