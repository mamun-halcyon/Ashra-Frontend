import Image from 'next/image';
import { FC } from 'react';
import Button from '../button';
import './index.scss';
import Link from 'next/link';

type Blog = {
  id: string;
  image: string;
  title: string;
  postTime: string;
};

interface IProps {
  blog: Blog;
  className?: string;
}

const BlogCard: FC<IProps> = ({ className, blog }) => {
  return (
    <div className={`shadow hover:shadow-md ${className}`}>
      <div className="image">
        <Link href={`/blogs/${blog.id}`}>
          <Image
            className=" w-full object-cover"
            src={blog.image}
            width={300}
            height={400}
            alt="gazi blog"
          />
        </Link>
      </div>
      <div className="text p-3">
        <h3 className="font-bold font-gotham text-sm text-black">
          {blog.title}
        </h3>
        <div className="flex justify-between mt-8">
          <Link href={`/blogs/${blog.id}`}>
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
