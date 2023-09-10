import dynamic from 'next/dynamic';
const BlogCard = dynamic(() => import('@/components/blog-card'));
import { BlogData } from '@/static/BlogData';
import Link from 'next/link';
import React from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './page.scss';

function Blogs() {
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

      <section className="blog">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            {BlogData.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blogs;
