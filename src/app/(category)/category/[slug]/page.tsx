import Link from 'next/link';
import React from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';

function Category() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-5">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/bathware'}> Home Appliance </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Category;
