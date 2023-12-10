import { BlogData } from '@/static/BlogData';
import Image from 'next/image';
import './page.scss';
import BlogSideCard from '@/components/blog-side-card';
import { BiLogoFacebook } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
import Link from 'next/link';
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import FormGroup from '@/components/fromgroup';
import TextAreaGroup from '@/components/textarea';
import Button from '@/components/button';
import { IBlog, IResponseBlog } from '@/types/blog';
import { formatDate } from '@/components/dateformate';
import { API_ROOT, API_URL } from '@/constant';

type Props = {
  params: {
    slug: string;
  };
};
type IResponse = {
  data: IBlog;
};

async function getBlog(slug: string) {
  const res = await fetch(`${API_URL}/frontend/blogs/${slug} `);
  const data = await res.json();
  return data;
}
async function popularBlogs() {
  const url = `${API_URL}/frontend/blogs?limit=10&page=1`;
  const res = await fetch(url, {cache: 'no-store' });
  const data = await res.json();
  return data;
}
const BlogDetails = async ({ params: { slug } }: Props) => {
  const blogData: IResponse = await getBlog(slug);
  const popular: IResponseBlog = await popularBlogs();

  return (
    <section className="blog-details mt-5">
      <div className="container px-2 md:px-0">
        <div className="grid grid-cols-6 gap-6">
          {
            <div className=" col-span-6 md:col-span-4">
              <div className="shadow">
                <Image
                  className="w-full"
                  src={`${API_ROOT}/images/blog/${blogData.data?.image}`}
                  width={600}
                  height={600}
                  alt="blog"
                />
                <div className=" p-4">
                  <div className="border-area">
                    <h2 className="font-gotham font-bold text-base text-black">
                      {blogData.data.title}
                    </h2>
                    <div className="flex justify-between py-2 social">
                      <div className="flex">
                        <div className="social-item flex justify-center items-center mr-1">
                          <Link href={'/'}>
                            <BiLogoFacebook />
                          </Link>
                        </div>
                        <div className="social-item flex justify-center items-center mr-1">
                          <Link href={'/'}>
                            <FiInstagram />
                          </Link>
                        </div>
                        <div className="social-item flex justify-center items-center mr-1">
                          <Link href={'/'}>
                            <BiLogoLinkedin />
                          </Link>
                        </div>
                        <div className="social-item flex justify-center items-center mr-1">
                          <Link href={'/'}>
                            <AiOutlineTwitter />
                          </Link>
                        </div>
                      </div>
                      <div className="font-gotham font-normal text-xs text-black">
                        {formatDate(blogData.data.created_at)}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="font-gotham font-normal text-xs px-4 pb-4"
                    dangerouslySetInnerHTML={{
                      __html: blogData.data.description ?? '',
                    }}
                  />
                </div>
              </div>
              <div className="shadow mt-5 p-4">
                <h3 className=" font-gotham font-normal text-base text-black mb-3">
                  Write a comment
                </h3>
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <FormGroup title="Name" className="mb-2 " />
                    <FormGroup title="Email" className=" mb-2" />
                  </div>
                  <TextAreaGroup title="Your Comment" />

                  <Button
                    type="submit"
                    className="px-3 py-1 font-gotham font-normal text-sm mt-2"
                  >
                    Summit
                  </Button>
                </form>
              </div>
            </div>
          }
          <div className=" col-span-6 md:col-span-2">
            <h2 className="font-gotham font-normal text-xl  text-black">
              Popular Blogs
              <div className="mt-3 more-blog">
                {popular.data.rows.map((blog, index) => (
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
