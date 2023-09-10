import Link from 'next/link';
import React from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';

function Login() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/blogs'}> Blogs </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="w">
          <h2>Login to your account.</h2>
        </div>
      </section>
    </main>
  );
}

export default Login;
