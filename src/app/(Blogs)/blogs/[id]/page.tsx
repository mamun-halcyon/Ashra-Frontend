import { BlogData } from '@/static/BlogData';
import Image from 'next/image';
import './page.scss';
import BlogSideCard from '@/components/blog-side-card';

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const data = BlogData.filter((blog) => blog.id === params.id);
  const blogData = data[0];
  return (
    <section className="blog-details mt-5">
      <div className="container">
        <div className="grid grid-cols-6 gap-6">
          <div className=" col-span-4">
            <div className="shadow">
              <Image
                className="w-full"
                src={blogData.image}
                width={600}
                height={600}
                alt="blog"
              />
              <div className="border-area p-4">
                <h2 className="font-gotham font-bold text-base text-black">
                  {blogData.title}
                </h2>
                <div className="flex justify-between">
                  <div>Icon</div>
                  <div>28 Aug 2023</div>
                </div>
              </div>
              <div>
                <div
                  className="font-gotham font-normal text-xs mt-3"
                  dangerouslySetInnerHTML={{
                    __html: blogData.description ?? '',
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" col-span-2">
            <h2 className="font-gotham font-normal text-xl  text-black">
              Popular Blogs
              <div className="mt-3 more-blog">
                {BlogData.map((blog, index) => (
                  <BlogSideCard blog={blog} key={index} />
                ))}
              </div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
