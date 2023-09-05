import Image from 'next/image';
import { FC } from 'react';
import Button from '../button';
import './index.scss';

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
    <div className={`shadow ${className}`}>
      <div className="image">
        <Image
          className=" w-full object-cover"
          src={blog.image}
          width={300}
          height={400}
          alt="gazi blog"
        />
      </div>
      <div className="text p-3">
        <h3 className="font-bold font-gotham text-base text-primary">
          {blog.title}
        </h3>
        <div className="flex justify-between">
          <Button>Read more...</Button>
          <div>
            <span className=" font-gotham font-normal italic text-[10px]">
              Update on 30th July 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
