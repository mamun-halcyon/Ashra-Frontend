import Image from 'next/image';
import { FC } from 'react';
import Button from '../button';
import './index.scss';
import Link from 'next/link';
import { IBlog } from '@/types/blog';

interface IProps {
  blog: IBlog;
  className?: string;
}

const BlogCard: FC<IProps> = ({ className, blog }) => {
  return (
    <div className={`shadow hover:shadow-md ${className}`}>
      <div className="image">
        <Link href={`/blogs/${blog.id}`}>
          <Image
            className=" w-full object-cover"
            src={`${process.env.API_ROOT}/images/blog/${blog.image}`}
            width={300}
            height={400}
            alt="gazi blog"
          />
        </Link>
      </div>
      <div className="text p-3">
        <h3 className="font-bold font-gotham text-[15px] text-black">
          {blog.title}
        </h3>
        <div className="flex justify-between mt-8">
          <Link href={`/blogs/${blog.slug}`}>
            <Button className="px-2 py-1 font-gotham font-normal text-xs">
              Read more...
            </Button>
          </Link>

          <div>
            <span className=" font-gotham font-normal italic text-[10px] blog-time">
              Update on 30th July 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
