import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IBlog {
  id: string;
  image: string;
  title: string;
  postTime: string;
  description?: string;
}

interface IProps {
  blog: IBlog;
}

const BlogSideCard: FC<IProps> = ({ blog }) => {
  return (
    <div className="flex mb-3 p-2 shadow">
      <div className="w-[25%] mr-2">
        <Image
          className="w-full"
          src={blog.image}
          width={100}
          height={100}
          alt="blog"
        />
      </div>
      <div className="text w-3/4">
        <Link href={`/blogs/${blog.id}`}>
          <h4 className=" font-gotham  font-normal text-base text-black">
            {blog.title}
          </h4>
        </Link>

        <div className="flex justify-between items-center">
          <p className="font-gotham font-normal text-xs text-black">
            Publish in
          </p>
          <p className="font-gotham font-normal text-xs mt-2 text-black">
            {blog.postTime}
          </p>
        </div>
        <Link
          className="font-gotham font-normal text-xs mt-2 text-primary"
          href={`/blogs/${blog.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogSideCard;
