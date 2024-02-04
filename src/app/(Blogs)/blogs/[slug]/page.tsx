import dynamic from "next/dynamic";
import Button from "@/components/button";
import { formatDate } from "@/components/dateformate";
import FormGroup from "@/components/fromgroup";
import TextAreaGroup from "@/components/textarea";
import { API_ROOT, API_URL } from "@/constant";
import { IBlog, IResponseBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import "./page.scss";
const BlogSideCard = dynamic(import("@/components/blog-side-card"));

type Props = {
  params: {
    slug: string;
  };
};
type IResponse = {
  data: IBlog;
};

async function getBlog(slug: string) {
  const res = await fetch(`${API_URL}/frontend/blogs/${slug} `, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

async function popularBlogs() {
  const url = `${API_URL}/frontend/blogs?limit=10&page=1`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
}
const BlogDetails = async ({ params: { slug } }: Props) => {
  const blogData: IResponse = await getBlog(slug);
  const popular: IResponseBlog = await popularBlogs();
  console.log(popular?.data?.rows);

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
                          <Link
                            href={`https://web.facebook.com/sharer/sharer.php?u=https://gazi-frontend.vercel.app/blogs/Gas-Stove-Beboharer-Sothik-Niyomaboli`}
                            target="_blank"
                          >
                            <BiLogoFacebook />
                          </Link>
                        </div>
                        <div className="social-item flex justify-center items-center mr-1">
                          <Link href={"/"}>
                            <FiInstagram />
                          </Link>
                        </div>
                        <div className="social-item flex justify-center items-center mr-1">
                          <Link
                            href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                              `${process.env.NEXT_PUBLIC_DOMAIN}/blogs/${blogData.data.slug}`
                            )}`}
                            target="_blank"
                          >
                            <BiLogoLinkedin />
                          </Link>
                        </div>
                        <div className="social-item flex justify-center items-center mr-1">
                          <Link
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                              `${process.env.NEXT_PUBLIC_DOMAIN}/blogs/${blogData.data.slug}`
                            )}`}
                            target="_blank"
                          >
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
                      __html: blogData.data.description ?? "",
                    }}
                  />
                </div>
              </div>
              <div className="shadow mt-5 p-4">
                <h3 className=" font-gotham font-normal text-base text-black mb-3">
                  Write a comment
                </h3>
                <div>
                  <form>
                    <div className="grid grid-cols-2 gap-4">
                      <FormGroup title="Name" className="mb-2 " required />
                      <FormGroup title="Email" className=" mb-2" required />
                    </div>
                    <TextAreaGroup title="Your Comment" required />

                    <Button
                      type="submit"
                      className="px-3 py-1 font-gotham font-normal text-sm mt-2"
                    >
                      Summit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          }
          <div className=" col-span-6 md:col-span-2">
            <h2 className="font-gotham font-normal text-xl  text-black">
              Popular Blogs
            </h2>
            <div className="mt-3 more-blog">
              {popular?.data?.rows.map((blog, index) => (
                <div key={index} className="flex mb-3 p-2 shadow">
                  <div className="w-[25%] mr-2">
                    <Image
                      className="w-full"
                      src={`${API_ROOT}/images/blog/${blog.image}`}
                      width={100}
                      height={100}
                      alt="blog"
                    />
                  </div>
                  <div className="text w-3/4">
                    <Link href={`/blogs/${blog.slug}`}>
                      <h4 className=" font-gotham  font-normal text-base text-black">
                        {blog.title}
                      </h4>
                    </Link>

                    <div className="flex justify-between items-center">
                      <p className="font-gotham font-normal text-xs text-black">
                        Publish in
                      </p>
                      <p className="font-gotham font-normal text-xs mt-2 text-black">
                        {formatDate(blog.created_at)}
                      </p>
                    </div>
                    <Link
                      className="font-gotham font-normal text-xs mt-2 text-primary"
                      href={`/blogs/${blog.slug}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
